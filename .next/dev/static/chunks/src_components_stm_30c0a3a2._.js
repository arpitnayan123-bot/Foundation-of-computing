(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/stm/StmParts7.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StmBinomialSection",
    ()=>StmBinomialSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-dot.js [app-client] (ecmascript) <export default as CircleDot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/repeat.js [app-client] (ecmascript) <export default as Repeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$split$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Split$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/split.js [app-client] (ecmascript) <export default as Split>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stm/StmParts1.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
/* ============================================================
   CHAPTER 5 · MOVEMENT 2 — BINOMIAL · POISSON · HYPERGEOMETRIC
   ============================================================ */ function EvansTree() {
    // 1st worker leaves/stays → 2nd → 3rd; x counts successes
    const nodes = [
        {
            x: 150,
            y: 46,
            p: "Leaves (.1)"
        },
        {
            x: 150,
            y: 172,
            p: "Stays (.9)"
        },
        {
            x: 320,
            y: 16,
            from: 0,
            p: "L (.1)"
        },
        {
            x: 320,
            y: 64,
            from: 0,
            p: "S (.9)"
        },
        {
            x: 320,
            y: 142,
            from: 1,
            p: "L (.1)"
        },
        {
            x: 320,
            y: 202,
            from: 1,
            p: "S (.9)"
        }
    ];
    const leaves = [
        {
            x: 500,
            y: 6,
            from: 2,
            xp: "x = 3",
            prob: ".0010"
        },
        {
            x: 500,
            y: 38,
            from: 2,
            xp: "x = 2",
            prob: ".0090"
        },
        {
            x: 500,
            y: 78,
            from: 3,
            xp: "x = 2",
            prob: ".0090"
        },
        {
            x: 500,
            y: 110,
            from: 4,
            xp: "x = 2",
            prob: ".0090"
        },
        {
            x: 500,
            y: 142,
            from: 3,
            xp: "x = 1",
            prob: ".0810",
            hot: true
        },
        {
            x: 500,
            y: 174,
            from: 4,
            xp: "x = 1",
            prob: ".0810",
            hot: true
        },
        {
            x: 500,
            y: 206,
            from: 5,
            xp: "x = 1",
            prob: ".0810",
            hot: true
        },
        {
            x: 500,
            y: 238,
            from: 5,
            xp: "x = 0",
            prob: ".7290"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 640 262",
        className: "h-auto w-full",
        role: "img",
        "aria-label": "Evans Electronics tree diagram: three workers each leave with probability 0.1 or stay with 0.9; the three paths giving exactly one departure each carry probability 0.0810, totalling 0.243",
        children: [
            [
                {
                    x1: 120,
                    y1: 16,
                    x2: 120,
                    y2: 246
                },
                {
                    x1: 292,
                    y1: 4,
                    x2: 292,
                    y2: 250
                },
                {
                    x1: 472,
                    y1: 4,
                    x2: 472,
                    y2: 250
                }
            ].map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: l.x1,
                    y1: l.y1,
                    x2: l.x2,
                    y2: l.y2,
                    stroke: "#c4b5fd",
                    strokeWidth: "2",
                    strokeDasharray: "5 5"
                }, i, false, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)),
            nodes.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                            x1: n.from === undefined ? 118 : nodes[n.from].x + 6,
                            y1: n.from === undefined ? 128 : nodes[n.from].y + 8,
                            x2: n.x - 6,
                            y2: n.y + 8,
                            stroke: "#7c3aed",
                            strokeWidth: "1.8",
                            initial: {
                                pathLength: 0
                            },
                            whileInView: {
                                pathLength: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.45,
                                delay: i * 0.1
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: n.x,
                            cy: n.y + 8,
                            r: "4",
                            fill: "#8b5cf6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: n.x + 8,
                            y: n.y + 4,
                            fontSize: "11.5",
                            fontWeight: "600",
                            fill: "#4c3a80",
                            children: n.p
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, `n-${i}`, true, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)),
            leaves.map((l, i)=>{
                const src = nodes[l.from];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                            x1: src.x + 6,
                            y1: src.y + 8,
                            x2: l.x - 6,
                            y2: l.y + 8,
                            stroke: l.hot ? "#b3402c" : "#7c3aed",
                            strokeWidth: l.hot ? 2.2 : 1.6,
                            initial: {
                                pathLength: 0
                            },
                            whileInView: {
                                pathLength: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4,
                                delay: 0.5 + i * 0.08
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: l.x,
                            y: l.y + 4,
                            fontSize: "11.5",
                            fontWeight: l.hot ? 800 : 600,
                            fill: l.hot ? "#b3402c" : "#3e2c1d",
                            children: [
                                l.xp,
                                " · ",
                                l.prob
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this)
                    ]
                }, `l-${i}`, true, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "60",
                y: "258",
                fontSize: "10.5",
                fill: "#8a7fae",
                children: "1st Worker"
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts7.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "238",
                y: "258",
                fontSize: "10.5",
                fill: "#8a7fae",
                children: "2nd Worker"
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts7.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "416",
                y: "258",
                fontSize: "10.5",
                fill: "#8a7fae",
                children: "3rd Worker → outcomes"
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts7.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stm/StmParts7.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = EvansTree;
function StmBinomialSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "binomial",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Chapter 5 · sections 5.5–5.7",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "The three ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-violet",
                                children: "workhorses"
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 105,
                                columnNumber: 25
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "Binomial counts successes across identical independent trials; Poisson counts arrivals over an interval; hypergeometric samples without replacement. Each comes with its own probability function — and its own signature identity."
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "01",
                    title: "Binomial — four properties",
                    sub: "Identical trials · success/failure · constant p · independence"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
                    children: [
                        {
                            i: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"],
                            t: "1 · n identical trials",
                            d: "The experiment consists of a sequence of n identical trials."
                        },
                        {
                            i: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$split$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Split$3e$__["Split"],
                            t: "2 · Two outcomes",
                            d: "Success and failure are possible on each trial."
                        },
                        {
                            i: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDot$3e$__["CircleDot"],
                            t: "3 · Constant p",
                            d: "The probability of success p does not change from trial to trial — the stationarity assumption."
                        },
                        {
                            i: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"],
                            t: "4 · Independence",
                            d: "The trials are independent."
                        }
                    ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * 80,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md",
                                        style: {
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_BTN_GRAD"]
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(c.i, {
                                            className: "h-4.5 w-4.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[.86rem] font-extrabold leading-tight text-[#3e2c1d]",
                                        children: c.t
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[.76rem] leading-relaxed text-muted-warm",
                                        children: c.d
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this)
                        }, c.t, false, {
                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmPanel"], {
                        label: "The binomial probability function — anatomy",
                        children: `          n!
f(x) = ──────────── · pˣ (1 − p)⁽ⁿ⁻ˣ⁾
       x!(n − x)!

└──────── number of experimental outcomes
          providing exactly x successes in n trials ────────┘

└── probability of a particular sequence of trial
    outcomes with x successes in n trials ──┘

where: x = number of successes · p = probability of success
on one trial · n = number of trials · n! = n(n−1)(n−2)…(2)(1)`
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "02",
                    title: "Evans Electronics — the tree",
                    sub: "p = 0.1 turnover, n = 3 employees, P(exactly 1 leaves)?"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-warm overflow-hidden p-4 sm:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EvansTree, {}, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-[.82rem] leading-relaxed text-muted-warm",
                                children: [
                                    "Three sequences give one success — (S,F,F), (F,S,F), (F,F,S) — each worth (0.1)(0.9)(0.9) = ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "0.081"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 153,
                                        columnNumber: 33
                                    }, this),
                                    ", so f(1) = ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "0.243"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 153,
                                        columnNumber: 57
                                    }, this),
                                    ". Or by formula: f(1) = [3!/(1!·2!)]·(0.1)¹(0.9)² = 3(0.081). The tree’s full column: f(0) = .7290, f(1) = .2430, f(2) = .0270, f(3) = .0010 — summing to 1."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 grid gap-3 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmPanel"], {
                                label: "Binomial summaries — Evans",
                                children: `E(x)  = μ  = np          = 3(.1) = 0.3 employees
Var(x) = σ² = np(1 − p)   = 3(.1)(.9) = 0.27
σ = √0.27 = 0.52 employees`
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmCallout"], {
                                kind: "insight",
                                title: "Tables are almost unnecessary",
                                children: [
                                    "Statisticians have developed binomial probability and cumulative probability tables (n = 3, x = 1, p = .10 → .2430), but with modern calculators and statistical software packages, such tables are almost unnecessary — Excel’s",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "=BINOM.DIST(x, n, p, FALSE/TRUE)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this),
                                    " computes both."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "03",
                    title: "Poisson — occurrences per interval",
                    sub: "Time or space, no upper limit, and μ = σ²"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 177,
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
                                        className: "flex items-center gap-2 text-[.92rem] font-extrabold text-[#3e2c1d]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                className: "h-4 w-4",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_G"][700]
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this),
                                            " Two properties"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                        className: "mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "1."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 21
                                                    }, this),
                                                    " The probability of an occurrence is the same for any two intervals of equal length."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "2."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 21
                                                    }, this),
                                                    " The occurrence or nonoccurrence in any interval is independent of the occurrence or nonoccurrence in any other interval."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.82rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "The variable may assume an ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "infinite sequence"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                lineNumber: 189,
                                                columnNumber: 44
                                            }, this),
                                            " (x = 0, 1, 2, …); in practice f(x) eventually becomes approximately zero, so larger values are negligible."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmPanel"], {
                                        label: "Poisson probability function",
                                        children: `       μˣ e^(−μ)
f(x) = ─────────
          x!

μ = mean number of occurrences in the interval
e = 2.71828 · x! = x(x−1)(x−2)…(2)(1)`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmCallout"], {
                                        kind: "story",
                                        title: "Where Poisson lives",
                                        children: "Number of knotholes in 14 linear feet of pine board · vehicles arriving at a toll booth in one hour · Bell Labs used the Poisson distribution to model the arrival of phone calls."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-start gap-4 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmPanel"], {
                                label: "Mercy Hospital — worked",
                                children: `Patients arrive at the ER at 6 per hour on
weekend evenings. P(exactly 4 arrivals in
30 minutes)?

μ = 6/hour = 3 per half-hour · x = 4

f(4) = 3⁴ (2.71828)⁻³ / 4!
     = 0.1680`
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmCallout"], {
                                        kind: "insight",
                                        title: "The signature identity",
                                        children: [
                                            "For the Poisson distribution the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "mean and variance are equal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                lineNumber: 223,
                                                columnNumber: 50
                                            }, this),
                                            ": μ = σ². For the 30-minute periods, μ = σ² = ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                lineNumber: 224,
                                                columnNumber: 49
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-warm p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[.8rem] font-bold text-[#3e2c1d]",
                                                children: "Poisson probabilities — arrivals per 30 min"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex h-24 items-end gap-1.5",
                                                children: [
                                                    .05,
                                                    .149,
                                                    .224,
                                                    .224,
                                                    .168,
                                                    .101,
                                                    .05,
                                                    .022,
                                                    .008,
                                                    .003
                                                ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "flex-1 rounded-t-md",
                                                        style: {
                                                            background: "linear-gradient(180deg,#8b5cf6,#5b21b6)"
                                                        },
                                                        initial: {
                                                            height: 0
                                                        },
                                                        whileInView: {
                                                            height: `${p * 100 * 3}%`
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            delay: i * 0.06
                                                        },
                                                        title: `P(${i}) = ${p}`
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 flex gap-1.5",
                                                children: [
                                                    0,
                                                    1,
                                                    2,
                                                    3,
                                                    4,
                                                    5,
                                                    6,
                                                    7,
                                                    8,
                                                    9
                                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-1 text-center font-mono text-[.58rem] text-[#8a7fae]",
                                                        children: i
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                lineNumber: 242,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "04",
                    title: "Hypergeometric — sampling without replacement",
                    sub: "Trials NOT independent; p changes from trial to trial"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-start gap-4 lg:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmPanel"], {
                                        label: "The hypergeometric probability function",
                                        children: `       ⎛r⎞ ⎛N − r⎞
       ⎜ ⎟ ⎜     ⎟
       ⎝x⎠ ⎝n − x⎠
f(x) = ───────────          for 0 ≤ x ≤ r
         ⎛N⎞
         ⎝ ⎟
         ⎝n⎠   (i.e. C(r,x)·C(N−r,n−x) / C(N,n))

number of ways x successes can be selected from r
successes · n−x failures from N−r failures · all
divided by the ways n elements come from N.`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmCallout"], {
                                        kind: "why",
                                        title: "Validity",
                                        children: [
                                            "Only values of x where ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "x ≤ r"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                lineNumber: 269,
                                                columnNumber: 40
                                            }, this),
                                            " and ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "n − x ≤ N − r"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                lineNumber: 269,
                                                columnNumber: 57
                                            }, this),
                                            " are valid — otherwise the corresponding f(x) equals 0."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmCallout"], {
                                        kind: "story",
                                        title: "Neveready's batteries",
                                        children: "Bob Neveready removed two dead batteries from a flashlight and inadvertently mingled them with the two good replacements — four identical-looking batteries. He randomly selects two. P(both good)?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 274,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmPanel"], {
                                        label: "Worked — N = 4, r = 2, n = 2, x = 2",
                                        children: `f(2) = C(2,2)·C(2,0) / C(4,2)
     = (1)(1) / 6 = 0.167

E(x) = n(r/N) = 2(2/4) = 1
Var(x) = n(r/N)(1 − r/N)·(N−n)/(N−1)
       = 2(.5)(.5)(2/3) = 0.333`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmCallout"], {
                                        kind: "insight",
                                        title: "The binomial bridge",
                                        children: [
                                            "With p = r/N on the first trial: when the population size is large,",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "(N − n)/(N − 1) → 1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, this),
                                            ", so E(x) = np and Var(x) = np(1 − p) — a",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "hypergeometric distribution can be approximated by a binomial"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                                lineNumber: 288,
                                                columnNumber: 17
                                            }, this),
                                            " with probability of success p = r/N."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/stm/StmParts7.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmReadStep"], {
                    n: "05",
                    title: "In-class practice — the Excel sheet",
                    sub: "The chapter's own drills, with their hints"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmQuiz"], {
                                source: "Practice · Q5–Q6 — binomial",
                                q: "A process makes 3% defective parts; a sample of 5 is drawn. A salesperson contacts 8 customers daily with a 10% chance per sale. Compute P(x = 2) in each setting.",
                                options: [
                                    ".008 and .149",
                                    ".053 and .033",
                                    ".168 and .243",
                                    ".075 and .081"
                                ],
                                answer: 0,
                                explain: "Binomial both times: C(5,2)(.03)²(.97)³ ≈ .0082 (Excel =BINOM.DIST(2,5,.03,FALSE)); C(8,2)(.1)²(.9)⁶ ≈ .1488. Expected sales = np = 0.8; variance = np(1−p) = 0.72."
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmQuiz"], {
                                source: "Practice · Q7 — Poisson",
                                q: "A hospital admits an average of 7 patients per hour. For the next hour, which is P(exactly 7 arrivals)? And if the window widens to 2 hours, the new μ is…",
                                options: [
                                    ".149 · μ = 7",
                                    "about .149 · μ = 14",
                                    ".001 · μ = 49",
                                    ".5 · μ = 3.5"
                                ],
                                answer: 1,
                                explain: "f(7) = 7⁷e⁻⁷/7! ≈ .149 (Excel =POISSON.DIST(7,7,FALSE)). Widen the window and the mean doubles: μ = 14 per 2 hours — intervals of equal length carry equal means."
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmQuiz"], {
                                source: "Practice · Q10 — the decision",
                                q: "MNM Company's monthly demand: 0 / 1,000 / 2,000 / 3,000 / 4,000 units with probabilities .10 / .20 / .25 / .35 / .10. Each unit costs $8, sells for $10. The expected monthly demand is…",
                                options: [
                                    "2,150 units",
                                    "3,000 units",
                                    "2,000 units",
                                    "2,400 units"
                                ],
                                answer: 0,
                                explain: "E(x) = Σ x·f(x) = 0(.10) + 1,000(.20) + 2,000(.25) + 3,000(.35) + 4,000(.10) = 2,150 units. Var(x) = Σ(x − E(x))²·f(x) = 1,327,500, so σ ≈ 1,152. If management stocks the expected 2,150 but sells only 2,000, profit = 2,000($10) − 2,150($8) = $2,800 — expected value alone isn't the decision."
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmQuiz"], {
                                source: "Practice · Q2–Q4 — the laptop demand sheet",
                                q: "Daily laptop demand: 0–4 units with f(x) = .15 / .25 / .35 / .20 / .05. Verify it's a valid distribution, then E(x) and σ are…",
                                options: [
                                    "valid · E(x) = 1.75 · σ ≈ 1.09",
                                    "valid · E(x) = 2.00 · σ ≈ 1.10",
                                    "invalid · probabilities sum to 1.05",
                                    "valid · E(x) = 1.50 · σ ≈ 0.87"
                                ],
                                answer: 0,
                                explain: "Σf(x) = 1.00 and every f(x) ≥ 0 — valid. E(x) = Σ x·f(x) = 1.75 laptops/day; Var(x) = Σ(x − 1.75)²·f(x) = 1.1875 → σ ≈ 1.09 (Excel: =SUMPRODUCT(x, probs), then =SQRT). Also P(x ≥ 2) = .35 + .20 + .05 = .60 and P(x < 2) = .40."
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmQuiz"], {
                                source: "Practice · Q8 — acceptances",
                                q: "75% of students applying to a university are accepted; 18 applications are received. For acceptances, E(x) and σ — and P(exactly 8 REJECTED)…",
                                options: [
                                    "13.5 · 1.84 · ≈ .038",
                                    "13.5 · 3.37 · ≈ .076",
                                    "9.0 · 1.84 · ≈ .038",
                                    "13.5 · 1.84 · ≈ .229"
                                ],
                                answer: 0,
                                explain: "E(x) = np = 18(.75) = 13.5 acceptances; σ = √(np(1−p)) = √3.375 ≈ 1.84. Rejections flip the coin: B(18, .25) with f(8) = C(18,8)(.25)⁸(.75)¹⁰ ≈ .0376 (Excel =BINOM.DIST(8,18,.25,FALSE)). P(at least 6) and P(15 or more) use the cumulative form =BINOM.DIST.RANGE."
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 334,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmQuiz"], {
                                source: "Practice · Q9 — rate conversion",
                                q: "Shoppers enter a mall at 120 per hour. For a 5-minute interval the Poisson mean is… and P(exactly 5 shoppers between noon and 12:05 pm)…",
                                options: [
                                    "λ = 10 · ≈ .038",
                                    "λ = 120 · ≈ .038",
                                    "λ = 10 · ≈ .092",
                                    "λ = 24 · ≈ .066"
                                ],
                                answer: 0,
                                explain: "Rate conversion first: λ = 120 × (5/60) = 10 shoppers per 5 minutes. Then f(5) = 10⁵e⁻¹⁰/5! ≈ .0378 (Excel =POISSON.DIST(5,10,FALSE)). Widen the window to 10 minutes (5:00–5:10 pm) and λ doubles to 20 — P(at least 35) = 1 − P(x ≤ 34)."
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts7.tsx",
                                lineNumber: 343,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts7.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Binomial: 4 properties, f(x) = ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "C(n,x)pˣ(1−p)ⁿ⁻ˣ"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                                    lineNumber: 355,
                                    columnNumber: 46
                                }, void 0),
                                ", E = np, Var = np(1−p) — Evans: .243, .3, .27."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Poisson: arrivals per interval, f(x) = ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "μˣe^(−μ)/x!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                                    lineNumber: 356,
                                    columnNumber: 54
                                }, void 0),
                                ", and ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "μ = σ²"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                                    lineNumber: 356,
                                    columnNumber: 78
                                }, void 0),
                                " — Mercy’s f(4) = .1680."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Hypergeometric: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "no independence, changing p"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                                    lineNumber: 357,
                                    columnNumber: 31
                                }, void 0),
                                ", finite-population correction — Neveready’s 1/6; large N → binomial."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts7.tsx",
                    lineNumber: 353,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/stm/StmParts7.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/stm/StmParts7.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c1 = StmBinomialSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "EvansTree");
