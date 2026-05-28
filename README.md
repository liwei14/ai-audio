# AI Audio Demo

Three-in-one speech-to-text demo using AI Builder backend.

## Setup

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Edit `.env` and set your `AI_BUILDER_TOKEN`.

## Run

```bash
uvicorn app.main:app --reload --port 8000
```

Open http://localhost:8000

## Modes

1. **URL** — paste a public audio link
2. **File** — upload mp3/wav/flac/m4a
3. **Realtime** — speak via mic, see text appear live
