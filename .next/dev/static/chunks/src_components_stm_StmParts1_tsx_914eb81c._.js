(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/stm/StmParts1.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STM_BTN_GRAD",
    ()=>STM_BTN_GRAD,
    "STM_BTN_SHADOW",
    ()=>STM_BTN_SHADOW,
    "STM_G",
    ()=>STM_G,
    "StmCallout",
    ()=>StmCallout,
    "StmHero",
    ()=>StmHero,
    "StmLensSection",
    ()=>StmLensSection,
    "StmPanel",
    ()=>StmPanel,
    "StmQuiz",
    ()=>StmQuiz,
    "StmReadStep",
    ()=>StmReadStep,
    "StmScalesSection",
    ()=>StmScalesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   Statistics for Managers — PART 1 of 6 (shelf 05 of The
   Atlas). The violet micro-kit + the hero + Chapter 1's first
   two movements: what statistics is (and the six business
   functions it already runs inside), and how data is measured
   (elements, variables, observations, the four scales).

   Interactive machines in this part:
   · ScaleLadder — click a rung, watch its properties stack up
   · DataAnatomy — one table, three lenses: elements,
     variables, observations
   · The time-series sketch — Figure 1.1 redrawn, animating in

   Also hosts the STM micro-kit (StmReadStep, StmCallout,
   StmPanel, StmQuiz) shared by parts 2–6: same mould as the
   FoC/ATB/FA/EBH pages, shelf 05's violet sigil.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sigma.js [app-client] (ecmascript) <export default as Sigma>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scroll-text.js [app-client] (ecmascript) <export default as ScrollText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/table-2.js [app-client] (ecmascript) <export default as Table2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const STM_G = {
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    soft: "#f5f3ff",
    border: "#d9cdf8",
    wash: "#f8f6ff",
    ink: "#4c3a80"
};
const STM_BTN_GRAD = "linear-gradient(135deg,#8b5cf6,#6d28d9)";
const STM_BTN_SHADOW = "0 14px 30px -12px rgba(109,40,217,.55)";
function StmReadStep({ n, title, sub }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
        className: "mb-5 mt-12 first:mt-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-extrabold text-white shadow-md",
                    style: {
                        background: STM_BTN_GRAD,
                        boxShadow: "0 4px 12px -3px rgba(109,40,217,.55)"
                    },
                    "aria-hidden": true,
                    children: n
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold leading-snug md:text-2xl text-[#3e2c1d]",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        sub ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[.82rem] text-muted-warm",
                            children: sub
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 83,
                            columnNumber: 18
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/stm/StmParts1.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/stm/StmParts1.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c = StmReadStep;
const STM_CALLOUT_STYLES = {
    insight: {
        bg: "#f6f3fe",
        border: "#d9cdf8",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "h-4 w-4",
            style: {
                color: STM_G[700]
            }
        }, void 0, false, {
            fileName: "[project]/src/components/stm/StmParts1.tsx",
            lineNumber: 91,
            columnNumber: 54
        }, ("TURBOPACK compile-time value", void 0)),
        label: STM_G[700]
    },
    why: {
        bg: "#f1edfd",
        border: "#cfc2f5",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
            className: "h-4 w-4",
            style: {
                color: STM_G[800]
            }
        }, void 0, false, {
            fileName: "[project]/src/components/stm/StmParts1.tsx",
            lineNumber: 92,
            columnNumber: 50
        }, ("TURBOPACK compile-time value", void 0)),
        label: STM_G[800]
    },
    warn: {
        bg: "#fbeae5",
        border: "#e8a896",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
            className: "h-4 w-4",
            style: {
                color: "#b3402c"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/stm/StmParts1.tsx",
            lineNumber: 93,
            columnNumber: 51
        }, ("TURBOPACK compile-time value", void 0)),
        label: "#b3402c"
    },
    story: {
        bg: "#f5f1e8",
        border: "#cec2a4",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__["ScrollText"], {
            className: "h-4 w-4",
            style: {
                color: "#7c6248"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/stm/StmParts1.tsx",
            lineNumber: 94,
            columnNumber: 52
        }, ("TURBOPACK compile-time value", void 0)),
        label: "#7c6248"
    }
};
function StmCallout({ kind = "insight", title, children }) {
    const s = STM_CALLOUT_STYLES[kind];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl p-5",
        style: {
            background: s.bg,
            border: `1px solid ${s.border}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.14em]",
                style: {
                    color: s.label
                },
                children: [
                    s.icon,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-[.92rem] leading-relaxed text-[#2b2014]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stm/StmParts1.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_c1 = StmCallout;
function StmPanel({ children, label, tone = "violet" }) {
    const line = tone === "violet" ? STM_G.border : "#cec2a4";
    const head = tone === "violet" ? "#f1ecfd" : "#f5f1e8";
    const ink = tone === "violet" ? STM_G[700] : "#7c6248";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border",
        style: {
            borderColor: line
        },
        children: [
            label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "border-b px-4 py-2 font-mono text-[.66rem] font-bold uppercase tracking-[.2em]",
                style: {
                    borderColor: line,
                    background: head,
                    color: ink
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 127,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "overflow-x-auto px-5 py-4 font-mono text-[.84rem] leading-relaxed text-[#3a2d63]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stm/StmParts1.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_c2 = StmPanel;
function StmQuiz({ q, options, answer, explain, source }) {
    _s();
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
                            color: STM_G[700]
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "quiz-q font-semibold leading-snug text-[#3e2c1d]",
                                children: q
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            source ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "quiz-src mt-1 text-[.7rem] font-bold uppercase tracking-[.16em]",
                                style: {
                                    color: STM_G[700]
                                },
                                children: source
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 154,
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
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 185,
                                    columnNumber: 19
                                }, this) : revealed && i === chosen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 187,
                                    columnNumber: 19
                                }, this) : String.fromCharCode(65 + i)
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this),
                            opt
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 176,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: revealed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "mt-3 rounded-xl border p-3 text-[.85rem] leading-relaxed text-[#2b2014]",
                    style: {
                        borderColor: STM_G.border,
                        background: STM_G.wash
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: chosen === answer ? STM_G[700] : "#b3402c"
                            },
                            children: chosen === answer ? "Correct. " : "Not quite. "
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, this),
                        explain
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 199,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stm/StmParts1.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s(StmQuiz, "JjCznpNgYY01dNnW6Qf3QUJcMIk=");
_c3 = StmQuiz;
/* ============================================================
   HERO — the violet shelf
   ============================================================ */ const HERO_TOKENS = [
    {
        t: "x̄ = 590.80",
        top: "18%",
        left: "6%",
        dur: 7.4,
        delay: 0
    },
    {
        t: "P(A | B)",
        top: "62%",
        left: "9%",
        dur: 8.6,
        delay: 0.9
    },
    {
        t: "68 · 95 · 99.7",
        top: "20%",
        left: "87%",
        dur: 7.8,
        delay: 0.5
    },
    {
        t: "E(x) = 1.20",
        top: "58%",
        left: "86%",
        dur: 9.0,
        delay: 1.5
    },
    {
        t: "σ = 1",
        top: "40%",
        left: "3%",
        dur: 9.4,
        delay: 2.1
    },
    {
        t: "z = 0.83",
        top: "82%",
        left: "48%",
        dur: 8.2,
        delay: 1.2
    },
    {
        t: "Bayes → 0.34",
        top: "8%",
        left: "56%",
        dur: 8.8,
        delay: 2.6
    },
    {
        t: "r = −0.9631",
        top: "74%",
        left: "24%",
        dur: 9.6,
        delay: 0.4
    }
];
function HeroToken({ b }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        "aria-hidden": true,
        className: "pointer-events-none absolute hidden sm:block",
        style: {
            top: b.top,
            left: b.left,
            opacity: 0.55
        },
        animate: {
            y: [
                0,
                -12,
                0
            ]
        },
        transition: {
            duration: b.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block rounded-lg border border-[#d9cdf8] bg-white/70 px-2.5 py-1 font-mono text-[.8rem] font-bold shadow-[0_6px_18px_-10px_rgba(109,40,217,.45)] backdrop-blur-sm",
            style: {
                color: STM_G[800]
            },
            children: b.t
        }, void 0, false, {
            fileName: "[project]/src/components/stm/StmParts1.tsx",
            lineNumber: 239,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/stm/StmParts1.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
_c4 = HeroToken;
function StmHero() {
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
                            background: "rgba(139,92,246,.14)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -right-16 bottom-24 h-96 w-96 rounded-full blur-3xl",
                        style: {
                            background: "rgba(109,40,217,.12)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/3 top-1/2 h-64 w-64 rounded-full blur-3xl",
                        style: {
                            background: "rgba(124,98,72,.10)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                "aria-hidden": true,
                viewBox: "0 0 1200 620",
                preserveAspectRatio: "none",
                className: "pointer-events-none absolute inset-0 h-full w-full",
                children: [
                    [
                        176,
                        182,
                        452,
                        458
                    ].map((y, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "0",
                            y1: y,
                            x2: "1200",
                            y2: y,
                            stroke: "#cfc4ec",
                            strokeWidth: i % 2 === 0 ? 1.4 : 0.8,
                            opacity: 0.5
                        }, i, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: "M 60 500 C 300 500, 420 500, 520 420 C 580 370, 590 190, 660 190 C 730 190, 740 370, 800 420 C 900 500, 1020 500, 1160 500",
                        fill: "none",
                        stroke: "#8b5cf6",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        initial: {
                            pathLength: 0,
                            opacity: 0
                        },
                        animate: {
                            pathLength: 1,
                            opacity: 0.7
                        },
                        transition: {
                            duration: 2.4,
                            ease: "easeInOut",
                            delay: 0.3
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    [
                        {
                            x: 380,
                            y: 490
                        },
                        {
                            x: 470,
                            y: 470
                        },
                        {
                            x: 560,
                            y: 430
                        },
                        {
                            x: 660,
                            y: 405
                        },
                        {
                            x: 750,
                            y: 430
                        },
                        {
                            x: 840,
                            y: 470
                        },
                        {
                            x: 930,
                            y: 495
                        }
                    ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            cx: p.x,
                            cy: p.y,
                            r: 6,
                            fill: "none",
                            stroke: STM_G[700],
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
                                delay: i * 0.45
                            }
                        }, i, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                        x1: "660",
                        y1: "150",
                        x2: "660",
                        y2: "520",
                        stroke: "#6d28d9",
                        strokeWidth: "1.6",
                        strokeDasharray: "4 7",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: [
                                0,
                                0.55,
                                0.3,
                                0.55
                            ]
                        },
                        transition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.2
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0",
                children: HERO_TOKENS.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroToken, {
                        b: b
                    }, i, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-4xl text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this),
                                "Shelf 05 · MSL1070 · B.S. in Management and Technology · IIT Jodhpur"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 120,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-6 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl",
                            children: [
                                "Statistics for ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "grad-violet",
                                    children: "Managers"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 307,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 240,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-warm",
                            children: [
                                "Every managerial decision is a bet on uncertainty — and statistics is how the bet gets ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "priced"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 313,
                                    columnNumber: 18
                                }, this),
                                ". This course runs the whole loop: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "collect"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 313,
                                    columnNumber: 66
                                }, this),
                                " data, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "describe"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 313,
                                    columnNumber: 87
                                }, this),
                                " ",
                                "it in tables, charts and numbers, then ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "infer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 314,
                                    columnNumber: 52
                                }, this),
                                " from a sample to a population — every figure computed, not memorised."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 300,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex flex-wrap items-center justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#lens",
                                    className: "rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.03]",
                                    style: {
                                        background: STM_BTN_GRAD,
                                        boxShadow: STM_BTN_SHADOW
                                    },
                                    children: [
                                        "Start Chapter 1 ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "ml-1 inline h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                                            lineNumber: 326,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#practice",
                                    title: "Straight to the pen-paper windows — compute the statistic, name the distribution",
                                    className: "group inline-flex items-center gap-2 rounded-full border border-[#d9cdf8] bg-[#fffdf9] px-7 py-3.5 text-sm font-bold text-[#5b21b6] transition hover:bg-[#f6f3fe]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                            className: "h-4 w-4 transition-transform duration-300 group-hover:-rotate-12",
                                            style: {
                                                color: STM_G[700]
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this),
                                        "Test my knowledge"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-12 grid max-w-3xl gap-4 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: 360,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-warm lift h-full p-5 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "chip",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 38
                                                }, this),
                                                " Instructor"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-lg font-extrabold text-[#3e2c1d]",
                                            children: "Dr. Deepak Srivastav"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.82rem] leading-relaxed text-muted-warm",
                                            children: "PhD (IIM Kozhikode) — Assistant Professor, School of Management and Entrepreneurship"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.78rem] leading-relaxed text-[#8a6b45]",
                                            children: [
                                                "Text: Anderson, Sweeney, Williams, Camm & Cochran — ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    children: "Statistics for Business & Economics"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 73
                                                }, this),
                                                ", 14th ed. (Cengage, 2017) · quiz 40% + major 60%."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.78rem] font-semibold",
                                            style: {
                                                color: STM_G[700]
                                            },
                                            children: "IIT Jodhpur"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: 430,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-warm lift h-full p-5 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "chip",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 38
                                                }, this),
                                                " The one loop"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-center font-mono text-2xl font-black tracking-tight",
                                            style: {
                                                color: STM_G[800]
                                            },
                                            children: "Data → Describe → Decide"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                                            lineNumber: 359,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.82rem] leading-relaxed text-muted-warm",
                                            children: "Collect the facts and figures, summarise them in tables, charts and numbers, then use a sample to price the population. Descriptive statistics describes what has happened; inferential statistics turns it into better decisions."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                                            lineNumber: 362,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 357,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 356,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stm/StmParts1.tsx",
        lineNumber: 251,
        columnNumber: 5
    }, this);
}
_c5 = StmHero;
/* ============================================================
   CHAPTER 1 · MOVEMENT 1 — WHAT IS STATISTICS?  (#lens)
   The two meanings, six business applications, data anatomy.
   ============================================================ */ const APPS = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
        t: "Accounting",
        d: "Public accounting firms use statistical sampling procedures when conducting audits for their clients."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        t: "Economics",
        d: "Economists use statistical information in making forecasts about the future of the economy or some aspect of it."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"],
        t: "Finance",
        d: "Financial advisors use price-earnings ratios and dividend yields to guide their investment advice."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        t: "Marketing",
        d: "Electronic point-of-sale scanners at retail checkout counters collect data for a variety of marketing research applications."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        t: "Production",
        d: "A variety of statistical quality control charts are used to monitor the output of a production process."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        t: "Information Systems",
        d: "Statistical information helps administrators assess the performance of computer networks."
    }
];
const COMPANIES = [
    {
        name: "Dataram",
        ex: "NQ",
        sales: "73.10",
        eps: "0.86"
    },
    {
        name: "EnergySouth",
        ex: "N",
        sales: "74.00",
        eps: "1.67"
    },
    {
        name: "Keystone",
        ex: "N",
        sales: "365.70",
        eps: "0.86"
    },
    {
        name: "LandCare",
        ex: "NQ",
        sales: "111.40",
        eps: "0.33"
    },
    {
        name: "Psychemedics",
        ex: "N",
        sales: "17.60",
        eps: "0.13"
    }
];
function DataAnatomy() {
    _s1();
    const [lens, setLens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("elements");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm overflow-hidden p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                    {
                        k: "elements",
                        label: "Elements",
                        hint: "rows — the entities"
                    },
                    {
                        k: "variables",
                        label: "Variables",
                        hint: "columns — the characteristics"
                    },
                    {
                        k: "observation",
                        label: "Observation",
                        hint: "one row's measurements"
                    }
                ].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setLens(lens === b.k ? null : b.k),
                        "aria-pressed": lens === b.k,
                        className: `rounded-full border px-3.5 py-1.5 text-[.72rem] font-bold transition-all duration-200 ${lens === b.k ? "border-transparent text-white shadow-md" : "border-[#d9cdf8] bg-white text-[#6d28d9] hover:bg-[#f6f3fe]"}`,
                        style: lens === b.k ? {
                            background: STM_BTN_GRAD
                        } : undefined,
                        children: [
                            b.label,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `ml-1.5 text-[.6rem] font-semibold ${lens === b.k ? "text-white/75" : "text-[#a08cc9]"}`,
                                children: b.hint
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 423,
                                columnNumber: 13
                            }, this)
                        ]
                    }, b.k, true, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 410,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "warm-table min-w-[540px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: lens === "observation" ? {
                                            background: "linear-gradient(180deg,#5b21b6,#4c1d95)"
                                        } : undefined,
                                        children: "Company"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 434,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: lens === "variables" || lens === "observation" ? {
                                            background: "linear-gradient(180deg,#5b21b6,#4c1d95)"
                                        } : undefined,
                                        children: "Stock Exchange"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 435,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: lens === "variables" || lens === "observation" ? {
                                            background: "linear-gradient(180deg,#5b21b6,#4c1d95)"
                                        } : undefined,
                                        children: "Annual Sales ($M)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 436,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: lens === "variables" || lens === "observation" ? {
                                            background: "linear-gradient(180deg,#5b21b6,#4c1d95)"
                                        } : undefined,
                                        children: "Earnings per Share ($)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 437,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 433,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 432,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: COMPANIES.map((c, ri)=>{
                                const rowHit = lens === "elements";
                                const obsHit = lens === "observation" && ri === 1;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: rowHit || obsHit ? {
                                        background: "rgba(139,92,246,.10)"
                                    } : undefined,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "font-bold",
                                            style: rowHit || obsHit ? {
                                                color: STM_G[800]
                                            } : undefined,
                                            children: c.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                                            lineNumber: 446,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: obsHit ? {
                                                color: STM_G[800],
                                                fontWeight: 700
                                            } : undefined,
                                            children: c.ex
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                                            lineNumber: 447,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: obsHit ? {
                                                color: STM_G[800],
                                                fontWeight: 700
                                            } : undefined,
                                            children: c.sales
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                                            lineNumber: 448,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: obsHit ? {
                                                color: STM_G[800],
                                                fontWeight: 700
                                            } : undefined,
                                            children: c.eps
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                                            lineNumber: 449,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, c.name, true, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 445,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 440,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 431,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 430,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
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
                        y: -4
                    },
                    className: "mt-3 text-[.85rem] leading-relaxed text-muted-warm",
                    children: [
                        lens === "elements" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    style: {
                                        color: STM_G[800]
                                    },
                                    children: "elements"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 466,
                                    columnNumber: 19
                                }, this),
                                " are the entities on which data are collected — the five companies. A data set with ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "n elements contains n observations"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 466,
                                    columnNumber: 148
                                }, this),
                                ", so this data set has 5."
                            ]
                        }, void 0, true),
                        lens === "variables" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    style: {
                                        color: STM_G[800]
                                    },
                                    children: "variables"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 469,
                                    columnNumber: 19
                                }, this),
                                " are the characteristics of interest for the elements — stock exchange, annual sales, earnings per share. Total data values = ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "elements × variables = 5 × 3 = 15"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 469,
                                    columnNumber: 191
                                }, this),
                                "."
                            ]
                        }, void 0, true),
                        lens === "observation" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "An ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    style: {
                                        color: STM_G[800]
                                    },
                                    children: "observation"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 472,
                                    columnNumber: 18
                                }, this),
                                " is the set of measurements obtained for a particular element — EnergySouth’s row: N, 74.00, 1.67. One row = one observation."
                            ]
                        }, void 0, true),
                        lens === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: "Tap a lens — the same table is elements (rows), variables (columns), and observations (one element’s full set of measurements) at once. This is the slide-9 example, verbatim."
                        }, void 0, false)
                    ]
                }, lens ?? "none", true, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 458,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 457,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stm/StmParts1.tsx",
        lineNumber: 401,
        columnNumber: 5
    }, this);
}
_s1(DataAnatomy, "WsUFrMmtu57mL8tBXOB7wbnx24s=");
_c6 = DataAnatomy;
function StmLensSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "lens",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Chapter 1 · Data and Statistics — sections 1.1–1.2",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "What is ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-violet",
                                children: "statistics"
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 489,
                                columnNumber: 23
                            }, void 0),
                            "?"
                        ]
                    }, void 0, true),
                    lead: "The word does double duty in this course — and the deck opens by separating the two jobs. One meaning is a pile of numbers; the other is the craft of making decisions with them."
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 485,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StmReadStep, {
                    n: "01",
                    title: "Two meanings of one word",
                    sub: "Numerical facts — and the art & science of working with them"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 496,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[.68rem] font-bold uppercase tracking-[.2em]",
                                        style: {
                                            color: STM_G[700]
                                        },
                                        children: "Meaning 1 · numerical facts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 500,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.9rem] leading-relaxed text-[#2b2014]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Statistics"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 502,
                                                columnNumber: 17
                                            }, this),
                                            " can refer to ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "numerical facts"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 502,
                                                columnNumber: 48
                                            }, this),
                                            " — averages, medians, percentages, and maximums that help us understand a variety of business and economic situations."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 499,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 498,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[.68rem] font-bold uppercase tracking-[.2em]",
                                        style: {
                                            color: STM_G[700]
                                        },
                                        children: "Meaning 2 · the craft"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.9rem] leading-relaxed text-[#2b2014]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Statistics"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 512,
                                                columnNumber: 17
                                            }, this),
                                            " can also refer to the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "art and science"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 512,
                                                columnNumber: 57
                                            }, this),
                                            " of collecting, analyzing, presenting, and interpreting data."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 511,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 509,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 508,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 497,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StmReadStep, {
                    n: "02",
                    title: "Applications in business",
                    sub: "Statistics already runs six functions you will manage"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 520,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                    children: APPS.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * 70,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md",
                                        style: {
                                            background: STM_BTN_GRAD
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(r.icon, {
                                            className: "h-4.5 w-4.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                                            lineNumber: 526,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 525,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[.95rem] font-extrabold text-[#3e2c1d]",
                                        children: r.t
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 528,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[.8rem] leading-relaxed text-muted-warm",
                                        children: r.d
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 529,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 524,
                                columnNumber: 15
                            }, this)
                        }, r.t, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 523,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 521,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StmReadStep, {
                    n: "03",
                    title: "Data, data sets, elements, variables, observations",
                    sub: "One table, three lenses — the vocabulary every chapter reuses"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 536,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StmCallout, {
                    kind: "insight",
                    title: "The definitions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Data"
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 538,
                            columnNumber: 11
                        }, this),
                        " are the facts and figures collected, analyzed, and summarized for presentation and interpretation. All the data collected in a particular study are the",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "data set"
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 540,
                            columnNumber: 11
                        }, this),
                        " for the study. ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Elements"
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 540,
                            columnNumber: 42
                        }, this),
                        " are the entities on which data are collected; a ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "variable"
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 541,
                            columnNumber: 24
                        }, this),
                        " is a characteristic of interest for the elements; the set of measurements obtained for a particular element is an ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "observation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 542,
                            columnNumber: 67
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 537,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataAnatomy, {}, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 545,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 544,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StmReadStep, {
                    n: "04",
                    title: "Categorical or quantitative?",
                    sub: "The fork every variable must go down — it decides which analyses are legal"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 549,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[.68rem] font-bold uppercase tracking-[.2em]",
                                        style: {
                                            color: STM_G[700]
                                        },
                                        children: "Categorical (qualitative)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 553,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "· Labels or names identify an attribute of each element"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 555,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "· Uses the nominal or ordinal scale"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 556,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "· Can be numeric or nonnumeric"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 557,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "· Appropriate statistical analyses are rather limited"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 558,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 554,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 552,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 551,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-mono text-[.68rem] font-bold uppercase tracking-[.2em]",
                                        style: {
                                            color: STM_G[700]
                                        },
                                        children: "Quantitative"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 564,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "· Indicates ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "how many"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 33
                                                    }, this),
                                                    " or ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "how much"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 52
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 566,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "· Always numeric"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 567,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "· Ordinary arithmetic operations are meaningful"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 568,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "· Uses the interval or ratio scale — and there are more alternatives for statistical analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 569,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 565,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 563,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 562,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 550,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 120,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-warm mt-4 overflow-hidden p-4 sm:p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 760 300",
                            className: "h-auto w-full",
                            role: "img",
                            "aria-label": "Data forks into categorical (numeric or non-numeric labels, nominal or ordinal scales) and quantitative (numeric, interval or ratio scales)",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "320",
                                    y: "14",
                                    width: "120",
                                    height: "40",
                                    rx: "12",
                                    fill: "#f1ecfd",
                                    stroke: "#d9cdf8",
                                    strokeWidth: "2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 579,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "380",
                                    y: "40",
                                    textAnchor: "middle",
                                    fontSize: "15",
                                    fontWeight: "800",
                                    fill: "#5b21b6",
                                    children: "Data"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 580,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 380 54 L 380 84 M 200 84 L 560 84 M 200 84 L 200 108 M 560 84 L 560 108",
                                    stroke: "#c9bbee",
                                    strokeWidth: "2",
                                    fill: "none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 582,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "110",
                                    y: "108",
                                    width: "180",
                                    height: "40",
                                    rx: "12",
                                    fill: "#fffdf6",
                                    stroke: "#d9cdf8",
                                    strokeWidth: "2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 583,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "200",
                                    y: "133",
                                    textAnchor: "middle",
                                    fontSize: "14",
                                    fontWeight: "800",
                                    fill: "#3e2c1d",
                                    children: "Categorical"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 584,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "470",
                                    y: "108",
                                    width: "180",
                                    height: "40",
                                    rx: "12",
                                    fill: "#fffdf6",
                                    stroke: "#d9cdf8",
                                    strokeWidth: "2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 585,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "560",
                                    y: "133",
                                    textAnchor: "middle",
                                    fontSize: "14",
                                    fontWeight: "800",
                                    fill: "#3e2c1d",
                                    children: "Quantitative"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 586,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 200 148 L 200 168 M 88 168 L 312 168 M 88 168 L 88 192 M 312 168 L 312 192 M 560 148 L 560 168 M 470 168 L 650 168 M 470 168 L 470 192 M 650 168 L 650 192",
                                    stroke: "#c9bbee",
                                    strokeWidth: "2",
                                    fill: "none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 587,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "40",
                                    y: "192",
                                    width: "96",
                                    height: "34",
                                    rx: "10",
                                    fill: "#f6f3fe",
                                    stroke: "#d9cdf8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 588,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "88",
                                    y: "214",
                                    textAnchor: "middle",
                                    fontSize: "12",
                                    fontWeight: "700",
                                    fill: "#5b21b6",
                                    children: "Numeric"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 589,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "264",
                                    y: "192",
                                    width: "96",
                                    height: "34",
                                    rx: "10",
                                    fill: "#f6f3fe",
                                    stroke: "#d9cdf8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 590,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "312",
                                    y: "214",
                                    textAnchor: "middle",
                                    fontSize: "12",
                                    fontWeight: "700",
                                    fill: "#5b21b6",
                                    children: "Non-numeric"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 591,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "422",
                                    y: "192",
                                    width: "96",
                                    height: "34",
                                    rx: "10",
                                    fill: "#f6f3fe",
                                    stroke: "#d9cdf8"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 592,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "470",
                                    y: "214",
                                    textAnchor: "middle",
                                    fontSize: "12",
                                    fontWeight: "700",
                                    fill: "#5b21b6",
                                    children: "Numeric"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 593,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 88 226 L 88 240 M 312 226 L 312 240 M 470 226 L 470 240 M 40 240 L 136 240 M 264 240 L 360 240 M 40 240 L 40 252 M 136 240 L 136 252 M 264 240 L 264 252 M 360 240 L 360 252 M 422 240 L 518 240 M 422 240 L 422 252 M 518 240 L 518 252",
                                    stroke: "#c9bbee",
                                    strokeWidth: "2",
                                    fill: "none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 594,
                                    columnNumber: 15
                                }, this),
                                [
                                    {
                                        x: 40,
                                        t: "Nominal"
                                    },
                                    {
                                        x: 136,
                                        t: "Ordinal"
                                    },
                                    {
                                        x: 264,
                                        t: "Nominal"
                                    },
                                    {
                                        x: 360,
                                        t: "Ordinal"
                                    },
                                    {
                                        x: 422,
                                        t: "Interval"
                                    },
                                    {
                                        x: 518,
                                        t: "Ratio"
                                    }
                                ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: n.x,
                                                y: "252",
                                                width: "96",
                                                height: "32",
                                                rx: "10",
                                                fill: "#fff",
                                                stroke: "#d9cdf8"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 601,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: n.x + 48,
                                                y: "273",
                                                textAnchor: "middle",
                                                fontSize: "12",
                                                fontWeight: "700",
                                                fill: "#6d28d9",
                                                children: n.t
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 602,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, `${n.x}-${n.t}`, true, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 600,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 578,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 577,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 576,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Statistics = ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "numerical facts"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 611,
                                    columnNumber: 28
                                }, void 0),
                                " AND the ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "art & science"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 611,
                                    columnNumber: 59
                                }, void 0),
                                " of collecting, analyzing, presenting, interpreting data."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Data set anatomy: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "n elements → n observations"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 612,
                                    columnNumber: 33
                                }, void 0),
                                "; total values = ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "elements × variables"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 612,
                                    columnNumber: 84
                                }, void 0),
                                " (5 × 3 = 15 in the companies table)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "categorical vs quantitative"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 613,
                                    columnNumber: 19
                                }, void 0),
                                " fork decides which analyses are appropriate — quantitative data open more doors."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 609,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/stm/StmParts1.tsx",
            lineNumber: 484,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/stm/StmParts1.tsx",
        lineNumber: 483,
        columnNumber: 5
    }, this);
}
_c7 = StmLensSection;
/* ============================================================
   CHAPTER 1 · MOVEMENT 2 — SCALES OF MEASUREMENT  (#scales)
   The four-scale ladder + cross-sectional vs time series.
   ============================================================ */ const SCALE_RUNGS = [
    {
        key: "nominal",
        name: "Nominal",
        props: [
            "Labels or names identify an attribute of the element",
            "A nonnumeric label or numeric code may be used"
        ],
        example: "Students classified by the school they are enrolled in — Business, Humanities, Education… (or 1 = Business, 2 = Humanities, 3 = Education…)"
    },
    {
        key: "ordinal",
        name: "Ordinal",
        props: [
            "Has the properties of nominal data…",
            "…and the order or rank of the data is meaningful"
        ],
        example: "Students classified by class standing — Freshman, Sophomore, Junior, Senior (or 1 = Freshman, 2 = Sophomore, and so on)"
    },
    {
        key: "interval",
        name: "Interval",
        props: [
            "Has the properties of ordinal data…",
            "…and the interval between observations is expressed in terms of a fixed unit of measure",
            "Interval data are always numeric"
        ],
        example: "SAT scores — Melissa 1985, Kevin 1880 → Melissa scored 105 points more (a fixed unit: one point)"
    },
    {
        key: "ratio",
        name: "Ratio",
        props: [
            "Has all the properties of interval data…",
            "…and the ratio of two values is meaningful",
            "Ratio data are always numerical",
            "Zero value is included in the scale"
        ],
        example: "Book price — $200 at the retail store vs $100 online → the ratio property shows retail charges twice the online price"
    }
];
function ScaleLadder() {
    _s2();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1); // default: ordinal lit
    const rung = SCALE_RUNGS[active];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm overflow-hidden p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-mono text-[.66rem] font-bold uppercase tracking-[.2em]",
                style: {
                    color: STM_G[700]
                },
                children: "Click a rung — properties accumulate upward"
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 657,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-2",
                children: SCALE_RUNGS.map((s, i)=>{
                    const lit = i <= active;
                    const isTop = i === active;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActive(i),
                        "aria-pressed": isTop,
                        className: `flex items-center justify-between rounded-xl border px-4 py-2.5 text-left transition-all duration-300 ${lit ? "border-transparent text-white shadow-md" : "border-[#e6e0f8] bg-white text-[#8a7fae] hover:bg-[#f8f6ff]"}`,
                        style: lit ? {
                            background: `linear-gradient(135deg, ${i === active ? "#8b5cf6" : "#c4b5fd"}, ${i === active ? "#6d28d9" : "#ddd6fe"})`
                        } : undefined,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `flex h-7 w-7 items-center justify-center rounded-lg text-[.72rem] font-black ${lit ? "bg-white/25" : "bg-[#f1ecfd]"}`,
                                        children: String(i + 1).padStart(2, "0")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 676,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[.95rem] font-extrabold",
                                        children: [
                                            s.name,
                                            " scale"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 679,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 675,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[.62rem] font-bold uppercase tracking-[.14em] ${lit ? "text-white/80" : "text-[#b3a6d9]"}`,
                                children: [
                                    i + 1,
                                    " property layer",
                                    s === SCALE_RUNGS[0] ? "" : "s+"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 681,
                                columnNumber: 15
                            }, this)
                        ]
                    }, s.key, true, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 665,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 660,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10
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
                        duration: 0.22
                    },
                    className: "mt-4 rounded-2xl border p-4",
                    style: {
                        borderColor: STM_G.border,
                        background: STM_G.wash
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-1.5",
                            children: rung.props.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full bg-white px-2.5 py-1 text-[.7rem] font-semibold text-[#5b21b6] shadow-sm",
                                    children: p
                                }, p, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 701,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 699,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-[.85rem] leading-relaxed text-[#2b2014]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    style: {
                                        color: STM_G[800]
                                    },
                                    children: "Example — "
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 707,
                                    columnNumber: 13
                                }, this),
                                rung.example
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 706,
                            columnNumber: 11
                        }, this)
                    ]
                }, rung.key, true, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 690,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 689,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StmCallout, {
                kind: "why",
                title: "Why the scale matters",
                children: [
                    "The scale determines the ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "amount of information"
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 712,
                        columnNumber: 34
                    }, this),
                    " contained in the data and indicates the data ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "summarization and statistical analyses"
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 713,
                        columnNumber: 18
                    }, this),
                    " that are most appropriate. Ratio data can do everything interval data can — and more."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 711,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stm/StmParts1.tsx",
        lineNumber: 656,
        columnNumber: 5
    }, this);
}
_s2(ScaleLadder, "rHKvLjmZtKihLSIZmFR3qtAo2y8=");
_c8 = ScaleLadder;
/* the time-series sketch — Figure 1.1 (gasoline) redrawn */ const GAS_POINTS = [
    [
        0,
        158
    ],
    [
        24,
        142
    ],
    [
        48,
        118
    ],
    [
        72,
        96
    ],
    [
        96,
        104
    ],
    [
        120,
        112
    ],
    [
        144,
        108
    ],
    [
        168,
        100
    ],
    [
        192,
        92
    ],
    [
        216,
        84
    ],
    [
        240,
        66
    ],
    [
        264,
        52
    ],
    [
        288,
        58
    ],
    [
        312,
        70
    ],
    [
        336,
        64
    ],
    [
        360,
        56
    ],
    [
        384,
        62
    ],
    [
        408,
        58
    ],
    [
        432,
        66
    ],
    [
        456,
        72
    ],
    [
        480,
        66
    ],
    [
        504,
        58
    ],
    [
        528,
        64
    ]
];
function gasPath(scale = 1) {
    return GAS_POINTS.map(([x, y], i)=>`${i === 0 ? "M" : "L"} ${x} ${y * scale}`).join(" ");
}
function TimeSeriesSketch() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm overflow-hidden p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[.9rem] font-bold text-[#3e2c1d]",
                children: "Figure 1.1 — U.S. average price per gallon for conventional regular gasoline"
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 734,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-0.5 text-[.7rem] text-[#8a6b45]",
                children: "Jan-09 → Apr-14 · source: Energy Information Administration, U.S. Department of Energy, March 2014 (redrawn)"
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 737,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 560 210",
                className: "mt-3 h-auto w-full",
                role: "img",
                "aria-label": "A jagged time-series line rising from about $1.60 in January 2009 to peaks above $3.60 in 2011-2012, easing back to about $3.30 by 2014",
                children: [
                    [
                        40,
                        80,
                        120,
                        160
                    ].map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "34",
                            y1: y,
                            x2: "544",
                            y2: y,
                            stroke: "#e8e2f6",
                            strokeWidth: "1"
                        }, y, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 743,
                            columnNumber: 11
                        }, this)),
                    [
                        "$3.50",
                        "$3.00",
                        "$2.50",
                        "$2.00"
                    ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "4",
                            y: 44 + i * 40,
                            fontSize: "10",
                            fill: "#8a7fae",
                            children: t
                        }, t, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 746,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "34",
                        y1: "176",
                        x2: "544",
                        y2: "176",
                        stroke: "#b3a6d9",
                        strokeWidth: "1.4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 748,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: gasPath(),
                        fill: "none",
                        stroke: "#7c3aed",
                        strokeWidth: "2.4",
                        strokeLinejoin: "round",
                        strokeLinecap: "round",
                        initial: {
                            pathLength: 0,
                            opacity: 0
                        },
                        whileInView: {
                            pathLength: 1,
                            opacity: 1
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 2.2,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 749,
                        columnNumber: 9
                    }, this),
                    [
                        "Jan-09",
                        "Jan-11",
                        "Jan-13",
                        "Apr-14"
                    ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 34 + i * 168,
                            y: "194",
                            fontSize: "9.5",
                            fill: "#8a7fae",
                            children: t
                        }, t, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 758,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 741,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[.82rem] leading-relaxed text-muted-warm",
                children: [
                    "Graphs of time series help analysts understand ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "what happened in the past"
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 762,
                        columnNumber: 56
                    }, this),
                    ",",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "identify trends over time"
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 763,
                        columnNumber: 9
                    }, this),
                    ", and ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "project future levels"
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 763,
                        columnNumber: 47
                    }, this),
                    " for the series."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stm/StmParts1.tsx",
                lineNumber: 761,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stm/StmParts1.tsx",
        lineNumber: 733,
        columnNumber: 5
    }, this);
}
_c9 = TimeSeriesSketch;
function StmScalesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "scales",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Chapter 1 · sections 1.2–1.3 (scales) + time",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Scales of ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-violet",
                                children: "measurement"
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 777,
                                columnNumber: 25
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "Four rungs — nominal, ordinal, interval, ratio — and each one inherits everything below it while adding one new power. Then the clock: data collected at one instant, or across many."
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 773,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StmReadStep, {
                    n: "01",
                    title: "The four-scale ladder",
                    sub: "Each scale = all the properties below it, plus one more"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 783,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScaleLadder, {}, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 784,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StmReadStep, {
                    n: "02",
                    title: "Cross-sectional vs time series",
                    sub: "Same instant, or several periods — two clocks for two questions"
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 786,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chip",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table2$3e$__["Table2"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 790,
                                                columnNumber: 38
                                            }, this),
                                            " Cross-sectional"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 790,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[.9rem] leading-relaxed text-[#2b2014]",
                                        children: [
                                            "Collected at the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "same or approximately the same point in time"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 792,
                                                columnNumber: 34
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 791,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 rounded-xl p-3 text-[.8rem] leading-relaxed text-[#2b2014]",
                                        style: {
                                            background: STM_G.wash,
                                            border: `1px solid ${STM_G.border}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                style: {
                                                    color: STM_G[800]
                                                },
                                                children: "Example — "
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 795,
                                                columnNumber: 17
                                            }, this),
                                            "building permits issued in November 2013 in each of the counties of Ohio."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 794,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 789,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 788,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chip",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"], {
                                                className: "h-3.5 w-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 802,
                                                columnNumber: 38
                                            }, this),
                                            " Time series"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 802,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[.9rem] leading-relaxed text-[#2b2014]",
                                        children: [
                                            "Collected ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "over several time periods"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 804,
                                                columnNumber: 27
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 803,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 rounded-xl p-3 text-[.8rem] leading-relaxed text-[#2b2014]",
                                        style: {
                                            background: STM_G.wash,
                                            border: `1px solid ${STM_G.border}`
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                style: {
                                                    color: STM_G[800]
                                                },
                                                children: "Example — "
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                                lineNumber: 807,
                                                columnNumber: 17
                                            }, this),
                                            "building permits issued in Lucas County, Ohio, in each of the last 36 months."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                                        lineNumber: 806,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/stm/StmParts1.tsx",
                                lineNumber: 801,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmParts1.tsx",
                            lineNumber: 800,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 787,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeSeriesSketch, {}, void 0, false, {
                        fileName: "[project]/src/components/stm/StmParts1.tsx",
                        lineNumber: 814,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 813,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Nominal → ordinal → interval → ratio: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "each rung inherits the one below and adds one power"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 819,
                                    columnNumber: 53
                                }, void 0),
                                " (rank → fixed intervals → meaningful ratios with a true zero)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Cross-sectional = ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "one point in time"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 820,
                                    columnNumber: 33
                                }, void 0),
                                "; time series = ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "several periods"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                                    lineNumber: 820,
                                    columnNumber: 73
                                }, void 0),
                                " — past, trends, projections."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: "Categorical data live on nominal/ordinal scales; quantitative on interval/ratio."
                        }, void 0, false)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmParts1.tsx",
                    lineNumber: 817,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/stm/StmParts1.tsx",
            lineNumber: 772,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/stm/StmParts1.tsx",
        lineNumber: 771,
        columnNumber: 5
    }, this);
}
_c10 = StmScalesSection;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "StmReadStep");
__turbopack_context__.k.register(_c1, "StmCallout");
__turbopack_context__.k.register(_c2, "StmPanel");
__turbopack_context__.k.register(_c3, "StmQuiz");
__turbopack_context__.k.register(_c4, "HeroToken");
__turbopack_context__.k.register(_c5, "StmHero");
__turbopack_context__.k.register(_c6, "DataAnatomy");
__turbopack_context__.k.register(_c7, "StmLensSection");
__turbopack_context__.k.register(_c8, "ScaleLadder");
__turbopack_context__.k.register(_c9, "TimeSeriesSketch");
__turbopack_context__.k.register(_c10, "StmScalesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_stm_StmParts1_tsx_914eb81c._.js.map