__turbopack_context__.k.register(_c1, "StmBinomialSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/stm/questions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   TEST MY KNOWLEDGE — Statistics for Managers question banks,
   one per chapter group (shelf 05 of The Atlas).
   Statistics is computed, not memorised — so the bank leans on
   mcq | output | short: pick the scale, compute the statistic,
   name the distribution, and check the number against the
   deck. Every figure below is taken straight from the lecture
   slides (Dr. Deepak Srivastav, IIT Jodhpur) and hand-checked:
   Hudson's $79 mean, Marada Inn's 20 guests, the apartment
   rents (x̄ = 590.80, s = 54.74), Bradley's 8 outcomes, Evans'
   0.243, Mercy Hospital's 0.1680, Pep Zone's 0.2033.
   ============================================================ */ __turbopack_context__.s([
    "STM_EXAM_BANKS",
    ()=>STM_EXAM_BANKS,
    "STM_EXAM_GROUPS",
    ()=>STM_EXAM_GROUPS,
    "STM_TOTAL_QUESTIONS",
    ()=>STM_TOTAL_QUESTIONS
]);
/* ------------------------------------------------------------
   GROUP 1 — DATA & DISPLAYS  (Ch 1 + Ch 2: data, scales,
             sources, inference, big data, and the tabular &
             graphical displays that summarise it all)
   ------------------------------------------------------------ */ const DISPLAYS = [
    {
        id: "d1",
        type: "mcq",
        q: "In a questionnaire, respondents are asked to mark their gender as male or female. The scale of measurement for gender is the ______ scale.",
        options: [
            "ordinal",
            "nominal",
            "ratio",
            "interval"
        ],
        answer: 1,
        explain: "Gender is a label or name used to identify an attribute of the element — that is the nominal scale. A nonnumeric label (Male/Female) or a numeric code (1/2) may be used; either way there is no order, no fixed interval and no true zero."
    },
    {
        id: "d2",
        type: "mcq",
        q: "Data are…",
        options: [
            "always numeric",
            "always non-numeric",
            "the raw material of statistics",
            "always categorical"
        ],
        answer: 2,
        explain: "Data are the facts and figures collected, analyzed, and summarized for presentation and interpretation — the raw material of statistics. Data can be numeric (quantitative) or non-numeric (categorical), so \u201Calways numeric\u201D and \u201Calways categorical\u201D both fail."
    },
    {
        id: "d3",
        type: "mcq",
        q: "The summaries of data, which may be tabular, graphical, or numerical, are referred to as ______ statistics.",
        options: [
            "inferential",
            "descriptive",
            "observational",
            "experimental"
        ],
        answer: 1,
        explain: "Descriptive statistics are tabular, graphical, and numerical summaries of data — like Hudson Auto's frequency table, histogram, and the $79 mean cost of parts. Inferential statistics is the different, later step: using sample data to make estimates and test hypotheses about a population."
    },
    {
        id: "d4",
        type: "mcq",
        q: "Statistical inference is…",
        options: [
            "the process of drawing inferences about the sample based on the characteristics of the population",
            "the same as descriptive statistics",
            "the process of drawing inferences about the population based on the information taken from the sample",
            "the same as a census"
        ],
        answer: 2,
        explain: "The arrow runs sample → population. Hudson examines a sample of 50 tune-up invoices (sample average $79) and uses it to estimate the average for ALL tune-ups — the population. Collecting data for the entire population would be a census; a census is the alternative to inference, not another name for it."
    },
    {
        id: "d5",
        type: "mcq",
        q: "Data collected at the same, or approximately the same, point in time are ______ data.",
        options: [
            "time series",
            "approximate time series",
            "cross-sectional",
            "approximate"
        ],
        answer: 2,
        explain: "Cross-sectional data are collected at the same or approximately the same point in time — e.g., building permits issued in November 2013 in each county of Ohio. Time series data are collected over several time periods — e.g., permits in Lucas County for each of the last 36 months."
    },
    {
        id: "d6",
        type: "mcq",
        q: "The three V's of big data are…",
        options: [
            "Volume, Velocity, Variety",
            "Volume, Value, Verification",
            "Velocity, Vision, Variety",
            "Volume, Variance, Version"
        ],
        answer: 0,
        explain: "Volume — the amount of available data; Velocity — the speed at which data is collected and processed (Visa processes 6,800 payment transactions per second); Variety — different data types. Walmart captures data on 20–30 million transactions per day."
    },
    {
        id: "d7",
        type: "output",
        q: "Hudson Auto's parts costs run from $50 to $109. If we choose six classes, compute the approximate class width.",
        code: "Largest value  = 109\nSmallest value =  50\nClasses        =   6\n\nWidth = (109 − 50) / 6 = ?",
        answerText: "(109 − 50)/6 = 9.83 ≈ 10",
        explain: "Width = (largest − smallest)/number of classes = 59/6 = 9.83, rounded up to a convenient 10 — giving classes 50–59, 60–69, 70–79, 80–89, 90–99, 100–109 with frequencies 2, 13, 16, 7, 7, 5 (n = 50)."
    },
    {
        id: "d8",
        type: "short",
        q: "In one line each: what separates a histogram from a bar graph, and what does a trendline add to a scatter diagram?",
        answerText: "Histogram: rectangles drawn over class intervals of a QUANTITATIVE variable, with NO natural separation between adjacent rectangles (a bar graph's bars ARE separated, because each bar is a separate category of a qualitative variable).\nTrendline: an approximation of the relationship between the two variables shown in a scatter diagram.",
        explain: "The separation rule is the classic exam trap: bars separated = categories (bar chart); rectangles touching = intervals of a numeric variable (histogram). The trendline is the scatter diagram's approximation of the relationship."
    }
];
/* ------------------------------------------------------------
   GROUP 2 — NUMERICAL MEASURES  (Ch 3: location, variability,
             shape, outliers, five-number summaries, covariance
             and correlation — the apartment-rents laboratory)
   ------------------------------------------------------------ */ const MEASURES = [
    {
        id: "m1",
        type: "mcq",
        q: "A data set of annual incomes contains a few extremely large values. Which measure of central location should be preferred, and why?",
        options: [
            "The mean — it uses every observation",
            "The median — extreme values inflate the mean but not the middle value",
            "The mode — it ignores numbers entirely",
            "The geometric mean — it removes negatives"
        ],
        answer: 1,
        explain: "Whenever a data set has extreme values, the median is the preferred measure of central location — which is why the median is the location measure most often reported for annual income and property value data. A few extremely large incomes can inflate the mean."
    },
    {
        id: "m2",
        type: "output",
        q: "Seventy apartment rents were sampled in a college town; the sum of the 70 values is 41,356. Compute the sample mean.",
        code: "x̄ = Σxᵢ / n\n  = 41,356 / 70\n  = ?",
        answerText: "x̄ = 590.80",
        explain: "x̄ = Σxᵢ/n = 41,356/70 = 590.80 dollars per month. The sample mean x̄ is the point estimator of the population mean μ."
    },
    {
        id: "m3",
        type: "mcq",
        q: "In the 70-rent data set, the value 550 appears more often than any other value. 550 is the…",
        options: [
            "mean",
            "median",
            "mode",
            "third quartile"
        ],
        answer: 2,
        explain: "The mode is the value that occurs with greatest frequency — 550 in the rents data. (If exactly two modes occur the data are bimodal; more than two, multimodal.) The median is 575, the mean 590.80."
    },
    {
        id: "m4",
        type: "output",
        q: "Builder Ron Butler paid: Carpenter $21.60/hr for 520 h, Electrician $28.72/hr for 230 h, Laborer $11.80/hr for 410 h, Painter $19.75/hr for 270 h, Plumber $24.16/hr for 160 h. Compute the weighted mean wage.",
        code: "x̄ = Σwᵢxᵢ / Σwᵢ\n\nΣwᵢxᵢ = 11,232.0 + 6,605.6 + 4,838.0\n      + 5,332.5 + 3,865.6 = 31,873.7\nΣwᵢ   = 520 + 230 + 410 + 270 + 160 = 1,590",
        answerText: "x̄ = 31,873.7 / 1,590 = $20.05 (20.0464)",
        explain: "Weights = hours worked. The weighted mean $20.05 differs from the equally-weighted simple mean of $21.21 — the laborer's 410 hours pull the average toward $11.80. The weights depend on the application (credit hours in GPA, pounds, dollars, volume)."
    },
    {
        id: "m5",
        type: "mcq",
        q: "An investment returned −6%, −8%, −4%, +2% and +5.4% over five periods. Why is the geometric mean — not the arithmetic mean — the right average here?",
        options: [
            "The geometric mean ignores negative returns",
            "It gives the mean rate of change over successive periods; the arithmetic mean is misleading for growth rates",
            "It always produces a smaller number, which is safer",
            "The arithmetic mean cannot be computed with negative values"
        ],
        answer: 1,
        explain: "The geometric mean is the nth root of the product of n values: x̄g = [(0.94)(0.92)(0.96)(1.02)(1.054)]^(1/5) = 0.97752 → average growth of −2.248% per period. It should be applied anytime you want the mean rate of change over several successive periods (also populations, crop yields, pollution levels, birth/death rates)."
    },
    {
        id: "m6",
        type: "output",
        q: "For the 70 rents, compute the location of the 80th percentile (Lₚ), then the percentile itself, given the 56th value = 635 and the 57th value = 649.",
        code: "Lₚ = (p/100)(n + 1)\n  = (80/100)(70 + 1) = 56.8\n\n80th percentile = 635 + 0.8(649 − 635) = ?",
        answerText: "L₈₀ = 56.8;  80th percentile = 646.2",
        explain: "The 80th percentile is the 56th value plus 0.8 times the difference between the 57th and 56th values: 635 + 0.8(14) = 646.2. At least 80% of the rents are ≤ 646.2 and at least 20% are ≥ 646.2 (56/70 = 80%, 14/70 = 20%). Quartiles are specific percentiles: Q1 = 25th = 545, Q2 = median = 575, Q3 = 75th = 625."
    },
    {
        id: "m7",
        type: "mcq",
        q: "For the apartment rents, Q₁ = 545 and Q₃ = 625. The interquartile range (IQR) — and what it protects against — are…",
        options: [
            "IQR = 80; it is the range of the middle 50% and overcomes sensitivity to extreme values",
            "IQR = 190; it is the full range of the data",
            "IQR = 80; it counts the outliers on each side",
            "IQR = 1,170; it is Q₁ × Q₃"
        ],
        answer: 0,
        explain: "IQR = Q₃ − Q₁ = 625 − 545 = 80 — the range for the middle 50% of the data. The plain range (715 − 525 = 190) is the simplest measure but is very sensitive to the smallest and largest values; the IQR overcomes that sensitivity. It also sets the box plot's limits: 545 − 1.5(80) = 425 and 625 + 1.5(80) = 745 — no rents fall outside, so no outliers."
    },
    {
        id: "m8",
        type: "mcq",
        q: "For a bell-shaped distribution, the Empirical Rule says…",
        options: [
            "Exactly 50% of values fall within one standard deviation of the mean",
            "Approximately 68% within ±1σ, 95% within ±2σ, and almost all (99.7%) within ±3σ",
            "At least 75% within ±1σ for any distribution",
            "All values must lie within ±3σ of the mean"
        ],
        answer: 1,
        explain: "For bell-shaped data: ≈68% (68.26%) within ±1σ, ≈95% (95.44%) within ±2σ, almost all (99.72%) within ±3σ. Contrast Chebyshev's theorem, which works for ANY distribution but only guarantees at least 1 − 1/z² within z standard deviations (z > 1): 75% at z = 2, 89% at z = 3, 94% at z = 4."
    }
];
/* ------------------------------------------------------------
   GROUP 3 — PROBABILITY  (Ch 4: experiments, counting rules,
             assigning probabilities, events, the addition &
             multiplication laws, conditional probability,
             independence, and Bayes' theorem)
   ------------------------------------------------------------ */ const PROBABILITY = [
    {
        id: "p1",
        type: "mcq",
        q: "A random experiment is a process that generates well-defined experimental outcomes. The set of ALL experimental outcomes is called…",
        options: [
            "an event",
            "the sample space",
            "a sample point",
            "the population"
        ],
        answer: 1,
        explain: "The sample space is the set of all experimental outcomes; a single outcome is a sample point. Toss a coin → {Head, tail}; roll a die → {1,2,3,4,5,6}; play a football game → {win, lost, tie}. An EVENT is a collection of sample points — e.g., \u201CMarkley Oil is profitable\u201D."
    },
    {
        id: "p2",
        type: "output",
        q: "Bradley Investments holds two stocks. Markley Oil can finish a quarter in 4 ways (gain 10, gain 5, 0, lose 20) and Collins Mining in 2 ways (gain 8, lose 2). How many experimental outcomes does the two-step experiment have?",
        code: "Counting rule for multiple-step experiments:\n(n₁)(n₂)…(nₖ)\n\n= (4)(2) = ?",
        answerText: "(4)(2) = 8 outcomes",
        explain: "If an experiment consists of a sequence of k steps with n₁, n₂, … nₖ possible results, the total number of outcomes is (n₁)(n₂)…(nₖ) = 8 — the eight branches of the Bradley tree diagram, from (10, 8) = $18,000 gain down to (−20, −2) = $22,000 loss."
    },
    {
        id: "p3",
        type: "mcq",
        q: "Lucas Tool Rental's records for 40 days: 0 polishers on 4 days, 1 on 6 days, 2 on 18 days, 3 on 10 days, 4 on 2 days. Using the relative frequency method, P(2 polishers rented) = …",
        options: [
            "0.10",
            "0.25",
            "0.45",
            "0.18"
        ],
        answer: 2,
        explain: "Relative frequency assigns probability = frequency/total days: 18/40 = 0.45. The full distribution: 0.10, 0.15, 0.45, 0.25, 0.05 — which sums to exactly 1.00, as every valid probability assignment must."
    },
    {
        id: "p4",
        type: "mcq",
        q: "The two basic requirements for assigning probabilities to experimental outcomes are…",
        options: [
            "each probability between 0 and 1 inclusive, and the probabilities must sum to 1",
            "each probability a whole number, and the probabilities must sum to 100",
            "each probability at least 0.5, and the largest equals 1",
            "each probability equal, and the number of outcomes even"
        ],
        answer: 0,
        explain: "1. 0 ≤ P(Eᵢ) ≤ 1 for all i. 2. P(E₁) + P(E₂) + … + P(Eₙ) = 1. The classical method (equally likely outcomes — a die: 1/6 each), the relative frequency method (historical data — Lucas Tool Rental) and the subjective method (degree of belief — Bradley's analyst) all must satisfy these two requirements."
    },
    {
        id: "p5",
        type: "output",
        q: "An analyst's subjective probabilities for Bradley's outcomes: P(10,8)=0.20, P(10,−2)=0.08, P(5,8)=0.16, P(5,−2)=0.26. Event M = \u201CMarkley Oil is profitable\u201D. Compute P(M).",
        code: "M = {(10,8), (10,−2), (5,8), (5,−2)}\n\nP(M) = 0.20 + 0.08 + 0.16 + 0.26 = ?",
        answerText: "P(M) = 0.70",
        explain: "The probability of any event equals the sum of the probabilities of the sample points in the event. Similarly C (Collins profitable) = {(10,8),(5,8),(0,8),(−20,8)} → P(C) = 0.20+0.16+0.10+0.02 = 0.48."
    },
    {
        id: "p6",
        type: "mcq",
        q: "With P(M) = 0.70, P(C) = 0.48 and P(M ∩ C) = 0.36, the addition law gives P(M ∪ C) = …",
        options: [
            "1.18",
            "0.82",
            "0.34",
            "0.58"
        ],
        answer: 1,
        explain: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0.70 + 0.48 − 0.36 = 0.82. The subtraction removes the double-counted intersection {(10,8),(5,8)}. Only when A and B are mutually exclusive (P(A ∩ B) = 0) does the law collapse to P(A) + P(B)."
    },
    {
        id: "p7",
        type: "output",
        q: "Using the joint probability table: P(M ∩ C) = 0.36 and P(M) = 0.70. Compute the conditional probability P(C | M).",
        code: "P(C | M) = P(M ∩ C) / P(M)\n         = 0.36 / 0.70\n         = ?",
        answerText: "P(C | M) = 0.5143",
        explain: "Given Markley Oil is profitable, Collins Mining is profitable 51.43% of the time. The multiplication law runs the same wire backwards: P(M ∩ C) = P(M)·P(C|M) = (0.70)(0.5143) = 0.36 — the same intersection, computed the other way."
    },
    {
        id: "p8",
        type: "output",
        q: "L. S. Clothiers: prior P(A₁) = 0.7 that the town council approves a zoning change; the planning board recommends against it (event B) with P(B|A₁) = 0.2 and P(B|A₂) = 0.9. Compute the posterior P(A₁ | B).",
        code: "P(A₁|B) = P(A₁)P(B|A₁) / [P(A₁)P(B|A₁) + P(A₂)P(B|A₂)]\n        = (0.7)(0.2) / [(0.7)(0.2) + (0.3)(0.9)]\n        = 0.14 / 0.41 = ?",
        answerText: "P(A₁ | B) = 0.34 (0.3415)",
        explain: "Bayes' theorem revises the prior 0.70 down to the posterior 0.34 once the negative recommendation arrives — good news for L. S. Clothiers. The tabular approach: joint probabilities .14 and .27, sum P(B) = .41, posteriors .3415 and .6585 (sum 1.0000)."
    }
];
/* ------------------------------------------------------------
   GROUP 4 — DISCRETE DISTRIBUTIONS  (Ch 5: random variables,
             probability functions, expected value & variance,
             bivariate distributions, binomial, Poisson,
             hypergeometric)
   ------------------------------------------------------------ */ const DISCRETE = [
    {
        id: "k1",
        type: "mcq",
        q: "Which of the following random variables is CONTINUOUS?",
        options: [
            "Number of customers entering a store per day",
            "Weight of a randomly selected student",
            "Number of defective items in a batch of 50",
            "Number of TVs sold at JSL Appliances in one day"
        ],
        answer: 1,
        explain: "A continuous random variable may assume any numerical value in an interval or collection of intervals — like weight, or distance from home to a store. Counts (customers, defectives, TVs sold, family size, dependents on a tax return) are discrete: finite values or an infinite sequence like 0, 1, 2, …"
    },
    {
        id: "k2",
        type: "mcq",
        q: "The required conditions for a valid discrete probability function f(x) are…",
        options: [
            "f(x) ≥ 0 and Σf(x) = 1",
            "f(x) > 1 for at least one x, and Σf(x) = 100",
            "f(x) ≤ 0 and Σf(x) = 0",
            "f(x) = 1/n for every x, always"
        ],
        answer: 0,
        explain: "f(x) ≥ 0 for every value, and the sum of f(x) over all values equals 1. JSL Appliances' TV-sales distribution (.40, .25, .20, .05, .10) passes both checks. f(x) = 1/n is a special case — the discrete uniform distribution, where every value is equally likely."
    },
    {
        id: "k3",
        type: "output",
        q: "JSL Appliances' daily TV sales: f(0)=.40, f(1)=.25, f(2)=.20, f(3)=.05, f(4)=.10. Compute the expected number of TVs sold in a day.",
        code: "E(x) = Σ x·f(x)\n     = 0(.40) + 1(.25) + 2(.20) + 3(.05) + 4(.10)\n     = 0 + .25 + .40 + .15 + .40 = ?",
        answerText: "E(x) = μ = 1.20 TVs per day",
        explain: "The expected value is a weighted average of the values the random variable may assume, weighted by the probabilities — and it does NOT have to be a value the variable can actually take (1.20 is not a possible sales count). Variance: σ² = Σ(x−μ)²f(x) = 1.660, so σ = 1.2884 TVs."
    },
    {
        id: "k4",
        type: "mcq",
        q: "Four properties define a binomial experiment. Which of the following is NOT one of them?",
        options: [
            "The experiment consists of a sequence of n identical trials",
            "Two outcomes, success and failure, are possible on each trial",
            "The probability of success changes from trial to trial",
            "The trials are independent"
        ],
        answer: 2,
        explain: "Property 3 is the OPPOSITE: the probability of success p does NOT change from trial to trial (the stationarity assumption). The four: n identical trials; success/failure on each; constant p; independent trials. Hypergeometric settings are the ones where p changes and trials are not independent."
    },
    {
        id: "k5",
        type: "output",
        q: "Evans Electronics sees 10% annual turnover: any hourly employee has p = 0.1 of leaving. Three employees are chosen at random. Compute P(exactly 1 leaves).",
        code: "f(x) = n! / [x!(n−x)!] · pˣ(1−p)⁽ⁿ⁻ˣ⁾\n\nf(1) = 3!/(1!·2!) · (0.1)¹(0.9)²\n     = 3 · (0.1)(0.81) = ?",
        answerText: "f(1) = 0.243",
        explain: "Three sequences give one success — (S,F,F), (F,S,F), (F,F,S) — each with probability (0.1)(0.9)(0.9) = 0.081, totalling 0.243. The tree diagram: f(3)=.0010, f(2)=.0270, f(1)=.2430, f(0)=.7290. Binomial summaries: E(x) = np = 0.3, Var(x) = np(1−p) = 0.27, σ = 0.52."
    },
    {
        id: "k6",
        type: "mcq",
        q: "A salesperson contacts 8 potential customers per day with a 10% chance of a sale on each. The expected number of sales, the variance and the standard deviation are…",
        options: [
            "E(x) = 0.8, Var(x) = 0.72, σ ≈ 0.85",
            "E(x) = 8, Var(x) = 0.1, σ ≈ 0.32",
            "E(x) = 0.8, Var(x) = 0.08, σ ≈ 0.28",
            "E(x) = 0.1, Var(x) = 0.8, σ ≈ 0.89"
        ],
        answer: 0,
        explain: "Binomial with n = 8, p = 0.1: E(x) = np = 0.8 sales per day; Var(x) = np(1−p) = 8(.1)(.9) = 0.72; σ = √0.72 ≈ 0.85. The same three formulas gave Evans Electronics 0.3, 0.27 and 0.52 for n = 3."
    },
    {
        id: "k7",
        type: "output",
        q: "Patients arrive at Mercy Hospital's emergency room at an average rate of 6 per hour on weekend evenings. Compute the probability of exactly 4 arrivals in 30 minutes.",
        code: "μ = 6/hour = 3 per half-hour;  x = 4\n\nf(x) = μˣe^(−μ) / x!\n     = 3⁴(2.71828)⁻³ / 4! = ?",
        answerText: "f(4) = 0.1680",
        explain: "Poisson: occurrences over a specified interval of time or space, with equal-length intervals equally likely and independent. Two properties, and one signature identity: the mean equals the variance — μ = σ² = 3 for the 30-minute periods."
    },
    {
        id: "k8",
        type: "output",
        q: "Bob Neveready mingled 2 dead batteries with 2 good ones and selects 2 of the 4 at random. Compute the probability both selected are good.",
        code: "f(x) = [C(r,x)·C(N−r, n−x)] / C(N,n)\n\nx = 2 good selected, n = 2 selected,\nN = 4 total, r = 2 good in total\n\nf(2) = [C(2,2)·C(2,0)] / C(4,2) = 1/6 = ?",
        answerText: "f(2) = 0.167 (1/6)",
        explain: "Hypergeometric: trials are NOT independent and p changes from trial to trial (each draw alters the population). Mean E(x) = n(r/N) = 2(2/4) = 1; variance uses the finite-population correction (N−n)/(N−1) = 2/3 → 0.333. When N is large, (N−n)/(N−1) → 1 and the hypergeometric collapses into the binomial with p = r/N."
    }
];
/* ------------------------------------------------------------
   GROUP 5 — CONTINUOUS & SAMPLING  (Ch 6: uniform, normal,
             standard normal, exponential — plus the sampling
             practice set and the NICE Paper case)
   ------------------------------------------------------------ */ const CONTINUOUS = [
    {
        id: "c1",
        type: "mcq",
        q: "At Slater's Buffet, salad taken is uniformly distributed between 5 and 15 ounces, so f(x) = 1/10 on [5, 15]. P(12 ≤ x ≤ 15) = …",
        options: [
            "0.10",
            "0.30",
            "0.50",
            "0.70"
        ],
        answer: 1,
        explain: "Probability = area = height × base = (1/10)(15 − 12) = 0.3. For a uniform distribution E(x) = (a+b)/2 = 10 ounces and Var(x) = (b−a)²/12 = 100/12 = 8.33. Probability is the area under the density curve between x₁ and x₂ — for every continuous random variable."
    },
    {
        id: "c2",
        type: "output",
        q: "Pep Zone's lead-time demand for motor oil is normal with μ = 15 gallons, σ = 6. The reorder point is 20 gallons. Convert x = 20 to a z-value.",
        code: "z = (x − μ) / σ\n  = (20 − 15) / 6\n  = ?",
        answerText: "z = 0.83",
        explain: "z measures the number of standard deviations x is from μ. Step 1 of the stockout problem: z = 5/6 = 0.83. Next the standard normal table gives P(z ≤ 0.83) = 0.7967, so the stockout probability P(z > 0.83) = 1 − 0.7967 = 0.2033."
    },
    {
        id: "c3",
        type: "mcq",
        q: "Continuing Pep Zone: the manager wants the stockout probability during lead time to be no more than 0.05. The reorder point should be…",
        options: [
            "20 gallons — no change needed",
            "x = μ + z₀.₀₅σ = 15 + 1.645(6) ≈ 24.87, rounded to 25 gallons",
            "x = μ − z₀.₀₅σ = 15 − 1.645(6) ≈ 5.13, rounded to 5 gallons",
            "Impossible to control the stockout probability"
        ],
        answer: 1,
        explain: "Work the standard normal table in reverse: cut off 0.05 in the right tail → cumulative area 0.95 → z₀.₀₅ = 1.645, then x = μ + z₀.₀₅σ = 15 + 1.645(6) = 24.87 → 25 gallons. Raising the reorder point from 20 to 25 drops the stockout chance from about .20 to .05. Excel: NORM.INV for x given a probability, NORM.DIST for probability given x."
    },
    {
        id: "c4",
        type: "mcq",
        q: "The normal curve's highest point sits at the mean — which is also the median and the mode — and the standard deviation controls…",
        options: [
            "the location of the curve along the x-axis",
            "the width: larger σ produces wider, flatter curves",
            "the total area under the curve",
            "the skewness of the curve"
        ],
        answer: 1,
        explain: "The family of normal distributions is defined by μ (location — it can be any numerical value, negative, zero or positive) and σ (width). The total area is always exactly 1 — 0.5 each side of the mean. Abraham de Moivre derived the normal distribution, published in The Doctrine of Chances, 1733."
    },
    {
        id: "c5",
        type: "output",
        q: "Time between car arrivals at Al's full-service pump is exponential with a mean of 3 minutes. Compute the probability that the time between two successive arrivals is 2 minutes or less.",
        code: "P(x ≤ x₀) = 1 − e^(−x₀/μ)\n\nP(x ≤ 2) = 1 − 2.71828^(−2/3)\n         = 1 − 0.5134 = ?",
        answerText: "P(x ≤ 2) = 0.4866",
        explain: "Exponential density f(x) = (1/μ)e^(−x/μ) for x ≥ 0; cumulative P(x ≤ x₀) = 1 − e^(−x₀/μ). Its signature properties: mean = standard deviation, skewness = 2 (skewed right). Pair it with Poisson: Poisson counts occurrences per interval; exponential describes the length of the interval between occurrences."
    },
    {
        id: "c6",
        type: "mcq",
        q: "The Poisson and exponential distributions are a matched pair. Which sentence states the pairing correctly?",
        options: [
            "Poisson describes the length of intervals; exponential counts occurrences per interval",
            "Poisson describes the number of occurrences per interval; exponential describes the length of the interval between occurrences",
            "Both describe counts; they just use different formulas",
            "Both describe times; one is for hours, one for minutes"
        ],
        answer: 1,
        explain: "Poisson → how many arrivals in an interval (vehicles at a toll booth per hour, knotholes in 14 linear feet of pine board, Bell Labs' phone calls). Exponential → how long until the next one (service time in waiting-line applications, time to complete a questionnaire, distance between major defects in a highway)."
    },
    {
        id: "c7",
        type: "mcq",
        q: "A production process makes 3% defective parts; a sample of 5 is selected. Why is this a binomial setting, and what is P(x = 2)?",
        options: [
            "Because trials are dependent; f(2) = 0.001",
            "Because n = 5 identical trials, success = defective with constant p = .03, independent trials; f(2) = C(5,2)(.03)²(.97)³ ≈ 0.008",
            "Because p changes each draw; f(2) = 0.053",
            "Because the interval is fixed; f(2) = 0.168"
        ],
        answer: 1,
        explain: "All four binomial properties hold: 5 identical trials, success/failure, p = .03 constant (stationarity), independence. f(2) = [5!/(2!3!)](.03)²(.97)³ = 10 × .0009 × .9127 ≈ .0082. Excel check: =BINOM.DIST(2, 5, 0.03, FALSE)."
    },
    {
        id: "c8",
        type: "mcq",
        q: "NICE Paper's plantation holds 1,000,000 trees; foresters measure 500 sampled trees and find an average timber volume of 0.4 cubic metres. The 0.4 is…",
        options: [
            "the population mean — the true average of every tree",
            "the sample mean — used to estimate the population mean",
            "the sampling distribution of the mean",
            "a parameter, because it comes from a random sample"
        ],
        answer: 1,
        explain: "0.4 m³ is a statistic — the sample mean of the 500 selected trees — and it estimates the population mean, which would be too costly to measure across a million trees. Compute it from a population and it's a parameter; from a sample it's a sample statistic and serves as the point estimator. That is the whole logic of the sampling chapter."
    }
];
const STM_EXAM_BANKS = {
    displays: {
        group: "displays",
        title: "Data & Displays",
        subtitle: "Chapters 1–2 — what data is, where it comes from, and how to show it",
        topics: "Scales · sources · inference · big data · frequency tables · charts",
        questions: DISPLAYS
    },
    measures: {
        group: "measures",
        title: "Numerical Measures",
        subtitle: "Chapter 3 — the apartment-rents laboratory of location and spread",
        topics: "Mean · median · mode · percentiles · variance · z · box plots",
        questions: MEASURES
    },
    probability: {
        group: "probability",
        title: "Probability",
        subtitle: "Chapter 4 — counting, events, the laws, and Bayes' revision",
        topics: "Sample space · counting rules · addition & multiplication · Bayes",
        questions: PROBABILITY
    },
    discrete: {
        group: "discrete",
        title: "Discrete Distributions",
        subtitle: "Chapter 5 — random variables and the three workhorse distributions",
        topics: "E(x) & variance · binomial · Poisson · hypergeometric",
        questions: DISCRETE
    },
    continuous: {
        group: "continuous",
        title: "Continuous & Sampling",
        subtitle: "Chapter 6 (+7) — uniform, normal, exponential, and the sampling logic",
        topics: "Uniform · z-tables · reorder points · exponential · sampling",
        questions: CONTINUOUS
    }
};
const STM_EXAM_GROUPS = Object.keys(STM_EXAM_BANKS);
_c = STM_EXAM_GROUPS;
const STM_TOTAL_QUESTIONS = STM_EXAM_GROUPS.reduce(_c1 = (n, g)=>n + STM_EXAM_BANKS[g].questions.length, 0);
_c2 = STM_TOTAL_QUESTIONS;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "STM_EXAM_GROUPS");
__turbopack_context__.k.register(_c1, "STM_TOTAL_QUESTIONS$STM_EXAM_GROUPS.reduce");
__turbopack_context__.k.register(_c2, "STM_TOTAL_QUESTIONS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/stm/StmExamWindow.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StmExamWindow",
    ()=>StmExamWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* STM exam window — theme + engine shared (see notes/ExamEngine.tsx
   and notes/exam-themes.ts). The violet sigil marks shelf 05. */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stm/questions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ExamEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ExamEngine.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/exam-themes.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function StmExamWindow({ group, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ExamEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExamEngine"], {
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_EXAM_THEME"],
        bank: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_EXAM_BANKS"][group],
        draftId: group,
        onClose: onClose
    }, void 0, false, {
        fileName: "[project]/src/components/stm/StmExamWindow.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c = StmExamWindow;
var _c;
__turbopack_context__.k.register(_c, "StmExamWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/stm/StmApp.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/stm/StmApp.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_stm_30c0a3a2._.js.map