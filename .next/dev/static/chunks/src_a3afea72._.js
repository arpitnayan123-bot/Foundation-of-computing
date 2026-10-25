(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/atlas/AppBoundary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppBoundary",
    ()=>AppBoundary,
    "AtlasRecovery",
    ()=>AtlasRecovery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   THE ATLAS — client shell boundary.

   app/error.tsx (the App Router boundary) only catches crashes
   that reach the route segment; render errors inside the hash
   router's client tree (landing, ⌘K palette, ledger, a shelf
   app's own shell) would otherwise blank the whole tab. This
   class boundary wraps that tree (see src/app/page.tsx) and
   shows the warm recovery view instead. Per-section crashes
   inside a shelf stay the job of the finer-grained PartBoundary.

   The recovery view is exported so app/error.tsx and this
   boundary always look and behave identically.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AtlasRecovery({ onReset }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AtlasRecovery.useEffect": ()=>{
            ref.current?.focus({
                preventScroll: true
            });
        }
    }["AtlasRecovery.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        tabIndex: -1,
        role: "alert",
        className: "flex min-h-screen flex-col items-center justify-center gap-6 px-6 py-16 text-center outline-none",
        style: {
            background: "linear-gradient(165deg,#070509 0%,#160d06 55%,#241608 100%)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: "flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f59e0b]/25 bg-[#f59e0b]/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                    className: "h-7 w-7",
                    style: {
                        color: "#f59e0b"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/atlas/AppBoundary.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AppBoundary.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-display text-3xl font-black text-[#f7ecdd] md:text-5xl",
                children: "The atlas hit a snag."
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AppBoundary.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-md text-[.95rem] leading-relaxed text-[#a89a86]",
                children: "Something broke while drawing this view — but not your work: notes, progress and drafts all live safely on this device."
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AppBoundary.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onReset,
                        className: "inline-flex h-11 items-center rounded-full px-6 text-[.74rem] font-black uppercase tracking-[.16em] text-[#160d06] transition-[filter] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f59e0b]",
                        style: {
                            background: "linear-gradient(135deg,#fbbf24,#ea580c)"
                        },
                        children: "Try again"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AppBoundary.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>window.location.reload(),
                        className: "inline-flex h-11 items-center rounded-full border border-white/15 bg-white/[.05] px-6 text-[.74rem] font-black uppercase tracking-[.16em] text-[#e9d7bf] transition-colors hover:bg-white/[.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f59e0b]",
                        children: "Reload the atlas"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AppBoundary.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atlas/AppBoundary.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atlas/AppBoundary.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(AtlasRecovery, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = AtlasRecovery;
class AppBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    state = {
        error: null
    };
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    componentDidCatch(error, info) {
        // surface the failure for dev debugging; the UI stays warm either way
        if ("TURBOPACK compile-time truthy", 1) {
            console.error("[AppBoundary]", error, info.componentStack);
        }
    }
    retry = ()=>{
        this.setState({
            error: null
        });
    };
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AtlasRecovery, {
                onReset: this.retry
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AppBoundary.tsx",
                lineNumber: 103,
                columnNumber: 14
            }, this);
        }
        return this.props.children;
    }
}
var _c;
__turbopack_context__.k.register(_c, "AtlasRecovery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/question-counts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   Question-bank totals, as plain literals.

   The source of truth is each subject's questions.ts (its
   TOTAL_*_QUESTIONS constant is derived from the real array).
   Those constants are NOT imported here on purpose: every bank
   holds hundreds of question objects, and the Atlas landing card
   only needs the headline numbers. Importing the banks here
   would pull ~250 KB of exam data into the landing bundle.

   If you add questions to a bank, bump its number below so the
   shelf card stays honest (the exam window itself always reads
   the real bank, so gameplay is never affected).
   ============================================================ */ __turbopack_context__.s([
    "QUESTION_COUNTS",
    ()=>QUESTION_COUNTS
]);
const QUESTION_COUNTS = {
    foc: 120,
    atb: 30,
    fa: 40,
    ebh: 40,
    stm: 40,
    mktg: 48
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/atlas/subjects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LIVE_SUBJECTS",
    ()=>LIVE_SUBJECTS,
    "SUBJECTS",
    ()=>SUBJECTS,
    "SUBJECT_IDS",
    ()=>SUBJECT_IDS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/route.js [app-client] (ecmascript) <export default as Route>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sigma.js [app-client] (ecmascript) <export default as Sigma>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$question$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/question-counts.ts [app-client] (ecmascript)");
;
;
const SUBJECTS = [
    {
        id: "foc",
        shelf: "01",
        title: "Foundations of Computing",
        short: "FoC Notes",
        tagline: "From the IPO model to object-oriented Python — the whole course, alive.",
        description: "Every concept of the course distilled into living notes: animated diagrams, 120 exam-style questions across 4 pen-paper windows, and real CPython 3.12 running in the browser.",
        topics: [
            "IPO & Four Pillars",
            "Data & DIKW",
            "Algorithms",
            "Hardware",
            "Python core",
            "Functions",
            "Classes & OOP"
        ],
        chapters: 17,
        questions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$question$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTION_COUNTS"].foc,
        examWindows: 4,
        accent: "#f59e0b",
        accent2: "#ea580c",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"],
        status: "live",
        ambience: "sweep"
    },
    {
        id: "atb",
        shelf: "02",
        title: "Algorithmic Thinking in Business",
        short: "ATB Notes",
        tagline: "Data structures & algorithms — no code, all logic.",
        description: "The whole no-code course rebuilt as living notes: animated flowcharts, a nine-property wall, memory-box machines, stack & queue machines, a hash table you can poke, and 30 exam-style questions across 6 windows.",
        topics: [
            "Algorithms & flowcharts",
            "9 properties",
            "Arrays & lists",
            "Stacks & queues",
            "Trees & graphs",
            "Hashing & blockchain"
        ],
        chapters: 19,
        questions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$question$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTION_COUNTS"].atb,
        examWindows: 6,
        accent: "#f43f5e",
        accent2: "#be123c",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"],
        status: "live",
        ambience: "aura"
    },
    {
        id: "fa",
        shelf: "03",
        title: "Financial Accounting",
        short: "FA Notes",
        tagline: "Every rupee tells two stories — the whole course, in balance.",
        description: "The whole course rebuilt as living notes: a working accounting equation, T-accounts posted for real, a trial balance you can sort, prepaid rupees that split themselves, and 40 exam-style questions across 4 pen-paper windows.",
        topics: [
            "Dual aspect & equation",
            "Journal & ledger",
            "Trial balance",
            "Five statements",
            "Adjusting entries",
            "Trading account & GP"
        ],
        chapters: 16,
        questions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$question$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTION_COUNTS"].fa,
        examWindows: 4,
        accent: "#10b981",
        accent2: "#047857",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"],
        status: "live",
        ambience: "scan"
    },
    {
        id: "ebh",
        shelf: "04",
        title: "Economic & Business History",
        short: "EBH Notes",
        tagline: "Rules and players — followed across five centuries of change.",
        description: "The whole course rebuilt as living notes: a two-by-two that names the field, the guild ladder you can climb, a Silk Road speedometer, the thread race between spinners and weavers, Manchester's mills counting themselves up, and 40 exam-style questions across 4 pen-paper windows.",
        topics: [
            "Rules & players",
            "License Raj",
            "Agrarian & guilds",
            "Trade routes",
            "Industrial Revolution",
            "Labor movement"
        ],
        chapters: 18,
        questions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$question$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTION_COUNTS"].ebh,
        examWindows: 4,
        accent: "#eab308",
        accent2: "#854d0e",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
        status: "live",
        ambience: "spotlight"
    },
    {
        id: "stm",
        shelf: "05",
        title: "Statistics for Managers",
        short: "STM Notes",
        tagline: "Data → describe → decide — every figure computed, not memorised.",
        description: "The whole course rebuilt as living notes: a measurement-scale ladder you can climb, the mean-vs-median outlier machine, a Venn laboratory for the probability laws, Bayes' prior-to-posterior bar, the empirical-rule bell, and 40 exam-style questions across 5 pen-paper windows.",
        topics: [
            "Scales & data anatomy",
            "Displays",
            "Location & spread",
            "Probability & Bayes",
            "Distributions",
            "Sampling cases"
        ],
        chapters: 16,
        questions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$question$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTION_COUNTS"].stm,
        examWindows: 5,
        accent: "#8b5cf6",
        accent2: "#6d28d9",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"],
        status: "live",
        ambience: "shimmer"
    },
    {
        id: "mktg",
        shelf: "06",
        title: "Principles of Marketing",
        short: "MKTG Notes",
        tagline: "Why people buy — and why they keep buying.",
        description: "The whole course rebuilt as living notes: decline curves for BlackBerry, Hertz and Blockbuster, a cold-coffee P&L you can tune, the ES/DS gap machine, the three-circles POP/POD finder, a Gestalt lab, and 48 exam-style questions across 8 pen-paper windows.",
        topics: [
            "Value & exchange",
            "ES/DS & loyalty",
            "STP",
            "Positioning & POD/POP",
            "Consumer journey",
            "Perception & biases"
        ],
        chapters: 53,
        questions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$question$2d$counts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTION_COUNTS"].mktg,
        examWindows: 8,
        accent: "#14b8a6",
        accent2: "#0f766e",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
        status: "live",
        ambience: "beacon"
    },
    {
        id: "shelf-07",
        shelf: "07",
        title: "Reserved shelf",
        short: "Shelf 07",
        tagline: "The next PDF drops here.",
        description: "This shelf fills in as each subject is rebuilt Atlas-style — same living diagrams, same exam simulators, same pen-paper soul.",
        topics: [
            "awaiting syllabus"
        ],
        chapters: null,
        questions: null,
        examWindows: null,
        accent: "#fb923c",
        accent2: "#c2410c",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
        status: "soon",
        ambience: "drift"
    }
];
const LIVE_SUBJECTS = SUBJECTS.filter(_c = (s)=>s.status === "live");
_c1 = LIVE_SUBJECTS;
const SUBJECT_IDS = SUBJECTS.map(_c2 = (s)=>s.id);
_c3 = SUBJECT_IDS;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "LIVE_SUBJECTS$SUBJECTS.filter");
__turbopack_context__.k.register(_c1, "LIVE_SUBJECTS");
__turbopack_context__.k.register(_c2, "SUBJECT_IDS$SUBJECTS.map");
__turbopack_context__.k.register(_c3, "SUBJECT_IDS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/sm2.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   SM-2 spaced repetition — the Atlas review scheduler.

   Every graded answer (exam MCQ, self-check, review session)
   feeds one card per question. Cards live in localStorage,
   keyed by subject → question id, so a schedule survives
   reloads without any backend.

   Grading contract (quality 0–5, SuperMemo original):
     5  exam MCQ answered correctly first try
     3  self-check "I got it" (the answer was visible — trust less)
     2  exam MCQ answered wrong  (EF drops, interval resets)
     1  self-check "Not yet"
   ============================================================ */ __turbopack_context__.s([
    "MASTERED_INTERVAL",
    ()=>MASTERED_INTERVAL,
    "dueCounts",
    ()=>dueCounts,
    "dueIds",
    ()=>dueIds,
    "dueLabel",
    ()=>dueLabel,
    "gradeCard",
    ()=>gradeCard,
    "gradeQuestion",
    ()=>gradeQuestion,
    "loadSm2",
    ()=>loadSm2,
    "masteryFor",
    ()=>masteryFor,
    "troubleSpots",
    ()=>troubleSpots
]);
const SM2_KEY = "atlas:sm2:v1";
const DAY = 86_400_000;
const MIN_EF = 1.3;
const MAX_EF = 2.8;
const MASTERED_INTERVAL = 21;
function emptyCard(now) {
    return {
        ef: 2.5,
        interval: 0,
        reps: 0,
        due: now,
        last: 0
    };
}
function loadSm2() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(SM2_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : {};
    } catch  {
        return {};
    }
}
function saveSm2(store) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(SM2_KEY, JSON.stringify(store));
    } catch  {
    /* private mode / quota — the schedule silently degrades to session-only */ }
}
function gradeCard(prev, quality, now = Date.now()) {
    const card = prev ? {
        ...prev
    } : emptyCard(now);
    const q = Math.max(0, Math.min(5, quality));
    if (q < 3) {
        card.reps = 0;
        card.interval = 0;
    } else {
        card.reps += 1;
        if (card.reps === 1) card.interval = 1;
        else if (card.reps === 2) card.interval = 6;
        else card.interval = Math.round(card.interval * card.ef);
    }
    card.ef = Math.max(MIN_EF, Math.min(MAX_EF, card.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))));
    card.last = now;
    card.due = now + Math.max(1, card.interval) * DAY;
    return card;
}
function gradeQuestion(subject, questionId, quality, now = Date.now()) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const store = loadSm2();
    const next = gradeCard(store[subject]?.[questionId], quality, now);
    store[subject] = {
        ...store[subject] ?? {},
        [questionId]: next
    };
    saveSm2(store);
}
function dueIds(subject, now = Date.now()) {
    const rows = loadSm2()[subject];
    if (!rows) return [];
    return Object.keys(rows).filter((id)=>rows[id].due <= now);
}
function dueCounts(now = Date.now()) {
    const store = loadSm2();
    const out = {};
    for (const subject of Object.keys(store)){
        const rows = store[subject];
        let n = 0;
        for (const id of Object.keys(rows))if (rows[id].due <= now) n += 1;
        if (n > 0) out[subject] = n;
    }
    return out;
}
function masteryFor(subject, bankTotal, now = Date.now()) {
    const rows = loadSm2()[subject] ?? {};
    const m = {
        unseen: 0,
        learning: 0,
        review: 0,
        mastered: 0,
        total: bankTotal,
        pct: 0
    };
    // classify from the schedule itself, then fill the remainder as unseen
    let learning = 0;
    let review = 0;
    let mastered = 0;
    for (const id of Object.keys(rows)){
        const c = rows[id];
        if (c.interval >= MASTERED_INTERVAL) mastered += 1;
        else if (c.reps >= 1) learning += 1;
        else review += 1; // graded once, failed — still learning, but weakest tier
    }
    const seen = learning + review + mastered;
    m.learning = learning;
    m.review = review;
    m.mastered = mastered;
    m.unseen = Math.max(0, bankTotal - seen);
    m.pct = bankTotal > 0 ? Math.round(mastered / bankTotal * 100) : 0;
    return m;
}
/** easiness below which a card counts as chronically fragile */ const FRAGILE_EF = 2.1;
function troubleSpots(now = Date.now(), cap = 6) {
    const store = loadSm2();
    const out = [];
    for (const [subject, rows] of Object.entries(store)){
        for (const [id, c] of Object.entries(rows)){
            if (!c || typeof c.ef !== "number" || c.last <= 0) continue;
            const failed = c.reps === 0 && c.interval === 0; // last grade was a miss
            const fragile = c.ef < FRAGILE_EF; // enough misses to sink the easiness
            if (failed || fragile) {
                out.push({
                    subject,
                    id,
                    ef: c.ef,
                    reps: c.reps,
                    interval: c.interval,
                    due: c.due,
                    last: c.last
                });
            }
        }
    }
    out.sort((a, b)=>a.ef - b.ef || b.last - a.last);
    return out.slice(0, cap);
}
function dueLabel(due, now = Date.now()) {
    if (due <= now) return "due now";
    const days = Math.max(1, Math.ceil((due - now) / 86_400_000));
    return `due in ${days}d`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/progress.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   Chapter-level reading progress — the Atlas "furthest read"
   ledger.

   As a reader scrolls a subject's notes, each chapter section
   they reach is marked as read here. The store lives in
   localStorage "atlas:progress:v1" — subject → section id →
   epoch ms of the first read — and feeds the ✓ marks in every
   chapter menu, the landing shelf badges, and the ledger's
   "chapters read" bars.

   Local-first like everything else in the atlas: no backend,
   no accounts, one JSON blob per browser.
   ============================================================ */ __turbopack_context__.s([
    "clearProgress",
    ()=>clearProgress,
    "loadProgress",
    ()=>loadProgress,
    "markSectionsSeen",
    ()=>markSectionsSeen,
    "readProgressCounts",
    ()=>readProgressCounts,
    "seenCountFor",
    ()=>seenCountFor,
    "writeProgress",
    ()=>writeProgress
]);
const PROGRESS_KEY = "atlas:progress:v1";
function loadProgress() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(PROGRESS_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === "object" ? parsed : {};
    } catch  {
        return {};
    }
}
function saveProgress(store) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(store));
    } catch  {
    /* private mode / quota — reading progress degrades to session-only */ }
}
function markSectionsSeen(subject, ids, now = Date.now()) {
    if (("TURBOPACK compile-time value", "object") === "undefined" || ids.length === 0) return;
    const store = loadProgress();
    const rows = store[subject] ?? {};
    let changed = false;
    for (const id of ids){
        if (!rows[id]) {
            rows[id] = now;
            changed = true;
        }
    }
    if (!changed) return;
    store[subject] = rows;
    saveProgress(store);
}
function seenCountFor(store, subject) {
    return Object.keys(store[subject] ?? {}).length;
}
function readProgressCounts() {
    const store = loadProgress();
    const out = {};
    for (const subject of Object.keys(store)){
        const n = Object.keys(store[subject] ?? {}).length;
        if (n > 0) out[subject] = n;
    }
    return out;
}
function clearProgress() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.removeItem(PROGRESS_KEY);
    } catch  {
    /* noop */ }
}
function writeProgress(store) {
    saveProgress(store);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/ledger.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   The Atlas ledger — a persistent, local-first attempt log.

   Every finished exam window (and every spaced-review session)
   appends one attempt row here. The ledger view (#/ledger)
   reads this store plus the SM-2 schedule to render the
   reader's progress: accuracy per shelf, mastery, streaks.

   Storage: localStorage "atlas:ledger:v1". No backend — the
   notes stay private to the reader's browser, exactly like the
   exam drafts.
   ============================================================ */ __turbopack_context__.s([
    "clearLedger",
    ()=>clearLedger,
    "currentStreak",
    ()=>currentStreak,
    "dayKeyFor",
    ()=>dayKeyFor,
    "loadLedger",
    ()=>loadLedger,
    "logAttempt",
    ()=>logAttempt,
    "longestStreak",
    ()=>longestStreak,
    "statsFor",
    ()=>statsFor
]);
const LEDGER_KEY = "atlas:ledger:v1";
const MAX_ATTEMPTS = 400;
function loadLedger() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(LEDGER_KEY);
        if (!raw) return {
            attempts: [],
            days: []
        };
        const parsed = JSON.parse(raw);
        return {
            attempts: Array.isArray(parsed.attempts) ? parsed.attempts : [],
            days: Array.isArray(parsed.days) ? parsed.days : []
        };
    } catch  {
        return {
            attempts: [],
            days: []
        };
    }
}
function saveLedger(store) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(LEDGER_KEY, JSON.stringify(store));
    } catch  {
    /* private mode / quota — the ledger degrades to session-only */ }
}
function dayKey(at) {
    const d = new Date(at);
    const m = `${d.getMonth() + 1}`.padStart(2, "0");
    const day = `${d.getDate()}`.padStart(2, "0");
    return `${d.getFullYear()}-${m}-${day}`;
}
function dayKeyFor(at) {
    return dayKey(at);
}
function logAttempt(attempt, now = Date.now()) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const store = loadLedger();
    const row = {
        ...attempt,
        at: now
    };
    const day = dayKey(now);
    store.attempts = [
        ...store.attempts,
        row
    ].slice(-MAX_ATTEMPTS);
    if (!store.days.includes(day)) store.days = [
        ...store.days,
        day
    ].slice(-400);
    saveLedger(store);
}
function currentStreak(days, now = Date.now()) {
    if (days.length === 0) return 0;
    const set = new Set(days);
    const d = new Date(now);
    // streak may end today or yesterday and still be "alive"
    const key = (dt)=>dayKey(dt.getTime());
    if (!set.has(key(d))) {
        d.setDate(d.getDate() - 1);
        if (!set.has(key(d))) return 0;
    }
    let streak = 0;
    while(set.has(key(d))){
        streak += 1;
        d.setDate(d.getDate() - 1);
    }
    return streak;
}
function longestStreak(days) {
    if (days.length === 0) return 0;
    const sorted = [
        ...new Set(days)
    ].sort();
    const DAY = 86_400_000;
    let best = 0;
    let run = 0;
    let prev = Number.NaN;
    for (const d of sorted){
        const t = Date.parse(`${d}T00:00:00`);
        run = t - prev === DAY ? run + 1 : 1;
        prev = t;
        if (run > best) best = run;
    }
    return best;
}
function statsFor(store, subject) {
    const rows = store.attempts.filter((a)=>a.subject === subject);
    if (rows.length === 0) {
        return {
            attempts: 0,
            bestPct: 0,
            lastPct: null,
            lastAt: null,
            totalAnswered: 0,
            totalCorrect: 0
        };
    }
    const totalAnswered = rows.reduce((n, a)=>n + a.total, 0);
    const totalCorrect = rows.reduce((n, a)=>n + a.correct, 0);
    const last = rows[rows.length - 1];
    return {
        attempts: rows.length,
        bestPct: rows.reduce((b, a)=>Math.max(b, a.pct), 0),
        lastPct: last.pct,
        lastAt: last.at,
        totalAnswered,
        totalCorrect
    };
}
function clearLedger() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.removeItem(LEDGER_KEY);
    } catch  {
    /* noop */ }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/goal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GOAL_DEFAULT",
    ()=>GOAL_DEFAULT,
    "GOAL_MAX",
    ()=>GOAL_MAX,
    "GOAL_MIN",
    ()=>GOAL_MIN,
    "GOAL_STEP",
    ()=>GOAL_STEP,
    "bumpGoal",
    ()=>bumpGoal,
    "clampTarget",
    ()=>clampTarget,
    "goalStatus",
    ()=>goalStatus,
    "loadGoal",
    ()=>loadGoal,
    "todayAnswered",
    ()=>todayAnswered
]);
/* ============================================================
   THE DAILY GOAL — a small, local-first habit target.

   One number: how many questions the reader wants to face per
   day. The target lives in localStorage ("atlas:goal:v1");
   today's progress is derived from the attempt ledger (every
   finished window and drill appends its rows there), so the
   goal needs no store of its own beyond the target itself.

   The ring reads: answers faced TODAY (correct or not — the
   goal is showing up, not being right).
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ledger.ts [app-client] (ecmascript)");
;
const GOAL_KEY = "atlas:goal:v1";
const GOAL_DEFAULT = 10;
const GOAL_MIN = 5;
const GOAL_MAX = 50;
const GOAL_STEP = 5;
function loadGoal() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(GOAL_KEY);
        if (!raw) return {
            target: GOAL_DEFAULT,
            setAt: 0
        };
        const parsed = JSON.parse(raw);
        const target = typeof parsed.target === "number" && Number.isFinite(parsed.target) ? parsed.target : GOAL_DEFAULT;
        return {
            target: clampTarget(target),
            setAt: typeof parsed.setAt === "number" ? parsed.setAt : 0
        };
    } catch  {
        return {
            target: GOAL_DEFAULT,
            setAt: 0
        };
    }
}
function saveGoal(store) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(GOAL_KEY, JSON.stringify(store));
    } catch  {
    /* private mode / quota — the goal degrades to session-only */ }
}
function clampTarget(n) {
    if (!Number.isFinite(n)) return GOAL_DEFAULT;
    return Math.max(GOAL_MIN, Math.min(GOAL_MAX, Math.round(n)));
}
function bumpGoal(delta) {
    const cur = loadGoal();
    const next = {
        target: clampTarget(cur.target + delta * GOAL_STEP),
        setAt: Date.now()
    };
    saveGoal(next);
    return next;
}
function todayAnswered(now = Date.now()) {
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dayKeyFor"])(now);
    let n = 0;
    for (const a of (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadLedger"])().attempts){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ledger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dayKeyFor"])(a.at) === today) n += a.total;
    }
    return n;
}
function goalStatus(now = Date.now()) {
    const { target } = loadGoal();
    const done = todayAnswered(now);
    return {
        target,
        done,
        met: done >= target
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/originkit/ui/hero-57/sunset-velocity.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedSideView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
/* eslint-disable */ // @ts-nocheck
"use client";
"use client";
;
const ADVANCED_DEFAULTS = {
    farSpeed: 2,
    midSpeed: 5,
    nearSpeed: 7,
    poleSpeed: 6,
    hedgeSpeed: 12,
    groundSpeed: 45,
    rotorSpeed: 60,
    farCount: 20,
    midCount: 8,
    nearSpacing: 500,
    nearHeight: 215,
    nearBlade: 135,
    sunSize: 130,
    sunX: 49,
    sunY: 33,
    sunGlow: 40,
    cloudOpacity: 85,
    cloudColor: "#6E2636",
    rimColor: "#F8C4B1",
    hazeColor: "#C9A8C0",
    hazeOpacity: 70,
    turbineNear: "#3A1820",
    turbineMid: "#4A1C27",
    turbineFar: "#7E3D5A",
    fieldColor: "#2E1A1E",
    roadColor: "#1B0B15",
    laneColor: "#EF6759",
    carRim: "#F8C4B1",
    wheelBlur: 60,
    seed: 7,
    grain: 0,
    vignette: 20,
    hover: 50
};
const REF_W = 736;
const REF_H = 414;
const CX = REF_W / 2;
const CY = REF_H / 2;
const HORIZON = 268;
const PX_PER_PCT = REF_W / 100;
const TAU = Math.PI * 2;
const colorCache = new Map();
function parseColor(c) {
    const key = c || "";
    const hit = colorCache.get(key);
    if (hit) return hit;
    let out = [
        0,
        0,
        0,
        1
    ];
    const s = key.trim();
    if (s[0] === "#") {
        let h = s.slice(1);
        if (h.length === 3 || h.length === 4) h = h.split("").map((x)=>x + x).join("");
        const n = parseInt(h.slice(0, 6), 16);
        const a = h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1;
        if (!isNaN(n)) out = [
            n >> 16 & 255,
            n >> 8 & 255,
            n & 255,
            a
        ];
    } else {
        const m = s.match(/rgba?\(([^)]+)\)/i);
        if (m) {
            const p = m[1].split(/[\s,\/]+/).filter(Boolean).map(parseFloat);
            out = [
                p[0] || 0,
                p[1] || 0,
                p[2] || 0,
                p[3] === undefined || isNaN(p[3]) ? 1 : p[3]
            ];
        }
    }
    if (colorCache.size > 256) colorCache.clear();
    colorCache.set(key, out);
    return out;
}
function rgba(c, a) {
    const p = parseColor(c);
    return `rgba(${p[0] | 0},${p[1] | 0},${p[2] | 0},${Math.max(0, Math.min(1, p[3] * a))})`;
}
function mix(a, b, t) {
    const p = parseColor(a);
    const q = parseColor(b);
    const r = p[0] + (q[0] - p[0]) * t;
    const g = p[1] + (q[1] - p[1]) * t;
    const bl = p[2] + (q[2] - p[2]) * t;
    return `rgb(${r | 0},${g | 0},${bl | 0})`;
}
function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
}
function mulberry32(a) {
    return function() {
        a |= 0;
        a = a + 0x6d2b79f5 | 0;
        let t = Math.imul(a ^ a >>> 15, 1 | a);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
const SPECKLE_COLORS = [
    "#3E2A2C",
    "#24141A",
    "#4A3032",
    "#503A36",
    "#CA424A"
];
function genScene(seed, farN, midN) {
    const rf = mulberry32(seed * 101 + 1);
    const far = [];
    for(let i = 0; i < farN; i++)far.push({
        x: (i + rf() * 0.85) / farN * 800,
        h: 26 + rf() * 26,
        base: 266.5 + rf() * 3,
        phase: rf() * TAU
    });
    const rm = mulberry32(seed * 103 + 2);
    const mid = [];
    for(let i = 0; i < midN; i++)mid.push({
        x: (i + 0.15 + rm() * 0.7) / midN * 900,
        h: 70 + rm() * 60,
        base: 271 + rm() * 5,
        phase: rm() * TAU
    });
    const rn = mulberry32(seed * 107 + 3);
    const nearPhase = [
        rn() * TAU,
        rn() * TAU
    ];
    const rc = mulberry32(seed * 109 + 4);
    const zones = [
        [
            -250,
            1000,
            0,
            30,
            10,
            8,
            20,
            1
        ],
        [
            -200,
            340,
            40,
            118,
            8,
            6,
            18,
            0
        ],
        [
            430,
            1000,
            50,
            160,
            10,
            10,
            30,
            0
        ],
        [
            200,
            540,
            122,
            152,
            3,
            3,
            6,
            0
        ],
        [
            -250,
            1000,
            160,
            225,
            7,
            2.5,
            6,
            2
        ]
    ];
    const clouds = [];
    for (const z of zones)for(let i = 0; i < z[4]; i++)clouds.push({
        x: z[0] + rc() * (z[1] - z[0]),
        y: z[2] + rc() * (z[3] - z[2]),
        w: 110 + rc() * 300,
        h: z[5] + rc() * (z[6] - z[5]),
        a: 0.6 + rc() * 0.4,
        tone: z[7]
    });
    clouds.push({
        x: 640,
        y: 108,
        w: 460,
        h: 72,
        a: 0.9,
        tone: 1
    });
    clouds.push({
        x: 120,
        y: 12,
        w: 520,
        h: 26,
        a: 0.9,
        tone: 1
    });
    clouds.push({
        x: 560,
        y: 16,
        w: 520,
        h: 30,
        a: 0.9,
        tone: 1
    });
    const rb = mulberry32(seed * 113 + 5);
    const bushes = [];
    for(let i = 0; i < 30; i++)bushes.push({
        x: rb() * REF_W,
        w: 3 + rb() * 5,
        h: 2 + rb() * 2.5
    });
    const speckles = [];
    for(let i = 0; i < 150; i++){
        const roll = rb();
        speckles.push({
            x: rb() * REF_W,
            y: 278 + rb() * 52,
            sz: 0.6 + rb() * 1.4,
            c: roll < 0.05 ? 4 : Math.floor(rb() * 4)
        });
    }
    const tufts = [];
    for(let i = 0; i < 70; i++)tufts.push({
        x: rb() * REF_W,
        h: 1.5 + rb() * 3,
        lean: (rb() - 0.5) * 2
    });
    const streaks = [];
    for(let i = 0; i < 40; i++)streaks.push({
        x: rb() * REF_W,
        y: 338 + rb() * 72,
        len: 10 + rb() * 40
    });
    return {
        far,
        mid,
        nearPhase,
        clouds,
        bushes,
        speckles,
        tufts,
        streaks
    };
}
function each(x0, off, P, L, R, m, fn) {
    if (!(P > 0)) return;
    const b = ((x0 + off) % P + P) % P;
    let x = b + Math.ceil((L - m - b) / P) * P;
    for(let g = 0; x <= R + m && g < 64; x += P, g++)fn(x);
}
function drawTurbine(ctx, x, base, h, blade, ang, tw) {
    const hy = base - h;
    ctx.beginPath();
    ctx.moveTo(x - tw * 0.5, base);
    ctx.lineTo(x - tw * 0.3, hy);
    ctx.lineTo(x + tw * 0.3, hy);
    ctx.lineTo(x + tw * 0.5, base);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x + tw * 0.5, hy, tw * 1.1, tw * 0.55, 0, 0, TAU);
    ctx.fill();
    const rw = Math.max(0.7, blade * 0.035);
    ctx.beginPath();
    for(let k = 0; k < 3; k++){
        const a = ang + k * TAU / 3;
        const dx = Math.sin(a);
        const dy = -Math.cos(a);
        const nx = Math.cos(a);
        const ny = Math.sin(a);
        ctx.moveTo(x + nx * rw * 0.45, hy + ny * rw * 0.45);
        ctx.lineTo(x + dx * blade * 0.2 + nx * rw, hy + dy * blade * 0.2 + ny * rw);
        ctx.lineTo(x + dx * blade, hy + dy * blade);
        ctx.lineTo(x + dx * blade * 0.25 - nx * rw * 0.35, hy + dy * blade * 0.25 - ny * rw * 0.35);
        ctx.lineTo(x - nx * rw * 0.45, hy - ny * rw * 0.45);
        ctx.closePath();
    }
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, hy, Math.max(0.6, tw * 0.75), 0, TAU);
    ctx.fill();
}
function bakeSky(c, cw, ch, dpr, s, W, H, p, adv, scene) {
    c.width = cw;
    c.height = ch;
    const g = c.getContext("2d");
    if (!g) return;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.clearRect(0, 0, cw, ch);
    g.setTransform(dpr * s, 0, 0, dpr * s, dpr * (W / 2 - CX * s), dpr * (H / 2 - CY * s));
    const L = CX - W / (2 * s) - 4;
    const R = CX + W / (2 * s) + 4;
    const T = CY - H / (2 * s) - 4;
    const top = p.skyTop || "#451922";
    const hor = p.skyHorizon || "#EF6759";
    const sky = g.createLinearGradient(0, 0, 0, HORIZON);
    // ATLAS retune: the ramp derives from the two sky props (instead of
    // hardcoded crimson stops) so the scene can be re-poured in any dusk.
    sky.addColorStop(0, top);
    sky.addColorStop(0.12, mix(top, hor, 0.22));
    sky.addColorStop(0.3, mix(top, hor, 0.5));
    sky.addColorStop(0.5, mix(hor, top, 0.16));
    sky.addColorStop(0.7, hor);
    sky.addColorStop(0.86, mix(hor, top, 0.34));
    sky.addColorStop(1, mix(hor, top, 0.56));
    g.fillStyle = sky;
    g.fillRect(L, T, R - L, HORIZON + 4 - T);
    const sx = clamp(adv.sunX, 0, 100) / 100 * REF_W;
    const sy = clamp(adv.sunY, 0, 100) / 100 * REF_H;
    const sr = Math.max(4, adv.sunSize / 2);
    const warm = g.createRadialGradient(sx, sy, 0, sx, sy, 300);
    warm.addColorStop(0, rgba(hor, 0.55));
    warm.addColorStop(1, rgba(hor, 0));
    g.fillStyle = warm;
    g.fillRect(L, T, R - L, HORIZON + 4 - T);
    const co = clamp(adv.cloudOpacity, 0, 100) / 100;
    const cloudC = adv.cloudColor;
    g.filter = `blur(${Math.max(1, 2.4 * s * dpr)}px)`;
    for (const cl of scene.clouds){
        const col = cl.tone === 1 ? mix(cloudC, "#3C1420", 0.55) : cl.tone === 2 ? mix(cloudC, hor, 0.55) : cloudC;
        g.fillStyle = rgba(col, cl.a * co);
        g.beginPath();
        g.ellipse(cl.x, cl.y, cl.w / 2, Math.max(0.5, cl.h / 2), 0, 0, TAU);
        g.fill();
    }
    g.filter = `blur(${Math.max(0.5, 0.6 * s * dpr)}px)`;
    for (const cl of scene.clouds){
        if (cl.tone === 2) continue;
        g.fillStyle = rgba(adv.rimColor, 0.45 * co);
        g.beginPath();
        g.ellipse(cl.x - cl.w * 0.05, cl.y + cl.h * 0.45, cl.w * 0.38, Math.max(0.4, cl.h * 0.07 + 0.4), 0, 0, TAU);
        g.fill();
    }
    g.filter = `blur(${Math.max(0.5, 1.2 * s * dpr)}px)`;
    g.fillStyle = rgba("#844E75", 0.6);
    g.beginPath();
    g.moveTo(L - 60, HORIZON + 2);
    g.lineTo(L - 60, 238);
    g.quadraticCurveTo(-30, 226, 20, 230);
    g.quadraticCurveTo(70, 234, 120, 222);
    g.quadraticCurveTo(170, 230, 205, 248);
    g.quadraticCurveTo(225, 260, 250, HORIZON + 2);
    g.closePath();
    g.fill();
    g.beginPath();
    g.moveTo(630, HORIZON + 2);
    g.quadraticCurveTo(680, 250, 725, 246);
    g.quadraticCurveTo(780, 248, R + 60, 254);
    g.lineTo(R + 60, HORIZON + 2);
    g.closePath();
    g.fill();
    g.filter = "none";
    const glow = clamp(adv.sunGlow, 0, 100) / 100;
    const sg = g.createRadialGradient(sx, sy, sr * 0.9, sx, sy, sr + 46);
    sg.addColorStop(0, rgba("#F8C4B1", glow * 0.9));
    sg.addColorStop(0.35, rgba(hor, glow));
    sg.addColorStop(1, rgba(hor, 0));
    g.fillStyle = sg;
    g.beginPath();
    g.arc(sx, sy, sr + 46, 0, TAU);
    g.fill();
    const sun = p.sunColor || "#F4F7F6";
    const disc = g.createRadialGradient(sx, sy, 0, sx, sy, sr);
    disc.addColorStop(0, sun);
    disc.addColorStop(0.7, sun);
    disc.addColorStop(1, mix(sun, "#F8C4B1", 0.85));
    g.fillStyle = disc;
    g.beginPath();
    g.arc(sx, sy, sr, 0, TAU);
    g.fill();
    const k = sr / 65;
    g.save();
    g.beginPath();
    g.arc(sx, sy, sr + 0.5, 0, TAU);
    g.clip();
    g.filter = `blur(${Math.max(0.4, 0.8 * s * dpr)}px)`;
    g.fillStyle = rgba(mix(hor, "#CA424A", 0.45), 0.95);
    const bars = [
        [
            -32,
            6,
            0.75
        ],
        [
            5,
            4,
            -0.85
        ],
        [
            16,
            8,
            -0.75
        ]
    ];
    for (const b of bars){
        g.beginPath();
        g.ellipse(sx + b[2] * sr, sy + b[0] * k, sr * 1.0, Math.max(0.5, b[1] * k / 2), 0, 0, TAU);
        g.fill();
    }
    g.restore();
    g.filter = "none";
}
function drawWheel(ctx, cx, cy, ang, blur, rimCol) {
    ctx.fillStyle = "#0C0507";
    ctx.beginPath();
    ctx.arc(cx, cy, 18.8, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = "rgba(70,48,60,0.7)";
    ctx.lineWidth = 0.9;
    ctx.beginPath();
    ctx.arc(cx, cy, 15.5, 0, TAU);
    ctx.stroke();
    const rg = ctx.createRadialGradient(cx - 3, cy - 3, 1, cx, cy, 11.5);
    rg.addColorStop(0, "#D6DAE2");
    rg.addColorStop(1, "#7C8190");
    ctx.fillStyle = rg;
    ctx.beginPath();
    ctx.arc(cx, cy, 11.5, 0, TAU);
    ctx.fill();
    const ghosts = blur > 0.02 ? 4 : 1;
    ctx.fillStyle = "#3E4250";
    for(let j = 0; j < ghosts; j++){
        ctx.globalAlpha = j === 0 ? 1 - blur * 0.55 : blur * 0.35;
        const a0 = ang + j * 0.16 * blur;
        for(let q = 0; q < 5; q++){
            const a = a0 + q * TAU / 5;
            ctx.beginPath();
            ctx.ellipse(cx + Math.cos(a) * 6.6, cy + Math.sin(a) * 6.6, 2.6, 1.6, a, 0, TAU);
            ctx.fill();
        }
    }
    ctx.globalAlpha = 1;
    if (blur > 0.02) {
        ctx.fillStyle = `rgba(170,175,190,${0.22 * blur})`;
        ctx.beginPath();
        ctx.arc(cx, cy, 11, 0, TAU);
        ctx.fill();
    }
    ctx.fillStyle = "#C0C4CC";
    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, TAU);
    ctx.fill();
    ctx.fillStyle = "#5A5F6C";
    ctx.beginPath();
    ctx.arc(cx, cy, 1, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = "rgba(240,242,248,0.55)";
    ctx.lineWidth = 0.7;
    ctx.beginPath();
    ctx.arc(cx, cy, 11.3, 0, TAU);
    ctx.stroke();
    ctx.strokeStyle = rgba(rimCol, 0.45);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, 18, -2.5, -0.6);
    ctx.stroke();
}
function topContour(ctx) {
    ctx.moveTo(245, 318);
    ctx.quadraticCurveTo(249, 307, 262, 303);
    ctx.quadraticCurveTo(276, 299, 292, 300);
    ctx.quadraticCurveTo(316, 299, 340, 294);
    ctx.lineTo(344, 293);
    ctx.quadraticCurveTo(356, 280, 371, 274);
    ctx.quadraticCurveTo(394, 266, 418, 272);
    ctx.quadraticCurveTo(452, 281, 479, 298);
    ctx.quadraticCurveTo(494, 306, 498, 316);
}
function drawCar(ctx, carColor, rimCol, glowCol, wheelAng, blur) {
    ctx.fillStyle = "#120709";
    for (const wx of [
        293,
        442
    ]){
        ctx.beginPath();
        ctx.arc(wx, 331, 24, Math.PI, 0);
        ctx.fill();
    }
    ctx.beginPath();
    ctx.moveTo(247, 337);
    ctx.lineTo(243, 333);
    ctx.quadraticCurveTo(240, 324, 245, 318);
    ctx.quadraticCurveTo(249, 307, 262, 303);
    ctx.quadraticCurveTo(276, 299, 292, 300);
    ctx.quadraticCurveTo(316, 299, 340, 294);
    ctx.lineTo(344, 293);
    ctx.quadraticCurveTo(356, 280, 371, 274);
    ctx.quadraticCurveTo(394, 266, 418, 272);
    ctx.quadraticCurveTo(452, 281, 479, 298);
    ctx.quadraticCurveTo(494, 306, 498, 316);
    ctx.lineTo(500, 326);
    ctx.quadraticCurveTo(500, 334, 494, 337);
    ctx.lineTo(467, 337);
    ctx.arc(442, 331, 25, 0, Math.PI, true);
    ctx.lineTo(417, 337);
    ctx.lineTo(318, 337);
    ctx.arc(293, 331, 25, 0, Math.PI, true);
    ctx.lineTo(268, 337);
    ctx.closePath();
    const bg = ctx.createLinearGradient(0, 268, 0, 338);
    bg.addColorStop(0, mix(carColor, "#B8C4E8", 0.3));
    bg.addColorStop(0.3, carColor);
    bg.addColorStop(0.65, mix(carColor, "#232C50", 0.45));
    bg.addColorStop(1, mix(carColor, "#15142A", 0.7));
    ctx.fillStyle = bg;
    ctx.fill();
    const refl = ctx.createLinearGradient(0, 312, 0, 338);
    refl.addColorStop(0, rgba(glowCol, 0));
    refl.addColorStop(1, rgba(glowCol, 0.14));
    ctx.fillStyle = refl;
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(349, 293);
    ctx.quadraticCurveTo(359, 283, 372, 277);
    ctx.quadraticCurveTo(394, 271, 416, 275);
    ctx.quadraticCurveTo(438, 282, 454, 293);
    ctx.closePath();
    const wg = ctx.createLinearGradient(0, 271, 0, 293);
    wg.addColorStop(0, "#3A1A2A");
    wg.addColorStop(1, "#140810");
    ctx.fillStyle = wg;
    ctx.fill();
    ctx.strokeStyle = "rgba(184,188,200,0.45)";
    ctx.lineWidth = 0.6;
    ctx.stroke();
    ctx.fillStyle = "rgba(60,34,48,0.7)";
    ctx.beginPath();
    ctx.arc(393, 283, 4, 0, TAU);
    ctx.fill();
    ctx.fillRect(388, 287, 11, 6);
    ctx.strokeStyle = mix(carColor, "#232C50", 0.2);
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(411, 273);
    ctx.lineTo(408, 293);
    ctx.stroke();
    ctx.strokeStyle = "rgba(10,8,20,0.35)";
    ctx.lineWidth = 0.7;
    ctx.beginPath();
    ctx.moveTo(347, 295);
    ctx.lineTo(346, 334);
    ctx.moveTo(408, 294);
    ctx.lineTo(411, 334);
    ctx.moveTo(318, 336);
    ctx.lineTo(417, 336);
    ctx.stroke();
    ctx.fillStyle = "#A8ACB8";
    ctx.fillRect(394, 302, 7, 1.4);
    ctx.fillStyle = "#F4F7F6";
    ctx.fillRect(318, 325.5, 96, 3.6);
    ctx.fillStyle = mix(carColor, "#1B1A33", 0.3);
    ctx.font = "bold 3.4px Helvetica, Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("PORSCHE", 366, 327.4);
    const hl = ctx.createRadialGradient(254, 309, 0, 254, 309, 10);
    hl.addColorStop(0, "rgba(255,240,220,0.25)");
    hl.addColorStop(1, "rgba(255,240,220,0)");
    ctx.fillStyle = hl;
    ctx.beginPath();
    ctx.arc(254, 309, 10, 0, TAU);
    ctx.fill();
    ctx.fillStyle = "#D8CCD0";
    ctx.beginPath();
    ctx.ellipse(254, 309, 3.2, 2.6, 0, 0, TAU);
    ctx.fill();
    ctx.fillStyle = "#E8A050";
    ctx.fillRect(246, 321, 3, 2);
    ctx.fillStyle = "#C0303A";
    ctx.fillRect(496, 317, 3, 6);
    ctx.strokeStyle = "#A8ACB8";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(243, 328);
    ctx.lineTo(258, 328);
    ctx.moveTo(487, 328);
    ctx.lineTo(500, 328);
    ctx.stroke();
    ctx.fillStyle = carColor;
    ctx.beginPath();
    ctx.ellipse(345, 289, 3, 1.8, 0, 0, TAU);
    ctx.fill();
    ctx.beginPath();
    topContour(ctx);
    ctx.strokeStyle = rgba(rimCol, 0.2);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.strokeStyle = rgba(rimCol, 0.85);
    ctx.lineWidth = 1.1;
    ctx.stroke();
    drawWheel(ctx, 293, 331, wheelAng, blur, rimCol);
    drawWheel(ctx, 442, 331, wheelAng + 1.1, blur, rimCol);
}
function AnimatedSideView(props) {
    _s();
    const { speed = 50, turbines = 50, scale = 100, background = "#000000", skyTop = "#EB123F", skyHorizon = "#EF6759", sunColor = "#FFFFFF", carColor = "#FF0000", style } = props;
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stillRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stillDone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const propsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(props);
    propsRef.current = {
        ...props,
        speed,
        turbines,
        scale,
        background,
        skyTop,
        skyHorizon,
        sunColor,
        carColor
    };
    const pointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        inside: false,
        nx: 0.5,
        down: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedSideView.useEffect": ()=>{
            const root = rootRef.current;
            const canvas = canvasRef.current;
            if (!root || !canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const size = {
                w: root.offsetWidth,
                h: root.offsetHeight
            };
            const ro = new ResizeObserver({
                "AnimatedSideView.useEffect": ()=>{
                    size.w = root.offsetWidth;
                    size.h = root.offsetHeight;
                }
            }["AnimatedSideView.useEffect"]);
            ro.observe(root);
            const mq = ("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
            const sky = document.createElement("canvas");
            let skyKey = "";
            let scene = null;
            let sceneKey = "";
            const grainC = document.createElement("canvas");
            grainC.width = grainC.height = 128;
            const gctx = grainC.getContext("2d");
            if (gctx) {
                const img = gctx.createImageData(128, 128);
                for(let i = 0; i < img.data.length; i += 4){
                    const v = Math.random() * 255;
                    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
                    img.data[i + 3] = 255;
                }
                gctx.putImageData(img, 0, 0);
            }
            const grainPat = ctx.createPattern(grainC, "repeat");
            const st = {
                tau: 0,
                over: 0,
                px: 0,
                boost: 0
            };
            const onUp = {
                "AnimatedSideView.useEffect.onUp": ()=>{
                    pointer.current.down = false;
                }
            }["AnimatedSideView.useEffect.onUp"];
            window.addEventListener("pointerup", onUp);
            window.addEventListener("pointercancel", onUp);
            let raf = 0;
            let last = -1;
            const frame = {
                "AnimatedSideView.useEffect.frame": (now)=>{
                    raf = requestAnimationFrame(frame);
                    const dt = last < 0 ? 0 : Math.min((now - last) / 1000, 1 / 20);
                    last = now;
                    const p = propsRef.current;
                    const adv = {
                        ...ADVANCED_DEFAULTS,
                        ...p.advanced ?? {}
                    };
                    const W = size.w;
                    const H = size.h;
                    if (!W || !H) return;
                    const dpr = Math.min(2, window.devicePixelRatio || 1);
                    const cw = Math.max(1, Math.round(W * dpr));
                    const ch = Math.max(1, Math.round(H * dpr));
                    if (canvas.width !== cw || canvas.height !== ch) {
                        canvas.width = cw;
                        canvas.height = ch;
                    }
                    const reduce = !!(mq && mq.matches);
                    const hoverK = reduce ? 0 : clamp(adv.hover, 0, 100) / 50;
                    const pt = pointer.current;
                    const ke = 1 - Math.exp(-dt * 5);
                    st.over += ((pt.inside ? 1 : 0) - st.over) * ke;
                    st.px += ((pt.inside ? pt.nx * 2 - 1 : 0) - st.px) * ke * 0.8;
                    st.boost += ((pt.down ? 1 : 0) - st.boost) * (1 - Math.exp(-dt * 3));
                    const sf = clamp(p.speed, 0, 100) / 50;
                    if (!reduce) st.tau += dt * sf * (1 + st.boost * 0.8 * hoverK);
                    const tau = st.tau;
                    const s = Math.min(W / REF_W, H / REF_H) * (clamp(p.scale, 50, 150) / 100);
                    const L = CX - W / (2 * s);
                    const R = CX + W / (2 * s);
                    const B = CY + H / (2 * s);
                    const dens = clamp(p.turbines, 0, 100) / 50;
                    const farN = Math.round(Math.max(0, adv.farCount) * dens);
                    const midN = Math.round(Math.max(0, adv.midCount) * dens);
                    const sk = `${adv.seed}|${farN}|${midN}`;
                    if (!scene || sk !== sceneKey) {
                        scene = genScene(adv.seed, farN, midN);
                        sceneKey = sk;
                        skyKey = "";
                    }
                    const bk = [
                        cw,
                        ch,
                        dpr,
                        s,
                        W,
                        H,
                        p.skyTop,
                        p.skyHorizon,
                        p.sunColor,
                        adv.sunSize,
                        adv.sunX,
                        adv.sunY,
                        adv.sunGlow,
                        adv.cloudOpacity,
                        adv.cloudColor,
                        adv.rimColor,
                        adv.seed
                    ].join("|");
                    if (bk !== skyKey) {
                        bakeSky(sky, cw, ch, dpr, s, W, H, p, adv, scene);
                        skyKey = bk;
                    }
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.globalAlpha = 1;
                    ctx.globalCompositeOperation = "source-over";
                    ctx.fillStyle = p.background || "#000000";
                    ctx.fillRect(0, 0, cw, ch);
                    ctx.drawImage(sky, 0, 0);
                    ctx.setTransform(dpr * s, 0, 0, dpr * s, dpr * (W / 2 - CX * s), dpr * (H / 2 - CY * s));
                    const shift = {
                        "AnimatedSideView.useEffect.frame.shift": (depth)=>-st.px * depth * hoverK
                    }["AnimatedSideView.useEffect.frame.shift"];
                    const rot = adv.rotorSpeed * Math.PI / 180;
                    const rotor = {
                        "AnimatedSideView.useEffect.frame.rotor": (phase)=>reduce ? 0 : phase + rot * tau
                    }["AnimatedSideView.useEffect.frame.rotor"];
                    const sx = clamp(adv.sunX, 0, 100) / 100 * REF_W;
                    const sy = clamp(adv.sunY, 0, 100) / 100 * REF_H;
                    const sr = Math.max(4, adv.sunSize / 2);
                    const hg = st.over * hoverK;
                    if (hg > 0.005) {
                        const g = ctx.createRadialGradient(sx, sy, sr * 0.6, sx, sy, sr + 70);
                        g.addColorStop(0, rgba("#F8C4B1", 0.3 * hg));
                        g.addColorStop(1, rgba(p.skyHorizon, 0));
                        ctx.fillStyle = g;
                        ctx.beginPath();
                        ctx.arc(sx, sy, sr + 70, 0, TAU);
                        ctx.fill();
                    }
                    const fg = ctx.createLinearGradient(0, HORIZON, 0, 331);
                    fg.addColorStop(0, mix(adv.fieldColor, "#120810", 0.5));
                    fg.addColorStop(0.5, adv.fieldColor);
                    fg.addColorStop(1, mix(adv.fieldColor, "#4A3032", 0.45));
                    ctx.fillStyle = fg;
                    ctx.fillRect(L - 2, HORIZON, R - L + 4, 331 - HORIZON);
                    const farOff = adv.farSpeed * PX_PER_PCT * tau + shift(3);
                    ctx.fillStyle = rgba(adv.turbineFar, 0.75);
                    for (const t of scene.far)each(t.x, farOff, 800, L, R, 40, {
                        "AnimatedSideView.useEffect.frame": (x)=>drawTurbine(ctx, x, t.base, t.h, t.h * 0.5, rotor(t.phase), 1.1)
                    }["AnimatedSideView.useEffect.frame"]);
                    const hz = clamp(adv.hazeOpacity, 0, 100) / 100;
                    const hzDeep = mix(adv.hazeColor, "#140705", 0.62);
                    const hg2 = ctx.createLinearGradient(0, 236, 0, 278);
                    hg2.addColorStop(0, rgba(hzDeep, 0));
                    hg2.addColorStop(0.55, rgba(hzDeep, 0.4 * hz));
                    hg2.addColorStop(0.74, rgba(adv.hazeColor, 0.9 * hz));
                    hg2.addColorStop(0.84, rgba(adv.hazeColor, 0.55 * hz));
                    hg2.addColorStop(1, rgba(hzDeep, 0));
                    ctx.fillStyle = hg2;
                    ctx.fillRect(L - 2, 236, R - L + 4, 42);
                    ctx.fillStyle = "rgba(28,13,19,0.6)";
                    ctx.fillRect(L - 2, 270, R - L + 4, 2);
                    const hedgeOff = adv.hedgeSpeed * PX_PER_PCT * tau + shift(8);
                    ctx.fillStyle = "#24121A";
                    for (const b of scene.bushes)each(b.x, hedgeOff, REF_W, L, R, 10, {
                        "AnimatedSideView.useEffect.frame": (x)=>ctx.fillRect(x, 271 - b.h, b.w, b.h)
                    }["AnimatedSideView.useEffect.frame"]);
                    const midOff = adv.midSpeed * PX_PER_PCT * tau + shift(6);
                    ctx.fillStyle = adv.turbineMid;
                    for (const t of scene.mid)each(t.x, midOff, 900, L, R, 80, {
                        "AnimatedSideView.useEffect.frame": (x)=>drawTurbine(ctx, x, t.base, t.h, t.h * 0.45, rotor(t.phase), 2.4)
                    }["AnimatedSideView.useEffect.frame"]);
                    const gv = adv.groundSpeed * PX_PER_PCT;
                    for (const sp of scene.speckles){
                        const f = 0.3 + 0.7 * ((sp.y - 278) / 52);
                        const len = sp.sz + gv * f * sf * 0.012;
                        ctx.fillStyle = sp.c === 4 ? rgba(SPECKLE_COLORS[4], 0.4) : rgba(SPECKLE_COLORS[sp.c], 0.7);
                        each(sp.x, gv * f * tau + shift(16) * f, REF_W, L, R, len + 4, {
                            "AnimatedSideView.useEffect.frame": (x)=>ctx.fillRect(x, sp.y, len, sp.sz * 0.6)
                        }["AnimatedSideView.useEffect.frame"]);
                    }
                    const poleOff = adv.poleSpeed * PX_PER_PCT * tau + shift(10);
                    ctx.strokeStyle = rgba(adv.turbineMid, 0.3);
                    ctx.lineWidth = 0.5;
                    each(437, poleOff, 510, L, R, 520, {
                        "AnimatedSideView.useEffect.frame": (x)=>{
                            ctx.beginPath();
                            for (const dx of [
                                -12,
                                12
                            ]){
                                ctx.moveTo(x + dx, 121);
                                ctx.quadraticCurveTo(x + 255 + dx, 157, x + 510 + dx, 121);
                            }
                            ctx.stroke();
                        }
                    }["AnimatedSideView.useEffect.frame"]);
                    ctx.fillStyle = adv.turbineMid;
                    each(437, poleOff, 510, L, R, 20, {
                        "AnimatedSideView.useEffect.frame": (x)=>{
                            ctx.fillRect(x - 1.4, 112, 2.8, 170);
                            ctx.fillRect(x - 12, 119, 24, 2);
                            ctx.fillRect(x - 9, 130, 18, 1.6);
                        }
                    }["AnimatedSideView.useEffect.frame"]);
                    const sp = Math.max(100, adv.nearSpacing);
                    const nearOff = adv.nearSpeed * PX_PER_PCT * tau + shift(14);
                    const nb = Math.max(10, adv.nearBlade);
                    const nh = Math.max(40, adv.nearHeight);
                    for(let i = 0; i < 2; i++){
                        const ph = scene.nearPhase[i];
                        const hh = nh + (i ? -8 : 0);
                        each(372 + i * sp, nearOff, sp * 2, L, R, nb + 10, {
                            "AnimatedSideView.useEffect.frame": (x)=>{
                                ctx.fillStyle = adv.turbineNear;
                                drawTurbine(ctx, x, 278, hh, nb, rotor(ph), 4.5);
                                ctx.strokeStyle = rgba("#CA424A", 0.35);
                                ctx.lineWidth = 0.8;
                                ctx.beginPath();
                                ctx.moveTo(x + 2.25, 278);
                                ctx.lineTo(x + 1.35, 278 - hh);
                                ctx.stroke();
                            }
                        }["AnimatedSideView.useEffect.frame"]);
                    }
                    const rg = ctx.createLinearGradient(0, 331, 0, 414);
                    rg.addColorStop(0, "#2E161B");
                    rg.addColorStop(1, adv.roadColor);
                    ctx.fillStyle = rg;
                    ctx.fillRect(L - 2, 331, R - L + 4, Math.max(414, B) - 331 + 4);
                    const sheen = ctx.createLinearGradient(0, 336, 0, 354);
                    sheen.addColorStop(0, rgba("#52222E", 0));
                    sheen.addColorStop(0.5, rgba("#52222E", 0.5));
                    sheen.addColorStop(1, rgba("#52222E", 0));
                    ctx.fillStyle = sheen;
                    ctx.fillRect(L - 2, 336, R - L + 4, 18);
                    ctx.fillStyle = rgba("#E8B0A8", 0.4);
                    ctx.fillRect(L - 2, 332.5, R - L + 4, 1.2);
                    ctx.fillStyle = rgba("#6A3038", 0.12);
                    for (const st2 of scene.streaks)each(st2.x, gv * 1.3 * tau + shift(20), REF_W, L, R, st2.len, {
                        "AnimatedSideView.useEffect.frame": (x)=>ctx.fillRect(x, st2.y, st2.len, 0.8)
                    }["AnimatedSideView.useEffect.frame"]);
                    ctx.fillStyle = rgba("#CA424A", 0.5);
                    each(0, gv * 1.15 * tau + shift(18), 62, L, R, 30, {
                        "AnimatedSideView.useEffect.frame": (x)=>ctx.fillRect(x, 356.2, 26, 1.4)
                    }["AnimatedSideView.useEffect.frame"]);
                    ctx.fillStyle = rgba(adv.laneColor, 0.7);
                    ctx.fillRect(L - 2, 396, R - L + 4, 2.4);
                    ctx.fillStyle = "rgba(20,9,16,0.7)";
                    for (const tf of scene.tufts)each(tf.x, gv * 0.95 * tau + shift(17), REF_W, L, R, 6, {
                        "AnimatedSideView.useEffect.frame": (x)=>{
                            ctx.beginPath();
                            ctx.moveTo(x - 0.8, 332);
                            ctx.lineTo(x + tf.lean, 332 - tf.h);
                            ctx.lineTo(x + 0.8, 332);
                            ctx.fill();
                        }
                    }["AnimatedSideView.useEffect.frame"]);
                    ctx.save();
                    ctx.translate(390, 368);
                    ctx.scale(1, 28 / 172);
                    const shg = ctx.createRadialGradient(0, 0, 0, 0, 0, 172);
                    shg.addColorStop(0, "rgba(20,8,16,0.9)");
                    shg.addColorStop(0.65, "rgba(20,8,16,0.7)");
                    shg.addColorStop(1, "rgba(20,8,16,0)");
                    ctx.fillStyle = shg;
                    ctx.beginPath();
                    ctx.arc(0, 0, 172, 0, TAU);
                    ctx.fill();
                    ctx.restore();
                    ctx.fillStyle = "rgba(20,8,16,0.9)";
                    ctx.beginPath();
                    ctx.ellipse(370, 349, 130, 6, 0, 0, TAU);
                    ctx.fill();
                    const wheelAng = reduce ? 0 : -(gv / 19) * tau;
                    const blur = clamp(adv.wheelBlur, 0, 100) / 100 * Math.min(1, sf);
                    drawCar(ctx, p.carColor || "#5A6E9A", adv.carRim, p.skyHorizon || "#EF6759", wheelAng, reduce ? 0 : blur);
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    const vig = clamp(adv.vignette, 0, 100) / 100;
                    if (vig > 0) {
                        const diag = Math.hypot(cw, ch) / 2;
                        const vg = ctx.createRadialGradient(cw / 2, ch / 2, diag * 0.45, cw / 2, ch / 2, diag);
                        vg.addColorStop(0, "rgba(0,0,0,0)");
                        vg.addColorStop(1, `rgba(0,0,0,${0.75 * vig})`);
                        ctx.fillStyle = vg;
                        ctx.fillRect(0, 0, cw, ch);
                    }
                    const gr = clamp(adv.grain, 0, 100) / 100;
                    if (gr > 0 && grainPat) {
                        ctx.save();
                        ctx.globalAlpha = gr * 0.5;
                        ctx.globalCompositeOperation = "overlay";
                        ctx.translate(Math.floor(Math.random() * 128), Math.floor(Math.random() * 128));
                        ctx.fillStyle = grainPat;
                        ctx.fillRect(-128, -128, cw + 256, ch + 256);
                        ctx.restore();
                    }
                    // first animated frame is live — retire the server-painted still
                    if (!stillDone.current && stillRef.current) {
                        stillDone.current = true;
                        stillRef.current.classList.add("is-done");
                    }
                }
            }["AnimatedSideView.useEffect.frame"];
            raf = requestAnimationFrame(frame);
            return ({
                "AnimatedSideView.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    ro.disconnect();
                    window.removeEventListener("pointerup", onUp);
                    window.removeEventListener("pointercancel", onUp);
                }
            })["AnimatedSideView.useEffect"];
        }
    }["AnimatedSideView.useEffect"], []);
    const onMove = (e)=>{
        const el = e.currentTarget;
        const w = el.offsetWidth || 1;
        pointer.current.inside = true;
        pointer.current.nx = clamp(e.nativeEvent.offsetX / w, 0, 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        onPointerEnter: onMove,
        onPointerMove: onMove,
        onPointerLeave: ()=>{
            pointer.current.inside = false;
        },
        onPointerDown: (e)=>{
            onMove(e);
            pointer.current.down = true;
        },
        style: {
            minWidth: 1200,
            minHeight: 800,
            width: "100%",
            height: "100%",
            ...style,
            position: "relative",
            overflow: "hidden",
            background
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                ref: stillRef,
                src: "/hero-dusk-still.webp",
                alt: "",
                "aria-hidden": true,
                draggable: false,
                fetchPriority: "high",
                className: "hero-still"
            }, void 0, false, {
                fileName: "[project]/src/components/originkit/ui/hero-57/sunset-velocity.tsx",
                lineNumber: 942,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    display: "block"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/originkit/ui/hero-57/sunset-velocity.tsx",
                lineNumber: 951,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/originkit/ui/hero-57/sunset-velocity.tsx",
        lineNumber: 920,
        columnNumber: 9
    }, this);
}
_s(AnimatedSideView, "Foa18YcSSVpjEWBaglIjPv5FF8M=");
_c = AnimatedSideView;
var _c;
__turbopack_context__.k.register(_c, "AnimatedSideView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/originkit/ui/hero-57/hero-57-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SunsetHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$originkit$2f$ui$2f$hero$2d$57$2f$sunset$2d$velocity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/originkit/ui/hero-57/sunset-velocity.tsx [app-client] (ecmascript)");
// @ts-nocheck
"use client";
;
;
function SunsetHero({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-scene",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$originkit$2f$ui$2f$hero$2d$57$2f$sunset$2d$velocity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    background: "#070509",
                    skyTop: "#150a06",
                    skyHorizon: "#b34912",
                    sunColor: "#ffd9a0",
                    carColor: "#ea580c",
                    speed: 55,
                    turbines: 55,
                    advanced: {
                        sunX: 74,
                        sunY: 56,
                        sunSize: 105,
                        sunGlow: 60,
                        cloudColor: "#57200e",
                        cloudOpacity: 55,
                        rimColor: "#f5c889",
                        hazeColor: "#f6b48e",
                        hazeOpacity: 46,
                        turbineFar: "#6b2d12",
                        turbineMid: "#200b06",
                        turbineNear: "#0d0503",
                        fieldColor: "#150809",
                        roadColor: "#090306",
                        laneColor: "#f59e0b",
                        carRim: "#ffd9a0",
                        wheelBlur: 60,
                        seed: 7,
                        grain: 14,
                        vignette: 40,
                        hover: 45
                    },
                    style: {
                        minWidth: 0,
                        minHeight: 0
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/originkit/ui/hero-57/hero-57-content.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/originkit/ui/hero-57/hero-57-content.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-fade"
            }, void 0, false, {
                fileName: "[project]/src/components/originkit/ui/hero-57/hero-57-content.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-sunlight",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/originkit/ui/hero-57/hero-57-content.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-scrim",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/originkit/ui/hero-57/hero-57-content.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "atlas-bloom",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/originkit/ui/hero-57/hero-57-content.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-overlay-inner",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/originkit/ui/hero-57/hero-57-content.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/originkit/ui/hero-57/hero-57-content.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/originkit/ui/hero-57/hero-57-content.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = SunsetHero;
var _c;
__turbopack_context__.k.register(_c, "SunsetHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/originkit/ui/hero-57/section-hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHero",
    ()=>SectionHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$originkit$2f$ui$2f$hero$2d$57$2f$hero$2d$57$2d$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/originkit/ui/hero-57/hero-57-content.tsx [app-client] (ecmascript)");
// @ts-nocheck
"use client";
;
;
function SectionHero({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hero-57",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$originkit$2f$ui$2f$hero$2d$57$2f$hero$2d$57$2d$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/originkit/ui/hero-57/section-hero.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/originkit/ui/hero-57/section-hero.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = SectionHero;
var _c;
__turbopack_context__.k.register(_c, "SectionHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/originkit/hero-57.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$originkit$2f$ui$2f$hero$2d$57$2f$section$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/originkit/ui/hero-57/section-hero.tsx [app-client] (ecmascript)");
// @ts-nocheck
"use client";
;
;
;
const Hero57 = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$originkit$2f$ui$2f$hero$2d$57$2f$section$2d$hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHero"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/originkit/hero-57.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Hero57;
const __TURBOPACK__default__export__ = Hero57;
var _c;
__turbopack_context__.k.register(_c, "Hero57");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/atlas/AtlasLanding.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AtlasLanding",
    ()=>AtlasLanding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   THE ATLAS — dark premium animated landing.

   Design language: a midnight gallery. Deep space canvas with
   film grain, aurora washes and ghost typography.

   THE SHELF LAW: every subject box is poured from the SAME
   mould — one dark frosted-glass build, one layout, one
   minimal-premium feel, set two boxes side by side. The only
   things a box may call its own: its sigil (icon + accent)
   and one whisper of ambient motion (sweep / aura / scan /
   spotlight / shimmer / drift).

   The router in src/app/page.tsx mounts this view for "#/atlas"
   and delegates to a subject app for "#/subject/<id>".
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$command$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Command$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/command.js [app-client] (ecmascript) <export default as Command>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waypoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waypoints$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waypoints.js [app-client] (ecmascript) <export default as Waypoints>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atlas/subjects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sm2.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/progress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$goal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/goal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$originkit$2f$hero$2d$57$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/originkit/hero-57.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
/* ---------------------------------------------- easing + reveal */ const EASE = [
    0.22,
    1,
    0.36,
    1
];
function Rise({ children, delay = 0, className = "", y = 26 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        initial: {
            opacity: 0,
            y
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "0px 0px -60px 0px"
        },
        transition: {
            duration: 0.8,
            delay,
            ease: EASE
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c = Rise;
/* ---------------------------------------------- floating glyphs */ const GLYPHS = [
    {
        ch: "0 1",
        left: "5%",
        top: "15%",
        size: "3.4rem",
        delay: "0s"
    },
    {
        ch: "λ",
        left: "89%",
        top: "19%",
        size: "3rem",
        delay: "1.2s"
    },
    {
        ch: "{ }",
        left: "82%",
        top: "63%",
        size: "2.6rem",
        delay: "2s"
    },
    {
        ch: "Σ",
        left: "8%",
        top: "71%",
        size: "2.8rem",
        delay: ".6s"
    },
    {
        ch: "→",
        left: "47%",
        top: "7%",
        size: "2.2rem",
        delay: "1.6s"
    },
    {
        ch: "π",
        left: "28%",
        top: "86%",
        size: "2.4rem",
        delay: "2.6s"
    },
    {
        ch: "Δ",
        left: "70%",
        top: "37%",
        size: "2rem",
        delay: "3.1s"
    }
];
/* ---------------------------------------------- count-up stat */ function Stat({ value, render, label, delay = 0 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-40px"
    });
    const [n, setN] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Stat.useEffect": ()=>{
            if (!inView) return;
            const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(0, value, {
                duration: 1.5,
                delay,
                ease: EASE,
                onUpdate: {
                    "Stat.useEffect.controls": (v)=>setN(Math.round(v))
                }["Stat.useEffect.controls"]
            });
            return ({
                "Stat.useEffect": ()=>controls.stop()
            })["Stat.useEffect"];
        }
    }["Stat.useEffect"], [
        inView,
        value,
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "flex flex-col items-center gap-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-display text-3xl font-black tracking-tight text-[#f7ecdd] md:text-4xl",
                children: render ? render(n) : n
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[.62rem] font-extrabold uppercase tracking-[.22em] text-[#8d7b63]",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s(Stat, "B/OlErt2cuKuVmdpdzIiByRZZ4I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = Stat;
/* ============================================================
   SMALL SHARED PIECES — every card speaks the same language
   ============================================================ */ function ShelfTag({ children, color = "#b49a78" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "font-mono text-[.6rem] font-bold uppercase tracking-[.28em]",
        style: {
            color
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c2 = ShelfTag;
function LiveBadge({ accent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[.56rem] font-black uppercase tracking-[.18em]",
        style: {
            borderColor: `${accent}55`,
            color: accent,
            background: `${accent}14`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "atlas-live-dot h-1.5 w-1.5 rounded-full",
                style: {
                    background: accent,
                    boxShadow: `0 0 0 3px ${accent}30`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            "live"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c3 = LiveBadge;
function LockedBadge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[.04] px-2.5 py-1 text-[.56rem] font-black uppercase tracking-[.18em] text-[#8d7b63]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                className: "h-2.5 w-2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            "reserved"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_c4 = LockedBadge;
/* ============================================================
   THE AMBIENCE — six whispers of motion, one per box.
   Everything else on the card is identical.
   ============================================================ */ function Ambience({ kind, accent }) {
    switch(kind){
        /* 01 · FoC — a sheet of light glides across the frosted glass */ case "sweep":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "glass-sweep",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 163,
                columnNumber: 14
            }, this);
        /* 02 · ATB — one soft aura breathing behind the glass */ case "aura":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: "amb-breathe pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full",
                style: {
                    background: `${accent}30`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, this);
        /* 03 · scan — a thin sonar hairline sweeping down, "brewing" */ case "scan":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: "amb-scan",
                style: {
                    ["--scan-color"]: accent
                }
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 177,
                columnNumber: 14
            }, this);
        /* 04 · spotlight — the light follows your cursor */ case "spotlight":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: "amb-spot",
                style: {
                    ["--spot-color"]: `${accent}26`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this);
        /* 05 · shimmer — a foil hairline sliding along the top edge */ case "shimmer":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: "amb-shimmer",
                style: {
                    background: `linear-gradient(90deg, transparent 20%, ${accent} 50%, transparent 80%)`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, this);
        /* 06 · MKTG — a beacon: one pulsing ring + steady gold dot */ case "beacon":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: "pointer-events-none absolute -right-12 -top-14 h-52 w-52",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "amb-breathe absolute inset-6 rounded-full border-2",
                        style: {
                            borderColor: `${accent}66`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "amb-breathe absolute inset-14 rounded-full border",
                        style: {
                            borderColor: `${accent}44`,
                            animationDelay: "-1.6s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute right-10 top-10 h-2.5 w-2.5 rounded-full anim-floaty",
                        style: {
                            background: "#e3c26b"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 202,
                columnNumber: 9
            }, this);
        /* 07 · drift — two warm coals slowly floating under the glass */ case "drift":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "amb-glow anim-floaty h-36 w-36",
                        style: {
                            background: accent,
                            left: "-3rem",
                            bottom: "-3rem",
                            animationDelay: "0s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "amb-glow anim-floaty h-24 w-24",
                        style: {
                            background: "#f5c889",
                            right: "-2rem",
                            top: "2rem",
                            animationDelay: "-4s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true);
    }
}
_c5 = Ambience;
/* cards due for spaced review on this shelf — read once after mount so the
   first paint stays hydration-stable; renders nothing until the store says so */ function DueBadge({ subjectId }) {
    _s1();
    const [n, setN] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DueBadge.useEffect": ()=>{
            /* rAF-deferred: keeps the first paint hydration-stable */ const raf = requestAnimationFrame({
                "DueBadge.useEffect.raf": ()=>setN((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dueCounts"])()[subjectId] ?? 0)
            }["DueBadge.useEffect.raf"]);
            return ({
                "DueBadge.useEffect": ()=>cancelAnimationFrame(raf)
            })["DueBadge.useEffect"];
        }
    }["DueBadge.useEffect"], [
        subjectId
    ]);
    if (n <= 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "glass-chip rounded-full px-2.5 py-1 font-mono text-[.6rem] font-bold uppercase tracking-[.14em] text-[#f5c889]",
        title: "Cards due for spaced review — open the ledger (⌘K → ledger)",
        children: [
            n,
            " due"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
        lineNumber: 260,
        columnNumber: 5
    }, this);
}
_s1(DueBadge, "8vKwGAz0pI+g7k8upGxIqkeaWHI=");
_c6 = DueBadge;
/* chapters read on this shelf — same hydration-safe pattern as DueBadge;
   silent until the reader has actually walked at least one chapter */ function ChaptersBadge({ subjectId, total }) {
    _s2();
    const [seen, setSeen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChaptersBadge.useEffect": ()=>{
            const raf = requestAnimationFrame({
                "ChaptersBadge.useEffect.raf": ()=>setSeen((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readProgressCounts"])()[subjectId] ?? 0)
            }["ChaptersBadge.useEffect.raf"]);
            return ({
                "ChaptersBadge.useEffect": ()=>cancelAnimationFrame(raf)
            })["ChaptersBadge.useEffect"];
        }
    }["ChaptersBadge.useEffect"], [
        subjectId
    ]);
    if (seen <= 0 || total <= 0) return null;
    const done = seen >= total;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "glass-chip rounded-full px-2.5 py-1 font-mono text-[.6rem] font-bold uppercase tracking-[.14em]",
        style: {
            color: done ? "#a9c977" : "#c9b99f"
        },
        title: "Chapters read — tracked as you scroll the notes",
        children: [
            done ? "✓ " : "",
            seen,
            "/",
            total,
            " read"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
        lineNumber: 280,
        columnNumber: 5
    }, this);
}
_s2(ChaptersBadge, "34XZXOgZxaNdAEAbnCA8SmASTUE=");
_c7 = ChaptersBadge;
function SubjectCard({ subject, index, onEnter }) {
    _s3();
    const live = subject.status === "live";
    const spotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setSpotRef = (el)=>{
        spotRef.current = el;
    };
    /* cursor spotlight — wired only for the "spotlight" ambience */ const onSpotMove = (e)=>{
        if (subject.ambience !== "spotlight") return;
        const el = spotRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    const inner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ambience, {
                kind: subject.ambience,
                accent: subject.accent
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: "pointer-events-none absolute left-6 top-6 h-12 w-12 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60 md:left-7",
                style: {
                    background: subject.accent
                }
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "glass-chip flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(subject.icon, {
                            className: "h-5 w-5",
                            style: {
                                color: live ? subject.accent : `${subject.accent}cc`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    live ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChaptersBadge, {
                                subjectId: subject.id,
                                total: subject.chapters ?? 0
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                lineNumber: 324,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DueBadge, {
                                subjectId: subject.id
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiveBadge, {
                                accent: subject.accent
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                lineNumber: 326,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 323,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LockedBadge, {}, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShelfTag, {
                        color: live ? "#b49a78" : "#77685a",
                        children: [
                            "shelf ",
                            subject.shelf
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `mt-2 font-display text-2xl font-black leading-tight md:text-[1.55rem] ${live ? "text-[#f7ecdd]" : "text-[#cfc0a8]"}`,
                        children: subject.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `mt-2.5 text-[.88rem] leading-relaxed ${live ? "text-[#c9b99f]" : "text-[#8d7f6c]"}`,
                        children: live ? subject.description : subject.tagline
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-4 flex flex-wrap gap-1.5",
                children: subject.topics.slice(0, live ? 5 : 1).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "glass-chip rounded-full px-2.5 py-1 text-[.66rem] font-semibold text-[#ecdcc2]",
                        children: t
                    }, t, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 349,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-4",
                children: live ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-[.64rem] uppercase tracking-[.16em] text-[#8d7b63]",
                            children: [
                                subject.chapters,
                                " chapters · ",
                                subject.questions,
                                " questions · ",
                                subject.examWindows,
                                " windows"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 358,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex shrink-0 items-center gap-1 text-[.68rem] font-black uppercase tracking-[.16em] text-[#f5c889] transition-transform duration-300 group-hover:translate-x-1",
                            children: [
                                "enter ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                    lineNumber: 362,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 361,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-[.62rem] uppercase tracking-[.18em] text-[#5d5142]",
                            children: "awaiting syllabus — the pdf drops here"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 367,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex shrink-0 items-center gap-1 font-mono text-[.62rem] uppercase tracking-[.18em] text-[#6d5f4f]",
                            children: "soon"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 370,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    const shell = "group card-glass relative flex h-full min-h-[19.5rem] w-full flex-col overflow-hidden rounded-[1.7rem] p-6 text-left md:p-7";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 34,
            filter: "blur(8px)"
        },
        whileInView: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
        },
        viewport: {
            once: true,
            margin: "0px 0px -40px 0px"
        },
        transition: {
            duration: 0.85,
            delay: 0.06 * index,
            ease: EASE
        },
        className: "min-w-0",
        children: live ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            ref: setSpotRef,
            type: "button",
            onClick: ()=>onEnter(subject.id),
            "aria-label": `Open ${subject.title} notes`,
            onMouseMove: onSpotMove,
            whileHover: {
                y: -5
            },
            whileTap: {
                scale: 0.985
            },
            transition: {
                duration: 0.35,
                ease: EASE
            },
            className: shell,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "glass-gloss",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                    lineNumber: 402,
                    columnNumber: 11
                }, this),
                inner
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
            lineNumber: 391,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: setSpotRef,
            onMouseMove: onSpotMove,
            className: shell,
            "aria-label": `${subject.title} — awaiting syllabus`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "glass-gloss",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                    lineNumber: 407,
                    columnNumber: 11
                }, this),
                inner
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
            lineNumber: 406,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
        lineNumber: 383,
        columnNumber: 5
    }, this);
}
_s3(SubjectCard, "NHG/d+rmZUF2RJFVz8DbE2E0uPQ=");
_c8 = SubjectCard;
/* ---------------------------------------------- next-shelf tile */ function NextShelfTile({ index, shelf }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "0px 0px -40px 0px"
        },
        transition: {
            duration: 0.8,
            delay: 0.06 * index,
            ease: EASE
        },
        className: "min-w-0 md:col-span-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative flex h-full min-h-[11rem] flex-col justify-between overflow-hidden rounded-[1.7rem] border border-dashed border-white/12 bg-black/40 p-6 md:p-7",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": true,
                    className: "text-ghost pointer-events-none absolute -right-4 -top-8 select-none font-display text-[9rem] font-black leading-none",
                    children: shelf
                }, void 0, false, {
                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                    lineNumber: 428,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShelfTag, {
                            color: "#b49a78",
                            children: "next drop"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 436,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mt-2 flex items-center gap-2 font-display text-2xl font-black text-[#f7ecdd] md:text-[1.55rem]",
                            children: [
                                "Shelf ",
                                shelf,
                                " is loading",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-end gap-1 pb-1.5",
                                    "aria-hidden": true,
                                    children: [
                                        0,
                                        1,
                                        2
                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "dot-pulse h-1.5 w-1.5 rounded-full bg-[#f5c889]",
                                            style: {
                                                animationDelay: `${i * 0.22}s`
                                            }
                                        }, i, false, {
                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                            lineNumber: 441,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                    lineNumber: 439,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 437,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2.5 max-w-md text-[.88rem] leading-relaxed text-[#a89a86]",
                            children: "The atlas grows one PDF at a time. Drop the next syllabus and this tile comes alive — distilled, animated, made runnable. Same mould, every single time."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 449,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                    lineNumber: 435,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "load-bar h-1 w-full max-w-xs rounded-full bg-white/[.07]",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 font-mono text-[.6rem] uppercase tracking-[.22em] text-[#6d5f4f]",
                            children: [
                                "awaiting syllabus · shelf ",
                                shelf,
                                " of 06"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 457,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                    lineNumber: 455,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
            lineNumber: 426,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
        lineNumber: 419,
        columnNumber: 5
    }, this);
}
_c9 = NextShelfTile;
/* today's daily-goal progress — a tiny hydration-safe ring that rides
   the pill nav; one click lands on the ledger where the ring lives */ function GoalChip() {
    _s4();
    const [goal, setGoal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoalChip.useEffect": ()=>{
            /* rAF-deferred: keeps the first paint hydration-stable */ const raf = requestAnimationFrame({
                "GoalChip.useEffect.raf": ()=>{
                    const g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$goal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["goalStatus"])();
                    setGoal({
                        done: g.done,
                        target: g.target,
                        met: g.met
                    });
                }
            }["GoalChip.useEffect.raf"]);
            return ({
                "GoalChip.useEffect": ()=>cancelAnimationFrame(raf)
            })["GoalChip.useEffect"];
        }
    }["GoalChip.useEffect"], []);
    if (!goal) return null;
    const R = 7;
    const C = 2 * Math.PI * R;
    const p = Math.max(0, Math.min(1, goal.target > 0 ? goal.done / goal.target : 0));
    const tone = goal.met ? "#8fae5d" : "#f5c889";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>{
            window.location.hash = "#/ledger";
            window.scrollTo(0, 0);
        },
        "aria-label": `Daily goal: ${goal.done} of ${goal.target} answers today — open the ledger`,
        title: `Daily goal — ${goal.done}/${goal.target} answers today`,
        className: "flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.05] px-2.5 py-1 font-mono text-[.6rem] font-bold tracking-wide text-[#cbb89a] transition hover:bg-white/[.12] hover:text-[#f5c889]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 18 18",
                className: "h-3.5 w-3.5 -rotate-90",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "9",
                        cy: "9",
                        r: R,
                        fill: "none",
                        stroke: "#ffffff1c",
                        strokeWidth: "2.4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "9",
                        cy: "9",
                        r: R,
                        fill: "none",
                        stroke: tone,
                        strokeWidth: "2.4",
                        strokeLinecap: "round",
                        strokeDasharray: C,
                        strokeDashoffset: C * (1 - p)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 496,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this),
            goal.done,
            "/",
            goal.target
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
        lineNumber: 484,
        columnNumber: 5
    }, this);
}
_s4(GoalChip, "JG1lFwWcXwE5TIrCsjUdFjbHs3Q=");
_c10 = GoalChip;
/* ---------------------------------------------- the sigil — 3D animated logo
   The first thing the eye meets on the landing: the Atlas badge
   floating in 3D above the wordmark. The badge sways in perspective
   space (CSS) while its own SMIL globe spins inside; a gold aura
   breathes behind it and a ground shadow shrinks as it rises. */ function AtlasSigil() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.72,
            y: -16
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        transition: {
            delay: 0.05,
            duration: 0.9,
            ease: EASE
        },
        className: "atlas-sigil-stage",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "atlas-sigil-aura"
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 527,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "atlas-sigil-float",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/atlas-logo.svg",
                    alt: "",
                    draggable: false,
                    className: "atlas-sigil"
                }, void 0, false, {
                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                    lineNumber: 529,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 528,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "atlas-sigil-shadow"
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 531,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
        lineNumber: 520,
        columnNumber: 5
    }, this);
}
_c11 = AtlasSigil;
function AtlasLanding({ onEnter }) {
    const liveSubjects = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].filter((s)=>s.status === "live");
    const liveCount = liveSubjects.length;
    const totalChapters = liveSubjects.reduce((n, s)=>n + (s.chapters ?? 0), 0);
    const totalQuestions = liveSubjects.reduce((n, s)=>n + (s.questions ?? 0), 0);
    const nextShelf = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].find((s)=>s.status === "soon")?.shelf;
    const scrollToShelf = ()=>{
        document.getElementById("shelf")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "atlas-root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "atlas-bg",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "atlas-grid"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 555,
                        columnNumber: 9
                    }, this),
                    GLYPHS.map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "atlas-glyph anim-floaty",
                            style: {
                                left: g.left,
                                top: g.top,
                                fontSize: g.size,
                                animationDelay: g.delay
                            },
                            children: g.ch
                        }, i, false, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 557,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "atlas-noise"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 565,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "atlas-vignette"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 566,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 554,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Atlas",
                className: "fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-12 w-full max-w-3xl items-center gap-3 rounded-full border border-white/10 bg-[#0a0710]/60 py-2 pl-4 pr-2 shadow-[0_18px_50px_-22px_rgba(0,0,0,.85)] backdrop-blur-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/atlas-logo.svg",
                                    alt: "",
                                    "aria-hidden": true,
                                    className: "h-7 w-7 rounded-lg shadow-[0_6px_18px_-6px_rgba(234,88,12,.7)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                    lineNumber: 573,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "whitespace-nowrap font-display text-[1rem] font-black tracking-tight text-[#f7ecdd]",
                                    children: "The Atlas"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                    lineNumber: 579,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 572,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-auto hidden font-mono text-[.56rem] uppercase tracking-[.2em] text-[#8d7b63] md:inline",
                            children: "mapped & built by Arpit Nayan"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 581,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>window.dispatchEvent(new CustomEvent("atlas:cmdk")),
                            "aria-label": "Open the command palette (Command K)",
                            title: "Command palette — ⌘K",
                            className: "flex items-center gap-1 rounded-full border border-white/10 bg-white/[.05] px-2.5 py-1 font-mono text-[.6rem] font-bold tracking-wide text-[#cbb89a] transition hover:bg-white/[.12] hover:text-[#f5c889]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$command$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Command$3e$__["Command"], {
                                    "aria-hidden": true,
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                    lineNumber: 591,
                                    columnNumber: 13
                                }, this),
                                "K"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 584,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoalChip, {}, void 0, false, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 594,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#f59e0b40] bg-[#f59e0b14] px-3 py-1 font-mono text-[.58rem] font-bold uppercase tracking-[.16em] text-[#f5c889]",
                            title: `${liveCount} shelves live — ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].length - liveCount} reserved`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "atlas-live-dot h-1.5 w-1.5 rounded-full bg-[#f59e0b]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                    lineNumber: 599,
                                    columnNumber: 13
                                }, this),
                                liveCount,
                                "/",
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].length,
                                " live"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 595,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                    lineNumber: 571,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 570,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$originkit$2f$hero$2d$57$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex w-full flex-col items-center px-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AtlasSigil, {}, void 0, false, {
                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                    lineNumber: 610,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        opacity: 0,
                                        y: 18
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.12,
                                        duration: 0.7,
                                        ease: EASE
                                    },
                                    className: "mt-4 flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#f5c889]/20 bg-[#0a0709]/55 px-4 py-1.5 text-[.64rem] font-extrabold uppercase tracking-[.24em] text-[#c9b99f] backdrop-blur-md sm:px-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                            className: "h-3.5 w-3.5 shrink-0",
                                            style: {
                                                color: "#f5c889"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                            lineNumber: 619,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#f7ecdd]",
                                            children: "IIT Jodhpur"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                            lineNumber: 620,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden h-3 w-px bg-white/15 sm:block",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                            lineNumber: 621,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "B.S. in Management and Technology"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                            lineNumber: 622,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                    lineNumber: 613,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    "aria-label": "The Atlas",
                                    className: "atlas-lit mt-5 font-display font-black leading-[.9] tracking-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: "The Atlas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                            lineNumber: 632,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": true,
                                            className: "block whitespace-nowrap text-[11.5vw] sm:text-[10.5vw] lg:text-[8.25rem]",
                                            children: [
                                                "THE".split("").map((ch, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        className: "inline-block bg-gradient-to-b from-[#fff8ec] via-[#f7ecdd] to-[#eec27d] bg-clip-text text-transparent",
                                                        initial: {
                                                            opacity: 0,
                                                            y: 60,
                                                            filter: "blur(14px)"
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0,
                                                            filter: "blur(0px)"
                                                        },
                                                        transition: {
                                                            delay: 0.25 + i * 0.06,
                                                            duration: 0.9,
                                                            ease: EASE
                                                        },
                                                        children: ch === " " ? "\u00A0" : ch
                                                    }, `a-${i}`, false, {
                                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                        lineNumber: 635,
                                                        columnNumber: 19
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    className: "inline-block",
                                                    initial: {
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        opacity: 1
                                                    },
                                                    transition: {
                                                        delay: 0.5,
                                                        duration: 0.4
                                                    },
                                                    children: " "
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 17
                                                }, this),
                                                "ATLAS".split("").map((ch, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        className: "inline-block bg-gradient-to-b from-[#fff8ec] via-[#f7ecdd] to-[#e8913f] bg-clip-text text-transparent",
                                                        initial: {
                                                            opacity: 0,
                                                            y: 60,
                                                            filter: "blur(14px)"
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0,
                                                            filter: "blur(0px)"
                                                        },
                                                        transition: {
                                                            delay: 0.45 + i * 0.06,
                                                            duration: 0.9,
                                                            ease: EASE
                                                        },
                                                        children: ch
                                                    }, `b-${i}`, false, {
                                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                        lineNumber: 654,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                            lineNumber: 633,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                    lineNumber: 628,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 608,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 607,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-label": "The Atlas in one breath",
                        className: "relative px-4 pb-20 pt-16 text-center sm:px-6 md:pb-24 md:pt-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": true,
                                className: "pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#070509] to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                lineNumber: 675,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ember-line",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                lineNumber: 682,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mx-auto mt-14 flex max-w-3xl flex-col items-center md:mt-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: {
                                            opacity: 0,
                                            y: 22
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.72,
                                            duration: 0.8,
                                            ease: EASE
                                        },
                                        className: "mt-6 font-display text-xl font-black tracking-tight text-[#f7ecdd] sm:text-2xl md:text-[1.7rem]",
                                        children: [
                                            "Six subjects. One map. ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "atlas-sheen",
                                                children: "Zero boring pages."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                lineNumber: 692,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                        lineNumber: 686,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: {
                                            opacity: 0,
                                            y: 22
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.82,
                                            duration: 0.8,
                                            ease: EASE
                                        },
                                        className: "mt-4 max-w-2xl text-balance text-base leading-relaxed text-[#e3d4bd] md:text-lg",
                                        children: [
                                            "This is not a notes site — it's your syllabus rebuilt as an experience. Diagrams that move, machines you can poke, exams you can actually survive, and a real CPython kernel living in this tab.",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#f7ecdd]",
                                                children: "Not PDFs. Atlas pages."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                lineNumber: 704,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                        lineNumber: 695,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 22
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.95,
                                            duration: 0.8,
                                            ease: EASE
                                        },
                                        className: "mt-9 flex flex-col items-center gap-3 sm:flex-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>onEnter("foc"),
                                                className: "group flex h-12 items-center gap-2.5 rounded-full px-7 text-[.78rem] font-black uppercase tracking-[.16em] text-[#1c0f04] transition-transform duration-300 hover:-translate-y-0.5",
                                                style: {
                                                    background: "linear-gradient(135deg,#f5c889,#ea580c)",
                                                    boxShadow: "0 18px 44px -14px rgba(234,88,12,.65)"
                                                },
                                                children: [
                                                    "Enter shelf 01 — Foundations",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                        lineNumber: 723,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                lineNumber: 713,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: scrollToShelf,
                                                className: "group flex h-12 items-center gap-2 rounded-full border border-white/15 bg-[#0a0709]/50 px-6 text-[.78rem] font-black uppercase tracking-[.16em] text-[#e9d7bf] backdrop-blur-md transition-colors duration-300 hover:border-white/30 hover:bg-[#0a0709]/75",
                                                children: [
                                                    "Browse the shelf",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                                        className: "h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                        lineNumber: 731,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                lineNumber: 725,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                        lineNumber: 707,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 26
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 1.1,
                                            duration: 0.9,
                                            ease: EASE
                                        },
                                        className: "mt-14 grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-4 sm:gap-x-14",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].length,
                                                label: "shelves",
                                                delay: 0
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                lineNumber: 742,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                                value: totalChapters,
                                                label: "chapters live",
                                                delay: 0.1
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                lineNumber: 743,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                                value: totalQuestions,
                                                label: "exam questions",
                                                delay: 0.2
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                lineNumber: 744,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-display text-3xl font-black tracking-tight text-[#f7ecdd] md:text-4xl",
                                                        children: "∞"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                        lineNumber: 746,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[.62rem] font-extrabold uppercase tracking-[.22em] text-[#8d7b63]",
                                                        children: "live code runs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                        lineNumber: 747,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                lineNumber: 745,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                        lineNumber: 736,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                lineNumber: 684,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 670,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden border-y border-white/[.06] py-3.5",
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "marquee-track",
                            children: [
                                0,
                                1
                            ].map((dup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex shrink-0 items-center gap-14 pr-14",
                                    children: [
                                        "notes with a pulse",
                                        "diagrams that dance",
                                        "machines you can poke",
                                        "exams you can survive",
                                        "zero pdf energy",
                                        "built different",
                                        "cpython 3.12 in your tab",
                                        "read · sketch · run"
                                    ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-3.5 whitespace-nowrap font-mono text-[.64rem] font-bold uppercase tracking-[.26em] text-[#8d7b63]",
                                            children: [
                                                t,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-1 w-1 rounded-full bg-[#f59e0b]/70"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                    lineNumber: 773,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, t, true, {
                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                            lineNumber: 768,
                                            columnNumber: 19
                                        }, this))
                                }, dup, false, {
                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                    lineNumber: 757,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 755,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 754,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "shelf",
                        "aria-label": "The subject shelf",
                        className: "relative mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-20 sm:px-6 md:py-28",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Rise, {
                                className: "mb-12 md:mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2 text-[.7rem] font-extrabold uppercase tracking-[.24em] text-[#f5c889]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-px w-8 bg-gradient-to-r from-[#ea580c] to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                lineNumber: 785,
                                                columnNumber: 15
                                            }, this),
                                            "the shelf"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                        lineNumber: 784,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-4 max-w-3xl font-display text-3xl font-black leading-tight text-[#f7ecdd] md:text-5xl",
                                        children: [
                                            "Pick a shelf. ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "atlas-sheen",
                                                children: "Enter a world."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                lineNumber: 789,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                        lineNumber: 788,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 max-w-2xl text-[.95rem] leading-relaxed text-[#a89a86] md:text-base",
                                        children: "Six boxes, one mould — the same dark frosted build, set two by two. Only the sigil changes, and one whisper of motion. Same soul, every time."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                        lineNumber: 791,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                lineNumber: 783,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-2 md:gap-5",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubjectCard, {
                                            subject: s,
                                            index: i,
                                            onEnter: onEnter
                                        }, s.id, false, {
                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                            lineNumber: 799,
                                            columnNumber: 15
                                        }, this)),
                                    nextShelf ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NextShelfTile, {
                                        index: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].length,
                                        shelf: nextShelf
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                        lineNumber: 801,
                                        columnNumber: 26
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                lineNumber: 797,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 782,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-label": "Why it hits different",
                        className: "relative border-t border-white/[.06]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Rise, {
                                    className: "mb-12 text-center md:mb-16",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[.7rem] font-extrabold uppercase tracking-[.24em] text-[#f5c889]",
                                            children: "why it hits different"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                            lineNumber: 809,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mx-auto mt-4 max-w-2xl font-display text-3xl font-black leading-tight text-[#f7ecdd] md:text-4xl",
                                            children: [
                                                "Notes, but make it ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    className: "italic",
                                                    children: "cinema."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                    lineNumber: 813,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                            lineNumber: 812,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mx-auto mt-4 max-w-xl text-[.92rem] leading-relaxed text-[#a89a86]",
                                            children: "Three obsessions separate an Atlas page from every PDF you've ever suffered through."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                            lineNumber: 815,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                    lineNumber: 808,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4 md:grid-cols-3 md:gap-5",
                                    children: [
                                        {
                                            n: "01",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
                                            accent: "#f59e0b",
                                            title: "Python that actually runs",
                                            body: "Every snippet executes on a genuine CPython 3.12 kernel compiled to WebAssembly. Predict the output on paper, press ▶ Run, argue with the machine — it never gets tired."
                                        },
                                        {
                                            n: "02",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"],
                                            accent: "#f43f5e",
                                            title: "Exams you can survive",
                                            body: "The end term is written by hand, so practice is too: write-the-output, trace-the-code, definitions and small programs — model answers and instant checking included."
                                        },
                                        {
                                            n: "03",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waypoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waypoints$3e$__["Waypoints"],
                                            accent: "#84cc16",
                                            title: "Diagrams that refuse to sit still",
                                            body: "DIKW pyramids, CPU pipelines, memory boxes, decision flowcharts — concepts rendered as living machines you can click, hover and rewind instead of figures you squint at."
                                        }
                                    ].map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Rise, {
                                            delay: 0.08 * i,
                                            className: "h-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "group relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 md:p-7",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": true,
                                                        className: "text-ghost pointer-events-none absolute -right-2 -top-6 select-none font-display text-[6.5rem] font-black leading-none",
                                                        children: f.n
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                        lineNumber: 847,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative flex h-11 w-11 items-center justify-center rounded-xl border",
                                                        style: {
                                                            background: `${f.accent}14`,
                                                            borderColor: `${f.accent}35`,
                                                            boxShadow: `0 10px 26px -12px ${f.accent}80`
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(f.icon, {
                                                            className: "h-5 w-5",
                                                            style: {
                                                                color: f.accent
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                            lineNumber: 861,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                        lineNumber: 853,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "relative mt-5 font-display text-lg font-black text-[#f7ecdd]",
                                                        children: f.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                        lineNumber: 863,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "relative mt-2.5 text-[.88rem] leading-relaxed text-[#a89a86]",
                                                        children: f.body
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                        lineNumber: 864,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                                lineNumber: 846,
                                                columnNumber: 19
                                            }, this)
                                        }, f.n, false, {
                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                            lineNumber: 845,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                    lineNumber: 821,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 807,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 806,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-label": "The Atlas promise",
                        className: "relative mx-auto w-full max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Rise, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display text-2xl font-medium italic leading-snug text-[#e9d7bf] md:text-[2.6rem] md:leading-[1.25]",
                                    children: [
                                        "“Built for the night before.",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "atlas-sheen font-black not-italic",
                                            children: "Remembered long after."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                            lineNumber: 877,
                                            columnNumber: 15
                                        }, this),
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                    lineNumber: 875,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto mt-6 max-w-xl text-[.9rem] leading-relaxed text-[#8d7b63]",
                                    children: "That's the whole point of an Atlas page — it compresses the panic of revision into something you can watch, poke and run, so the syllabus finally sticks."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                    lineNumber: 880,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 874,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                        lineNumber: 873,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 605,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "mt-auto border-t border-white/[.06] bg-black",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-4 py-10 sm:px-6 md:flex-row md:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-8 w-8 items-center justify-center rounded-lg text-[#070509]",
                                    style: {
                                        background: "linear-gradient(135deg,#f5c889,#ea580c)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                        className: "h-4 w-4",
                                        strokeWidth: 2.4
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                        lineNumber: 897,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                    lineNumber: 893,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-display text-[.95rem] font-black text-[#f7ecdd]",
                                            children: "The Atlas"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                            lineNumber: 900,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono text-[.58rem] uppercase tracking-[.2em] text-[#8d7b63]",
                                            children: "mapped & built by Arpit Nayan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                            lineNumber: 901,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                                    lineNumber: 899,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 892,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "sig-colo text-center md:text-right",
                            children: "next.js · react · tailwind · framer-motion · pyodide — mmxxvi"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                            lineNumber: 906,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                    lineNumber: 891,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
                lineNumber: 890,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atlas/AtlasLanding.tsx",
        lineNumber: 552,
        columnNumber: 5
    }, this);
}
_c12 = AtlasLanding;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "Rise");
__turbopack_context__.k.register(_c1, "Stat");
__turbopack_context__.k.register(_c2, "ShelfTag");
__turbopack_context__.k.register(_c3, "LiveBadge");
__turbopack_context__.k.register(_c4, "LockedBadge");
__turbopack_context__.k.register(_c5, "Ambience");
__turbopack_context__.k.register(_c6, "DueBadge");
__turbopack_context__.k.register(_c7, "ChaptersBadge");
__turbopack_context__.k.register(_c8, "SubjectCard");
__turbopack_context__.k.register(_c9, "NextShelfTile");
__turbopack_context__.k.register(_c10, "GoalChip");
__turbopack_context__.k.register(_c11, "AtlasSigil");
__turbopack_context__.k.register(_c12, "AtlasLanding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/chapter-index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   Chapter catalog — the static twin of the chapter menus in
   the five subject apps (FocApp / AtbApp / FaApp / EbhApp /
   StmApp). Powers the ⌘K palette's "Chapters" group: search
   any chapter by name, topic or shelf and jump straight to it.

   GENERATED from the apps' GROUPS arrays (counts asserted
   against lib/section-counts.ts — foc 17, atb 19, fa 16, ebh
   18, stm 16 = 86). If a shelf gains a chapter, regenerate
   this file to match. No app chunk is imported here — the
   landing and palette stay light.
   ============================================================ */ __turbopack_context__.s([
    "CHAPTER_INDEX",
    ()=>CHAPTER_INDEX,
    "CHAPTER_TOTAL",
    ()=>CHAPTER_TOTAL
]);
const CHAPTER_INDEX = [
    {
        subject: "foc",
        section: "why",
        label: "Why code?",
        desc: "What programming actually unlocks",
        group: "foundations",
        groupLabel: "Foundations"
    },
    {
        subject: "foc",
        section: "computing",
        label: "Computing",
        desc: "Input → process → output, everywhere",
        group: "foundations",
        groupLabel: "Foundations"
    },
    {
        subject: "foc",
        section: "pillars",
        label: "4 Pillars",
        desc: "Decompose · patterns · abstraction · algorithms",
        group: "foundations",
        groupLabel: "Foundations"
    },
    {
        subject: "foc",
        section: "data",
        label: "Data",
        desc: "Data → information → knowledge → wisdom",
        group: "foundations",
        groupLabel: "Foundations"
    },
    {
        subject: "foc",
        section: "algorithm",
        label: "Algorithms",
        desc: "Recipes a machine can follow",
        group: "machines",
        groupLabel: "Machines"
    },
    {
        subject: "foc",
        section: "hardware",
        label: "Hardware",
        desc: "CPU, memory, sensors & I/O",
        group: "machines",
        groupLabel: "Machines"
    },
    {
        subject: "foc",
        section: "software",
        label: "Software",
        desc: "OS, apps, compilers & interpreters",
        group: "machines",
        groupLabel: "Machines"
    },
    {
        subject: "foc",
        section: "python",
        label: "Python",
        desc: "Meet the language",
        group: "pycore",
        groupLabel: "Python Core"
    },
    {
        subject: "foc",
        section: "basics",
        label: "Basics",
        desc: "Variables, strings, numbers, input",
        group: "pycore",
        groupLabel: "Python Core"
    },
    {
        subject: "foc",
        section: "lists",
        label: "Lists",
        desc: "Ordered collections, slices, tuples",
        group: "pycore",
        groupLabel: "Python Core"
    },
    {
        subject: "foc",
        section: "if",
        label: "If / Else",
        desc: "Decisions, comparisons, logic",
        group: "pycore",
        groupLabel: "Python Core"
    },
    {
        subject: "foc",
        section: "dicts",
        label: "Dictionaries",
        desc: "Key–value pairs & nesting",
        group: "pycore",
        groupLabel: "Python Core"
    },
    {
        subject: "foc",
        section: "while",
        label: "While Loops",
        desc: "Repeat until the job is done",
        group: "pycore",
        groupLabel: "Python Core"
    },
    {
        subject: "foc",
        section: "functions",
        label: "Functions",
        desc: "Define, call, reuse — first steps",
        group: "pro",
        groupLabel: "Functions & OOP"
    },
    {
        subject: "foc",
        section: "args",
        label: "Args & Return",
        desc: "Positional, keyword, defaults, return",
        group: "pro",
        groupLabel: "Functions & OOP"
    },
    {
        subject: "foc",
        section: "funcs2",
        label: "Funcs × Lists",
        desc: "Passing lists, *args, **kwargs, modules",
        group: "pro",
        groupLabel: "Functions & OOP"
    },
    {
        subject: "foc",
        section: "classes",
        label: "Classes",
        desc: "Objects, __init__, inheritance",
        group: "pro",
        groupLabel: "Functions & OOP"
    },
    {
        subject: "atb",
        section: "intro",
        label: "Why algorithms?",
        desc: "From making tea to running an ATM",
        group: "intro",
        groupLabel: "Intro"
    },
    {
        subject: "atb",
        section: "flowcharts",
        label: "Flowcharts",
        desc: "The five symbols every algorithm is drawn with",
        group: "intro",
        groupLabel: "Intro"
    },
    {
        subject: "atb",
        section: "atm",
        label: "Decisions",
        desc: "The ATM machine — branching in action",
        group: "intro",
        groupLabel: "Intro"
    },
    {
        subject: "atb",
        section: "pseudocode",
        label: "Pseudocode",
        desc: "Functions, pseudocode and real code",
        group: "intro",
        groupLabel: "Intro"
    },
    {
        subject: "atb",
        section: "average",
        label: "Average, step-by-step",
        desc: "Memory boxes, data types & FIRST CLASS",
        group: "intro",
        groupLabel: "Intro"
    },
    {
        subject: "atb",
        section: "properties",
        label: "9 properties",
        desc: "What makes an algorithm a *good* algorithm",
        group: "props",
        groupLabel: "Properties"
    },
    {
        subject: "atb",
        section: "algotypes",
        label: "Algorithm types",
        desc: "Divide & conquer · greedy · dynamic programming",
        group: "props",
        groupLabel: "Properties"
    },
    {
        subject: "atb",
        section: "arrays",
        label: "Arrays",
        desc: "Indexed, contiguous, direct access",
        group: "linear",
        groupLabel: "Linear DS"
    },
    {
        subject: "atb",
        section: "linkedlists",
        label: "Linked lists",
        desc: "Lecture 7 · flexible chains of songs — memory maps, surgery, shuffles",
        group: "linear",
        groupLabel: "Linear DS"
    },
    {
        subject: "atb",
        section: "recap8",
        label: "LIVE recap · properties & linear DS",
        desc: "Lecture 8 · the 9 properties + arrays-vs-lists Venn",
        group: "linear",
        groupLabel: "Linear DS"
    },
    {
        subject: "atb",
        section: "stacks",
        label: "Stacks",
        desc: "Lecture 9 · LIFO — the undo machine",
        group: "stackq",
        groupLabel: "Stacks & Queues"
    },
    {
        subject: "atb",
        section: "queues",
        label: "Queues",
        desc: "Lecture 10 · FIFO — first come, first served",
        group: "stackq",
        groupLabel: "Stacks & Queues"
    },
    {
        subject: "atb",
        section: "qtypes",
        label: "Queue types",
        desc: "Lecture 11 · linear · circular · priority · deque",
        group: "stackq",
        groupLabel: "Stacks & Queues"
    },
    {
        subject: "atb",
        section: "recap13",
        label: "LIVE recap · stacks & queues",
        desc: "Lecture 13 · the stack-vs-queue Venn",
        group: "stackq",
        groupLabel: "Stacks & Queues"
    },
    {
        subject: "atb",
        section: "trees",
        label: "Trees",
        desc: "Lecture 12 · hierarchy: roots, parents & leaves",
        group: "trees",
        groupLabel: "Trees & Graphs"
    },
    {
        subject: "atb",
        section: "traversals",
        label: "Traversals",
        desc: "Lecture 12 · pre · in · post · level order",
        group: "trees",
        groupLabel: "Trees & Graphs"
    },
    {
        subject: "atb",
        section: "graphs",
        label: "Graphs",
        desc: "Lecture 15 · G = (V, E) — relationships",
        group: "trees",
        groupLabel: "Trees & Graphs"
    },
    {
        subject: "atb",
        section: "graphprops",
        label: "Graph properties",
        desc: "Lecture 16 · direction · weight · connectivity · cycles",
        group: "trees",
        groupLabel: "Trees & Graphs"
    },
    {
        subject: "atb",
        section: "dfsbfs",
        label: "DFS & BFS",
        desc: "Lecture 17 · stack vs queue traversal",
        group: "trees",
        groupLabel: "Trees & Graphs"
    },
    {
        subject: "atb",
        section: "recap18",
        label: "LIVE recap · trees & graphs",
        desc: "Lecture 18 · every tree is a graph — the nested Venn",
        group: "trees",
        groupLabel: "Trees & Graphs"
    },
    {
        subject: "atb",
        section: "treetypes",
        label: "Tree types",
        desc: "Lecture 14 · general → binary → complete → BST → AVL → heaps",
        group: "hash",
        groupLabel: "Hash & Chain"
    },
    {
        subject: "atb",
        section: "hashing",
        label: "Hashing",
        desc: "Lecture 19 · mod, tables, collisions, passwords",
        group: "hash",
        groupLabel: "Hash & Chain"
    },
    {
        subject: "atb",
        section: "blockchain",
        label: "Blockchain",
        desc: "Lecture 20 · tamper-evident chains of blocks",
        group: "hash",
        groupLabel: "Hash & Chain"
    },
    {
        subject: "atb",
        section: "recap23",
        label: "LIVE recap · trees, hashing & blockchain",
        desc: "Lecture 23 · the three-circle Venn finale",
        group: "hash",
        groupLabel: "Hash & Chain"
    },
    {
        subject: "atb",
        section: "complexity",
        label: "Complexity",
        desc: "Lecture 21 · Big O · best/avg/worst · DS costs",
        group: "search",
        groupLabel: "Search & Complexity"
    },
    {
        subject: "atb",
        section: "search",
        label: "Search",
        desc: "Lecture 22 · linear · binary · jump · exponential · hash",
        group: "search",
        groupLabel: "Search & Complexity"
    },
    {
        subject: "atb",
        section: "dijkstra",
        label: "Shortest paths",
        desc: "Lecture 24 · Dijkstra · A* · the variant family",
        group: "algo",
        groupLabel: "Paths & Sorting"
    },
    {
        subject: "atb",
        section: "sorting",
        label: "Sorting",
        desc: "Lecture 25 · bubble sort · passes · O(n²)",
        group: "algo",
        groupLabel: "Paths & Sorting"
    },
    {
        subject: "fa",
        section: "why",
        label: "Why accounting?",
        desc: "Five openings — every one ends at the same question",
        group: "foundations",
        groupLabel: "Foundations"
    },
    {
        subject: "fa",
        section: "assumptions",
        label: "4 assumptions",
        desc: "Entity · going concern · periodicity · money measurement",
        group: "foundations",
        groupLabel: "Foundations"
    },
    {
        subject: "fa",
        section: "entity-concern",
        label: "Entity & concern",
        desc: "The boundary — and the promise to continue",
        group: "foundations",
        groupLabel: "Foundations"
    },
    {
        subject: "fa",
        section: "periodicity",
        label: "Periods & matching",
        desc: "Time, cut into periods — and the match that follows",
        group: "foundations",
        groupLabel: "Foundations"
    },
    {
        subject: "fa",
        section: "dual-aspect",
        label: "Dual aspect",
        desc: "Every rupee tells two stories",
        group: "equation",
        groupLabel: "The Equation"
    },
    {
        subject: "fa",
        section: "elements",
        label: "The three elements",
        desc: "Assets, liabilities & equity — the whole cast",
        group: "equation",
        groupLabel: "The Equation"
    },
    {
        subject: "fa",
        section: "equation-lab",
        label: "Equation, worked",
        desc: "Hot Chocolate · Abraham · Coffee Corner",
        group: "equation",
        groupLabel: "The Equation"
    },
    {
        subject: "fa",
        section: "effects",
        label: "Transaction effects",
        desc: "The four moves — run the equation machine",
        group: "equation",
        groupLabel: "The Equation"
    },
    {
        subject: "fa",
        section: "journal",
        label: "Journal",
        desc: "The pipeline and the day book — Vogue Company",
        group: "recording",
        groupLabel: "Recording"
    },
    {
        subject: "fa",
        section: "ledger",
        label: "Ledger",
        desc: "Posting — the Cash T-account, for real",
        group: "recording",
        groupLabel: "Recording"
    },
    {
        subject: "fa",
        section: "statements",
        label: "Five statements",
        desc: "One month of transactions, five shapes",
        group: "recording",
        groupLabel: "Recording"
    },
    {
        subject: "fa",
        section: "trial-balance",
        label: "Trial balance",
        desc: "Do the columns agree? — sort Pearl's books",
        group: "recording",
        groupLabel: "Recording"
    },
    {
        subject: "fa",
        section: "adjusting",
        label: "Adjusting entries",
        desc: "Deferrals & accruals — split the prepaid rupee",
        group: "closing",
        groupLabel: "Closing"
    },
    {
        subject: "fa",
        section: "final-accounts",
        label: "Final accounts",
        desc: "Two questions, two statements",
        group: "closing",
        groupLabel: "Closing"
    },
    {
        subject: "fa",
        section: "trading",
        label: "Trading account",
        desc: "Did buying and selling pay?",
        group: "closing",
        groupLabel: "Closing"
    },
    {
        subject: "fa",
        section: "gp-lab",
        label: "Gross profit lab",
        desc: "Six examples — then drive the ladder",
        group: "closing",
        groupLabel: "Closing"
    },
    {
        subject: "ebh",
        section: "economics",
        label: "What is economics?",
        desc: "Scarcity, choices, and the two branches",
        group: "lens",
        groupLabel: "The Lens"
    },
    {
        subject: "ebh",
        section: "business",
        label: "What is business?",
        desc: "Economic activity, profit, and why firms exist",
        group: "lens",
        groupLabel: "The Lens"
    },
    {
        subject: "ebh",
        section: "history",
        label: "What is history?",
        desc: "Change over time — through evidence",
        group: "lens",
        groupLabel: "The Lens"
    },
    {
        subject: "ebh",
        section: "rules-players",
        label: "Rules & players",
        desc: "The two-by-two that names this course",
        group: "lens",
        groupLabel: "The Lens"
    },
    {
        subject: "ebh",
        section: "license-raj",
        label: "Economy → business",
        desc: "The License Raj and IPR 1956",
        group: "currents",
        groupLabel: "Three Currents"
    },
    {
        subject: "ebh",
        section: "bajaj",
        label: "Case: Bajaj Auto",
        desc: "Two tracks — the economy and the scooter",
        group: "currents",
        groupLabel: "Three Currents"
    },
    {
        subject: "ebh",
        section: "society-business",
        label: "Society → business",
        desc: "McAloo Tikki and the Cadbury ads",
        group: "currents",
        groupLabel: "Three Currents"
    },
    {
        subject: "ebh",
        section: "weekend",
        label: "Business → society",
        desc: "The story of the weekend, 1886–1938",
        group: "currents",
        groupLabel: "Three Currents"
    },
    {
        subject: "ebh",
        section: "business-econ-tech",
        label: "Economies & technology",
        desc: "Ford, 2008, Netflix, PESTLE",
        group: "currents",
        groupLabel: "Three Currents"
    },
    {
        subject: "ebh",
        section: "agrarian",
        label: "Agrarian economies",
        desc: "Seasons, land, lords and zamindars",
        group: "before",
        groupLabel: "Before the Machines"
    },
    {
        subject: "ebh",
        section: "guilds",
        label: "Guild systems",
        desc: "Apprentice, journeyman, master",
        group: "before",
        groupLabel: "Before the Machines"
    },
    {
        subject: "ebh",
        section: "trade-routes",
        label: "Trade routes",
        desc: "Silk Road speeds, the Commercial Revolution",
        group: "before",
        groupLabel: "Before the Machines"
    },
    {
        subject: "ebh",
        section: "life-before",
        label: "Life before machines",
        desc: "Enclosures, seed drills, putting-out",
        group: "before",
        groupLabel: "Before the Machines"
    },
    {
        subject: "ebh",
        section: "why-machines",
        label: "Why machines?",
        desc: "Population, trade, and the thread bottleneck",
        group: "machines",
        groupLabel: "The Machine Age"
    },
    {
        subject: "ebh",
        section: "textile-machines",
        label: "Textile machines",
        desc: "Shuttle, jenny, water frame — and the mobs",
        group: "machines",
        groupLabel: "The Machine Age"
    },
    {
        subject: "ebh",
        section: "steam-cottonopolis",
        label: "Steam & Cottonopolis",
        desc: "Watt's liberation, Manchester's mills",
        group: "machines",
        groupLabel: "The Machine Age"
    },
    {
        subject: "ebh",
        section: "labor-movement",
        label: "The labor movement",
        desc: "Luddites, Peterloo, and the 1825 Act",
        group: "machines",
        groupLabel: "The Machine Age"
    },
    {
        subject: "ebh",
        section: "empire",
        label: "Empire & mercantilism",
        desc: "Companies, colonies, British ships",
        group: "machines",
        groupLabel: "The Machine Age"
    },
    {
        subject: "stm",
        section: "lens",
        label: "What is statistics?",
        desc: "Two meanings, six business applications",
        group: "displays",
        groupLabel: "Data & Displays"
    },
    {
        subject: "stm",
        section: "scales",
        label: "Scales of measurement",
        desc: "Nominal → ordinal → interval → ratio",
        group: "displays",
        groupLabel: "Data & Displays"
    },
    {
        subject: "stm",
        section: "sources",
        label: "Sources, analytics & ethics",
        desc: "Hudson's loop, big data, the ASA",
        group: "displays",
        groupLabel: "Data & Displays"
    },
    {
        subject: "stm",
        section: "categorical",
        label: "Categorical displays",
        desc: "Marada Inn: tables, bars, pie",
        group: "displays",
        groupLabel: "Data & Displays"
    },
    {
        subject: "stm",
        section: "quantitative",
        label: "Quantitative displays",
        desc: "Histograms, dot plots, stem-and-leaf",
        group: "displays",
        groupLabel: "Data & Displays"
    },
    {
        subject: "stm",
        section: "twovars",
        label: "Two variables",
        desc: "Crosstabs, Simpson's paradox, dashboards",
        group: "displays",
        groupLabel: "Data & Displays"
    },
    {
        subject: "stm",
        section: "location",
        label: "Measures of location",
        desc: "Mean, median, mode, percentiles",
        group: "measures",
        groupLabel: "Numerical Measures"
    },
    {
        subject: "stm",
        section: "variability",
        label: "Variability & shape",
        desc: "Range, IQR, σ, z, box plots",
        group: "measures",
        groupLabel: "Numerical Measures"
    },
    {
        subject: "stm",
        section: "association",
        label: "Association",
        desc: "Covariance & correlation",
        group: "measures",
        groupLabel: "Numerical Measures"
    },
    {
        subject: "stm",
        section: "prob-basics",
        label: "Experiments & counting",
        desc: "Sample space, counting rules, priors",
        group: "probability",
        groupLabel: "Probability"
    },
    {
        subject: "stm",
        section: "prob-laws",
        label: "Events & the laws",
        desc: "Union, intersection, conditionals",
        group: "probability",
        groupLabel: "Probability"
    },
    {
        subject: "stm",
        section: "bayes",
        label: "Bayes' theorem",
        desc: "Prior → information → posterior",
        group: "probability",
        groupLabel: "Probability"
    },
    {
        subject: "stm",
        section: "discrete",
        label: "Random variables & E(x)",
        desc: "JSL's 1.20 TVs, DiCarlo's bivariate",
        group: "discrete",
        groupLabel: "Discrete Distributions"
    },
    {
        subject: "stm",
        section: "binomial",
        label: "Binomial · Poisson · Hypergeometric",
        desc: "Evans, Mercy Hospital, Neveready",
        group: "discrete",
        groupLabel: "Discrete Distributions"
    },
    {
        subject: "stm",
        section: "continuous",
        label: "Uniform · Normal · Exponential",
        desc: "Slater, Pep Zone, Al's pump, HUL",
        group: "continuous",
        groupLabel: "Continuous & Sampling"
    },
    {
        subject: "stm",
        section: "sampling",
        label: "Sampling & the case file",
        desc: "NICE Paper, Go Bananas, McNeil's",
        group: "continuous",
        groupLabel: "Continuous & Sampling"
    },
    /* ---- shelf 06 — Principles of Marketing (53 chapters) ---- */ {
        subject: "mktg",
        section: "why-mktg",
        label: "Why marketing?",
        desc: "Lecture 1 · needs, decisions, brands, value",
        group: "foundations",
        groupLabel: "Foundations"
    },
    {
        subject: "mktg",
        section: "anticipation",
        label: "Anticipation",
        desc: "Lecture 2 · BlackBerry · Hertz · Blockbuster",
        group: "foundations",
        groupLabel: "Foundations"
    },
    {
        subject: "mktg",
        section: "topline",
        label: "Top line & bottom line",
        desc: "Lecture 2 · the cold-coffee P&L",
        group: "foundations",
        groupLabel: "Foundations"
    },
    {
        subject: "mktg",
        section: "mktg-vs-selling",
        label: "Marketing vs selling",
        desc: "Lecture 2 · the pen test",
        group: "foundations",
        groupLabel: "Foundations"
    },
    {
        subject: "mktg",
        section: "definitions",
        label: "Definitions",
        desc: "Lecture 3 · AMA · outside-in vs inside-out",
        group: "concepts",
        groupLabel: "Concepts"
    },
    {
        subject: "mktg",
        section: "mktg-system",
        label: "The marketing system",
        desc: "Lecture 3 · industry ↔ market, four flows",
        group: "concepts",
        groupLabel: "Concepts"
    },
    {
        subject: "mktg",
        section: "marketable",
        label: "What can be marketed",
        desc: "Lecture 3 · the ten entities",
        group: "concepts",
        groupLabel: "Concepts"
    },
    {
        subject: "mktg",
        section: "need-want-demand",
        label: "Need · Want · Demand",
        desc: "Lecture 3 · the triad",
        group: "concepts",
        groupLabel: "Concepts"
    },
    {
        subject: "mktg",
        section: "demand-states",
        label: "Needs & demand states",
        desc: "Lecture 3 · five needs, eight states",
        group: "concepts",
        groupLabel: "Concepts"
    },
    {
        subject: "mktg",
        section: "closed-system",
        label: "The closed system",
        desc: "Lecture 4 · interest × openness",
        group: "concepts",
        groupLabel: "Concepts"
    },
    {
        subject: "mktg",
        section: "biz-value",
        label: "The business value",
        desc: "Lecture 4 · top line, bottom line",
        group: "concepts",
        groupLabel: "Concepts"
    },
    {
        subject: "mktg",
        section: "chai-value",
        label: "The chai example",
        desc: "Lecture 5 · context sets value",
        group: "value",
        groupLabel: "Value & Exchange"
    },
    {
        subject: "mktg",
        section: "cpv-formula",
        label: "The value formula",
        desc: "Lecture 5 · benefits − costs",
        group: "value",
        groupLabel: "Value & Exchange"
    },
    {
        subject: "mktg",
        section: "environment",
        label: "The environment",
        desc: "Lecture 6 · micro & macro forces",
        group: "value",
        groupLabel: "Value & Exchange"
    },
    {
        subject: "mktg",
        section: "exchange-system",
        label: "Exchange systems",
        desc: "Lecture 6 · beyond money-for-product",
        group: "value",
        groupLabel: "Value & Exchange"
    },
    {
        subject: "mktg",
        section: "value-price-features",
        label: "Value · price · features",
        desc: "Lecture 7 · three distinctions",
        group: "value",
        groupLabel: "Value & Exchange"
    },
    {
        subject: "mktg",
        section: "luxury-lever",
        label: "The luxury lever",
        desc: "Lecture 7 · the uncapped benefit",
        group: "value",
        groupLabel: "Value & Exchange"
    },
    {
        subject: "mktg",
        section: "es-ds",
        label: "Existing & desired state",
        desc: "Lecture 8 · manufacturing the gap",
        group: "loyalty",
        groupLabel: "Gap & Loyalty"
    },
    {
        subject: "mktg",
        section: "purchase-chain",
        label: "The purchase chain",
        desc: "Lecture 8 · value to loyalty",
        group: "loyalty",
        groupLabel: "Gap & Loyalty"
    },
    {
        subject: "mktg",
        section: "context-matters",
        label: "Context matters",
        desc: "Lecture 9 · one delivery, two ratings",
        group: "loyalty",
        groupLabel: "Gap & Loyalty"
    },
    {
        subject: "mktg",
        section: "loyalty-econ",
        label: "Loyalty economics",
        desc: "Lecture 9 · the retention numbers",
        group: "loyalty",
        groupLabel: "Gap & Loyalty"
    },
    {
        subject: "mktg",
        section: "campaigns-esds",
        label: "Campaigns in ES/DS",
        desc: "Lecture 10 · Samsung vs Sony & co.",
        group: "loyalty",
        groupLabel: "Gap & Loyalty"
    },
    {
        subject: "mktg",
        section: "beyond-purchase",
        label: "Beyond purchase",
        desc: "Lecture 10 · impulse, proxies, ethics",
        group: "loyalty",
        groupLabel: "Gap & Loyalty"
    },
    {
        subject: "mktg",
        section: "heterogeneity",
        label: "Heterogeneity",
        desc: "Lecture 11 · 100 users, six audiences",
        group: "stp",
        groupLabel: "STP"
    },
    {
        subject: "mktg",
        section: "bases",
        label: "Bases of segmentation",
        desc: "Lecture 11 · geo · demo · psychographic",
        group: "stp",
        groupLabel: "STP"
    },
    {
        subject: "mktg",
        section: "behavioral-benefit",
        label: "Behavior & benefits",
        desc: "Lecture 12 · Surf Excel · Colgate",
        group: "stp",
        groupLabel: "STP"
    },
    {
        subject: "mktg",
        section: "tupo-case",
        label: "Tupo",
        desc: "Lecture 13 · the 3–15 gap",
        group: "stp",
        groupLabel: "STP"
    },
    {
        subject: "mktg",
        section: "safe-targeting",
        label: "SAFE targeting",
        desc: "Lecture 14 · the four gates",
        group: "stp",
        groupLabel: "STP"
    },
    {
        subject: "mktg",
        section: "pos-3q",
        label: "Positioning's 3 questions",
        desc: "Lecture 14 · who · what · why",
        group: "stp",
        groupLabel: "STP"
    },
    {
        subject: "mktg",
        section: "accor-map",
        label: "The Accor map",
        desc: "Lecture 15 · perceptual mapping",
        group: "positioning",
        groupLabel: "Positioning"
    },
    {
        subject: "mktg",
        section: "frame-podspops",
        label: "Frames · POPs · PODs",
        desc: "Lecture 15 · Gypsy King lesson",
        group: "positioning",
        groupLabel: "Positioning"
    },
    {
        subject: "mktg",
        section: "four-levels",
        label: "The four levels",
        desc: "Lecture 16 · mass → market of one",
        group: "positioning",
        groupLabel: "Positioning"
    },
    {
        subject: "mktg",
        section: "pop-pod-evolution",
        label: "POD → POP evolution",
        desc: "Lecture 16 · the razor ladder",
        group: "positioning",
        groupLabel: "Positioning"
    },
    {
        subject: "mktg",
        section: "three-circles",
        label: "The three circles",
        desc: "Lecture 17 · locating POD & POP",
        group: "positioning",
        groupLabel: "Positioning"
    },
    {
        subject: "mktg",
        section: "pod-pop-cases",
        label: "Case files",
        desc: "Lecture 17 · Oral-B · Dettol vs Savlon",
        group: "positioning",
        groupLabel: "Positioning"
    },
    {
        subject: "mktg",
        section: "why-buy",
        label: "Why people buy",
        desc: "Lecture 18 · desired states & stories",
        group: "consumer",
        groupLabel: "Consumer Mind"
    },
    {
        subject: "mktg",
        section: "eras-nudges",
        label: "Eras & nudges",
        desc: "Lecture 18 · rational → nudged",
        group: "consumer",
        groupLabel: "Consumer Mind"
    },
    {
        subject: "mktg",
        section: "five-stages",
        label: "The five stages",
        desc: "Lecture 19 · the decision process",
        group: "consumer",
        groupLabel: "Consumer Mind"
    },
    {
        subject: "mktg",
        section: "messy-middle",
        label: "The messy middle",
        desc: "Lecture 19 · the infinity loop",
        group: "consumer",
        groupLabel: "Consumer Mind"
    },
    {
        subject: "mktg",
        section: "journey-variations",
        label: "Journey variations",
        desc: "Lecture 20 · skip, reverse, loop",
        group: "consumer",
        groupLabel: "Consumer Mind"
    },
    {
        subject: "mktg",
        section: "autopsy-purchase",
        label: "Autopsy of a purchase",
        desc: "Lecture 20 · a real purchase, dissected",
        group: "consumer",
        groupLabel: "Consumer Mind"
    },
    {
        subject: "mktg",
        section: "touchpoints-framework",
        label: "Touchpoints & framework",
        desc: "Lecture 21 · the behavior cycle",
        group: "consumer",
        groupLabel: "Consumer Mind"
    },
    {
        subject: "mktg",
        section: "recap22",
        label: "Recap · the journey",
        desc: "Lecture 22 · the arc, one machine",
        group: "consumer",
        groupLabel: "Consumer Mind"
    },
    {
        subject: "mktg",
        section: "motivation-theories",
        label: "Three theories",
        desc: "Lecture 23 · Freud · Maslow · Herzberg",
        group: "psychology",
        groupLabel: "Psych & Bias"
    },
    {
        subject: "mktg",
        section: "theory-match",
        label: "Theory match",
        desc: "Lecture 23 · six confessions",
        group: "psychology",
        groupLabel: "Psych & Bias"
    },
    {
        subject: "mktg",
        section: "brand-perception",
        label: "Perception & brands",
        desc: "Lecture 24 · the brand flip",
        group: "psychology",
        groupLabel: "Psych & Bias"
    },
    {
        subject: "mktg",
        section: "almonds-price",
        label: "The almonds experiment",
        desc: "Lecture 24 · packaging & price",
        group: "psychology",
        groupLabel: "Psych & Bias"
    },
    {
        subject: "mktg",
        section: "sensory-stages",
        label: "Sensory thresholds",
        desc: "Lecture 25 · thresholds & 4 stages",
        group: "psychology",
        groupLabel: "Psych & Bias"
    },
    {
        subject: "mktg",
        section: "gestalt-lab",
        label: "The Gestalt lab",
        desc: "Lecture 25 · five live demos",
        group: "psychology",
        groupLabel: "Psych & Bias"
    },
    {
        subject: "mktg",
        section: "attitude-buckets",
        label: "Attitude & the buckets",
        desc: "Lecture 26 · utilitarian vs love",
        group: "psychology",
        groupLabel: "Psych & Bias"
    },
    {
        subject: "mktg",
        section: "retention-acquisition",
        label: "Retention vs acquisition",
        desc: "Lecture 26 · the 1/7th rule",
        group: "psychology",
        groupLabel: "Psych & Bias"
    },
    {
        subject: "mktg",
        section: "abc-humanization",
        label: "The ABC model",
        desc: "Lecture 27 · CEAT · Asian Paints",
        group: "psychology",
        groupLabel: "Psych & Bias"
    },
    {
        subject: "mktg",
        section: "bias-lab",
        label: "The bias lab",
        desc: "Lecture 28 · four biases live",
        group: "psychology",
        groupLabel: "Psych & Bias"
    }
];
const CHAPTER_TOTAL = CHAPTER_INDEX.length;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/atlas/CommandPalette.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandPalette",
    ()=>CommandPalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   THE ATLAS — ⌘K command palette.

   A global launcher that works on every view: the dark landing
   and inside any subject. ⌘K / Ctrl+K toggles it, the "⌘K" chip
   in the landing nav opens it (via the atlas:cmdk event), and it
   can jump to any shelf, any CHAPTER, or straight into the
   Python Lab.

   Chapters come from lib/chapter-index.ts (a static 86-entry
   catalog — no subject chunk is imported here) and only appear
   once the reader types, so an idle palette stays a launcher.

   Once the query is 3+ characters, two deeper groups join in —
   "From the notes" (lib/search.ts full-text over every chapter
   body, lazily built on first use) and "In the question banks"
   (the five exam banks). Both land through the same chapter
   flash-jump as the title matches.

   Cross-view handoffs use tiny sessionStorage flags so the
   command survives the target app's mount; once the target is
   already on stage a live window event is broadcast instead.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cmdk/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open-text.js [app-client] (ecmascript) <export default as BookOpenText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-client] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookPen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/notebook-pen.js [app-client] (ecmascript) <export default as NotebookPen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scroll-text.js [app-client] (ecmascript) <export default as ScrollText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WandSparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-client] (ecmascript) <export default as WandSparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atlas/subjects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapter$2d$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/chapter-index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sm2.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const OPEN_EVENT = "atlas:cmdk";
const LAB_EVENT = "atlas:open-lab";
const LAB_FLAG = "atlas:open-lab";
const SECTION_EVENT = "atlas:open-section";
const SECTION_FLAG = "atlas:open-section";
const SUBJECT_BY_ID = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECTS"].map((s)=>[
        s.id,
        s
    ]));
function Item({ onSelect, icon: Icon, tint, kicker, title, sub, keywords, match }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Item, {
        onSelect: onSelect,
        value: [
            match,
            title,
            sub,
            kicker,
            keywords
        ].filter(Boolean).join(" "),
        className: "cmdk-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "cmdk-item-icon",
                style: {
                    background: `${tint}1f`,
                    color: tint
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "h-4 w-4",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cmdk-item-title",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cmdk-item-sub",
                        children: sub
                    }, void 0, false, {
                        fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "cmdk-item-kicker",
                children: kicker
            }, void 0, false, {
                fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atlas/CommandPalette.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c = Item;
/** first line of a long question prompt — titles stay one line */ function clampPrompt(text, max = 110) {
    return text.length > max ? `${text.slice(0, text.lastIndexOf(" ", max) > 0 ? text.lastIndexOf(" ", max) : max)}…` : text;
}
function CommandPalette() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [due, setDue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [deep, setDeep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: "idle"
    });
    const dueTotal = Object.values(due).reduce((n, x)=>n + x, 0);
    const query = search.trim();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommandPalette.useEffect": ()=>{
            const onKey = {
                "CommandPalette.useEffect.onKey": (e)=>{
                    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                        e.preventDefault();
                        setOpen({
                            "CommandPalette.useEffect.onKey": (o)=>!o
                        }["CommandPalette.useEffect.onKey"]);
                    }
                }
            }["CommandPalette.useEffect.onKey"];
            const onOpen = {
                "CommandPalette.useEffect.onOpen": ()=>setOpen(true)
            }["CommandPalette.useEffect.onOpen"];
            window.addEventListener("keydown", onKey);
            window.addEventListener(OPEN_EVENT, onOpen);
            return ({
                "CommandPalette.useEffect": ()=>{
                    window.removeEventListener("keydown", onKey);
                    window.removeEventListener(OPEN_EVENT, onOpen);
                }
            })["CommandPalette.useEffect"];
        }
    }["CommandPalette.useEffect"], []);
    /* due counts are read from the local SM-2 store each time the
     palette opens — no question banks needed for the numbers */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommandPalette.useEffect": ()=>{
            if (!open) return;
            const raf = requestAnimationFrame({
                "CommandPalette.useEffect.raf": ()=>setDue((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sm2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dueCounts"])())
            }["CommandPalette.useEffect.raf"]);
            return ({
                "CommandPalette.useEffect": ()=>cancelAnimationFrame(raf)
            })["CommandPalette.useEffect"];
        }
    }["CommandPalette.useEffect"], [
        open
    ]);
    /* a closed palette forgets its search — rAF-deferred so the
     reset never runs synchronously inside the effect */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommandPalette.useEffect": ()=>{
            if (open) return;
            const raf = requestAnimationFrame({
                "CommandPalette.useEffect.raf": ()=>setSearch("")
            }["CommandPalette.useEffect.raf"]);
            return ({
                "CommandPalette.useEffect": ()=>cancelAnimationFrame(raf)
            })["CommandPalette.useEffect"];
        }
    }["CommandPalette.useEffect"], [
        open
    ]);
    /* the deep search — debounced, non-blocking, and loaded lazily:
     the first 3+ char query imports lib/search, builds the
     MiniSearch indexes (corpus chunk + question banks) and only
     then fills the two groups. A stale response never lands. */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommandPalette.useEffect": ()=>{
            if (query.length < 3) {
                const raf = requestAnimationFrame({
                    "CommandPalette.useEffect.raf": ()=>setDeep({
                            status: "idle"
                        })
                }["CommandPalette.useEffect.raf"]);
                return ({
                    "CommandPalette.useEffect": ()=>cancelAnimationFrame(raf)
                })["CommandPalette.useEffect"];
            }
            let alive = true;
            const raf = requestAnimationFrame({
                "CommandPalette.useEffect.raf": ()=>setDeep({
                        status: "loading"
                    })
            }["CommandPalette.useEffect.raf"]);
            const timer = window.setTimeout({
                "CommandPalette.useEffect.timer": ()=>{
                    void ({
                        "CommandPalette.useEffect.timer": async ()=>{
                            try {
                                const { searchNotes, searchQuestions } = await __turbopack_context__.A("[project]/src/lib/search.ts [app-client] (ecmascript, async loader)");
                                const [notes, questions] = await Promise.all([
                                    searchNotes(query),
                                    searchQuestions(query)
                                ]);
                                if (alive) setDeep({
                                    status: "ready",
                                    notes,
                                    questions
                                });
                            } catch  {
                                if (alive) setDeep({
                                    status: "idle"
                                }); // search stays optional — title matches still work
                            }
                        }
                    })["CommandPalette.useEffect.timer"]();
                }
            }["CommandPalette.useEffect.timer"], 180);
            return ({
                "CommandPalette.useEffect": ()=>{
                    alive = false;
                    cancelAnimationFrame(raf);
                    window.clearTimeout(timer);
                }
            })["CommandPalette.useEffect"];
        }
    }["CommandPalette.useEffect"], [
        query
    ]);
    const go = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CommandPalette.useCallback[go]": (hash)=>{
            setOpen(false);
            if (window.location.hash === hash) return; // already there — keep the view as-is
            window.location.hash = hash;
            window.scrollTo(0, 0);
        }
    }["CommandPalette.useCallback[go]"], []);
    const openLab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CommandPalette.useCallback[openLab]": ()=>{
            setOpen(false);
            if (window.location.hash === "#/subject/foc") {
                // FoC is on stage — ask it to open the lab directly
                window.dispatchEvent(new CustomEvent(LAB_EVENT));
            } else {
                // leave a flag so the lab opens once FocApp mounts
                try {
                    sessionStorage.setItem(LAB_FLAG, "1");
                } catch  {
                /* private mode — navigation still works, the lab just needs one click */ }
                window.location.hash = "#/subject/foc";
                window.scrollTo(0, 0);
            }
        }
    }["CommandPalette.useCallback[openLab]"], []);
    const openSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CommandPalette.useCallback[openSection]": (subject, section)=>{
            setOpen(false);
            if (window.location.hash === `#/subject/${subject}`) {
                // the shelf is on stage — scroll straight to the chapter
                window.dispatchEvent(new CustomEvent(SECTION_EVENT, {
                    detail: section
                }));
            } else {
                // leave a flag so the chapter scrolls once the shelf mounts
                try {
                    sessionStorage.setItem(SECTION_FLAG, JSON.stringify({
                        subject,
                        section
                    }));
                } catch  {
                /* private mode — navigation still lands on the shelf */ }
                window.location.hash = `#/subject/${subject}`;
                window.scrollTo(0, 0);
            }
        }
    }["CommandPalette.useCallback[openSection]"], []);
    /* a question-bank hit: the banks are grouped by chapter group,
     so the honest landing is the group's opening chapter — the
     same flash-jump as a chapter result, with the bank's own
     "Test my knowledge" window one menu click away */ const openQuestionBank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CommandPalette.useCallback[openQuestionBank]": (subject, group)=>{
            const first = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapter$2d$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTER_INDEX"].find({
                "CommandPalette.useCallback[openQuestionBank].first": (c)=>c.subject === subject && c.group === group
            }["CommandPalette.useCallback[openQuestionBank].first"]);
            if (first) openSection(first.subject, first.section);
            else go(`#/subject/${subject}`);
        }
    }["CommandPalette.useCallback[openQuestionBank]"], [
        openSection,
        go
    ]);
    const openReview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CommandPalette.useCallback[openReview]": (subject)=>{
            setOpen(false);
            try {
                sessionStorage.setItem("atlas:review-subject", subject);
            } catch  {
            /* private mode — navigation still lands on the ledger */ }
            if (window.location.hash === "#/ledger") {
                // the ledger is on stage — ask it to open the review directly
                window.dispatchEvent(new CustomEvent("atlas:review-subject", {
                    detail: subject
                }));
            } else {
                window.location.hash = "#/ledger";
                window.scrollTo(0, 0);
            }
        }
    }["CommandPalette.useCallback[openReview]"], []);
    /* the drill lives on the ledger too — same handoff contract */ const openDrill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CommandPalette.useCallback[openDrill]": (subject)=>{
            setOpen(false);
            try {
                sessionStorage.setItem("atlas:drill-subject", subject);
            } catch  {
            /* private mode — navigation still lands on the ledger */ }
            if (window.location.hash === "#/ledger") {
                window.dispatchEvent(new CustomEvent("atlas:drill-subject", {
                    detail: subject
                }));
            } else {
                window.location.hash = "#/ledger";
                window.scrollTo(0, 0);
            }
        }
    }["CommandPalette.useCallback[openDrill]"], []);
    /* the mock-exam composer lives on the ledger — same contract, no subject */ const openMock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CommandPalette.useCallback[openMock]": ()=>{
            setOpen(false);
            try {
                sessionStorage.setItem("atlas:mock-open", "1");
            } catch  {
            /* private mode — navigation still lands on the ledger */ }
            if (window.location.hash === "#/ledger") {
                window.dispatchEvent(new CustomEvent("atlas:mock-open"));
            } else {
                window.location.hash = "#/ledger";
                window.scrollTo(0, 0);
            }
        }
    }["CommandPalette.useCallback[openMock]"], []);
    /* the card forge lives on the ledger too — same contract, no subject */ const openForge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CommandPalette.useCallback[openForge]": ()=>{
            setOpen(false);
            try {
                sessionStorage.setItem("atlas:forge-open", "1");
            } catch  {
            /* private mode — navigation still lands on the ledger */ }
            if (window.location.hash === "#/ledger") {
                window.dispatchEvent(new CustomEvent("atlas:forge-open"));
            } else {
                window.location.hash = "#/ledger";
                window.scrollTo(0, 0);
            }
        }
    }["CommandPalette.useCallback[openForge]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        open: open,
        onOpenChange: setOpen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
                    className: "cmdk-overlay"
                }, void 0, false, {
                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                    lineNumber: 280,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                    className: "cmdk-dialog",
                    "aria-describedby": undefined,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                            className: "sr-only",
                            children: "The Atlas — command palette"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"], {
                            label: "The Atlas — command palette",
                            loop: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cmdk-head",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Input, {
                                        value: search,
                                        onValueChange: setSearch,
                                        placeholder: "Jump to a shelf, a chapter — or search the notes…"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this),
                                deep.status === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    role: "status",
                                    className: "px-4 py-2 font-mono text-[.56rem] font-bold uppercase tracking-[.2em] text-[#8d7b63]",
                                    children: "Searching the notes…"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                    lineNumber: 293,
                                    columnNumber: 15
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].List, {
                                    className: "cmdk-list",
                                    children: [
                                        deep.status === "loading" ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Empty, {
                                            className: "cmdk-empty",
                                            children: "No match — try “statistics”, “python” or any word from the notes."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                            lineNumber: 302,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Group, {
                                            heading: "Shelves",
                                            className: "cmdk-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                    onSelect: ()=>go("#/atlas"),
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
                                                    tint: "#f5c889",
                                                    kicker: "the map",
                                                    title: "The Atlas",
                                                    sub: "Back to the landing — every subject shelf",
                                                    keywords: "home landing start"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIVE_SUBJECTS"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                        onSelect: ()=>go(`#/subject/${s.id}`),
                                                        icon: s.icon,
                                                        tint: s.accent,
                                                        kicker: `shelf ${s.shelf}`,
                                                        title: s.title,
                                                        sub: s.tagline,
                                                        keywords: s.topics.join(" ")
                                                    }, s.id, false, {
                                                        fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                            lineNumber: 307,
                                            columnNumber: 15
                                        }, this),
                                        search.trim() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Group, {
                                            heading: "Chapters",
                                            className: "cmdk-group",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chapter$2d$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAPTER_INDEX"].map((c)=>{
                                                const s = SUBJECT_BY_ID.get(c.subject);
                                                if (!s) return null;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                    onSelect: ()=>openSection(c.subject, c.section),
                                                    icon: s.icon,
                                                    tint: s.accent,
                                                    kicker: `${s.short} · ${c.groupLabel}`,
                                                    title: c.label,
                                                    sub: c.desc,
                                                    keywords: `${c.group} ${s.title}`
                                                }, `${c.subject}:${c.section}`, false, {
                                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Group, {
                                            heading: "Progress",
                                            className: "cmdk-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                    onSelect: ()=>go("#/ledger"),
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookPen$3e$__["NotebookPen"],
                                                    tint: "#a9c977",
                                                    kicker: "#/ledger",
                                                    title: "Open my ledger",
                                                    sub: "Accuracy, mastery and the review schedule",
                                                    keywords: "progress mastery stats streak attempts ledger"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                    lineNumber: 355,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                    onSelect: ()=>openDrill("all"),
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                                                    tint: "#f5c889",
                                                    kicker: "no schedule needed",
                                                    title: "Quick drill — everything",
                                                    sub: "A mixed dozen from every shelf, instant answers",
                                                    keywords: "drill practice quick quiz mixed cards zap all shelves"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                    onSelect: openMock,
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__["ScrollText"],
                                                    tint: "#f5c889",
                                                    kicker: "your rules, exam conditions",
                                                    title: "Compose a mock exam",
                                                    sub: "Pick shelves, length and the clock — one custom paper",
                                                    keywords: "mock exam custom paper timed test compose practice sitting bell"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                    lineNumber: 373,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                    onSelect: openForge,
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WandSparkles$3e$__["WandSparkles"],
                                                    tint: "#f5c889",
                                                    kicker: "any chapter → cards",
                                                    title: "Card Forge — AI flashcards",
                                                    sub: "Generate flashcards from any chapter, keep the good ones",
                                                    keywords: "card forge ai generate flashcards create deck chapter notes sm2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                    lineNumber: 382,
                                                    columnNumber: 17
                                                }, this),
                                                dueTotal > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                    onSelect: ()=>openReview("all"),
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                                                    tint: "#f5c889",
                                                    kicker: `${dueTotal} due`,
                                                    title: "Spaced review — everything",
                                                    sub: "Due cards from every shelf, one sitting",
                                                    keywords: "review sm2 spaced repetition everything all shelves due cards mixed"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 19
                                                }, this) : null,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIVE_SUBJECTS"].filter((s)=>(due[s.id] ?? 0) > 0).map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                        onSelect: ()=>openReview(s.id),
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                                                        tint: s.accent,
                                                        kicker: `${due[s.id]} due`,
                                                        title: `Spaced review — ${s.short}`,
                                                        sub: "Answer today's due cards before they slip",
                                                        keywords: "review sm2 spaced repetition due cards"
                                                    }, `review-${s.id}`, false, {
                                                        fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 19
                                                    }, this)),
                                                search.trim() ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LIVE_SUBJECTS"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                        onSelect: ()=>openDrill(s.id),
                                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                                                        tint: s.accent,
                                                        kicker: `shelf ${s.shelf}`,
                                                        title: `Quick drill — ${s.short}`,
                                                        sub: "A mixed dozen, instant answers, no schedule needed",
                                                        keywords: `drill practice quick quiz ${s.topics.join(" ")}`
                                                    }, `drill-${s.id}`, false, {
                                                        fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 23
                                                    }, this)) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Group, {
                                            heading: "Quick actions",
                                            className: "cmdk-group",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                onSelect: openLab,
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
                                                tint: "#ea580c",
                                                kicker: "FoC · Colab mode",
                                                title: "Open the Python Lab",
                                                sub: "Real CPython 3.12 running in your browser",
                                                keywords: "python run code notebook pyodide repl"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                lineNumber: 432,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                            lineNumber: 431,
                                            columnNumber: 15
                                        }, this),
                                        deep.status === "ready" && deep.notes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Group, {
                                            heading: "From the notes",
                                            className: "cmdk-group",
                                            children: deep.notes.map((n)=>{
                                                const s = SUBJECT_BY_ID.get(n.shelfId);
                                                if (!s) return null;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                    onSelect: ()=>openSection(n.shelfId, n.chapterKey),
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenText$3e$__["BookOpenText"],
                                                    tint: s.accent,
                                                    kicker: `${s.short} · ${n.groupLabel}`,
                                                    title: n.label,
                                                    sub: n.snippet,
                                                    match: query
                                                }, `note-${n.shelfId}:${n.chapterKey}`, false, {
                                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                            lineNumber: 447,
                                            columnNumber: 17
                                        }, this) : null,
                                        deep.status === "ready" && deep.questions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Group, {
                                            heading: "In the question banks",
                                            className: "cmdk-group",
                                            children: deep.questions.map((q)=>{
                                                const s = SUBJECT_BY_ID.get(q.shelfId);
                                                if (!s) return null;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Item, {
                                                    onSelect: ()=>openQuestionBank(q.shelfId, q.group),
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"],
                                                    tint: s.accent,
                                                    kicker: `${s.short} · ${q.bankTitle}`,
                                                    title: clampPrompt(q.prompt),
                                                    sub: "question bank — opens the matching chapter group",
                                                    match: query
                                                }, `q-${q.shelfId}:${q.questionId}`, false, {
                                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                            lineNumber: 470,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cmdk-foot",
                                    "aria-hidden": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                    children: "↑"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                    children: "↓"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 33
                                                }, this),
                                                " navigate"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                            lineNumber: 491,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                    children: "↵"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                    lineNumber: 492,
                                                    columnNumber: 21
                                                }, this),
                                                " open"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                            lineNumber: 492,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                    children: "esc"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                                    lineNumber: 493,
                                                    columnNumber: 21
                                                }, this),
                                                " close"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                            lineNumber: 493,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                                    lineNumber: 490,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atlas/CommandPalette.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atlas/CommandPalette.tsx",
            lineNumber: 279,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/atlas/CommandPalette.tsx",
        lineNumber: 278,
        columnNumber: 5
    }, this);
}
_s(CommandPalette, "ZMsAA+b3N/dsTy4AGjohyuE3It4=");
_c1 = CommandPalette;
var _c, _c1;
__turbopack_context__.k.register(_c, "Item");
__turbopack_context__.k.register(_c1, "CommandPalette");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   THE ATLAS — route shell.

   The sandbox preview exposes a single route (/), so the whole
   atlas lives here behind a tiny hash router:

     #/atlas          → the dark landing (subject shelf)
     #/subject/<id>   → a subject's revision app
     #<anchor>        → in-page anchors inside a subject (ignored)

   Adding a new subject: register it in
   src/components/atlas/subjects.ts, then add a case below.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$AppBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atlas/AppBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$AtlasLanding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atlas/AtlasLanding.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$CommandPalette$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atlas/CommandPalette.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atlas/subjects.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
