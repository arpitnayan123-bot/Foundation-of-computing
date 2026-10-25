(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/foc/lectures.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FOC_ALL_CHAPTER_IDS",
    ()=>FOC_ALL_CHAPTER_IDS,
    "FOC_DEFAULT_LECTURE",
    ()=>FOC_DEFAULT_LECTURE,
    "FOC_LECTURES",
    ()=>FOC_LECTURES,
    "lectureById",
    ()=>lectureById,
    "lectureOfChapter",
    ()=>lectureOfChapter
]);
"use client";
const FOC_LECTURES = [
    {
        id: "l1",
        n: 1,
        code: "L1",
        title: "Why Code? The Honest Question",
        blurb: "Karpathy's vibe coding, Codex and Claude Code — Day 1 feels amazing, Day 30 the tower crumbles. What programming actually unlocks that prompting never will.",
        chapters: [
            {
                id: "why",
                label: "Why code?",
                desc: "What programming actually unlocks"
            }
        ]
    },
    {
        id: "l2",
        n: 2,
        code: "L2",
        title: "What Is Computing? The IPO Model",
        blurb: "Every device — calculator, ATM, washing machine — is the same Input → Process → Output pipeline. One Uber ride request runs the full IPO cycle in under half a second.",
        chapters: [
            {
                id: "computing",
                label: "Computing",
                desc: "Input → process → output, everywhere"
            }
        ]
    },
    {
        id: "l3",
        n: 3,
        code: "L3",
        title: "The Four Pillars of Computational Thinking",
        blurb: "Decompose, patterns, abstraction, algorithms — the thinking toolkit every solution stands on, before a single line of code is written.",
        chapters: [
            {
                id: "pillars",
                label: "4 Pillars",
                desc: "Decompose · patterns · abstraction · algorithms"
            }
        ]
    },
    {
        id: "l4",
        n: 4,
        code: "L4",
        title: "Data — the Raw Material of Computing",
        blurb: "A raw 72 is data; context makes it information. Climb the DIKW ladder — data → information → knowledge → wisdom — with Netflix and the banks as guides.",
        chapters: [
            {
                id: "data",
                label: "Data",
                desc: "Data → information → knowledge → wisdom"
            }
        ]
    },
    {
        id: "l5",
        n: 5,
        code: "L5",
        title: "Algorithms — Recipes a Machine Can Follow",
        blurb: "The property wall: finiteness, definiteness, input, output, effectiveness — and finiteness_trap.py, the infinite loop you will never forget.",
        chapters: [
            {
                id: "algorithm",
                label: "Algorithms",
                desc: "Recipes a machine can follow"
            }
        ]
    },
    {
        id: "l6",
        n: 6,
        code: "L6",
        title: "Hardware — Silicon That Makes Ideas Run",
        blurb: "CPU anatomy, a few powerful cores vs thousands of small ones, memory that forgets when the power cuts — the physical foundation every pillar stands on.",
        chapters: [
            {
                id: "hardware",
                label: "Hardware",
                desc: "CPU, memory, sensors & I/O"
            }
        ]
    },
    {
        id: "l7",
        n: 7,
        code: "L7",
        title: "Software — Telling the Hardware What to Do",
        blurb: "Operating systems, apps, and the translator problem: interpreter vs compiler — why Python runs line by line while C compiles ahead of time.",
        chapters: [
            {
                id: "software",
                label: "Software",
                desc: "OS, apps, compilers & interpreters"
            }
        ]
    },
    {
        id: "l8",
        n: 8,
        code: "L8",
        title: "From Computing to Programming",
        blurb: "Problem → algorithm → Python code → solution. Meet the language: Guido van Rossum, 1991, readable by design — and why Python is this course's first tongue.",
        chapters: [
            {
                id: "python",
                label: "Python",
                desc: "Meet the language"
            }
        ]
    },
    {
        id: "l9",
        n: 9,
        code: "L9",
        title: "Variables, Strings, Numbers & Comments",
        blurb: "Four small ideas every program is made of — labelled boxes for values, quoted text, integers and floats, and the comments that explain you to future-you.",
        chapters: [
            {
                id: "basics",
                label: "Basics",
                desc: "Variables, strings, numbers, input"
            }
        ]
    },
    {
        id: "l10",
        n: 10,
        code: "L10",
        title: "Lists — the Workhorse Data Structure",
        blurb: "Ordered collections in square brackets: append, insert, remove, sort, slice — plus the famous copy trap and the tuple that protects data forever.",
        chapters: [
            {
                id: "lists",
                label: "Lists",
                desc: "Ordered collections, slices, tuples"
            }
        ]
    },
    {
        id: "l11",
        n: 11,
        code: "L11",
        title: "If Statements — Teaching Code to Decide",
        blurb: "A fork in the road: one yes/no question, one path taken. Comparisons, and/or/not, the elif ladder from baby to teenager — and the classic traps.",
        chapters: [
            {
                id: "if",
                label: "If / Else",
                desc: "Decisions, comparisons, logic"
            }
        ]
    },
    {
        id: "l12",
        n: 12,
        code: "L12",
        title: "Dictionaries — Connecting Pieces of Information",
        blurb: "Key–value pairs that connect what belongs together — favourite languages, pizza toppings — then nesting that models the real world: dicts inside lists inside dicts.",
        chapters: [
            {
                id: "dicts",
                label: "Dictionaries",
                desc: "Key–value pairs & nesting"
            }
        ]
    },
    {
        id: "l13",
        n: 13,
        code: "L13",
        title: "User Input & While Loops — Interactive Programs",
        blurb: "input() makes programs listen; while makes them persist. Follow the input() journey from prompt to usable number, then loop until the user says stop.",
        chapters: [
            {
                id: "while",
                label: "While Loops",
                desc: "Repeat until the job is done"
            }
        ]
    },
    {
        id: "l14",
        n: 14,
        code: "L14",
        title: "Functions — Named Blocks That Do One Job",
        blurb: "Define once, call anywhere: the anatomy of def, parameters vs arguments, and why naming a block of code is the first act of scale.",
        chapters: [
            {
                id: "functions",
                label: "Functions",
                desc: "Define, call, reuse — first steps"
            }
        ]
    },
    {
        id: "l15",
        n: 15,
        code: "L15",
        title: "Arguments In, Answers Out",
        blurb: "Positional vs keyword arguments, defaults that make parameters optional, and the return statement that hands a result back to the caller.",
        chapters: [
            {
                id: "args",
                label: "Args & Return",
                desc: "Positional, keyword, defaults, return"
            }
        ]
    },
    {
        id: "l16",
        n: 16,
        code: "L16",
        title: "Functions at Scale",
        blurb: "The power moves: hand whole lists to functions, let *args and **kwargs accept anything, and split programs into modules you can import.",
        chapters: [
            {
                id: "funcs2",
                label: "Funcs × Lists",
                desc: "Passing lists, *args, **kwargs, modules"
            }
        ]
    },
    {
        id: "l17",
        n: 17,
        code: "L17",
        title: "Classes — Blueprints for Objects",
        blurb: "From dictionaries to objects: __init__ builds, self remembers, methods act, inheritance extends — object-oriented programming closes the course.",
        chapters: [
            {
                id: "classes",
                label: "Classes",
                desc: "Objects, __init__, inheritance"
            }
        ]
    }
];
const FOC_DEFAULT_LECTURE = FOC_LECTURES[0].id;
function lectureOfChapter(chapterId) {
    return FOC_LECTURES.find((l)=>l.chapters.some((c)=>c.id === chapterId)) ?? null;
}
function lectureById(id) {
    return FOC_LECTURES.find((l)=>l.id === id) ?? null;
}
const FOC_ALL_CHAPTER_IDS = FOC_LECTURES.flatMap(_c = (l)=>l.chapters.map((c)=>c.id));
_c1 = FOC_ALL_CHAPTER_IDS;
var _c, _c1;
__turbopack_context__.k.register(_c, "FOC_ALL_CHAPTER_IDS$FOC_LECTURES.flatMap");
__turbopack_context__.k.register(_c1, "FOC_ALL_CHAPTER_IDS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/foc/FocHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocHero",
    ()=>FocHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   FocHero — shelf 01 of THE ATLAS.

   "Foundations of Computing" — the lecture sequence hero. Every
   lecture card carries its "Lecture N" eyebrow, and the notes
   below open with a matching "Foundations of Computing Lecture
   N" band (see FocLectureHead in FocApp). Palette: deep ember &
   gold on ivory paper. Thematic backdrop: the IPO pipeline —
   input → process → output — drawing itself across the hero.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$foc$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/foc/lectures.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/questions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const EMBER = "#c2410c";
const EMBER_BRIGHT = "#ea580c";
const GOLD = "#b45309";
const GOLD_LITE = "#f5c889";
function FocHero({ activeId, onSelect, onPractice, onOpenLab, seen, totalQuestions }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const q = query.trim().toLowerCase();
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FocHero.useMemo[filtered]": ()=>{
            const words = q.split(/\s+/).filter(Boolean);
            if (words.length === 0) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$foc$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOC_LECTURES"];
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$foc$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOC_LECTURES"].filter({
                "FocHero.useMemo[filtered]": (l)=>{
                    const hay = [
                        `lecture ${l.n}`,
                        l.code.toLowerCase(),
                        l.title.toLowerCase(),
                        l.blurb.toLowerCase(),
                        ...l.chapters.map({
                            "FocHero.useMemo[filtered].hay": (c)=>`${c.label} ${c.desc}`.toLowerCase()
                        }["FocHero.useMemo[filtered].hay"])
                    ].join(" ");
                    return words.every({
                        "FocHero.useMemo[filtered]": (w)=>hay.includes(w)
                    }["FocHero.useMemo[filtered]"]);
                }
            }["FocHero.useMemo[filtered]"]);
        }
    }["FocHero.useMemo[filtered]"], [
        q
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        id: "top",
        className: "relative flex min-h-[94vh] flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-16 sm:pb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-24 top-16 h-80 w-80 rounded-full blur-3xl",
                        style: {
                            background: "rgba(234,88,12,.14)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/foc/FocHero.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -right-16 bottom-24 h-96 w-96 rounded-full blur-3xl",
                        style: {
                            background: "rgba(245,200,137,.20)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/foc/FocHero.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/3 top-1/2 h-64 w-64 rounded-full blur-3xl",
                        style: {
                            background: "rgba(194,65,12,.10)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/foc/FocHero.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/foc/FocHero.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                "aria-hidden": true,
                viewBox: "0 0 1200 620",
                preserveAspectRatio: "none",
                className: "pointer-events-none absolute inset-0 h-full w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: "M -30 480 C 140 465 190 395 260 380 C 360 358 460 345 560 335 C 700 322 840 235 960 205 C 1060 180 1140 172 1230 168",
                        fill: "none",
                        stroke: GOLD,
                        strokeWidth: "2",
                        strokeDasharray: "3 10",
                        strokeLinecap: "round",
                        initial: {
                            pathLength: 0,
                            opacity: 0
                        },
                        animate: {
                            pathLength: 1,
                            opacity: 0.5
                        },
                        transition: {
                            duration: 2.6,
                            ease: "easeInOut",
                            delay: 0.4
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/foc/FocHero.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    [
                        {
                            x: 260,
                            y: 380,
                            label: "input",
                            ly: 432
                        },
                        {
                            x: 560,
                            y: 335,
                            label: "process",
                            ly: 387
                        },
                        {
                            x: 960,
                            y: 205,
                            label: "output",
                            ly: 257
                        }
                    ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                    cx: p.x,
                                    cy: p.y,
                                    r: 6,
                                    fill: "none",
                                    stroke: EMBER,
                                    strokeWidth: 2,
                                    style: {
                                        transformBox: "fill-box",
                                        transformOrigin: "center"
                                    },
                                    animate: {
                                        opacity: [
                                            0.2,
                                            0.85,
                                            0.2
                                        ],
                                        scale: [
                                            1,
                                            1.4,
                                            1
                                        ]
                                    },
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.7
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/foc/FocHero.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: p.x,
                                    y: p.ly,
                                    textAnchor: "middle",
                                    fill: GOLD,
                                    fontSize: 24,
                                    fontWeight: 700,
                                    letterSpacing: 5,
                                    opacity: 0.42,
                                    children: p.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/foc/FocHero.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, p.label, true, {
                            fileName: "[project]/src/components/foc/FocHero.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/foc/FocHero.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-4xl text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip mx-auto",
                            style: {
                                background: "#f7ecdc"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/foc/FocHero.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                "Shelf 01 · Foundations of Computing · IIT Jodhpur"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/foc/FocHero.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/foc/FocHero.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 120,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-6 text-5xl font-black leading-[1.05] tracking-tight text-[#3e2c1d] md:text-7xl",
                            children: [
                                "Foundations of",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-clip-text text-transparent",
                                    style: {
                                        backgroundImage: `linear-gradient(120deg,${EMBER_BRIGHT},${EMBER} 45%,${GOLD})`
                                    },
                                    children: "Computing"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/foc/FocHero.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/foc/FocHero.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/foc/FocHero.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 240,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6b563d]",
                            children: "From the IPO model to object-oriented Python — input → process → output everywhere, four pillars under every solution, data climbed to wisdom, and CPython 3.12 running live in the page. Seventeen lectures, each drawn as machines you can run — not notes you memorise."
                        }, void 0, false, {
                            fileName: "[project]/src/components/foc/FocHero.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/foc/FocHero.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 300,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mt-8 w-full max-w-3xl text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "foc-lecture-search",
                                    className: "sr-only",
                                    children: "Search the lecture sequence"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/foc/FocHero.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#b45309]",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/foc/FocHero.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "foc-lecture-search",
                                            type: "text",
                                            value: query,
                                            onChange: (e)=>setQuery(e.target.value),
                                            placeholder: "Search the sequence — try “5”, “lists”, or “while”…",
                                            autoComplete: "off",
                                            className: "w-full rounded-2xl border border-[#ecd9bd] bg-[#fdf9f3]/90 py-3.5 pl-11 pr-4 text-[.95rem] font-semibold text-[#3e2c1d] shadow-[0_10px_30px_-14px_rgba(62,44,29,.35)] backdrop-blur-md placeholder:font-normal placeholder:text-[#b45309] focus:outline-none focus:ring-2 focus:ring-[#ea580c]/40"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/foc/FocHero.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/foc/FocHero.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                filtered.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "scrollbar-thin mt-3 grid max-h-[23rem] gap-2.5 overflow-y-auto pr-1 sm:grid-cols-2",
                                    "aria-label": "Lecture sequence — pick a lecture to open its notes below",
                                    children: filtered.map((l)=>{
                                        const isActive = l.id === activeId;
                                        const readCount = l.chapters.filter((c)=>seen.has(c.id)).length;
                                        const allRead = l.chapters.length > 0 && readCount === l.chapters.length;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "min-w-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>onSelect(l.id),
                                                "aria-pressed": isActive,
                                                className: `group flex h-full w-full items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200 ${isActive ? "border-[#c2410c] bg-white shadow-[0_16px_40px_-18px_rgba(194,65,12,.45)] ring-2 ring-[#ea580c]/25" : "border-[#ecd9bd] bg-[#fdf9f3]/80 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_34px_-18px_rgba(62,44,29,.4)]"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[.72rem] font-black ${isActive ? "text-white" : ""}`,
                                                        style: isActive ? {
                                                            background: `linear-gradient(135deg,${EMBER_BRIGHT},${EMBER})`,
                                                            boxShadow: "0 6px 14px -6px rgba(194,65,12,.6)"
                                                        } : {
                                                            background: "#f7ecdc",
                                                            color: EMBER
                                                        },
                                                        children: l.code
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/foc/FocHero.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "min-w-0 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[.58rem] font-extrabold uppercase tracking-[.18em]",
                                                                        style: {
                                                                            color: GOLD
                                                                        },
                                                                        children: [
                                                                            "Lecture ",
                                                                            l.n
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/foc/FocHero.tsx",
                                                                        lineNumber: 178,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    allRead ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "h-3.5 w-3.5",
                                                                        style: {
                                                                            color: "#8fae5d"
                                                                        },
                                                                        "aria-label": "Every chapter read"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/foc/FocHero.tsx",
                                                                        lineNumber: 182,
                                                                        columnNumber: 31
                                                                    }, this) : null,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-auto font-mono text-[.6rem] font-bold text-[#b45309]",
                                                                        children: [
                                                                            readCount,
                                                                            "/",
                                                                            l.chapters.length,
                                                                            " read"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/foc/FocHero.tsx",
                                                                        lineNumber: 184,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/foc/FocHero.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `mt-0.5 block text-[.94rem] font-extrabold leading-tight ${isActive ? "text-[#c2410c]" : "text-[#3e2c1d]"}`,
                                                                children: l.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/foc/FocHero.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 block text-[.76rem] leading-snug text-[#6b563d]",
                                                                children: l.blurb
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/foc/FocHero.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-2 flex flex-wrap gap-1.5",
                                                                children: l.chapters.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full border border-[#ecd9bd] bg-[#fbf0dd] px-2 py-0.5 text-[.62rem] font-bold text-[#8a4508]",
                                                                        children: c.label
                                                                    }, c.id, false, {
                                                                        fileName: "[project]/src/components/foc/FocHero.tsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/foc/FocHero.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/foc/FocHero.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 25
                                                    }, this),
                                                    isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-0.5 shrink-0 self-center rounded-full bg-[#c2410c]/10 px-2 py-1 text-[.55rem] font-black uppercase tracking-[.14em] text-[#c2410c]",
                                                        children: "reading"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/foc/FocHero.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 27
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/foc/FocHero.tsx",
                                                lineNumber: 156,
                                                columnNumber: 23
                                            }, this)
                                        }, l.id, false, {
                                            fileName: "[project]/src/components/foc/FocHero.tsx",
                                            lineNumber: 155,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/foc/FocHero.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 rounded-2xl border border-dashed border-[#ecd9bd] bg-[#fdf9f3]/70 p-4 text-center text-[.82rem] font-semibold text-[#a08568]",
                                    role: "status",
                                    children: [
                                        "No lecture matches “",
                                        query,
                                        "” — try a number, a topic (“dictionaries”), or clear the search."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/foc/FocHero.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex flex-col items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center justify-center gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: onPractice,
                                                    title: "The practice hub — pen-paper exam windows with instant checking",
                                                    className: "group inline-flex items-center gap-2 rounded-full border border-[#ecd9bd] bg-[#fdf9f3] px-7 py-3 text-sm font-bold text-[#8a4508] shadow-sm transition hover:bg-[#f9e8d2]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                                            className: "h-4 w-4 text-[#c2410c] transition-transform duration-300 group-hover:-rotate-12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/foc/FocHero.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Test my knowledge"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/foc/FocHero.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: onOpenLab,
                                                    title: "Open the Python Lab — real CPython 3.12, live in the page",
                                                    className: "group inline-flex items-center gap-2 rounded-full border-2 border-[#e8b878] bg-transparent px-6 py-[.65rem] text-sm font-bold text-[#b45309] shadow-none transition hover:bg-[#fdf3e3] hover:text-[#c2410c]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"], {
                                                            className: "h-4 w-4 transition-transform duration-300 group-hover:rotate-12",
                                                            style: {
                                                                color: EMBER
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/foc/FocHero.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Python Lab"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/foc/FocHero.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/foc/FocHero.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[.64rem] font-bold uppercase tracking-[.16em] text-[#a08568]",
                                            children: [
                                                "pen-paper practice · ",
                                                totalQuestions,
                                                " questions · ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXAM_GROUPS"].length,
                                                " exam windows"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/foc/FocHero.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/foc/FocHero.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/foc/FocHero.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/foc/FocHero.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 560,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3",
                            children: [
                                [
                                    String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$foc$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOC_LECTURES"].length),
                                    "lectures"
                                ],
                                [
                                    String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$foc$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOC_ALL_CHAPTER_IDS"].length),
                                    "chapters"
                                ],
                                [
                                    String(totalQuestions),
                                    "exam questions"
                                ]
                            ].map(([n, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "bg-clip-text text-3xl font-black text-transparent",
                                            style: {
                                                backgroundImage: `linear-gradient(120deg,${EMBER_BRIGHT},${EMBER} 55%,${GOLD})`
                                            },
                                            children: n
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/foc/FocHero.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.72rem] font-bold uppercase tracking-[.18em] text-[#a08568]",
                                            children: l
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/foc/FocHero.tsx",
                                            lineNumber: 261,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, l, true, {
                                    fileName: "[project]/src/components/foc/FocHero.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/foc/FocHero.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/foc/FocHero.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/foc/FocHero.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-8 z-10 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#notes-top",
                    "aria-label": "Scroll to the lecture notes",
                    className: "anim-bob rounded-full border border-[#ecd9bd] bg-[#fdf9f3]/80 p-3 text-[#c2410c]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/foc/FocHero.tsx",
                        lineNumber: 270,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/foc/FocHero.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/foc/FocHero.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/foc/FocHero.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(FocHero, "DOWiSTOb/BUd8qeG7DR+mR3x4Qg=");
_c = FocHero;
var _c;
__turbopack_context__.k.register(_c, "FocHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_foc_03d40eb7._.js.map