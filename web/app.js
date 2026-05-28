// ─────────────────────────────────────────────────────────────
// i18n: 中英文字典
// ─────────────────────────────────────────────────────────────
const I18N = {
  zh: {
    htmlLang: "zh-CN",
    toggleBtn: "EN",
    title: "李炜的音频助手 (v0.1)",
    subtitle: "实时麦克风 / 文件 / 长音频会议，统统搞定",

    tab_rt: "① 多语言实时麦克风",
    tab_file: "② 上传短音频",
    tab_long: "③ 长音频 / 多说话人",

    desc_rt:
      '支持实时多语言听写：点击下方<b>「开始录音」</b>，对着电脑麦克风讲话。说一小段、稍作停顿，文字就会一个字一个字流式出现。<span class="muted">黄色</span> 是正在吐字中的内容，<span class="muted-white">白色</span> 是这一句的定稿文本。把下面的「句子停顿判定」调小，反应会更快。',
    desc_file:
      "从本地选一个音频文件上传转写。文件越短、人声越清晰，结果越准。如果你的录音超过 5 分钟或包含多个说话人，建议使用第 ③ 个标签页。",
    desc_long:
      "适合 <b>会议、讲座、采访</b> 等较长录音（数十分钟到数小时）。系统会自动区分不同说话人，输出格式类似 <code>说话人 1：……  说话人 2：……</code>。从本地上传你的音频文件即可。",

    label_audio_lang: "音频语言",
    label_speak_lang: "主要语言",
    label_choose_file: "选择音频文件",
    label_silence_ms: "句子停顿判定（毫秒）",
    rt_silence_hint:
      '停顿超过这个时长就视作一句话结束，开始流式吐字。值越小越接近"边说边出"，但太小容易把一句话切成两段。建议 300–600ms。',

    btn_transcribe: "开始转录",
    btn_rt_start: "开始录音",
    btn_rt_stop: "停止",
    btn_copy: "复制",
    btn_copied: "✓ 已复制",

    addon_toggle: "转录完成后，自动用 AI 处理一遍",
    addon_desc:
      "勾选后，转录结果会被送进大模型，再得到一个二次产物（翻译 / 纪要 / 自定义任务）。实时模式下，每一句定稿后会立即处理。",
    addon_label_mode: "处理方式",
    addon_mode_translate_en: "翻译为英文",
    addon_mode_translate_zh: "翻译为中文",
    addon_mode_summary: "提取要点 / 会议纪要",
    addon_mode_custom: "自定义指令",
    addon_label_custom: "自定义指令（系统提示词）",
    addon_custom_placeholder: "例：把下面的内容改写成正式邮件",

    output_result: "转录结果",
    output_ai: "AI 处理结果",

    history_title: "历史任务",
    history_clear: "清空",
    history_desc: "最近的转录任务会自动保存在你浏览器本地。点击任意一条可查看完整内容。",
    history_empty: "暂无历史记录",
    history_delete: "删除",

    status_idle: "idle",

    auto_detect: "自动检测语言",

    alert_need_file: "请选择音频文件",
    alert_copy_failed: "复制失败",
    confirm_clear_history: "确认清空所有历史记录？",

    msg_transcribing: "正在转录…",
    msg_uploading: "正在上传并转录…",
    msg_submitting_long: "正在提交长音频任务…",
    msg_long_submitted: "任务已提交（id={0}），处理中，请耐心等待…",
    msg_long_processing: "处理中：{0}{1}",
    msg_done: "完成",
    msg_request_failed: "请求失败：",
    msg_job_failed: "任务失败：",
    msg_timeout: "等待超时",

    rt_requesting_session: "申请会话…",
    rt_connecting_ws: "连接 WebSocket…",
    rt_requesting_mic: "请求麦克风…",
    rt_recording: "录音中…",
    rt_session_ready: "会话就绪，开始说话…",
    rt_speech_detected: "检测到说话…",
    rt_finalizing: "整理中…",
    rt_error_prefix: "错误：",
    rt_failed_prefix: "失败：",
    rt_ws_error: "WebSocket 错误",
    rt_ws_disconnected: "已断开",
    rt_ws_url_missing: "拿不到 ws_url：",

    ai_processing: "AI 处理中…",
    ai_failed_prefix: "AI 处理失败：",
    ai_line_failed: "AI 失败：",
    ai_no_return: "（无返回）",
    ai_not_done: "（未完成）",

    ai_title_translate_en: "AI 处理结果 · 英文翻译",
    ai_title_translate_zh: "AI 处理结果 · 中文翻译",
    ai_title_summary: "AI 处理结果 · 要点 / 纪要",
    ai_title_custom: "AI 处理结果 · 自定义",
    ai_title_default: "AI 处理结果",

    mode_url: "音频链接",
    mode_file: "文件上传",
    mode_realtime: "实时麦克风",
    mode_long: "长音频",

    speaker_prefix: "说话人",
  },

  en: {
    htmlLang: "en",
    toggleBtn: "中文",
    title: "Hugo's audio assistant (v0.1)",
    subtitle: "Live mic · File · Long meetings — all in one place",

    tab_rt: "① Multilingual live mic",
    tab_file: "② Upload short audio",
    tab_long: "③ Long audio / Multi-speaker",

    desc_rt:
      'Supports real-time multilingual dictation: click <b>“Start recording”</b> below and speak into your mic. After a short pause, text streams out character-by-character. <span class="muted">Yellow</span> is the in-progress stream; <span class="muted-white">white</span> is each finalized sentence. Lower the "End-of-sentence pause" slider below for a snappier feel.',
    desc_file:
      "Pick a local audio file to upload and transcribe. Shorter files with clearer voices produce better results. For recordings longer than 5 minutes or with multiple speakers, use tab ③.",
    desc_long:
      "Best for <b>meetings, lectures, interviews</b> and other long recordings (tens of minutes to hours). Speakers are separated automatically, with output like <code>Speaker 1: …  Speaker 2: …</code>. Just upload your local audio file.",

    label_audio_lang: "Audio language",
    label_speak_lang: "Primary language",
    label_choose_file: "Choose an audio file",
    label_silence_ms: "End-of-sentence pause (ms)",
    rt_silence_hint:
      'Any silence longer than this is treated as end-of-sentence and triggers streaming output. Smaller values feel more "live" but can split one sentence in two. 300–600ms recommended.',

    btn_transcribe: "Start transcribing",
    btn_rt_start: "Start recording",
    btn_rt_stop: "Stop",
    btn_copy: "Copy",
    btn_copied: "✓ Copied",

    addon_toggle: "Run AI on the transcript when it’s done",
    addon_desc:
      "When checked, the transcript is sent to a large model to produce a second output (translation / summary / custom task). In realtime mode, each finalized sentence is processed immediately.",
    addon_label_mode: "Processing mode",
    addon_mode_translate_en: "Translate to English",
    addon_mode_translate_zh: "Translate to Chinese",
    addon_mode_summary: "Summary / Meeting notes",
    addon_mode_custom: "Custom prompt",
    addon_label_custom: "Custom instruction (system prompt)",
    addon_custom_placeholder: "e.g. Rewrite the following as a formal email",

    output_result: "Transcription",
    output_ai: "AI output",

    history_title: "History",
    history_clear: "Clear",
    history_desc: "Recent transcriptions are saved locally in your browser. Click any item to view it.",
    history_empty: "No history yet",
    history_delete: "Delete",

    status_idle: "idle",

    auto_detect: "Auto detect",

    alert_need_file: "Please choose an audio file",
    alert_copy_failed: "Copy failed",
    confirm_clear_history: "Clear all history?",

    msg_transcribing: "Transcribing…",
    msg_uploading: "Uploading and transcribing…",
    msg_submitting_long: "Submitting long-audio job…",
    msg_long_submitted: "Job submitted (id={0}), processing — please wait…",
    msg_long_processing: "Processing: {0}{1}",
    msg_done: "Done",
    msg_request_failed: "Request failed: ",
    msg_job_failed: "Job failed: ",
    msg_timeout: "Timed out",

    rt_requesting_session: "Requesting session…",
    rt_connecting_ws: "Connecting WebSocket…",
    rt_requesting_mic: "Requesting microphone…",
    rt_recording: "Recording…",
    rt_session_ready: "Session ready, start speaking…",
    rt_speech_detected: "Speech detected…",
    rt_finalizing: "Finalizing…",
    rt_error_prefix: "Error: ",
    rt_failed_prefix: "Failed: ",
    rt_ws_error: "WebSocket error",
    rt_ws_disconnected: "Disconnected",
    rt_ws_url_missing: "ws_url missing: ",

    ai_processing: "AI processing…",
    ai_failed_prefix: "AI failed: ",
    ai_line_failed: "AI failed: ",
    ai_no_return: "(no response)",
    ai_not_done: "(not finished)",

    ai_title_translate_en: "AI output · English translation",
    ai_title_translate_zh: "AI output · Chinese translation",
    ai_title_summary: "AI output · Summary / Notes",
    ai_title_custom: "AI output · Custom",
    ai_title_default: "AI output",

    mode_url: "URL",
    mode_file: "File",
    mode_realtime: "Live mic",
    mode_long: "Long audio",

    speaker_prefix: "Speaker",
  },
};

