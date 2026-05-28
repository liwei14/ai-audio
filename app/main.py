from __future__ import annotations
import logging
import os
from pathlib import Path
import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, File, Form, HTTPException, UploadFile
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

load_dotenv()

API_BASE = "https://space.ai-builders.com/backend"
TOKEN = os.getenv("AI_BUILDER_TOKEN")
if not TOKEN:
    raise RuntimeError("AI_BUILDER_TOKEN missing — set it in .env")

logger = logging.getLogger("audio-demo")
logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s: %(message)s")

app = FastAPI(title="Audio Demo")
WEB_DIR = Path(__file__).resolve().parent.parent / "web"


def _auth_headers() -> dict[str, str]:
    return {"Authorization": f"Bearer {TOKEN}"}


def _passthrough(r: httpx.Response, route: str) -> JSONResponse:
    """Forward upstream response; log the body when status is non-2xx."""
    if r.status_code >= 400:
        logger.error(
            "[%s] upstream %s %s\n  body: %s",
            route, r.status_code, r.reason_phrase, r.text[:1000],
        )
    try:
        return JSONResponse(status_code=r.status_code, content=r.json())
    except Exception:
        body = r.text.strip()
        # Translate Starlette's naked "Internal Server Error" into something actionable
        if r.status_code == 500 and body.lower() == "internal server error":
            msg = (
                "Upstream returned a generic 500 with no detail. "
                "This usually means the upstream provider's backend itself crashed "
                "(for transcriptions_long that means their AssemblyAI integration). "
                "Try again later or contact the provider."
            )
            return JSONResponse(
                status_code=502,
                content={"error": msg, "upstream_status": 500, "upstream_body": body},
            )
        return JSONResponse(
            status_code=r.status_code,
            content={"error": body, "upstream_status": r.status_code},
        )


# ──────────────────────────────────────────────────────────────
# 1) Short audio transcription  (URL or file upload)
# ──────────────────────────────────────────────────────────────
@app.post("/api/transcribe")
async def transcribe(
    audio_url: str | None = Form(default=None),
    audio_file: UploadFile | None = File(default=None),
    language: str | None = Form(default=None),
    prompt: str | None = Form(default=None),
    terms: str | None = Form(default=None),
):
    """Proxy to /v1/audio/transcriptions. Supports either audio_url OR audio_file."""
    if not audio_url and not audio_file:
        raise HTTPException(400, "Provide either audio_url or audio_file")

    data = {k: v for k, v in {
        "audio_url": audio_url,
        "language": language,
        "prompt": prompt,
        "terms": terms,
    }.items() if v}

    files = None
    if audio_file is not None:
        files = {
            "audio_file": (
                audio_file.filename,
                await audio_file.read(),
                audio_file.content_type or "application/octet-stream",
            )
        }

    async with httpx.AsyncClient(timeout=120.0) as client:
        r = await client.post(
            f"{API_BASE}/v1/audio/transcriptions",
            data=data,
            files=files,
            headers=_auth_headers(),
        )

    return _passthrough(r, "transcribe")


# ──────────────────────────────────────────────────────────────
# 2) Long audio transcription with speaker labels
# ──────────────────────────────────────────────────────────────
@app.post("/api/transcribe_long")
async def transcribe_long(
    audio_url: str | None = Form(default=None),
    audio_file: UploadFile | None = File(default=None),
    language: str | None = Form(default=None),
    speaker_labels: bool = Form(default=True),
    disfluencies: bool = Form(default=False),
    audio_start_from: int | None = Form(default=None),
    audio_end_at: int | None = Form(default=None),
):
    """Proxy to /v1/audio/transcriptions_long. Backed by AssemblyAI upstream."""
    if not audio_url and not audio_file:
        raise HTTPException(400, "Provide either audio_url or audio_file")

    data: dict[str, str] = {
        "speaker_labels": "true" if speaker_labels else "false",
        "disfluencies": "true" if disfluencies else "false",
    }
    if audio_url:
        data["audio_url"] = audio_url
    if language:
        data["language"] = language
    if audio_start_from is not None:
        data["audio_start_from"] = str(audio_start_from)
    if audio_end_at is not None:
        data["audio_end_at"] = str(audio_end_at)

    files = None
    if audio_file is not None:
        files = {
            "audio_file": (
                audio_file.filename,
                await audio_file.read(),
                audio_file.content_type or "application/octet-stream",
            )
        }

    async with httpx.AsyncClient(timeout=600.0) as client:
        r = await client.post(
            f"{API_BASE}/v1/audio/transcriptions_long",
            data=data,
            files=files,
            headers=_auth_headers(),
        )

    return _passthrough(r, "transcribe_long")


@app.get("/api/transcribe_long/{job_id}")
async def transcribe_long_status(job_id: str):
    """Poll status of a long-running transcription job (if the API is async)."""
    async with httpx.AsyncClient(timeout=30.0) as client:
        r = await client.get(
            f"{API_BASE}/v1/audio/transcriptions_long/{job_id}",
            headers=_auth_headers(),
        )
    return _passthrough(r, "transcribe_long_status")


# ──────────────────────────────────────────────────────────────
# 3) Realtime websocket session
# ──────────────────────────────────────────────────────────────
class RealtimeSessionBody(BaseModel):
    language: str | None = "zh-CN"
    prompt: str | None = None
    terms: list[str] = []
    vad: bool = True
    silence_duration_ms: int = 1200


@app.post("/api/realtime/session")
async def realtime_session(body: RealtimeSessionBody):
    """Proxy to /v1/audio/realtime/sessions and rewrite ws_url to absolute wss://."""
    async with httpx.AsyncClient(timeout=30.0) as client:
        r = await client.post(
            f"{API_BASE}/v1/audio/realtime/sessions",
            json=body.model_dump(exclude_none=True),
            headers=_auth_headers(),
        )
    payload = r.json()
    if isinstance(payload, dict) and isinstance(payload.get("ws_url"), str) and payload["ws_url"].startswith("/"):
        payload["ws_url"] = "wss://space.ai-builders.com/backend" + payload["ws_url"]
    return JSONResponse(status_code=r.status_code, content=payload)


# ──────────────────────────────────────────────────────────────
# 4) Chat completion (used for optional translate / summarize)
# ──────────────────────────────────────────────────────────────
class ChatMessage(BaseModel):
    role: str
    content: str


class ChatBody(BaseModel):
    messages: list[ChatMessage]
    model: str = "supermind-agent-v1"
    temperature: float | None = None
    stream: bool = False


@app.post("/api/chat")
async def chat(body: ChatBody):
    """Proxy to /v1/chat/completions (defaults to supermind-agent-v1)."""
    async with httpx.AsyncClient(timeout=120.0) as client:
        r = await client.post(
            f"{API_BASE}/v1/chat/completions",
            json=body.model_dump(exclude_none=True),
            headers=_auth_headers(),
        )
    return _passthrough(r, "chat")


app.mount("/", StaticFiles(directory=WEB_DIR, html=True), name="web")