/* ============================================================
   Code-split shelves — each subject app is a heavy, self-contained
   world (chapters, question banks, animated machines). Only the
   landing ships with the first paint; a shelf's chunk is fetched
   the first time it is entered, behind a themed loader.
   ============================================================ */ function ShelfLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen items-center justify-center bg-[#070509]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": true,
                    className: "h-8 w-8 animate-spin rounded-full border-2 border-[#3e2c1d] border-t-[#f59e0b]"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[.7rem] font-black uppercase tracking-[.22em] text-[#a89a86]",
                    children: "Opening the shelf…"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = ShelfLoader;
const FocApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/notes/FocApp.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.FocApp), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/notes/FocApp.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShelfLoader, {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 49,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c1 = FocApp;
const AtbApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/atb/AtbApp.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.AtbApp), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/atb/AtbApp.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShelfLoader, {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 53,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c2 = AtbApp;
const FaApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/fa/FaApp.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.FaApp), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/fa/FaApp.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShelfLoader, {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 57,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c3 = FaApp;
const EbhApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/ebh/EbhApp.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.EbhApp), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/ebh/EbhApp.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShelfLoader, {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 61,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c4 = EbhApp;
const StmApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/stm/StmApp.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.StmApp), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/stm/StmApp.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShelfLoader, {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 65,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c5 = StmApp;
const MktgApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/mktg/MktgApp.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.MktgApp), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/mktg/MktgApp.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShelfLoader, {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 69,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c6 = MktgApp;
const LedgerView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/atlas/LedgerView.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.LedgerView), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/atlas/LedgerView.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShelfLoader, {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 73,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c7 = LedgerView;
const SUBJECT_ROUTE = "#/subject/";
function parseRouteHash(hash) {
    // only route-style hashes (#/…) drive the view; bare anchors (#why)
    // belong to the subject's own scroll navigation and are ignored.
    if (!hash.startsWith("#/")) return null;
    if (hash === "#/atlas") return {
        name: "atlas"
    };
    if (hash === "#/ledger") return {
        name: "ledger"
    };
    if (hash.startsWith(SUBJECT_ROUTE)) {
        const id = hash.slice(SUBJECT_ROUTE.length);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$subjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUBJECT_IDS"].includes(id)) return {
            name: "subject",
            id
        };
    }
    return {
        name: "atlas"
    }; // unknown route → the shelf
}
function currentView() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return parseRouteHash(window.location.hash) ?? {
        name: "atlas"
    };
}
function Page() {
    _s();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "atlas"
    });
    const viewKey = view.name === "subject" ? `subject-${view.id}` : view.name;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            // initial route sync — async so the first paint stays hydration-stable
            const raf = requestAnimationFrame({
                "Page.useEffect.raf": ()=>setView(currentView())
            }["Page.useEffect.raf"]);
            const onHash = {
                "Page.useEffect.onHash": ()=>{
                    const next = parseRouteHash(window.location.hash);
                    if (next) setView(next); // null = bare anchor → leave the view alone
                }
            }["Page.useEffect.onHash"];
            window.addEventListener("hashchange", onHash);
            return ({
                "Page.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    window.removeEventListener("hashchange", onHash);
                }
            })["Page.useEffect"];
        }
    }["Page.useEffect"], []);
    // dark chrome (scrollbar etc.) while the Atlas landing is on stage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const el = document.documentElement;
            el.classList.toggle("atlas-active", view.name === "atlas");
            return ({
                "Page.useEffect": ()=>el.classList.remove("atlas-active")
            })["Page.useEffect"];
        }
    }["Page.useEffect"], [
        view.name
    ]);
    const enterSubject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[enterSubject]": (id)=>{
            window.location.hash = `#/subject/${id}`;
            window.scrollTo(0, 0);
        }
    }["Page.useCallback[enterSubject]"], []);
    const exitToAtlas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page.useCallback[exitToAtlas]": ()=>{
            window.location.hash = "#/atlas";
            window.scrollTo(0, 0);
        }
    }["Page.useCallback[exitToAtlas]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfig"], {
        reducedMotion: "user",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$AppBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppBoundary"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$CommandPalette$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandPalette"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    initial: false,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 18
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -14
                        },
                        transition: {
                            duration: 0.32,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        children: view.name === "atlas" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atlas$2f$AtlasLanding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtlasLanding"], {
                            onEnter: enterSubject
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 149,
                            columnNumber: 15
                        }, this) : view.name === "ledger" ? // the ledger — local-first progress, mastery and spaced review
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LedgerView, {
                            onExitAtlas: exitToAtlas
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 152,
                            columnNumber: 15
                        }, this) : view.id === "foc" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FocApp, {
                            onExitAtlas: exitToAtlas
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 154,
                            columnNumber: 15
                        }, this) : view.id === "atb" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AtbApp, {
                            onExitAtlas: exitToAtlas
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 156,
                            columnNumber: 15
                        }, this) : view.id === "fa" ? // shelf 03 — Financial Accounting, the third live subject
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaApp, {
                            onExitAtlas: exitToAtlas
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 159,
                            columnNumber: 15
                        }, this) : view.id === "ebh" ? // shelf 04 — Economic & Business History, the fourth live subject
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EbhApp, {
                            onExitAtlas: exitToAtlas
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 162,
                            columnNumber: 15
                        }, this) : view.id === "stm" ? // shelf 05 — Statistics for Managers, the fifth live subject
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StmApp, {
                            onExitAtlas: exitToAtlas
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 165,
                            columnNumber: 15
                        }, this) : view.id === "mktg" ? // shelf 06 — Principles of Marketing, the sixth live subject
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MktgApp, {
                            onExitAtlas: exitToAtlas
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 168,
                            columnNumber: 15
                        }, this) : // reserved shelf reached by URL — send the reader back to the map
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AtlasFallback, {
                            id: view.id,
                            onBack: exitToAtlas
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 171,
                            columnNumber: 15
                        }, this)
                    }, viewKey, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 137,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s(Page, "xQirzi6aqaGiOenVBKR086n1cT0=");
