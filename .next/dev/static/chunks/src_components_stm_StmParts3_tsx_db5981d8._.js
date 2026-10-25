(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/stm/StmParts3.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StmQuantitativeSection",
    ()=>StmQuantitativeSection,
    "StmTwoVarsSection",
    ()=>StmTwoVarsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   Statistics for Managers — PART 3 of 7 (shelf 05). Chapter 2's
   quantitative displays (Hudson Auto's 50 parts costs: frequency
   distribution, histogram, dot plot, skewness, cumulative
   distributions, stem-and-leaf) and its two-variable displays
   (crosstabulation with row/column percentages, Simpson's
   paradox, scatter diagrams & trendlines, side-by-side and
   stacked bar charts, data visualization best practices and
   data dashboards).
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stm/StmParts1.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ============================================================
   CHAPTER 2 · MOVEMENT 2 — SUMMARIZING QUANTITATIVE DATA
   ============================================================ */ const HUDSON_CLASSES = [
    {
        cls: "50–59",
        f: 2,
        rel: 0.04,
        pct: 4,
        cumF: 2,
        cumRel: 0.04,
        cumPct: 4
    },
    {
        cls: "60–69",
        f: 13,
        rel: 0.26,
        pct: 26,
        cumF: 15,
        cumRel: 0.3,
        cumPct: 30
    },
    {
        cls: "70–79",
        f: 16,
        rel: 0.32,
        pct: 32,
        cumF: 31,
        cumRel: 0.62,
        cumPct: 62
    },
    {
        cls: "80–89",
        f: 7,
        rel: 0.14,
        pct: 14,
        cumF: 38,
        cumRel: 0.76,
        cumPct: 76
    },
    {
        cls: "90–99",
        f: 7,
        rel: 0.14,
        pct: 14,
        cumF: 45,
        cumRel: 0.9,
        cumPct: 90
    },
    {
        cls: "100–109",
        f: 5,
        rel: 0.1,
        pct: 10,
        cumF: 50,
        cumRel: 1.0,
        cumPct: 100
    }
];
function HudsonHistogram() {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("f");
    const max = mode === "f" ? 16 : 32;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-4 sm:p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.9rem] font-bold text-[#3e2c1d]",
                        children: "Tune-up parts cost — histogram"
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex overflow-hidden rounded-full border border-[#d9cdf8]",
                        children: [
                            {
                                k: "f",
                                label: "Frequency"
                            },
                            {
                                k: "pct",
                                label: "Percent"
                            }
                        ].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setMode(b.k),
                                "aria-pressed": mode === b.k,
                                className: `px-3.5 py-1.5 text-[.7rem] font-bold transition-colors ${mode === b.k ? "text-white" : "bg-white text-[#6d28d9] hover:bg-[#f6f3fe]"}`,
                                style: mode === b.k ? {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_BTN_GRAD"]
                                } : undefined,
                                children: b.label
                            }, b.k, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stm/StmParts3.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex h-48 items-end gap-1 rounded-xl border border-[#e6e0f8] bg-[#fdfcff] p-3",
                children: HUDSON_CLASSES.map((c, i)=>{
                    const v = mode === "f" ? c.f : c.pct;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full flex-1 flex-col items-center justify-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-1 text-[.68rem] font-black text-[#5b21b6]",
                                children: v
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "w-full rounded-t-md",
                                style: {
                                    background: "linear-gradient(180deg,#8b5cf6,#5b21b6)"
                                },
                                initial: {
                                    height: 0
                                },
                                whileInView: {
                                    height: `${v / max * 82}%`
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: i * 0.08,
                                    ease: "easeOut"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this)
                        ]
                    }, c.cls, true, {
                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts3.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1.5 flex gap-1",
                children: HUDSON_CLASSES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex-1 text-center font-mono text-[.62rem] font-bold text-[#8a7fae]",
                        children: c.cls
                    }, c.cls, false, {
                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts3.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[.8rem] leading-relaxed text-muted-warm",
                children: [
                    "The variable of interest goes on the ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "horizontal axis"
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                        lineNumber: 97,
                        columnNumber: 46
                    }, this),
                    "; a rectangle is drawn above each class interval with its height corresponding to the interval’s frequency, relative frequency, or percent frequency. ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "Unlike a bar graph, a histogram has no natural separation"
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                        lineNumber: 99,
                        columnNumber: 51
                    }, this),
                    " between rectangles of adjacent classes — the rectangles touch because the scale is continuous."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stm/StmParts3.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stm/StmParts3.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(HudsonHistogram, "ZafrOY65sc5t1e2GgyqkelKZBLw=");
_c = HudsonHistogram;
const DOT_X = {
    50: 0,
    60: 1,
    70: 2,
    80: 3,
    90: 4,
    100: 5,
    110: 6
};
const DOT_VALUES = [
    91,
    78,
    93,
    57,
    75,
    52,
    99,
    80,
    97,
    62,
    71,
    69,
    72,
    89,
    66,
    75,
    79,
    75,
    72,
    76,
    104,
    74,
    62,
    68,
    97,
    105,
    77,
    65,
    80,
    109,
    85,
    97,
    88,
    68,
    83,
    68,
    71,
    69,
    67,
    74,
    62,
    82,
    98,
    101,
    79,
    105,
    79,
    69,
    62,
    73
];
function HudsonDots() {
    // group values into columns (one dot per value, stacked)
    const cols = {};
    for (const v of DOT_VALUES){
        const col = DOT_X[Math.floor(v / 10) * 10] ?? (v >= 100 ? 5.4 : 0);
        const key = Math.round(col * 10) / 10;
        (cols[key] ??= []).push(v);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 560 150",
        className: "h-auto w-full",
        role: "img",
        "aria-label": "Dot plot of the 50 tune-up parts costs: dots stacked above the axis between 50 and 110 dollars, densest around 62 to 79 dollars",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "30",
                y1: "118",
                x2: "540",
                y2: "118",
                stroke: "#b3a6d9",
                strokeWidth: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts3.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            [
                50,
                60,
                70,
                80,
                90,
                100,
                110
            ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: 30 + i * 85,
                            y1: "113",
                            x2: 30 + i * 85,
                            y2: "123",
                            stroke: "#b3a6d9",
                            strokeWidth: "1.4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 30 + i * 85,
                            y: "140",
                            textAnchor: "middle",
                            fontSize: "12",
                            fill: "#8a7fae",
                            children: t
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, t, true, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)),
            Object.entries(cols).map(([k, vals])=>vals.map((v, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                        cx: 30 + parseFloat(k) * 85,
                        cy: 112 - j * 9 - 5,
                        r: "3.4",
                        fill: "#6d28d9",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 0.85,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.3,
                            delay: j * 0.03 + parseFloat(k) * 0.05
                        }
                    }, `${k}-${j}`, false, {
                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "285",
                y: "148",
                textAnchor: "middle",
                fontSize: "10.5",
                fill: "#8a7fae",
                children: "Tune-up parts cost ($)"
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts3.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stm/StmParts3.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_c1 = HudsonDots;
function StmQuantitativeSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "quantitative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Chapter 2 · section 2.2",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Summarizing ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-violet",
                                children: "quantitative"
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 159,
                                columnNumber: 27
                            }, void 0),
                            " data"
                        ]
                    }, void 0, true),
                    lead: "Back to Hudson Auto's 50 parts costs — now with class widths, rectangles that touch, dots in columns, cumulative counters, and a stem-and-leaf that shows every single value."
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "01",
                    title: "Choosing classes",
                    sub: "Six classes, width (109 − 50)/6 = 9.83 ≈ 10"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmPanel"], {
                        label: "Sample of parts cost ($) for 50 tune-ups — Hudson Auto Repair",
                        children: `91  78  93  57  75  52  99  80  97  62
71  69  72  89  66  75  79  75  72  76
104 74  62  68  97  105 77  65  80  109
85  97  88  68  83  68  71  69  67  74
62  82  98  101 79  105 79  69  62  73

Width = (109 − 50) / 6 = 9.83 ≈ 10`
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "02",
                    title: "The frequency table + histogram",
                    sub: "2, 13, 16, 7, 7, 5 — flip between counts and percents"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-start gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto rounded-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "warm-table",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Parts cost ($)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Freq."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Rel. freq."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Percent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: [
                                                HUDSON_CLASSES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "font-bold",
                                                                children: c.cls
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "font-mono",
                                                                children: c.f
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "font-mono",
                                                                children: c.rel.toFixed(2)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                                lineNumber: 194,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "font-mono",
                                                                children: c.pct
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, c.cls, true, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "font-black",
                                                            children: "Total"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "font-black font-mono",
                                                            children: "50"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "font-black font-mono",
                                                            children: "1.00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "font-black font-mono",
                                                            children: "100"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HudsonHistogram, {}, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 grid gap-3 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmCallout"], {
                                kind: "insight",
                                title: "Insights from the table",
                                children: [
                                    "Only ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "4%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 214,
                                        columnNumber: 20
                                    }, this),
                                    " of the parts costs are in the $50–59 class · ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "30%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 214,
                                        columnNumber: 75
                                    }, this),
                                    " are under $70 · the greatest percentage (",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "32%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 215,
                                        columnNumber: 46
                                    }, this),
                                    ", almost one-third) are in the $70–79 class · ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "10%"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 216,
                                        columnNumber: 23
                                    }, this),
                                    " are $100 or more."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmCallout"], {
                                kind: "why",
                                title: "Why percents matter",
                                children: "Relative frequency converts counts into comparisons that survive a change of sample size — the histogram above flips between the two views without changing its shape."
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "03",
                    title: "Dot plot",
                    sub: "The simplest graphical summary — one dot per data value"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-warm p-4 sm:p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.9rem] font-bold text-[#3e2c1d]",
                                children: "Hudson Auto — dot plot of the 50 costs"
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HudsonDots, {}, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.8rem] leading-relaxed text-muted-warm",
                                children: [
                                    "A horizontal axis shows the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "range of data values"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 235,
                                        columnNumber: 43
                                    }, this),
                                    "; then each data value is represented by a ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "dot placed above the axis"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 236,
                                        columnNumber: 32
                                    }, this),
                                    " — stack the dots and the distribution’s shape appears for free."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "04",
                    title: "Skewness — reading the histogram's tail",
                    sub: "Exam scores · heights · housing values"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-3",
                    children: [
                        {
                            t: "Moderately skewed left",
                            d: "A longer tail to the left.",
                            ex: "Ex: exam scores"
                        },
                        {
                            t: "Symmetric",
                            d: "Left tail is the mirror image of the right tail.",
                            ex: "Ex: heights of people"
                        },
                        {
                            t: "Moderately right skewed",
                            d: "A longer tail to the right.",
                            ex: "Ex: housing values"
                        }
                    ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * 90,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.9rem] font-extrabold text-[#3e2c1d]",
                                        children: s.t
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 251,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[.78rem] text-muted-warm",
                                        children: [
                                            s.d,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: s.ex
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 252,
                                                columnNumber: 73
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 252,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 200 70",
                                        className: "mt-2 h-auto w-full",
                                        "aria-hidden": true,
                                        children: [
                                            s.t.includes("left") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M8 62 C 40 60, 60 52, 84 30 C 100 16, 112 16, 128 30 C 152 52, 172 60, 192 62",
                                                fill: "none",
                                                stroke: "#7c3aed",
                                                strokeWidth: "2.4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 255,
                                                columnNumber: 21
                                            }, this) : s.t.includes("Symmetric") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M8 62 C 60 60, 76 46, 100 18 C 124 46, 140 60, 192 62",
                                                fill: "none",
                                                stroke: "#7c3aed",
                                                strokeWidth: "2.4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 257,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M8 62 C 28 60, 48 52, 72 30 C 88 16, 100 16, 116 30 C 140 52, 160 60, 192 62",
                                                fill: "none",
                                                stroke: "#7c3aed",
                                                strokeWidth: "2.4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 259,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "4",
                                                y1: "63",
                                                x2: "196",
                                                y2: "63",
                                                stroke: "#c9bbee",
                                                strokeWidth: "1.2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 261,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 253,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 250,
                                columnNumber: 15
                            }, this)
                        }, s.t, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "05",
                    title: "Cumulative distributions",
                    sub: "How many items at or below each upper limit?"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-start gap-4 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto rounded-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "warm-table",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Cost ($)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Cumulative freq."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Cum. rel. freq."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Cum. percent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 274,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: HUDSON_CLASSES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "font-bold",
                                                            children: [
                                                                "≤ ",
                                                                c.cls.split("–")[1]
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "font-mono",
                                                            children: c.cumF
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "font-mono",
                                                            children: c.cumRel.toFixed(2)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "font-mono",
                                                            children: c.cumPct
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, `c-${c.cls}`, true, {
                                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                            lineNumber: 281,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                    lineNumber: 272,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmPanel"], {
                                        label: "The three cumulative readings",
                                        children: `Cumulative FREQUENCY distribution:
 the NUMBER of items with values less than
 or equal to the upper limit of each class.

Cumulative RELATIVE frequency distribution:
 the PROPORTION of items ≤ the upper limit.

Cumulative PERCENT frequency distribution:
 the PERCENTAGE of items ≤ the upper limit.`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 294,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.78rem] leading-relaxed text-muted-warm",
                                        children: "E.g. ≤ 69: 15 = 2 + 13 · .30 = 15/50 · 30 = .30(100)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 303,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                        lineNumber: 270,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "06",
                    title: "Stem-and-leaf display",
                    sub: "A histogram on its side — that keeps the actual data values"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 310,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-start gap-4 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.9rem] font-bold text-[#3e2c1d]",
                                        children: "Hudson costs — stem-and-leaf"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "mt-3 overflow-x-auto rounded-xl p-4 font-mono text-[.8rem] leading-relaxed text-[#3a2d63]",
                                        style: {
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_G"].wash,
                                            border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_G"].border}`
                                        },
                                        children: ` 5 | 2 7
 6 | 2 2 2 2 5 6 7 8 8 8 9 9 9
 7 | 1 1 2 2 3 4 4 5 5 5 6 7 8 9 9 9
 8 | 0 0 2 3 5 8 9
 9 | 1 3 7 7 7 8 9
10 | 1 4 5 5 9

Stems = leading digits (rows)
Leaves = last digit of each item, in rank order`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.78rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "Shows both the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "rank order and the shape"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 325,
                                                columnNumber: 32
                                            }, this),
                                            " of a distribution — similar to a histogram on its side, but with the advantage of showing the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "actual data values"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 326,
                                                columnNumber: 78
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmCallout"], {
                                        kind: "insight",
                                        title: "Stretched stems",
                                        children: [
                                            "If the display condenses the data too much, ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "stretch it vertically"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 332,
                                                columnNumber: 61
                                            }, this),
                                            " by using two stems per leading digit — the first takes leaf values 0–4, the second 5–9."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 331,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmCallout"], {
                                        kind: "why",
                                        title: "Leaf units",
                                        children: [
                                            "A single digit defines each leaf; leaf units may be 100, 10, 1, 0.1, … If not shown, the leaf unit is assumed to equal ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 337,
                                                columnNumber: 58
                                            }, this),
                                            ". Data 8.6, 11.7, 9.4, 9.1, 10.2, 11.0, 8.8 with ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "leaf unit = 0.1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 338,
                                                columnNumber: 32
                                            }, this),
                                            " → stems 8|68, 9|14, 10|2, 11|07. Data 1806, 1717, 1974, 1791, 1682, 1910, 1838 with ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "leaf unit = 10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 339,
                                                columnNumber: 63
                                            }, this),
                                            " → the 82 in 1682 rounds down to 80, shown as an 8."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 311,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "07",
                    title: "Concept check — quantitative displays",
                    sub: "The deck's checks, answered"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 346,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmQuiz"], {
                                source: "Concept check 2 · Q1 — answer key: a",
                                q: "The most common graphical presentation of quantitative data is a…",
                                options: [
                                    "histogram",
                                    "bar chart",
                                    "dot plot",
                                    "pie chart"
                                ],
                                answer: 0,
                                explain: "The histogram — rectangles over class intervals of a quantitative variable."
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmQuiz"], {
                                source: "Concept check 2 · Q2+Q3 — answer key: c / c",
                                q: "The total number of data items with a value less than the upper limit for the class is given by the ______ distribution; and in a cumulative frequency distribution, the last class will always have a cumulative frequency equal to…",
                                options: [
                                    "relative frequency · 100%",
                                    "cumulative relative frequency · one",
                                    "cumulative frequency · the total number of elements in the data set",
                                    "frequency · the class width"
                                ],
                                answer: 2,
                                explain: "Cumulative frequency counts everything at or below each upper limit — so the last class must hold all n elements (50 for Hudson)."
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 358,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 347,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Class width = ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "(largest − smallest)/classes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                    lineNumber: 370,
                                    columnNumber: 29
                                }, void 0),
                                " → 9.83 ≈ 10; classes 50–59 … 100–109."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Histogram rectangles ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "touch"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                    lineNumber: 371,
                                    columnNumber: 36
                                }, void 0),
                                " (continuous scale); bar-chart bars are ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "separated"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                    lineNumber: 371,
                                    columnNumber: 88
                                }, void 0),
                                " (categories)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Cumulative columns answer “≤ upper limit” questions; stem-and-leaf keeps ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "every actual value"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                    lineNumber: 372,
                                    columnNumber: 100
                                }, void 0),
                                " while showing shape."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 368,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/stm/StmParts3.tsx",
            lineNumber: 154,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/stm/StmParts3.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_c2 = StmQuantitativeSection;