let currentLang = localStorage.getItem("ui-lang") || "zh";
if (!I18N[currentLang]) currentLang = "zh";

function t(key, ...args) {
  let s = I18N[currentLang][key];
  if (s == null) s = I18N.zh[key] ?? key;
  args.forEach((arg, i) => (s = s.replace(`{${i}}`, arg)));
  return s;
}

// ─────────────────────────────────────────────────────────────
// 工具 & 全局引用
// ─────────────────────────────────────────────────────────────
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const resultEl = $("#result");
const aiResultEl = $("#aiResult");
const aiResultWrap = $("#aiResultWrap");
const aiResultTitle = $("#aiResultTitle");
const rtStatus = $("#rtStatus");
const longHint = $("#longHint");

function getLangOptions() {
  return [
    { value: "",      label: t("auto_detect") },
    { value: "zh-CN", label: "中文（简体） · zh-CN" },
    { value: "zh-TW", label: "中文（繁體） · zh-TW" },
    { value: "en-US", label: "English · en-US" },
    { value: "ja-JP", label: "日本語 · ja-JP" },
    { value: "ko-KR", label: "한국어 · ko-KR" },
    { value: "fr-FR", label: "Français · fr-FR" },
    { value: "de-DE", label: "Deutsch · de-DE" },
    { value: "es-ES", label: "Español · es-ES" },
  ];
}

