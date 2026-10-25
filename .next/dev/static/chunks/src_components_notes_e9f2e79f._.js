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
"[project]/src/components/notes/Playground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PythonLab",
    ()=>PythonLab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   PYTHON LAB — a tiny Colab for the revision page.
   Notebook-style cells with a shared, PERSISTENT kernel:
   variables defined in one cell stay alive for the next, In[n]
   counters, per-cell Run (or Shift+Enter), Run all, Restart,
   add / move / delete cells, and auto-save to localStorage.
   Real CPython 3.12 (Pyodide) running in the browser.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.js [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eraser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eraser$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eraser.js [app-client] (ecmascript) <export default as Eraser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-client] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyruntime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pyruntime.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyguard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pyguard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyhighlight$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pyhighlight.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/exam-runtime.ts [app-client] (ecmascript)");
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
const STORAGE_KEY = "foc-py-lab-v1";
let uidSeed = 0;
function uid() {
    uidSeed += 1;
    return `c${Date.now().toString(36)}${uidSeed}${Math.random().toString(36).slice(2, 6)}`;
}
/* module-scoped: survives close/reopen of the overlay within the page session */ let runtimeBooted = false;
const STARTERS = [
    `# Welcome to the Python Lab — your private mini-Colab.
# Press ▶ Run (or Shift + Enter) to execute a cell.
name = "Arpit"
print("Hello,", name)
print("2 ** 10 =", 2 ** 10)`,
    `# The kernel REMEMBERS — 'name' from the cell above is still alive.
topics = ["IPO", "Data", "Algorithms", "Python"]
for i, t in enumerate(topics, start=1):
    print(f"{i}. {t}")
print("Made for", name)`,
    `# Define something here, then use it in a NEW cell below.
def grade(marks):
    if marks >= 70:
        return "A"
    elif marks >= 40:
        return "PASS"
    return "RETRY"

print(grade(83), grade(55), grade(20))`
];
function makeCell(code) {
    return {
        id: uid(),
        code,
        out: "",
        err: "",
        count: null,
        ms: null
    };
}
function loadCells() {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const codes = JSON.parse(raw);
            if (Array.isArray(codes) && codes.length > 0 && codes.every((c)=>typeof c === "string")) {
                return codes.map(makeCell);
            }
        }
    } catch  {
    /* corrupted storage → fall through to starters */ }
    return STARTERS.map(makeCell);
}
/* ---------------- one cell ---------------- */ function CellView({ cell, index, total, busy, justAdded, onChange, onRun, onDelete, onMove }) {
    _s();
    const outRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const highlighted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CellView.useMemo[highlighted]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyhighlight$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["highlightPython"])(cell.code)
    }["CellView.useMemo[highlighted]"], [
        cell.code
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CellView.useEffect": ()=>{
            const el = outRef.current;
            if (el) el.scrollTop = el.scrollHeight;
        }
    }["CellView.useEffect"], [
        cell.out,
        cell.err
    ]);
    function copy() {
        try {
            navigator.clipboard.writeText(cell.code).then(()=>{
                setCopied(true);
                window.setTimeout(()=>setCopied(false), 1500);
            }, ()=>undefined);
        } catch  {
        /* clipboard unavailable */ }
    }
    const lines = cell.code.split("\n").length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 14
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.22,
            ease: "easeOut"
        },
        className: "lab-cell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lab-gutter",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `lab-count ${cell.count !== null ? "lab-count-live" : ""}`,
                    children: [
                        "In [",
                        cell.count === null ? "\u00A0" : cell.count,
                        "]"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/Playground.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Playground.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lab-toolbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onRun(true),
                                disabled: busy,
                                className: "run-btn",
                                title: busy ? "The kernel is busy — wait for the current cell" : "Run this cell (Shift + Enter)",
                                children: [
                                    busy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-3.5 w-3.5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/Playground.tsx",
                                        lineNumber: 179,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/Playground.tsx",
                                        lineNumber: 179,
                                        columnNumber: 72
                                    }, this),
                                    busy ? "kernel busy" : "Run"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/Playground.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-auto flex items-center gap-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onMove(-1),
                                        disabled: index === 0,
                                        className: "lab-icon-btn",
                                        title: "Move cell up",
                                        "aria-label": "Move cell up",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/Playground.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/Playground.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onMove(1),
                                        disabled: index === total - 1,
                                        className: "lab-icon-btn",
                                        title: "Move cell down",
                                        "aria-label": "Move cell down",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/Playground.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/Playground.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: copy,
                                        className: "lab-icon-btn",
                                        title: "Copy code",
                                        "aria-label": "Copy cell code",
                                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-4 w-4",
                                            style: {
                                                color: "#5c7a2e"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/Playground.tsx",
                                            lineNumber: 190,
                                            columnNumber: 25
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/Playground.tsx",
                                            lineNumber: 190,
                                            columnNumber: 86
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/Playground.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onDelete,
                                        className: "lab-icon-btn lab-icon-danger",
                                        title: "Delete cell",
                                        "aria-label": "Delete cell",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/Playground.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/Playground.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/Playground.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/Playground.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lab-editor",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "lab-hl",
                                "aria-hidden": true,
                                ref: hlRef,
                                dangerouslySetInnerHTML: {
                                    __html: highlighted + "\n"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/Playground.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: cell.code,
                                onChange: (e)=>onChange(e.target.value),
                                onScroll: (e)=>{
                                    const pre = hlRef.current;
                                    if (pre) {
                                        pre.scrollTop = e.currentTarget.scrollTop;
                                        pre.scrollLeft = e.currentTarget.scrollLeft;
                                    }
                                },
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter" && e.shiftKey) {
                                        e.preventDefault();
                                        onRun(true);
                                    }
                                },
                                spellCheck: false,
                                autoCapitalize: "off",
                                autoCorrect: "off",
                                autoFocus: justAdded,
                                "aria-label": `Code cell ${index + 1}`,
                                className: "lab-code",
                                rows: Math.min(Math.max(lines + 1, 3), 22)
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/Playground.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/Playground.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    cell.out || cell.err ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lab-out",
                        ref: outRef,
                        role: "status",
                        "aria-label": `Cell ${index + 1} output`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lab-out-bar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/Playground.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    "Out [",
                                    cell.count === null ? "\u00A0" : cell.count,
                                    "]",
                                    cell.ms !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "lab-out-meta",
                                        children: [
                                            "✓ finished in ",
                                            (cell.ms / 1000).toFixed(2),
                                            "s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/notes/Playground.tsx",
                                        lineNumber: 232,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/Playground.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "lab-out-body",
                                children: cell.out
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/Playground.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this),
                            cell.err ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "lab-out-body lab-out-err",
                                children: cell.err
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/Playground.tsx",
                                lineNumber: 236,
                                columnNumber: 25
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/Playground.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/Playground.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/Playground.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_s(CellView, "z7adT/NvDBCod8OLfCviU2N4QW8=");
_c = CellView;
function PythonLab({ open, onClose }) {
    _s1();
    const [cells, setCells] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const cellsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cold");
    const [bootMsg, setBootMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [justAdded, setJustAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const busyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const execRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const scrollBodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shellRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogA11y"])(open);
    /**
   * commit(persist=false) — state-only updates (output, timing, counters).
   * These arrive per stdout batch while a flood is running; writing the
   * full cell list to localStorage on every batch was a write-storm that
   * could jank the tab mid-flood. Only code shape changes persist.
   */ const commit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PythonLab.useCallback[commit]": (next, persist = true)=>{
            cellsRef.current = next;
            setCells(next);
            if (!persist) return;
            try {
                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next.map({
                    "PythonLab.useCallback[commit]": (c)=>c.code
                }["PythonLab.useCallback[commit]"])));
            } catch  {
            /* storage full / blocked — the lab still works, just no persistence */ }
        }
    }["PythonLab.useCallback[commit]"], []);
    const patch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PythonLab.useCallback[patch]": (id, p, persist = true)=>{
            commit(cellsRef.current.map({
                "PythonLab.useCallback[patch]": (c)=>c.id === id ? {
                        ...c,
                        ...p
                    } : c
            }["PythonLab.useCallback[patch]"]), persist);
        }
    }["PythonLab.useCallback[patch]"], [
        commit
    ]);
    /* boot state each time the lab opens */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PythonLab.useEffect": ()=>{
            if (!open) return;
            commit(loadCells());
            setStatus(runtimeBooted ? "ready" : "cold");
            document.body.style.overflow = "hidden";
            return ({
                "PythonLab.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["PythonLab.useEffect"];
        }
    }["PythonLab.useEffect"], [
        open
    ]);
    const onKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PythonLab.useCallback[onKeyDown]": (e)=>{
            if (e.key === "Escape" && !(e.target instanceof HTMLTextAreaElement)) onClose();
        }
    }["PythonLab.useCallback[onKeyDown]"], [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PythonLab.useEffect": ()=>{
            if (!open) return;
            document.addEventListener("keydown", onKeyDown);
            return ({
                "PythonLab.useEffect": ()=>document.removeEventListener("keydown", onKeyDown)
            })["PythonLab.useEffect"];
        }
    }["PythonLab.useEffect"], [
        open,
        onKeyDown
    ]);
    /* ---------------- kernel operations ---------------- */ const runCellRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PythonLab.useCallback[runCellRaw]": async (index)=>{
            const cell = cellsRef.current[index];
            if (!cell || busyRef.current) return;
            busyRef.current = true;
            setStatus({
                "PythonLab.useCallback[runCellRaw]": (s)=>runtimeBooted ? "busy" : "booting"
            }["PythonLab.useCallback[runCellRaw]"]);
            // Serialize through the global run lock: Pyodide has ONE stdout
            // handler, so a CodeBlock run elsewhere must never overlap this one.
            // While queued behind it, the UI correctly shows “kernel busy”.
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyruntime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withRunLock"])({
                "PythonLab.useCallback[runCellRaw]": async ()=>{
                    execRef.current += 1;
                    const count = execRef.current;
                    patch(cell.id, {
                        out: "",
                        err: "",
                        count,
                        ms: null
                    }, false);
                    let lastOut = "";
                    let rafId = 0;
                    const t0 = performance.now();
                    let py = null;
                    try {
                        py = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyruntime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPyodide"])({
                            "PythonLab.useCallback[runCellRaw]": (m)=>{
                                setBootMsg(m);
                                setStatus("booting");
                            }
                        }["PythonLab.useCallback[runCellRaw]"]);
                        const pyr = py;
                        runtimeBooted = true;
                        setBootMsg("");
                        const ns = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyruntime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotebookGlobals"])();
                        // capped push: a `while True: print(...)` flood can't OOM the tab.
                        // Output repaints are rAF-throttled and never hit localStorage.
                        const push = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyguard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeCappedPush"])({
                            "PythonLab.useCallback[runCellRaw].push": (full)=>{
                                lastOut = full;
                                if (!rafId) {
                                    rafId = window.requestAnimationFrame({
                                        "PythonLab.useCallback[runCellRaw].push": ()=>{
                                            rafId = 0;
                                            patch(cell.id, {
                                                out: lastOut
                                            }, false);
                                        }
                                    }["PythonLab.useCallback[runCellRaw].push"]);
                                }
                            }
                        }["PythonLab.useCallback[runCellRaw].push"]);
                        py.setStdout({
                            batched: push
                        });
                        py.setStderr({
                            batched: push
                        });
                        py.setStdin({
                            stdin: {
                                "PythonLab.useCallback[runCellRaw]": ()=>{
                                    try {
                                        return window.prompt("Python input() is asking for a value — cancel = stop the program:");
                                    } catch  {
                                        return null; // prompt blocked → EOF
                                    }
                                }
                            }["PythonLab.useCallback[runCellRaw]"]
                        });
                        const freshCode = cellsRef.current[index]?.code ?? cell.code;
                        // step-guard: cooperative runaway-loop killer (see lib/pyguard.ts)
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyguard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withStepGuard"])(pyr, {
                            "PythonLab.useCallback[runCellRaw]": async ()=>{
                                await pyr.runPythonAsync(freshCode, {
                                    globals: ns
                                });
                            }
                        }["PythonLab.useCallback[runCellRaw]"]);
                        patch(cell.id, {
                            ms: performance.now() - t0,
                            out: lastOut
                        }, false);
                    } catch (e) {
                        const msg = e instanceof Error ? e.message : String(e);
                        patch(cell.id, {
                            err: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyruntime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanTraceback"])(msg) || msg,
                            ms: performance.now() - t0
                        }, false);
                    } finally{
                        if (rafId) {
                            window.cancelAnimationFrame(rafId);
                            rafId = 0;
                        }
                        if (py) {
                            try {
                                py.setStdout();
                                py.setStderr();
                                py.setStdin();
                            } catch  {
                            /* handlers already reset */ }
                        }
                        busyRef.current = false;
                        setBootMsg("");
                        setStatus(runtimeBooted ? "ready" : "cold");
                    }
                }
            }["PythonLab.useCallback[runCellRaw]"]);
        }
    }["PythonLab.useCallback[runCellRaw]"], [
        patch
    ]);
    const addCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PythonLab.useCallback[addCell]": ()=>{
            if (busyRef.current) return;
            const c = makeCell("");
            const next = [
                ...cellsRef.current,
                c
            ];
            commit(next);
            setJustAdded(c.id);
            window.setTimeout({
                "PythonLab.useCallback[addCell]": ()=>{
                    scrollBodyRef.current?.scrollTo({
                        top: scrollBodyRef.current.scrollHeight,
                        behavior: "smooth"
                    });
                }
            }["PythonLab.useCallback[addCell]"], 60);
        }
    }["PythonLab.useCallback[addCell]"], [
        commit
    ]);
    const runCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PythonLab.useCallback[runCell]": (index, focusNew)=>{
            if (busyRef.current) return;
            const isLast = index === cellsRef.current.length - 1;
            void runCellRaw(index).then({
                "PythonLab.useCallback[runCell]": ()=>{
                    if (focusNew && isLast) addCell();
                }
            }["PythonLab.useCallback[runCell]"]);
        }
    }["PythonLab.useCallback[runCell]"], [
        runCellRaw,
        addCell
    ]);
    const runAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PythonLab.useCallback[runAll]": async ()=>{
            if (busyRef.current) return;
            const n = cellsRef.current.length;
            for(let i = 0; i < n; i++)await runCellRaw(i);
        }
    }["PythonLab.useCallback[runAll]"], [
        runCellRaw
    ]);
    const deleteCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PythonLab.useCallback[deleteCell]": (id)=>{
            if (busyRef.current) return;
            const next = cellsRef.current.filter({
                "PythonLab.useCallback[deleteCell].next": (c)=>c.id !== id
            }["PythonLab.useCallback[deleteCell].next"]);
            commit(next.length ? next : [
                makeCell("# New cell — write anything.\nprint(\"try me\")")
            ]);
        }
    }["PythonLab.useCallback[deleteCell]"], [
        commit
    ]);
    const moveCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PythonLab.useCallback[moveCell]": (id, dir)=>{
            if (busyRef.current) return;
            const arr = [
                ...cellsRef.current
            ];
            const i = arr.findIndex({
                "PythonLab.useCallback[moveCell].i": (c)=>c.id === id
            }["PythonLab.useCallback[moveCell].i"]);
            const j = i + dir;
            if (i < 0 || j < 0 || j >= arr.length) return;
            [arr[i], arr[j]] = [
                arr[j],
                arr[i]
            ];
            commit(arr);
        }
    }["PythonLab.useCallback[moveCell]"], [
        commit
    ]);
    const clearOutputs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PythonLab.useCallback[clearOutputs]": ()=>{
            commit(cellsRef.current.map({
                "PythonLab.useCallback[clearOutputs]": (c)=>({
                        ...c,
                        out: "",
                        err: "",
                        ms: null,
                        count: null
                    })
            }["PythonLab.useCallback[clearOutputs]"]), false);
            execRef.current = 0;
        }
    }["PythonLab.useCallback[clearOutputs]"], [
        commit
    ]);
    const restartKernel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PythonLab.useCallback[restartKernel]": async ()=>{
            if (busyRef.current) return;
            if (!window.confirm("Restart the kernel?\n\nEvery variable you defined in earlier cells will be wiped (like Runtime → Restart in Colab). Your cell code is kept.")) {
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyruntime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetNotebookGlobals"])();
            execRef.current = 0;
            commit(cellsRef.current.map({
                "PythonLab.useCallback[restartKernel]": (c)=>({
                        ...c,
                        out: "",
                        err: "",
                        ms: null,
                        count: null
                    })
            }["PythonLab.useCallback[restartKernel]"]), false);
            try {
                const py = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyruntime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPyodide"])();
                await py.runPythonAsync(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pyruntime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PURGE_USER_MODULES"]);
                runtimeBooted = true;
                setStatus("ready");
            } catch  {
                setStatus("cold");
            }
        }
    }["PythonLab.useCallback[restartKernel]"], [
        commit
    ]);
    if (!open) return null;
    const statusPill = status === "busy" ? {
        dot: "#e4674a",
        label: "kernel · running"
    } : status === "booting" ? {
        dot: "#e8a13c",
        label: bootMsg ? "kernel · booting…" : "kernel · booting"
    } : status === "ready" ? {
        dot: "#8fae5d",
        label: "kernel · ready"
    } : {
        dot: "#d6bd97",
        label: "kernel · idle"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: shellRef,
        tabIndex: -1,
        initial: {
            opacity: 0,
            scale: 0.985
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: 0.22,
            ease: "easeOut"
        },
        className: "lab-shell fixed inset-0 z-[80] flex flex-col overflow-hidden outline-none",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Python Lab — runnable notebook",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "lab-aurora lab-aurora-a"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Playground.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "lab-aurora lab-aurora-b"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Playground.tsx",
                lineNumber: 491,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lab-head relative z-10 shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "lab-badge-glow flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                            style: {
                                background: "linear-gradient(135deg,#ea580c,#c2410c)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"], {
                                className: "h-4.5 w-4.5 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/Playground.tsx",
                                lineNumber: 497,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Playground.tsx",
                            lineNumber: 496,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.95rem] font-black leading-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "lab-title",
                                            children: "Python Lab"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/Playground.tsx",
                                            lineNumber: 501,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 rounded-full border border-[#f5c889]/25 bg-white/[.07] px-2 py-0.5 text-[.58rem] font-extrabold uppercase tracking-[.16em] text-[#f5c889]",
                                            children: "Colab mode"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/Playground.tsx",
                                            lineNumber: 502,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/Playground.tsx",
                                    lineNumber: 500,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.68rem] leading-tight text-[#c9a97e]",
                                    children: "Your private night-lab — real CPython 3.12 in the browser. Run here, then rewrite by hand for the paper exam."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Playground.tsx",
                                    lineNumber: 506,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/Playground.tsx",
                            lineNumber: 499,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[.06] px-2.5 py-1 text-[.6rem] font-extrabold uppercase tracking-[.14em] text-[#f0e2c8]",
                                    title: "One shared kernel — variables persist across cells",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `h-1.5 w-1.5 rounded-full ${status === "busy" || status === "booting" ? "lab-dot-pulse" : ""}`,
                                            style: {
                                                background: statusPill.dot,
                                                boxShadow: `0 0 0 3px ${statusPill.dot}33`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/Playground.tsx",
                                            lineNumber: 516,
                                            columnNumber: 15
                                        }, this),
                                        statusPill.label
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/Playground.tsx",
                                    lineNumber: 512,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>void restartKernel(),
                                    disabled: status === "busy" || status === "booting",
                                    className: "flex h-8 items-center gap-1.5 rounded-lg border border-white/15 bg-white/[.06] px-2.5 text-[.68rem] font-bold text-[#f0e2c8] transition hover:bg-white/[.12] disabled:opacity-40",
                                    title: "Restart the kernel — wipe all variables",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/Playground.tsx",
                                            lineNumber: 529,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Restart"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/Playground.tsx",
                                            lineNumber: 530,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/Playground.tsx",
                                    lineNumber: 522,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    "aria-label": "Close the Python Lab",
                                    className: "flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[.06] text-[#ffe9c9] transition hover:bg-white/[.14]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/Playground.tsx",
                                        lineNumber: 538,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Playground.tsx",
                                    lineNumber: 532,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/Playground.tsx",
                            lineNumber: 511,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/Playground.tsx",
                    lineNumber: 495,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Playground.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 shrink-0 border-b border-[#f5c889]/10 bg-[#180d04]/60 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-5xl flex-wrap items-center gap-2 px-4 py-2.5 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: addCell,
                            disabled: status === "busy",
                            className: "lab-tool-btn",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Playground.tsx",
                                    lineNumber: 548,
                                    columnNumber: 13
                                }, this),
                                "New cell"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/Playground.tsx",
                            lineNumber: 547,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>void runAll(),
                            disabled: status === "busy" || status === "booting",
                            className: "lab-tool-btn",
                            children: [
                                status === "busy" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-3.5 w-3.5 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Playground.tsx",
                                    lineNumber: 552,
                                    columnNumber: 34
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Playground.tsx",
                                    lineNumber: 552,
                                    columnNumber: 85
                                }, this),
                                "Run all"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/Playground.tsx",
                            lineNumber: 551,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: clearOutputs,
                            disabled: status === "busy",
                            className: "lab-tool-btn",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eraser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eraser$3e$__["Eraser"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Playground.tsx",
                                    lineNumber: 556,
                                    columnNumber: 13
                                }, this),
                                "Clear outputs"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/Playground.tsx",
                            lineNumber: 555,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "ml-auto hidden items-center gap-1.5 text-[.68rem] font-semibold text-[#a98c66] sm:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "lab-kbd",
                                    children: "Shift"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Playground.tsx",
                                    lineNumber: 560,
                                    columnNumber: 13
                                }, this),
                                "+",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                    className: "lab-kbd",
                                    children: "Enter"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Playground.tsx",
                                    lineNumber: 560,
                                    columnNumber: 50
                                }, this),
                                " runs a cell",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mx-1 opacity-40",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Playground.tsx",
                                    lineNumber: 561,
                                    columnNumber: 13
                                }, this),
                                "variables stay alive between cells"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/Playground.tsx",
                            lineNumber: 559,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/Playground.tsx",
                    lineNumber: 546,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Playground.tsx",
                lineNumber: 545,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollBodyRef,
                className: "lab-scroll relative z-10 flex-1 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-5xl px-4 py-6 sm:px-6",
                    children: [
                        cells.map((cell, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CellView, {
                                cell: cell,
                                index: i,
                                total: cells.length,
                                busy: status === "busy" || status === "booting",
                                justAdded: justAdded === cell.id,
                                onChange: (code)=>patch(cell.id, {
                                        code
                                    }),
                                onRun: (focusNew)=>runCell(i, focusNew),
                                onDelete: ()=>deleteCell(cell.id),
                                onMove: (dir)=>moveCell(cell.id, dir)
                            }, cell.id, false, {
                                fileName: "[project]/src/components/notes/Playground.tsx",
                                lineNumber: 571,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: addCell,
                            disabled: status === "busy",
                            className: "lab-add-strip",
                            "aria-label": "Add a new cell",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Playground.tsx",
                                    lineNumber: 586,
                                    columnNumber: 13
                                }, this),
                                "Add a cell — try your own idea"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/Playground.tsx",
                            lineNumber: 585,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-6 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "lab-note",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/notes/Playground.tsx",
                                        lineNumber: 592,
                                        columnNumber: 15
                                    }, this),
                                    "Real CPython 3.12 · WebAssembly — nothing leaves your browser. Cells auto-save locally."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/notes/Playground.tsx",
                                lineNumber: 591,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Playground.tsx",
                            lineNumber: 590,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/Playground.tsx",
                    lineNumber: 569,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Playground.tsx",
                lineNumber: 568,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/Playground.tsx",
        lineNumber: 478,
        columnNumber: 5
    }, this);
}
_s1(PythonLab, "9HEkdHvCuq30OxyMjlx99OnqwWU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogA11y"]
    ];
});
_c1 = PythonLab;
var _c, _c1;
__turbopack_context__.k.register(_c, "CellView");
__turbopack_context__.k.register(_c1, "PythonLab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/notes/questions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   TEST MY KNOWLEDGE — question banks, one per chapter group.
   Framed for PEN-PAPER exams: heavy on "write the output",
   trace-the-code, definitions and small write-the-program
   tasks — the formats that actually appear on paper.
   Every answer has been hand-checked by executing the logic.
   ============================================================ */ __turbopack_context__.s([
    "EXAM_BANKS",
    ()=>EXAM_BANKS,
    "EXAM_GROUPS",
    ()=>EXAM_GROUPS,
    "TOTAL_QUESTIONS",
    ()=>TOTAL_QUESTIONS
]);
/* ------------------------------------------------------------
   GROUP 1 — FOUNDATIONS  (why · computing · pillars · data)
   ------------------------------------------------------------ */ const FOUNDATIONS = [
    {
        id: "f1",
        type: "mcq",
        q: "The IPO model — the core idea of computing — stands for…",
        options: [
            "Input → Print → Output",
            "Input → Process → Output",
            "Internet → Program → Object",
            "Integrate → Process → Optimise"
        ],
        answer: 1,
        explain: "A computer accepts INPUT (data), PROCESSES it (the CPU follows instructions) and produces OUTPUT (the result). Your phone, an ATM, a washing machine — every device is an IPO machine."
    },
    {
        id: "f2",
        type: "mcq",
        q: "Your smartwatch records the raw number 72. When the app shows “72 bpm — resting heart rate, healthy zone”, the number has become…",
        options: [
            "hardware",
            "information — processed, organised data that carries meaning",
            "a flowchart",
            "binary"
        ],
        answer: 1,
        explain: "Raw 72 is DATA. Once it is processed and given context it becomes INFORMATION. Data is the ingredient; information is the cooked dish."
    },
    {
        id: "f3",
        type: "mcq",
        q: "The DIKW ladder, in the correct order, is…",
        options: [
            "Data → Information → Knowledge → Wisdom",
            "Information → Data → Knowledge → Wisdom",
            "Data → Knowledge → Information → Wisdom",
            "Wisdom → Knowledge → Information → Data"
        ],
        answer: 0,
        explain: "Data (raw) → Information (organised) → Knowledge (patterns applied) → Wisdom (knowing which action is right). Remember it as D-I-K-W."
    },
    {
        id: "f4",
        type: "mcq",
        q: "The binary number 1101 is which decimal number?",
        options: [
            "11",
            "13",
            "9",
            "26"
        ],
        answer: 1,
        explain: "Place values double from the right: 8, 4, 2, 1. Add the places holding a 1: 8 + 4 + 0 + 1 = 13."
    },
    {
        id: "f5",
        type: "output",
        q: "Convert the decimal number 45 into binary. Show the division-by-2 work, then write the final answer.",
        answerText: "45 ÷ 2 = 22 remainder 1\n22 ÷ 2 = 11 remainder 0\n11 ÷ 2 =  5 remainder 1\n 5 ÷ 2 =  2 remainder 1\n 2 ÷ 2 =  1 remainder 0\n 1 ÷ 2 =  0 remainder 1\n\nRead the remainders BOTTOM-UP →  45₁₀ = 101101₂",
        explain: "Repeatedly divide by 2 and collect remainders; reading them in reverse gives the binary. Check: 32 + 8 + 4 + 1 = 45 ✓"
    },
    {
        id: "f6",
        type: "short",
        q: "Why do computers work in binary (only 0s and 1s)? Give two reasons.",
        answerText: "1. A transistor — the computer's smallest building block — has two perfectly reliable states: ON (high voltage) and OFF (low voltage). Two states map naturally to 1 and 0.\n2. Binary is extremely noise-resistant: a slightly distorted voltage still snaps to the nearest state, so signals rarely get misread.\n(Bonus: with just two symbols, any number, letter, pixel or sound can be encoded as patterns of bits.)",
        explain: "Two clear states = cheap to build, fast, and almost impossible to misread. That reliability is why binary won."
    },
    {
        id: "f7",
        type: "mcq",
        q: "Which sequence of storage units is correct, smallest to largest?",
        options: [
            "1 Byte → 8 Bits → 1 KB → 1 MB → 1 GB",
            "8 Bits → 1 Byte → 1 KB → 1 MB → 1 GB",
            "1 Bit → 1 Byte → 1 MB → 1 KB → 1 GB",
            "8 Bits → 1 KB → 1 Byte → 1 MB → 1 GB"
        ],
        answer: 1,
        explain: "8 bits = 1 byte; 1024 B = 1 KB; 1024 KB = 1 MB; 1024 MB = 1 GB."
    },
    {
        id: "f8",
        type: "mcq",
        q: "Google Maps shows your route as a simple line on a simplified map — it hides lane widths, buildings and traffic-light timings. This is an example of which pillar?",
        options: [
            "Decomposition",
            "Abstraction — hiding low-level detail to show what matters",
            "Debugging",
            "Binary encoding"
        ],
        answer: 1,
        explain: "Abstraction = keeping the essential, hiding the irrelevant. A metro map, a phone icon, a function — all abstractions."
    },
    {
        id: "f9",
        type: "short",
        q: "State the difference between DATA and INFORMATION, with one example of each.",
        answerText: "DATA = raw facts and figures with no context on their own.  Example: 98.6, 37.5, 72.\nINFORMATION = data that has been processed / organised so it carries meaning.  Example: “The patient's temperature readings (98.6°F, 37.5°C) are both normal.”\nData is the raw ingredient; information is the processed, meaningful result.",
        explain: "Examiners want the word pair: raw vs processed/organised + meaning — and an example."
    },
    {
        id: "f10",
        type: "mcq",
        q: "Which of these is UNSTRUCTURED data?",
        options: [
            "A marks table with Name / Roll No / Marks columns",
            "A photograph taken on your phone",
            "A spreadsheet of monthly sales",
            "A railway timetable"
        ],
        answer: 1,
        explain: "A photo has no fixed rows-and-columns schema — it is unstructured (like video and voice). Tables and spreadsheets are structured."
    },
    {
        id: "f11",
        type: "mcq",
        q: "“Eye colour (brown / green / hazel)” is which type of data?",
        options: [
            "Quantitative — discrete",
            "Quantitative — continuous",
            "Qualitative — categorical",
            "Binary — machine code"
        ],
        answer: 2,
        explain: "It describes a QUALITY/ category, not a measurable amount → qualitative (categorical)."
    },
    {
        id: "f12",
        type: "output",
        q: "Trace this algorithm and write BOTH lines of output.",
        code: "STEP 1: total ← 0\nSTEP 2: FOR each mark IN [12, 18, 30]\nSTEP 3:     total ← total + mark\nSTEP 4: PRINT total\nSTEP 5: PRINT total / 3",
        answerText: "60\n20.0",
        explain: "total accumulates 12 → 30 → 60. Then it prints 60, and 60 ÷ 3. In Python, / ALWAYS gives a float → 20.0 (a favourite trick in pen-paper questions!)."
    },
    {
        id: "f13",
        type: "short",
        q: "One of the Four Pillars is DECOMPOSITION. Define it and give one example.",
        answerText: "Decomposition = breaking a big problem into smaller, independent sub-problems that are easier to solve.\nExample: a food-delivery app splits into login, restaurant listing, cart, payment and order tracking — each part is built and tested separately, then combined.",
        explain: "Definition + example = full marks. Mention 'smaller, manageable parts'."
    },
    {
        id: "f14",
        type: "mcq",
        q: "Which of these is NOT one of the Four Pillars of computational thinking?",
        options: [
            "Pattern recognition",
            "Abstraction",
            "Algorithm design",
            "Debugging"
        ],
        answer: 3,
        explain: "The four pillars are: Decomposition, Pattern recognition, Abstraction and Algorithm design. Debugging is a skill you use while programming, not a pillar."
    },
    {
        id: "f15",
        type: "mcq",
        q: "Which of these is CONTINUOUS quantitative data?",
        options: [
            "Number of students in a class",
            "Height of a plant measured every day",
            "Shoe sizes",
            "Number of bugs fixed this week"
        ],
        answer: 1,
        explain: "Height can take ANY value in a range (21.3 cm, 21.37 cm…) — measured, not counted → continuous. Counts come in whole steps → discrete."
    },
    {
        id: "f16",
        type: "mcq",
        q: "A PROGRAM is best described as…",
        options: [
            "an electronic chip inside the CPU",
            "a set of step-by-step instructions that tells the computer exactly what to do",
            "any folder full of files on the desktop",
            "the electricity that powers the machine"
        ],
        answer: 1,
        explain: "A program is just INSTRUCTIONS written in a language the computer can translate and follow. Programming = writing those instructions so the machine can execute them without guessing."
    },
    {
        id: "f17",
        type: "mcq",
        q: "Renaming 500 files by hand takes hours. You write a 6-line script that finishes the job in one second. This is the biggest everyday reason to learn coding — it is called…",
        options: [
            "decoration",
            "automation — letting the computer repeat boring work perfectly",
            "encryption",
            "simulation"
        ],
        answer: 1,
        explain: "Computers never get bored and never typo. Automating a repetitive task is the first superpower coding gives you — write the steps ONCE, run them a thousand times."
    },
    {
        id: "f18",
        type: "mcq",
        q: "At an ATM you insert your card, the machine checks your PIN against the bank's records and then dispenses cash. In IPO terms, CHECKING the PIN is the…",
        options: [
            "Input",
            "Process",
            "Output",
            "Storage"
        ],
        answer: 1,
        explain: "Input = card + PIN entered. Process = the checking/decision (the actual work). Output = cash + receipt. Spotting which stage a sentence describes is a standard 1-mark question."
    },
    {
        id: "f19",
        type: "mcq",
        q: "A washing machine takes in dirty clothes, detergent and water, runs the wash cycle, and gives out clean clothes. Which IPO mapping is CORRECT?",
        options: [
            "Input: clean clothes · Process: wash cycle · Output: dirty clothes",
            "Input: dirty clothes, detergent, water · Process: wash cycle · Output: clean clothes",
            "Input: wash cycle · Process: dirty clothes · Output: water",
            "Input: electricity only · Process: none · Output: clean clothes"
        ],
        answer: 1,
        explain: "Input = what goes IN (raw materials), process = what the machine DOES, output = the result that comes OUT. Every device — ATM, oven, phone — can be mapped like this."
    },
    {
        id: "f20",
        type: "output",
        q: "Trace this algorithm and write BOTH lines of output, in order.",
        code: "STEP 1: FOR each n IN [3, 8, 5, 10]\nSTEP 2:     IF n is EVEN:\nSTEP 3:         PRINT n × 2",
        answerText: "16\n20",
        explain: "3 → odd, skipped. 8 → even → 8 × 2 = 16. 5 → odd, skipped. 10 → even → 10 × 2 = 20. Tracing means playing computer: one step at a time, no shortcuts."
    },
    {
        id: "f21",
        type: "mcq",
        q: "Look at the sequence 2, 4, 8, 16, … — a computer spotting the rule 'each number DOUBLES' and predicting the next term (32) is using which pillar?",
        options: [
            "Decomposition",
            "Pattern recognition",
            "Generalisation by abstraction",
            "Debugging"
        ],
        answer: 1,
        explain: "Pattern recognition = spotting similarities or repeating rules (doubling here) and using them to predict or simplify. Finding the rule is the pillar; 32 is just the payoff."
    },
    {
        id: "f22",
        type: "short",
        q: "State the difference between ABSTRACTION and DECOMPOSITION — one line each, plus one example of each.",
        answerText: "DECOMPOSITION = breaking a big problem DOWN into smaller sub-problems.  Example: building a food app → login + cart + payment + tracking.\nABSTRACTION = HIDING low-level detail and keeping only what matters.  Example: the 'call' button on a phone hides radio, SIM and network layers behind one tap.\nDecomposition splits the problem into parts; abstraction simplifies each part by hiding its internals.",
        explain: "The examiner wants the verb pair: break DOWN vs hide detail. If your two definitions use those verbs, the mark is yours."
    },
    {
        id: "f23",
        type: "mcq",
        q: "Which of these is an ALGORITHM (and which are not)?",
        options: [
            "“Cook the rice until it tastes right.”",
            "“Add some sugar, maybe a lot, depending on mood.”",
            "“Boil 1 cup water → add rice → stir for exactly 10 min → drain → serve.” — exact, ordered, finishable steps",
            "“Rice is tasty.” — an opinion about the outcome"
        ],
        answer: 2,
        explain: "An algorithm is finite, definite and effective: every step has ONE meaning, the steps are in order, and it ends. 'To taste' and 'some/maybe' are ambiguous — opinions describe, they don't instruct."
    },
    {
        id: "f24",
        type: "mcq",
        q: "In the binary number 1011, what is the PLACE VALUE of the third digit from the RIGHT?",
        options: [
            "1",
            "2",
            "4",
            "8"
        ],
        answer: 2,
        explain: "Binary place values double from the right: 1, 2, 4, 8, 16… The third place from the right is 4. Nail the place values and every conversion question becomes easy addition."
    },
    {
        id: "f25",
        type: "output",
        q: "Convert the binary number 101011 into decimal. Show the place-value addition.",
        answerText: "1 0 1 0 1 1\n32+16 +8 +4 +2 +1  →  add the places holding a 1:\n32 + 8 + 2 + 1 = 43\n\nSo  101011₂ = 43₁₀",
        explain: "Places from the right: 1, 2, 4, 8, 16, 32. A 1 sits at 32, 8, 2 and 1 → 43. The zero places (16, 4) contribute nothing. Reverse-check by converting 43 back by repeated division."
    },
    {
        id: "f26",
        type: "short",
        q: "One song is 5 MB. Roughly how many such songs fit on a 1 GB pen drive (1 GB = 1024 MB)? Show your working.",
        answerText: "1 GB = 1024 MB\nNumber of songs = 1024 ÷ 5 = 204.8\n→ about 204 full songs (the .8 song doesn't fit).\n\nRemind yourself of the ladder: 8 bits = 1 Byte · 1024 B = 1 KB · 1024 KB = 1 MB · 1024 MB = 1 GB.",
        explain: "Two marks live here: the conversion (GB → MB, ×1024) and the division. Say 'about 204' — estimating with the binary ladder is the expected method."
    },
    {
        id: "f27",
        type: "mcq",
        q: "“Number of students present out of 60” is which type of data?",
        options: [
            "Quantitative — DISCRETE (counted in whole steps)",
            "Quantitative — continuous (measured)",
            "Qualitative — categorical",
            "Unstructured data"
        ],
        answer: 0,
        explain: "You can't have 30.5 students — attendance comes in whole steps you COUNT → discrete quantitative. Height/weight are the measured (continuous) pair; eye colour is the categorical one."
    },
    {
        id: "f28",
        type: "mcq",
        q: "A marks sheet with fixed columns — Roll No / Name / Marks — is called STRUCTURED data because…",
        options: [
            "it is printed on paper",
            "it has no fixed schema",
            "every row follows the same fixed schema (rows × columns), so a program can store and search it directly",
            "it contains only numbers"
        ],
        answer: 2,
        explain: "Structured = a fixed, repeating organisation (rows and columns) that software can query directly. Photos, audio and free text have no such schema → unstructured."
    },
    {
        id: "f29",
        type: "mcq",
        q: "A weather app stores raw rainfall numbers, draws tomorrow's rain chart, and finally advises “carry an umbrella”. On the DIKW ladder, the ADVICE is which level?",
        options: [
            "Data",
            "Information",
            "Knowledge",
            "Wisdom — knowing which ACTION to take"
        ],
        answer: 3,
        explain: "Numbers = data; the organised chart = information; the derived pattern = knowledge; the recommendation to ACT (take the umbrella) = wisdom. Wisdom always answers 'so what should I do?'."
    },
    {
        id: "f30",
        type: "output",
        q: "Trace this algorithm and write BOTH lines of output.",
        code: "marks ← [40, 62, 91, 55, 70]\npassed ← 0\nFOR each m IN marks:\n    IF m ≥ 60:\n        passed ← passed + 1\nPRINT passed\nPRINT LENGTH(marks)",
        answerText: "3\n5",
        explain: "62, 91 and 70 pass the ≥ 60 test → passed counts 1, 2, 3. 40 and 55 fail. The list length is 5 regardless — 3 out of 5 passed. Counter + condition inside a loop is the most-traced pattern on paper."
    }
];
/* ------------------------------------------------------------
   GROUP 2 — MACHINES  (algorithms · hardware · software)
   ------------------------------------------------------------ */ const MACHINES = [
    {
        id: "m1",
        type: "mcq",
        q: "Which one is NOT a property of a good algorithm?",
        options: [
            "Finiteness — it must end",
            "Definiteness — every step is unambiguous",
            "Ambiguity — steps can be read two ways",
            "Effectiveness — each step is basic enough to actually perform"
        ],
        answer: 2,
        explain: "An algorithm must be the OPPOSITE of ambiguous: each step has exactly one meaning. Finiteness, definiteness, input, output and effectiveness are the classic properties."
    },
    {
        id: "m2",
        type: "mcq",
        q: "In a flowchart, the DIAMOND symbol represents…",
        options: [
            "Start / End",
            "A process step",
            "A decision (Yes / No branch)",
            "Input / Output"
        ],
        answer: 2,
        explain: "Oval = start/end · parallelogram = input/output · rectangle = process · diamond = decision. Draw them correctly — symbols carry marks!"
    },
    {
        id: "m3",
        type: "mcq",
        q: "In a flowchart, the PARALLELOGRAM represents…",
        options: [
            "Input / Output",
            "A decision",
            "Start / End",
            "A connector"
        ],
        answer: 0,
        explain: "Parallelogram = INPUT or OUTPUT (e.g., INPUT marks, PRINT total)."
    },
    {
        id: "m4",
        type: "output",
        q: "Trace the algorithm and write the output.",
        code: "total ← 0\nFOR i FROM 1 TO 5:\n    total ← total + i\nPRINT total",
        answerText: "15",
        explain: "1 + 2 + 3 + 4 + 5 = 15. Accumulator loops like this are the #1 paper question."
    },
    {
        id: "m5",
        type: "code",
        q: "Write a pseudocode / flowchart logic that inputs three numbers and prints the LARGEST of them.",
        solution: "INPUT a, b, c\nlargest ← a\nIF b > largest:\n    largest ← b\nIF c > largest:\n    largest ← c\nPRINT largest",
        answerText: "Example run — input 7, 19, 12 → prints 19",
        explain: "Keep a running maximum: assume the first value is largest, then challenge it with each remaining value. This pattern extends to N numbers."
    },
    {
        id: "m6",
        type: "mcq",
        q: "Which part of the CPU performs arithmetic (+, −) and logic (AND, OR, comparisons)?",
        options: [
            "Control Unit",
            "ALU — the Arithmetic Logic Unit",
            "Registers",
            "RAM"
        ],
        answer: 1,
        explain: "ALU does the maths and comparisons; the Control Unit directs traffic; registers are tiny ultra-fast storage inside the CPU."
    },
    {
        id: "m7",
        type: "mcq",
        q: "The correct order of the machine (instruction) cycle is…",
        options: [
            "Decode → Fetch → Execute",
            "Fetch → Decode → Execute",
            "Execute → Fetch → Decode",
            "Fetch → Execute → Decode"
        ],
        answer: 1,
        explain: "FETCH the instruction from memory → DECODE what it means (Control Unit) → EXECUTE it (ALU). Billions of times per second."
    },
    {
        id: "m8",
        type: "mcq",
        q: "Why is RAM called VOLATILE memory?",
        options: [
            "It is very slow",
            "Its contents vanish when the power is switched off",
            "It cannot be read twice",
            "It stores only pictures"
        ],
        answer: 1,
        explain: "RAM holds the programs you are running right now — cut the power and it's empty. That's why you save your file to disk (non-volatile)."
    },
    {
        id: "m9",
        type: "mcq",
        q: "Which of these is SECONDARY storage?",
        options: [
            "RAM",
            "CPU cache",
            "SSD / hard disk",
            "Registers"
        ],
        answer: 2,
        explain: "Secondary storage keeps data when power is off — SSD/HDD, pen drives, CDs. RAM, cache and registers are primary (volatile) memory."
    },
    {
        id: "m10",
        type: "short",
        q: "State the difference between a COMPILER and an INTERPRETER.",
        answerText: "COMPILER — translates the ENTIRE program into machine code BEFORE it runs; after that the program runs fast; all errors are reported together after compiling.  (e.g., C)\nINTERPRETER — translates and runs the code LINE BY LINE; stops at the first error it meets, which makes it easier to test and debug.  (e.g., Python)",
        explain: "Key words: whole-at-once vs line-by-line; errors together vs stops at first error. Give one language example of each."
    },
    {
        id: "m11",
        type: "mcq",
        q: "MACHINE language is written in…",
        options: [
            "English keywords like PRINT",
            "0s and 1s (binary) that the CPU executes directly",
            "Flowchart symbols",
            "Python"
        ],
        answer: 1,
        explain: "Machine language = raw binary the CPU understands natively. Assembly adds short mnemonics; high-level languages (Python) read like English and must be translated down."
    },
    {
        id: "m12",
        type: "mcq",
        q: "Windows, Linux and macOS are examples of…",
        options: [
            "Application software",
            "System software — the Operating System",
            "Programming languages",
            "Hardware"
        ],
        answer: 1,
        explain: "The OS is system software: it manages the hardware and lets application software run. Apps like Chrome or Word sit ON TOP of it."
    },
    {
        id: "m13",
        type: "short",
        q: "Name any THREE functions of an operating system.",
        answerText: "Any three of:\n• Memory management — giving programs their RAM\n• Process / CPU scheduling — deciding which program runs when\n• File management — folders, saving, opening files\n• Device management — drivers for keyboard, printer, etc.\n• User interface — GUI / CLI\n• Security — passwords, permissions",
        explain: "Pick the three you can explain in one line each — definition + micro-example."
    },
    {
        id: "m14",
        type: "mcq",
        q: "Python is called a HIGH-LEVEL language because…",
        options: [
            "It runs only on supercomputers",
            "It reads like English and hides hardware details from the programmer",
            "It is compiled to assembly",
            "It cannot do arithmetic"
        ],
        answer: 1,
        explain: "High-level = close to human thinking, far from the machine; portable and easy to read. The translation to binary is handled for you."
    },
    {
        id: "m15",
        type: "output",
        q: "A flowchart inputs MARKS, then decides: IF marks ≥ 40 → print PASS, otherwise → print FAIL. What is the output if the input is 75?",
        answerText: "PASS",
        explain: "75 ≥ 40 is true, so control follows the YES branch of the decision diamond. Trace both branches before answering — examiners love the boundary case marks = 40."
    },
    {
        id: "m16",
        type: "mcq",
        q: "An algorithm for making tea contains this step: “Add sugar to taste.” Which property of a good algorithm does it BREAK?",
        options: [
            "Finiteness — it never ends",
            "Definiteness — the step is ambiguous ('to taste' can mean anything)",
            "Input — tea has no input",
            "Effectiveness — nobody can add sugar"
        ],
        answer: 1,
        explain: "'To taste', 'some', 'a little' — ambiguous steps are the classic defect. A machine needs ONE exact meaning per step: 'add 2 teaspoons of sugar' would be definite."
    },
    {
        id: "m17",
        type: "output",
        q: "Trace this find-the-maximum algorithm and write the output.",
        code: "nums ← [7, 19, 4, 25, 3]\nlargest ← nums[0]\nFOR each n IN nums:\n    IF n > largest:\n        largest ← n\nPRINT largest",
        answerText: "25",
        explain: "largest starts at 7, then 19 beats it → 19; 4 and 3 lose; 25 beats 19 → 25. This running-maximum skeleton is the same one you'd write for 3 numbers (m5) or 3 million — trace it line by line."
    },
    {
        id: "m18",
        type: "mcq",
        q: "You look for your friend's name in an UNSORTED attendance list by reading every line from the top until you find it. This method is called…",
        options: [
            "binary search — it halves the list every step",
            "linear search — check items one by one from the start",
            "sorting",
            "the machine cycle"
        ],
        answer: 1,
        explain: "Checking items one-by-one = LINEAR search — it works on any list (sorted or not) but is slow for big lists. Binary search is far faster but needs a SORTED list first."
    },
    {
        id: "m19",
        type: "mcq",
        q: "In a flowchart, the plain RECTANGLE represents…",
        options: [
            "A decision (Yes / No)",
            "Start / End",
            "A process step — 'do this calculation / action'",
            "A connector between pages"
        ],
        answer: 2,
        explain: "Full symbol set: oval = start/end · parallelogram = input/output · rectangle = process · diamond = decision · small circle = connector. Symbols carry marks — use the right shape."
    },
    {
        id: "m20",
        type: "output",
        q: "The input given is temp = 30. Which line does this algorithm PRINT?",
        code: "INPUT temp\nIF temp > 40:\n    PRINT \"very hot\"\nELIF temp > 25:\n    PRINT \"warm\"\nELSE:\n    PRINT \"cool\"",
        answerText: "warm",
        explain: "30 > 40 is FALSE → first branch skipped. 30 > 25 is TRUE → 'warm' prints and the else is never read. Conditions are tested top-down and the FIRST true one wins — a classic trap when two conditions could both hold."
    },
    {
        id: "m21",
        type: "mcq",
        q: "Which part of the CPU acts like the TRAFFIC POLICE — deciding which instruction runs next and directing the ALU, memory and registers?",
        options: [
            "ALU",
            "Control Unit (CU)",
            "Cache",
            "Hard disk"
        ],
        answer: 1,
        explain: "CU = Control Unit: it fetches, decodes and orchestrates; it does NO maths itself. The ALU is the calculator under the CU's direction. 'Traffic police / manager' is the standard one-line answer."
    },
    {
        id: "m22",
        type: "mcq",
        q: "The SMALLEST and FASTEST kind of memory — sitting right inside the CPU and holding data the CPU is working on this instant — is…",
        options: [
            "RAM",
            "Registers",
            "SSD",
            "ROM"
        ],
        answer: 1,
        explain: "Speed ladder: registers (inside CPU, fastest, tiniest) → cache → RAM → SSD/HDD. The further from the CPU, the bigger and slower the storage gets."
    },
    {
        id: "m23",
        type: "short",
        q: "The CPU executes the instruction ADD A, B. Describe what happens in each of the three machine-cycle stages (fetch · decode · execute).",
        answerText: "FETCH — the Control Unit collects the ADD instruction from memory (it sits at some address).\nDECODE — the CU works out what the instruction MEANS: 'add the value in B to the value in A'.\nEXECUTE — the ALU performs the addition and the result is stored back (in A / a register).\nThen the cycle repeats for the next instruction — billions of times per second.",
        explain: "One line per stage is enough, but each line must name the stage's job: collect → interpret → do. Mentioning the CU (fetch/decode) and ALU (execute) earns the third mark."
    },
    {
        id: "m24",
        type: "mcq",
        q: "Which memory keeps its contents even when the power is OFF and holds the startup instructions the computer needs to boot?",
        options: [
            "RAM",
            "Cache",
            "ROM — Read-Only Memory",
            "Registers"
        ],
        answer: 2,
        explain: "ROM is non-volatile and (as good as) read-only — the boot firmware lives there. RAM is the volatile opposite: fast workspace, empty the moment power is cut."
    },
    {
        id: "m25",
        type: "mcq",
        q: "Which device is BOTH an input AND an output device?",
        options: [
            "Printer",
            "Keyboard",
            "Touchscreen — it displays AND accepts touch",
            "Mouse"
        ],
        answer: 2,
        explain: "A touchscreen shows you the screen (output) and reads your finger taps (input). Printer = output only; keyboard and mouse = input only. Device classification is a guaranteed 1-marker."
    },
    {
        id: "m26",
        type: "short",
        q: "Your laptop has BOTH 16 GB RAM and a 512 GB SSD. Why does a computer need both? Give two clear reasons.",
        answerText: "1. Different jobs: RAM is the fast, temporary WORKSPACE holding the programs currently running; the SSD is permanent STORAGE holding files and software while the power is off.\n2. Different trade-offs: RAM is much faster but volatile (contents vanish on power-off) and costlier per GB; the SSD is slower but non-volatile and roomy.\nBoot with nothing in RAM — copy your file from SSD to RAM to work on it, and save it back when done.",
        explain: "Key contrast words: workspace vs storage, volatile vs non-volatile, fast+small vs slower+big. One example of the save/load flow seals the answer."
    },
    {
        id: "m27",
        type: "mcq",
        q: "MS Word, Chrome and the Camera app are examples of…",
        options: [
            "System software",
            "Application software — programs the USER chooses to run",
            "Firmware",
            "Operating systems"
        ],
        answer: 1,
        explain: "Application software = the tools you directly use (Word, Chrome, games). They run ON TOP of system software (the OS), which manages the hardware underneath."
    },
    {
        id: "m28",
        type: "mcq",
        q: "A program written in an INTERPRETED language has an error on line 3 and another on line 10. What happens when you run it?",
        options: [
            "Both errors are reported together before anything runs",
            "Lines 1–2 run, the interpreter stops at line 3 — line 10 is never reached until line 3 is fixed",
            "The whole program runs, ignoring errors",
            "Only line 10 runs"
        ],
        answer: 1,
        explain: "An interpreter translates and runs line by line and stops at the FIRST error. A compiler (m10) would have reported both errors together before running anything. That difference is the classic comparison question."
    },
    {
        id: "m29",
        type: "mcq",
        q: "Which statement about ASSEMBLY language is TRUE?",
        options: [
            "It is written in raw 0s and 1s with no helper tools",
            "It uses short mnemonics like ADD and MOV (one step above machine language) and still needs a translator (assembler)",
            "It is a high-level language like Python",
            "It is another name for the flowchart language"
        ],
        answer: 1,
        explain: "The ladder: machine language (raw binary) → assembly (mnemonics like ADD/MOV, translated by an ASSEMBLER) → high-level languages (Python, human-friendly, translated by compiler/interpreter)."
    },
    {
        id: "m30",
        type: "short",
        q: "Hardware is often called the 'body' and software the 'mind/soul' of a computer. Explain the relationship between the two with one example of each.",
        answerText: "HARDWARE = the physical parts you can touch — CPU, RAM, keyboard, screen, SSD.\nSOFTWARE = the invisible instructions that tell the hardware what to do — OS, apps, games.\nThey need each other: software without hardware has nothing to run on; hardware without software is a lifeless box.\nExample pair: the printer (hardware) prints because the printer driver + Word (software) send it instructions; pressing 'P' (hardware) only types because the OS + editor (software) interpret the signal.",
        explain: "Define both, state the dependence both ways, then one concrete example pair. 'Touch it vs can't touch it' is the fastest definition line for the exam."
    }
];
/* ------------------------------------------------------------
   GROUP 3 — PYTHON CORE  (python · basics · lists · if · dicts · while)
   ------------------------------------------------------------ */ const PYCORE = [
    {
        id: "p1",
        type: "output",
        q: "Write the output of this program (one line, four values).",
        code: 'x = 7\ny = 2\nprint(x * y, x ** y, x // y, x % y)',
        answerText: "14 49 3 1",
        explain: "* multiply → 14 · ** power → 49 · // floor division → 3 (7 ÷ 2 = 3.5, floored) · % remainder → 1. The // and % pair is asked CONSTANTLY on paper."
    },
    {
        id: "p2",
        type: "mcq",
        q: "What data type does input() ALWAYS return in Python?",
        options: [
            "int",
            "str — even if the user types a number",
            "float",
            "bool"
        ],
        answer: 1,
        explain: "input() returns a string. To do maths you must convert: age = int(input(\"age: \")). Forgetting this cast is the classic paper trap: input 5 + 5 gives \"55\", not 10."
    },
    {
        id: "p3",
        type: "output",
        q: "Write the output (all three values on one line).",
        code: 'name = "python"\nprint(name[0], name[-1], name[2:5])',
        answerText: "p n tho",
        explain: "Index 0 → first letter 'p' · index −1 → last letter 'n' · slice [2:5] → positions 2,3,4 → 'tho' (stop index 5 is EXCLUDED)."
    },
    {
        id: "p4",
        type: "output",
        q: "Write all three lines of output exactly.",
        code: 'print("3" + "4")\nprint(3 + 4)\nprint("ha" * 3)',
        answerText: "34\n7\nhahaha",
        explain: "\"3\" + \"4\" CONCATENATES strings → \"34\".  3 + 4 adds numbers → 7.  string * int REPEATS the string. Mixing types on purpose is a favourite exam trick."
    },
    {
        id: "p5",
        type: "mcq",
        q: "Which is a VALID Python variable name?",
        options: [
            "2marks",
            "my-name",
            "student_name",
            "class"
        ],
        answer: 2,
        explain: "Names can't start with a digit (2marks ✗), can't contain a hyphen (my-name ✗ — Python reads it as minus), and can't be a reserved keyword (class ✗). Letters, digits and _ are allowed; don't start with a digit."
    },
    {
        id: "p6",
        type: "output",
        q: "Write the output exactly as Python would print it.",
        code: 'colors = ["red", "green", "blue", "yellow"]\nprint(colors[1:3])',
        answerText: "['green', 'blue']",
        explain: "Slice [1:3] starts at index 1 and stops BEFORE index 3 → 'green' and 'blue'. Print a list and Python shows it with quotes and brackets."
    },
    {
        id: "p7",
        type: "output",
        q: "Write the output of this list program.",
        code: "nums = [1, 2, 3]\nnums.append(4)\nnums.insert(0, 0)\nprint(nums)",
        answerText: "[0, 1, 2, 3, 4]",
        explain: "append(4) adds at the END → [1,2,3,4]; insert(0, 0) pushes 0 in at INDEX 0 → [0,1,2,3,4]. Order of operations matters — do them one line at a time on paper."
    },
    {
        id: "p8",
        type: "mcq",
        q: "What is the difference between list.sort() and sorted(list)?",
        options: [
            "They are identical",
            "sort() rearranges the ORIGINAL list and returns None; sorted() leaves the original alone and returns a NEW sorted list",
            "sorted() only works on numbers",
            "sort() returns a new list"
        ],
        answer: 1,
        explain: "x = nums.sort() gives you None (a classic trap!); x = sorted(nums) gives you the new sorted copy. sort() mutates, sorted() returns."
    },
    {
        id: "p9",
        type: "output",
        q: "Write the output of this program.",
        code: "scores = [10, 20, 30]\nscores[1] = 99\nprint(len(scores), scores)",
        answerText: "3 [10, 99, 30]",
        explain: "Assigning to scores[1] REPLACES the value at index 1 (20 → 99); the length stays 3. Lists are mutable — paper exams test this constantly."
    },
    {
        id: "p10",
        type: "output",
        q: "Write BOTH lines of output.",
        code: 'd = {"name": "Aman", "age": 19}\nprint(d["age"] + 1)\nprint(d.get("city"))',
        answerText: "20\nNone",
        explain: "d[\"age\"] finds the value 19 → +1 prints 20. d.get(\"city\") returns None for a MISSING key instead of crashing — while d[\"city\"] would raise KeyError."
    },
    {
        id: "p11",
        type: "code",
        q: 'Write a program that counts how many vowels are in word = "programming" and prints the count.',
        solution: 'word = "programming"\ncount = 0\nfor ch in word:\n    if ch in "aeiou":\n        count = count + 1\nprint(count)',
        answerText: "Output: 3   (o, a, i)",
        explain: "Loop over each character; `ch in \"aeiou\"` is the membership test; add 1 when it's True. Same skeleton counts digits, spaces or any character set."
    },
    {
        id: "p12",
        type: "output",
        q: "Write the output on one line, exactly as printed.",
        code: 'for i in range(1, 6, 2):\n    print(i, end=" ")',
        answerText: "1 3 5",
        explain: "range(1, 6, 2) → start 1, stop 6 (excluded), step 2 → 1, 3, 5. end=\" \" replaces the usual newline, so everything lands on one line with spaces."
    },
    {
        id: "p13",
        type: "output",
        q: "Write all lines of output, in order.",
        code: "n = 3\nwhile n > 0:\n    print(n)\n    n = n - 1",
        answerText: "3\n2\n1",
        explain: "Runs while n > 0: prints 3, 2, 1. When n becomes 0 the condition fails and the loop ends. If you forget n = n − 1 the loop never stops — infinite loop!"
    },
    {
        id: "p14",
        type: "mcq",
        q: "Inside a loop, what does `continue` do?",
        options: [
            "Exits the loop completely",
            "Skips the rest of the CURRENT iteration and jumps to the next one",
            "Restarts the program",
            "Pauses the loop forever"
        ],
        answer: 1,
        explain: "break = leave the loop. continue = skip to the next round. Mixing these two up is one of the most common paper mistakes."
    },
    {
        id: "p15",
        type: "output",
        q: "Write the output.",
        code: 'x = 12\nif x % 2 == 0 and x % 3 == 0:\n    print("six")\nelse:\n    print("no")',
        answerText: "six",
        explain: "12 % 2 == 0 → True; 12 % 3 == 0 → True; True and True → the if-branch runs. Swap x to 9 and the answer changes to no (9 % 2 is 1)."
    },
    {
        id: "p16",
        type: "code",
        q: 'Write a program: marks = 78 is given. Print "A" if marks ≥ 90, "B" if ≥ 75, "C" if ≥ 60, otherwise "D". State the output for 78.',
        solution: 'marks = 78\nif marks >= 90:\n    print("A")\nelif marks >= 75:\n    print("B")\nelif marks >= 60:\n    print("C")\nelse:\n    print("D")',
        answerText: "Output: B",
        explain: "Conditions are tested TOP-DOWN and the first True wins: 78 fails 90, passes 75 → B. Writing the branches in the wrong order breaks the logic — mention that ordering matters!"
    },
    {
        id: "p17",
        type: "mcq",
        q: 'colors = ["red", "green", "blue"] — what happens when Python runs print(colors[5])?',
        options: [
            "Prints an empty string",
            "IndexError — list index out of range",
            "Prints None",
            "Prints blue"
        ],
        answer: 1,
        explain: "Valid indexes are 0–2 (or −3 to −1). Index 5 doesn't exist → IndexError: list index out of range."
    },
    {
        id: "p18",
        type: "output",
        q: "Write all THREE lines of output exactly.",
        code: 'name = "ada lovelace"\nprint(name.title())\nprint(name.upper())\nprint(len(name))',
        answerText: "Ada Lovelace\nADA LOVELACE\n12",
        explain: ".title() capitalises each word · .upper() makes everything capitals · len() counts characters — and the SPACE between the words counts too: 3 + 1 + 8 = 12. Methods don't change the original string unless you reassign it."
    },
    {
        id: "p19",
        type: "mcq",
        q: 'age = 19 — why does print("I am " + age) FAIL, and which line is a correct fix?',
        options: [
            "print() cannot use +; the fix is print(\"I am \" . age)",
            "Strings and ints can't be joined with + — fix it with an f-string: print(f\"I am {age}\") (or \"I am \" + str(age))",
            "age must be written in capital letters",
            "It does not fail — it prints I am 19"
        ],
        answer: 1,
        explain: "+ means different things per type: str + str joins, int + int adds, but str + int is a TypeError. Convert with str(age) or let an f-string do it for you: f\"I am {age}\"."
    },
    {
        id: "p20",
        type: "output",
        q: "Write the output exactly as printed.",
        code: "print(int(7.9), float(4))",
        answerText: "7 4.0",
        explain: "int() CHOPS the decimal part (it never rounds up — 7.9 → 7). float(4) makes the whole number into 4.0. Casting questions like this are free marks if you remember: int() truncates, it doesn't round."
    },
    {
        id: "p21",
        type: "output",
        q: "Write the output exactly as printed.",
        code: 'a = "5"\nb = "6"\nprint(a + b, int(a) + int(b))',
        answerText: "56 11",
        explain: "a and b are STRINGS, so a + b glues them → \"56\". int(a) + int(b) converts first, then adds → 11. Same symbols, two totally different results — the #1 string-vs-number trap on paper."
    },
    {
        id: "p22",
        type: "mcq",
        q: "Which line correctly creates a TUPLE with the single value 5?",
        options: [
            "t = (5)",
            "t = (5,)",
            "t = [5]",
            "t = tuple(5)"
        ],
        answer: 1,
        explain: "The COMMA makes the tuple, not the parentheses — (5) is just the number 5 in brackets. [5] is a list, and tuple(5) is an error. Say 'one-element tuple needs a trailing comma' for the mark."
    },
    {
        id: "p23",
        type: "output",
        q: "Write the output of this list program.",
        code: "nums = [10, 20, 30, 20]\nnums.remove(20)\nprint(nums)",
        answerText: "[10, 30, 20]",
        explain: "remove(20) deletes only the FIRST occurrence of 20 (index 1) and shifts the rest left — the second 20 stays. To delete all copies you'd need a loop. 'First occurrence only' is the trap this question hunts for."
    },
    {
        id: "p24",
        type: "output",
        q: "Write the output on one line.",
        code: "marks = [45, 82, 77]\nprint(min(marks), max(marks), sum(marks))",
        answerText: "45 82 204",
        explain: "min → 45, max → 82, sum → 45 + 82 + 77 = 204. These three built-ins + len() are the standard list toolbox — combine them freely: average = sum(marks) / len(marks)."
    },
    {
        id: "p25",
        type: "output",
        q: "Write BOTH lines of output (True or False).",
        code: 'day = "sunday"\nprint(day == "saturday" or day == "sunday")\nprint(not day == "monday")',
        answerText: "True\nTrue",
        explain: "or needs ONE True → day is sunday, so the first line is True (even though the saturday test fails). not flips: day == monday is False, not False → True. Trace or = 'either passes', not = 'opposite day'."
    },
    {
        id: "p26",
        type: "output",
        q: "Write the output exactly as printed.",
        code: 'stock = {"pen": 10}\nstock["book"] = 5\nstock["pen"] = 3\nprint(stock, "pen" in stock)',
        answerText: "{'pen': 3, 'book': 5} True",
        explain: "Assigning to a NEW key (book) ADDS the pair; assigning to an EXISTING key (pen) OVERWRITES 10 → 3. The membership test in checks KEYS, and \"pen\" is a key → True."
    },
    {
        id: "p27",
        type: "output",
        q: "Write both lines of output.",
        code: 'd = {"a": 1, "b": 2, "c": 3}\nprint(list(d.keys()))\nprint(list(d.values()))',
        answerText: "['a', 'b', 'c']\n[1, 2, 3]",
        explain: "d.keys() gives the labels, d.values() gives the data; list() turns each view into a real list so print shows it with brackets. Order follows the order the keys were written in the dictionary."
    },
    {
        id: "p28",
        type: "output",
        q: "Write the output of this program.",
        code: "n = 1\ntotal = 0\nwhile True:\n    total = total + n\n    if total > 10:\n        break\n    n = n + 1\nprint(n, total)",
        answerText: "5 15",
        explain: "total grows 1 → 3 → 6 → 10 (not yet > 10) → 15. The moment total hits 15, break fires and prints the CURRENT pair: n = 5, total = 15. Note n was already bumped before total crossed the limit — trace slowly, line by line."
    },
    {
        id: "p29",
        type: "output",
        q: "A user runs this program and types 4, then 7, then done. What is printed?",
        code: 'total = 0\ncommand = ""\nwhile command != "done":\n    command = input("number or done: ")\n    if command != "done":\n        total = total + int(command)\nprint(total)',
        answerText: "11",
        explain: "The sentinel loop: 'done' is the exit word. 4 arrives → total 4; 7 arrives → total 11; 'done' fails the if (so no int() on it) and also fails the while condition → loop ends → print 11. This input-and-respond pattern is exactly how real menu programs work."
    },
    {
        id: "p30",
        type: "code",
        q: "Write a program that stores three friends' names and ages in a dictionary, then uses .items() to print one line per friend in the form:  Name is AGE years old",
        solution: 'ages = {"Aman": 19, "Riya": 18, "Kabir": 20}\n\nfor name, age in ages.items():\n    print(name, "is", age, "years old")',
        answerText: "Aman is 19 years old\nRiya is 18 years old\nKabir is 20 years old",
        explain: ".items() hands you each (key, value) pair, and two loop variables unpack them in one go: for name, age in ages.items(). This for-over-items skeleton answers every 'loop through a dictionary' paper question."
    }
];
/* ------------------------------------------------------------
   GROUP 4 — FUNCTIONS & OOP  (functions · args · funcs×lists · classes)
   ------------------------------------------------------------ */ const PRO = [
    {
        id: "r1",
        type: "mcq",
        q: "Which keyword DEFINES a function in Python?",
        options: [
            "func",
            "define",
            "def",
            "function"
        ],
        answer: 2,
        explain: "def name(parameters):  …  — then CALL it with name(arguments)."
    },
    {
        id: "r2",
        type: "output",
        q: "Write the output (both values on one line).",
        code: "def f(a, b=2):\n    return a * b\n\nprint(f(3), f(3, 4))",
        answerText: "6 12",
        explain: "f(3) → b uses its DEFAULT 2 → 3×2 = 6. f(3, 4) → the given 4 overrides the default → 12. Default parameters: used when the caller stays silent."
    },
    {
        id: "r3",
        type: "mcq",
        q: "What does `return` do inside a function?",
        options: [
            "Prints a value on the screen",
            "Sends a value back to the caller and ends the function",
            "Loops the function forever",
            "Deletes the function"
        ],
        answer: 1,
        explain: "print just DISPLAYS; return HANDS THE VALUE BACK so the caller can store it: result = f(3). A function with no return gives None."
    },
    {
        id: "r4",
        type: "output",
        q: "Write ALL lines of output.",
        code: 'def greet(*names):\n    for n in names:\n        print("Hi", n)\n\ngreet("Aman", "Riya")',
        answerText: "Hi Aman\nHi Riya",
        explain: "*names packs the extra positional arguments into a TUPLE ('Aman', 'Riya'); the for-loop greets each one. Say 'tuple' on paper — naming the type earns the mark."
    },
    {
        id: "r5",
        type: "mcq",
        q: "Inside a function, **kwargs collects extra KEYWORD arguments into a…",
        options: [
            "tuple",
            "list",
            "dictionary",
            "string"
        ],
        answer: 2,
        explain: "*args → tuple of positionals · **kwargs → dict of keyword pairs. {'key': value} — that's why you can loop .items() over it."
    },
    {
        id: "r6",
        type: "mcq",
        q: "Which function signature is VALID in Python?",
        options: [
            "def f(a=1, b):",
            "def f(a, b=1):",
            "def f(b=1, a):",
            "Both A and B"
        ],
        answer: 1,
        explain: "Default parameters must come AFTER non-default ones. In def f(a=1, b): a call like f(5) would be ambiguous — Python refuses to guess."
    },
    {
        id: "r7",
        type: "output",
        q: "Write the output exactly.",
        code: 'def build(first, last, **extra):\n    d = {"first": first, "last": last}\n    d.update(extra)\n    return d\n\nprint(build("Aman", "Sharma", age=19))',
        answerText: "{'first': 'Aman', 'last': 'Sharma', 'age': 19}",
        explain: "The two positionals fill first/last; the leftover keyword age=19 lands in **extra as {'age': 19} and is merged with update(). Full parameter-order questions are built from this idea."
    },
    {
        id: "r8",
        type: "output",
        q: "What EXACTLY happens when this program runs? Write the error line.",
        code: 'def describe_pet(animal, name):\n    print(f"I have a {animal} named {name}.")\n\ndescribe_pet("hamster")',
        answerText: 'TypeError: describe_pet() missing 1 required positional argument: \'name\'',
        explain: "Two parameters, one argument → Python raises TypeError and TELLS YOU which one is missing. Reading tracebacks (function name + missing argument) is a guaranteed exam question."
    },
    {
        id: "r9",
        type: "code",
        q: "Write a function area(width, height=10) that RETURNS width × height. What does print(area(5)) output?",
        solution: "def area(width, height=10):\n    return width * height\n\nprint(area(5))\nprint(area(5, 2))",
        answerText: "Output: 50  (and area(5, 2) → 10)",
        explain: "area(5) keeps the default height 10 → 50. The second call overrides it → 10. One function, two behaviours — that's the power of defaults."
    },
    {
        id: "r10",
        type: "mcq",
        q: "The `__init__` method of a class…",
        options: [
            "Must be called manually after creating an object",
            "Runs automatically every time a new object is created, to set up its attributes",
            "Only runs when the program exits",
            "Is optional decoration with no effect"
        ],
        answer: 1,
        explain: "__init__ is the initialiser: Dog(\"Rex\") → Python creates the instance and calls __init__ with it, so self.name = \"Rex\" happens immediately."
    },
    {
        id: "r11",
        type: "output",
        q: "Write the output of this class program.",
        code: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n\n    def bark(self):\n        return self.name + " says woof"\n\nd = Dog("Rex")\nprint(d.bark())',
        answerText: "Rex says woof",
        explain: "__init__ stores \"Rex\" ON the instance (self.name). bark() reads it back through self. self = the object the method was called on."
    },
    {
        id: "r12",
        type: "mcq",
        q: "Inside a class method, `self` refers to…",
        options: [
            "The class itself",
            "The specific INSTANCE the method was called on",
            "The parent class",
            "A global variable"
        ],
        answer: 1,
        explain: "d.bark() → self IS d. Two Dogs each carry their own self.name — that's why instances stay independent."
    },
    {
        id: "r13",
        type: "output",
        q: "Write the output (both values on one line).",
        code: "class Car:\n    def wheels(self):\n        return 4\n\nclass Bike(Car):\n    def wheels(self):   # same name as the parent's method\n        return 2\n\nprint(Car().wheels(), Bike().wheels())",
        answerText: "4 2",
        explain: "Bike INHERITS from Car but OVERRIDES wheels(); the child's version wins for Bike objects. Car objects keep the parent's 4."
    },
    {
        id: "r14",
        type: "mcq",
        q: "Inside a child class, `super().__init__(…)` is used to…",
        options: [
            "Delete the parent class",
            "Call the PARENT'S version of __init__ so the inherited setup still runs",
            "Create a second object",
            "Skip initialisation entirely"
        ],
        answer: 1,
        explain: "super() = 'the parent class'. Child adds its own attributes (battery_size…) while super().__init__ handles the parent's (make, model…) — no copy-paste."
    },
    {
        id: "r15",
        type: "code",
        q: 'Write a class Book with __init__(self, title, pages) that stores both values, plus a method describe() that returns the text "TITLE — PAGES pages". Show one object being created and describe() being printed.',
        solution: 'class Book:\n    def __init__(self, title, pages):\n        self.title = title\n        self.pages = pages\n\n    def describe(self):\n        return f"{self.title} — {self.pages} pages"\n\nb = Book("Python Basics", 250)\nprint(b.describe())',
        answerText: 'Output: Python Basics — 250 pages',
        explain: "Blueprint → __init__ stores attributes on self → methods use self.xxx → instantiate with Book(title, pages). This 8-line skeleton answers most 'write a class' paper questions."
    },
    {
        id: "r16",
        type: "mcq",
        q: "`import pizza` vs `from pizza import make_pizza` — what changes at call time?",
        options: [
            "Nothing, they are identical",
            "With `import pizza` you call pizza.make_pizza(); with `from pizza import make_pizza` you call make_pizza() directly",
            "`from … import` is always an error",
            "`import pizza` copies the whole file into your program"
        ],
        answer: 1,
        explain: "import pizza brings the MODULE (prefix with pizza.); from pizza import make_pizza brings the NAME itself (call it bare). Importing * is discouraged — it can silently overwrite names."
    },
    {
        id: "r17",
        type: "output",
        q: "Write BOTH lines of output exactly.",
        code: 'def shout(word):\n    return word + "!"\n\nprint(shout("hey"))\nprint(shout(shout("go")))',
        answerText: "hey!\ngo!!",
        explain: "The inner call runs FIRST: shout(\"go\") → \"go!\", and that result is fed straight back into shout → \"go!!\". A function's return value can always be used as the next call's argument."
    },
    {
        id: "r18",
        type: "output",
        q: "Write the output — note the order of the arguments in the call.",
        code: 'def intro(name, city):\n    print(name, "lives in", city)\n\nintro(city="Delhi", name="Riya")',
        answerText: "Riya lives in Delhi",
        explain: "KEYWORD arguments match by NAME, not position — so writing city first changes nothing. Riya lands in name, Delhi lands in city. (Positional args would have printed 'Delhi lives in Riya' — a great trap to mention on paper.)"
    },
    {
        id: "r19",
        type: "output",
        q: "Write the output of this program.",
        code: "x = 5\n\ndef change():\n    x = 99\n\nchange()\nprint(x)",
        answerText: "5",
        explain: "The x = 99 inside the function creates a LOCAL variable that dies when the function ends. The global x was never touched → 5 prints. Variables created INSIDE a function stay inside it — that is exactly why functions are safe to reuse."
    },
    {
        id: "r20",
        type: "output",
        q: "Write the output.",
        code: "def add(a, b):\n    return a + b\n\nresult = add(2, 3) * 2\nprint(result)",
        answerText: "10",
        explain: "add(2, 3) RETURNS 5, so the line becomes result = 5 * 2 → 10. That's the whole point of return: the value comes back and can be used inside bigger expressions. (If the function had printed instead of returned, the answer would be an error.)"
    },
    {
        id: "r21",
        type: "mcq",
        q: "A function is carefully DEFINED at the top of a program but is never CALLED anywhere. What happens when the program runs?",
        options: [
            "The function body runs once automatically",
            "Python remembers the definition but the body NEVER runs — nothing inside it executes",
            "The program refuses to run until you call it",
            "The function is deleted automatically"
        ],
        answer: 1,
        explain: "def just TEACHES Python the recipe and stores it away — the body only cooks when you call it with (). No call → no execution → no output. Definition ≠ execution is the concept this tests."
    },
    {
        id: "r22",
        type: "output",
        q: "Write the output of this program.",
        code: "def double_all(nums):\n    for i in range(len(nums)):\n        nums[i] = nums[i] * 2\n\nscores = [1, 2, 3]\ndouble_all(scores)\nprint(scores)",
        answerText: "[2, 4, 6]",
        explain: "The list is passed by reference — nums and scores are TWO NAMES for the SAME list. Editing nums[i] inside the function edits the real list, and the change is visible outside. Lists are mutable: functions that modify them change the original."
    },
    {
        id: "r23",
        type: "output",
        q: "Write the output.",
        code: "def add_all(*nums):\n    total = 0\n    for n in nums:\n        total += n\n    return total\n\nprint(add_all(1, 2, 3, 4))",
        answerText: "10",
        explain: "*nums packs the four arguments into the tuple (1, 2, 3, 4); the loop accumulates 1 → 3 → 6 → 10 and return hands it back. One flexible function — any number of arguments, no list needed at call time."
    },
    {
        id: "r24",
        type: "output",
        q: "Write BOTH lines of output exactly.",
        code: 'def profile(name, role="student", city="Jodhpur"):\n    print(name, "-", role, "-", city)\n\nprofile("Aman")\nprofile("Riya", city="Delhi")',
        answerText: "Aman - student - Jodhpur\nRiya - student - Delhi",
        explain: "First call: both defaults fill in. Second call: Riya is positional → name, and city=\"Delhi\" skips OVER role by naming it — role keeps its default 'student'. Keyword args let you override any single default without retyping the ones before it."
    },
    {
        id: "r25",
        type: "mcq",
        q: "Your file imports a helper from a file called pizza.py with: from pizza import make_pizza. What IS pizza.py, in Python terms?",
        options: [
            "A module — any .py file whose functions/classes you can import into another program",
            "A package that must be installed with pip first",
            "A special Python folder that cannot contain variables",
            "A compiled C library"
        ],
        answer: 0,
        explain: "A module is just a saved .py file — every program you write can be imported by another. pip-installed 'packages' are bundles of modules, but pizza.py here is simply your own module sitting next to your program."
    },
    {
        id: "r26",
        type: "output",
        q: "Write the output on one line.",
        code: "class Counter:\n    def __init__(self):\n        self.count = 0\n\n    def bump(self):\n        self.count = self.count + 1\n\na = Counter()\nb = Counter()\na.bump()\na.bump()\nb.bump()\nprint(a.count, b.count)",
        answerText: "2 1",
        explain: "Each Counter() call builds a SEPARATE object with its own count. a was bumped twice → 2; b was bumped once → 1; neither knows about the other. self always refers to the object the method was called on."
    },
    {
        id: "r27",
        type: "mcq",
        q: "d = Dog(\"Rex\") — which sentence captures the difference between d.name and d.bark()?",
        options: [
            "Both are methods; the parentheses are optional decoration",
            "d.name is stored DATA (an attribute — no parentheses); d.bark() is an ACTION (a method — call it with parentheses)",
            "d.name is a method and d.bark() is an attribute",
            "Both are attributes, but only bark() needs self"
        ],
        answer: 1,
        explain: "Attributes = nouns (name, age, breed — data stored on the object). Methods = verbs (bark(), roll_over() — behaviour you call). The parentheses are the calling signal — leaving them off bark prints '<bound method …>' instead of running it."
    },
    {
        id: "r28",
        type: "output",
        q: "Write the output exactly as printed.",
        code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed\n\nd = Dog("Rex", "lab")\nprint(d.name, d.breed)',
        answerText: "Rex lab",
        explain: "Dog's __init__ first delegates to super().__init__(name) → the PARENT sets self.name = \"Rex\"; then the child adds its own self.breed = \"lab\". One call, two classes cooperating — that is inheritance doing the work without copy-paste."
    },
    {
        id: "r29",
        type: "code",
        q: "Write a function average(nums) that takes a list of numbers and RETURNS their average. Show the print for the list [10, 20, 30]. (Remember what / returns in Python!)",
        solution: "def average(nums):\n    return sum(nums) / len(nums)\n\nprint(average([10, 20, 30]))",
        answerText: "Output: 20.0",
        explain: "sum + len inside the function, return the division. 60 / 3 = 20.0 — the single slash ALWAYS gives a float, so the model answer must print 20.0, not 20. That .0 is the mark-scoring detail."
    },
    {
        id: "r30",
        type: "mcq",
        q: "class ElectricCar(Car): — which statement is TRUE about ElectricCar?",
        options: [
            "It is completely independent — it shares nothing with Car",
            "It IS a Car: it inherits Car's attributes and methods, and may add its own or override existing ones",
            "Car automatically gains all of ElectricCar's methods",
            "It can never have an __init__ of its own"
        ],
        answer: 1,
        explain: "The IS-A test: an electric car IS a car, so the child starts with everything the parent has, then specialises (battery_size, or an overridden describe()). The parent stays untouched — inheritance flows one way."
    }
];
const EXAM_BANKS = {
    foundations: {
        group: "foundations",
        title: "Foundations",
        subtitle: "IPO · data vs information · DIKW · the Four Pillars · binary",
        topics: "Why code? · Computing · 4 Pillars · Data",
        questions: FOUNDATIONS
    },
    machines: {
        group: "machines",
        title: "Machines",
        subtitle: "algorithms · flowcharts · CPU · memory · compilers · software",
        topics: "Algorithms · Hardware · Software",
        questions: MACHINES
    },
    pycore: {
        group: "pycore",
        title: "Python Core",
        subtitle: "variables · strings · lists · if/else · dictionaries · while",
        topics: "Python · Basics · Lists · If/Else · Dicts · While",
        questions: PYCORE
    },
    pro: {
        group: "pro",
        title: "Functions & OOP",
        subtitle: "def · return · *args · **kwargs · classes · inheritance",
        topics: "Functions · Args & Return · Funcs × Lists · Classes",
        questions: PRO
    }
};
const EXAM_GROUPS = [
    "foundations",
    "machines",
    "pycore",
    "pro"
];
const TOTAL_QUESTIONS = EXAM_GROUPS.reduce(_c = (n, g)=>n + EXAM_BANKS[g].questions.length, 0);
_c1 = TOTAL_QUESTIONS;
var _c, _c1;
__turbopack_context__.k.register(_c, "TOTAL_QUESTIONS$EXAM_GROUPS.reduce");
__turbopack_context__.k.register(_c1, "TOTAL_QUESTIONS");
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
"[project]/src/components/notes/ExamWindow.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExamWindow",
    ()=>ExamWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* FoC exam window — theme + engine shared (see notes/ExamEngine.tsx
   and notes/exam-themes.ts). FoC is the only shelf with "write the
   code" questions, which is why its theme has a fourth type row. */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/questions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ExamEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ExamEngine.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/exam-themes.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function ExamWindow({ group, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ExamEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExamEngine"], {
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOC_EXAM_THEME"],
        bank: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXAM_BANKS"][group],
        draftId: group,
        onClose: onClose
    }, void 0, false, {
        fileName: "[project]/src/components/notes/ExamWindow.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_c = ExamWindow;
var _c;
__turbopack_context__.k.register(_c, "ExamWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/notes/FocApp.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/notes/FocApp.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_notes_e9f2e79f._.js.map