/* ============================================================
   CHAPTER 2 · MOVEMENT 3 — TWO VARIABLES: TABLES & DISPLAYS
   ============================================================ */ const HOMES = {
    styles: [
        "Colonial",
        "Log",
        "Split",
        "A-Frame"
    ],
    rows: [
        {
            price: "< $250,000",
            counts: [
                18,
                6,
                19,
                12
            ],
            total: 55
        },
        {
            price: "≥ $250,000",
            counts: [
                12,
                14,
                16,
                3
            ],
            total: 45
        }
    ],
    colTotals: [
        30,
        20,
        35,
        15
    ],
    grand: 100
};
function CrossTabMachine() {
    _s1();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("counts");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm overflow-hidden p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.9rem] font-bold text-[#3e2c1d]",
                        children: "Finger Lakes Homes — homes sold by style and price, past two years"
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                        lineNumber: 400,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex overflow-hidden rounded-full border border-[#d9cdf8]",
                        children: [
                            {
                                k: "counts",
                                label: "Counts"
                            },
                            {
                                k: "row",
                                label: "Row %"
                            },
                            {
                                k: "col",
                                label: "Column %"
                            }
                        ].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setView(b.k),
                                "aria-pressed": view === b.k,
                                className: `px-3.5 py-1.5 text-[.7rem] font-bold transition-colors ${view === b.k ? "text-white" : "bg-white text-[#6d28d9] hover:bg-[#f6f3fe]"}`,
                                style: view === b.k ? {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_BTN_GRAD"]
                                } : undefined,
                                children: b.label
                            }, b.k, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 409,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stm/StmParts3.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "warm-table min-w-[520px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Price range"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 429,
                                        columnNumber: 15
                                    }, this),
                                    HOMES.styles.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "text-center",
                                            children: s
                                        }, s, false, {
                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                            lineNumber: 431,
                                            columnNumber: 17
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-center",
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 433,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 428,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 427,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                HOMES.rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "font-bold",
                                                children: row.price
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 439,
                                                columnNumber: 17
                                            }, this),
                                            row.counts.map((c, ci)=>{
                                                const text = view === "counts" ? String(c) : view === "row" ? (c / row.total * 100).toFixed(2) : (c / HOMES.colTotals[ci] * 100).toFixed(2);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-center font-mono",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                        mode: "wait",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 6
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            exit: {
                                                                opacity: 0,
                                                                y: -6
                                                            },
                                                            transition: {
                                                                duration: 0.16
                                                            },
                                                            className: "inline-block",
                                                            children: text
                                                        }, `${view}-${text}`, false, {
                                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                            lineNumber: 450,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 23
                                                    }, this)
                                                }, ci, false, {
                                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 21
                                                }, this);
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "text-center font-mono font-bold",
                                                children: view === "counts" ? row.total : 100
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 464,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, row.price, true, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 438,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "font-black",
                                            children: "Total"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                            lineNumber: 468,
                                            columnNumber: 15
                                        }, this),
                                        HOMES.colTotals.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "text-center font-mono font-bold",
                                                children: view === "counts" ? t : 100
                                            }, i, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 470,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "text-center font-mono font-black",
                                            children: view === "counts" ? HOMES.grand : ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                            lineNumber: 472,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 436,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 426,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts3.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0,
                        y: 8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -6
                    },
                    className: "mt-3 text-[.84rem] leading-relaxed text-muted-warm",
                    children: [
                        view === "counts" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The raw ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "crosstabulation"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                    lineNumber: 488,
                                    columnNumber: 23
                                }, this),
                                ". Converting entries into row or column percentages provides additional insight about the relationship between the two variables."
                            ]
                        }, void 0, true),
                        view === "row" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Row percentages"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                    lineNumber: 494,
                                    columnNumber: 15
                                }, this),
                                " — (Colonial and ≥ $250K) / (All ≥ $250K) × 100 = (12/45) × 100 = 26.67. Row totals are actually 100.01 due to rounding."
                            ]
                        }, void 0, true),
                        view === "col" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Column percentages"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                    lineNumber: 500,
                                    columnNumber: 15
                                }, this),
                                " — (Colonial and ≥ $250K) / (All Colonial) × 100 = (12/30) × 100 = 40.00. Each column now sums to 100."
                            ]
                        }, void 0, true)
                    ]
                }, view, true, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 479,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts3.tsx",
                lineNumber: 478,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stm/StmParts3.tsx",
        lineNumber: 398,
        columnNumber: 5
    }, this);
}
_s1(CrossTabMachine, "zVjf/4TW9HW1vFMfpFHjdmLCKjA=");
_c3 = CrossTabMachine;
const PANTHERS = [
    {
        x: 1,
        y: 14
    },
    {
        x: 3,
        y: 24
    },
    {
        x: 2,
        y: 18
    },
    {
        x: 1,
        y: 17
    },
    {
        x: 3,
        y: 30
    }
];
function PanthersScatter() {
    const sx = (x)=>60 + (x - 0.4) * 130;
    const sy = (y)=>190 - (y - 8) * 5.2;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 420 230",
        className: "h-auto w-full",
        role: "img",
        "aria-label": "Scatter diagram of the Panthers data: points at interceptions 1, 3, 2, 1, 3 against points 14, 24, 18, 17, 30, with an upward trendline suggesting a positive relationship",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "46",
                y1: "196",
                x2: "400",
                y2: "196",
                stroke: "#b3a6d9",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts3.tsx",
                lineNumber: 523,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "46",
                y1: "20",
                x2: "46",
                y2: "196",
                stroke: "#b3a6d9",
                strokeWidth: "1.4"
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts3.tsx",
                lineNumber: 524,
                columnNumber: 7
            }, this),
            [
                1,
                2,
                3,
                4
            ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: sx(t),
                            y1: "192",
                            x2: sx(t),
                            y2: "200",
                            stroke: "#b3a6d9"
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 527,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: sx(t),
                            y: "214",
                            textAnchor: "middle",
                            fontSize: "11",
                            fill: "#8a7fae",
                            children: t
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 528,
                            columnNumber: 11
                        }, this)
                    ]
                }, t, true, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 526,
                    columnNumber: 9
                }, this)),
            [
                10,
                20,
                30
            ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "42",
                            y1: sy(t),
                            x2: "50",
                            y2: sy(t),
                            stroke: "#b3a6d9"
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 533,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "36",
                            y: sy(t) + 4,
                            textAnchor: "end",
                            fontSize: "11",
                            fill: "#8a7fae",
                            children: t
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 534,
                            columnNumber: 11
                        }, this)
                    ]
                }, t, true, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 532,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "240",
                y: "228",
                textAnchor: "middle",
                fontSize: "10.5",
                fill: "#8a7fae",
                children: "Number of interceptions (x)"
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts3.tsx",
                lineNumber: 537,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "14",
                y: "108",
                fontSize: "10.5",
                fill: "#8a7fae",
                transform: "rotate(-90 14 108)",
                textAnchor: "middle",
                children: "Points scored (y)"
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts3.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                x1: sx(0.7),
                y1: sy(10),
                x2: sx(3.4),
                y2: sy(31),
                stroke: "#b3402c",
                strokeWidth: "2.4",
                strokeDasharray: "5 5",
                strokeLinecap: "round",
                initial: {
                    pathLength: 0,
                    opacity: 0
                },
                whileInView: {
                    pathLength: 1,
                    opacity: 0.85
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 1.4,
                    delay: 0.5,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts3.tsx",
                lineNumber: 539,
                columnNumber: 7
            }, this),
            PANTHERS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                    cx: sx(p.x),
                    cy: sy(p.y),
                    r: "7",
                    fill: "#fffdf9",
                    stroke: "#6d28d9",
                    strokeWidth: "2.6",
                    initial: {
                        opacity: 0,
                        scale: 0
                    },
                    whileInView: {
                        opacity: 1,
                        scale: 1
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.35,
                        delay: i * 0.12,
                        type: "spring",
                        stiffness: 260
                    }
                }, i, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 548,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stm/StmParts3.tsx",
        lineNumber: 522,
        columnNumber: 5
    }, this);
}
_c4 = PanthersScatter;
function StmTwoVarsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "twovars",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Chapter 2 · sections 2.3–2.5",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Two variables at ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-violet",
                                children: "once"
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 570,
                                columnNumber: 32
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "Crosstabulations with their row and column percentages, the paradox hiding inside aggregated tables, scatter diagrams with trendlines, side-by-side and stacked bars — and the craft rules for every chart you will ever show a manager."
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 566,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "01",
                    title: "Crosstabulation",
                    sub: "One variable categorical and the other quantitative — or both of either"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 576,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CrossTabMachine, {}, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                        lineNumber: 578,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 577,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 grid gap-3 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmCallout"], {
                                kind: "insight",
                                title: "Insights from the counts",
                                children: [
                                    "The greatest number of homes in the sample (",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "19"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 583,
                                        columnNumber: 59
                                    }, this),
                                    ") are a ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "split-level"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 583,
                                        columnNumber: 76
                                    }, this),
                                    " ",
                                    "style priced at less than $250,000 · only ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "three"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 584,
                                        columnNumber: 57
                                    }, this),
                                    " homes are an A-Frame style priced at $250,000 or more. The left and top margin labels define the classes for the two variables."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 582,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 581,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmCallout"], {
                                kind: "warn",
                                title: "Simpson's paradox",
                                children: [
                                    "Data in two or more crosstabulations are often ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "aggregated"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 591,
                                        columnNumber: 62
                                    }, this),
                                    " to produce a summary crosstabulation — but be careful: conclusions based upon an aggregated crosstabulation can be ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "completely reversed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 593,
                                        columnNumber: 38
                                    }, this),
                                    " when we look at the unaggregated data. That reversal is called ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Simpson’s paradox"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 594,
                                        columnNumber: 45
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 590,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 589,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 580,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "02",
                    title: "Scatter diagram & trendline",
                    sub: "Do interceptions buy points? The Panthers say yes — mostly"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 599,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-start gap-4 md:grid-cols-[minmax(0,3fr)_minmax(0,4fr)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto rounded-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "warm-table",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "x — interceptions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 606,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "y — points scored"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 607,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 605,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                            lineNumber: 604,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: PANTHERS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "font-mono",
                                                            children: p.x
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                            lineNumber: 613,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "font-mono",
                                                            children: p.y
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                            lineNumber: 614,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                                            lineNumber: 610,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                    lineNumber: 603,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 602,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PanthersScatter, {}, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                    lineNumber: 621,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 620,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                        lineNumber: 601,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 600,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 grid gap-3 md:grid-cols-3",
                    children: [
                        "A scatter diagram is a graphical presentation of the relationship between two QUANTITATIVE variables — one on each axis.",
                        "The general pattern of the plotted points suggests the overall relationship; a trendline provides an approximation of it.",
                        "Panthers verdict: a positive relationship — higher points scored are associated with more interceptions — but NOT perfect; the points do not all sit on a straight line."
                    ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * 80,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-4 text-[.82rem] leading-relaxed text-muted-warm",
                                children: t
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 632,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 631,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 625,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "03",
                    title: "Side-by-side & stacked bars",
                    sub: "Comparing two variables on one display"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 637,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.9rem] font-bold text-[#3e2c1d]",
                                        children: "Side-by-side bar chart"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 641,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex h-40 items-end justify-around gap-3 border-b border-[#e6e0f8]",
                                        children: HOMES.styles.map((s, si)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-full items-end gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "w-5 rounded-t-md bg-[#e9e2fa]",
                                                        initial: {
                                                            height: 0
                                                        },
                                                        whileInView: {
                                                            height: `${HOMES.rows[0].counts[si] / 20 * 100}%`
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            delay: si * 0.08
                                                        },
                                                        title: `< $250,000: ${HOMES.rows[0].counts[si]}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 645,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "w-5 rounded-t-md bg-[#6d28d9]",
                                                        initial: {
                                                            height: 0
                                                        },
                                                        whileInView: {
                                                            height: `${HOMES.rows[1].counts[si] / 20 * 100}%`
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            delay: si * 0.08 + 0.15
                                                        },
                                                        title: `≥ $250,000: ${HOMES.rows[1].counts[si]}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 653,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, s, true, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 644,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 642,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex justify-around gap-2",
                                        children: HOMES.styles.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[.62rem] font-bold text-[#6f5c8f]",
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 666,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 664,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[.8rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "Each ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "cluster"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 670,
                                                columnNumber: 22
                                            }, this),
                                            " represents one value of the first variable; each bar within a cluster represents one value of the second (light = < $250K, dark = ≥ $250K)."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 669,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 640,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 639,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.9rem] font-bold text-[#3e2c1d]",
                                        children: "Stacked bar chart — percent frequencies"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 677,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex h-40 items-end justify-around gap-3 border-b border-[#e6e0f8]",
                                        children: HOMES.styles.map((s, si)=>{
                                            const lo = HOMES.rows[0].counts[si] / HOMES.colTotals[si] * 100;
                                            const hi = 100 - lo;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-full w-10 flex-col justify-end overflow-hidden rounded-t-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "w-full bg-[#6d28d9]",
                                                        initial: {
                                                            height: 0
                                                        },
                                                        whileInView: {
                                                            height: `${hi}%`
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            delay: si * 0.1
                                                        },
                                                        title: `≥ $250K: ${hi.toFixed(0)}%`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 684,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "w-full bg-[#e9e2fa]",
                                                        initial: {
                                                            height: 0
                                                        },
                                                        whileInView: {
                                                            height: `${lo}%`
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            delay: si * 0.1
                                                        },
                                                        title: `< $250K: ${lo.toFixed(0)}%`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 692,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, s, true, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 683,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 678,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex justify-around gap-2",
                                        children: HOMES.styles.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[.62rem] font-bold text-[#6f5c8f]",
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 706,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 704,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[.8rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "Each bar is ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "broken into rectangular segments"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 710,
                                                columnNumber: 29
                                            }, this),
                                            " of a different color — and if percentage frequencies are displayed, all bars have the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "same height"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 711,
                                                columnNumber: 73
                                            }, this),
                                            ", extending to the 100% mark."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 709,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 676,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 675,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 638,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "04",
                    title: "Data visualization — best practices",
                    sub: "Creating effective graphical displays is as much art as it is science"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 718,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.92rem] font-extrabold text-[#3e2c1d]",
                                        children: "Five guidelines"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 722,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "mt-3 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "1."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Give the display a clear and concise title."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 724,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "2."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 725,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Keep the display simple."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 725,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "3."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 726,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Clearly label each axis and provide the units of measure."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 726,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "4."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 727,
                                                        columnNumber: 21
                                                    }, this),
                                                    " If colors are used, make sure they are distinct."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 727,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "5."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                        lineNumber: 728,
                                                        columnNumber: 21
                                                    }, this),
                                                    " If multiple colors or line types are used, provide a legend."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 728,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 723,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[.8rem] leading-relaxed text-muted-warm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Data visualization"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 731,
                                                columnNumber: 17
                                            }, this),
                                            " is the use of graphical displays to summarize and present information about a data set — the goal is to communicate as effectively and clearly as possible the key information about the data."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 730,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 721,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 720,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2 text-[.92rem] font-extrabold text-[#3e2c1d]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                                className: "h-4 w-4",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_G"][700]
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 740,
                                                columnNumber: 17
                                            }, this),
                                            " Data dashboards"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 739,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "A widely used data visualization tool: it organizes and presents",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "key performance indicators (KPIs)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 744,
                                                columnNumber: 17
                                            }, this),
                                            " used to monitor an organization or process — timely summary information that is easy to read, understand, and interpret (like Groupon’s call-center dashboard: call volume, time breakdown, unresolved cases > 15 minutes, volumes by office, time to resolve a case)."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 742,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-3 space-y-1.5 text-[.84rem] leading-relaxed text-muted-warm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "· Minimize the need for screen scrolling"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 751,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "· Avoid unnecessary use of color or 3D displays"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 752,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "· Use borders between charts to improve readability"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 753,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 750,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[.8rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "Choosing the display: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "show distribution"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 756,
                                                columnNumber: 39
                                            }, this),
                                            " — bar, pie, dot plot, histogram, stem-and-leaf · ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "make comparisons"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 757,
                                                columnNumber: 33
                                            }, this),
                                            " — side-by-side, stacked ·",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "show relationships"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                                lineNumber: 758,
                                                columnNumber: 17
                                            }, this),
                                            " — scatter diagram, trendline."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts3.tsx",
                                        lineNumber: 755,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 738,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 737,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 719,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "05",
                    title: "Concept checks — two variables & visualization",
                    sub: "The deck's checks, answered"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 764,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmQuiz"], {
                                source: "Concept check 4 · Q1 — answer key: b",
                                q: "In a scatter diagram, a line that provides an approximation of the relationship between the variables is known as a ______ line.",
                                options: [
                                    "determination",
                                    "trend",
                                    "control",
                                    "zero-bias"
                                ],
                                answer: 1,
                                explain: "The trendline."
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 767,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 766,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmQuiz"], {
                                source: "Concept check 3 · Q4 — answer key: a",
                                q: "Before drawing any conclusions about the relationship between two variables shown in a crosstabulation, you should…",
                                options: [
                                    "investigate whether any hidden variables could affect the conclusions",
                                    "construct a scatter diagram and find the trendline",
                                    "develop a relative frequency distribution",
                                    "construct a dot plot and look for significant gaps"
                                ],
                                answer: 0,
                                explain: "Hidden variables first — that is the habit that catches Simpson's paradox before it catches you."
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 776,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 775,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmQuiz"], {
                                source: "Concept check 5 · Q3 + Q4 — answer key: c / d",
                                q: "In quality control applications, a bar chart arranged in descending order of height with the most frequently occurring cause first is called a ______; and the graphical tool typically associated with the display of key performance indicators is a ______.",
                                options: [
                                    "cause-and-effect diagram · stacked bar chart",
                                    "ogive · stem-and-leaf display",
                                    "Pareto diagram · data dashboard",
                                    "stacked bar chart · crosstabulation"
                                ],
                                answer: 2,
                                explain: "Pareto diagram; data dashboard."
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts3.tsx",
                                lineNumber: 785,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts3.tsx",
                            lineNumber: 784,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 765,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Crosstabulations work for ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "any mix"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                    lineNumber: 797,
                                    columnNumber: 41
                                }, void 0),
                                " of categorical/quantitative variables — the margins define the classes."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Row % answers “within this price band…”, column % answers “within this style…” — and ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "aggregation can reverse the story"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                    lineNumber: 798,
                                    columnNumber: 124
                                }, void 0),
                                " (Simpson’s paradox)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Dashboards: KPIs up front, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "no scrolling"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                                    lineNumber: 799,
                                    columnNumber: 42
                                }, void 0),
                                ", no 3D, borders between charts."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts3.tsx",
                    lineNumber: 795,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/stm/StmParts3.tsx",
            lineNumber: 565,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/stm/StmParts3.tsx",
        lineNumber: 564,
        columnNumber: 5
    }, this);
}
_c5 = StmTwoVarsSection;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "HudsonHistogram");
__turbopack_context__.k.register(_c1, "HudsonDots");
__turbopack_context__.k.register(_c2, "StmQuantitativeSection");
__turbopack_context__.k.register(_c3, "CrossTabMachine");
__turbopack_context__.k.register(_c4, "PanthersScatter");
__turbopack_context__.k.register(_c5, "StmTwoVarsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_stm_StmParts3_tsx_db5981d8._.js.map