function fillLangSelect(sel, defaultValue = "") {
  if (!sel) return;
  const previous = sel.value || defaultValue;
  sel.innerHTML = "";
  for (const opt of getLangOptions()) {
    const o = document.createElement("option");
    o.value = opt.value;
    o.textContent = opt.label;
    if (opt.value === previous) o.selected = true;
    sel.appendChild(o);
  }
}
function refillAllLangSelects() {
  fillLangSelect($("#fileLang"));
  fillLangSelect($("#rtLang"), "zh-CN");
  fillLangSelect($("#longLang"));
}

const escapeHtml = (s) =>
  String(s ?? "").replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
  );

const shortPreview = (s, n = 80) => {
  if (!s) return "";
  const flat = String(s).replace(/\s+/g, " ").trim();
  return flat.length > n ? flat.slice(0, n) + "…" : flat;
};

const fmtTime = (ts) => {
  const d = new Date(ts);
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

function setResultPlain(text) {
  resultEl.classList.remove("empty");
  resultEl.textContent = text || "";
  if (!text) resultEl.classList.add("empty");
}

function clearAiResult() {
  aiResultEl.textContent = "";
  aiResultWrap.hidden = true;
}

// ─────────────────────────────────────────────────────────────
// 应用 i18n
// ─────────────────────────────────────────────────────────────
function applyI18n() {
  const pack = I18N[currentLang];
  document.documentElement.lang = pack.htmlLang;
  document.title = pack.title;

  $$("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  $$("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  $$("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  $("#btnLang").textContent = pack.toggleBtn;

  refillAllLangSelects();

  if (rtStatus && (rtStatus.dataset.statusKey)) {
    rtStatus.textContent = t(rtStatus.dataset.statusKey);
  } else if (rtStatus && !rtStatus.textContent.trim()) {
    rtStatus.textContent = t("status_idle");
  }

  renderHistory();

  // 重新渲染当前显示（说话人前缀 / 实时双行 等可能依赖语言）
  if (currentView.type === "speakers") {
    renderSpeakers(currentView.segments);
  } else if (currentView.type === "realtime") {
    renderRealtime();
  }
}

$("#btnLang").addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  localStorage.setItem("ui-lang", currentLang);
  applyI18n();
});

// ─────────────────────────────────────────────────────────────
// Tab 切换
// ─────────────────────────────────────────────────────────────
$$(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    $$(".tab").forEach((t) => t.classList.remove("active"));
    $$(".panel").forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    $(`#panel-${tab.dataset.mode}`).classList.add("active");
  });
});