_c8 = Page;
function AtlasFallback({ id, onBack }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen flex-col items-center justify-center gap-5 bg-[#070509] px-6 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-display text-2xl font-black text-[#f7ecdd] md:text-4xl",
                children: [
                    "Shelf ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "atlas-sheen",
                        children: id.replace("shelf-", "")
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 184,
                        columnNumber: 15
                    }, this),
                    " is still reserved."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "max-w-md text-[.92rem] leading-relaxed text-[#a89a86]",
                children: "This subject hasn't been rebuilt for the atlas yet — its PDF hasn't dropped."
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onBack,
                className: "h-11 rounded-full border border-white/15 bg-white/[.05] px-6 text-[.74rem] font-black uppercase tracking-[.16em] text-[#e9d7bf] transition-colors hover:bg-white/[.1]",
                children: "← Back to the atlas"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
_c9 = AtlasFallback;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "ShelfLoader");
__turbopack_context__.k.register(_c1, "FocApp");
__turbopack_context__.k.register(_c2, "AtbApp");
__turbopack_context__.k.register(_c3, "FaApp");
__turbopack_context__.k.register(_c4, "EbhApp");
__turbopack_context__.k.register(_c5, "StmApp");
__turbopack_context__.k.register(_c6, "MktgApp");
__turbopack_context__.k.register(_c7, "LedgerView");
__turbopack_context__.k.register(_c8, "Page");
__turbopack_context__.k.register(_c9, "AtlasFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a3afea72._.js.map