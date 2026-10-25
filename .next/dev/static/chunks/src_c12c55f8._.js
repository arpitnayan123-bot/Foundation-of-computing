(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/notes/exam-runtime.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearExamDraft",
    ()=>clearExamDraft,
    "draftHasWork",
    ()=>draftHasWork,
    "examDraftKey",
    ()=>examDraftKey,
    "flushExamDraft",
    ()=>flushExamDraft,
    "loadExamDraft",
    ()=>loadExamDraft,
    "saveExamDraft",
    ()=>saveExamDraft,
    "useDialogA11y",
    ()=>useDialogA11y
]);
/* ============================================================
   Shared exam-window runtime — used by all five shelf engines
   (FoC / ATB / FA / EBH / STM). Three responsibilities:

   1. DRAFT PERSISTENCE — the exam's answers, question pointer
      and clock are continuously mirrored to sessionStorage.
      A refresh, a browser-back, or an accidental Escape no
      longer destroys typed work; reopening the same window in
      the same tab restores the attempt exactly where it was.

   2. DRIFT-PROOF CLOCK — elapsed time is derived from
      Date.now() against a stored start epoch, never by
      counting setInterval ticks (browsers throttle background
      tabs to ≥1 tick/minute, which silently under-reports).

   3. DIALOG A11Y — focus is moved into the modal on mount,
      Tab is trapped inside while it is open, and focus returns
      to the element that opened it on close.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const DRAFT_PREFIX = "atlas-exam-draft:";
function examDraftKey(subject, group) {
    return `${DRAFT_PREFIX}${subject}:${group}`;
}
function draftHasWork(states) {
    for (const s of Object.values(states)){
        if (!s || typeof s !== "object") continue;
        const st = s;
        if (st.status === "correct" || st.status === "wrong" || st.revealed) return true;
        if (typeof st.typed === "string" && st.typed.trim().length > 0) return true;
    }
    return false;
}
function loadExamDraft(key) {
    try {
        const raw = window.sessionStorage.getItem(key);
        if (!raw) return null;
        const d = JSON.parse(raw);
        if (typeof d?.idx !== "number" || typeof d?.base !== "number" || typeof d?.startedAt !== "number" || !d.states || typeof d.states !== "object") {
            return null;
        }
        return d;
    } catch  {
        return null; // corrupted draft → fresh start
    }
}
let draftTimer = null;
let draftPending = null;
function saveExamDraft(key, draft) {
    draftPending = {
        key,
        draft
    };
    if (draftTimer !== null) return;
    draftTimer = window.setTimeout(()=>{
        draftTimer = null;
        const p = draftPending;
        draftPending = null;
        if (!p) return;
        try {
            window.sessionStorage.setItem(p.key, JSON.stringify(p.draft));
        } catch  {
        /* storage blocked — the exam still works, just without drafts */ }
    }, 400);
}
function flushExamDraft() {
    if (draftTimer !== null) {
        window.clearTimeout(draftTimer);
        draftTimer = null;
    }
    const p = draftPending;
    draftPending = null;
    if (!p) return;
    try {
        window.sessionStorage.setItem(p.key, JSON.stringify(p.draft));
    } catch  {
    /* ignore */ }
}
function clearExamDraft(key) {
    /* a clear must be final: any pending debounced write would silently
     resurrect the draft AFTER the removal (the bell / retake paths
     both clear while an autosave may be in flight) */ draftPending = null;
    if (draftTimer !== null) {
        window.clearTimeout(draftTimer);
        draftTimer = null;
    }
    try {
        window.sessionStorage.removeItem(key);
    } catch  {
    /* ignore */ }
}
/* ---------------- 3. dialog a11y ---------------- */ const FOCUSABLE = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
function useDialogA11y(active) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDialogA11y.useEffect": ()=>{
            if (!active) return;
            const el = ref.current;
            if (!el) return;
            const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
            el.focus({
                preventScroll: true
            });
            const onKey = {
                "useDialogA11y.useEffect.onKey": (e)=>{
                    if (e.key !== "Tab") return;
                    const focusables = Array.from(el.querySelectorAll(FOCUSABLE)).filter({
                        "useDialogA11y.useEffect.onKey.focusables": (n)=>n.offsetParent !== null || n === document.activeElement
                    }["useDialogA11y.useEffect.onKey.focusables"]);
                    if (focusables.length === 0) return;
                    const first = focusables[0];
                    const last = focusables[focusables.length - 1];
                    const active = document.activeElement;
                    if (e.shiftKey && (active === el || active === first)) {
                        e.preventDefault();
                        last.focus();
                    } else if (!e.shiftKey && active === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }["useDialogA11y.useEffect.onKey"];
            el.addEventListener("keydown", onKey);
            return ({
                "useDialogA11y.useEffect": ()=>{
                    el.removeEventListener("keydown", onKey);
                    opener?.focus({
                        preventScroll: true
                    });
                }
            })["useDialogA11y.useEffect"];
        }
    }["useDialogA11y.useEffect"], [
        active
    ]);
    return ref;
}
_s(useDialogA11y, "8uVE59eA/r6b92xF80p7sH8rXLk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/notes/ExamEngine.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExamEngine",
    ()=>ExamEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   TEST MY KNOWLEDGE — THE ONE EXAM ENGINE.

   All five shelves (FoC / ATB / FA / EBH / STM) used to carry a
   550-line clone of this window each. Every difference between
   them was pure presentation — colors, labels, copy — so the
   engine now takes an `ExamTheme` and a plain bank object, and
   each shelf ships a ~70-line wrapper that only declares its
   theme. Logic (drafts, drift-proof clock, focus trap, scoring)
   lives here and is shared.

   Question shape is structural, not nominal: any bank whose
   questions carry { id, type, q, options?, answer?, code?,
   answerText?, solution?, explain? } plugs straight in.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-client] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/exam-runtime.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sm2.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ledger.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function fmt(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function ExamEngine({ theme, bank, draftId, onClose, minutes, onFinished }) {
    _s();
    const qs = bank.questions;
    const limitSec = typeof minutes === "number" && Number.isFinite(minutes) && minutes > 0 ? Math.round(minutes * 60) : null;
    /* ---- draft restore: a refresh or an accidental Escape keeps your work ---- */ const DRAFT_KEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["examDraftKey"])(theme.key, draftId);
    const draft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExamEngine.useMemo[draft]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadExamDraft"])(DRAFT_KEY)
    }["ExamEngine.useMemo[draft]"], [
        DRAFT_KEY
    ]);
    const restored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExamEngine.useMemo[restored]": ()=>{
            if (!draft) return null;
            let n = 0;
            for (const s of Object.values(draft.states)){
                const st = s;
                if (st && (st.status === "correct" || st.status === "wrong" || st.revealed)) n += 1;
            }
            return n > 0 ? n : null;
        }
    }["ExamEngine.useMemo[restored]"], [
        draft
    ]);
    const [idx, setIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ExamEngine.useState": ()=>Math.min(Math.max(draft?.idx ?? 0, 0), qs.length - 1)
    }["ExamEngine.useState"]);
    const [states, setStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ExamEngine.useState": ()=>{
            const fresh = Object.fromEntries(bank.questions.map({
                "ExamEngine.useState.fresh": (q)=>[
                        q.id,
                        {
                            status: "unattempted"
                        }
                    ]
            }["ExamEngine.useState.fresh"]));
            if (draft) {
                for (const q of bank.questions){
                    const d = draft.states[q.id];
                    if (d && typeof d.status === "string") fresh[q.id] = d;
                }
            }
            return fresh;
        }
    }["ExamEngine.useState"]);
    const [finished, setFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    /* drift-proof clock: seconds = base + (now − startedAt), derived from the
     wall clock — never tick-counted, so background-tab throttling can't
     silently under-report the elapsed time. Survives refresh via the draft. */ const [clock, setClock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ExamEngine.useState": ()=>({
                base: draft?.base ?? 0,
                startedAt: draft?.startedAt ?? Date.now()
            })
    }["ExamEngine.useState"]);
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ExamEngine.useState": ()=>Date.now()
    }["ExamEngine.useState"]);
    const seconds = Math.max(0, Math.floor(clock.base + (now - clock.startedAt) / 1000));
    /* the countdown — derived from the same drift-proof clock, so a
     background tab or a reload can never buy the paper extra time */ const remaining = limitSec != null ? Math.max(0, limitSec - seconds) : null;
    const bodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* one ledger row per attempt-cycle — "back to questions" then finishing
     again must not double-log; retake() re-arms it */ const loggedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    /* scroll lock (the timer below stops ticking on the results view) */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExamEngine.useEffect": ()=>{
            document.body.style.overflow = "hidden";
            return ({
                "ExamEngine.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["ExamEngine.useEffect"];
        }
    }["ExamEngine.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExamEngine.useEffect": ()=>{
            if (finished) return;
            const t = window.setInterval({
                "ExamEngine.useEffect.t": ()=>setNow(Date.now())
            }["ExamEngine.useEffect.t"], 1000);
            return ({
                "ExamEngine.useEffect": ()=>window.clearInterval(t)
            })["ExamEngine.useEffect"];
        }
    }["ExamEngine.useEffect"], [
        finished
    ]);
    /* draft autosave — debounced inside saveExamDraft, flushed on close/finish */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExamEngine.useEffect": ()=>{
            if (finished) return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["draftHasWork"])(states)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveExamDraft"])(DRAFT_KEY, {
                    idx,
                    states: states,
                    base: clock.base,
                    startedAt: clock.startedAt
                });
            }
        }
    }["ExamEngine.useEffect"], [
        states,
        idx,
        clock,
        finished,
        DRAFT_KEY
    ]);
    /* the bell — a timed paper finishes itself when the clock runs out.
     Declared AFTER the autosave effect on purpose: on the commit where
     the bell fires, finish() flushes + clears the draft AFTER any
     autosave this render scheduled, so nothing can resurrect it. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExamEngine.useEffect": ()=>{
            if (limitSec == null || finished) return;
            if (seconds >= limitSec) finish();
        }
    }["ExamEngine.useEffect"], [
        seconds,
        limitSec,
        finished
    ]);
    const closeWindow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ExamEngine.useCallback[closeWindow]": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushExamDraft"])(); // the attempt is kept — reopening this window restores it
            onClose();
        }
    }["ExamEngine.useCallback[closeWindow]"], [
        onClose
    ]);
    /** freeze the clock, clear the draft, log the attempt, show the report */ function finish() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushExamDraft"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearExamDraft"])(DRAFT_KEY);
        onFinished?.(); // a finished sitting must not be resurrected by the durable record
        setClock({
            base: seconds,
            startedAt: Date.now()
        });
        setFinished(true);
        if (!loggedRef.current) {
            loggedRef.current = true;
            /* one row per subject: single-shelf windows log exactly one row
         (subject = theme.key, unchanged behaviour); mixed review sessions
         split into per-shelf rows so each shelf's accuracy stays true */ const groups = new Map();
            for (const qq of qs){
                const s = states[qq.id]?.status;
                if (s !== "correct" && s !== "wrong") continue;
                const subj = qq.subject ?? theme.key;
                const g = groups.get(subj) ?? {
                    c: 0,
                    t: 0
                };
                g.t += 1;
                if (s === "correct") g.c += 1;
                groups.set(subj, g);
            }
            const answered = groups.size > 0;
            const rows = answered ? [
                ...groups.entries()
            ].map(([subject, g])=>({
                    subject,
                    correct: g.c,
                    total: g.t
                })) : [
                {
                    subject: theme.key,
                    correct: score.correct,
                    total: score.total
                }
            ];
            for (const r of rows){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logAttempt"])({
                    subject: r.subject,
                    group: draftId,
                    title: bank.title,
                    correct: r.correct,
                    total: r.total,
                    pct: Math.round(r.correct / Math.max(1, r.total) * 100),
                    seconds
                });
            }
        }
    }
    const q = qs[idx];
    const st = states[q.id];
    /* keyboard flow — ←/→ move, keys 1–4 answer the MCQ on stage,
     ↵ advances (next question, or the report on the last one).
     Typing surfaces keep their keys: textareas, the ⌘K search
     input, and focused buttons (where ↵ already means "press"). */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExamEngine.useEffect": ()=>{
            const onKey = {
                "ExamEngine.useEffect.onKey": (e)=>{
                    const t = e.target;
                    const inTextarea = t instanceof HTMLTextAreaElement;
                    if (e.key === "Escape" && !inTextarea) closeWindow();
                    if (finished || inTextarea || e.isComposing || e.metaKey || e.ctrlKey || e.altKey) return;
                    if (t instanceof HTMLInputElement) return; // palette search etc.
                    if (e.key === "ArrowRight") {
                        setIdx({
                            "ExamEngine.useEffect.onKey": (i)=>Math.min(i + 1, qs.length - 1)
                        }["ExamEngine.useEffect.onKey"]);
                    } else if (e.key === "ArrowLeft") {
                        setIdx({
                            "ExamEngine.useEffect.onKey": (i)=>Math.max(i - 1, 0)
                        }["ExamEngine.useEffect.onKey"]);
                    } else if (e.key === "Enter") {
                        if (e.repeat) return;
                        if (t instanceof HTMLButtonElement || t instanceof HTMLAnchorElement || t instanceof HTMLSelectElement) return;
                        if (idx < qs.length - 1) go(idx + 1);
                        else finish();
                    } else if (!e.repeat) {
                        // keys 1–4 pick an option — same contract as clicking the row
                        const n = Number(e.key);
                        if (!Number.isInteger(n) || n < 1 || n > 4) return;
                        if (q.type !== "mcq" || st.status === "correct" || st.status === "wrong") return;
                        if (n <= (q.options?.length ?? 0)) chooseMCQ(n - 1);
                    }
                }
            }["ExamEngine.useEffect.onKey"];
            document.addEventListener("keydown", onKey);
            return ({
                "ExamEngine.useEffect": ()=>document.removeEventListener("keydown", onKey)
            })["ExamEngine.useEffect"];
        }
    }["ExamEngine.useEffect"], [
        finished,
        closeWindow,
        qs.length,
        idx,
        q,
        st
    ]);
    const patch = (id, p)=>setStates((prev)=>({
                ...prev,
                [id]: {
                    ...prev[id],
                    ...p
                }
            }));
    /* scoring — byType rows follow the theme's declared type order */ const typeKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExamEngine.useMemo[typeKeys]": ()=>Object.keys(theme.typeMeta)
    }["ExamEngine.useMemo[typeKeys]"], [
        theme
    ]);
    const score = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ExamEngine.useMemo[score]": ()=>{
            let correct = 0;
            let wrong = 0;
            let answered = 0;
            const byType = {};
            for (const t of typeKeys)byType[t] = {
                c: 0,
                t: 0
            };
            for (const qq of qs){
                const row = byType[qq.type] ??= {
                    c: 0,
                    t: 0
                };
                row.t += 1;
                const s = states[qq.id]?.status ?? "unattempted";
                if (s === "correct" || s === "wrong") answered += 1;
                if (s === "correct") {
                    correct += 1;
                    row.c += 1;
                }
                if (s === "wrong") wrong += 1;
            }
            return {
                correct,
                wrong,
                answered,
                byType,
                total: qs.length
            };
        }
    }["ExamEngine.useMemo[score]"], [
        states,
        qs,
        typeKeys
    ]);
    const pct = Math.round(score.correct / score.total * 100);
    const verdict = pct >= 85 ? theme.tiers.topper : pct >= 60 ? theme.tiers.solid : pct >= 35 ? theme.tiers.getting : theme.tiers.restart;
    function chooseMCQ(i) {
        if (st.status === "correct" || st.status === "wrong") return;
        const ok = i === q.answer;
        patch(q.id, {
            chosen: i,
            revealed: true,
            status: ok ? "correct" : "wrong"
        });
        // SM-2: first-try MCQ answers are trusted fully (5), misses reset the card (2)
        // — routed to the question's own shelf in mixed review sessions
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gradeQuestion"])(q.subject ?? theme.key, q.srcId ?? q.id, ok ? 5 : 2);
    }
    function selfCheck(ok) {
        patch(q.id, {
            status: ok ? "correct" : "wrong"
        });
        // SM-2: the model answer was visible — grade honestly but trust less
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gradeQuestion"])(q.subject ?? theme.key, q.srcId ?? q.id, ok ? 3 : 1);
    }
    function retake() {
        setStates(Object.fromEntries(qs.map((qq)=>[
                qq.id,
                {
                    status: "unattempted"
                }
            ])));
        setIdx(0);
        setClock({
            base: 0,
            startedAt: Date.now()
        });
        setNow(Date.now());
        setFinished(false);
        loggedRef.current = false; // a retake is a new, honest attempt
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearExamDraft"])(DRAFT_KEY);
        bodyRef.current?.scrollTo({
            top: 0
        });
    }
    function go(i) {
        setIdx(i);
        bodyRef.current?.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    /* ---------------- results view ---------------- */ if (finished) {
        const mcqMeta = theme.typeMeta.mcq ?? Object.values(theme.typeMeta)[0];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExamShell, {
            theme: theme,
            bank: bank,
            score: score,
            seconds: seconds,
            onClose: closeWindow,
            restoredCount: restored,
            onExit: ()=>setFinished(false),
            scrollRef: bodyRef,
            remaining: remaining,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 18
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.3
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "exam-result-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "exam-score-ring",
                                style: {
                                    borderColor: pct >= 60 ? "#8fae5d" : "#e0a45e"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "exam-score-num",
                                        children: [
                                            pct,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                        lineNumber: 405,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "exam-score-sub",
                                        children: [
                                            score.correct,
                                            " / ",
                                            score.total
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                        lineNumber: 406,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                lineNumber: 404,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-2xl font-bold text-[#2b1d10]",
                                        children: "Result report"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                        lineNumber: 411,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[.95rem] font-semibold",
                                        style: {
                                            color: verdict.c
                                        },
                                        role: "status",
                                        children: verdict.t
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap gap-2 text-[.72rem] font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "exam-chip",
                                                style: {
                                                    background: "#eef4dd",
                                                    color: "#44621d"
                                                },
                                                children: [
                                                    "✓ ",
                                                    score.correct,
                                                    " correct"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                lineNumber: 416,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "exam-chip",
                                                style: {
                                                    background: "#fdecec",
                                                    color: "#8c2f2f"
                                                },
                                                children: [
                                                    "✗ ",
                                                    score.wrong,
                                                    " wrong"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                lineNumber: 417,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "exam-chip",
                                                style: {
                                                    background: "#f3e8d2",
                                                    color: "#6f5438"
                                                },
                                                children: [
                                                    "• ",
                                                    score.total - score.answered,
                                                    " unattempted"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                lineNumber: 418,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "exam-chip",
                                                style: {
                                                    background: mcqMeta.bg,
                                                    color: mcqMeta.color
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                        className: "mr-1 inline h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 19
                                                    }, this),
                                                    fmt(seconds)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                lineNumber: 419,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                        lineNumber: 415,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                        lineNumber: 403,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 grid gap-3 sm:grid-cols-2",
                        children: typeKeys.map((t)=>{
                            const meta = theme.typeMeta[t];
                            const d = score.byType[t];
                            if (!meta || !d) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between rounded-xl border border-[#e8dcc0] bg-[#fffdf9] px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[.8rem] font-bold",
                                        style: {
                                            color: meta.color
                                        },
                                        children: meta.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                        lineNumber: 435,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[.8rem] font-extrabold text-[#2b1d10]",
                                        children: [
                                            d.c,
                                            " / ",
                                            d.t
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                        lineNumber: 438,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, t, true, {
                                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                lineNumber: 434,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                        lineNumber: 428,
                        columnNumber: 11
                    }, this),
                    score.correct < score.total ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "exam-eyebrow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                        lineNumber: 450,
                                        columnNumber: 17
                                    }, this),
                                    "Review & rewrite these by hand"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                lineNumber: 449,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 grid gap-3",
                                children: qs.map((qq)=>{
                                    const s = states[qq.id]?.status ?? "unattempted";
                                    if (s === "correct") return null;
                                    const model = qq.type === "mcq" ? qq.options?.[qq.answer ?? 0] ?? "" : qq.answerText ?? qq.solution ?? "";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-[#e8dcc0] bg-[#fffdf9] p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[.88rem] font-bold leading-snug text-[#2b1d10]",
                                                children: qq.q
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                lineNumber: 463,
                                                columnNumber: 23
                                            }, this),
                                            qq.code ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                className: "exam-code mt-2",
                                                children: qq.code
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                lineNumber: 464,
                                                columnNumber: 34
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-[.82rem] leading-relaxed",
                                                style: {
                                                    color: s === "wrong" ? "#8c2f2f" : "#6f5438"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: s === "wrong" ? "Missed —" : "Unattempted —"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 25
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "whitespace-pre-wrap font-mono text-[.78rem] text-[#2f2013]",
                                                        children: model
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                lineNumber: 465,
                                                columnNumber: 23
                                            }, this),
                                            qq.explain ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[.78rem] leading-relaxed text-[#6f5438]",
                                                children: qq.explain
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                lineNumber: 469,
                                                columnNumber: 37
                                            }, this) : null
                                        ]
                                    }, qq.id, true, {
                                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                        lineNumber: 462,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                lineNumber: 453,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                        lineNumber: 448,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-7 flex flex-wrap justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: retake,
                                className: "exam-btn exam-btn-primary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                        lineNumber: 479,
                                        columnNumber: 15
                                    }, this),
                                    "Retake this test"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                lineNumber: 478,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setFinished(false),
                                className: "exam-btn",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                        lineNumber: 483,
                                        columnNumber: 15
                                    }, this),
                                    "Back to questions"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                lineNumber: 482,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                        lineNumber: 477,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                lineNumber: 402,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/notes/ExamEngine.tsx",
            lineNumber: 391,
            columnNumber: 7
        }, this);
    }
    /* ---------------- question view ---------------- */ const meta = theme.typeMeta[q.type] ?? theme.typeMeta.mcq ?? Object.values(theme.typeMeta)[0];
    const mcqLocked = st.status === "correct" || st.status === "wrong";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExamShell, {
        theme: theme,
        bank: bank,
        score: score,
        seconds: seconds,
        onClose: closeWindow,
        restoredCount: restored,
        onExit: ()=>finish(),
        scrollRef: bodyRef,
        remaining: remaining,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                x: 24
            },
            animate: {
                opacity: 1,
                x: 0
            },
            transition: {
                duration: 0.22,
                ease: "easeOut"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "exam-type-chip",
                            style: {
                                color: meta.color,
                                background: meta.bg
                            },
                            children: meta.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 511,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[.72rem] font-extrabold uppercase tracking-[.16em] text-[#8a6d4f]",
                            children: [
                                "Question ",
                                idx + 1,
                                " of ",
                                qs.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 514,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                    lineNumber: 510,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display mt-3 text-xl font-bold leading-snug text-[#2b1d10] md:text-[1.35rem]",
                    children: q.q
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                    lineNumber: 520,
                    columnNumber: 9
                }, this),
                q.code ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "exam-code mt-4",
                    children: q.code
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                    lineNumber: 522,
                    columnNumber: 19
                }, this) : null,
                q.type === "mcq" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 grid gap-2",
                    children: q.options?.map((opt, i)=>{
                        const isAnswer = i === q.answer;
                        const chosen = st.chosen === i;
                        let cls = "exam-opt";
                        if (mcqLocked && isAnswer) cls += " exam-opt-correct";
                        else if (mcqLocked && chosen) cls += " exam-opt-wrong";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: mcqLocked,
                            onClick: ()=>chooseMCQ(i),
                            className: cls,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "exam-opt-letter",
                                    children: String.fromCharCode(65 + i)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 535,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-[.86rem]",
                                    children: opt
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 536,
                                    columnNumber: 19
                                }, this),
                                mcqLocked && isAnswer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "ml-auto h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 537,
                                    columnNumber: 44
                                }, this) : null
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 534,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                    lineNumber: 526,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: `ta-${q.id}`,
                            className: "text-[.74rem] font-bold uppercase tracking-[.14em] text-[#8a6d4f]",
                            children: theme.paperLabel
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 544,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            id: `ta-${q.id}`,
                            value: st.typed ?? "",
                            onChange: (e)=>patch(q.id, {
                                    typed: e.target.value
                                }),
                            spellCheck: false,
                            rows: q.type === "short" ? 4 : 6,
                            placeholder: q.type === "output" ? theme.outputPlaceholder : q.type === "code" ? "# write your program here…" : "your answer…",
                            className: "exam-ta"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 547,
                            columnNumber: 13
                        }, this),
                        !st.revealed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>patch(q.id, {
                                    revealed: true
                                }),
                            className: "exam-btn mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 558,
                                    columnNumber: 17
                                }, this),
                                "Reveal the model answer"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 557,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "mt-3",
                            role: "status",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "exam-answer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "exam-eyebrow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 21
                                                }, this),
                                                "Model answer"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                            lineNumber: 569,
                                            columnNumber: 19
                                        }, this),
                                        q.solution ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "exam-code mt-2",
                                            children: q.solution
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                            lineNumber: 573,
                                            columnNumber: 33
                                        }, this) : null,
                                        q.answerText ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `mt-2 whitespace-pre-wrap font-mono text-[.82rem] leading-relaxed text-[#2f2013] ${q.solution ? "text-[.78rem]" : ""}`,
                                            children: q.answerText
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                            lineNumber: 575,
                                            columnNumber: 21
                                        }, this) : null,
                                        q.explain ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.82rem] leading-relaxed text-[#6f5438]",
                                            children: q.explain
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                            lineNumber: 579,
                                            columnNumber: 32
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 568,
                                    columnNumber: 17
                                }, this),
                                st.status !== "correct" && st.status !== "wrong" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-wrap items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[.74rem] font-bold uppercase tracking-[.12em] text-[#8a6d4f]",
                                            children: "Self-check:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                            lineNumber: 583,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>selfCheck(true),
                                            className: "exam-btn",
                                            style: {
                                                color: "#44621d"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 23
                                                }, this),
                                                " I got it"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                            lineNumber: 584,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>selfCheck(false),
                                            className: "exam-btn",
                                            style: {
                                                color: "#8c2f2f"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 23
                                                }, this),
                                                " Not yet"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                            lineNumber: 587,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 582,
                                    columnNumber: 19
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 562,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                    lineNumber: 543,
                    columnNumber: 11
                }, this),
                q.type === "mcq" && mcqLocked && q.explain ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "exam-answer mt-3",
                    role: "status",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[.88rem] font-bold",
                            style: {
                                color: st.status === "correct" ? "#44621d" : "#8c2f2f"
                            },
                            children: st.status === "correct" ? "Correct." : "Not quite."
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 600,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-[.85rem] leading-relaxed text-[#2f2013]",
                            children: q.explain
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 603,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                    lineNumber: 599,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "exam-nav",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-between gap-x-4 gap-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "exam-eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                            lineNumber: 611,
                                            columnNumber: 15
                                        }, this),
                                        "Jump to a question"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 610,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "hidden items-center gap-2.5 text-[.58rem] font-bold uppercase tracking-[.1em] text-[#8a6d4f] sm:flex",
                                    "aria-hidden": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                    className: "exam-kbd",
                                                    children: "1–4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                    lineNumber: 616,
                                                    columnNumber: 17
                                                }, this),
                                                " answer"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                            lineNumber: 615,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                    className: "exam-kbd",
                                                    children: "↵"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                    lineNumber: 619,
                                                    columnNumber: 17
                                                }, this),
                                                " next"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                            lineNumber: 618,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                    className: "exam-kbd",
                                                    children: "←→"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                                    lineNumber: 622,
                                                    columnNumber: 17
                                                }, this),
                                                " move"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                            lineNumber: 621,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 614,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 609,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex flex-wrap gap-1.5",
                            children: qs.map((qq, i)=>{
                                const s = states[qq.id]?.status ?? "unattempted";
                                const cls = i === idx ? "exam-dot exam-dot-current" : s === "correct" ? "exam-dot exam-dot-ok" : s === "wrong" ? "exam-dot exam-dot-bad" : s === "revealed" ? "exam-dot exam-dot-rev" : "exam-dot";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>go(i),
                                    className: cls,
                                    "aria-label": `Go to question ${i + 1}`,
                                    children: i + 1
                                }, qq.id, false, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 640,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 626,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                    lineNumber: 608,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex items-center justify-between pb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>go(Math.max(0, idx - 1)),
                            disabled: idx === 0,
                            className: "exam-btn",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 651,
                                    columnNumber: 13
                                }, this),
                                "Prev"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 650,
                            columnNumber: 11
                        }, this),
                        idx < qs.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>go(idx + 1),
                            className: "exam-btn exam-btn-primary",
                            children: [
                                "Next",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 657,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 655,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>finish(),
                            className: "exam-btn exam-btn-primary",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 661,
                                    columnNumber: 15
                                }, this),
                                "Finish & see score"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 660,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                    lineNumber: 649,
                    columnNumber: 9
                }, this)
            ]
        }, q.id, true, {
            fileName: "[project]/src/components/notes/ExamEngine.tsx",
            lineNumber: 508,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/notes/ExamEngine.tsx",
        lineNumber: 497,
        columnNumber: 5
    }, this);
}
_s(ExamEngine, "AP+rFw9wZY+VEOCA2teG20DTji4=");
_c = ExamEngine;
/* ---------------- shared shell (header + footer) ---------------- */ function ExamShell({ theme, bank, score, seconds, children, onClose, onExit, scrollRef, restoredCount, remaining }) {
    _s1();
    const shellRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogA11y"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: shellRef,
        tabIndex: -1,
        initial: {
            opacity: 0,
            scale: 0.99
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: 0.2,
            ease: "easeOut"
        },
        className: `fixed inset-0 z-[80] flex flex-col outline-none ${theme.rootClass ?? ""}`,
        style: {
            background: theme.pageBg
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-label": `Test my knowledge — ${bank.title}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 border-b border-black/20",
                style: {
                    background: theme.headerBg
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-3xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                            style: {
                                background: theme.sigil
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                className: "h-4.5 w-4.5 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                lineNumber: 714,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 713,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.95rem] font-black leading-tight",
                                    style: {
                                        color: theme.titleOnDark
                                    },
                                    children: [
                                        "Test my knowledge — ",
                                        bank.title
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 717,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.68rem] leading-tight",
                                    style: {
                                        color: theme.subOnDark
                                    },
                                    children: [
                                        bank.subtitle,
                                        " · pen-paper practice"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 718,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 716,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[.06] px-2.5 py-1 text-[.62rem] font-extrabold uppercase tracking-[.12em]",
                                    style: remaining != null && remaining <= 60 ? {
                                        color: "#ffd9d0",
                                        background: "rgba(140,47,47,.5)",
                                        borderColor: "rgba(255,180,160,.35)"
                                    } : {
                                        color: theme.chipOnDark
                                    },
                                    title: remaining != null ? "Time left — the paper finishes itself at zero" : "Time spent",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                            lineNumber: 730,
                                            columnNumber: 15
                                        }, this),
                                        remaining != null ? `${fmt(remaining)} left` : fmt(seconds)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 721,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full border border-white/15 bg-white/[.06] px-2.5 py-1 text-[.62rem] font-extrabold uppercase tracking-[.12em]",
                                    style: {
                                        color: theme.chipOnDark
                                    },
                                    children: [
                                        "✓ ",
                                        score.correct,
                                        "/",
                                        score.total
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 733,
                                    columnNumber: 13
                                }, this),
                                restoredCount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full border border-white/15 bg-white/[.06] px-2.5 py-1 text-[.62rem] font-extrabold uppercase tracking-[.12em]",
                                    style: {
                                        color: theme.chipOnDark
                                    },
                                    title: "Saved attempt restored — this window keeps your work for the whole tab session",
                                    children: "↺ restored"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 737,
                                    columnNumber: 15
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    "aria-label": "Close the exam window",
                                    className: "flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[.06] transition hover:bg-white/[.14]",
                                    style: {
                                        color: theme.titleOnDark
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                        lineNumber: 746,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 745,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 720,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                    lineNumber: 712,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                lineNumber: 711,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "flex-1 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                    lineNumber: 754,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                lineNumber: 753,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 border-t",
                style: {
                    borderColor: theme.footerBorder,
                    background: theme.footerBg
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "hidden text-[.68rem] font-semibold text-[#8a6d4f] sm:block",
                            children: theme.footerNote
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 760,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onExit,
                            className: "exam-btn ml-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                                    lineNumber: 764,
                                    columnNumber: 13
                                }, this),
                                "Finish & see score"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/ExamEngine.tsx",
                            lineNumber: 763,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/ExamEngine.tsx",
                    lineNumber: 759,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ExamEngine.tsx",
                lineNumber: 758,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/ExamEngine.tsx",
        lineNumber: 698,
        columnNumber: 5
    }, this);
}
_s1(ExamShell, "51HUjHzz8A7VgBPirR4SSno8hHo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogA11y"]
    ];
});
_c1 = ExamShell;
var _c, _c1;
__turbopack_context__.k.register(_c, "ExamEngine");
__turbopack_context__.k.register(_c1, "ExamShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/notes/exam-themes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ATB_EXAM_THEME",
    ()=>ATB_EXAM_THEME,
    "EBH_EXAM_THEME",
    ()=>EBH_EXAM_THEME,
    "EXAM_THEMES",
    ()=>EXAM_THEMES,
    "FA_EXAM_THEME",
    ()=>FA_EXAM_THEME,
    "FOC_EXAM_THEME",
    ()=>FOC_EXAM_THEME,
    "MKTG_EXAM_THEME",
    ()=>MKTG_EXAM_THEME,
    "MOCK_EXAM_THEME",
    ()=>MOCK_EXAM_THEME,
    "REVIEW_ALL_THEME",
    ()=>REVIEW_ALL_THEME,
    "STM_EXAM_THEME",
    ()=>STM_EXAM_THEME
]);
"use client";
const FOC_EXAM_THEME = {
    key: "foc",
    pageBg: "linear-gradient(180deg,#f7eedf 0%,#f3e7d3 100%)",
    headerBg: "linear-gradient(160deg,#2b1b10,#402818)",
    sigil: "linear-gradient(135deg,#ea580c,#c2410c)",
    titleOnDark: "#ffe9c9",
    subOnDark: "#c9a97e",
    chipOnDark: "#f0e2c8",
    footerBorder: "#e5d3b6",
    footerBg: "rgba(250,243,230,0.9)",
    footerNote: "Exam mode: write on real paper first — then check. That is exactly how the end-term works.",
    paperLabel: "Write it on paper first — then type your attempt to compare",
    outputPlaceholder: "e.g. 14 49 3 1",
    typeMeta: {
        mcq: {
            label: "Multiple choice",
            color: "#8a4508",
            bg: "#f9e8d2"
        },
        output: {
            label: "Write the output",
            color: "#7c2d12",
            bg: "#fdeadd"
        },
        short: {
            label: "Short answer",
            color: "#4d3319",
            bg: "#f3e8d2"
        },
        code: {
            label: "Write the code",
            color: "#1f4715",
            bg: "#eaf2d8"
        }
    },
    tiers: {
        topper: {
            t: "Topper tier — you are pen-paper ready.",
            c: "#44621d"
        },
        solid: {
            t: "Solid. Rewrite the missed answers by hand and you are there.",
            c: "#8a5a06"
        },
        getting: {
            t: "Getting there — go back to the notes for the misses, then retake.",
            c: "#b45309"
        },
        restart: {
            t: "Read the chapter notes once more, then retake — you will crush it.",
            c: "#8c2f2f"
        }
    }
};
const ATB_EXAM_THEME = {
    key: "atb",
    pageBg: "linear-gradient(180deg,#f7eedf 0%,#f3e7d3 100%)",
    headerBg: "linear-gradient(160deg,#2b1b10,#402818)",
    sigil: "linear-gradient(135deg,#ea580c,#c2410c)",
    titleOnDark: "#ffe9c9",
    subOnDark: "#c9a97e",
    chipOnDark: "#f0e2c8",
    footerBorder: "#e5d3b6",
    footerBg: "rgba(250,243,230,0.9)",
    footerNote: "Exam mode: write on real paper first — then check. That is exactly how the end-term works.",
    paperLabel: "Write it on paper first — then type your attempt to compare",
    outputPlaceholder: "e.g. 62.0 then FIRST CLASS",
    typeMeta: {
        mcq: {
            label: "Multiple choice",
            color: "#8a4508",
            bg: "#f9e8d2"
        },
        output: {
            label: "Write the output",
            color: "#7c2d12",
            bg: "#fdeadd"
        },
        short: {
            label: "Short answer",
            color: "#4d3319",
            bg: "#f3e8d2"
        }
    },
    tiers: {
        topper: {
            t: "Topper tier — you are pen-paper ready.",
            c: "#44621d"
        },
        solid: {
            t: "Solid. Rewrite the missed answers by hand and you are there.",
            c: "#8a5a06"
        },
        getting: {
            t: "Getting there — go back to the notes for the misses, then retake.",
            c: "#b45309"
        },
        restart: {
            t: "Read the chapter notes once more, then retake — you will crush it.",
            c: "#8c2f2f"
        }
    }
};
const FA_EXAM_THEME = {
    key: "fa",
    rootClass: "fa-exam",
    pageBg: "linear-gradient(180deg,#f7eedf 0%,#f3e7d3 100%)",
    headerBg: "linear-gradient(160deg,#2b1b10,#402818)",
    sigil: "linear-gradient(135deg,#10b981,#047857)",
    titleOnDark: "#ffe9c9",
    subOnDark: "#c9a97e",
    chipOnDark: "#f0e2c8",
    footerBorder: "#e5d3b6",
    footerBg: "rgba(250,243,230,0.9)",
    footerNote: "Exam mode: write on real paper first — then check. That is exactly how the end-term works.",
    paperLabel: "Write it on paper first — then type your attempt to compare",
    outputPlaceholder: "e.g. 62.0 then FIRST CLASS",
    typeMeta: {
        mcq: {
            label: "Multiple choice",
            color: "#8a4508",
            bg: "#f9e8d2"
        },
        output: {
            label: "Write the output",
            color: "#7c2d12",
            bg: "#fdeadd"
        },
        short: {
            label: "Short answer",
            color: "#4d3319",
            bg: "#f3e8d2"
        }
    },
    tiers: {
        topper: {
            t: "Topper tier — you are pen-paper ready.",
            c: "#44621d"
        },
        solid: {
            t: "Solid. Rewrite the missed answers by hand and you are there.",
            c: "#8a5a06"
        },
        getting: {
            t: "Getting there — go back to the notes for the misses, then retake.",
            c: "#b45309"
        },
        restart: {
            t: "Read the chapter notes once more, then retake — you will crush it.",
            c: "#8c2f2f"
        }
    }
};
const EBH_EXAM_THEME = {
    key: "ebh",
    rootClass: "ebh-exam",
    pageBg: "linear-gradient(180deg,#f7eedf 0%,#f3e7d3 100%)",
    headerBg: "linear-gradient(160deg,#2b1b10,#402818)",
    sigil: "linear-gradient(135deg,#eab308,#a16207)",
    titleOnDark: "#ffe9c9",
    subOnDark: "#c9a97e",
    chipOnDark: "#f0e2c8",
    footerBorder: "#e5d3b6",
    footerBg: "rgba(250,243,230,0.9)",
    footerNote: "Exam mode: write on real paper first — then check. That is exactly how the end-term works.",
    paperLabel: "Write it on paper first — then type your attempt to compare",
    outputPlaceholder: "e.g. 1771, or Cromford Mill",
    typeMeta: {
        mcq: {
            label: "Multiple choice",
            color: "#8a4508",
            bg: "#f9e8d2"
        },
        output: {
            label: "Recall the year / term",
            color: "#7c2d12",
            bg: "#fdeadd"
        },
        short: {
            label: "Short answer",
            color: "#4d3319",
            bg: "#f3e8d2"
        }
    },
    tiers: {
        topper: {
            t: "Topper tier — the whole syllabus argues your side now.",
            c: "#44621d"
        },
        solid: {
            t: "Solid. Rewrite the missed answers by hand and you are there.",
            c: "#8a5a06"
        },
        getting: {
            t: "Getting there — go back to the notes for the misses, then retake.",
            c: "#b45309"
        },
        restart: {
            t: "Read the chapter notes once more, then retake — you will crush it.",
            c: "#8c2f2f"
        }
    }
};
const STM_EXAM_THEME = {
    key: "stm",
    rootClass: "stm-exam",
    pageBg: "linear-gradient(180deg,#f4f0fd 0%,#eee8fb 100%)",
    headerBg: "linear-gradient(160deg,#241238,#3a2354)",
    sigil: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
    titleOnDark: "#efe6ff",
    subOnDark: "#b7a3dc",
    chipOnDark: "#e8ddfa",
    footerBorder: "#ddd2f2",
    footerBg: "rgba(248,245,254,0.9)",
    footerNote: "Exam mode: compute on real paper first — then check. Practising in the exact format you will write in is the whole point.",
    paperLabel: "Compute it on paper first — then type your attempt to compare",
    outputPlaceholder: "e.g. 590.80, or 0.243",
    typeMeta: {
        mcq: {
            label: "Multiple choice",
            color: "#4c1d95",
            bg: "#ede9fe"
        },
        output: {
            label: "Compute the value",
            color: "#5b21b6",
            bg: "#e9e2fb"
        },
        short: {
            label: "Short answer",
            color: "#5f4b12",
            bg: "#f3ecd2"
        }
    },
    tiers: {
        topper: {
            t: "Topper tier — the whole syllabus computes your side now.",
            c: "#44621d"
        },
        solid: {
            t: "Solid. Redo the missed computations by hand and you are there.",
            c: "#6d28d9"
        },
        getting: {
            t: "Getting there — go back to the notes for the misses, then retake.",
            c: "#b45309"
        },
        restart: {
            t: "Read the chapter notes once more, then retake — you will crush it.",
            c: "#8c2f2f"
        }
    }
};
const EXAM_THEMES = {
    foc: FOC_EXAM_THEME,
    atb: ATB_EXAM_THEME,
    fa: FA_EXAM_THEME,
    ebh: EBH_EXAM_THEME,
    stm: STM_EXAM_THEME
};
const REVIEW_ALL_THEME = {
    key: "review",
    pageBg: "linear-gradient(180deg,#f7eedf 0%,#f3e7d3 100%)",
    headerBg: "linear-gradient(160deg,#241608,#402818)",
    sigil: "linear-gradient(135deg,#f59e0b,#c2410c)",
    titleOnDark: "#ffe9c9",
    subOnDark: "#c9a97e",
    chipOnDark: "#f0e2c8",
    footerBorder: "#e5d3b6",
    footerBg: "rgba(250,243,230,0.9)",
    footerNote: "Exam mode: write on real paper first — then check. Mixed shelves, one sitting.",
    paperLabel: "Write it on paper first — then type your attempt to compare",
    outputPlaceholder: "Your answer…",
    typeMeta: {
        mcq: {
            label: "Multiple choice",
            color: "#8a4508",
            bg: "#f9e8d2"
        },
        output: {
            label: "Write the output",
            color: "#7c2d12",
            bg: "#fdeadd"
        },
        short: {
            label: "Short answer",
            color: "#4d3319",
            bg: "#f3e8d2"
        },
        code: {
            label: "Write the code",
            color: "#1f4715",
            bg: "#eaf2d8"
        }
    },
    tiers: {
        topper: {
            t: "Topper tier — every shelf argues your side now.",
            c: "#44621d"
        },
        solid: {
            t: "Solid. Rewrite the missed answers by hand and you are there.",
            c: "#8a5a06"
        },
        getting: {
            t: "Getting there — go back to the notes for the misses, then retake.",
            c: "#b45309"
        },
        restart: {
            t: "Read the chapter notes once more, then retake — you will crush it.",
            c: "#8c2f2f"
        }
    }
};
const MOCK_EXAM_THEME = {
    key: "mock",
    pageBg: "linear-gradient(180deg,#f7eedf 0%,#f3e7d3 100%)",
    headerBg: "linear-gradient(160deg,#1f1207,#3a2413)",
    sigil: "linear-gradient(135deg,#fbbf24,#b45309)",
    titleOnDark: "#ffe9c9",
    subOnDark: "#c9a97e",
    chipOnDark: "#f0e2c8",
    footerBorder: "#e5d3b6",
    footerBg: "rgba(250,243,230,0.9)",
    footerNote: "Mock exam: your rules, real conditions — attempt everything before the bell, then read the report.",
    paperLabel: "Write it on paper first — then type your attempt to compare",
    outputPlaceholder: "Your answer…",
    typeMeta: {
        mcq: {
            label: "Multiple choice",
            color: "#8a4508",
            bg: "#f9e8d2"
        },
        output: {
            label: "Write the output",
            color: "#7c2d12",
            bg: "#fdeadd"
        },
        short: {
            label: "Short answer",
            color: "#4d3319",
            bg: "#f3e8d2"
        },
        code: {
            label: "Write the code",
            color: "#1f4715",
            bg: "#eaf2d8"
        }
    },
    tiers: {
        topper: {
            t: "Topper tier — walk into the real hall with this confidence.",
            c: "#44621d"
        },
        solid: {
            t: "Solid. Rewrite the missed answers by hand and you are there.",
            c: "#8a5a06"
        },
        getting: {
            t: "Getting there — the report below names exactly what to revise.",
            c: "#b45309"
        },
        restart: {
            t: "A hard paper — go back to the notes, then compose another one.",
            c: "#8c2f2f"
        }
    }
};
/** shelf 06 header — deep lagoon */ const LAGOON_HEADER = "linear-gradient(160deg,#0c2124,#143236)";
const MKTG_EXAM_THEME = {
    key: "mktg",
    pageBg: "linear-gradient(180deg,#f4f7f4 0%,#eef3ee 100%)",
    headerBg: LAGOON_HEADER,
    sigil: "linear-gradient(135deg,#14b8a6,#0f766e)",
    titleOnDark: "#e9f2ee",
    subOnDark: "#9fc4ba",
    chipOnDark: "#cfe6df",
    footerBorder: "#dbeae5",
    footerBg: "rgba(248,250,247,0.9)",
    footerNote: "Exam mode: write on real paper first — then check. That is exactly how the end-term works.",
    paperLabel: "Write it on paper first — then type your attempt to compare",
    outputPlaceholder: "e.g. revenue 9,600 · cost 5,600 · profit 4,000",
    typeMeta: {
        mcq: {
            label: "Multiple choice",
            color: "#0f5f58",
            bg: "#e2f1ec"
        },
        output: {
            label: "Write the numbers",
            color: "#7a5a14",
            bg: "#f7efdc"
        },
        short: {
            label: "Short answer",
            color: "#28423c",
            bg: "#eaf1ec"
        }
    },
    tiers: {
        topper: {
            t: "Topper tier — you are pen-paper ready.",
            c: "#3f6b2e"
        },
        solid: {
            t: "Solid. Rewrite the missed answers by hand and you are there.",
            c: "#8a6414"
        },
        getting: {
            t: "Getting there — go back to the notes for the misses, then retake.",
            c: "#a97d2c"
        },
        restart: {
            t: "Read the chapter notes once more, then retake — you will crush it.",
            c: "#8c2f3f"
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/custom-cards.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   CUSTOM CARDS — flashcards the reader forged with AI.

   The Card Forge (components/atlas/CardForge.tsx) sends one
   chapter's notes to /api/generate-cards, the reader accepts
   or rejects the drafts, and the accepted cards land here —
   localStorage "atlas:custom-cards:v1". From this store they
   flow into the SM-2 schedule, Quick Drill, spaced review,
   the ledger and the backup file exactly like bank questions;
   mock exams stay bank-only.

   ids are namespaced "custom:<uuid>" so they can never collide
   with a bank question id, and every card carries the shelf it
   was forged for, so grades and ledger rows land on the right
   shelf's schedule.

   Storage: same contract as the other atlas stores — a strict
   read, a guarded write, and on failure the store silently
   degrades to session-only (an in-memory list keeps the
   current tab working).
   ============================================================ */ __turbopack_context__.s([
    "CUSTOM_CARDS_KEY",
    ()=>CUSTOM_CARDS_KEY,
    "MAX_CUSTOM_CARDS",
    ()=>MAX_CUSTOM_CARDS,
    "addCustomCards",
    ()=>addCustomCards,
    "countCustomCards",
    ()=>countCustomCards,
    "countCustomCardsByShelf",
    ()=>countCustomCardsByShelf,
    "customToQuestion",
    ()=>customToQuestion,
    "listCustomCards",
    ()=>listCustomCards,
    "removeCustomCard",
    ()=>removeCustomCard
]);
const CUSTOM_CARDS_KEY = "atlas:custom-cards:v1";
const MAX_CUSTOM_CARDS = 500;
/* session-only fallback — private mode / quota keeps the tab alive */ let memory = null;
function validCard(c) {
    if (typeof c !== "object" || c === null || Array.isArray(c)) return false;
    const o = c;
    return typeof o.id === "string" && o.id.startsWith("custom:") && typeof o.shelfId === "string" && typeof o.chapterKey === "string" && typeof o.q === "string" && typeof o.a === "string" && typeof o.createdAt === "number" && Number.isFinite(o.createdAt);
}
function listCustomCards() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(CUSTOM_CARDS_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!parsed || !Array.isArray(parsed.cards)) return [];
        return parsed.cards.filter(validCard);
    } catch  {
        /* localStorage broken — the forge degrades to session-only */ return memory?.cards ?? [];
    }
}
function saveCards(cards) {
    memory = {
        cards
    };
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(CUSTOM_CARDS_KEY, JSON.stringify({
            cards
        }));
    } catch  {
    /* private mode / quota — the forge degrades to session-only */ }
}
function makeId() {
    try {
        if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
            return `custom:${crypto.randomUUID()}`;
        }
    } catch  {
    /* fall through to the manual stamp */ }
    return `custom:${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}
function addCustomCards(drafts) {
    const stamped = drafts.filter((d)=>d.q.trim() && d.a.trim()).map((d)=>({
            id: makeId(),
            shelfId: d.shelfId,
            chapterKey: d.chapterKey,
            q: d.q.trim(),
            a: d.a.trim(),
            createdAt: Date.now(),
            source: "ai"
        }));
    if (stamped.length === 0) return [];
    const kept = [
        ...listCustomCards(),
        ...stamped
    ].slice(-MAX_CUSTOM_CARDS);
    saveCards(kept);
    return stamped;
}
function removeCustomCard(id) {
    saveCards(listCustomCards().filter((c)=>c.id !== id));
}
function countCustomCards() {
    return listCustomCards().length;
}
function countCustomCardsByShelf() {
    const out = {};
    for (const c of listCustomCards())out[c.shelfId] = (out[c.shelfId] ?? 0) + 1;
    return out;
}
function customToQuestion(c) {
    return {
        id: c.id,
        type: "short",
        q: c.q,
        answerText: c.a
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/notes/ReviewWindow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewWindow",
    ()=>ReviewWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   SPACED REVIEW — the SM-2 session window.

   Pulls every due question for one subject (or, with subject
   "all", for EVERY shelf at once) out of the local schedule
   (see lib/sm2.ts), pours them into a synthetic bank, and runs
   the one shared ExamEngine — so review sessions look and
   behave exactly like exam windows: same themes, same draft
   safety, same results report.

   Cross-shelf sessions namespace each question's id
   ("atb:i1") so ids that collide across banks can't corrupt
   the engine state, and carry the original id + subject so
   grading still lands on the right shelf's schedule.

   AI-forged cards (lib/custom-cards.ts) are scheduled in the
   same SM-2 store, so due forged cards join the session by the
   same rule — pulled in alongside the bank cards, namespaced
   the same way in mixed sessions.

   Question banks are dynamically imported here, so the ledger
   chunk stays light until a review actually starts.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ExamEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ExamEngine.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/exam-themes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sm2.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/custom-cards.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atlas/subjects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
/** each shelf's bank map, one dynamic chunk per subject */ const BANK_LOADERS = {
    foc: ()=>__turbopack_context__.A("[project]/src/components/notes/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.EXAM_BANKS),
    atb: ()=>__turbopack_context__.A("[project]/src/components/atb/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.ATB_EXAM_BANKS),
    fa: ()=>__turbopack_context__.A("[project]/src/components/fa/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.FA_EXAM_BANKS),
    ebh: ()=>__turbopack_context__.A("[project]/src/components/ebh/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.EBH_EXAM_BANKS),
    stm: ()=>__turbopack_context__.A("[project]/src/components/stm/questions.ts [app-client] (ecmascript, async loader)").then((m)=>m.STM_EXAM_BANKS)
};
const MAX_REVIEW_CARDS = 20;
const ALL = "all";
function dayStamp() {
    const d = new Date();
    const m = `${d.getMonth() + 1}`.padStart(2, "0");
    const day = `${d.getDate()}`.padStart(2, "0");
    return `${d.getFullYear()}-${m}-${day}`;
}
function ReviewWindow({ subject, forceIds, onClose }) {
    _s();
    const [bank, setBank] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isAll = subject === ALL;
    const force = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReviewWindow.useMemo[force]": ()=>new Set(forceIds ?? [])
    }["ReviewWindow.useMemo[force]"], [
        forceIds
    ]);
    const meta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReviewWindow.useMemo[meta]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].find({
                "ReviewWindow.useMemo[meta]": (s)=>s.id === subject
            }["ReviewWindow.useMemo[meta]"])
    }["ReviewWindow.useMemo[meta]"], [
        subject
    ]);
    const theme = isAll ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REVIEW_ALL_THEME"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXAM_THEMES"][subject];
    /* day-scoped draft id — a review session keeps its work for the day;
     the whole-atlas session gets its own namespace */ const draftId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReviewWindow.useMemo[draftId]": ()=>isAll ? `review-all-${dayStamp()}` : `review-${dayStamp()}`
    }["ReviewWindow.useMemo[draftId]"], [
        isAll
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReviewWindow.useEffect": ()=>{
            let alive = true;
            const load = {
                "ReviewWindow.useEffect.load": async ()=>{
                    try {
                        const dueMap = new Map();
                        for (const [sid, rows] of Object.entries((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSm2"])())){
                            for (const [qid, card] of Object.entries(rows)){
                                if (card.due <= Date.now()) dueMap.set(`${sid}:${qid}`, card);
                            }
                        }
                        let picked = [];
                        let shelves = 0;
                        const isDue = {
                            "ReviewWindow.useEffect.load.isDue": (sid, qid)=>dueMap.has(`${sid}:${qid}`) || force.has(qid)
                        }["ReviewWindow.useEffect.load.isDue"];
                        if (isAll) {
                            /* every shelf at once — load all banks, namespaced per subject */ const maps = await Promise.all(Object.entries(BANK_LOADERS).map({
                                "ReviewWindow.useEffect.load": async ([sid, loader])=>[
                                        sid,
                                        await loader()
                                    ]
                            }["ReviewWindow.useEffect.load"]));
                            for (const [sid, bankMap] of maps){
                                const due = new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dueIds"])(sid));
                                let contributed = false;
                                for (const group of Object.values(bankMap)){
                                    for (const q of group.questions){
                                        if (due.has(q.id) || force.has(q.id)) {
                                            picked.push({
                                                ...q,
                                                id: `${sid}:${q.id}`,
                                                srcId: q.id,
                                                subject: sid
                                            });
                                            contributed = true;
                                        }
                                    }
                                }
                                if (contributed) shelves += 1;
                            }
                        } else {
                            const loader = BANK_LOADERS[subject];
                            const bankMap = loader ? await loader() : {};
                            const due = new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dueIds"])(subject));
                            for (const group of Object.values(bankMap)){
                                for (const q of group.questions){
                                    if (due.has(q.id) || force.has(q.id)) picked.push(q);
                                }
                            }
                            shelves = picked.length > 0 ? 1 : 0;
                        }
                        /* AI-forged cards live in the same schedule — due (or forced)
           ones join by the same rule, namespaced in mixed sessions */ for (const c of (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listCustomCards"])()){
                            if (!isAll && c.shelfId !== subject) continue;
                            if (!isDue(c.shelfId, c.id)) continue;
                            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$custom$2d$cards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customToQuestion"])(c);
                            picked.push(isAll ? {
                                ...q,
                                id: `${c.shelfId}:${c.id}`,
                                srcId: c.id,
                                subject: c.shelfId
                            } : q);
                        }
                        /* mixed sessions: count every shelf that actually contributed
           (a shelf with only forged cards due still counts) */ if (isAll) shelves = new Set(picked.map({
                            "ReviewWindow.useEffect.load": (p)=>p.subject
                        }["ReviewWindow.useEffect.load"]).filter(Boolean)).size;
                        // most overdue first, capped per session
                        picked.sort({
                            "ReviewWindow.useEffect.load": (a, b)=>(dueMap.get(a.id)?.due ?? 0) - (dueMap.get(b.id)?.due ?? 0)
                        }["ReviewWindow.useEffect.load"]);
                        const total = picked.length;
                        const capped = picked.slice(0, MAX_REVIEW_CARDS);
                        if (!alive) return;
                        const title = isAll ? "The whole atlas — spaced review" : meta?.title ?? subject;
                        const subtitle = total > 0 ? isAll ? `Spaced review — ${Math.min(total, MAX_REVIEW_CARDS)} of ${total} due card${total === 1 ? "" : "s"} across ${shelves} ${shelves === 1 ? "shelf" : "shelves"}` : `Spaced review — ${Math.min(total, MAX_REVIEW_CARDS)} of ${total} due card${total === 1 ? "" : "s"}` : "Spaced review";
                        setBank(total > 0 ? {
                            title,
                            subtitle,
                            questions: capped
                        } : {
                            title,
                            subtitle,
                            questions: []
                        });
                    } catch  {
                        if (alive) setFailed(true);
                    }
                }
            }["ReviewWindow.useEffect.load"];
            void load();
            return ({
                "ReviewWindow.useEffect": ()=>{
                    alive = false;
                }
            })["ReviewWindow.useEffect"];
        }
    }["ReviewWindow.useEffect"], [
        subject,
        meta,
        isAll,
        force
    ]);
    if (failed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleShell, {
            title: "Review",
            onClose: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[.9rem] font-semibold text-[#8c2f2f]",
                children: "The review session could not load its question bank. Check the connection and try again."
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/notes/ReviewWindow.tsx",
            lineNumber: 170,
            columnNumber: 7
        }, this);
    }
    if (!bank) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleShell, {
            title: "Review",
            onClose: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "h-8 w-8 animate-spin rounded-full border-2 border-[#e0cdb0] border-t-[#b45309]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.7rem] font-black uppercase tracking-[.22em] text-[#8a6d4f]",
                        children: "Gathering your due cards…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                lineNumber: 181,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/notes/ReviewWindow.tsx",
            lineNumber: 180,
            columnNumber: 7
        }, this);
    }
    if (bank.questions.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleShell, {
            title: "Review",
            onClose: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "mx-auto h-8 w-8 text-[#8fae5d]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display mt-3 text-xl font-bold text-[#2b1d10]",
                        children: isAll ? "Nothing is due on any shelf — the whole schedule is clear." : "Nothing is due — the schedule is clear."
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-2 max-w-md text-[.88rem] leading-relaxed text-[#6f5438]",
                        children: "Every card you have graded returns on its own interval. Take an exam window to seed new cards, or come back when the ledger says cards are due."
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        className: "exam-btn exam-btn-primary mt-5",
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                lineNumber: 194,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/notes/ReviewWindow.tsx",
            lineNumber: 193,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ExamEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExamEngine"], {
        theme: theme,
        bank: bank,
        draftId: draftId,
        onClose: onClose
    }, void 0, false, {
        fileName: "[project]/src/components/notes/ReviewWindow.tsx",
        lineNumber: 211,
        columnNumber: 10
    }, this);
}
_s(ReviewWindow, "+6AJUektXYBkBU29Vasbdt8ncgE=");
_c = ReviewWindow;
/* minimal paper shell for the load / empty / error states */ function SimpleShell({ title, onClose, children }) {
    _s1();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimpleShell.useEffect": ()=>{
            document.body.style.overflow = "hidden";
            return ({
                "SimpleShell.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["SimpleShell.useEffect"];
        }
    }["SimpleShell.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.99
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: 0.2,
            ease: "easeOut"
        },
        className: "fixed inset-0 z-[80] flex flex-col bg-[linear-gradient(180deg,#f7eedf_0%,#f3e7d3_100%)] outline-none",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": title,
        tabIndex: -1,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 border-b border-black/20 bg-[linear-gradient(160deg,#2b1b10,#402818)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-3xl items-center gap-x-4 px-4 py-3 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#ea580c,#c2410c)]",
                            children: title === "Review" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "h-4 w-4 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                                lineNumber: 236,
                                columnNumber: 35
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                className: "h-4 w-4 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                                lineNumber: 236,
                                columnNumber: 81
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[.95rem] font-black leading-tight text-[#ffe9c9]",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            "aria-label": "Close the review window",
                            className: "ml-auto flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[.06] text-[#ffe9c9] transition hover:bg-white/[.14]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 items-start justify-center overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto w-full max-w-3xl px-4 py-10 sm:px-6",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ReviewWindow.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/ReviewWindow.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
}
_s1(SimpleShell, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c1 = SimpleShell;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReviewWindow");
__turbopack_context__.k.register(_c1, "SimpleShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/notes/ReviewWindow.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/notes/ReviewWindow.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_c12c55f8._.js.map