// ─────────────────────────────────────────────────────────────
// AI 处理（可选翻译 / 总结 / 自定义）
// ─────────────────────────────────────────────────────────────
const aiEnable = $("#aiEnable");
const aiPanel = $("#aiPanel");
const aiMode = $("#aiMode");
const aiCustomWrap = $("#aiCustomWrap");
const aiCustom = $("#aiCustom");

aiEnable.addEventListener("change", () => {
  aiPanel.hidden = !aiEnable.checked;
});
aiMode.addEventListener("change", () => {
  aiCustomWrap.hidden = aiMode.value !== "custom";
});

function buildAiPrompt(mode, customText) {
  switch (mode) {
    case "translate-en":
      return "You are a professional translator. Translate the following text into natural, fluent English. Output only the translation, no commentary.";
    case "translate-zh":
      return "你是一名专业翻译。请把下面这段内容翻译成自然流畅的简体中文，只输出翻译本身，不要解释。";
    case "summary":
      return currentLang === "en"
        ? "You are a meeting-notes assistant. Based on the transcript below, output: (1) a one-line summary; (2) key discussion points as bullets; (3) action items if any. Respond in English."
        : "你是一名会议纪要助理。请基于下面这段语音转录文本，输出：1）一句话概要；2）按要点列出关键讨论；3）如有，列出待办事项。使用简体中文。";
    case "custom":
      return (
        (customText || "").trim() ||
        (currentLang === "en"
          ? "Please organize the following content appropriately."
          : "请基于下面的内容做适当的整理。")
      );
  }
  return "";
}

function aiTitleKey(mode) {
  return {
    "translate-en": "ai_title_translate_en",
    "translate-zh": "ai_title_translate_zh",
    "summary": "ai_title_summary",
    "custom": "ai_title_custom",
  }[mode] || "ai_title_default";
}

async function runAi(text) {
  if (!aiEnable.checked || !text || !text.trim()) return null;
  const mode = aiMode.value;
  const systemPrompt = buildAiPrompt(mode, aiCustom.value);
  const titleKey = aiTitleKey(mode);
  aiResultTitle.dataset.titleKey = titleKey;
  aiResultTitle.textContent = t(titleKey);
  aiResultWrap.hidden = false;
  aiResultEl.textContent = t("ai_processing");
  try {
    const r = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "supermind-agent-v1",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: text },
        ],
      }),
    });
    const data = await r.json();
    const out = data?.choices?.[0]?.message?.content ?? data?.text ?? JSON.stringify(data, null, 2);
    aiResultEl.textContent = out;
    return { text: out, titleKey };
  } catch (err) {
    aiResultEl.textContent = t("ai_failed_prefix") + err.message;
    return null;
  }
}

