(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/notes/Part6.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DictsSection",
    ()=>DictsSection,
    "IfSection",
    ()=>IfSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/* Hidden setup — these loop demos continue the poll dictionary from the
   previous step; the runner recreates it so the Run matches the page. */ const POLL_PRE = `favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'rust',
    'phil': 'python',
    }`;
/* ---------- If section ---------- */ const TEST_OPS = [
    {
        op: "==",
        read: "is equal to"
    },
    {
        op: "!=",
        read: "is not equal to"
    },
    {
        op: ">",
        read: "greater than"
    },
    {
        op: "<",
        read: "less than"
    },
    {
        op: ">=",
        read: "greater than or equal to"
    },
    {
        op: "<=",
        read: "less than or equal to"
    }
];
/* Anatomy of an if statement — every part of the syntax, labeled. */ function IfAnatomy() {
    const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 780 320",
        className: "mx-auto w-full max-w-3xl",
        role: "img",
        "aria-label": "Anatomy of an if statement",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "24",
                y: "20",
                width: "356",
                height: "212",
                rx: "14",
                fill: "#2b1b10"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "48",
                cy: "42",
                r: "4.5",
                fill: "#be4a4a"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "64",
                cy: "42",
                r: "4.5",
                fill: "#d97706"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "80",
                cy: "42",
                r: "4.5",
                fill: "#7c9a3e"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "46",
                y: "82",
                fontFamily: mono,
                fontSize: "13.5",
                fill: "#e9d7bf",
                children: "age = 19"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "46",
                y: "116",
                fontFamily: mono,
                fontSize: "13.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                        fill: "#fb923c",
                        fontWeight: "800",
                        children: "if"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/Part6.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                        fill: "#f5deb0",
                        children: " age >= 18"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/Part6.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                        fill: "#e4674a",
                        fontWeight: "800",
                        children: ":"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/Part6.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "46",
                y: "132",
                width: "5",
                height: "20",
                rx: "2.5",
                fill: "#7c9a3e"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "62",
                y: "148",
                fontFamily: mono,
                fontSize: "13.5",
                fill: "#a3c76d",
                children: 'print("Old enough to vote!")'
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "46",
                y: "180",
                fontFamily: mono,
                fontSize: "13.5",
                fill: "#9a8168",
                children: 'print("This line always runs.")'
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "46",
                y: "212",
                fontFamily: mono,
                fontSize: "11",
                fill: "#6b5238",
                children: "# ← not indented, so it is OUTSIDE the if"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            [
                {
                    c: "#fb923c",
                    t: "the keyword if — announces a decision"
                },
                {
                    c: "#f5deb0",
                    t: "the condition — a question answered True or False"
                },
                {
                    c: "#e4674a",
                    t: "the colon — “an indented block follows”"
                },
                {
                    c: "#a3c76d",
                    t: "the body — 4-space indent = inside the if"
                },
                {
                    c: "#9a8168",
                    t: "no indent = outside — runs every time"
                }
            ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "420",
                            cy: 46 + i * 34,
                            r: "5.5",
                            fill: r.c
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "436",
                            y: 50 + i * 34,
                            fontSize: "12.5",
                            fill: "#2b2014",
                            children: r.t
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, r.t, true, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "24",
                y: "252",
                width: "356",
                height: "52",
                rx: "12",
                fill: "#eef3e2",
                stroke: "#b9cc8f"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "44",
                y: "273",
                fontSize: "12",
                fontWeight: "800",
                fill: "#4d6b1f",
                children: "condition True"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "44",
                y: "291",
                fontSize: "12",
                fill: "#4d6b1f",
                children: "→ the indented body runs"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "400",
                y: "252",
                width: "356",
                height: "52",
                rx: "12",
                fill: "#fdeeea",
                stroke: "#f0c1b4"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "420",
                y: "273",
                fontSize: "12",
                fontWeight: "800",
                fill: "#a13636",
                children: "condition False"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "420",
                y: "291",
                fontSize: "12",
                fill: "#a13636",
                children: "→ body skipped — Python moves on"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/Part6.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = IfAnatomy;
/* How Python walks an if-elif-else chain — classic True/False flowchart. */ function ChainWalk() {
    const rows = [
        {
            cy: 112,
            test: "age < 2 ?",
            hit: "baby",
            y: 94
        },
        {
            cy: 224,
            test: "age < 4 ?",
            hit: "toddler",
            y: 206
        },
        {
            cy: 336,
            test: "age < 13 ?",
            hit: "kid",
            y: 318
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 620 470",
        className: "mx-auto w-full max-w-xl",
        role: "img",
        "aria-label": "How Python walks an if-elif-else chain",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                    id: "cw-arr",
                    markerWidth: "8",
                    markerHeight: "8",
                    refX: "6",
                    refY: "3",
                    orient: "auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0,0 L7,3 L0,6 Z",
                        fill: "#8a5a22"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/Part6.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "146",
                y: "14",
                width: "150",
                height: "38",
                rx: "10",
                fill: "#3e2c1d"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "221",
                y: "38",
                textAnchor: "middle",
                fontSize: "12",
                fontWeight: "700",
                fill: "#fff7ec",
                children: "start · age = 15"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M221 52 L221 72",
                stroke: "#8a5a22",
                strokeWidth: "2",
                fill: "none",
                markerEnd: "url(#cw-arr)"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            rows.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `M221 ${r.cy - 40} L321 ${r.cy} L221 ${r.cy + 40} L121 ${r.cy} Z`,
                            fill: "#c2410c"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "221",
                            y: r.cy + 4,
                            textAnchor: "middle",
                            fontSize: "12",
                            fontWeight: "800",
                            fill: "#fff7ec",
                            children: r.test
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `M321 ${r.cy} L381 ${r.cy}`,
                            stroke: "#7c9a3e",
                            strokeWidth: "2",
                            fill: "none",
                            markerEnd: "url(#cw-arr)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "338",
                            y: r.cy - 8,
                            fontSize: "10.5",
                            fontWeight: "800",
                            fill: "#5c7a2a",
                            children: "True"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "385",
                            y: r.cy - 19,
                            width: "140",
                            height: "38",
                            rx: "10",
                            fill: "#7c9a3e"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "455",
                            y: r.cy + 5,
                            textAnchor: "middle",
                            fontSize: "12",
                            fontWeight: "700",
                            fill: "#fff7ec",
                            children: r.hit
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        i < rows.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: `M221 ${r.cy + 40} L221 ${r.cy + 72}`,
                                    stroke: "#8a5a22",
                                    strokeWidth: "2",
                                    fill: "none",
                                    markerEnd: "url(#cw-arr)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "233",
                                    y: r.cy + 62,
                                    fontSize: "10.5",
                                    fontWeight: "800",
                                    fill: "#a13636",
                                    children: "False"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : null
                    ]
                }, r.test, true, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M221 376 L221 398",
                stroke: "#8a5a22",
                strokeWidth: "2",
                fill: "none",
                markerEnd: "url(#cw-arr)"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "233",
                y: "392",
                fontSize: "10.5",
                fontWeight: "800",
                fill: "#a13636",
                children: "False"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "146",
                y: "402",
                width: "150",
                height: "38",
                rx: "10",
                fill: "#3e2c1d"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "221",
                y: "426",
                textAnchor: "middle",
                fontSize: "12",
                fontWeight: "700",
                fill: "#f5c889",
                children: "else → teenager"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "385",
                y: "402",
                width: "200",
                height: "38",
                rx: "10",
                fill: "#fbf3e3",
                stroke: "#e5c79d"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "485",
                y: "417",
                textAnchor: "middle",
                fontSize: "10",
                fill: "#7a5b39",
                children: "age 15: all three False"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "485",
                y: "431",
                textAnchor: "middle",
                fontSize: "10",
                fontWeight: "700",
                fill: "#8a4508",
                children: "→ else catches it"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "310",
                y: "465",
                textAnchor: "middle",
                fontSize: "11",
                fill: "#7a5b39",
                children: "check top → bottom · first True wins and runs · everything after is skipped"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/Part6.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c1 = ChainWalk;
function IfElseChainViz() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 640 250",
        className: "mx-auto w-full max-w-2xl",
        role: "img",
        "aria-label": "if-elif-else chain",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                    id: "ah2",
                    markerWidth: "8",
                    markerHeight: "8",
                    refX: "6",
                    refY: "3",
                    orient: "auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0,0 L7,3 L0,6 Z",
                        fill: "#8a5a22"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/Part6.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            [
                {
                    x: 80,
                    label: "if age < 2:",
                    body: "baby",
                    fill: "#7c9a3e",
                    y: 20
                },
                {
                    x: 250,
                    label: "elif age < 4:",
                    body: "toddler",
                    fill: "#d97706",
                    y: 20
                },
                {
                    x: 420,
                    label: "elif age < 13:",
                    body: "kid",
                    fill: "#ea580c",
                    y: 20
                },
                {
                    x: 560,
                    label: "else:",
                    body: "…",
                    fill: "#3e2c1d",
                    y: 20
                }
            ].map((n, i, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `M${n.x} ${n.y} L${n.x + 92} ${n.y} L${n.x + 76} ${n.y + 44} L${n.x - 16} ${n.y + 44} Z`,
                            fill: n.fill
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: n.x + 38,
                            y: n.y + 17,
                            textAnchor: "middle",
                            fontSize: "9.5",
                            fontWeight: "700",
                            fill: "#fff7ec",
                            children: n.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: n.x + 38,
                            y: n.y + 33,
                            textAnchor: "middle",
                            fontSize: "9",
                            fill: "#fde8cf",
                            children: n.body
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        i < arr.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `M${n.x + 88} ${n.y + 22} L${n.x + 130} ${n.y + 22} L${n.x + 130} ${n.y + 70} L${arr[i + 1].x - 24} ${n.y + 70} L${arr[i + 1].x - 24} ${n.y + 44}`,
                            stroke: "#8a5a22",
                            strokeWidth: "1.6",
                            fill: "none",
                            strokeDasharray: "4 4",
                            markerEnd: "url(#ah2)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, n.label, true, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "320",
                y: "130",
                textAnchor: "middle",
                fontSize: "10",
                fill: "#7a5b39",
                children: "conditions checked top → bottom · the FIRST True branch wins · the rest are skipped"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "320",
                y: "150",
                textAnchor: "middle",
                fontSize: "10",
                fill: "#7a5b39",
                children: "an elif only runs when everything above it was False"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            [
                [
                    "0–1",
                    "baby",
                    "#7c9a3e"
                ],
                [
                    "2–3",
                    "toddler",
                    "#d97706"
                ],
                [
                    "4–12",
                    "kid",
                    "#ea580c"
                ],
                [
                    "13–19",
                    "teenager",
                    "#b45309"
                ],
                [
                    "20–64",
                    "adult",
                    "#8a5a22"
                ],
                [
                    "65+",
                    "elder",
                    "#3e2c1d"
                ]
            ].map(([a, b, c], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: 20 + i * 100,
                            y: "185",
                            width: "96",
                            height: "40",
                            rx: "8",
                            fill: c
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 68 + i * 100,
                            y: "202",
                            textAnchor: "middle",
                            fontSize: "9.5",
                            fontWeight: "700",
                            fill: "#fff7ec",
                            children: [
                                a,
                                " yrs"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 68 + i * 100,
                            y: "216",
                            textAnchor: "middle",
                            fontSize: "9.5",
                            fill: "#fde8cf",
                            children: b
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, a, true, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/Part6.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_c2 = IfElseChainViz;
function IfSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "if",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Python · chapter 3",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "grad-text",
                            children: "if"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, void 0),
                        " statements — teaching code to decide"
                    ]
                }, void 0, true),
                lead: "Programs feel smart because they make choices: show this if the user is logged in, charge full price unless you're a student. This chapter is a four-step first-read path — see the shape, ask the question, build the chain, then meet the classic traps. Each step has one diagram that says it all."
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[.95rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "Think of an ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "if statement as a fork in the road"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 204,
                                    columnNumber: 25
                                }, this),
                                ". Python walks up to it, asks exactly one yes/no question (the ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "condition"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 205,
                                    columnNumber: 51
                                }, this),
                                "), and takes one path only —",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: " True"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                " steps into the indented body, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "False"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 206,
                                    columnNumber: 66
                                }, this),
                                " skips straight past it. That is the entire idea. Everything else in this chapter is just progressively better ways of asking that one question. Here is every piece of the syntax on one diagram:"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 rounded-2xl p-4",
                            style: {
                                background: "#fbf3e3",
                                border: "1px dashed #e5c79d"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IfAnatomy, {}, void 0, false, {
                                fileName: "[project]/src/components/notes/Part6.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                title: "voting.py — the smallest useful decision",
                                code: `age = 19
if age >= 18:
    print("You are old enough to vote!")
    print("Have you registered yet?")

print("(this line is not indented — it always runs)")`,
                                output: "You are old enough to vote!\nHave you registered yet?\n(this line is not indented — it always runs)",
                                note: "The condition age >= 18 is True, so both indented lines run. Set age = 17 and Python silently skips them — no error, it just takes the other path. Indentation IS the structure: 4 spaces say 'I belong to the if'."
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/Part6.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Conditional tests — asking yes/no questions",
                sub: "Every if begins with an expression that is True or False — master these six operators and the logic words"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: TEST_OPS.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "font-mono-warm font-bold",
                                            children: o.op
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/Part6.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        o.read
                                    ]
                                }, o.op, true, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 grid gap-5 lg:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                    title: "equality_tests.py",
                                    code: `car = 'subaru'
print("Is car == 'subaru'? I predict True.")
print(car == 'subaru')      # True

print("\\nIs car == 'audi'? I predict False.")
print(car == 'audi')        # False

# Remember: = assigns, == asks "are these equal?"

# Case matters — 'Audi' != 'audi'
car = 'Audi'
print(car == 'audi')              # False
print(car.lower() == 'audi')      # True  (normalize first!)

# != checks inequality
requested_topping = 'mushrooms'
if requested_topping != 'anchovies':
    print("Hold the anchovies!")`,
                                    output: "Is car == 'subaru'? I predict True.\nTrue\n\nIs car == 'audi'? I predict False.\nFalse\nFalse\nTrue\nHold the anchovies!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                    title: "numerical_and_logical.py",
                                    code: `# Numerical comparisons
age = 18
print(age == 18)      # True
print(age < 21)       # True
print(age >= 21)      # False

# Multiple conditions
age_0, age_1 = 22, 18
print(age_0 >= 21 and age_1 >= 21)   # False — both must hold
print(age_0 >= 21 or age_1 >= 21)    # True  — at least one

# Membership: in / not in
banned = ['andrew', 'carolina', 'david']
user = 'marie'
print(user not in banned)   # True

# Boolean expressions — a name for a value that is True/False
game_active = True
can_edit = False`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "if → if-else → the if-elif-else chain",
                sub: "One question is rarely enough — chain questions so exactly one branch runs"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-5 text-[.92rem] leading-relaxed text-[#2b2014]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "if-else"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this),
                                " covers two paths. The moment you need three or more, add",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: " elif"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this),
                                " (= “else-if”) blocks between them. Watch how Python walks the chain for ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "font-mono-warm font-bold",
                                    children: "age = 15"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 296,
                                    columnNumber: 17
                                }, this),
                                " — every test is a door; the first one that opens wins and the rest are never even looked at:"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl p-4",
                            style: {
                                background: "#fbf3e3",
                                border: "1px dashed #e5c79d"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChainWalk, {}, void 0, false, {
                                fileName: "[project]/src/components/notes/Part6.tsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid gap-5 lg:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                    title: "voting.py — if-else: two paths, always exactly one",
                                    code: `age = 17
if age >= 18:
    print("Old enough to vote.")
else:
    print("Sorry, you are too young to vote.")

# else needs NO condition — it is the
# catch-all path when everything above failed`,
                                    output: "Sorry, you are too young to vote.",
                                    note: "if-else guarantees exactly one of the two blocks runs. The else block never gets its own test — it is simply 'everything else'."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                    title: "alien_points.py — if-elif-else",
                                    code: `alien_color = 'yellow'   # try 'green' and 'red' too

if alien_color == 'green':
    points = 5
elif alien_color == 'yellow':
    points = 10
elif alien_color == 'red':
    points = 15
else:
    points = 0
print(f"You just earned {points} points!")`,
                                    output: "You just earned 10 points!",
                                    note: "Python runs ONLY the first branch whose condition is True — the chain is a series of exclusive doors. You can use as many elif blocks as needed, and you may omit the else entirely when a specific final condition is more precise than a catch-all."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 rounded-2xl p-4",
                            style: {
                                background: "#fbf3e3",
                                border: "1px dashed #e5c79d"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IfElseChainViz, {}, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-center text-[.8rem] text-[#7a5b39]",
                                    children: "The age bands as full-life mapping — notice each elif needs only one bound, because reaching it means every band above has already been ruled out."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid gap-5 lg:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                    title: "toppings.py — testing MULTIPLE conditions",
                                    code: `requested_toppings = ['mushrooms', 'extra cheese']

if 'mushrooms' in requested_toppings:
    print("Adding mushrooms.")
if 'pepperoni' in requested_toppings:
    print("Adding pepperoni.")
if 'extra cheese' in requested_toppings:
    print("Adding extra cheese.")

print("\\nFinished making your pizza!")`,
                                    output: "Adding mushrooms.\nAdding extra cheese.\n\nFinished making your pizza!",
                                    note: "An if-elif chain stops at the first match — it would have skipped the cheese! Use SEPARATE if statements when every relevant condition must run. Choosing between a chain and independent ifs is a real design decision."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                                            kind: "insight",
                                            title: "Independent vs exclusive",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "if-elif-else"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 17
                                                }, this),
                                                " = exactly one path runs (mutually exclusive: alien colors, life stages). ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Separate ifs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 56
                                                }, this),
                                                " = any number of paths may run (independent features: pizza toppings)."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/notes/Part6.tsx",
                                            lineNumber: 359,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                                            kind: "why",
                                            title: "Stage of life — the classic chain",
                                            children: "<2 baby · 2–3 toddler · 4–12 kid · 13–19 teenager · 20–64 adult · 65+ elder. Order matters: test from youngest to oldest, and each elif only needs one bound because earlier branches already failed."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/notes/Part6.tsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 292,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "4",
                title: "if meets lists — filtering the real world",
                sub: "Special items, empty-list guards, and case-insensitive checks — the patterns you'll write most"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 grid gap-5 lg:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                title: "special_items_and_empty.py",
                                code: `# Special items inside a loop
requested_toppings = ['mushrooms', 'green peppers', 'extra cheese']
for topping in requested_toppings:
    if topping == 'green peppers':
        print("Sorry, we are out of green peppers right now.")
    else:
        print(f"Adding {topping}.")

# Checking that a list is NOT empty
requested_toppings = []
if requested_toppings:            # empty list is False!
    for topping in requested_toppings:
        print(f"Adding {topping}.")
else:
    print("Are you sure you want a plain pizza?")`,
                                output: "Adding mushrooms.\nSorry, we are out of green peppers right now.\nAdding extra cheese.\n\nAre you sure you want a plain pizza?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/Part6.tsx",
                                lineNumber: 379,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                title: "unique_usernames.py — multiple lists",
                                code: `current_users = ['john', 'admin', 'maria', 'priya', 'sam']
new_users = ['MARIA', 'rahul', 'SAM', 'zoe', 'kiran']

for new_user in new_users:
    if new_user.lower() in [u.lower() for u in current_users]:
        print(f"Sorry, {new_user} — that name is taken.")
    else:
        print(f"Good news, {new_user} — the name is available.")`,
                                output: "Sorry, MARIA — that name is taken.\nGood news, rahul — the name is available.\nSorry, SAM — that name is taken.\nGood news, zoe — the name is available.\nGood news, kiran — the name is available.",
                                note: "Real systems compare case-insensitively: if 'John' exists, 'JOHN' must be rejected too — that’s why we lower() both sides before comparing."
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/Part6.tsx",
                                lineNumber: 398,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/Part6.tsx",
                        lineNumber: 378,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 377,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Concept check",
                            q: "Why use separate if statements instead of an if-elif chain for pizza toppings?",
                            options: [
                                "It looks cleaner",
                                "An elif chain stops at the first True — other valid toppings would be skipped",
                                "elif cannot be used with lists",
                                "Separate ifs run faster"
                            ],
                            answer: 1,
                            explain: "An if-elif chain is exclusive — only the first True branch runs. For independent conditions that may all be true (multiple toppings), use a series of independent if statements."
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 417,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/Part6.tsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Concept check",
                            q: "if requested_toppings: — what does this test when the list is empty?",
                            options: [
                                "True — an empty list is truthy",
                                "False — an empty list is falsy",
                                "SyntaxError",
                                "It depends on the toppings"
                            ],
                            answer: 1,
                            explain: "An empty list evaluates to False. That one line is the idiomatic Python guard for 'does the list actually contain anything?'"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 431,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/Part6.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Practice"], {
                    title: "Try It Yourself — if drills",
                    items: [
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Series of conditional tests with printed predictions (car = 'subaru' pattern) — at least 10 tests evaluating to True and False."
                            }, void 0, false)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "At least one True and one False for: string equality/inequality · lower() tests · numerical ",
                                    '==, !=, >, <, >=, <=',
                                    " · and / or · in a list · not in a list."
                                ]
                            }, void 0, true)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Alien color simple if: green → 5 points. Write one version that passes and one that fails (no output)."
                            }, void 0, false)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Alien if-else: green → 5 points, else → 10 points. One version runs the if block, another the else."
                            }, void 0, false)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Turn it into if-elif-else: green 5, yellow 10, red 15 — three versions, one per color."
                            }, void 0, false)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Stage of life: ",
                                    '<2 baby, <4 toddler, <13 kid, <20 teenager, <65 adult, 65+ elder',
                                    "."
                                ]
                            }, void 0, true)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "favorite_fruits: five independent if statements checking membership with ‘in’ — “You really like bananas!”"
                            }, void 0, false)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Usernames: special greeting for 'admin' (status report), generic greeting for everyone else."
                            }, void 0, false)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Add an if test for an empty user list → “We need to find some users!”; empty the list and verify."
                            }, void 0, false)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Unique usernames: current_users vs new_users, case-insensitive comparison."
                            }, void 0, false)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Ordinals: loop 1–9 printing 1st, 2nd, 3rd, then 4th…9th via an if-elif-else inside the loop."
                            }, void 0, false)
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 442,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 441,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Conditional tests always evaluate to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "True or False"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 463,
                                    columnNumber: 52
                                }, void 0),
                                "; ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "= assigns, == compares"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 463,
                                    columnNumber: 84
                                }, void 0),
                                "; normalize case with ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "lower()"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 463,
                                    columnNumber: 145
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "and"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 464,
                                    columnNumber: 15
                                }, void 0),
                                " requires both, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "or"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 464,
                                    columnNumber: 51
                                }, void 0),
                                " requires one; ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "in / not in"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 464,
                                    columnNumber: 85
                                }, void 0),
                                " test membership; booleans like ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    className: "font-mono-warm",
                                    children: "game_active"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 464,
                                    columnNumber: 145
                                }, void 0),
                                " name your states."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "if-elif-else"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 465,
                                    columnNumber: 15
                                }, void 0),
                                " chains pick exactly one path; ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "independent ifs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 465,
                                    columnNumber: 75
                                }, void 0),
                                " allow many; you can omit ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "else"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 465,
                                    columnNumber: 133
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "With lists: treat ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "special items"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 466,
                                    columnNumber: 33
                                }, void 0),
                                " inside loops, guard ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "empty lists"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 466,
                                    columnNumber: 84
                                }, void 0),
                                " with a truthiness check, and filter across ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "multiple lists"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 466,
                                    columnNumber: 156
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 461,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 460,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/Part6.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_c3 = IfSection;
/* ============================================================
   DICTIONARIES
   ============================================================ */ /* The core mental model — same data as a list (by position) and
   as a dictionary (by label). Wrapped in a light panel so the
   warm palette reads well on the dark section. */ function ListVsDict() {
    const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 780 300",
        className: "mx-auto w-full max-w-3xl",
        role: "img",
        "aria-label": "A list finds things by position, a dictionary by label",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "195",
                y: "34",
                textAnchor: "middle",
                fontSize: "14",
                fontWeight: "800",
                fill: "#8a4508",
                children: "a LIST — numbered shelf"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 486,
                columnNumber: 7
            }, this),
            [
                "'green'",
                "5",
                "'slow'"
            ].map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 72 + i * 108,
                            y: "68",
                            textAnchor: "middle",
                            fontSize: "11",
                            fontWeight: "700",
                            fill: "#a13636",
                            children: `[0]`.replace("0", String(i))
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 489,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: 40 + i * 108,
                            y: "78",
                            width: "90",
                            height: "46",
                            rx: "10",
                            fill: "#fff",
                            stroke: "#e0b98a",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 490,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 85 + i * 108,
                            y: "106",
                            textAnchor: "middle",
                            fontFamily: mono,
                            fontSize: "12.5",
                            fill: "#2b2014",
                            children: v
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 491,
                            columnNumber: 11
                        }, this)
                    ]
                }, v, true, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 488,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "195",
                y: "162",
                textAnchor: "middle",
                fontFamily: mono,
                fontSize: "12.5",
                fill: "#8a4508",
                children: "list[0] → 'green'"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "195",
                y: "188",
                textAnchor: "middle",
                fontSize: "11.5",
                fill: "#7a5b39",
                children: "you must REMEMBER what position 0,"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 495,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "195",
                y: "204",
                textAnchor: "middle",
                fontSize: "11.5",
                fill: "#7a5b39",
                children: "1, 2 … mean. Positions say nothing."
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 496,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M390 20 L390 275",
                stroke: "#e5c79d",
                strokeWidth: "1.5",
                strokeDasharray: "5 6"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 499,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "585",
                y: "34",
                textAnchor: "middle",
                fontSize: "14",
                fontWeight: "800",
                fill: "#8a4508",
                children: "a DICTIONARY — labeled drawers"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 502,
                columnNumber: 7
            }, this),
            [
                {
                    k: "'color'",
                    v: "'green'"
                },
                {
                    k: "'points'",
                    v: "5"
                },
                {
                    k: "'speed'",
                    v: "'slow'"
                }
            ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: 430 + i * 108,
                            y: "52",
                            width: "94",
                            height: "32",
                            rx: "8",
                            fill: "#8a4508"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 509,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 477 + i * 108,
                            y: "73",
                            textAnchor: "middle",
                            fontFamily: mono,
                            fontSize: "11.5",
                            fontWeight: "700",
                            fill: "#fde8cf",
                            children: p.k
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 510,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `M${477 + i * 108} 88 L${477 + i * 108} 106`,
                            stroke: "#8a5a22",
                            strokeWidth: "1.6",
                            fill: "none",
                            markerEnd: "url(#lvd-a)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 511,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: 430 + i * 108,
                            y: "110",
                            width: "94",
                            height: "46",
                            rx: "10",
                            fill: "#fff",
                            stroke: "#e0b98a",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 512,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 477 + i * 108,
                            y: "138",
                            textAnchor: "middle",
                            fontFamily: mono,
                            fontSize: "12.5",
                            fill: "#2b2014",
                            children: p.v
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 513,
                            columnNumber: 11
                        }, this)
                    ]
                }, p.k, true, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 508,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "585",
                y: "196",
                textAnchor: "middle",
                fontFamily: mono,
                fontSize: "12.5",
                fill: "#8a4508",
                children: "alien['color'] → 'green'"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 516,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "585",
                y: "222",
                textAnchor: "middle",
                fontSize: "11.5",
                fill: "#7a5b39",
                children: "the label IS the meaning — color is a"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "585",
                y: "238",
                textAnchor: "middle",
                fontSize: "11.5",
                fill: "#7a5b39",
                children: "color, points are points. Reads like English."
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 518,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "60",
                y: "256",
                width: "660",
                height: "36",
                rx: "10",
                fill: "#fbf3e3",
                stroke: "#e5c79d"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 521,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "390",
                y: "279",
                textAnchor: "middle",
                fontSize: "12.5",
                fontWeight: "700",
                fill: "#7a4a10",
                children: "same data, two shapes — lists answer “which position?”, dictionaries answer “which label?”"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 522,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                    id: "lvd-a",
                    markerWidth: "8",
                    markerHeight: "8",
                    refX: "6",
                    refY: "3",
                    orient: "auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0,0 L7,3 L0,6 Z",
                        fill: "#8a5a22"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/Part6.tsx",
                        lineNumber: 528,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 527,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/Part6.tsx",
        lineNumber: 484,
        columnNumber: 5
    }, this);
}
_c4 = ListVsDict;
/* The three loop lenses — .items() / .keys() / .values() */ function DictLenses() {
    const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
    const lenses = [
        {
            method: ".items()",
            gives: "key AND value, together",
            code: "for name, lang in d.items():",
            out: [
                "jen → python",
                "sarah → c"
            ],
            fill: "#c2410c"
        },
        {
            method: ".keys()",
            gives: "just the labels (the default)",
            code: "for name in d.keys():",
            out: [
                "jen",
                "sarah"
            ],
            fill: "#d97706"
        },
        {
            method: ".values()",
            gives: "just the answers",
            code: "for lang in d.values():",
            out: [
                "python",
                "c"
            ],
            fill: "#7c9a3e"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 780 236",
        className: "mx-auto w-full max-w-3xl",
        role: "img",
        "aria-label": "Three ways to loop through a dictionary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "24",
                y: "22",
                width: "470",
                height: "42",
                rx: "10",
                fill: "#2b1b10"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 564,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "42",
                y: "48",
                fontFamily: mono,
                fontSize: "12",
                fill: "#e9d7bf",
                children: [
                    "d = ",
                    '{',
                    "'jen': 'python', 'sarah': 'c'",
                    '}'
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 565,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "516",
                y: "48",
                fontSize: "11.5",
                fill: "#7a5b39",
                children: "← one dictionary,"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 566,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "516",
                y: "62",
                fontSize: "11.5",
                fill: "#7a5b39",
                children: "three ways to walk it"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 567,
                columnNumber: 7
            }, this),
            lenses.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: `translate(${24 + i * 252}, 86)`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "0",
                            y: "0",
                            width: "228",
                            height: "132",
                            rx: "14",
                            fill: "#fff",
                            stroke: "#e5c79d",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 571,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "0",
                            y: "0",
                            width: "228",
                            height: "34",
                            rx: "14",
                            fill: l.fill
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 572,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "0",
                            y: "18",
                            width: "228",
                            height: "16",
                            fill: l.fill
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 573,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "114",
                            y: "23",
                            textAnchor: "middle",
                            fontFamily: mono,
                            fontSize: "13",
                            fontWeight: "800",
                            fill: "#fff7ec",
                            children: l.method
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 574,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "114",
                            y: "56",
                            textAnchor: "middle",
                            fontSize: "11",
                            fontWeight: "700",
                            fill: "#7a5b39",
                            children: l.gives
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 575,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "114",
                            y: "80",
                            textAnchor: "middle",
                            fontFamily: mono,
                            fontSize: "10.5",
                            fill: "#8a4508",
                            children: l.code
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 576,
                            columnNumber: 11
                        }, this),
                        l.out.map((o, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "114",
                                y: 102 + j * 17,
                                textAnchor: "middle",
                                fontFamily: mono,
                                fontSize: "10.5",
                                fill: "#2b2014",
                                children: o
                            }, o, false, {
                                fileName: "[project]/src/components/notes/Part6.tsx",
                                lineNumber: 578,
                                columnNumber: 13
                            }, this))
                    ]
                }, l.method, true, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 570,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "390",
                y: "232",
                textAnchor: "middle",
                fontSize: "11.5",
                fill: "#7a5b39",
                children: ".items() when you need both · .keys() to check membership · .values() to read the answers (wrap in set() to dedupe)"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 583,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/Part6.tsx",
        lineNumber: 562,
        columnNumber: 5
    }, this);
}
_c5 = DictLenses;
function DictViz() {
    _s();
    const pairs = [
        {
            k: "color",
            v: "'green'"
        },
        {
            k: "points",
            v: "5"
        },
        {
            k: "x_position",
            v: "0"
        },
        {
            k: "y_position",
            v: "25"
        },
        {
            k: "speed",
            v: "'medium'"
        }
    ];
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl p-5",
        style: {
            background: "#fbf3e3",
            border: "1px dashed #e5c79d"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono-warm text-[.82rem] font-bold text-[#8a4508]",
                        children: [
                            "alien_0 = ",
                            "{"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/Part6.tsx",
                        lineNumber: 602,
                        columnNumber: 9
                    }, this),
                    pairs.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onMouseEnter: ()=>setHover(i),
                            onMouseLeave: ()=>setHover(null),
                            className: "lv-item rounded-lg px-2.5 py-1.5 font-mono-warm text-[.78rem] font-bold",
                            style: hover === i ? {
                                transform: "translateY(-4px)",
                                boxShadow: "0 10px 18px -10px rgba(194,65,12,.6)"
                            } : undefined,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "#8a3d10"
                                    },
                                    children: [
                                        "'",
                                        p.k,
                                        "'"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 611,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mx-1 text-[#be4a4a]",
                                    children: ":"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 612,
                                    columnNumber: 13
                                }, this),
                                p.v
                            ]
                        }, p.k, true, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 604,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono-warm text-[.82rem] font-bold text-[#8a4508]",
                        children: "}"
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/Part6.tsx",
                        lineNumber: 616,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 601,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 font-mono-warm text-[.8rem] text-[#7c4a12]",
                children: hover === null ? "# hover a key-value pair — a dictionary maps KEYS to VALUES, not positions" : `# alien_0['${pairs[hover].k}'] → ${pairs[hover].v}   (instant lookup, no index needed)`
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 618,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/Part6.tsx",
        lineNumber: 600,
        columnNumber: 5
    }, this);
}
_s(DictViz, "FYwme2kD2kORRPD1Jfhz4luF6Fk=");
_c6 = DictViz;
function DictsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "dicts",
        dark: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                dark: true,
                eyebrow: "Python · chapter 4",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "grad-text",
                            children: "Dictionaries"
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 635,
                            columnNumber: 13
                        }, void 0),
                        " — connecting pieces of information"
                    ]
                }, void 0, true),
                lead: "You already know lists — but list[0] forces you to memorise what position 0 means. A dictionary replaces positions with labels: alien_0['color'] reads like English. One structure that models users, games, glossaries, entire databases. Four steps and it clicks."
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 630,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[.95rem] leading-relaxed text-[#e9d7bf]",
                            children: [
                                "The one idea before any syntax: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "a list finds things by position, a dictionary finds things by label"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 645,
                                    columnNumber: 45
                                }, this),
                                ". Same data, two very different shapes — and the shape on the right is the one that scales to real programs, because “which label?” is a question you can actually answer while writing code:"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 644,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 rounded-2xl p-4",
                            style: {
                                background: "#fbf3e3",
                                border: "1px dashed #e5c79d"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListVsDict, {}, void 0, false, {
                                fileName: "[project]/src/components/notes/Part6.tsx",
                                lineNumber: 651,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 650,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 643,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 642,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "2",
                title: "Build it — create · read · add · modify · delete",
                sub: "A dictionary starts empty or full, and every pair can be added, changed or removed at any time"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 657,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DictViz, {}, void 0, false, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 659,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 658,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-5 lg:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                            title: "alien.py — add · modify · delete",
                            code: `alien_0 = {'color': 'green', 'points': 5}
print(alien_0['color'])   # green
print(alien_0['points'])  # 5

# ADD new key-value pairs at any time
alien_0['x_position'] = 0
alien_0['y_position'] = 25

# Start with an empty dictionary and fill it
alien = {}
alien['color'] = 'green'
alien['points'] = 5

# MODIFY a value
alien_0['color'] = 'yellow'

# DELETE a pair
del alien_0['points']

# A dictionary of similar objects (one key → one value per person)
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'rust',
    'phil': 'python',
}
language = favorite_languages['sarah'].title()
print(f"Sarah's favorite language is {language}.")`,
                            output: "green\n5\n\nSarah's favorite language is C."
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 664,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                            title: "get() — the safe lookup",
                            code: `alien_0 = {'color': 'green', 'speed': 'slow'}

# This CRASHES if the key is missing:
# print(alien_0['points'])   → KeyError

# get() returns a default instead:
point_value = alien_0.get('points', 'No point value assigned.')
print(point_value)

# get() with no default returns None
# (None means "the absence of a value")
speed = alien_0.get('speed')
print(speed)`,
                            output: "No point value assigned.\nslow",
                            note: "get() is the difference between a program that crashes on missing data and one that handles it gracefully."
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 696,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 663,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 662,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "3",
                title: "Read it three ways — the loop lenses",
                sub: ".items() gives pairs, .keys() gives labels, .values() gives answers — pick the lens that matches the question"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 718,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl p-4",
                    style: {
                        background: "#fbf3e3",
                        border: "1px dashed #e5c79d"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DictLenses, {}, void 0, false, {
                        fileName: "[project]/src/components/notes/Part6.tsx",
                        lineNumber: 721,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 720,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 719,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 grid gap-5 lg:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                title: "loop_all_pairs.py",
                                pre: POLL_PRE,
                                code: `user_0 = {
    'username': 'efermi',
    'first': 'enrico',
    'last': 'fermi',
}

# ALL key-value pairs — .items()
for key, value in user_0.items():
    print(f"\\nKey: {key}")
    print(f"Value: {value}")

# ALL keys — .keys()  (default!)
for name in favorite_languages.keys():
    print(name.title())

# Keys in order — sorted()
for name in sorted(favorite_languages.keys()):
    print(f"{name.title()}, thank you for taking the poll.")`,
                                output: "Key: username\nValue: efermi\n..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/Part6.tsx",
                                lineNumber: 728,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                title: "loop_values_and_set.py",
                                pre: POLL_PRE,
                                code: `# ALL values — .values()
print("Languages chosen:")
for language in favorite_languages.values():
    print(language.title())

# Repetition is natural ('python' appears twice).
# Use set() when each item should appear ONCE:
print("\\nThe following languages have been chosen:")
for language in set(favorite_languages.values()):
    print(language.title())

# Polling: who already responded vs who to invite
if 'erin' not in favorite_languages.keys():
    print("Erin, please take our poll!")`,
                                output: "Languages chosen:\nPython\nC\nRust\nPython\n\nThe following languages have been chosen:\nC\nPython\nRust\nErin, please take our poll!",
                                note: "A set is a collection in which each item must be unique — a list wrapped in set() loses duplicates."
                            }, void 0, false, {
                                fileName: "[project]/src/components/notes/Part6.tsx",
                                lineNumber: 751,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/notes/Part6.tsx",
                        lineNumber: 727,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 726,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 725,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "4",
                title: "Nesting — dictionaries inside lists inside dictionaries",
                sub: "The moment real data shows up, structures combine — this is how you model the world"
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 776,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 max-w-4xl text-[.9rem] text-[#e9d7bf]",
                            children: "Python lets you nest lists inside dictionaries, dictionaries inside lists, and dictionaries inside dictionaries. This is how you model the real world — fleets of aliens, pizza orders, city profiles."
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 779,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 grid gap-5 lg:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                    title: "a list of dictionaries",
                                    code: `aliens = []

for n in range(3):
    aliens.append({
        'color': 'green',
        'points': 5,
        'speed': 'slow',
    })

for alien in aliens[:3]:
    print(alien)`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 785,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                    title: "a list in a dictionary",
                                    code: `pizza = {
    'crust': 'thick',
    'toppings': ['mushrooms', 'extra cheese'],
}

print(pizza['crust'])
for topping in pizza['toppings']:
    print(topping)`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 799,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                    title: "a dictionary in a dictionary",
                                    code: `users = {
    'aeinstein': {
        'first': 'albert',
        'last': 'einstein',
    },
    'mcurie': {
        'first': 'marie',
        'last': 'curie',
    },
}

for username, info in users.items():
    print(f"\\n{username}")
    print(info['first'].title(),
          info['last'].title())`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 810,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 784,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 778,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 777,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Concept check",
                            q: "What does alien_0.get('points', 0) do if 'points' is missing?",
                            options: [
                                "Crashes with KeyError",
                                "Returns None",
                                "Returns 0 instead of crashing",
                                "Adds the key with value 0"
                            ],
                            answer: 2,
                            explain: "get() looks up the key and returns your provided default (0) when it’s absent — graceful handling instead of a KeyError."
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 834,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/Part6.tsx",
                        lineNumber: 833,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Concept check",
                            q: "Why wrap favorite_languages.values() in set() before looping?",
                            options: [
                                "To sort alphabetically",
                                "To make each language appear only once",
                                "To speed up the loop",
                                "To convert values to keys"
                            ],
                            answer: 1,
                            explain: "A set keeps only unique items — so 'python' appearing for both jen and phil prints once. Use sorted(keys) when you want order instead."
                        }, void 0, false, {
                            fileName: "[project]/src/components/notes/Part6.tsx",
                            lineNumber: 843,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/notes/Part6.tsx",
                        lineNumber: 842,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 832,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Practice"], {
                    title: "Try It Yourself — dictionary drills",
                    items: [
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Person: store first_name, last_name, age, city in a dictionary; print each piece of information."
                            }, void 0, false)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Favorite numbers: five people as keys, a number each as values; print each pair (poll real friends!)."
                            }, void 0, false)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Glossary: five programming words as keys, meanings as values; print each word and meaning neatly separated with \\\\n."
                            }, void 0, false)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Loop the glossary with .items(); then add five more terms — the loop picks them up automatically."
                            }, void 0, false)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Rivers: ",
                                    '{',
                                    "'nile': 'egypt', …",
                                    '}',
                                    " — print “The Nile runs through Egypt.”, then all river names, then all countries."
                                ]
                            }, void 0, true)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Polling: loop a list of people; thank those already in favorite_languages, invite the rest."
                            }, void 0, false)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Pets: several dictionaries (kind of animal + owner’s name) inside a list called pets; loop and print everything about each."
                            }, void 0, false)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "favorite_places: three people as keys, one to three favorite places each as lists; loop and print."
                            }, void 0, false)
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Cities: three cities as keys, each mapping to a nested dictionary ",
                                    '{',
                                    "country, population, fact",
                                    '}',
                                    "; print each city with all its information."
                                ]
                            }, void 0, true)
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 854,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 853,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    dark: true,
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Dictionaries store ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "key-value pairs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 874,
                                    columnNumber: 34
                                }, void 0),
                                "; access by key, add/modify anytime, delete with ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "del"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 874,
                                    columnNumber: 115
                                }, void 0),
                                ", build from ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        "empty ",
                                        "{}"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 874,
                                    columnNumber: 148
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "get(key, default)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 875,
                                    columnNumber: 15
                                }, void 0),
                                " avoids KeyError; dictionaries of similar objects map one value per key (favorite languages, favorite numbers)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Loop ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: ".items()"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 876,
                                    columnNumber: 20
                                }, void 0),
                                " for pairs, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: ".keys()"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 876,
                                    columnNumber: 57
                                }, void 0),
                                " for names, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "sorted()"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 876,
                                    columnNumber: 93
                                }, void 0),
                                " for order, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: ".values()"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 876,
                                    columnNumber: 130
                                }, void 0),
                                " + ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "set()"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 876,
                                    columnNumber: 159
                                }, void 0),
                                " for unique values."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Nesting models reality: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "list of dicts"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 877,
                                    columnNumber: 39
                                }, void 0),
                                " (fleets, users), ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "dict with lists"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 877,
                                    columnNumber: 87
                                }, void 0),
                                " (pizza toppings), ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "dict of dicts"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/notes/Part6.tsx",
                                    lineNumber: 877,
                                    columnNumber: 138
                                }, void 0),
                                " (city profiles)."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/notes/Part6.tsx",
                    lineNumber: 871,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/notes/Part6.tsx",
                lineNumber: 870,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/notes/Part6.tsx",
        lineNumber: 629,
        columnNumber: 5
    }, this);
}
_c7 = DictsSection;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "IfAnatomy");
__turbopack_context__.k.register(_c1, "ChainWalk");
__turbopack_context__.k.register(_c2, "IfElseChainViz");
__turbopack_context__.k.register(_c3, "IfSection");
__turbopack_context__.k.register(_c4, "ListVsDict");
__turbopack_context__.k.register(_c5, "DictLenses");
__turbopack_context__.k.register(_c6, "DictViz");
__turbopack_context__.k.register(_c7, "DictsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_notes_Part6_tsx_2833d122._.js.map