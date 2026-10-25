(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/fa/FaParts4.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaAdjustingSection",
    ()=>FaAdjustingSection,
    "FaFinalAccountsSection",
    ()=>FaFinalAccountsSection,
    "FaGrossProfitLabSection",
    ()=>FaGrossProfitLabSection,
    "FaTradingSection",
    ()=>FaTradingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   Financial Accounting — PART 4 of 4 (shelf 03 of The Atlas)
   Module 4: adjusting entries (deferrals vs accruals, the
   prepaid splitter), final accounts, the trading account and
   gross profit — with the Gross Profit Lab running the
   lecture's own worked examples.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hourglass.js [app-client] (ecmascript) <export default as Hourglass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$umbrella$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Umbrella$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/umbrella.js [app-client] (ecmascript) <export default as Umbrella>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/fa/FaParts1.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ============================================================
   CHAPTER 13 — ADJUSTING ENTRIES: DEFERRALS & ACCRUALS
   ============================================================ */ const PREPAID_TOTAL = 12000;
function PrepaidSplitter() {
    _s();
    const [months, setMonths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const expense = Math.round(PREPAID_TOTAL * months / 12);
    const asset = PREPAID_TOTAL - expense;
    const isLectureMoment = months === 3;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-7 w-7 items-center justify-center rounded-lg text-white",
                        style: {
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_BTN_GRAD"]
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$umbrella$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Umbrella$3e$__["Umbrella"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[.64rem] font-black uppercase tracking-[.2em]",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                        },
                        children: "The prepaid splitter"
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[.7rem] font-semibold text-muted-warm",
                        children: "₹12,000 · one-year policy · paid October 1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/fa/FaParts4.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-5 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "fa-months",
                                className: "text-[.8rem] font-bold text-[#3e2c1d]",
                                children: "Months of protection consumed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[.9rem] font-black",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                },
                                children: [
                                    months,
                                    " / 12"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "fa-months",
                        type: "range",
                        min: 0,
                        max: 12,
                        step: 1,
                        value: months,
                        onChange: (e)=>setMonths(Number(e.target.value)),
                        className: "mt-2 w-full accent-[#047857]",
                        "aria-valuetext": `${months} months consumed`
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 h-9 w-full overflow-hidden rounded-xl border border-[#dcebe2] bg-white",
                        role: "img",
                        "aria-label": `Expense ${expense} rupees, prepaid asset ${asset} rupees`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex items-center justify-center",
                                    style: {
                                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_BTN_GRAD"]
                                    },
                                    animate: {
                                        width: `${expense / PREPAID_TOTAL * 100}%`
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 160,
                                        damping: 22
                                    },
                                    children: expense > 900 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 font-mono text-[.68rem] font-black text-white",
                                        children: [
                                            "₹",
                                            expense.toLocaleString("en-IN")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 87,
                                        columnNumber: 32
                                    }, this) : null
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex flex-1 items-center justify-center",
                                    style: {
                                        background: "#f6ead2"
                                    },
                                    children: asset > 900 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 font-mono text-[.68rem] font-black text-[#8a5a10]",
                                        children: [
                                            "₹",
                                            asset.toLocaleString("en-IN")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 93,
                                        columnNumber: 30
                                    }, this) : null
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex justify-between text-[.68rem] font-bold uppercase tracking-[.14em]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                },
                                children: "Insurance expense — this year"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#8a5a10]",
                                children: "Prepaid insurance — an asset"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEq"], {
                            label: isLectureMoment ? "The lecture moment — Dec 31 year-end" : "Live computation",
                            children: `Expense = 12,000 \u00D7 ${months}/12 = \u20B9${expense.toLocaleString("en-IN")}
Prepaid insurance (asset) = 12,000 \u2212 ${expense.toLocaleString("en-IN")} = \u20B9${asset.toLocaleString("en-IN")}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    isLectureMoment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-center text-[.76rem] font-semibold",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                        },
                        children: "Oct + Nov + Dec = 3 months — ₹3,000 becomes expense; ₹9,000 waits as a future benefit."
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/fa/FaParts4.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/fa/FaParts4.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(PrepaidSplitter, "IMDZWRhG6sVEzLhtT+umi4Qn3UQ=");
_c = PrepaidSplitter;
function FaAdjustingSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "adjusting",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 4 · Adjusting entries",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Cash is instant. ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-emerald",
                                children: "Recognition is not."
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 125,
                                columnNumber: 32
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "Cash transactions don't always happen in the same period as the related revenue or expense. Adjusting entries are how the books catch up with reality — before any statement is allowed to speak."
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "01",
                    title: "Two families of mismatch",
                    sub: "Deferral — cash moved first · Accrual — recognition moved first"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 131,
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
                                        className: "flex items-center gap-2 text-[.95rem] font-extrabold text-[#3e2c1d]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__["Hourglass"], {
                                                className: "h-4 w-4",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            " Deferral"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.84rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "A lag in recognising an expense already ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "paid"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 139,
                                                columnNumber: 57
                                            }, this),
                                            " or a revenue already",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "received"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this),
                                            ". Relates to ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "past"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 140,
                                                columnNumber: 45
                                            }, this),
                                            " cash movements, apportioned between two or more periods."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap gap-1.5",
                                        children: [
                                            "Prepaid insurance",
                                            "Office supplies",
                                            "Unearned revenue"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-lg border px-2.5 py-1 text-[.72rem] font-semibold",
                                                style: {
                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"].border,
                                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"].wash,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                },
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 110,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2 text-[.95rem] font-extrabold text-[#3e2c1d]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "h-4 w-4",
                                                style: {
                                                    color: "#b45309"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            " Accrual"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.84rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "Recognition of an expense ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "incurred"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 156,
                                                columnNumber: 43
                                            }, this),
                                            " but not paid, or revenue",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "earned"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this),
                                            " but not received. Relates to ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "expected future"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 157,
                                                columnNumber: 60
                                            }, this),
                                            " cash movements — previously unrecorded items."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap gap-1.5",
                                        children: [
                                            "Salaries payable",
                                            "Accrued interest expense",
                                            "Accrued interest income",
                                            "Unbilled revenue"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-lg border px-2.5 py-1 text-[.72rem] font-semibold",
                                                style: {
                                                    borderColor: "#e8d3ac",
                                                    background: "#faf4e4",
                                                    color: "#8a5a10"
                                                },
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 162,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-warm mt-4 overflow-hidden p-5 sm:p-7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 900 240",
                            className: "h-auto w-full",
                            role: "img",
                            "aria-label": "Deferral: cash first, recognition later. Accrual: recognition first, cash later.",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                        id: "faTlArrow",
                                        markerWidth: "8",
                                        markerHeight: "8",
                                        refX: "6",
                                        refY: "3",
                                        orient: "auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0,0 L6,3 L0,6 Z",
                                            fill: "#8a6b45"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                                    initial: {
                                        opacity: 0,
                                        x: -20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "20",
                                            y: "28",
                                            width: "200",
                                            height: "56",
                                            rx: "12",
                                            fill: "#f2faf6",
                                            stroke: "#a9dcc4",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "120",
                                            y: "52",
                                            textAnchor: "middle",
                                            fontSize: "13",
                                            fontWeight: "800",
                                            fill: "#047857",
                                            children: "DEFERRAL — cash"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "120",
                                            y: "72",
                                            textAnchor: "middle",
                                            fontSize: "11.5",
                                            fontWeight: "600",
                                            fill: "#2b2014",
                                            children: "₹12,000 paid Oct 1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 225 56 H 640",
                                            stroke: "#8a6b45",
                                            strokeWidth: "2",
                                            strokeDasharray: "4 7",
                                            markerEnd: "url(#faTlArrow)",
                                            fill: "none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "648",
                                            y: "28",
                                            width: "232",
                                            height: "56",
                                            rx: "12",
                                            fill: "#f2faf6",
                                            stroke: "#a9dcc4",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "764",
                                            y: "52",
                                            textAnchor: "middle",
                                            fontSize: "13",
                                            fontWeight: "800",
                                            fill: "#047857",
                                            children: "recognition — later"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "764",
                                            y: "72",
                                            textAnchor: "middle",
                                            fontSize: "11.5",
                                            fontWeight: "600",
                                            fill: "#2b2014",
                                            children: "₹3,000 expense by Dec 31"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                                    initial: {
                                        opacity: 0,
                                        x: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.15
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "20",
                                            y: "132",
                                            width: "200",
                                            height: "56",
                                            rx: "12",
                                            fill: "#fbf4e4",
                                            stroke: "#e3c98f",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "120",
                                            y: "156",
                                            textAnchor: "middle",
                                            fontSize: "13",
                                            fontWeight: "800",
                                            fill: "#b45309",
                                            children: "ACCRUAL — recognition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "120",
                                            y: "176",
                                            textAnchor: "middle",
                                            fontSize: "11.5",
                                            fontWeight: "600",
                                            fill: "#2b2014",
                                            children: "salaries earned in December"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 225 160 H 640",
                                            stroke: "#8a6b45",
                                            strokeWidth: "2",
                                            strokeDasharray: "4 7",
                                            markerEnd: "url(#faTlArrow)",
                                            fill: "none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "648",
                                            y: "132",
                                            width: "232",
                                            height: "56",
                                            rx: "12",
                                            fill: "#fbf4e4",
                                            stroke: "#e3c98f",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "764",
                                            y: "156",
                                            textAnchor: "middle",
                                            fontSize: "13",
                                            fontWeight: "800",
                                            fill: "#b45309",
                                            children: "cash — later"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "764",
                                            y: "176",
                                            textAnchor: "middle",
                                            fontSize: "11.5",
                                            fontWeight: "600",
                                            fill: "#2b2014",
                                            children: "salaries payable, paid in January"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                                    x: "450",
                                    y: "222",
                                    textAnchor: "middle",
                                    fontSize: "12",
                                    fontWeight: "700",
                                    fill: "#8a6b45",
                                    initial: {
                                        opacity: 0
                                    },
                                    whileInView: {
                                        opacity: 1
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: 0.4
                                    },
                                    children: "cash first or recognition first — the adjustment always forces them into the same period"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 172,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "02",
                    title: "Example 1 — prepaid insurance, split live",
                    sub: "₹12,000 for one year, paid October 1 · year ends December 31"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrepaidSplitter, {}, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                        kind: "insight",
                        title: "Why the whole 12,000 is not an expense on October 1",
                        children: [
                            "Because the insurance provides protection for ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "12 months"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 211,
                                columnNumber: 59
                            }, this),
                            ". On December 31 you have consumed only October + November + December — 3 months. Cash happened first; expense recognition happens gradually afterward. The unused ₹9,000 is a future benefit, so it remains an ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "asset"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 214,
                                columnNumber: 39
                            }, this),
                            " called prepaid insurance."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "03",
                    title: "Example 2 — unearned revenue, earned slowly",
                    sub: "₹60,000 received in advance for a six-month service contract"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEq"], {
                    label: "The two-step recognition",
                    children: `Initial receipt:
   Cash A/c .................. Dr  60,000
        To Unearned Revenue ........ 60,000

After 1 month of service:
   Revenue = 60,000 \u00D7 1/6  =  \u20B910,000
   Unearned revenue (liability) falls by \u20B910,000  \u2192  \u20B950,000 left`
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 219,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                        kind: "why",
                        title: "Is your revenue ₹60,000? No.",
                        children: "You haven’t provided the service yet. You hold the cash — but the obligation (a liability) is what you owe until the service is delivered. Cash received first → revenue recognised later."
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "04",
                    title: "The adjustment map",
                    sub: "Six mismatches, one destination: profit or loss"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
                    children: [
                        {
                            t: "Unearned revenue",
                            d: "Cash received in a past period — work done in the current period",
                            kind: "def"
                        },
                        {
                            t: "Revenue receivable",
                            d: "Cash to be received — work done in the current period",
                            kind: "acc"
                        },
                        {
                            t: "Prepaid expenses",
                            d: "Cash paid in a past period — benefit used in the current period",
                            kind: "def"
                        },
                        {
                            t: "Expenses payable",
                            d: "Cash to be paid — benefit used in the current period",
                            kind: "acc"
                        }
                    ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * 70,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm h-full p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[.6rem] font-black uppercase tracking-[.18em]",
                                        style: {
                                            color: c.kind === "def" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700] : "#b45309"
                                        },
                                        children: c.kind === "def" ? "Deferral" : "Accrual"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-[.88rem] font-extrabold leading-snug text-[#3e2c1d]",
                                        children: c.t
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 247,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-[.76rem] leading-relaxed text-muted-warm",
                                        children: c.d
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 243,
                                columnNumber: 15
                            }, this)
                        }, c.t, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 rounded-2xl border border-[#c7e5d6] bg-[#f4faf7] px-5 py-3 text-center font-mono text-[.86rem] font-black",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                        },
                        children: "Revenue (work done) − Expenses (benefit used) = Profit or Loss"
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "05",
                    title: "Deferred revenue in the wild",
                    sub: "Tech Mahindra's annual report, year ended March 31, 2010"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                    kind: "story",
                    title: "The case",
                    children: [
                        "A customer paid Tech Mahindra ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "₹9,682 million"
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 261,
                            columnNumber: 41
                        }, this),
                        " for changes to a long-term contract. The company recognised ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "₹2,005 million"
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 262,
                            columnNumber: 44
                        }, this),
                        " as revenue that year for services provided, and treated the balance of ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "₹7,677 million"
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 263,
                            columnNumber: 57
                        }, this),
                        " as deferred revenue. Deferred revenue is a ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "liability"
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 264,
                            columnNumber: 42
                        }, this),
                        " — the amount must either be repaid to the customer or the services must be provided; in either case, cash is payable."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                        kind: "warn",
                        title: "What happens if prepaid expenses are NOT adjusted",
                        children: [
                            "Without the adjustment, the used-up portion never becomes an expense: the statements ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "understate expenses"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 271,
                                columnNumber: 24
                            }, this),
                            " and ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "overstate assets and equity"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 271,
                                columnNumber: 55
                            }, this),
                            " — both statements wrong, in opposite directions. The income statement and the balance sheet are both incorrect until the split is made."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaQuiz"], {
                        source: "Deferral or accrual?",
                        q: "Vogue received ₹1,500 from Kidswear on June 8 for services to be provided later. At June 30, ₹500 of service has been delivered. The adjusting entry is\\u2026",
                        options: [
                            "Dr Cash 500 / Cr Revenue 500",
                            "Dr Unearned revenue 500 / Cr Revenue from services 500",
                            "Dr Revenue 500 / Cr Unearned revenue 500",
                            "No adjustment until all the service is delivered"
                        ],
                        answer: 1,
                        explain: "The liability shrinks as the service is delivered: debit unearned revenue 500 (less owed), credit revenue 500 (now earned). This is a deferral — cash came first, and recognition follows the work, month by month, until the liability is zero."
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/fa/FaParts4.tsx",
            lineNumber: 120,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/fa/FaParts4.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_c1 = FaAdjustingSection;
function FaFinalAccountsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "final-accounts",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 4 · Final accounts",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Two questions, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-emerald",
                                children: "two statements"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 307,
                                columnNumber: 30
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "Final accounts are prepared at the end of an accounting period to reveal the result of operations and the financial position. Everything the course has built — journal, ledger, trial balance, adjustments — now gets asked its purpose."
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 303,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[.62rem] font-black uppercase tracking-[.2em]",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                        },
                                        children: "Question 1 — over the period"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 font-display text-xl font-bold leading-snug text-[#3e2c1d]",
                                        children: "“Did the business earn a profit or suffer a loss over the period?”"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 317,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "Answered by the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Trading & Profit and Loss Account"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 321,
                                                columnNumber: 33
                                            }, this),
                                            " — the statement of performance."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 314,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 110,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[.62rem] font-black uppercase tracking-[.2em] text-[#b45309]",
                                        children: "Question 2 — at a point in time"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 328,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 font-display text-xl font-bold leading-snug text-[#3e2c1d]",
                                        children: "“What is the financial standing of the business at this specific point — what do we own, and what do we owe?”"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 329,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "Answered by the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Balance Sheet"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 334,
                                                columnNumber: 33
                                            }, this),
                                            " — the statement of position."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 313,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "01",
                    title: "From adjusted trial balance to final accounts",
                    sub: "Each adjusted trial balance item moves into one of the two statements"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 340,
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
                                        className: "text-[.95rem] font-extrabold text-[#3e2c1d]",
                                        children: "Trading & Profit and Loss Account"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 344,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.84rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "Revenue and expense balances: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "sales, purchases, stock, wages, rent, interest"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 346,
                                                columnNumber: 47
                                            }, this),
                                            ". Answers: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                children: "did we earn a profit or suffer a loss this period?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 347,
                                                columnNumber: 40
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap gap-1.5",
                                        children: [
                                            "Sales",
                                            "Purchases",
                                            "Stock",
                                            "Wages",
                                            "Rent",
                                            "Interest"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-lg border px-2.5 py-1 font-mono text-[.7rem] font-bold",
                                                style: {
                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"].border,
                                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"].wash,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                },
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 351,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 343,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 110,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.95rem] font-extrabold text-[#3e2c1d]",
                                        children: "Balance Sheet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.84rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "Asset, liability and capital balances: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "cash, debtors, machinery, creditors, loans, capital"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 360,
                                                columnNumber: 56
                                            }, this),
                                            ". Answers: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                children: "what do we own and owe at the year end?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 361,
                                                columnNumber: 46
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap gap-1.5",
                                        children: [
                                            "Cash",
                                            "Debtors",
                                            "Machinery",
                                            "Creditors",
                                            "Loans",
                                            "Capital"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-lg border px-2.5 py-1 font-mono text-[.7rem] font-bold",
                                                style: {
                                                    borderColor: "#e8d3ac",
                                                    background: "#faf4e4",
                                                    color: "#8a5a10"
                                                },
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 365,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 357,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 356,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 341,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                        kind: "insight",
                        title: "The sorting rule is the whole skill",
                        children: [
                            "Look at an adjusted trial balance item and ask one question: is it",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "a flow (revenue or expense)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 375,
                                columnNumber: 13
                            }, this),
                            " or ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "a stock (asset, liability or capital)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 375,
                                columnNumber: 51
                            }, this),
                            "? Flows go to the Trading & P&L account; stocks go to the balance sheet. Every exam question on “prepare the final accounts” is this sorting test, then arithmetic."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 373,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 372,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaQuiz"], {
                        source: "Sorting round",
                        q: "From an adjusted trial balance: closing stock ₹15,000. Where does it go?",
                        options: [
                            "Trading account (credit side) AND balance sheet (current asset) — it does double duty",
                            "Only the trading account — it is a flow",
                            "Only the balance sheet — stock is an asset",
                            "Nowhere — closing stock is never recorded"
                        ],
                        answer: 0,
                        explain: "Closing stock is the rare item that appears in BOTH statements: it credits the trading account (shrinking the cost of goods sold) and carries forward as an asset in the balance sheet. Opening stock, by contrast, appears only on the debit side of the trading account."
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 383,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 382,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/fa/FaParts4.tsx",
            lineNumber: 302,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/fa/FaParts4.tsx",
        lineNumber: 301,
        columnNumber: 5
    }, this);
}
_c2 = FaFinalAccountsSection;
function FaTradingSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "trading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 4 · The trading account",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Did buying and selling ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-emerald",
                                children: "pay?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 412,
                                columnNumber: 38
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "The trading account gives the overall result of trading — the purchasing and selling of goods. If the sales value exceeds the cost of goods sold, there is a gross profit; if it is less, a gross loss."
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 408,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "01",
                    title: "Cost of goods sold — the ladder",
                    sub: "Adjust the cost of goods still on hand at year-end against the purchases"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 418,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEq"], {
                    label: "The COGS ladder",
                    children: `        Opening Stock                        ***
  Add:  Purchases (Net)                      **
  Add:  Direct Expenses                      **
                                             ---
Less:  Closing Stock                        (***)
                                             ---
        Cost of Goods Sold                   ***`
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 419,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                        kind: "why",
                        title: "Direct expenses ride along",
                        children: [
                            "A trader incurs expenses to purchase goods and bring them to the shop:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "brokerage or commission"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this),
                            " paid to agents, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "cartage or carriage"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 429,
                                columnNumber: 60
                            }, this),
                            " charges for bringing goods in, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "wages"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 430,
                                columnNumber: 36
                            }, this),
                            " paid for transportation. All such expenses increase the cost of goods sold — they belong inside the ladder."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 427,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 426,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "02",
                    title: "Opening stock, closing stock — and the valuation rule"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 435,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-3",
                    children: [
                        {
                            t: "Closing stock",
                            d: "Goods unsold at the end of the year. Shown on the credit side of the Trading Account and as an asset in the Balance Sheet.",
                            tone: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                        },
                        {
                            t: "Opening stock",
                            d: "Goods unsold at the beginning of the year — last year's closing stock. Shown on the debit side of the Trading Account.",
                            tone: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                        },
                        {
                            t: "Valuation rule",
                            d: "Closing stock is valued at cost or at net realisable value, whichever is LOWER — the convention of conservatism: never anticipate profit.",
                            tone: "#b45309"
                        }
                    ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * 90,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.92rem] font-extrabold",
                                        style: {
                                            color: c.tone
                                        },
                                        children: c.t
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 444,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.8rem] leading-relaxed text-muted-warm",
                                        children: c.d
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 445,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 443,
                                columnNumber: 15
                            }, this)
                        }, c.t, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 442,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 436,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "03",
                    title: "The equation, and the T-format",
                    sub: "Gross profit = (Sales + Closing stock) − (Opening stock + Purchases + Direct expenses)"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 451,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEq"], {
                    label: "Equation for preparing the trading account",
                    tone: "gold",
                    children: `Gross Profit  = Sales \u2212 Cost of Goods Sold
Cost of Goods Sold = Opening Stock + Purchases + Direct Expenses \u2212 Closing Stock

Therefore:  Gross Profit = Sales \u2212 (Opening Stock + Purchases + Direct Expenses \u2212 Closing Stock)
Or:         Gross Profit = (Sales + Closing Stock) \u2212 (Opening Stock + Purchases + Direct Expenses)`
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 452,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 overflow-hidden rounded-2xl border border-[#c7e5d6]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-2 text-center font-mono text-[.66rem] font-black uppercase tracking-[.2em]",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                },
                                children: "Trading account of … for the year ended … · the T-format"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 460,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 md:divide-x md:divide-[#e4f1ea]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#fffdf9] px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 font-mono text-[.62rem] font-black uppercase tracking-[.18em]",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                                },
                                                children: "Dr — the cost side"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 465,
                                                columnNumber: 17
                                            }, this),
                                            [
                                                [
                                                    "To Opening Stock",
                                                    ""
                                                ],
                                                [
                                                    "To Purchases",
                                                    "(less: Returns outwards)"
                                                ],
                                                [
                                                    "To Direct expenses:",
                                                    ""
                                                ],
                                                [
                                                    "   Freight & Carriage",
                                                    ""
                                                ],
                                                [
                                                    "   Customs & Insurance",
                                                    ""
                                                ],
                                                [
                                                    "   Wages",
                                                    ""
                                                ],
                                                [
                                                    "   Gas, Water & Fuel",
                                                    ""
                                                ],
                                                [
                                                    "   Factory Expenses",
                                                    ""
                                                ],
                                                [
                                                    "   Royalty on production",
                                                    ""
                                                ],
                                                [
                                                    "To Gross Profit c/d*",
                                                    "← only one of the two appears"
                                                ]
                                            ].map(([a, b])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-baseline justify-between border-b border-[#f0f7f2] py-1.5 text-[.8rem]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: a.startsWith("   ") ? "text-[#6f5438]" : "font-semibold text-[#2f2013]",
                                                            children: a
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 21
                                                        }, this),
                                                        b ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[.66rem] italic text-[#8a6b45]",
                                                            children: b
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                            lineNumber: 480,
                                                            columnNumber: 26
                                                        }, this) : null
                                                    ]
                                                }, a, true, {
                                                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#fffdf9] px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 font-mono text-[.62rem] font-black uppercase tracking-[.18em] text-[#b45309]",
                                                children: "Cr — the revenue side"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 485,
                                                columnNumber: 17
                                            }, this),
                                            [
                                                [
                                                    "By Sales",
                                                    "(less: Returns inwards)"
                                                ],
                                                [
                                                    "By Closing Stock",
                                                    "valued at cost or NRV, lower"
                                                ],
                                                [
                                                    "By Gross Loss c/d*",
                                                    "← only one of the two appears"
                                                ]
                                            ].map(([a, b])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-baseline justify-between border-b border-[#f0f7f2] py-1.5 text-[.8rem]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-[#2f2013]",
                                                            children: a
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                            lineNumber: 492,
                                                            columnNumber: 21
                                                        }, this),
                                                        b ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[.66rem] italic text-[#8a6b45]",
                                                            children: b
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 26
                                                        }, this) : null
                                                    ]
                                                }, a, true, {
                                                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 484,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 463,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "border-t border-[#e4f1ea] bg-[#f4faf7] px-4 py-2 text-center text-[.72rem] font-semibold text-muted-warm",
                                children: "*Gross profit or gross loss — exactly one of them closes the account, balancing the two sides."
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 498,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 459,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 458,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Practice"], {
                        title: "Quick gross-profit drills",
                        items: [
                            {
                                q: "Net sales 35,000 · net purchases 25,000. Gross profit?",
                                hint: "35,000 \u2212 25,000 = 10,000 — the lecture's Example 1."
                            },
                            {
                                q: "Same trader, but closing stock of 5,000 remains. Gross profit now?",
                                hint: "COGS = 25,000 \u2212 5,000 = 20,000; GP = 35,000 \u2212 20,000 = 15,000."
                            },
                            {
                                q: "Where does that closing stock of 5,000 reappear?",
                                hint: "As an asset in the balance sheet — it does double duty."
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 505,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 504,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/fa/FaParts4.tsx",
            lineNumber: 407,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/fa/FaParts4.tsx",
        lineNumber: 406,
        columnNumber: 5
    }, this);
}
_c3 = FaTradingSection;
const GP_PRESETS = [
    {
        name: "Example 3",
        tag: "stock both ends",
        v: {
            os: 10000,
            np: 35000,
            de: 0,
            cs: 15000,
            sales: 50000
        }
    },
    {
        name: "Example 4",
        tag: "+ carriage in",
        v: {
            os: 10000,
            np: 35000,
            de: 5000,
            cs: 15000,
            sales: 50000
        }
    },
    {
        name: "Example 6",
        tag: "ABC Traders",
        v: {
            os: 100000,
            np: 600000,
            de: 80000,
            cs: 200000,
            sales: 1000000
        }
    }
];
const inr = (n)=>n.toLocaleString("en-IN");
function GrossProfitLab() {
    _s1();
    const [v, setV] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(GP_PRESETS[0].v);
    const cogs = v.os + v.np + v.de - v.cs;
    const gp = v.sales - cogs;
    const loss = gp < 0;
    const fields = [
        {
            key: "os",
            label: "Opening stock"
        },
        {
            key: "np",
            label: "Net purchases"
        },
        {
            key: "de",
            label: "Direct expenses"
        },
        {
            key: "cs",
            label: "Closing stock"
        },
        {
            key: "sales",
            label: "Net sales"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex h-7 w-7 items-center justify-center rounded-lg text-white",
                        style: {
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_BTN_GRAD"]
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 551,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 550,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[.64rem] font-black uppercase tracking-[.2em]",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                        },
                        children: "Gross profit lab"
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 553,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[.7rem] font-semibold text-muted-warm",
                        children: "edit any figure — the ladder recomputes"
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 556,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setV(GP_PRESETS[0].v),
                        className: "ml-auto inline-flex items-center gap-1.5 rounded-lg border border-[#c7e5d6] bg-white px-2.5 py-1.5 text-[.7rem] font-bold text-[#6f5438] transition hover:border-[#10b981] hover:text-[#047857]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 562,
                                columnNumber: 11
                            }, this),
                            " Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/fa/FaParts4.tsx",
                lineNumber: 549,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 p-4 sm:p-6 lg:grid-cols-[1fr_1.1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5",
                                children: GP_PRESETS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setV(p.v),
                                        className: "rounded-lg border border-[#c7e5d6] bg-white px-2.5 py-1.5 text-[.7rem] font-bold text-[#3e2c1d] transition hover:border-[#10b981] hover:bg-[#f2faf6]",
                                        children: [
                                            p.name,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-normal text-[#8a6b45]",
                                                children: [
                                                    "· ",
                                                    p.tag
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 577,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, p.name, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 571,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 569,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 grid gap-2 sm:grid-cols-2",
                                children: fields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center justify-between gap-2 rounded-xl border border-[#eadfc8] bg-white px-3 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[.74rem] font-bold text-[#6f5438]",
                                                children: f.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 584,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: 0,
                                                value: v[f.key],
                                                onChange: (e)=>setV((s)=>({
                                                            ...s,
                                                            [f.key]: Math.max(0, Number(e.target.value) || 0)
                                                        })),
                                                className: "w-24 rounded-lg border border-[#e4f1ea] bg-[#fbfdfc] px-2 py-1 text-right font-mono text-[.8rem] font-bold text-[#1d4433] outline-none focus:border-[#10b981]",
                                                "aria-label": f.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 585,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, f.key, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 583,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 581,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 568,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-[#e4f1ea] bg-[#f9fcfa] p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[.64rem] font-black uppercase tracking-[.2em]",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                },
                                children: "The ladder, live"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 600,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 space-y-1 font-mono text-[.8rem] text-[#1d4433]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Opening stock"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 602,
                                                columnNumber: 49
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: inr(v.os)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 602,
                                                columnNumber: 75
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 602,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "+ Net purchases"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 603,
                                                columnNumber: 49
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: inr(v.np)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 603,
                                                columnNumber: 77
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 603,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "+ Direct expenses"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 604,
                                                columnNumber: 49
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: inr(v.de)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 604,
                                                columnNumber: 79
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 604,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "− Closing stock"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 605,
                                                columnNumber: 49
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "(",
                                                    inr(v.cs),
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 605,
                                                columnNumber: 77
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 605,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex justify-between border-t border-[#e4f1ea] pt-1 font-bold",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "= Cost of goods sold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 607,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: inr(cogs)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 607,
                                                columnNumber: 48
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 606,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex justify-between pt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Net sales"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 609,
                                                columnNumber: 54
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: inr(v.sales)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 609,
                                                columnNumber: 76
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 609,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: {
                                            scale: 0.96,
                                            opacity: 0.6
                                        },
                                        animate: {
                                            scale: 1,
                                            opacity: 1
                                        },
                                        className: "mt-1 flex justify-between rounded-lg px-2 py-1.5 font-black text-white",
                                        style: {
                                            background: loss ? "linear-gradient(135deg,#e11d48,#9f1239)" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_BTN_GRAD"]
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: loss ? "= Gross LOSS" : "= Gross PROFIT"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 617,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "₹",
                                                    inr(Math.abs(gp))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 618,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, gp, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 610,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 601,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 599,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/fa/FaParts4.tsx",
                lineNumber: 566,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/fa/FaParts4.tsx",
        lineNumber: 548,
        columnNumber: 5
    }, this);
}
_s1(GrossProfitLab, "k2Q2Cqxsw8PjDykVHOMRYsucw4g=");
_c4 = GrossProfitLab;
function FaGrossProfitLabSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "gp-lab",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 4 · Worked examples",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Six examples — then",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-emerald",
                                children: "drive the lab"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 636,
                                columnNumber: 15
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "The lecture's own numbers, from the simplest trading result to a full T-format trading account — and a lab that recomputes the ladder as you type."
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 631,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                            n: "01",
                            title: "Examples 1 & 2 — returns, then stock",
                            sub: "Purchases 30,000 · returns 5,000 · sales 40,000 · returns 5,000"
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 643,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                            n: "02",
                            title: "Examples 3 & 4 — the full ladder",
                            sub: "OS 10,000 · purchases 40,000 · returns 5,000 · sales 60,000 · SR 10,000 · CS 15,000"
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                            lineNumber: 644,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 642,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEq"], {
                    label: "Examples 1 → 4, compact",
                    children: `EX 1   Net sales 35,000 \u2212 Net purchases 25,000                    = GP \u20B910,000

EX 2   \u2026 with closing stock 5,000:  COGS = 25,000 \u2212 5,000 = 20,000
       GP = 35,000 \u2212 20,000                                        = GP \u20B915,000

EX 3   Net sales 50,000;  COGS = 10,000 + 35,000 \u2212 15,000 = 30,000
       GP = 50,000 \u2212 30,000                                        = GP \u20B920,000

EX 4   \u2026 plus wages/carriage of 5,000 to bring goods in:
       COGS = 30,000 + 5,000 = 35,000;  GP = 50,000 \u2212 35,000       = GP \u20B915,000`
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 646,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                        kind: "why",
                        title: "The 'merchandise' footnote",
                        children: [
                            "The term ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "“merchandise”"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 658,
                                columnNumber: 22
                            }, this),
                            " is also used for the term",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "“goods”"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 659,
                                columnNumber: 13
                            }, this),
                            " — same thing, older word. And note what Example 4 taught: expenses incurred to bring goods to the shop are not operating expenses — they are",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "part of the cost of goods sold"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 661,
                                columnNumber: 13
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 657,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 656,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "03",
                    title: "Example 5 — working backwards to closing stock",
                    sub: "First year: 15,000 unsold · next year: purchases 1,50,000 · direct expenses 10,000 · COGS 1,45,000"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 665,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEq"], {
                    label: "Backward, then the full account",
                    children: `Cost of unsold goods at the beginning of the year      15,000
Purchases during the year                           1,50,000
Direct Expenses                                        10,000
                                                     \u2014\u2014\u2014\u2014\u2014\u2014
                                                     1,75,000
Less: Cost of sold goods during the year            1,45,000
Closing Stock                                          30,000

Trading account (net sales 2,00,000):
Dr: 15,000 + 1,50,000 + 10,000 + GP 55,000 = 2,30,000
Cr: Sales 2,00,000 + Closing stock 30,000  = 2,30,000  \u2713`
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 666,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "04",
                    title: "Example 6 — a complete trading account",
                    sub: "M/s. ABC Traders · for the year ended 31st March 2022"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 678,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-2 text-center font-mono text-[.66rem] font-black uppercase tracking-[.2em]",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                },
                                children: "In the books of M/s. ABC Traders · trading account · ₹"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 681,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "warm-table min-w-[600px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Particulars (Dr)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                    lineNumber: 687,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "w-28 text-right",
                                                    children: "₹"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                    lineNumber: 688,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Particulars (Cr)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                    lineNumber: 689,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "w-28 text-right",
                                                    children: "₹"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts4.tsx",
                                            lineNumber: 686,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 685,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "To Opening inventory"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 695,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right font-mono",
                                                        children: "1,00,000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 695,
                                                        columnNumber: 48
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "By Sales"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right font-mono",
                                                        children: "11,00,000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 694,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: [
                                                            "To Purchases ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[.7rem] text-[#8a6b45]",
                                                                children: "(6,72,000 − 72,000)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                                lineNumber: 699,
                                                                columnNumber: 36
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 699,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right font-mono",
                                                        children: "6,00,000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 699,
                                                        columnNumber: 113
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "pl-6 text-[.78rem] italic",
                                                        children: "Less: Returns inward (1,00,000)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 700,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right font-mono",
                                                        children: "10,00,000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 700,
                                                        columnNumber: 97
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 698,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "To Carriage inwards"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 703,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right font-mono",
                                                        children: "30,000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 703,
                                                        columnNumber: 47
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "By Closing inventory"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 704,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right font-mono",
                                                        children: "2,00,000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 704,
                                                        columnNumber: 48
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 702,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "To Wages"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 707,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right font-mono",
                                                        children: "50,000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 707,
                                                        columnNumber: 36
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 706,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-extrabold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                        },
                                                        children: "To Gross profit c/d"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 710,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right font-mono font-black",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                        },
                                                        children: "4,20,000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 711,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 712,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 713,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 709,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-extrabold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                        },
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 716,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right font-mono font-black",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                        },
                                                        children: "12,00,000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 717,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-extrabold",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                        },
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 718,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right font-mono font-black",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                        },
                                                        children: "12,00,000"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                        lineNumber: 719,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                                lineNumber: 715,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 693,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 684,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 680,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 679,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                        kind: "insight",
                        title: "Read the account like its author",
                        children: [
                            "Net sales 10,00,000; the cost side stacks 1,00,000 + 6,00,000 + 30,000 + 50,000 = 7,80,000 minus the closing stock of 2,00,000 → COGS 5,80,000. Gross profit is the",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "balancing figure"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 729,
                                columnNumber: 13
                            }, this),
                            ": 10,00,000 + 2,00,000 − 7,80,000 = 4,20,000. The totals agreeing at 12,00,000 is the double-entry system signing its own work."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 726,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 725,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "05",
                    title: "The gross profit lab",
                    sub: "Five figures, one ladder — try the lecture's presets or your own"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 734,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GrossProfitLab, {}, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 736,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 735,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The trading account answers ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "did trading pay?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 742,
                                        columnNumber: 45
                                    }, void 0),
                                    " — its result is ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "gross"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 742,
                                        columnNumber: 85
                                    }, void 0),
                                    " profit or gross loss."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "COGS = opening stock + net purchases + ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "direct expenses"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 743,
                                        columnNumber: 56
                                    }, void 0),
                                    " − closing stock."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Closing stock: valued at ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "cost or NRV, whichever is lower"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 744,
                                        columnNumber: 42
                                    }, void 0),
                                    "; credit side of the trading account AND an asset in the balance sheet."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Gross profit is the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "balancing figure"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 745,
                                        columnNumber: 37
                                    }, void 0),
                                    " — Example 6’s 4,20,000 closed both sides at 12,00,000."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The lab is the exam in miniature: two questions — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "which figures enter the ladder"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 746,
                                        columnNumber: 67
                                    }, void 0),
                                    ", and ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "can you close the account"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                                        lineNumber: 746,
                                        columnNumber: 110
                                    }, void 0),
                                    "?"
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 740,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 739,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaQuiz"], {
                        source: "Capstone",
                        q: "ABC Traders: carriage inwards ₹30,000 and office rent ₹80,000. Which enters the trading account's cost side?",
                        options: [
                            "Both — all expenses are direct",
                            "Only carriage inwards — it brought the goods to the shop; office rent waits for the P&L",
                            "Only office rent — carriage is a selling cost",
                            "Neither — both go to the balance sheet"
                        ],
                        answer: 1,
                        explain: "Expenses incurred to bring goods into the shop (carriage inwards, wages for transportation, brokerage on purchases) increase the cost of goods sold and belong in the trading account. Office rent has nothing to do with getting the goods there — it is an indirect expense, destined for the Profit & Loss account."
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 752,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 751,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                        kind: "story",
                        title: "The course, in one breath",
                        children: [
                            "Five openings asked what a business really earns. Four assumptions set the rules. The dual aspect gave every rupee two stories. The journal wrote them down, the ledger grouped them, the trial balance checked the arithmetic, the adjustments made the periods honest — and the final accounts turned the whole pipeline into two answers: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "did we profit, and what do we own and owe?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts4.tsx",
                                lineNumber: 772,
                                columnNumber: 22
                            }, this),
                            " That is Financial Accounting — one equation, kept true from the first ₹10,000 to the last ₹12,00,000."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts4.tsx",
                        lineNumber: 767,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts4.tsx",
                    lineNumber: 766,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/fa/FaParts4.tsx",
            lineNumber: 630,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/fa/FaParts4.tsx",
        lineNumber: 629,
        columnNumber: 5
    }, this);
}
_c5 = FaGrossProfitLabSection;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "PrepaidSplitter");
__turbopack_context__.k.register(_c1, "FaAdjustingSection");
__turbopack_context__.k.register(_c2, "FaFinalAccountsSection");
__turbopack_context__.k.register(_c3, "FaTradingSection");
__turbopack_context__.k.register(_c4, "GrossProfitLab");
__turbopack_context__.k.register(_c5, "FaGrossProfitLabSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_fa_FaParts4_tsx_3d4960d4._.js.map