// ─────────────────────────────────────────────────────────────
// 历史记录（localStorage）
// ─────────────────────────────────────────────────────────────
const HISTORY_KEY = "audio-demo-history-v1";
const HISTORY_MAX = 50;

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]"); }
  catch { return []; }
}
function saveHistory(list) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(0, HISTORY_MAX)));
}
function addHistory(entry) {
  const list = loadHistory();
  list.unshift({
    id: Date.now() + "-" + Math.random().toString(36).slice(2, 6),
    createdAt: Date.now(),
    ...entry,
  });
  saveHistory(list);
  renderHistory();
}
function deleteHistory(id) {
  saveHistory(loadHistory().filter((e) => e.id !== id));
  renderHistory();
}
function clearHistory() {
  if (!confirm(t("confirm_clear_history"))) return;
  saveHistory([]);
  renderHistory();
}

function modeLabel(m) {
  return t({ url: "mode_url", file: "mode_file", realtime: "mode_realtime", long: "mode_long" }[m] || "mode_url");
}

function renderHistory() {
  const list = loadHistory();
  const ul = $("#historyList");
  ul.innerHTML = "";
  if (!list.length) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = t("history_empty");
    ul.appendChild(li);
    return;
  }
  for (const e of list) {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="row1">
        <div>
          <span class="mode-tag">${escapeHtml(modeLabel(e.mode))}</span>
          ${e.input ? `<span class="time">${escapeHtml(shortPreview(e.input, 40))}</span>` : ""}
        </div>
        <div style="display:flex; gap:8px; align-items:center;">
          <span class="time">${fmtTime(e.createdAt)}</span>
          <button class="del" data-id="${e.id}" title="${escapeHtml(t("history_delete"))}">${escapeHtml(t("history_delete"))}</button>
        </div>
      </div>
      <div class="preview">${escapeHtml(shortPreview(e.text, 160))}</div>
    `;
    li.addEventListener("click", (ev) => {
      if (ev.target.matches(".del")) return;
      showHistoryItem(e);
    });
    li.querySelector(".del").addEventListener("click", (ev) => {
      ev.stopPropagation();
      deleteHistory(e.id);
    });
    ul.appendChild(li);
  }
}

function showHistoryItem(e) {
  if (e.segments) {
    renderSpeakers(e.segments);
  } else if (e.rtLines) {
    rtLines = e.rtLines.map((l) => ({ ...l }));
    currentPartial = "";
    renderRealtime();
  } else {
    currentView = { type: "plain" };
    setResultPlain(e.text || "");
  }
  if (e.aiText) {
    const key = e.aiTitleKey || "ai_title_default";
    aiResultTitle.dataset.titleKey = key;
    aiResultTitle.textContent = t(key);
    aiResultEl.textContent = e.aiText;
    aiResultWrap.hidden = false;
  } else {
    clearAiResult();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("#btnClearHistory").addEventListener("click", clearHistory);

// ─────────────────────────────────────────────────────────────
// 复制按钮
// ─────────────────────────────────────────────────────────────
async function copyText(text, btn) {
  try {
    await navigator.clipboard.writeText(text || "");
    const oldKey = btn.dataset.i18n;
    btn.textContent = t("btn_copied");
    setTimeout(() => {
      if (oldKey) btn.textContent = t(oldKey);
    }, 1200);
  } catch {
    alert(t("alert_copy_failed"));
  }
}
$("#btnCopy").addEventListener("click", (e) => copyText(resultEl.innerText, e.currentTarget));
$("#btnCopyAi").addEventListener("click", (e) => copyText(aiResultEl.innerText, e.currentTarget));

// ─────────────────────────────────────────────────────────────
// 当前视图状态（用于语言切换时重新渲染）
// ─────────────────────────────────────────────────────────────
let currentView = { type: "plain" };  // "plain" | "speakers" | "realtime"

// ─────────────────────────────────────────────────────────────
// 模式 ②：短音频文件 → /api/transcribe
// ─────────────────────────────────────────────────────────────
$("#btnFile").addEventListener("click", async () => {
  const f = $("#fileInput").files[0];
  if (!f) return alert(t("alert_need_file"));
  clearAiResult();
  currentView = { type: "plain" };
  setResultPlain(t("msg_uploading"));

  const fd = new FormData();
  fd.append("audio_file", f);
  const lang = $("#fileLang").value;
  if (lang) fd.append("language", lang);

  try {
    const r = await fetch("/api/transcribe", { method: "POST", body: fd });
    const data = await r.json();
    const text = data.text ?? JSON.stringify(data, null, 2);
    setResultPlain(text);

    let ai = null;
    if (aiEnable.checked) ai = await runAi(text);

    addHistory({
      mode: "file", input: f.name, language: lang, text,
      aiText: ai?.text || null, aiTitleKey: ai?.titleKey || null,
    });
  } catch (err) {
    setResultPlain(t("msg_request_failed") + err.message);
  }
});

// ─────────────────────────────────────────────────────────────
// 模式 ③：长音频文件 → /api/transcribe_long
// ─────────────────────────────────────────────────────────────
function normalizeSpeakerSegments(segments) {
  const speakers = {};
  let next = 1;
  return segments.map((seg) => {
    const sp = seg.speaker ?? seg.speaker_id ?? seg.spk ?? "?";
    if (!(sp in speakers)) speakers[sp] = next++;
    return { idx: speakers[sp], text: seg.text || "" };
  });
}

function renderSpeakers(segments) {
  currentView = { type: "speakers", segments };
  resultEl.classList.remove("empty");
  const normalized = normalizeSpeakerSegments(segments);
  const html = normalized.map((seg) => {
    const klass = seg.idx <= 5 ? `spk-${seg.idx}` : "spk-other";
    const tag = `${t("speaker_prefix")} ${seg.idx}`;
    return `<span class="speaker-line"><span class="speaker-tag ${klass}">${escapeHtml(tag)}</span>${escapeHtml(seg.text)}</span>`;
  }).join("");
  resultEl.innerHTML = html;
}

function flattenSegmentsToText(segments) {
  const normalized = normalizeSpeakerSegments(segments);
  return normalized.map((s) => `${t("speaker_prefix")} ${s.idx}: ${s.text}`).join("\n");
}

function extractSegments(data) {
  if (Array.isArray(data?.segments) && data.segments.length) return data.segments;
  if (Array.isArray(data?.utterances) && data.utterances.length) return data.utterances;
  if (Array.isArray(data?.results) && data.results.length && Array.isArray(data.results[0]?.segments))
    return data.results[0].segments;
  return null;
}

async function pollLongJob(jobId, onProgress) {
  const maxTries = 200;
  for (let i = 0; i < maxTries; i++) {
    await new Promise((r) => setTimeout(r, 3000));
    const res = await fetch(`/api/transcribe_long/${encodeURIComponent(jobId)}`);
    const data = await res.json();
    if (onProgress) onProgress(data, i);
    const status = (data.status || data.state || "").toLowerCase();
    if (data.text || extractSegments(data)) return data;
    if (["completed", "succeeded", "success", "done", "finished"].includes(status)) return data;
    if (["failed", "error", "cancelled", "canceled"].includes(status)) {
      throw new Error(t("msg_job_failed") + JSON.stringify(data));
    }
  }
  throw new Error(t("msg_timeout"));
}

$("#btnLong").addEventListener("click", async () => {
  const file = $("#longFile").files[0];
  if (!file) return alert(t("alert_need_file"));

  clearAiResult();
  currentView = { type: "plain" };
  setResultPlain(t("msg_submitting_long"));
  longHint.textContent = "";

  const fd = new FormData();
  fd.append("audio_file", file);
  const lang = $("#longLang").value;
  if (lang) fd.append("language", lang);

  try {
    const r = await fetch("/api/transcribe_long", { method: "POST", body: fd });
    let data = await r.json();

    const jobId = data.job_id || data.id || data.task_id;
    if (jobId && !data.text && !extractSegments(data)) {
      longHint.textContent = t("msg_long_submitted", jobId);
      data = await pollLongJob(jobId, (d) => {
        const st = d.status || d.state || "...";
        const pg = d.progress != null ? ` ${Math.round(d.progress * 100)}%` : "";
        longHint.textContent = t("msg_long_processing", st, pg);
      });
      longHint.textContent = t("msg_done");
    }

    const segments = extractSegments(data);
    let text;
    if (segments) {
      renderSpeakers(segments);
      text = flattenSegmentsToText(segments);
    } else {
      text = data.text ?? JSON.stringify(data, null, 2);
      setResultPlain(text);
    }

    let ai = null;
    if (aiEnable.checked) ai = await runAi(text);

    addHistory({
      mode: "long",
      input: file.name,
      language: lang, text,
      segments: segments || null,
      aiText: ai?.text || null, aiTitleKey: ai?.titleKey || null,
    });
  } catch (err) {
    setResultPlain(t("msg_request_failed") + err.message);
  }
});

// ─────────────────────────────────────────────────────────────
// 模式 ③：实时麦克风 → WebSocket
// ─────────────────────────────────────────────────────────────
let ws = null;
let audioCtx = null;
let micStream = null;
let workletNode = null;

let rtLines = []; // [{ orig, trans, transState }]
let currentPartial = "";

function setRtStatus(key, ...args) {
  rtStatus.dataset.statusKey = key;
  rtStatus.textContent = args.length ? t(key, ...args) : t(key);
}
function setRtStatusRaw(text) {
  delete rtStatus.dataset.statusKey;
  rtStatus.textContent = text;
}

function renderRealtime() {
  currentView = { type: "realtime" };
  resultEl.classList.remove("empty");
  const aiOn = aiEnable.checked;
  const html = rtLines.map((l) => {
    let transHtml = "";
    if (aiOn || l.trans) {
      const pendingText = t("ai_processing");
      transHtml = `<span class="trans ${l.transState === "pending" ? "pending" : ""}">${escapeHtml(l.trans || (l.transState === "pending" ? pendingText : ""))}</span>`;
    }
    return `<span class="rt-pair"><span class="orig">${escapeHtml(l.orig)}</span>${transHtml}</span>`;
  }).join("");
  const partialHtml = currentPartial
    ? `<span class="rt-pair"><span class="orig partial">${escapeHtml(currentPartial)}</span></span>`
    : "";
  resultEl.innerHTML = html + partialHtml;
}

async function translateRealtimeLine(line) {
  if (!aiEnable.checked) return;
  line.transState = "pending";
  renderRealtime();
  try {
    const systemPrompt = buildAiPrompt(aiMode.value, aiCustom.value);
    const r = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "supermind-agent-v1",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: line.orig },
        ],
      }),
    });
    const data = await r.json();
    line.trans = data?.choices?.[0]?.message?.content ?? t("ai_no_return");
    line.transState = "done";
  } catch (err) {
    line.trans = t("ai_line_failed") + err.message;
    line.transState = "error";
  }
  renderRealtime();
}

$("#btnRtStart").addEventListener("click", async () => {
  try {
    rtLines = [];
    currentPartial = "";
    clearAiResult();
    renderRealtime();
    setRtStatus("rt_requesting_session");

    const silenceMs = parseInt($("#rtSilenceMs")?.value, 10) || 400;
    const sessionRes = await fetch("/api/realtime/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: $("#rtLang").value || "zh-CN",
        vad: true,
        silence_duration_ms: silenceMs,
      }),
    });
    const session = await sessionRes.json();
    if (!session.ws_url) throw new Error(t("rt_ws_url_missing") + JSON.stringify(session));

    setRtStatus("rt_connecting_ws");
    ws = new WebSocket(session.ws_url);
    ws.binaryType = "arraybuffer";

    ws.onopen = async () => {
      setRtStatus("rt_requesting_mic");
      micStream = await navigator.mediaDevices.getUserMedia({
        audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true },
      });
      audioCtx = new AudioContext();
      await audioCtx.audioWorklet.addModule("pcm-worklet.js");
      const src = audioCtx.createMediaStreamSource(micStream);
      workletNode = new AudioWorkletNode(audioCtx, "pcm-worklet");
      workletNode.port.onmessage = (e) => {
        if (ws && ws.readyState === WebSocket.OPEN) ws.send(e.data);
      };
      src.connect(workletNode);

      ws.send(JSON.stringify({ type: "start" }));
      setRtStatus("rt_recording");
      $("#btnRtStart").disabled = true;
      $("#btnRtStop").disabled = false;
    };

    ws.onmessage = (ev) => {
      if (typeof ev.data !== "string") return;
      let msg; try { msg = JSON.parse(ev.data); } catch { return; }
      switch (msg.type) {
        case "session_ready":
          setRtStatus("rt_session_ready"); break;
        case "speech_started":
          setRtStatus("rt_speech_detected"); break;
        case "speech_stopped":
          setRtStatus("rt_finalizing"); break;
        case "transcript_delta":
          currentPartial += msg.text || "";
          renderRealtime();
          break;
        case "transcript_completed": {
          const text = (msg.text || "").trim();
          currentPartial = "";
          if (text) {
            const line = { orig: text, trans: "", transState: "idle" };
            rtLines.push(line);
            renderRealtime();
            if (aiEnable.checked) translateRealtimeLine(line);
          } else {
            renderRealtime();
          }
          setRtStatus("rt_recording");
          break;
        }
        case "turn_completed":
          // upstream emits this after transcript_completed; nothing to render
          break;
        case "usage":
          console.log("usage:", msg); break;
        case "error":
          setRtStatusRaw(t("rt_error_prefix") + (msg.message || msg.code || ""));
          break;
        default:
          console.warn("[RT] unhandled WS message type:", msg.type, msg);
      }
    };

    ws.onclose = () => { setRtStatus("rt_ws_disconnected"); finalizeRealtime(); cleanup(); };
    ws.onerror = () => { setRtStatus("rt_ws_error"); };
  } catch (err) {
    console.error(err);
    setRtStatusRaw(t("rt_failed_prefix") + err.message);
    cleanup();
  }
});

$("#btnRtStop").addEventListener("click", () => {
  try { ws?.send(JSON.stringify({ type: "stop" })); } catch {}
  finalizeRealtime();
  cleanup();
});

function finalizeRealtime() {
  if (!rtLines.length) return;
  const text = rtLines.map((l) => l.orig).join("\n");
  const aiText = aiEnable.checked
    ? rtLines.map((l) => `${l.orig}\n→ ${l.trans || t("ai_not_done")}`).join("\n\n")
    : null;
  addHistory({
    mode: "realtime",
    input: $("#rtLang").value || "zh-CN",
    language: $("#rtLang").value || "zh-CN",
    text,
    rtLines: rtLines.map((l) => ({ ...l })),
    aiText,
    aiTitleKey: aiEnable.checked ? aiTitleKey(aiMode.value) : null,
  });
  rtLines = [];
}

function cleanup() {
  $("#btnRtStart").disabled = false;
  $("#btnRtStop").disabled = true;
  try { workletNode?.disconnect(); } catch {}
  try { micStream?.getTracks().forEach((t) => t.stop()); } catch {}
  try { audioCtx?.close(); } catch {}
  try { ws?.close(); } catch {}
  workletNode = null; micStream = null; audioCtx = null; ws = null;
}

// ─────────────────────────────────────────────────────────────
// 句子停顿滑杆：实时显示数值
// ─────────────────────────────────────────────────────────────
{
  const slider = $("#rtSilenceMs");
  const valEl = $("#rtSilenceMsVal");
  if (slider && valEl) {
    const sync = () => (valEl.textContent = slider.value);
    slider.addEventListener("input", sync);
    sync();
  }
}

// ─────────────────────────────────────────────────────────────
// 初始化
// ─────────────────────────────────────────────────────────────
applyI18n();
setResultPlain("");
