(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/fa/FaParts3.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaJournalSection",
    ()=>FaJournalSection,
    "FaLedgerSection",
    ()=>FaLedgerSection,
    "FaStatementsSection",
    ()=>FaStatementsSection,
    "FaTrialBalanceSection",
    ()=>FaTrialBalanceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   Financial Accounting — PART 3 of 4 (shelf 03 of The Atlas)
   Module 3: the accounting cycle, the journal (Vogue Company),
   the ledger (the Cash T-account, posted for real), the five
   financial statements (Softomation), and the trial balance
   (Pearl's books) — with the Trial Balance Sorter machine.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open-text.js [app-client] (ecmascript) <export default as BookOpenText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookPen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/notebook-pen.js [app-client] (ecmascript) <export default as NotebookPen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/fa/FaParts1.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ============================================================
   CHAPTER 9 — THE JOURNAL (Vogue Company)
   ============================================================ */ const CYCLE_NODES = [
    {
        t: "Transactions",
        s: "value moves"
    },
    {
        t: "Journal",
        s: "the day book"
    },
    {
        t: "Ledger",
        s: "T-accounts"
    },
    {
        t: "Trial balance",
        s: "Dr = Cr check"
    },
    {
        t: "Adjusted TB",
        s: "deferrals · accruals"
    },
    {
        t: "Final accounts",
        s: "P&L + balance sheet"
    }
];
function AccountingCycle() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm overflow-hidden p-5 sm:p-7",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 960 200",
            className: "h-auto w-full",
            role: "img",
            "aria-label": "The accounting cycle: transactions to journal to ledger to trial balance to adjusted trial balance to final accounts",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                            id: "faCycArrow",
                            markerWidth: "8",
                            markerHeight: "8",
                            refX: "6",
                            refY: "3",
                            orient: "auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0,0 L6,3 L0,6 Z",
                                fill: "#8a6b45"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "faCycGrad",
                            x1: "0",
                            y1: "0",
                            x2: "1",
                            y2: "0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    stopColor: "#10b981"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#047857"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                CYCLE_NODES.map((n, i)=>{
                    const cx = 80 + i * 160;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: i * 0.12,
                            duration: 0.45
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: cx - 62,
                                y: "52",
                                width: "124",
                                height: "64",
                                rx: "14",
                                fill: "#f2faf6",
                                stroke: "#a9dcc4",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: cx,
                                y: "80",
                                textAnchor: "middle",
                                fontSize: "13.5",
                                fontWeight: "800",
                                fill: "#1d4433",
                                children: n.t
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: cx,
                                y: "100",
                                textAnchor: "middle",
                                fontSize: "10.5",
                                fontWeight: "600",
                                fill: "#6f5438",
                                children: n.s
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: cx,
                                y: "42",
                                textAnchor: "middle",
                                fontSize: "10",
                                fontWeight: "800",
                                fill: "#047857",
                                children: String(i + 1).padStart(2, "0")
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this),
                            i < CYCLE_NODES.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: `M ${cx + 66} 84 H ${cx + 94}`,
                                fill: "none",
                                stroke: "#8a6b45",
                                strokeWidth: "2",
                                markerEnd: "url(#faCycArrow)",
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
                                    delay: i * 0.12 + 0.25,
                                    duration: 0.3
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 69,
                                columnNumber: 17
                            }, this) : null
                        ]
                    }, n.t, true, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this);
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                    x: "480",
                    y: "160",
                    textAnchor: "middle",
                    fontSize: "12.5",
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
                        delay: 0.9
                    },
                    children: "every rupee travels this pipeline — this module walks steps 2 and 3, chapter 12 checks step 4"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                    cx: "480",
                    cy: "184",
                    r: "4",
                    fill: "url(#faCycGrad)",
                    style: {
                        transformBox: "fill-box",
                        transformOrigin: "center"
                    },
                    animate: {
                        opacity: [
                            0.3,
                            1,
                            0.3
                        ],
                        scale: [
                            1,
                            1.4,
                            1
                        ]
                    },
                    transition: {
                        duration: 2.6,
                        repeat: Infinity
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/fa/FaParts3.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/fa/FaParts3.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = AccountingCycle;
const VOGUE_JOURNAL = [
    {
        date: "Jun 1",
        lines: [
            {
                acc: "Cash A/c",
                amt: 50000,
                side: "dr"
            },
            {
                acc: "To Share Capital",
                amt: 50000,
                side: "cr"
            }
        ],
        narration: "Being capital invested in cash"
    },
    {
        date: "Jun 2",
        lines: [
            {
                acc: "Office Supplies A/c",
                amt: 2000,
                side: "dr"
            },
            {
                acc: "To Cash",
                amt: 2000,
                side: "cr"
            }
        ],
        narration: "Being office supplies bought"
    },
    {
        date: "Jun 3",
        lines: [
            {
                acc: "Rent Expense A/c",
                amt: 1500,
                side: "dr"
            },
            {
                acc: "To Cash",
                amt: 1500,
                side: "cr"
            }
        ],
        narration: "Being office rent paid for June"
    },
    {
        date: "Jun 4",
        lines: [
            {
                acc: "Equipment A/c",
                amt: 3000,
                side: "dr"
            },
            {
                acc: "To Cash",
                amt: 3000,
                side: "cr"
            }
        ],
        narration: "Being equipment bought from Agrawal Company"
    },
    {
        date: "Jun 6",
        lines: [
            {
                acc: "Prepaid Insurance A/c",
                amt: 720,
                side: "dr"
            },
            {
                acc: "To Cash",
                amt: 720,
                side: "cr"
            }
        ],
        narration: "Being one-year fire policy paid in advance"
    },
    {
        date: "Jun 7",
        lines: [
            {
                acc: "Cash A/c",
                amt: 2000,
                side: "dr"
            },
            {
                acc: "To Revenue from Services",
                amt: 2000,
                side: "cr"
            }
        ],
        narration: "Being a design sold for cash"
    },
    {
        date: "Jun 8",
        lines: [
            {
                acc: "Cash A/c",
                amt: 1500,
                side: "dr"
            },
            {
                acc: "To Unearned Revenue",
                amt: 1500,
                side: "cr"
            }
        ],
        narration: "Being Kidswear's advance for services to be provided later"
    },
    {
        date: "Jun 9",
        lines: [
            {
                acc: "Office Supplies A/c",
                amt: 3500,
                side: "dr"
            },
            {
                acc: "To Trade Payables",
                amt: 3500,
                side: "cr"
            }
        ],
        narration: "Being supplies bought on credit from Mohan Company"
    },
    {
        date: "Jun 10",
        lines: [
            {
                acc: "Trade Receivables A/c",
                amt: 9000,
                side: "dr"
            },
            {
                acc: "To Revenue from Services",
                amt: 9000,
                side: "cr"
            }
        ],
        narration: "Being Shah Company billed for designs completed"
    },
    {
        date: "Jun 25",
        lines: [
            {
                acc: "Cash A/c",
                amt: 1000,
                side: "dr"
            },
            {
                acc: "Trade Receivables A/c",
                amt: 2000,
                side: "dr"
            },
            {
                acc: "To Revenue from Services",
                amt: 3000,
                side: "cr"
            }
        ],
        narration: "Being designs completed for Gupta Company; ₹1,000 received in part payment"
    }
];
function JournalTable() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border border-[#c7e5d6]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-2.5 text-center font-mono text-[.7rem] font-black uppercase tracking-[.18em]",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                },
                children: "Vogue Company — journal (selected entries) · amounts in ₹"
            }, void 0, false, {
                fileName: "[project]/src/components/fa/FaParts3.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto bg-[#fffdf9]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "warm-table min-w-[620px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "w-20",
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Particulars"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "w-24 text-right",
                                        children: "Dr (₹)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "w-24 text-right",
                                        children: "Cr (₹)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: VOGUE_JOURNAL.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                    children: [
                                        e.lines.map((l, li)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "align-top font-mono text-[.72rem] font-bold text-[#6f5438]",
                                                        children: li === 0 ? e.date : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: l.side === "cr" ? "pl-8 text-[.84rem] text-[#2f2013]" : "text-[.84rem] font-semibold text-[#2f2013]",
                                                        children: [
                                                            l.acc,
                                                            l.side === "dr" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 font-mono text-[.62rem] font-black",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                                                },
                                                                children: "Dr"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 42
                                                            }, this) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right font-mono text-[.8rem]",
                                                        children: l.side === "dr" ? l.amt.toLocaleString("en-IN") : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right font-mono text-[.8rem]",
                                                        children: l.side === "cr" ? l.amt.toLocaleString("en-IN") : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, e.date + li, true, {
                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "pb-3 pl-2 text-[.72rem] italic text-[#8a6b45]",
                                                    colSpan: 3,
                                                    children: [
                                                        "(",
                                                        e.narration,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, e.date, true, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/fa/FaParts3.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/fa/FaParts3.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_c1 = JournalTable;
function FaJournalSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "journal",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 3 · Recording — the journal",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "The pipeline, and ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-emerald",
                                children: "the day book"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 155,
                                columnNumber: 33
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "Two approaches exist for recording transactions — the accounting equation approach and the traditional approach. Both land in the same place: a journal where every event is written with its two effects, the day it happens."
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccountingCycle, {}, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "01",
                    title: "The Vogue Company",
                    sub: "A business that supplies new designs for dresses — June, transaction by transaction"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                    kind: "story",
                    title: "The set-up",
                    children: [
                        "Vogue is a business supplying new designs for dresses. The lecture records its June transactions in terms of debits and credits — and warns early:",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "not every item below is an accounting transaction"
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        ". If an item does not qualify, the correct answer is to say ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "why"
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 170,
                            columnNumber: 40
                        }, this),
                        " it does not."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "02",
                    title: "The three-line ritual",
                    sub: "ANALYSIS → RULES → ENTRY — the same three moves, every single time"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepsFlow"], {
                    steps: [
                        {
                            label: "ANALYSIS",
                            sub: "Which accounts are affected, and which way?",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$notebook$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__NotebookPen$3e$__["NotebookPen"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 176,
                                columnNumber: 92
                            }, void 0)
                        },
                        {
                            label: "RULES",
                            sub: "Debit assets/expenses to increase — credit liabilities/capital/revenues to increase.",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 177,
                                columnNumber: 130
                            }, void 0)
                        },
                        {
                            label: "ENTRY",
                            sub: "Write the debits, the credits, and a narration that says why.",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenText$3e$__["BookOpenText"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 178,
                                columnNumber: 107
                            }, void 0)
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "03",
                    title: "The journal, ruled like paper",
                    sub: "Ten entries from Vogue's June — including one compound entry"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JournalTable, {}, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid gap-3 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                            kind: "warn",
                            title: "June 5 — the agreement that books nothing",
                            children: [
                                "Vogue signs with EthniWear: a special design, fee ₹2,000 payable",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "on completion"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                ". No entry. Signing transfers no value — no asset moves, no obligation is born. Accounting records ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "transactions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 191,
                                    columnNumber: 52
                                }, this),
                                ", not intentions."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                            kind: "warn",
                            title: "June 21 — the appointment that books nothing",
                            children: [
                                "An office manager is appointed on a monthly salary of ₹1,500. No entry. Hiring changes no asset, liability or equity — the salary becomes an expense",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "period by period"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                ", as the work is actually received and paid."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaQuiz"], {
                        source: "Compound entries",
                        q: "On June 25, Vogue completes ₹3,000 of designs for Gupta Company and receives ₹1,000 in part payment. The entry touches\\u2026",
                        options: [
                            "Cash only — revenue is recorded when fully collected",
                            "Cash Dr 1,000 + Trade receivables Dr 2,000 / To Revenue 3,000",
                            "Revenue Dr 3,000 / To Cash 3,000",
                            "Nothing until the final ₹2,000 arrives"
                        ],
                        answer: 1,
                        explain: "Revenue is earned in full the moment the designs are delivered — 3,000. Of that, 1,000 arrived (cash up), and 2,000 is now a claim on Gupta (trade receivables up). One event, three accounts — that is a compound entry, and the equation still closes: +3,000 assets = +3,000 equity."
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/fa/FaParts3.tsx",
            lineNumber: 150,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/fa/FaParts3.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_c2 = FaJournalSection;
/* ============================================================
   CHAPTER 10 — THE LEDGER (T-accounts)
   ============================================================ */ const CASH_DR = [
    {
        d: "Jun 1",
        label: "To Share Capital",
        amt: 50000
    },
    {
        d: "Jun 7",
        label: "To Revenue from Services",
        amt: 2000
    },
    {
        d: "Jun 8",
        label: "To Unearned Revenue",
        amt: 1500
    },
    {
        d: "Jun 18",
        label: "To Trade Receivables",
        amt: 4000
    },
    {
        d: "Jun 25",
        label: "To Revenue from Services",
        amt: 1000
    }
];
const CASH_CR = [
    {
        d: "Jun 2",
        label: "By Office Supplies",
        amt: 2000
    },
    {
        d: "Jun 3",
        label: "By Rent Expense",
        amt: 1500
    },
    {
        d: "Jun 4",
        label: "By Equipment",
        amt: 3000
    },
    {
        d: "Jun 6",
        label: "By Prepaid Insurance",
        amt: 720
    },
    {
        d: "Jun 14",
        label: "By Trade Payables",
        amt: 1000
    },
    {
        d: "Jun 27",
        label: "By Telephone Expense",
        amt: 200
    },
    {
        d: "Jun 28",
        label: "By Salaries Expense",
        amt: 800
    },
    {
        d: "Jun 29",
        label: "By Electricity Expense",
        amt: 150
    },
    {
        d: "Jun 30",
        label: "By Dividends",
        amt: 2200
    }
];
const DR_TOTAL = CASH_DR.reduce(_c3 = (n, r)=>n + r.amt, 0);
_c4 = DR_TOTAL;
const CR_TOTAL = CASH_CR.reduce(_c5 = (n, r)=>n + r.amt, 0);
_c6 = CR_TOTAL;
const CASH_BALANCE = DR_TOTAL - CR_TOTAL;
function CashTAccount() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-2.5 text-center font-mono text-[.7rem] font-black uppercase tracking-[.18em]",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                },
                children: "Vogue Company — Cash account · for June · amounts in ₹"
            }, void 0, false, {
                fileName: "[project]/src/components/fa/FaParts3.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 divide-x divide-[#e4f1ea]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "border-b border-[#e4f1ea] bg-white/60 px-3 py-2 text-center font-mono text-[.62rem] font-black uppercase tracking-[.2em]",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                },
                                children: "Dr · money in"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this),
                            CASH_DR.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-baseline gap-2 border-b border-[#f0f7f2] px-3 py-1.5 text-[.78rem]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-11 shrink-0 font-mono text-[.66rem] text-[#8a6b45]",
                                            children: r.d
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0 flex-1 truncate text-[#2f2013]",
                                            children: r.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "shrink-0 font-mono font-semibold",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                            },
                                            children: r.amt.toLocaleString("en-IN")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, r.d, true, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline gap-2 bg-[#f4faf7] px-3 py-1.5 text-[.78rem] font-extrabold",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-11 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            "Total — ",
                                            DR_TOTAL.toLocaleString("en-IN")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "border-b border-[#e4f1ea] bg-white/60 px-3 py-2 text-center font-mono text-[.62rem] font-black uppercase tracking-[.2em] text-[#b45309]",
                                children: "Cr · money out"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            CASH_CR.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-baseline gap-2 border-b border-[#f0f7f2] px-3 py-1.5 text-[.78rem]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-11 shrink-0 font-mono text-[.66rem] text-[#8a6b45]",
                                            children: r.d
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0 flex-1 truncate text-[#2f2013]",
                                            children: r.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "shrink-0 font-mono font-semibold text-[#7a3a10]",
                                            children: r.amt.toLocaleString("en-IN")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, r.d, true, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline gap-2 bg-[#faf4e6] px-3 py-1.5 text-[.78rem] font-extrabold text-[#7a3a10]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-11 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            "Total — ",
                                            CR_TOTAL.toLocaleString("en-IN")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/fa/FaParts3.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-center gap-2 border-t border-[#e4f1ea] bg-[#f4faf7] px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        initial: {
                            scale: 0.92,
                            opacity: 0
                        },
                        whileInView: {
                            scale: 1,
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        className: "inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[.8rem] font-black text-white",
                        style: {
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_BTN_GRAD"],
                            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_BTN_SHADOW"]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            "Balance c/d — ₹",
                            CASH_BALANCE.toLocaleString("en-IN"),
                            " Dr"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.74rem] font-semibold text-muted-warm",
                        children: [
                            DR_TOTAL.toLocaleString("en-IN"),
                            " in − ",
                            CR_TOTAL.toLocaleString("en-IN"),
                            " out = ",
                            CASH_BALANCE.toLocaleString("en-IN"),
                            " · carried down to July 1"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/fa/FaParts3.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/fa/FaParts3.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
_c7 = CashTAccount;
function FaLedgerSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "ledger",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 3 · Recording — the ledger",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Posting — where the journal",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-emerald",
                                children: "grows accounts"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 316,
                                columnNumber: 15
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "The journal records events in time order; the ledger regroups them by account. Open one page per account, post every debit and every credit to its page, and each page ends with a balance that speaks."
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 311,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "01",
                    title: "One account to rule them all: Cash",
                    sub: "Every rupee that entered or left Vogue in June, on one T-shaped page"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CashTAccount, {}, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 324,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid gap-3 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                            kind: "insight",
                            title: "Read the T like a story",
                            children: [
                                "The debit side is the cash ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "coming in"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 329,
                                    columnNumber: 40
                                }, this),
                                " (capital, service revenue, collections, an advance); the credit side is cash ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "going out"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 330,
                                    columnNumber: 50
                                }, this),
                                " (supplies, rent, equipment, insurance, settling suppliers, phone, salaries, electricity, dividends). Nine outflows against five inflows — and the account still closes at ₹46,930."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                            kind: "why",
                            title: "The pipeline clicks shut",
                            children: [
                                "That ₹46,930 debit balance is ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "exactly the Cash line in Vogue’s June 30 trial balance"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 335,
                                    columnNumber: 43
                                }, this),
                                ". The ledger balance is not near the trial-balance figure — it",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "is"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this),
                                " the trial-balance figure. Same numbers, next station."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 334,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 327,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "02",
                    title: "The ledger, grouped",
                    sub: "Exhibit 3.3 groups Vogue's June accounts into asset, liability and equity categories"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 341,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-3",
                    children: [
                        {
                            t: "Asset accounts",
                            d: "Cash · Equipment · Office supplies · Trade receivables · Prepaid insurance",
                            tone: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                        },
                        {
                            t: "Liability accounts",
                            d: "Trade payables · Unearned revenue",
                            tone: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"].gold
                        },
                        {
                            t: "Equity accounts",
                            d: "Share capital · Dividends · Revenue · all expense accounts",
                            tone: "#7c6248"
                        }
                    ].map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * 90,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[.64rem] font-black uppercase tracking-[.2em]",
                                        style: {
                                            color: g.tone
                                        },
                                        children: g.t
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 350,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.82rem] leading-relaxed text-muted-warm",
                                        children: g.d
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 351,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 349,
                                columnNumber: 15
                            }, this)
                        }, g.t, false, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 348,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 342,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaQuiz"], {
                        source: "Ledger mechanics",
                        q: "Why does Vogue's Cash account end with a DEBIT balance of \\u20B946,930?",
                        options: [
                            "Because cash is revenue, and revenue carries debit balances",
                            "Because total debits (58,500) exceed total credits (11,570) — and cash, an asset, keeps its balance on the debit side",
                            "Because dividends were paid in cash",
                            "Because the ledger always balances at zero"
                        ],
                        answer: 1,
                        explain: "Post everything, total both sides, subtract: 58,500 − 11,570 = 46,930. The side the balance sits on follows the account's nature — assets carry debit balances, liabilities and equity carry credit balances. Cash is an asset, so its balance is a debit."
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 358,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/fa/FaParts3.tsx",
            lineNumber: 310,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/fa/FaParts3.tsx",
        lineNumber: 309,
        columnNumber: 5
    }, this);
}
_c8 = FaLedgerSection;
function FaStatementsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "statements",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 3 · Reporting — the five statements",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "One month of transactions,",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-emerald",
                                children: "five statements"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 388,
                                columnNumber: 15
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "Five major statements work together to give a full picture of an enterprise's financial story. Meet Softomation — one small company, five transactions — and watch them ripple through every statement."
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                    children: [
                        {
                            n: "01",
                            t: "Statement of Profit & Loss",
                            d: "Reports financial performance over a period."
                        },
                        {
                            n: "02",
                            t: "Statement of Retained Earnings",
                            d: "Shows how earnings were distributed or retained."
                        },
                        {
                            n: "03",
                            t: "Balance Sheet",
                            d: "Shows financial position at a point in time."
                        },
                        {
                            n: "04",
                            t: "Cash Flow Statement",
                            d: "Summarises cash inflows and outflows."
                        },
                        {
                            n: "05",
                            t: "Statement of Changes in Equity",
                            d: "Explains how equity changed during the period."
                        }
                    ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * 70,
                            className: i === 4 ? "sm:col-span-2 lg:col-span-1" : "",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[.68rem] font-black tracking-[.24em]",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                        },
                                        children: s.n
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 404,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1.5 h-px w-10",
                                        style: {
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"].border
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 405,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2.5 text-[.94rem] font-extrabold leading-snug text-[#3e2c1d]",
                                        children: s.t
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 406,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-[.8rem] leading-relaxed text-muted-warm",
                                        children: s.d
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 407,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 403,
                                columnNumber: 15
                            }, this)
                        }, s.n, false, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 402,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 394,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "01",
                    title: "Meet Softomation",
                    sub: "One small company, five transactions — March"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 413,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                    kind: "story",
                    title: "The five transactions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "01"
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 415,
                            columnNumber: 11
                        }, this),
                        " — Founders invest ₹50,000 cash as share capital.",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "02"
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 416,
                            columnNumber: 11
                        }, this),
                        " — ₹20,000 in software services billed and collected in cash.",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "03"
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 417,
                            columnNumber: 11
                        }, this),
                        " — ₹5,200 paid for salaries (4,000), rent (1,200) and other operating costs.",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "04"
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 418,
                            columnNumber: 11
                        }, this),
                        " — ₹3,500 distributed to shareholders as a cash dividend.",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "05"
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 419,
                            columnNumber: 11
                        }, this),
                        " — Net result: profit of ₹14,800; the statements below carry these five events into five different shapes."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 414,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "02",
                    title: "Statement of Profit & Loss",
                    sub: "Also called the income statement — performance over the period"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 423,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden rounded-2xl border border-[#c7e5d6]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-2 text-center font-mono text-[.66rem] font-black uppercase tracking-[.2em]",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                },
                                children: "Softomation · statement of profit and loss · month ended March 31 · ₹"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 426,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "warm-table",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "font-semibold",
                                                    children: "Revenue from services"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "w-32 text-right font-mono font-bold",
                                                    children: "20,000"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 431,
                                                    columnNumber: 77
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 431,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "pl-6 text-[.82rem]",
                                                    children: "Salaries expense"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono",
                                                    children: "4,000"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 77
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 432,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "pl-6 text-[.82rem]",
                                                    children: "Rent expense"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono",
                                                    children: "1,200"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 73
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "pl-6 font-bold italic",
                                                    children: "Total expenses"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono font-bold",
                                                    children: "5,200"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 434,
                                                    columnNumber: 78
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "font-extrabold",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                    },
                                                    children: "Net profit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono text-[1rem] font-black",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                    },
                                                    children: "14,800"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 435,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 430,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 425,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 424,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "03",
                    title: "Statement of Retained Earnings",
                    sub: "The bridge between the P&L and the equity section of the balance sheet"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 444,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden rounded-2xl border border-[#c7e5d6]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-2 text-center font-mono text-[.66rem] font-black uppercase tracking-[.2em]",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                },
                                children: "Softomation · statement of retained earnings · month ended March 31 · ₹"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 447,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "warm-table",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "Beginning balance"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "w-32 text-right font-mono",
                                                    children: "0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 47
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 452,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "Add — net profit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono font-semibold",
                                                    children: "14,800"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 46
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 453,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "font-semibold",
                                                    children: "Available for distribution"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono font-bold",
                                                    children: "14,800"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 82
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 454,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "Deduct — drawings (dividend)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono text-[#b3402c]",
                                                    children: "(3,500)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 58
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 455,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "font-extrabold",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                    },
                                                    children: "Ending balance"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono text-[1rem] font-black",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                    },
                                                    children: "11,300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 458,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 456,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 451,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 450,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 446,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 445,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                        kind: "why",
                        title: "Dividends are not expenses",
                        children: [
                            "Profit distributions appear ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "“below the line”"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 466,
                                columnNumber: 41
                            }, this),
                            " — in this statement, not in the profit and loss. They are a ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "return of the owners’ money"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 467,
                                columnNumber: 52
                            }, this),
                            ", not a cost of operations. Retaining earnings signals the owner is reinvesting in the business."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 465,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 464,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "04",
                    title: "Statement of Changes in Equity",
                    sub: "Capital and retained earnings, side by side"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 473,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "warm-table min-w-[560px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {}, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                lineNumber: 479,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-right",
                                                children: "Capital (₹)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                lineNumber: 480,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-right",
                                                children: "Retained earnings (₹)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                lineNumber: 481,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "text-right",
                                                children: "Total (₹)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                lineNumber: 482,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 478,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 477,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "Beginning balance"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono",
                                                    children: "0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 47
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono",
                                                    children: "0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 90
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono",
                                                    children: "0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 133
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 486,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "Capital introduced"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono font-semibold",
                                                    children: "50,000"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 48
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono",
                                                    children: "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 110
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono font-semibold",
                                                    children: "50,000"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 153
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 487,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "Net profit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono",
                                                    children: "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 40
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono font-semibold",
                                                    children: "14,800"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 83
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono font-semibold",
                                                    children: "14,800"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 145
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 488,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "Withdrawn"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono",
                                                    children: "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 39
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono text-[#b3402c]",
                                                    children: "(3,500)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 82
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono text-[#b3402c]",
                                                    children: "(3,500)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 146
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 489,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "font-extrabold",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                    },
                                                    children: "Ending balance"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono font-black",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                    },
                                                    children: "50,000"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 492,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono font-black",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                    },
                                                    children: "11,300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 493,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono text-[.95rem] font-black",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                    },
                                                    children: "61,300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 494,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 490,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 485,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 476,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 475,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 474,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "05",
                    title: "The balance sheet — position at a point",
                    sub: "Softomation closes March at ₹85,300 — claimed by outsiders and owners"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 501,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-warm p-5 sm:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-center gap-3 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-xl border px-4 py-2 font-mono text-[.82rem] font-black",
                                        style: {
                                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"].border,
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"].wash,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                        },
                                        children: "Assets ₹85,300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 505,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-lg font-black",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                        },
                                        children: "="
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 508,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-xl border px-4 py-2 font-mono text-[.82rem] font-black",
                                        style: {
                                            borderColor: "#e8d3ac",
                                            background: "#faf4e4",
                                            color: "#8a5a10"
                                        },
                                        children: "Liabilities ₹24,000"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 509,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-lg font-black",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                        },
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 512,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-xl border px-4 py-2 font-mono text-[.82rem] font-black",
                                        style: {
                                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"].border,
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"].wash,
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                        },
                                        children: "Equity ₹61,300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 513,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 504,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-center text-[.8rem] leading-relaxed text-muted-warm",
                                children: "Equity ₹61,300 = share capital ₹50,000 + retained earnings ₹11,300 — the two statements above, folded into the balance sheet’s last line."
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 517,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 503,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 502,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 overflow-hidden rounded-2xl border border-[#ecd9bd] bg-[#fffdf9]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "border-b border-[#f0e2c8] px-4 py-2 text-center font-mono text-[.66rem] font-black uppercase tracking-[.2em] text-[#8a5a10]",
                                children: "A full balance sheet to keep — Abraham Company · September 30 · ₹"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 525,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 md:divide-x md:divide-[#f0e2c8]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "warm-table",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        colSpan: 2,
                                                        children: "Assets"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 28
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 24
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                lineNumber: 530,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                children: "Cash"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 532,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "w-24 text-right font-mono",
                                                                children: "5,000"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 532,
                                                                columnNumber: 36
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 532,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                children: "Trade receivables"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 533,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "text-right font-mono",
                                                                children: "17,000"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 533,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 533,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                children: "Supplies"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 534,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "text-right font-mono",
                                                                children: "9,000"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 534,
                                                                columnNumber: 40
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                children: "Equipment"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "text-right font-mono",
                                                                children: "19,000"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                children: "Building"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "text-right font-mono",
                                                                children: "21,800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 536,
                                                                columnNumber: 40
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                children: "Land"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "text-right font-mono",
                                                                children: "21,000"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 36
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "font-extrabold",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                                },
                                                                children: "Total assets"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "text-right font-mono font-black",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                                },
                                                                children: "92,800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 100
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                lineNumber: 531,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 529,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "warm-table",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        colSpan: 2,
                                                        children: "Liabilities & equity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 542,
                                                        columnNumber: 28
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 24
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                lineNumber: 542,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                children: "Loan payable"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "w-24 text-right font-mono",
                                                                children: "12,000"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 44
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                children: "Expenses payable"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 545,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "text-right font-mono",
                                                                children: "3,500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 545,
                                                                columnNumber: 48
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                children: "Equity — Abraham"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 546,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "text-right font-mono",
                                                                children: "77,300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 546,
                                                                columnNumber: 48
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 546,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "font-extrabold",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                                },
                                                                children: "Total claims"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 547,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "text-right font-mono font-black",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                                },
                                                                children: "92,800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                                lineNumber: 547,
                                                                columnNumber: 100
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 547,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                lineNumber: 543,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 541,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 528,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 524,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 523,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "06",
                    title: "Cash flow — the third mirror",
                    sub: "The same month, told strictly in cash"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 554,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-3",
                    children: [
                        {
                            t: "Operating",
                            d: "Cash from customers (₹20,000 billed & collected) minus cash to suppliers and employees. The engine room of the business.",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"]
                        },
                        {
                            t: "Investing",
                            d: "Cash spent on long-lived resources — Softomation's equipment purchases live here.",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"]
                        },
                        {
                            t: "Financing",
                            d: "Capital introduced (₹50,000) and dividends paid (₹3,500) — the owners' channel in and out.",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenText$3e$__["BookOpenText"]
                        }
                    ].map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * 90,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md",
                                        style: {
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_BTN_GRAD"]
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(b.icon, {
                                            className: "h-4.5 w-4.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 564,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 563,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[.95rem] font-extrabold text-[#3e2c1d]",
                                        children: [
                                            b.t,
                                            " activities"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 566,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-[.8rem] leading-relaxed text-muted-warm",
                                        children: b.d
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 567,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 562,
                                columnNumber: 15
                            }, this)
                        }, b.t, false, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 561,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 555,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                        kind: "insight",
                        title: "Why a profitable company needs this statement",
                        children: [
                            "The P&L says ₹14,800 of profit; the cash statement tells you what actually",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "landed in the bank"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 575,
                                columnNumber: 13
                            }, this),
                            " — and which bucket each rupee travelled through. Solaris (chapter 1) died in the gap between those two mirrors."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 573,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 572,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Five statements, one story: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "performance · retention · position · cash · equity"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 583,
                                        columnNumber: 45
                                    }, void 0),
                                    "."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The P&L measures the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "period"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 584,
                                        columnNumber: 42
                                    }, void 0),
                                    "; the balance sheet photographs the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "point"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 584,
                                        columnNumber: 91
                                    }, void 0),
                                    "."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Dividends are ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "below the line"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 585,
                                        columnNumber: 31
                                    }, void 0),
                                    " — a return to owners, never an expense."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The balance sheet’s equity line is the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "changes-in-equity statement’s ending balance"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 586,
                                        columnNumber: 62
                                    }, void 0),
                                    "."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The cash flow statement’s three buckets — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "operating, investing, financing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 587,
                                        columnNumber: 65
                                    }, void 0),
                                    " — are the same month, told strictly in cash."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 581,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 580,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaQuiz"], {
                        source: "The bridge statement",
                        q: "Softomation earned ₹14,800 and distributed ₹3,500. Which figure links the P&L to the balance sheet?",
                        options: [
                            "₹20,000 — the revenue line",
                            "₹11,300 — retained earnings, the P&L's profit minus what was distributed",
                            "₹50,000 — the share capital",
                            "₹61,300 — total equity including capital"
                        ],
                        answer: 1,
                        explain: "The retained-earnings statement is the bridge: beginning 0 + profit 14,800 − drawings 3,500 = 11,300, which is exactly the retained-earnings line inside the balance sheet's equity. The full equity of 61,300 also includes the 50,000 the owners put in — but the P&L's contribution alone is the 11,300."
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 593,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 592,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/fa/FaParts3.tsx",
            lineNumber: 382,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/fa/FaParts3.tsx",
        lineNumber: 381,
        columnNumber: 5
    }, this);
}
_c9 = FaStatementsSection;
const PEARL_TB = [
    {
        name: "Capital",
        amt: 44000,
        side: "cr",
        why: "Owners' claim — equity family carries credit balances"
    },
    {
        name: "Bills receivable",
        amt: 5000,
        side: "dr",
        why: "An asset — a claim Pearl holds"
    },
    {
        name: "Wages",
        amt: 800,
        side: "dr",
        why: "An expense — expenses carry debit balances"
    },
    {
        name: "Drawings",
        amt: 4000,
        side: "dr",
        why: "Owner's withdrawals — debit family"
    },
    {
        name: "Purchases",
        amt: 75000,
        side: "dr",
        why: "Goods bought — debit by nature"
    },
    {
        name: "Interest on investment",
        amt: 2000,
        side: "cr",
        why: "Income earned — incomes carry credit balances"
    },
    {
        name: "Customs duty",
        amt: 3000,
        side: "dr",
        why: "A cost of bringing goods in — debit family"
    },
    {
        name: "Computer",
        amt: 20000,
        side: "dr",
        why: "An asset — equipment owned"
    },
    {
        name: "Sales",
        amt: 72000,
        side: "cr",
        why: "Revenue — the credit family"
    },
    {
        name: "Opening stock",
        amt: 10200,
        side: "dr",
        why: "Unsold goods at start — an asset"
    }
];
function TrialBalanceSorter() {
    _s();
    const [picks, setPicks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "TrialBalanceSorter.useState": ()=>Object.fromEntries(PEARL_TB.map({
                "TrialBalanceSorter.useState": (a)=>[
                        a.name,
                        null
                    ]
            }["TrialBalanceSorter.useState"]))
    }["TrialBalanceSorter.useState"]);
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const score = PEARL_TB.filter((a)=>picks[a.name] === a.side).length;
    const done = PEARL_TB.every((a)=>picks[a.name] !== null);
    const pick = (name, side)=>{
        if (checked) return;
        setPicks((p)=>({
                ...p,
                [name]: p[name] === side ? null : side
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 border-b border-[#e4f1ea] bg-[#f4faf7] px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mr-1 font-mono text-[.64rem] font-black uppercase tracking-[.2em]",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                        },
                        children: "Trial balance sorter"
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 646,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[.7rem] font-semibold text-muted-warm",
                        children: "Pearl’s books · tap Dr or Cr for each account"
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 649,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            setPicks(Object.fromEntries(PEARL_TB.map((a)=>[
                                    a.name,
                                    null
                                ])));
                            setChecked(false);
                        },
                        className: "ml-auto inline-flex items-center gap-1.5 rounded-lg border border-[#c7e5d6] bg-white px-2.5 py-1.5 text-[.7rem] font-bold text-[#6f5438] transition hover:border-[#10b981] hover:text-[#047857]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 655,
                                columnNumber: 11
                            }, this),
                            " Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 650,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/fa/FaParts3.tsx",
                lineNumber: 645,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-2 p-3 sm:grid-cols-2",
                children: PEARL_TB.map((a)=>{
                    const picked = picks[a.name];
                    const right = checked && picked === a.side;
                    const wrong = checked && picked !== null && picked !== a.side;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-2 rounded-xl border px-3 py-2 transition-colors ${right ? "border-[#9ab86b] bg-[#eef4dd]" : wrong ? "border-[#e2a1a1] bg-[#fdecec]" : picked ? "border-[#a9dcc4] bg-[#f2faf6]" : "border-[#eadfc8] bg-white"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-[.8rem] font-bold text-[#3e2c1d]",
                                        children: a.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 671,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[.68rem] text-[#8a6b45]",
                                        children: [
                                            "₹",
                                            a.amt.toLocaleString("en-IN")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 672,
                                        columnNumber: 17
                                    }, this),
                                    checked && wrong ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-0.5 text-[.66rem] font-semibold text-[#b3402c]",
                                        children: a.why
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 673,
                                        columnNumber: 37
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 670,
                                columnNumber: 15
                            }, this),
                            [
                                "dr",
                                "cr"
                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>pick(a.name, s),
                                    "aria-pressed": picked === s,
                                    className: `h-7 w-9 rounded-lg border font-mono text-[.66rem] font-black transition-all ${picked === s ? s === "dr" ? "border-transparent text-white shadow" : "border-transparent text-white shadow" : "border-[#d8cdb4] bg-white text-[#8a6b45] hover:border-[#10b981]"}`,
                                    style: picked === s ? {
                                        background: s === "dr" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_BTN_GRAD"] : "linear-gradient(135deg,#b45309,#8a5a10)"
                                    } : undefined,
                                    children: s.toUpperCase()
                                }, s, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 676,
                                    columnNumber: 17
                                }, this)),
                            checked ? right ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-4 w-4 shrink-0 text-[#44621d]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 693,
                                columnNumber: 34
                            }, this) : wrong ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4 shrink-0 text-[#b3402c]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 693,
                                columnNumber: 98
                            }, this) : null : null
                        ]
                    }, a.name, true, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 664,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/fa/FaParts3.tsx",
                lineNumber: 658,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3 border-t border-[#e4f1ea] bg-[#f4faf7] px-4 py-3",
                children: [
                    !checked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: !done,
                        onClick: ()=>setChecked(true),
                        className: "rounded-full px-5 py-2 text-[.78rem] font-bold text-white transition disabled:opacity-40",
                        style: {
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_BTN_GRAD"],
                            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_BTN_SHADOW"]
                        },
                        children: "Check my trial balance"
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 700,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        initial: {
                            scale: 0.92,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        className: "inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[.78rem] font-black text-white",
                        style: {
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_BTN_GRAD"]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 711,
                                columnNumber: 13
                            }, this),
                            " ",
                            score,
                            " / ",
                            PEARL_TB.length,
                            " sides correct"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 710,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.72rem] font-semibold text-muted-warm",
                        children: "Rule of thumb: assets, drawings, purchases, expenses → Dr · liabilities, capital, incomes, sales → Cr"
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 714,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/fa/FaParts3.tsx",
                lineNumber: 698,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/fa/FaParts3.tsx",
        lineNumber: 644,
        columnNumber: 5
    }, this);
}
_s(TrialBalanceSorter, "Lp6aUFLRX7aXJawBV7ONajARhT8=");
_c10 = TrialBalanceSorter;
function FaTrialBalanceSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "trial-balance",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 3 · Checking — the trial balance",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Do the columns ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-emerald",
                                children: "agree?"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 730,
                                columnNumber: 30
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "The third phase of the accounting process: after posting the ledger, a statement lists the debit and credit balances of every account at a specific point in time. If double entry has been honoured, the two totals must meet."
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 726,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "01",
                    title: "What the agreement proves — and what it doesn't"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 736,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                            kind: "insight",
                            title: "Why it must balance",
                            children: [
                                "Under the double entry system, amounts on the debit sides of various accounts are always equal to amounts entered on the credit sides of other accounts — so the",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "totals of the debit sides must equal the totals of the credit sides"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 741,
                                    columnNumber: 13
                                }, this),
                                ". An agreeing trial balance gives reasonable confidence the work is free of",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "clerical errors"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 743,
                                    columnNumber: 13
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 738,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                            kind: "warn",
                            title: "What can still hide",
                            children: [
                                "Agreement is ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "not proof of cent-per-cent accuracy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 746,
                                    columnNumber: 26
                                }, this),
                                ". Errors of",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "principle"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 747,
                                    columnNumber: 13
                                }, this),
                                " (wrong class of account), ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "compensating errors"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 747,
                                    columnNumber: 56
                                }, this),
                                " (two mistakes cancelling out), wholly ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "omitted transactions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 748,
                                    columnNumber: 37
                                }, this),
                                " and postings to the",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "wrong account at the right amount"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 749,
                                    columnNumber: 13
                                }, this),
                                " can all survive a perfect trial balance."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 745,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 737,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "02",
                    title: "Accounts keep their favourite side",
                    sub: "Some accounts carry only debit balances; others only credit"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 753,
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
                                        className: "font-mono text-[.64rem] font-black uppercase tracking-[.2em]",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][700]
                                        },
                                        children: "Only debit balances"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 757,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap gap-1.5",
                                        children: [
                                            "Assets (cash, debtors, buildings, furniture)",
                                            "Drawings",
                                            "Purchases",
                                            "Sales returns",
                                            "Expenses",
                                            "Losses"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-lg border px-2.5 py-1 text-[.74rem] font-semibold",
                                                style: {
                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"].border,
                                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"].wash,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                },
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                lineNumber: 760,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 758,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 756,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 755,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 110,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[.64rem] font-black uppercase tracking-[.2em] text-[#b45309]",
                                        children: "Only credit balances"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 767,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap gap-1.5",
                                        children: [
                                            "Liabilities (creditors, bank overdraft, provisions)",
                                            "Reserves",
                                            "Incomes",
                                            "Sales",
                                            "Purchases returns",
                                            "Gains"
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-lg border px-2.5 py-1 text-[.74rem] font-semibold",
                                                style: {
                                                    borderColor: "#e8d3ac",
                                                    background: "#faf4e4",
                                                    color: "#8a5a10"
                                                },
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                lineNumber: 770,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 768,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 766,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 765,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 754,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "03",
                    title: "Pearl's books, balanced",
                    sub: "From the balances extracted from Pearl, a trader — as on 31st March 2017"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 777,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto rounded-2xl border border-[#c7e5d6] bg-[#fffdf9]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "warm-table min-w-[520px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "w-14",
                                                children: "S.No"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                lineNumber: 783,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Name of account"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                lineNumber: 784,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "w-28 text-right",
                                                children: "Debit (₹)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                lineNumber: 785,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "w-28 text-right",
                                                children: "Credit (₹)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                lineNumber: 786,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 782,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 781,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        PEARL_TB.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-mono text-[.74rem] text-[#8a6b45]",
                                                        children: i + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 792,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-[.85rem]",
                                                        children: a.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 793,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right font-mono text-[.8rem]",
                                                        children: a.side === "dr" ? a.amt.toLocaleString("en-IN") : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 794,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "text-right font-mono text-[.8rem]",
                                                        children: a.side === "cr" ? a.amt.toLocaleString("en-IN") : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                        lineNumber: 795,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, a.name, true, {
                                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                lineNumber: 791,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 799,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "font-extrabold",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                    },
                                                    children: "Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 800,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono font-black",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                    },
                                                    children: "1,18,000"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 801,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right font-mono font-black",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FA_G"][800]
                                                    },
                                                    children: "1,18,000"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                                    lineNumber: 802,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                                            lineNumber: 798,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                                    lineNumber: 789,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/fa/FaParts3.tsx",
                            lineNumber: 780,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 779,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 778,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                        kind: "insight",
                        title: "Read the totals like an auditor",
                        children: [
                            "5,000 + 800 + 4,000 + 75,000 + 3,000 + 20,000 + 10,200 = ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "1,18,000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 810,
                                columnNumber: 70
                            }, this),
                            " of debits; 44,000 + 2,000 + 72,000 = ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "1,18,000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 811,
                                columnNumber: 39
                            }, this),
                            " of credits. The columns agree — Pearl’s postings are arithmetically sound."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 809,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 808,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "04",
                    title: "Two ways to draw it up",
                    sub: "Vogue's June 30 trial balance, both methods"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 816,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEq"], {
                    label: "Vogue Company — trial balance, June 30",
                    children: `Balance method                    Total method
(net figure per account)         (both gross sides of every account)

Cash .................... 46,930 Dr    Cash ......... 58,500 Dr | 11,570 Cr
Trade payables ........... 2,500 Cr    Trade payables 1,000 Dr |  3,500 Cr
Revenue from services ... 14,000 Cr    Revenue ......      —    | 14,000 Cr

TOTALS ........... 68,000 = 68,000    TOTALS ... 86,370 = 86,370`
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 817,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCallout"], {
                        kind: "why",
                        title: "Why the total method is bigger — and equally true",
                        children: [
                            "The total method lists ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "both"
                            }, void 0, false, {
                                fileName: "[project]/src/components/fa/FaParts3.tsx",
                                lineNumber: 827,
                                columnNumber: 36
                            }, this),
                            " sides of every account before netting, so the grand total rises (86,370 vs 68,000). The proof is identical: both columns agree. Ledger balances on a specified date — that is all a trial balance is; a basic check on bookkeeping."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 826,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 825,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaReadStep"], {
                    n: "05",
                    title: "Now sort it yourself",
                    sub: "Ten accounts from Pearl's extraction — which column does each belong in?"
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 834,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrialBalanceSorter, {}, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 836,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 835,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The trial balance is the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "third phase"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 842,
                                        columnNumber: 42
                                    }, void 0),
                                    ": journal → ledger → trial balance."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "It proves ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "arithmetic consistency"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 843,
                                        columnNumber: 27
                                    }, void 0),
                                    ", not accuracy — principle and compensating errors survive."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Assets, drawings, purchases, expenses, losses → ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "debit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 844,
                                        columnNumber: 65
                                    }, void 0),
                                    " balances; liabilities, capital, reserves, incomes, sales, gains → ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "credit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 844,
                                        columnNumber: 144
                                    }, void 0),
                                    "."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Balance method nets each account (",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "68,000"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 845,
                                        columnNumber: 51
                                    }, void 0),
                                    "); total method lists both gross sides (",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "86,370"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 845,
                                        columnNumber: 104
                                    }, void 0),
                                    ") — same proof."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The Cash ledger balance ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "is"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                                        lineNumber: 846,
                                        columnNumber: 41
                                    }, void 0),
                                    " the Cash trial-balance line — the pipeline has no gaps."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 840,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 839,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$fa$2f$FaParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaQuiz"], {
                        source: "The honesty of the check",
                        q: "Pearl's trial balance agrees at \\u20B91,18,000. Which error could STILL be sitting in her books?",
                        options: [
                            "A debit of 5,000 posted without a matching credit",
                            "A purchase of machinery debited to Purchases (an error of principle)",
                            "Debit totals of 1,19,000 against credit totals of 1,18,000",
                            "A cash payment entered twice on the credit side only"
                        ],
                        answer: 1,
                        explain: "Option A and D break the equality — the trial balance would disagree, so they are caught. Option C is impossible here. But debiting the WRONG CLASS of account (machinery into purchases) keeps both sides equal: the entry is complete and balanced — only its meaning is wrong. Errors of principle sail straight past the trial balance."
                    }, void 0, false, {
                        fileName: "[project]/src/components/fa/FaParts3.tsx",
                        lineNumber: 852,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/fa/FaParts3.tsx",
                    lineNumber: 851,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/fa/FaParts3.tsx",
            lineNumber: 725,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/fa/FaParts3.tsx",
        lineNumber: 724,
        columnNumber: 5
    }, this);
}
_c11 = FaTrialBalanceSection;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "AccountingCycle");
__turbopack_context__.k.register(_c1, "JournalTable");
__turbopack_context__.k.register(_c2, "FaJournalSection");
__turbopack_context__.k.register(_c3, "DR_TOTAL$CASH_DR.reduce");
__turbopack_context__.k.register(_c4, "DR_TOTAL");
__turbopack_context__.k.register(_c5, "CR_TOTAL$CASH_CR.reduce");
__turbopack_context__.k.register(_c6, "CR_TOTAL");
__turbopack_context__.k.register(_c7, "CashTAccount");
__turbopack_context__.k.register(_c8, "FaLedgerSection");
__turbopack_context__.k.register(_c9, "FaStatementsSection");
__turbopack_context__.k.register(_c10, "TrialBalanceSorter");
__turbopack_context__.k.register(_c11, "FaTrialBalanceSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_fa_FaParts3_tsx_fb19d35a._.js.map