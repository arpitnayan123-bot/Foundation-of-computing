(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/notes/PartBoundary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PartBoundary",
    ()=>PartBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   PartBoundary — a render shield around every animated Part
   section of a subject app. One throwing diagram (a bad math
   edge case, a framer-motion regression, a corrupt SVG path)
   used to unmount the ENTIRE subject to a white screen; now it
   trips only its own boundary and the reader keeps everything
   else on the page. "Try again" remounts the section fresh.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
class PartBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    state = {
        error: null,
        attempt: 0
    };
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    componentDidCatch(error) {
        // Keep the page alive; surface the failure for dev debugging.
        if ("TURBOPACK compile-time truthy", 1) {
            console.error("[PartBoundary]", this.props.label ?? "section", error);
        }
    }
    retry = ()=>{
        this.setState((s)=>({
                error: null,
                attempt: s.attempt + 1
            }));
    };
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "page-section",
                "aria-live": "polite",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto my-8 max-w-xl rounded-2xl border border-[#e8dcc0] bg-[#fffaf1] p-6 text-center shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-display text-lg font-bold text-[#2b1d10]",
                            children: [
                                "This diagram hit a snag",
                                this.props.label ? ` — ${this.props.label}` : "",
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/PartBoundary.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-[.85rem] leading-relaxed text-[#8a6d4f]",
                            children: "The rest of the chapter is unaffected — keep reading, or give the machine another chance."
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/PartBoundary.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: this.retry,
                            className: "mt-4 rounded-full border border-[#e8dcc0] bg-white px-5 py-2 text-[.68rem] font-black uppercase tracking-[.14em] text-[#8a4508] transition-colors hover:bg-[#f9e8d2]",
                            children: "Try again"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/PartBoundary.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/PartBoundary.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/PartBoundary.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
            children: this.props.children
        }, this.state.attempt, false, {
            fileName: "[project]/src/components/notes/PartBoundary.tsx",
            lineNumber: 66,
            columnNumber: 12
        }, this);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/components/notes/ui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Callout",
    ()=>Callout,
    "CodeBlock",
    ()=>CodeBlock,
    "KV",
    ()=>KV,
    "Pill",
    ()=>Pill,
    "Practice",
    ()=>Practice,
    "PyReadyToast",
    ()=>PyReadyToast,
    "Quiz",
    ()=>Quiz,
    "ReadStep",
    ()=>ReadStep,
    "Reveal",
    ()=>Reveal,
    "Section",
    ()=>Section,
    "SectionHead",
    ()=>SectionHead,
    "StepsFlow",
    ()=>StepsFlow,
    "Takeaways",
    ()=>Takeaways
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyruntime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pyruntime.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyguard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pyguard.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Reveal({ children, delay = 0, className = "" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [seen, setSeen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const io = new IntersectionObserver({
                "Reveal.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        setSeen(true);
                        io.disconnect();
                    }
                }
            }["Reveal.useEffect"], {
                threshold: 0.1,
                rootMargin: "0px 0px -36px 0px"
            });
            io.observe(el);
            return ({
                "Reveal.useEffect": ()=>io.disconnect()
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `reveal ${seen ? "reveal-in" : ""} ${className}`,
        style: {
            transitionDelay: `${delay}ms`
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/notes/ui.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(Reveal, "2Vtc1kvZUgtXZluuXq+CXe4S0Ok=");
_c = Reveal;
function Pill({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-lg border border-[#ecd9bd] bg-white/70 px-2.5 py-1 text-[.74rem] font-semibold text-[#8a5a06] shadow-sm",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/notes/ui.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c1 = Pill;
function KV({ k, v }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3.5 py-2.5 transition-colors duration-200 hover:border-[#e8cfa5] sm:flex-row sm:items-baseline sm:gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "shrink-0 font-mono text-[.72rem] font-bold uppercase tracking-wider text-[#a0410a]",
                children: k
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[.86rem] leading-relaxed text-[#241a0f]",
                children: v
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/ui.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c2 = KV;
function Section({ id, children, dark = false, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        "aria-label": id,
        className: `${dark ? "section-dark" : ""} section-pad scroll-mt-20 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-6xl px-4 sm:px-6",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/notes/ui.tsx",
            lineNumber: 115,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/notes/ui.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_c3 = Section;
function ReadStep({ n, title, sub, dark = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
        className: "mb-5 mt-12 first:mt-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f59e0b] to-[#c2410c] font-extrabold text-white shadow-md",
                    "aria-hidden": true,
                    children: n
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/ui.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: `text-xl font-bold leading-snug md:text-2xl ${dark ? "text-[#f5e6cd]" : "text-[#3e2c1d]"}`,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/ui.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        sub ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-[.82rem] ${dark ? "text-[#b99a75]" : "text-muted-warm"}`,
                            children: sub
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/ui.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/ui.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/notes/ui.tsx",
            lineNumber: 138,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/notes/ui.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_c4 = ReadStep;
function SectionHead({ eyebrow, title, lead, dark = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Reveal, {
        className: "mb-10 md:mb-14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "eyebrow",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mt-3 text-3xl font-bold leading-tight md:text-5xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            lead ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `mt-4 max-w-3xl text-base leading-relaxed md:text-lg ${dark ? "text-[#cbb392]" : "text-muted-warm"}`,
                children: lead
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/ui.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
_c5 = SectionHead;
/* ============================================================
   Python syntax highlighter (tiny, warm palette)
   ============================================================ */ const PY_KEYWORDS = new Set([
    "False",
    "None",
    "True",
    "and",
    "as",
    "assert",
    "break",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "nonlocal",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
]);
const PY_BUILTINS = new Set([
    "print",
    "len",
    "range",
    "list",
    "sorted",
    "min",
    "max",
    "sum",
    "int",
    "str",
    "float",
    "input",
    "append",
    "insert",
    "pop",
    "remove",
    "sort",
    "reverse",
    "title",
    "upper",
    "lower",
    "strip",
    "lstrip",
    "rstrip",
    "keys",
    "values",
    "items",
    "get",
    "set",
    "dict",
    "tuple",
    "enumerate",
    "zip",
    "abs",
    "round",
    "type",
    "clear",
    "copy",
    "count",
    "index"
]);
function tokenizePython(code) {
    const pattern = /(#.*$)|("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(\d[\d_]*\.?\d*)\b|([A-Za-z_][A-Za-z0-9_]*)|(\s+)|([^\sA-Za-z0-9_]+)/gm;
    const lines = [
        []
    ];
    let m;
    while((m = pattern.exec(code)) !== null){
        const [full, comment, str, num, word, ws, sym] = m;
        if (comment !== undefined) push(comment, "tk-c");
        else if (str !== undefined) push(str, "tk-s");
        else if (num !== undefined) push(num, "tk-n");
        else if (word !== undefined) {
            if (PY_KEYWORDS.has(word)) push(word, "tk-k");
            else if (PY_BUILTINS.has(word)) push(word, "tk-b");
            else push(word, "");
        } else if (ws !== undefined) push(ws, "ws");
        else if (sym !== undefined) push(sym, "tk-d");
    }
    function push(text, cls) {
        const parts = text.split("\n");
        parts.forEach((p, i)=>{
            if (i > 0) lines.push([]);
            if (p) lines[lines.length - 1].push({
                text: p,
                cls: cls === "ws" ? "" : cls
            });
        });
    }
    return lines;
}
function HighlightedCode({ code }) {
    const lines = tokenizePython(code);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
        className: "code-body",
        children: lines.map((toks, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mr-4 w-6 shrink-0 select-none text-right text-[#6d5236]",
                        children: i + 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-1",
                        children: [
                            toks.length === 0 ? " " : null,
                            toks.map((t, j)=>t.cls ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: t.cls,
                                    children: t.text
                                }, j, false, {
                                    fileName: "[project]/src/components/notes/ui.tsx",
                                    lineNumber: 246,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                    children: t.text
                                }, j, false, {
                                    fileName: "[project]/src/components/notes/ui.tsx",
                                    lineNumber: 250,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 242,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 238,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/notes/ui.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
_c6 = HighlightedCode;
function CodeBlock({ title = "main.py", code, output, note, className = "", runnable = true, pre, files, dark = false }) {
    _s1();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(code);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [bootMsg, setBootMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [out, setOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [elapsed, setElapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const termRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dirty = current !== code;
    const live = phase !== "idle";
    const busy = phase === "running";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeBlock.useEffect": ()=>{
            if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight;
        }
    }["CodeBlock.useEffect"], [
        out,
        err
    ]);
    async function run() {
        if (busy) return;
        setEditing(false);
        setPhase("running");
        setOut("");
        setErr("");
        setBootMsg("");
        setElapsed(0);
        const t0 = performance.now();
        try {
            // Global run lock: Pyodide exposes a single stdout/stderr/stdin handler
            // set, so two simultaneous runners would steal each other's output
            // (and the first finisher's cleanup would disconnect the second's
            // capture mid-run). Queue behind whatever else is executing.
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyruntime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withRunLock"])(async ()=>{
                const pyr = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyruntime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPyodide"])((m)=>setBootMsg(m));
                setBootMsg("");
                let lastOut = "";
                // capped push: a print flood can't grow the buffer unbounded
                const push = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyguard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeCappedPush"])((full)=>{
                    lastOut = full;
                    setOut(full);
                });
                pyr.setStdout({
                    batched: push
                });
                pyr.setStderr({
                    batched: push
                });
                pyr.setStdin({
                    stdin: ()=>{
                        try {
                            return window.prompt("Python input() is asking for a value — cancel = stop the program:");
                        } catch  {
                            return null; // prompt blocked (e.g. sandboxed iframe) → treat as EOF
                        }
                    }
                });
                try {
                    // Fresh module cache + virtual files for import demos.
                    await pyr.runPythonAsync(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyruntime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PURGE_USER_MODULES"]);
                    if (files) {
                        for (const [name, content] of Object.entries(files))pyr.FS.writeFile(name, content);
                    }
                    const wf = current.match(/^%%writefile\s+([^\s#]+)/);
                    if (wf) {
                        // Notebook magic: save the cell as a real file inside the runtime.
                        const name = wf[1];
                        const nl = current.indexOf("\n");
                        const body = (nl === -1 ? "" : current.slice(nl + 1)).replace(/^\n+/, "");
                        pyr.FS.writeFile(name, body);
                        push(`✓ saved ${name} (${body.split("\n").length} lines) — import blocks can now use it`);
                    } else {
                        const ns = pyr.globals.get("dict")();
                        try {
                            // step-guard: cooperative runaway-loop killer (see lib/pyguard.ts)
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyguard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withStepGuard"])(pyr, async ()=>{
                                if (pre) await pyr.runPythonAsync(pre, {
                                    globals: ns
                                });
                                await pyr.runPythonAsync(current, {
                                    globals: ns
                                });
                            });
                        } finally{
                            ns.destroy?.();
                        }
                    }
                } finally{
                    // handlers live and die with THIS run — a queued runner can install
                    // its own the moment we yield the lock
                    try {
                        pyr.setStdout();
                        pyr.setStderr();
                        pyr.setStdin();
                    } catch  {
                    /* already reset */ }
                }
            });
            setElapsed((performance.now() - t0) / 1000);
            setPhase("done");
        } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            setErr((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyruntime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanTraceback"])(msg) || msg);
            setElapsed((performance.now() - t0) / 1000);
            setPhase("error");
        }
    }
    function copy() {
        try {
            navigator.clipboard.writeText(current).then(()=>{
                setCopied(true);
                window.setTimeout(()=>setCopied(false), 1600);
            }, ()=>undefined);
        } catch  {
        /* clipboard unavailable */ }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `code-shell ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "code-bar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "code-dot",
                        style: {
                            background: "#e4674a"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 406,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "code-dot",
                        style: {
                            background: "#e8a13c"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 407,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "code-dot",
                        style: {
                            background: "#8fae5d"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "code-title ml-2",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 409,
                        columnNumber: 9
                    }, this),
                    runnable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: copy,
                                className: "code-icon-btn",
                                title: "Copy code",
                                "aria-label": "Copy code",
                                children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-3.5 w-3.5",
                                    style: {
                                        color: "#8fae5d"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ui.tsx",
                                    lineNumber: 419,
                                    columnNumber: 25
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ui.tsx",
                                    lineNumber: 419,
                                    columnNumber: 90
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 412,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setCurrent(code);
                                    setEditing((v)=>!v);
                                },
                                className: `code-icon-btn ${editing ? "code-icon-btn-on" : ""}`,
                                title: dirty ? "Editing — click ⟲ to restore the original" : editing ? "Done editing" : "Edit the code, then run it",
                                "aria-label": "Edit code",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ui.tsx",
                                    lineNumber: 431,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 421,
                                columnNumber: 13
                            }, this),
                            dirty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setCurrent(code),
                                className: "code-icon-btn",
                                title: "Restore the original code",
                                "aria-label": "Restore original code",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ui.tsx",
                                    lineNumber: 441,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 434,
                                columnNumber: 15
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: run,
                                disabled: busy,
                                className: "run-btn",
                                title: "Run this code live — real Python 3.12 in your browser",
                                children: [
                                    busy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-3.5 w-3.5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/ui.tsx",
                                        lineNumber: 451,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/ui.tsx",
                                        lineNumber: 451,
                                        columnNumber: 74
                                    }, this),
                                    busy ? "running" : "Run"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 444,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 411,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "readonly-chip",
                        title: "Illustrative snippet — not executable",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 457,
                                columnNumber: 13
                            }, this),
                            "read-only"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 456,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 405,
                columnNumber: 7
            }, this),
            editing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: current,
                onChange: (e)=>setCurrent(e.target.value),
                spellCheck: false,
                "aria-label": "Editable code",
                className: "code-edit",
                rows: Math.max(6, current.split("\n").length + 1)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 464,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HighlightedCode, {
                code: current
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 473,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: live ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    transition: {
                        duration: 0.22
                    },
                    style: {
                        overflow: "hidden"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "live-term",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "live-term-bar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/ui.tsx",
                                        lineNumber: 488,
                                        columnNumber: 17
                                    }, this),
                                    "LIVE RUN",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-auto normal-case tracking-normal opacity-70",
                                        children: bootMsg ? "python runtime" : "python 3.12 · webassembly"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/ui.tsx",
                                        lineNumber: 490,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 487,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                ref: termRef,
                                className: "live-term-body",
                                children: [
                                    bootMsg ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex items-center gap-2 text-[#f5c889]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-3.5 w-3.5 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/notes/ui.tsx",
                                                lineNumber: 497,
                                                columnNumber: 21
                                            }, this),
                                            " ",
                                            bootMsg
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/notes/ui.tsx",
                                        lineNumber: 496,
                                        columnNumber: 19
                                    }, this) : null,
                                    out ? out : !bootMsg && busy ? "\u2026" : "",
                                    !bootMsg && busy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "term-caret",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/ui.tsx",
                                        lineNumber: 501,
                                        columnNumber: 37
                                    }, this) : null,
                                    err ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tb-err",
                                        children: [
                                            err,
                                            "\\n"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/notes/ui.tsx",
                                        lineNumber: 502,
                                        columnNumber: 24
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 494,
                                columnNumber: 15
                            }, this),
                            phase === "done" || phase === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "live-term-foot",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: phase === "done" ? "foot-ok" : "foot-bad",
                                        children: phase === "done" ? `✓ finished in ${elapsed.toFixed(2)}s` : "✗ the program raised an error"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/ui.tsx",
                                        lineNumber: 506,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-auto opacity-60",
                                        children: "CPython · Pyodide"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/ui.tsx",
                                        lineNumber: 511,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 505,
                                columnNumber: 17
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 486,
                        columnNumber: 13
                    }, this)
                }, "live-term", false, {
                    fileName: "[project]/src/components/notes/ui.tsx",
                    lineNumber: 478,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 476,
                columnNumber: 7
            }, this),
            output && !runnable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "code-out",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "out-label",
                        children: "OUTPUT"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 524,
                        columnNumber: 11
                    }, this),
                    output
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 523,
                columnNumber: 9
            }, this) : null,
            note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#4a3020] bg-[rgba(255,220,170,.04)] px-5 py-3 text-[.8rem] leading-relaxed text-[#d9b88c]",
                children: note
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 529,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/ui.tsx",
        lineNumber: 404,
        columnNumber: 5
    }, this);
}
_s1(CodeBlock, "liSPPhBb/Tc1TY0skuelpFMX3X8=");
_c7 = CodeBlock;
function PyReadyToast() {
    _s2();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PyReadyToast.useEffect": ()=>{
            const onReady = {
                "PyReadyToast.useEffect.onReady": ()=>setShow(true)
            }["PyReadyToast.useEffect.onReady"];
            window.addEventListener("foc-py-ready", onReady);
            return ({
                "PyReadyToast.useEffect": ()=>window.removeEventListener("foc-py-ready", onReady)
            })["PyReadyToast.useEffect"];
        }
    }["PyReadyToast.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PyReadyToast.useEffect": ()=>{
            if (!show) return;
            const t = window.setTimeout({
                "PyReadyToast.useEffect.t": ()=>setShow(false)
            }["PyReadyToast.useEffect.t"], 6000);
            return ({
                "PyReadyToast.useEffect": ()=>window.clearTimeout(t)
            })["PyReadyToast.useEffect"];
        }
    }["PyReadyToast.useEffect"], [
        show
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: show ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 18,
                scale: 0.96
            },
            animate: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            exit: {
                opacity: 0,
                y: 10
            },
            transition: {
                type: "spring",
                stiffness: 320,
                damping: 26
            },
            role: "status",
            className: "fixed bottom-4 left-4 z-[70] flex max-w-[calc(100vw-2rem)] items-center gap-2.5 rounded-2xl border border-[#ecd9bd] bg-[#fffaf1]/95 px-4 py-3 shadow-2xl backdrop-blur-md",
            style: {
                boxShadow: "0 24px 50px -20px rgba(43,27,16,.5)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                    style: {
                        background: "linear-gradient(135deg,#ea580c,#c2410c)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "h-3.5 w-3.5 text-white"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 566,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/ui.tsx",
                    lineNumber: 565,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[.82rem] font-semibold leading-snug text-[#3e2c1d]",
                    children: [
                        "Python runtime ready — every ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-[.74rem] font-bold text-[#c2410c]",
                            children: "▶ Run"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/ui.tsx",
                            lineNumber: 569,
                            columnNumber: 42
                        }, this),
                        " button now executes live."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/ui.tsx",
                    lineNumber: 568,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>setShow(false),
                    "aria-label": "Dismiss",
                    className: "ml-1 rounded-lg p-1 text-[#7a5b39] transition-colors hover:bg-[#f6e3c8] hover:text-[#2b1d10]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 577,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/ui.tsx",
                    lineNumber: 571,
                    columnNumber: 11
                }, this)
            ]
        }, "py-toast", true, {
            fileName: "[project]/src/components/notes/ui.tsx",
            lineNumber: 555,
            columnNumber: 9
        }, this) : null
    }, void 0, false, {
        fileName: "[project]/src/components/notes/ui.tsx",
        lineNumber: 553,
        columnNumber: 5
    }, this);
}
_s2(PyReadyToast, "smdKxpcEMte5m9hRbnM2sHgA6H0=");
_c8 = PyReadyToast;
/* ============================================================
   Callout
   ============================================================ */ const CALLOUT_STYLES = {
    insight: {
        bg: "#fdf1e0",
        border: "#e8b878",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "h-4 w-4",
            style: {
                color: "#c2410c"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/notes/ui.tsx",
            lineNumber: 589,
            columnNumber: 54
        }, ("TURBOPACK compile-time value", void 0))
    },
    why: {
        bg: "#f6efdf",
        border: "#d9b96a",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
            className: "h-4 w-4",
            style: {
                color: "#b45309"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/notes/ui.tsx",
            lineNumber: 590,
            columnNumber: 50
        }, ("TURBOPACK compile-time value", void 0))
    },
    warn: {
        bg: "#fbe9e4",
        border: "#e6a08c",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
            className: "h-4 w-4",
            style: {
                color: "#be4a4a"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/notes/ui.tsx",
            lineNumber: 591,
            columnNumber: 51
        }, ("TURBOPACK compile-time value", void 0))
    },
    story: {
        bg: "#f4eee4",
        border: "#c9b18c",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
            className: "h-4 w-4",
            style: {
                color: "#7c6248"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/notes/ui.tsx",
            lineNumber: 592,
            columnNumber: 52
        }, ("TURBOPACK compile-time value", void 0))
    }
};
function Callout({ kind = "insight", title, children, dark = false }) {
    const s = CALLOUT_STYLES[kind];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl p-5",
        style: {
            background: dark ? "rgba(255,236,210,.06)" : s.bg,
            border: `1px solid ${dark ? "rgba(255,214,160,.18)" : s.border}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.14em]",
                children: [
                    s.icon,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: dark ? "#f5c889" : undefined
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 617,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mt-2 text-[.92rem] leading-relaxed ${dark ? "text-[#e9d7bf]" : "text-[#2b2014]"}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 619,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/ui.tsx",
        lineNumber: 608,
        columnNumber: 5
    }, this);
}
_c9 = Callout;
function Quiz({ q, options, answer, explain, source }) {
    _s3();
    const [chosen, setChosen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const revealed = chosen !== null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                        className: "mt-0.5 h-5 w-5 shrink-0",
                        style: {
                            color: "#c2410c"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 651,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "quiz-q font-semibold leading-snug text-[#3e2c1d]",
                                children: q
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 653,
                                columnNumber: 11
                            }, this),
                            source ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "quiz-src mt-1 text-[.7rem] font-bold uppercase tracking-[.16em] text-[#8a5a10]",
                                children: source
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 655,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 652,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 650,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 grid gap-2",
                children: options.map((opt, i)=>{
                    const isAnswer = i === answer;
                    const cls = !revealed ? "quiz-opt" : isAnswer ? "quiz-opt correct" : i === chosen ? "quiz-opt wrong" : "quiz-opt";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: cls,
                        disabled: revealed,
                        onClick: ()=>setChosen(i),
                        "aria-label": `Option ${i + 1}: ${opt}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-[.65rem] font-bold",
                                children: revealed && isAnswer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ui.tsx",
                                    lineNumber: 681,
                                    columnNumber: 19
                                }, this) : revealed && i === chosen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ui.tsx",
                                    lineNumber: 683,
                                    columnNumber: 19
                                }, this) : String.fromCharCode(65 + i)
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 679,
                                columnNumber: 15
                            }, this),
                            opt
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 672,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 661,
                columnNumber: 7
            }, this),
            revealed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "anim-pop mt-3 rounded-xl border border-[#e8dcc0] bg-[#fbf3e3] p-3 text-[.85rem] leading-relaxed text-[#2b2014]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: "#c2410c"
                        },
                        children: chosen === answer ? "Correct. " : "Not quite. "
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 695,
                        columnNumber: 11
                    }, this),
                    explain
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 694,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/ui.tsx",
        lineNumber: 649,
        columnNumber: 5
    }, this);
}
_s3(Quiz, "JjCznpNgYY01dNnW6Qf3QUJcMIk=");
_c10 = Quiz;
function Practice({ title, items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
        className: "drill",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            title,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 rounded-full bg-[#f6e3c8] px-2 py-0.5 text-[.65rem] font-bold text-[#8a4508]",
                                children: [
                                    items.length,
                                    " drills"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 720,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 718,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "ml-auto h-4 w-4 opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 724,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 717,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "drill-body",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "grid gap-3",
                    children: items.map((it, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex gap-3 text-[.88rem] leading-relaxed text-[#2b2014]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f59e0b] to-[#c2410c] text-[.7rem] font-bold text-white",
                                    children: i + 1
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ui.tsx",
                                    lineNumber: 730,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        it.q,
                                        it.hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            className: "mt-1 block text-[.8rem] font-medium text-[#8c2f2f]",
                                            children: [
                                                "Hint: ",
                                                it.hint
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/notes/ui.tsx",
                                            lineNumber: 736,
                                            columnNumber: 19
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/ui.tsx",
                                    lineNumber: 733,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/notes/ui.tsx",
                            lineNumber: 729,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/ui.tsx",
                    lineNumber: 727,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 726,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/ui.tsx",
        lineNumber: 716,
        columnNumber: 5
    }, this);
}
_c11 = Practice;
function Takeaways({ items, dark = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow mb-4",
                children: "Key takeaways"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 753,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid gap-3",
                children: items.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-start gap-3 text-[.92rem] leading-relaxed",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                                style: {
                                    background: dark ? "rgba(245,158,11,.2)" : "#efe0c3"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-3.5 w-3.5",
                                    style: {
                                        color: "#c2410c"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/ui.tsx",
                                    lineNumber: 761,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 757,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: dark ? "text-[#e9d7bf]" : "text-[#2b2014]",
                                children: t
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 763,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 756,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 754,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/ui.tsx",
        lineNumber: 752,
        columnNumber: 5
    }, this);
}
_c12 = Takeaways;
function StepsFlow({ steps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-stretch gap-3 md:flex-row md:items-center",
        children: steps.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ipo-node card-warm flex flex-1 items-center gap-3 p-4",
                        children: [
                            s.icon,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "sf-label font-bold text-[#3e2c1d]",
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/ui.tsx",
                                        lineNumber: 786,
                                        columnNumber: 15
                                    }, this),
                                    s.sub ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.78rem] text-muted-warm",
                                        children: s.sub
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/ui.tsx",
                                        lineNumber: 787,
                                        columnNumber: 24
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 785,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 783,
                        columnNumber: 11
                    }, this),
                    i < steps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 60 24",
                        className: "hidden h-6 w-14 shrink-0 md:block",
                        "aria-hidden": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M2 12 H50",
                                className: "flow-arrow-line",
                                stroke: "#c2410c",
                                strokeWidth: "2.5",
                                fill: "none"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 792,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M46 5 L56 12 L46 19",
                                stroke: "#c2410c",
                                strokeWidth: "2.5",
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/ui.tsx",
                                lineNumber: 799,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/ui.tsx",
                        lineNumber: 791,
                        columnNumber: 13
                    }, this) : null
                ]
            }, i, true, {
                fileName: "[project]/src/components/notes/ui.tsx",
                lineNumber: 782,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/notes/ui.tsx",
        lineNumber: 780,
        columnNumber: 5
    }, this);
}
_c13 = StepsFlow;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "Reveal");
__turbopack_context__.k.register(_c1, "Pill");
__turbopack_context__.k.register(_c2, "KV");
__turbopack_context__.k.register(_c3, "Section");
__turbopack_context__.k.register(_c4, "ReadStep");
__turbopack_context__.k.register(_c5, "SectionHead");
__turbopack_context__.k.register(_c6, "HighlightedCode");
__turbopack_context__.k.register(_c7, "CodeBlock");
__turbopack_context__.k.register(_c8, "PyReadyToast");
__turbopack_context__.k.register(_c9, "Callout");
__turbopack_context__.k.register(_c10, "Quiz");
__turbopack_context__.k.register(_c11, "Practice");
__turbopack_context__.k.register(_c12, "Takeaways");
__turbopack_context__.k.register(_c13, "StepsFlow");
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
]);

//# sourceMappingURL=src_components_notes_530f6322._.js.map