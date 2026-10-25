(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/atb/AtbParts3.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AtbArraysSection",
    ()=>AtbArraysSection,
    "AtbListSection",
    ()=>AtbListSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   ATB — "Algorithmic Thinking in Business" · shelf 02
   FILE 1/2 — Module 2 · Linear data structures
   Part 3: Arrays (light) · Linked lists (dark)
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListMusic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-music.js [app-client] (ecmascript) <export default as ListMusic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/repeat.js [app-client] (ecmascript) <export default as Repeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shuffle.js [app-client] (ecmascript) <export default as Shuffle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-back.js [app-client] (ecmascript) <export default as SkipBack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ---------- local button (real <button>, aria-labelled) ---------- */ function OpBtn({ onClick, children, tone = "ghost", dark = false, disabled = false }) {
    const style = tone === "warm" ? {
        background: "linear-gradient(135deg,#ea580c,#c2410c)",
        color: "#fff7ec"
    } : {
        background: dark ? "rgba(255,246,232,.06)" : "#fffdf9",
        color: dark ? "#f0dfc8" : "#7c4a12",
        border: `1px solid ${dark ? "rgba(255,214,160,.22)" : "#e5c79d"}`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        style: style,
        disabled: disabled,
        className: `rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 ${disabled ? "cursor-not-allowed opacity-40" : "hover:-translate-y-0.5"}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = OpBtn;
/* ============================================================
   ARRAYS — SVG pieces
   ============================================================ */ const ARR_VALS = [
    60,
    65,
    70,
    55,
    60
];
function ArrayStrip({ selected }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 620 152",
        className: "h-auto w-full",
        role: "img",
        "aria-label": "Array Sub with five cells holding 60, 65, 70, 55, 60 at indices 0 to 4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                    id: "arr3-ptr",
                    markerWidth: "8",
                    markerHeight: "8",
                    refX: "6",
                    refY: "3",
                    orient: "auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0,0 L7,3 L0,6 Z",
                        fill: "#c2410c"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 51,
                        columnNumber: 96
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "35",
                y: "24",
                fontSize: "11",
                fontWeight: "700",
                fill: "#8a5a06",
                children: "index →"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            ARR_VALS.map((v, i)=>{
                const x = 35 + i * 112, on = selected === i;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: x + 50,
                            y: "44",
                            textAnchor: "middle",
                            fontSize: "13",
                            fontWeight: "700",
                            fill: on ? "#c2410c" : "#8a5a06",
                            children: i
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: x,
                            y: "52",
                            width: "100",
                            height: "56",
                            rx: "10",
                            fill: on ? "#f6ad3c" : "#fde8cf",
                            stroke: on ? "#c2410c" : "#e2b075",
                            strokeWidth: on ? 3 : 1.5
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: x + 50,
                            y: "87",
                            textAnchor: "middle",
                            fontSize: "19",
                            fontWeight: "800",
                            fill: "#3e2c1d",
                            children: v
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                y: "52",
                width: "100",
                height: "56",
                rx: "10",
                fill: "#f59e0b",
                "aria-hidden": true,
                initial: {
                    opacity: 0.22
                },
                animate: {
                    x: [
                        35,
                        483
                    ]
                },
                transition: {
                    duration: 4.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1.1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "85",
                y1: "112",
                x2: "85",
                y2: "126",
                stroke: "#c2410c",
                strokeWidth: "1.5",
                markerEnd: "url(#arr3-ptr)"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "85",
                y: "142",
                textAnchor: "middle",
                fontSize: "12",
                fontWeight: "700",
                fill: "#c2410c",
                children: "Sub[0] = 60"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "421",
                y1: "112",
                x2: "421",
                y2: "126",
                stroke: "#c2410c",
                strokeWidth: "1.5",
                markerEnd: "url(#arr3-ptr)"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "421",
                y: "142",
                textAnchor: "middle",
                fontSize: "12",
                fontWeight: "700",
                fill: "#c2410c",
                children: "Sub[3] = 55"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c1 = ArrayStrip;
function ArrayStripLab() {
    _s();
    const [sel, setSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#c2410c"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "Same type, instant access"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                children: [
                    "Five students' marks live in ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "one array named Sub"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 83,
                        columnNumber: 43
                    }, this),
                    " — every element is the ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "same data type"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this),
                    ", every element carries an ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "index"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 84,
                        columnNumber: 71
                    }, this),
                    ", and any element is reachable in ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "one direct jump"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 85,
                        columnNumber: 37
                    }, this),
                    ": no scanning, no searching."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 rounded-2xl p-4",
                style: {
                    background: "#fffaf1",
                    border: "1px dashed #e5c79d"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrayStrip, {
                    selected: sel
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center gap-2",
                children: [
                    ARR_VALS.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                            onClick: ()=>setSel(i),
                            children: [
                                "read Sub[",
                                i,
                                "]"
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 91,
                            columnNumber: 33
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        onClick: ()=>setSel(null),
                        children: "clear"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 min-h-[1.6rem] font-mono-warm text-[.85rem] font-bold text-[#a0410a]",
                "aria-live": "polite",
                children: sel === null ? "→ click a position above — the answer comes back instantly." : `Sub[${sel}] → ${ARR_VALS[sel]}   // direct access: one jump, zero scanning`
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 98,
                                columnNumber: 32
                            }, this),
                            " stores the same data type"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 99,
                                columnNumber: 32
                            }, this),
                            " every element is indexed (0, 1, 2, …)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 100,
                                columnNumber: 32
                            }, this),
                            " direct access by index"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(ArrayStripLab, "Kg/V/xzf+lXsiqS7aKUGktDgkZ8=");
_c2 = ArrayStripLab;
const MARKS = [
    [
        72,
        88,
        91,
        67
    ],
    [
        55,
        60,
        71,
        80
    ],
    [
        60,
        65,
        70,
        55
    ],
    [
        91,
        78,
        84,
        90
    ],
    [
        45,
        52,
        61,
        58
    ]
];
function TwoDGrid() {
    const hot = (i, j)=>i === 2 && j === 1 || i === 4 && j === 3;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 560 336",
        className: "h-auto w-full",
        role: "img",
        "aria-label": "Two-dimensional array of student marks: five rows of students, four columns of subjects, with Sub[2,1] and Sub[4,3] highlighted",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                    id: "grid3-ah",
                    markerWidth: "8",
                    markerHeight: "8",
                    refX: "6",
                    refY: "3",
                    orient: "auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0,0 L7,3 L0,6 Z",
                        fill: "#b45309"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 115,
                        columnNumber: 96
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "14",
                y: "30",
                fontSize: "11",
                fontWeight: "700",
                fill: "#8a5a06",
                children: "students (i) ↓"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            [
                0,
                1,
                2,
                3
            ].map((j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: 118 + j * 88 + 44,
                    y: "46",
                    textAnchor: "middle",
                    fontSize: "12",
                    fontWeight: "700",
                    fill: "#8a5a06",
                    children: [
                        "subject ",
                        j
                    ]
                }, j, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 118,
                    columnNumber: 32
                }, this)),
            MARKS.map((row, i)=>row.map((m, j)=>{
                    const x = 118 + j * 88, y = 56 + i * 46, on = hot(i, j);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: x,
                                y: y,
                                width: "84",
                                height: "42",
                                rx: "8",
                                fill: on ? "#f6ad3c" : i % 2 ? "#fde8cf" : "#fff3e0",
                                stroke: on ? "#c2410c" : "#e8cfa5",
                                strokeWidth: on ? 3 : 1.4
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: x + 42,
                                y: y + 27,
                                textAnchor: "middle",
                                fontSize: "15",
                                fontWeight: "700",
                                fill: "#3e2c1d",
                                children: m
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            j === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "106",
                                y: y + 27,
                                textAnchor: "end",
                                fontSize: "12",
                                fontWeight: "700",
                                fill: "#6f5438",
                                children: [
                                    "student ",
                                    i
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 125,
                                columnNumber: 24
                            }, this) : null
                        ]
                    }, `${i}-${j}`, true, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this);
                })),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18",
                y1: "171",
                x2: "110",
                y2: "171",
                stroke: "#b45309",
                strokeWidth: "2",
                markerEnd: "url(#grid3-ah)"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "18",
                y: "158",
                fontSize: "12",
                fontWeight: "800",
                fill: "#b45309",
                children: "Sub[2,1] → 65"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "542",
                y1: "300",
                x2: "474",
                y2: "272",
                stroke: "#b45309",
                strokeWidth: "2",
                markerEnd: "url(#grid3-ah)"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "546",
                y: "318",
                textAnchor: "end",
                fontSize: "12",
                fontWeight: "800",
                fill: "#b45309",
                children: "Sub[4,3] → 58"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_c3 = TwoDGrid;
/* ---------- insert trio (framer-motion stagger) ---------- */ const CW = 56, STEP = 64;
function Cells({ vals }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: vals.map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: 30 + i * STEP,
                        y: "34",
                        width: CW,
                        height: "44",
                        rx: "8",
                        fill: v === null ? "none" : "#fde8cf",
                        stroke: v === null ? "#c99a5b" : "#e2b075",
                        strokeWidth: "1.6",
                        strokeDasharray: v === null ? "5 4" : undefined
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    v !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: 30 + i * STEP + CW / 2,
                        y: "62",
                        textAnchor: "middle",
                        fontSize: "16",
                        fontWeight: "800",
                        fill: "#3e2c1d",
                        children: v
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 147,
                        columnNumber: 25
                    }, this) : null
                ]
            }, i, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this))
    }, void 0, false);
}
_c4 = Cells;
function TrioCard({ title, tone, svg, caption }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "flex items-center gap-2 text-[.86rem] font-extrabold text-[#7c4a12]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "h-4 w-4",
                        style: {
                            color: tone
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 157,
                        columnNumber: 90
                    }, this),
                    " ",
                    title
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 372 112",
                className: "mt-3 h-auto w-full",
                role: "img",
                "aria-label": caption,
                children: svg
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-[.78rem] font-bold text-[#6f5438]",
                children: caption
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_c5 = TrioCard;
function InsertTrio() {
    const pop = (x, d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
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
                delay: d,
                duration: 0.4
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: x,
                    y: "34",
                    width: CW,
                    height: "44",
                    rx: "8",
                    fill: "#f6d5c0",
                    stroke: "#c2410c",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 167,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x + CW / 2,
                    y: "62",
                    textAnchor: "middle",
                    fontSize: "16",
                    fontWeight: "800",
                    fill: "#8a2f0f",
                    children: "99"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 168,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atb/AtbParts3.tsx",
            lineNumber: 166,
            columnNumber: 5
        }, this);
    const shift = (kids)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
            initial: {
                x: 0
            },
            whileInView: {
                x: STEP
            },
            viewport: {
                once: true
            },
            transition: {
                delay: 0.4,
                duration: 0.6,
                ease: "easeInOut"
            },
            children: kids
        }, void 0, false, {
            fileName: "[project]/src/components/atb/AtbParts3.tsx",
            lineNumber: 172,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-5 md:grid-cols-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrioCard, {
                title: "Insert at the END",
                tone: "#7c9a3e",
                caption: "shifts: 0 — just write into the free slot",
                svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cells, {
                            vals: [
                                10,
                                20,
                                30,
                                40,
                                null
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "314",
                            y: "20",
                            fontSize: "13",
                            fontWeight: "800",
                            fill: "#7c9a3e",
                            children: "99"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "314",
                            y1: "24",
                            x2: "314",
                            y2: "30",
                            stroke: "#7c9a3e",
                            strokeWidth: "1.6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, void 0),
                        pop(30 + 4 * STEP, 0.45)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrioCard, {
                title: "Insert at the BEGINNING",
                tone: "#be4a4a",
                caption: "shifts: n — every element moves right",
                svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: 30 + 4 * STEP,
                            y: "34",
                            width: CW,
                            height: "44",
                            rx: "8",
                            fill: "none",
                            stroke: "#c99a5b",
                            strokeWidth: "1.6",
                            strokeDasharray: "5 4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, void 0),
                        shift(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cells, {
                            vals: [
                                10,
                                20,
                                30,
                                40
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 186,
                            columnNumber: 18
                        }, void 0)),
                        pop(30, 0.85)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrioCard, {
                title: "Insert in the MIDDLE (Arr[2])",
                tone: "#b45309",
                caption: "shifts: everything after Arr[2] moves",
                svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cells, {
                            vals: [
                                10,
                                20,
                                null,
                                null,
                                null
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, void 0),
                        shift(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: 30 + 2 * STEP,
                                    y: "34",
                                    width: CW,
                                    height: "44",
                                    rx: "8",
                                    fill: "#fde8cf",
                                    stroke: "#e2b075",
                                    strokeWidth: "1.6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: 30 + 2 * STEP + CW / 2,
                                    y: "62",
                                    textAnchor: "middle",
                                    fontSize: "16",
                                    fontWeight: "800",
                                    fill: "#3e2c1d",
                                    children: "30"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: 30 + 3 * STEP,
                                    y: "34",
                                    width: CW,
                                    height: "44",
                                    rx: "8",
                                    fill: "#fde8cf",
                                    stroke: "#e2b075",
                                    strokeWidth: "1.6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: 30 + 3 * STEP + CW / 2,
                                    y: "62",
                                    textAnchor: "middle",
                                    fontSize: "16",
                                    fontWeight: "800",
                                    fill: "#3e2c1d",
                                    children: "40"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, void 0)
                            ]
                        }, void 0, true)),
                        pop(30 + 2 * STEP, 0.85)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_c6 = InsertTrio;
/* ============================================================
   LINKED LISTS — SVG pieces
   ============================================================ */ function LlNode({ x, y, label, w = 150 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: x,
                y: y,
                width: w,
                height: "52",
                rx: "9",
                fill: "#fde8cf",
                stroke: "#c99a5b",
                strokeWidth: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: x + w - 58,
                y: y,
                width: "58",
                height: "52",
                rx: "9",
                fill: "#b45309",
                stroke: "#c99a5b",
                strokeWidth: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: x + (w - 58) / 2,
                y: y + 32,
                textAnchor: "middle",
                fontSize: "14",
                fontWeight: "800",
                fill: "#3e2c1d",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: x + w - 29,
                y: y + 31,
                textAnchor: "middle",
                fontSize: "11",
                fontWeight: "700",
                fill: "#fff7ec",
                children: "next"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c7 = LlNode;
function PlaylistChain() {
    const xs = [
        96,
        306,
        516
    ];
    const inp = (d)=>({
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
                delay: d,
                duration: 0.45
            }
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 740 132",
        className: "h-auto w-full",
        role: "img",
        "aria-label": "Linked list playlist: Head points to Song 1, which points to Song 2, which points to Song 3, whose pointer is Null",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                    id: "ll-ah",
                    markerWidth: "8",
                    markerHeight: "8",
                    refX: "6",
                    refY: "3",
                    orient: "auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0,0 L7,3 L0,6 Z",
                        fill: "#f5c889"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 225,
                        columnNumber: 93
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...inp(0),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "10",
                        y: "40",
                        width: "56",
                        height: "52",
                        rx: "9",
                        fill: "#c2410c"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "38",
                        y: "71",
                        textAnchor: "middle",
                        fontSize: "13",
                        fontWeight: "800",
                        fill: "#fff7ec",
                        children: "Head"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                x1: "66",
                y1: "66",
                x2: "90",
                y2: "66",
                stroke: "#f5c889",
                strokeWidth: "2",
                markerEnd: "url(#ll-ah)",
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
                    delay: 0.2
                }
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            xs.map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                    ...inp(0.25 + i * 0.25),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LlNode, {
                            x: x,
                            y: 40,
                            label: `Song ${i + 1}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this),
                        i < 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: x + 150,
                            y1: "66",
                            x2: x + 204,
                            y2: "66",
                            stroke: "#f5c889",
                            strokeWidth: "2",
                            markerEnd: "url(#ll-ah)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 235,
                            columnNumber: 20
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: x + 121,
                            y: "30",
                            textAnchor: "middle",
                            fontSize: "12",
                            fontWeight: "800",
                            fill: "#f0a8a8",
                            children: "Null"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 235,
                            columnNumber: 130
                        }, this)
                    ]
                }, x, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "360",
                y: "122",
                textAnchor: "middle",
                fontSize: "12",
                fontWeight: "600",
                fill: "#cbb392",
                children: "each node = data + a pointer to the next node — the chain can grow song by song"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
}
_c8 = PlaylistChain;
function FlavourMinis() {
    const box = (x, y, t, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: x,
                    y: y,
                    width: "72",
                    height: "40",
                    rx: "8",
                    fill: "#fde8cf",
                    stroke: "#c99a5b",
                    strokeWidth: "1.4"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 246,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x + 36,
                    y: y + 25,
                    textAnchor: "middle",
                    fontSize: "12",
                    fontWeight: "700",
                    fill: "#3e2c1d",
                    children: t
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 247,
                    columnNumber: 7
                }, this)
            ]
        }, k, true, {
            fileName: "[project]/src/components/atb/AtbParts3.tsx",
            lineNumber: 245,
            columnNumber: 5
        }, this);
    const mk = (id, fill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
            id: id,
            markerWidth: "7",
            markerHeight: "7",
            refX: "5.5",
            refY: "2.5",
            orient: "auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0,0 L6,2.5 L0,5 Z",
                fill: fill
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 251,
                columnNumber: 90
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/atb/AtbParts3.tsx",
            lineNumber: 251,
            columnNumber: 5
        }, this);
    const S = [
        "S1",
        "S2",
        "S3"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-5 md:grid-cols-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-warm p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.95rem] font-extrabold text-[#f5c889]",
                        children: "Singly linked list"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 320 92",
                        className: "mt-2 h-auto w-full",
                        role: "img",
                        "aria-label": "Singly linked list: arrows point forward only",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: mk("fl-s", "#f5c889")
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            S.map((t, i)=>box(14 + i * 104, 26, t, t)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "86",
                                y1: "46",
                                x2: "112",
                                y2: "46",
                                stroke: "#f5c889",
                                strokeWidth: "2",
                                markerEnd: "url(#fl-s)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "190",
                                y1: "46",
                                x2: "216",
                                y2: "46",
                                stroke: "#f5c889",
                                strokeWidth: "2",
                                markerEnd: "url(#fl-s)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "292",
                                y: "50",
                                fontSize: "11",
                                fontWeight: "700",
                                fill: "#f0a8a8",
                                children: "Null"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip mt-2",
                        children: "Lecture 7 · play next"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[.82rem] leading-relaxed text-[#cbb392]",
                        children: [
                            "Sequential playback — the chain is walked head → end, one ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "next"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 266,
                                columnNumber: 132
                            }, this),
                            " pointer at a time."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-warm p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.95rem] font-extrabold text-[#f5c889]",
                        children: "Doubly linked list"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 320 92",
                        className: "mt-2 h-auto w-full",
                        role: "img",
                        "aria-label": "Doubly linked list: arrows point forward and backward",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: mk("fl-d", "#f5c889")
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            S.map((t, i)=>box(14 + i * 104, 26, t, t)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "88",
                                y1: "38",
                                x2: "112",
                                y2: "38",
                                stroke: "#f5c889",
                                strokeWidth: "2",
                                markerEnd: "url(#fl-d)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "190",
                                y1: "38",
                                x2: "216",
                                y2: "38",
                                stroke: "#f5c889",
                                strokeWidth: "2",
                                markerEnd: "url(#fl-d)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "114",
                                y1: "56",
                                x2: "90",
                                y2: "56",
                                stroke: "#e0a45e",
                                strokeWidth: "2",
                                markerEnd: "url(#fl-d)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "216",
                                y1: "56",
                                x2: "192",
                                y2: "56",
                                stroke: "#e0a45e",
                                strokeWidth: "2",
                                markerEnd: "url(#fl-d)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip mt-2",
                        children: "Lecture 7 · play previous"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[.82rem] leading-relaxed text-[#cbb392]",
                        children: [
                            "Both directions — ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "play next"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 279,
                                columnNumber: 92
                            }, this),
                            " and ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "play previous"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 279,
                                columnNumber: 123
                            }, this),
                            " both work."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-warm p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.95rem] font-extrabold text-[#f5c889]",
                        children: "Circular linked list"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 320 92",
                        className: "mt-2 h-auto w-full",
                        role: "img",
                        "aria-label": "Circular linked list: the last node loops back to the head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: mk("fl-c", "#e0a45e")
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            S.map((t, i)=>box(14 + i * 104, 34, t, t)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "86",
                                y1: "54",
                                x2: "112",
                                y2: "54",
                                stroke: "#f5c889",
                                strokeWidth: "2",
                                markerEnd: "url(#fl-c)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "190",
                                y1: "54",
                                x2: "216",
                                y2: "54",
                                stroke: "#f5c889",
                                strokeWidth: "2",
                                markerEnd: "url(#fl-c)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 288 32 C 280 6, 60 6, 44 30",
                                fill: "none",
                                stroke: "#e0a45e",
                                strokeWidth: "2",
                                markerEnd: "url(#fl-c)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "160",
                                y: "16",
                                textAnchor: "middle",
                                fontSize: "10.5",
                                fontWeight: "700",
                                fill: "#e0a45e",
                                children: "back to Head"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip mt-2",
                        children: "Lecture 7 · repeat / shuffle"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[.82rem] leading-relaxed text-[#cbb392]",
                        children: [
                            "The playlist ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "starts over"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 292,
                                columnNumber: 87
                            }, this),
                            " after the last song — repeat and shuffle live here, and the same loop drives menu systems."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_c9 = FlavourMinis;
function RewireLab() {
    _s1();
    const [wired, setWired] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "Surgery in two pointer moves"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "0 cells shifted — an array would move everything after Song 2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#e9d7bf]",
                children: [
                    "To insert ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Song 2a"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 307,
                        columnNumber: 19
                    }, this),
                    " between Song 2 and Song 3, no element moves. We only rewrite ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "two pointers"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 308,
                        columnNumber: 17
                    }, this),
                    ": Song2.next → 2a, then 2a.next → Song3."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 rounded-2xl p-4",
                style: {
                    background: "rgba(255,236,210,.05)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 760 212",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": "Inserting Song 2a into a linked list by rewiring two pointers",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: "rw-ah",
                                    markerWidth: "8",
                                    markerHeight: "8",
                                    refX: "6",
                                    refY: "3",
                                    orient: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L7,3 L0,6 Z",
                                        fill: "#f5c889"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 313,
                                        columnNumber: 97
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: "rw-x",
                                    markerWidth: "8",
                                    markerHeight: "8",
                                    refX: "6",
                                    refY: "3",
                                    orient: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L7,3 L0,6 Z",
                                        fill: "#f0a8a8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 314,
                                        columnNumber: 96
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LlNode, {
                            x: 24,
                            y: 24,
                            label: "Song 1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LlNode, {
                            x: 290,
                            y: 24,
                            label: "Song 2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 317,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LlNode, {
                            x: 560,
                            y: 24,
                            label: "Song 3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "174",
                            y1: "50",
                            x2: "284",
                            y2: "50",
                            stroke: "#f5c889",
                            strokeWidth: "2",
                            markerEnd: "url(#rw-ah)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                            x1: "440",
                            y1: "50",
                            x2: "554",
                            y2: "50",
                            stroke: wired ? "#f0a8a8" : "#f5c889",
                            strokeWidth: "2",
                            strokeDasharray: wired ? "6 5" : undefined,
                            markerEnd: wired ? "url(#rw-x)" : "url(#rw-ah)",
                            animate: {
                                opacity: wired ? 0.55 : 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this),
                        wired ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "497",
                            y: "40",
                            textAnchor: "middle",
                            fontSize: "11",
                            fontWeight: "800",
                            fill: "#f0a8a8",
                            children: "✗ rewired away"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 321,
                            columnNumber: 20
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                            initial: false,
                            animate: {
                                opacity: wired ? 1 : 0
                            },
                            transition: {
                                duration: 0.4
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LlNode, {
                                    x: 400,
                                    y: 140,
                                    label: "Song 2a"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 323,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "412",
                                    y1: "76",
                                    x2: "446",
                                    y2: "134",
                                    stroke: "#f5c889",
                                    strokeWidth: "2",
                                    markerEnd: "url(#rw-ah)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "392",
                                    y: "112",
                                    fontSize: "10.5",
                                    fontWeight: "700",
                                    fill: "#f5c889",
                                    children: "move 1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "552",
                                    y1: "152",
                                    x2: "636",
                                    y2: "82",
                                    stroke: "#f5c889",
                                    strokeWidth: "2",
                                    markerEnd: "url(#rw-ah)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "600",
                                    y: "130",
                                    fontSize: "10.5",
                                    fontWeight: "700",
                                    fill: "#f5c889",
                                    children: "move 2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 311,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: "warm",
                        onClick: ()=>setWired(true),
                        children: "Rewire in 2 moves"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        dark: true,
                        onClick: ()=>setWired(false),
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 333,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono-warm text-[.82rem] font-bold",
                        style: {
                            color: "#f5c889"
                        },
                        "aria-live": "polite",
                        children: wired ? "Song2.next → 2a · 2a.next → Song3 — done. Nothing else was touched." : "Before: Song2.next → Song3 (direct)."
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 301,
        columnNumber: 5
    }, this);
}
_s1(RewireLab, "n4TL8727A2Jy8B0H5Q6/QXttAaE=");
_c10 = RewireLab;
function ListsOfLists() {
    const rows = [
        {
            y: 18,
            name: "Playlist 1",
            songs: [
                "1A",
                "1B",
                "1C"
            ]
        },
        {
            y: 88,
            name: "Playlist 2",
            songs: [
                "2A",
                "2B"
            ]
        },
        {
            y: 158,
            name: "Playlist 3",
            songs: [
                "3A",
                "3B",
                "3C"
            ]
        },
        {
            y: 228,
            name: "Playlist 4",
            songs: [
                "4A",
                "4B"
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 700 292",
        className: "h-auto w-full",
        role: "img",
        "aria-label": "A user owns four playlists and each playlist holds its own chain of songs — a linked list of linked lists",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                    id: "lol-ah",
                    markerWidth: "7",
                    markerHeight: "7",
                    refX: "5.5",
                    refY: "2.5",
                    orient: "auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0,0 L6,2.5 L0,5 Z",
                        fill: "#f5c889"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 352,
                        columnNumber: 98
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 352,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14",
                y: "120",
                width: "104",
                height: "52",
                rx: "10",
                fill: "#c2410c"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "66",
                y: "151",
                textAnchor: "middle",
                fontSize: "13",
                fontWeight: "800",
                fill: "#fff7ec",
                children: "User 1"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this),
            rows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "182",
                            y: r.y,
                            width: "122",
                            height: "42",
                            rx: "9",
                            fill: "#b45309",
                            stroke: "#c99a5b",
                            strokeWidth: "1.4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "243",
                            y: r.y + 26,
                            textAnchor: "middle",
                            fontSize: "12",
                            fontWeight: "800",
                            fill: "#fff7ec",
                            children: r.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 359,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "118",
                            y1: "146",
                            x2: "176",
                            y2: r.y + 21,
                            stroke: "#f5c889",
                            strokeWidth: "1.8",
                            markerEnd: "url(#lol-ah)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 360,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "304",
                            y1: r.y + 21,
                            x2: "360",
                            y2: r.y + 21,
                            stroke: "#f5c889",
                            strokeWidth: "1.8",
                            markerEnd: "url(#lol-ah)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, this),
                        r.songs.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: 366 + i * 84,
                                        y: r.y + 5,
                                        width: "70",
                                        height: "32",
                                        rx: "8",
                                        fill: "#fde8cf",
                                        stroke: "#c99a5b",
                                        strokeWidth: "1.3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: 366 + i * 84 + 35,
                                        y: r.y + 26,
                                        textAnchor: "middle",
                                        fontSize: "11.5",
                                        fontWeight: "700",
                                        fill: "#3e2c1d",
                                        children: s
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this),
                                    i > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: 366 + (i - 1) * 84 + 70,
                                        y1: r.y + 21,
                                        x2: 366 + i * 84 - 6,
                                        y2: r.y + 21,
                                        stroke: "#f5c889",
                                        strokeWidth: "1.6",
                                        markerEnd: "url(#lol-ah)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 366,
                                        columnNumber: 24
                                    }, this) : null
                                ]
                            }, s, true, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 363,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 366 + r.songs.length * 84 + 6,
                            y: r.y + 26,
                            fontSize: "13",
                            fontWeight: "700",
                            fill: "#cbb392",
                            children: "…"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 369,
                            columnNumber: 11
                        }, this)
                    ]
                }, r.y, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 357,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 350,
        columnNumber: 5
    }, this);
}
_c11 = ListsOfLists;
/* ============================================================
   LECTURE 7 — interactive machines (linked lists)
   Unique SVG marker prefixes per machine: mm- · tv- · dl- · sf-
   ============================================================ */ /* curved pointer path between two boxes, trimmed so arrowheads stay visible */ function hopPath(ax, ay, hwa, hha, bx, by, hwb, hhb, bend) {
    const dx = bx - ax, dy = by - ay;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len, uy = dy / len;
    const exit = (hw, hh)=>Math.min(Math.abs(ux) < 1e-6 ? Infinity : hw / Math.abs(ux), Math.abs(uy) < 1e-6 ? Infinity : hh / Math.abs(uy));
    const sx = ax + ux * (exit(hwa, hha) + 6);
    const sy = ay + uy * (exit(hwa, hha) + 6);
    const ex = bx - ux * (exit(hwb, hhb) + 4);
    const ey = by - uy * (exit(hwb, hhb) + 4);
    const mx = (sx + ex) / 2 - uy * bend;
    const my = (sy + ey) / 2 + ux * bend;
    const f = (n)=>n.toFixed(1);
    return `M ${f(sx)} ${f(sy)} Q ${f(mx)} ${f(my)} ${f(ex)} ${f(ey)}`;
}
/* data + next node with an optional highlight state (traversal / delete) */ function L7Node({ x, y, label, active = false, dead = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: x,
                y: y,
                width: 150,
                height: 52,
                rx: 9,
                fill: dead ? "#d9d2c6" : active ? "#f6ad3c" : "#fde8cf",
                stroke: dead ? "#6b6154" : active ? "#f5c889" : "#c99a5b",
                strokeWidth: active ? 2.5 : 1.6
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 408,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: x + 92,
                y: y,
                width: 58,
                height: 52,
                rx: 9,
                fill: dead ? "#8a8175" : active ? "#c2410c" : "#b45309",
                stroke: dead ? "#6b6154" : "#c99a5b",
                strokeWidth: 1.6
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: x + 46,
                y: y + 32,
                textAnchor: "middle",
                fontSize: 14,
                fontWeight: 800,
                fill: dead ? "#57504a" : active ? "#7c2d0a" : "#3e2c1d",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 410,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: x + 121,
                y: y + 31,
                textAnchor: "middle",
                fontSize: 11,
                fontWeight: 700,
                fill: "#fff7ec",
                children: "next"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 411,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 407,
        columnNumber: 5
    }, this);
}
_c12 = L7Node;
/* ---------- machine 1 · MemoryMapLab ---------- */ const MM_SONGS = [
    "Song 1",
    "Song 2",
    "Song 3",
    "Song 4",
    "Song 5"
];
const MM_ARRAY_ADDR = [
    "1000",
    "1048",
    "1096",
    "1144",
    "1192"
];
const MM_SCATTER = [
    {
        name: "Song 1",
        addr: "0724",
        next: "2044",
        x: 96,
        y: 22
    },
    {
        name: "Song 2",
        addr: "2044",
        next: "1048",
        x: 520,
        y: 30
    },
    {
        name: "Song 3",
        addr: "1048",
        next: "1556",
        x: 300,
        y: 128
    },
    {
        name: "Song 4",
        addr: "1556",
        next: "0312",
        x: 560,
        y: 168
    },
    {
        name: "Song 5",
        addr: "0312",
        next: null,
        x: 110,
        y: 236
    }
];
function MmArrayView() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            MM_SONGS.map((s, i)=>{
                const x = 44 + i * 118;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                    initial: {
                        opacity: 0,
                        y: -12
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: i * 0.08,
                        duration: 0.4
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: x + 59,
                            y: "88",
                            textAnchor: "middle",
                            fontSize: "12",
                            fontWeight: "700",
                            fill: "#b99a75",
                            children: i
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 435,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: x,
                            y: "96",
                            width: "118",
                            height: "64",
                            fill: "#fde8cf",
                            stroke: "#e2b075",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 436,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: x + 59,
                            y: "135",
                            textAnchor: "middle",
                            fontSize: "14.5",
                            fontWeight: "800",
                            fill: "#3e2c1d",
                            children: s
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 437,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: x + 59,
                            y: "186",
                            textAnchor: "middle",
                            fontSize: "11.5",
                            fontWeight: "700",
                            fill: "#b99a75",
                            children: MM_ARRAY_ADDR[i]
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 438,
                            columnNumber: 13
                        }, this)
                    ]
                }, s, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 434,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                x: "38",
                y: "90",
                width: "606",
                height: "76",
                rx: "10",
                fill: "none",
                stroke: "#c99a5b",
                strokeWidth: "1.4",
                strokeDasharray: "7 6",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.5,
                    duration: 0.5
                }
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 442,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                x: "341",
                y: "238",
                textAnchor: "middle",
                fontSize: "12",
                fontWeight: "700",
                fill: "#cbb392",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.65
                },
                children: "one contiguous block — addresses run consecutively (stride 48)"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 444,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                x: "341",
                y: "264",
                textAnchor: "middle",
                fontSize: "11.5",
                fontWeight: "600",
                fill: "#b99a75",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.8
                },
                children: "direct access: Sub[i] jumps straight to 1000 + i × 48 — but no cell can move without moving the block"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 430,
        columnNumber: 5
    }, this);
}
_c13 = MmArrayView;
function MmListView() {
    const hops = [
        {
            d: hopPath(36, 50, 30, 20, 181, 50, 85, 28, 0),
            delay: 0.15
        },
        {
            d: hopPath(181, 50, 85, 28, 605, 58, 85, 28, 34),
            delay: 0.3
        },
        {
            d: hopPath(605, 58, 85, 28, 385, 156, 85, 28, -34),
            delay: 0.45
        },
        {
            d: hopPath(385, 156, 85, 28, 645, 196, 85, 28, 30),
            delay: 0.6
        },
        {
            d: hopPath(645, 196, 85, 28, 195, 264, 85, 28, -30),
            delay: 0.75
        },
        {
            d: hopPath(195, 264, 85, 28, 330, 276, 16, 9, 22),
            delay: 0.9
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            hops.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                    d: h.d,
                    fill: "none",
                    stroke: "#f5c889",
                    strokeWidth: "2",
                    markerEnd: "url(#mm-ah)",
                    initial: {
                        pathLength: 0,
                        opacity: 0
                    },
                    animate: {
                        pathLength: 1,
                        opacity: 1
                    },
                    transition: {
                        delay: h.delay,
                        duration: 0.45,
                        ease: "easeInOut"
                    }
                }, i, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 468,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.05
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "6",
                        y: "30",
                        width: "60",
                        height: "40",
                        rx: "9",
                        fill: "#c2410c"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 473,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "36",
                        y: "55",
                        textAnchor: "middle",
                        fontSize: "12.5",
                        fontWeight: "800",
                        fill: "#fff7ec",
                        children: "Head"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 474,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 472,
                columnNumber: 7
            }, this),
            MM_SCATTER.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                    initial: {
                        opacity: 0,
                        y: 14
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.1 + i * 0.1,
                        duration: 0.4
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: n.x + 2,
                            y: n.y - 7,
                            fontSize: "10",
                            fontWeight: "700",
                            fill: "#b99a75",
                            children: [
                                "addr ",
                                n.addr
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 478,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: n.x,
                            y: n.y,
                            width: "170",
                            height: "56",
                            rx: "9",
                            fill: "#fde8cf",
                            stroke: "#c99a5b",
                            strokeWidth: "1.6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 479,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: n.x + 104,
                            y: n.y,
                            width: "66",
                            height: "56",
                            rx: "9",
                            fill: "#b45309",
                            stroke: "#c99a5b",
                            strokeWidth: "1.6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 480,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: n.x + 52,
                            y: n.y + 33,
                            textAnchor: "middle",
                            fontSize: "13.5",
                            fontWeight: "800",
                            fill: "#3e2c1d",
                            children: n.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 481,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: n.x + 137,
                            y: n.y + 22,
                            textAnchor: "middle",
                            fontSize: "9",
                            fontWeight: "700",
                            fill: "#ffe9cf",
                            children: "next"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 482,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: n.x + 137,
                            y: n.y + 41,
                            textAnchor: "middle",
                            fontSize: "11",
                            fontWeight: "800",
                            fill: n.next === null ? "#ffd6d6" : "#fff7ec",
                            children: n.next ?? "Null"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this)
                    ]
                }, n.name, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 477,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                x: "312",
                y: "281",
                fontSize: "12",
                fontWeight: "800",
                fill: "#f0a8a8",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1
                },
                children: "Null"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 486,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 466,
        columnNumber: 5
    }, this);
}
_c14 = MmListView;
function MemoryMapLab() {
    _s2();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("array");
    const [tick, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const visit = (m)=>{
        setMode(m);
        setTick((t)=>t + 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#f5c889"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 501,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "One playlist, two memory maps"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 502,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 503,
                                columnNumber: 32
                            }, this),
                            " Lecture 7 · scattered memory"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 500,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#e9d7bf]",
                children: "The same five songs, stored two ways. Flip between the maps and watch where the data actually sits — and what carries the order."
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 505,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: mode === "array" ? "warm" : "ghost",
                        dark: mode !== "array",
                        onClick: ()=>visit("array"),
                        children: "Array — one packed block"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 510,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: mode === "list" ? "warm" : "ghost",
                        dark: mode !== "list",
                        onClick: ()=>visit("list"),
                        children: "Linked list — scattered anywhere"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 509,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl p-4",
                style: {
                    background: "rgba(255,236,210,.05)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 760 330",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": mode === "array" ? "Array memory map: five song cells touching in one contiguous block at consecutive addresses 1000 to 1192" : "Linked list memory map: the same five songs scattered at unrelated addresses 0724, 2044, 1048, 1556 and 0312, connected by next pointers starting at the head, the last node pointing to Null",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                id: "mm-ah",
                                markerWidth: "8",
                                markerHeight: "8",
                                refX: "6",
                                refY: "3",
                                orient: "auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0,0 L7,3 L0,6 Z",
                                    fill: "#f5c889"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 519,
                                    columnNumber: 97
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 519,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 518,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: mode === "array" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MmArrayView, {}, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 522,
                                columnNumber: 33
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MmListView, {}, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 522,
                                columnNumber: 51
                            }, this)
                        }, `${mode}-${tick}`, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 521,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 514,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 513,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 min-h-[1.6rem] font-mono-warm text-[.85rem] font-bold",
                style: {
                    color: "#f5c889"
                },
                "aria-live": "polite",
                children: mode === "array" ? "→ Array: cells touch, addresses run 1000 · 1048 · 1096 · 1144 · 1192 — position predicts the neighbour." : "→ Linked list: same five songs at 0724 · 2044 · 1048 · 1556 · 0312 — the connections create the sequence, not physical proximity."
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[.86rem] leading-relaxed text-[#cbb392]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: "#f5c889"
                        },
                        children: "Arrays store elements in consecutive memory locations"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 532,
                        columnNumber: 9
                    }, this),
                    "; linked lists use ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: "#f5c889"
                        },
                        children: "pointers — addresses — to link elements regardless of their physical memory locations"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 533,
                        columnNumber: 19
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 531,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 499,
        columnNumber: 5
    }, this);
}
_s2(MemoryMapLab, "8pmn+QzOZpJbvs4FffxL1vmZmsU=");
_c15 = MemoryMapLab;
/* ---------- machine 2 · TraversalLab ---------- */ function TraversalLab() {
    _s3();
    const [variant, setVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("singly");
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Now playing Song 1 — Head → S1 → S2 → S3 → Null. Use Next / Prev to walk the chain.");
    const pick = (v)=>{
        setVariant(v);
        setPos(0);
        setStatus(v === "singly" ? "Singly: one direction only — Next walks forward, Prev is dead (no prev pointers exist)." : v === "doubly" ? "Doubly: every node also carries a prev pointer — Next and Prev both work." : "Circular: the last node points back to the head — the walk never dead-ends.");
    };
    const next = ()=>{
        if (pos < 2) {
            setPos(pos + 1);
            setStatus(`Next → now playing Song ${pos + 2} — followed the .next pointer.`);
        } else if (variant === "circular") {
            setPos(0);
            setStatus("Repeat — Song 3.next loops back to the head: Song 1 plays again.");
        }
    };
    const prev = ()=>{
        if (variant === "singly") return;
        if (pos > 0) {
            setPos(pos - 1);
            setStatus(`Prev → now playing Song ${pos} — one prev pointer backwards.`);
        } else if (variant === "circular") {
            setPos(2);
            setStatus("Wrapped — in a circular list the head's previous is the last node: Song 3 plays.");
        }
    };
    const reset = ()=>{
        setPos(0);
        setStatus("Reset — now playing Song 1.");
    };
    const nextDisabled = variant !== "circular" && pos === 2;
    const prevDisabled = variant === "singly" || variant === "doubly" && pos === 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#f5c889"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 585,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "Walk the chain — next / prev, three ways"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 586,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 587,
                                columnNumber: 32
                            }, this),
                            " Lecture 7 · traversal lab"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 587,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 584,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#e9d7bf]",
                children: [
                    "Same three nodes, three navigation personalities. Switch the flavour, then walk: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 590,
                        columnNumber: 90
                    }, this),
                    " ",
                    "follows ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono-warm",
                        children: ".next"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 591,
                        columnNumber: 17
                    }, this),
                    "; ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Prev"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 591,
                        columnNumber: 64
                    }, this),
                    " needs a",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono-warm",
                        children: "prev"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 592,
                        columnNumber: 9
                    }, this),
                    " pointer — only the doubly list has one — and only the circular list can wrap at the ends."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 589,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 rounded-2xl p-4",
                style: {
                    background: "rgba(255,236,210,.05)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 760 210",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": variant === "singly" ? "Singly linked list: Head, S1, S2, S3, Null — forward arrows only, the now-playing node glows" : variant === "doubly" ? "Doubly linked list: Head, S1, S2, S3 with prev and next pointers, the now-playing node glows" : "Circular linked list: Head, S1, S2, S3 with the last node looping back to the head, the now-playing node glows",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: "tv-ah",
                                    markerWidth: "8",
                                    markerHeight: "8",
                                    refX: "6",
                                    refY: "3",
                                    orient: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L7,3 L0,6 Z",
                                        fill: "#f5c889"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 603,
                                        columnNumber: 97
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 603,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: "tv-back",
                                    markerWidth: "8",
                                    markerHeight: "8",
                                    refX: "6",
                                    refY: "3",
                                    orient: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L7,3 L0,6 Z",
                                        fill: "#e0a45e"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 604,
                                        columnNumber: 99
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 604,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 602,
                            columnNumber: 11
                        }, this),
                        variant === "circular" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 619 68 C 560 4, 120 4, 46 66",
                                    fill: "none",
                                    stroke: "#e0a45e",
                                    strokeWidth: "2",
                                    markerEnd: "url(#tv-back)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 608,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "330",
                                    y: "20",
                                    textAnchor: "middle",
                                    fontSize: "10.5",
                                    fontWeight: "700",
                                    fill: "#e0a45e",
                                    children: "last node → back to Head (repeat)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 609,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 607,
                            columnNumber: 13
                        }, this) : null,
                        variant === "doubly" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 326 134 C 308 152, 288 152, 272 138",
                                    fill: "none",
                                    stroke: "#e0a45e",
                                    strokeWidth: "2",
                                    markerEnd: "url(#tv-back)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 614,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 540 134 C 522 152, 502 152, 486 138",
                                    fill: "none",
                                    stroke: "#e0a45e",
                                    strokeWidth: "2",
                                    markerEnd: "url(#tv-back)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 615,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "640",
                                    y: "152",
                                    fontSize: "10",
                                    fontWeight: "700",
                                    fill: "#e0a45e",
                                    children: "prev pointers"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 616,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 613,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "8",
                            y: "79",
                            width: "56",
                            height: "46",
                            rx: "9",
                            fill: "#c2410c"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 619,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "36",
                            y: "107",
                            textAnchor: "middle",
                            fontSize: "12.5",
                            fontWeight: "800",
                            fill: "#fff7ec",
                            children: "Head"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 620,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "64",
                            y1: "102",
                            x2: "110",
                            y2: "102",
                            stroke: "#f5c889",
                            strokeWidth: "2",
                            markerEnd: "url(#tv-ah)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 621,
                            columnNumber: 11
                        }, this),
                        [
                            0,
                            1
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: 270 + i * 214,
                                y1: "102",
                                x2: 324 + i * 214,
                                y2: "102",
                                stroke: "#f5c889",
                                strokeWidth: "2",
                                markerEnd: "url(#tv-ah)"
                            }, `fw-${i}`, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 623,
                                columnNumber: 13
                            }, this)),
                        [
                            0,
                            1,
                            2
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(L7Node, {
                                x: 116 + i * 214,
                                y: 76,
                                label: `S${i + 1}`,
                                active: pos === i
                            }, `n-${i}`, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 626,
                                columnNumber: 13
                            }, this)),
                        variant !== "circular" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "698",
                                    y1: "102",
                                    x2: "704",
                                    y2: "102",
                                    stroke: "#f5c889",
                                    strokeWidth: "2",
                                    markerEnd: "url(#tv-ah)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 630,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "710",
                                    y: "106",
                                    fontSize: "11.5",
                                    fontWeight: "800",
                                    fill: "#f0a8a8",
                                    children: "Null"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 631,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 629,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                            x: 116 + pos * 214 - 6,
                            y: 70,
                            width: 162,
                            height: 64,
                            rx: 12,
                            fill: "none",
                            stroke: "#f5c889",
                            strokeWidth: "2",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: [
                                    0.35,
                                    0.95,
                                    0.35
                                ]
                            },
                            transition: {
                                duration: 1.8,
                                repeat: Infinity
                            }
                        }, `${variant}-${pos}`, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 634,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 596,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 595,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: variant === "singly" ? "warm" : "ghost",
                        dark: variant !== "singly",
                        onClick: ()=>pick("singly"),
                        children: "Singly"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 639,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: variant === "doubly" ? "warm" : "ghost",
                        dark: variant !== "doubly",
                        onClick: ()=>pick("doubly"),
                        children: "Doubly"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 640,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: variant === "circular" ? "warm" : "ghost",
                        dark: variant !== "circular",
                        onClick: ()=>pick("circular"),
                        children: "Circular"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mx-1 hidden h-6 w-px sm:block",
                        style: {
                            background: "rgba(255,214,160,.25)"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 642,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: "warm",
                        onClick: next,
                        disabled: nextDisabled,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 644,
                                    columnNumber: 62
                                }, this),
                                " Next"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 644,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 643,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        dark: true,
                        onClick: prev,
                        disabled: prevDisabled,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$back$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipBack$3e$__["SkipBack"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 647,
                                    columnNumber: 62
                                }, this),
                                " Prev"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 647,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 646,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        dark: true,
                        onClick: reset,
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 649,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 638,
                columnNumber: 7
            }, this),
            variant === "singly" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 flex items-center gap-1.5 text-[.8rem] font-bold",
                style: {
                    color: "#f0a8a8"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "h-3.5 w-3.5 shrink-0",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 653,
                        columnNumber: 11
                    }, this),
                    " a singly linked list cannot walk backwards — no prev pointers"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 652,
                columnNumber: 9
            }, this) : null,
            nextDisabled ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 flex items-center gap-1.5 text-[.8rem] font-bold",
                style: {
                    color: "#f0a8a8"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "h-3.5 w-3.5 shrink-0",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 658,
                        columnNumber: 11
                    }, this),
                    " S3.next → Null — the chain ends here (only a circular list continues)"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 657,
                columnNumber: 9
            }, this) : null,
            variant === "doubly" && pos === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 flex items-center gap-1.5 text-[.8rem] font-bold",
                style: {
                    color: "#f0a8a8"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "h-3.5 w-3.5 shrink-0",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 663,
                        columnNumber: 11
                    }, this),
                    " S1.prev → Null — even a doubly list stops at the head (only a circular one wraps)"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 662,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 min-h-[1.6rem] font-mono-warm text-[.85rem] font-bold",
                style: {
                    color: "#f5c889"
                },
                "aria-live": "polite",
                children: status
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 666,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 583,
        columnNumber: 5
    }, this);
}
_s3(TraversalLab, "7rwIDt/2sVLVRSk15himoN5nJdU=");
_c16 = TraversalLab;
/* ---------- machine 3 · DeleteLab ---------- */ function DeleteLab() {
    _s4();
    const [deleted, setDeleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#f0a8a8"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 678,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "Delete Song 2 — one pointer rewrite"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 679,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 680,
                                columnNumber: 32
                            }, this),
                            " Lecture 7 · delete = redirect"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 680,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 677,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#e9d7bf]",
                children: [
                    "Deletion is the mirror of insertion: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: "#f5c889"
                        },
                        children: "redirect the previous node's pointer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 683,
                        columnNumber: 46
                    }, this),
                    " around the victim. Song 2 itself is ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "not erased"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 684,
                        columnNumber: 62
                    }, this),
                    " — it stays in memory but leaves the active list."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 682,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 rounded-2xl p-4",
                style: {
                    background: "rgba(255,236,210,.05)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 760 196",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": "Deleting Song 2: Song 1's next pointer is redirected straight to Song 3 along a bypass arc while Song 2 fades out, still sitting in memory",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: "dl-ah",
                                    markerWidth: "8",
                                    markerHeight: "8",
                                    refX: "6",
                                    refY: "3",
                                    orient: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L7,3 L0,6 Z",
                                        fill: "#f5c889"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 690,
                                        columnNumber: 97
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 690,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: "dl-x",
                                    markerWidth: "8",
                                    markerHeight: "8",
                                    refX: "6",
                                    refY: "3",
                                    orient: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L7,3 L0,6 Z",
                                        fill: "#f0a8a8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 691,
                                        columnNumber: 96
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 691,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 689,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "6",
                            y: "44",
                            width: "56",
                            height: "44",
                            rx: "9",
                            fill: "#c2410c"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 693,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "34",
                            y: "71",
                            textAnchor: "middle",
                            fontSize: "12.5",
                            fontWeight: "800",
                            fill: "#fff7ec",
                            children: "Head"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 694,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "62",
                            y1: "66",
                            x2: "94",
                            y2: "66",
                            stroke: "#f5c889",
                            strokeWidth: "2",
                            markerEnd: "url(#dl-ah)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 695,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(L7Node, {
                            x: 100,
                            y: 40,
                            label: "Song 1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 696,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                            x1: "254",
                            y1: "66",
                            x2: "324",
                            y2: "66",
                            animate: {
                                stroke: deleted ? "#f0a8a8" : "#f5c889",
                                opacity: deleted ? 0.55 : 1
                            },
                            strokeDasharray: deleted ? "6 5" : undefined,
                            markerEnd: deleted ? "url(#dl-x)" : "url(#dl-ah)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 697,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                            x: "289",
                            y: "52",
                            textAnchor: "middle",
                            fontSize: "10.5",
                            fontWeight: "800",
                            fill: "#f0a8a8",
                            initial: false,
                            animate: {
                                opacity: deleted ? 1 : 0
                            },
                            children: "✗ rewired away"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 701,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                            x1: "484",
                            y1: "66",
                            x2: "544",
                            y2: "66",
                            animate: {
                                stroke: deleted ? "#6b6154" : "#f5c889",
                                opacity: deleted ? 0.22 : 1
                            },
                            markerEnd: deleted ? "url(#dl-x)" : "url(#dl-ah)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 703,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: "M 226 96 C 330 176, 490 176, 546 76",
                            fill: "none",
                            stroke: "#f5c889",
                            strokeWidth: "2",
                            initial: {
                                pathLength: 0,
                                opacity: 0
                            },
                            animate: deleted ? {
                                pathLength: 1,
                                opacity: 1
                            } : {
                                pathLength: 0,
                                opacity: 0
                            },
                            transition: {
                                duration: 0.6,
                                ease: "easeInOut"
                            },
                            markerEnd: "url(#dl-ah)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 706,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                            animate: {
                                opacity: deleted ? 0.35 : 1
                            },
                            transition: {
                                duration: 0.45
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(L7Node, {
                                    x: 330,
                                    y: 40,
                                    label: "Song 2",
                                    dead: deleted
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 710,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                                    x: "405",
                                    y: "128",
                                    textAnchor: "middle",
                                    fontSize: "10.5",
                                    fontWeight: "700",
                                    fill: "#b9a58c",
                                    initial: false,
                                    animate: {
                                        opacity: deleted ? 1 : 0
                                    },
                                    children: "still in memory — no longer in the list"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 711,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 709,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(L7Node, {
                            x: 550,
                            y: 40,
                            label: "Song 3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 714,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "710",
                            y: "71",
                            fontSize: "11.5",
                            fontWeight: "800",
                            fill: "#f0a8a8",
                            children: "Null"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 715,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 688,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 687,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: "warm",
                        onClick: ()=>setDeleted(true),
                        children: "Delete Song 2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 719,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        dark: true,
                        onClick: ()=>setDeleted(false),
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 720,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono-warm text-[.82rem] font-bold",
                        style: {
                            color: "#f5c889"
                        },
                        "aria-live": "polite",
                        children: deleted ? "One pointer rewrite: Song1.next → Song 3. An array would shift every element after Song 2." : "Before: Head → Song 1 → Song 2 → Song 3 → Null."
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 721,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 718,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-[.88rem] leading-relaxed text-[#cbb392]",
                children: [
                    "The lecture's three facts about deletion: only the ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: "#f5c889"
                        },
                        children: "pointer connections are adjusted"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 728,
                        columnNumber: 65
                    }, this),
                    " — the previous node is redirected to point at the node after the deleted one; the deleted element ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: "#f5c889"
                        },
                        children: "remains in memory"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 730,
                        columnNumber: 34
                    }, this),
                    " but is no longer part of the active list; and the operation is ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: "#f5c889"
                        },
                        children: "extremely efficient compared to array deletion"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 731,
                        columnNumber: 50
                    }, this),
                    ", which must shift every later element to close the gap."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 727,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 676,
        columnNumber: 5
    }, this);
}
_s4(DeleteLab, "o2xeLiSUc9MiQ9+ZoT8hWttPBRw=");
_c17 = DeleteLab;
/* ---------- machine 4 · ShuffleLab ---------- */ const SF_NODES = [
    {
        n: 1,
        addr: "0724",
        x: 60,
        y: 34
    },
    {
        n: 2,
        addr: "2044",
        x: 540,
        y: 26
    },
    {
        n: 3,
        addr: "1048",
        x: 120,
        y: 200
    },
    {
        n: 4,
        addr: "1556",
        x: 520,
        y: 206
    }
];
function shuffledOrder(prev) {
    const p = [
        1,
        2,
        3,
        4
    ];
    do {
        for(let i = p.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [p[i], p[j]] = [
                p[j],
                p[i]
            ];
        }
    }while (p.every((v, i)=>v === prev[i]))
    return p;
}
function ShuffleLab() {
    _s5();
    const [order, setOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        1,
        2,
        3,
        4
    ]);
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("The original order: Head → Song 1 → Song 2 → Song 3 → Song 4 → Null.");
    const nextOf = (n)=>{
        const i = order.indexOf(n);
        return i === 3 ? "Null" : `S${order[i + 1]}`;
    };
    const shuffle = ()=>{
        const p = shuffledOrder(order);
        setOrder(p);
        setCount((c)=>c + 1);
        setStatus(`Ordering #${count + 1} of 24 — Head → ${p.map((n)=>`Song ${n}`).join(" → ")} → Null. Same four nodes, same addresses — only the pointers were rewritten.`);
    };
    const reset = ()=>{
        setOrder([
            1,
            2,
            3,
            4
        ]);
        setCount(1);
        setStatus("Reset — Head → Song 1 → Song 2 → Song 3 → Song 4 → Null.");
    };
    const pts = [
        {
            x: 38,
            y: 142,
            hw: 32,
            hh: 20,
            id: 0
        },
        ...order.map((n)=>{
            const m = SF_NODES[n - 1];
            return {
                x: m.x + 85,
                y: m.y + 28,
                hw: 85,
                hh: 28,
                id: n
            };
        })
    ];
    const hops = [];
    for(let i = 0; i < pts.length - 1; i++){
        hops.push({
            d: hopPath(pts[i].x, pts[i].y, pts[i].hw, pts[i].hh, pts[i + 1].x, pts[i + 1].y, pts[i + 1].hw, pts[i + 1].hh, i % 2 ? -38 : 38),
            key: `${i}-${pts[i].id}-${pts[i + 1].id}`
        });
    }
    hops.push({
        d: hopPath(pts[4].x, pts[4].y, 85, 28, 384, 264, 16, 8, -30),
        key: `4-${pts[4].id}-null`
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__["Shuffle"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#f5c889"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 798,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "Shuffle — the songs never move"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 799,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 800,
                                columnNumber: 32
                            }, this),
                            " Lecture 7 · reshuffling = pointers"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 800,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 797,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#e9d7bf]",
                children: [
                    "Four song nodes at ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: "#f5c889"
                        },
                        children: "fixed memory locations"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 803,
                        columnNumber: 28
                    }, this),
                    ". Press shuffle and watch the ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "visiting path"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 804,
                        columnNumber: 19
                    }, this),
                    " re-route around them: Head → some new order → … → Null."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 802,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 rounded-2xl p-4",
                style: {
                    background: "rgba(255,236,210,.05)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 760 292",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": "Four fixed song nodes and a re-routing visiting path from the head through all four songs to Null — only the arrows and next pointers change when shuffled",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                id: "sf-ah",
                                markerWidth: "8",
                                markerHeight: "8",
                                refX: "6",
                                refY: "3",
                                orient: "auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0,0 L7,3 L0,6 Z",
                                    fill: "#f5c889"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 809,
                                    columnNumber: 97
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 809,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 808,
                            columnNumber: 11
                        }, this),
                        hops.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: h.d,
                                fill: "none",
                                stroke: "#f5c889",
                                strokeWidth: "2",
                                markerEnd: "url(#sf-ah)",
                                initial: {
                                    pathLength: 0,
                                    opacity: 0
                                },
                                animate: {
                                    pathLength: 1,
                                    opacity: 1
                                },
                                transition: {
                                    duration: 0.3,
                                    delay: 0.05 + i * 0.12,
                                    ease: "easeInOut"
                                }
                            }, h.key, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 812,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "6",
                            y: "122",
                            width: "64",
                            height: "40",
                            rx: "9",
                            fill: "#c2410c"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 816,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "38",
                            y: "147",
                            textAnchor: "middle",
                            fontSize: "12.5",
                            fontWeight: "800",
                            fill: "#fff7ec",
                            children: "Head"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 817,
                            columnNumber: 11
                        }, this),
                        SF_NODES.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: m.x,
                                        y: m.y,
                                        width: 170,
                                        height: 56,
                                        rx: 9,
                                        fill: "#fde8cf",
                                        stroke: "#c99a5b",
                                        strokeWidth: 1.6
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 820,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: m.x + 104,
                                        y: m.y,
                                        width: 66,
                                        height: 56,
                                        rx: 9,
                                        fill: "#b45309",
                                        stroke: "#c99a5b",
                                        strokeWidth: 1.6
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 821,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: m.x + 52,
                                        y: m.y + 33,
                                        textAnchor: "middle",
                                        fontSize: 14,
                                        fontWeight: 800,
                                        fill: "#3e2c1d",
                                        children: `Song ${m.n}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 822,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: m.x + 137,
                                        y: m.y + 22,
                                        textAnchor: "middle",
                                        fontSize: 9,
                                        fontWeight: 700,
                                        fill: "#ffe9cf",
                                        children: "next"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 823,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: m.x + 137,
                                        y: m.y + 41,
                                        textAnchor: "middle",
                                        fontSize: 11,
                                        fontWeight: 800,
                                        fill: nextOf(m.n) === "Null" ? "#ffd6d6" : "#fff7ec",
                                        children: nextOf(m.n)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 824,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: m.x + 85,
                                        y: m.y + 74,
                                        textAnchor: "middle",
                                        fontSize: 10,
                                        fontWeight: 700,
                                        fill: "#b99a75",
                                        children: [
                                            "addr ",
                                            m.addr,
                                            " · fixed"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 825,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, m.n, true, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 819,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "384",
                            y: "286",
                            textAnchor: "middle",
                            fontSize: "12",
                            fontWeight: "800",
                            fill: "#f0a8a8",
                            children: "Null"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 828,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 807,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 806,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: "warm",
                        onClick: shuffle,
                        children: "Shuffle"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 832,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        dark: true,
                        onClick: reset,
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 833,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono-warm text-[.82rem] font-bold",
                        style: {
                            color: "#f5c889"
                        },
                        "aria-live": "polite",
                        children: status
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 834,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 831,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "chip",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__["Shuffle"], {
                            className: "h-3.5 w-3.5",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 837,
                            columnNumber: 32
                        }, this),
                        " ordering #",
                        count,
                        " of 24 possible orders"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 837,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 836,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[.88rem] leading-relaxed text-[#cbb392]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: "#f5c889"
                        },
                        children: "The data elements stay in their memory locations"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 840,
                        columnNumber: 9
                    }, this),
                    " — every node keeps its address in every ordering. Only ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        style: {
                            color: "#f5c889"
                        },
                        children: "the pointer connections are rearranged"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 841,
                        columnNumber: 51
                    }, this),
                    " to create a different order — that is how random / shuffle playback works without physically moving data."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 839,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 796,
        columnNumber: 5
    }, this);
}
_s5(ShuffleLab, "nsx9KyZSmwUr2YswDSCQET1N34o=");
_c18 = ShuffleLab;
/* ============================================================
   EXPORTED — ARRAYS SECTION (light)
   ============================================================ */ const OPS = [
    {
        op: "Read / Access",
        what: "Retrieve the value stored at a position",
        biz: "Total the sales of all stores, one by one",
        fast: true
    },
    {
        op: "Search",
        what: "Find a specific item in the array",
        biz: "Search a customer ID in the database",
        fast: false
    },
    {
        op: "Insert",
        what: "Add a new value at a position",
        biz: "Add a new employee to the staff list",
        fast: false
    },
    {
        op: "Update",
        what: "Change the value at a position",
        biz: "Update stock quantity after every sale",
        fast: true
    },
    {
        op: "Delete",
        what: "Remove a value from a position",
        biz: "Remove a discontinued product",
        fast: true
    }
];
function AtbArraysSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "arrays",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Module 2 · Linear data structures — arrays",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "grad-text",
                            children: "Arrays"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 866,
                            columnNumber: 18
                        }, void 0),
                        " — numbered boxes in a row"
                    ]
                }, void 0, true),
                lead: "The first linear structure: one name, one block of memory, positions numbered from 0. Arrays are the structure every other structure is measured against — because of one superpower: direct access."
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 864,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Two addresses, one idea",
                sub: "Why structure beats scatter"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 870,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "h-5 w-5",
                                            style: {
                                                color: "#be4a4a"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 875,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[.75rem] font-extrabold uppercase tracking-[.16em] text-[#be4a4a]",
                                            children: "Address 1 · scattered"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 876,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 874,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 rounded-xl bg-[#fbe9e4] p-3.5 text-[.92rem] font-semibold italic leading-relaxed text-[#7c2f2f]",
                                    children: "“C/o Shri Jagat Murari, Near Quantum School, Opposite Café Youth, New City”"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 878,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[.9rem] leading-relaxed text-[#2b2014]",
                                    children: [
                                        "Everything is described by ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "landmarks"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 882,
                                            columnNumber: 42
                                        }, this),
                                        " — nothing predicts its neighbours. Most likely an ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "independent house"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 883,
                                            columnNumber: 42
                                        }, this),
                                        ": the next house could be anything, anywhere. ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Like loose variables"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 884,
                                            columnNumber: 38
                                        }, this),
                                        " — each one lives on its own."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 881,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 873,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 872,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 120,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                            className: "h-5 w-5",
                                            style: {
                                                color: "#7c9a3e"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 891,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[.75rem] font-extrabold uppercase tracking-[.16em]",
                                            style: {
                                                color: "#5c7a24"
                                            },
                                            children: "Address 2 · structured"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 892,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 890,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 rounded-xl p-3.5 text-[.92rem] font-semibold italic leading-relaxed",
                                    style: {
                                        background: "#eef4dd",
                                        color: "#44621d"
                                    },
                                    children: "“House No. 53, New Friends Colony”"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 894,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[.9rem] leading-relaxed text-[#2b2014]",
                                    children: [
                                        "A house ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "numbered 53"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 898,
                                            columnNumber: 23
                                        }, this),
                                        " sits inside a planned colony — houses",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "52 and 54 must be right beside it"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 899,
                                            columnNumber: 15
                                        }, this),
                                        ". Position predicts neighbours.",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "That is an array"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 900,
                                            columnNumber: 15
                                        }, this),
                                        ": a row of same-type values, numbered, side by side."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 897,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex items-center gap-1.5 text-[.8rem] font-bold text-[#6f5438]",
                                    children: [
                                        [
                                            51,
                                            52,
                                            53,
                                            54,
                                            55
                                        ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-md px-2 py-1",
                                                style: {
                                                    background: h === 53 ? "#f6ad3c" : "#fde8cf",
                                                    border: "1px solid #e2b075",
                                                    color: h === 53 ? "#7c2d0a" : "#7c4a12"
                                                },
                                                children: h
                                            }, h, false, {
                                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                lineNumber: 904,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-4 w-4",
                                            style: {
                                                color: "#c2410c"
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 906,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 902,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 889,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 888,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 871,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Same type, instant access",
                sub: "One name — Sub — five numbered cells"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 912,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrayStripLab, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 913,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 913,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                            title: "sub_array.c — fixed size, declared up front",
                            runnable: false,
                            code: `/* C / C++ — the size is fixed at declaration */
int Sub[5] = {60, 65, 70, 55, 60};

printf("%d", Sub[0]);   // 60  ← first element
printf("%d", Sub[3]);   // 55  ← direct access`
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 916,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 915,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                            title: "sub_array.py — same idea, friendlier syntax",
                            runnable: false,
                            code: `# Python — square brackets instead of braces
Sub = [60, 65, 70, 55, 60]

print(Sub[0])   # 60  ← indexing starts at 0
print(Sub[3])   # 55  ← one direct jump`
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 924,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 923,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 914,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "Two dimensions",
                sub: "Marks for MULTIPLE students, multiple subjects"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 933,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "One row of marks served ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "one student"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 937,
                                    columnNumber: 37
                                }, this),
                                ". Now imagine every student's marks for every subject: a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "2-D array"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 938,
                                    columnNumber: 40
                                }, this),
                                " — rows indexed by",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "i"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 939,
                                    columnNumber: 13
                                }, this),
                                " (student), columns indexed by ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "j"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 939,
                                    columnNumber: 62
                                }, this),
                                " (subject). One pair of numbers addresses any cell: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono-warm font-bold text-[#a0410a]",
                                    children: "Sub[i, j]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 940,
                                    columnNumber: 44
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 936,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 rounded-2xl p-4",
                            style: {
                                background: "#fffaf1",
                                border: "1px dashed #e5c79d"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TwoDGrid, {}, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 942,
                                columnNumber: 113
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 942,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 font-mono-warm text-[.84rem] font-bold text-[#a0410a]",
                            children: "Sub[2,1] → 65 (student 2, subject 1) · Sub[4,3] → 58 (student 4, subject 3) — still one direct jump each."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 943,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 935,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 934,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "4",
                title: "The five operations + business use cases",
                sub: "What you can DO to an array — and what it costs"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 949,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto p-4 md:p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "warm-table min-w-[720px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Operation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                lineNumber: 954,
                                                columnNumber: 26
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "What it does"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                lineNumber: 954,
                                                columnNumber: 44
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Business use case"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                lineNumber: 954,
                                                columnNumber: 65
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Speed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                lineNumber: 954,
                                                columnNumber: 91
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 954,
                                        columnNumber: 22
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 954,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: OPS.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "font-bold text-[#7c4a12]",
                                                    children: r.op
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 958,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: r.what
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 959,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: r.biz
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 960,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full px-2.5 py-1 text-[.72rem] font-extrabold",
                                                        style: r.fast ? {
                                                            background: "rgba(124,154,62,.16)",
                                                            color: "#4c6b1f"
                                                        } : {
                                                            background: "rgba(245,158,11,.18)",
                                                            color: "#92600a"
                                                        },
                                                        children: r.fast ? "✓ instantaneous" : "≈ depends on position"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                        lineNumber: 962,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 961,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, r.op, true, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 957,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 955,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 953,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 952,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 951,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 950,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "5",
                title: "How insert really works",
                sub: "Watch the cells move — the position decides the price"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 974,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InsertTrio, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 975,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 975,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "why",
                    title: "The pattern behind the trio",
                    children: [
                        "Inserting at the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "end"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 978,
                            columnNumber: 28
                        }, this),
                        " is free — nothing after it. The further",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "forward"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 979,
                            columnNumber: 11
                        }, this),
                        " you insert, the more elements must ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "shift right"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 979,
                            columnNumber: 71
                        }, this),
                        " ",
                        "to open the gap. That is why the table says insert “depends on position” — while Read and Update never move anything, wherever you aim."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 977,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 976,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "6",
                title: "Search & update by value",
                sub: "The five-step loop the lecture walks through"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 985,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepsFlow"], {
                    steps: [
                        {
                            label: "Start",
                            sub: "index = 0",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "h-4 w-4",
                                style: {
                                    color: "#c2410c"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 988,
                                columnNumber: 53
                            }, void 0)
                        },
                        {
                            label: "Compare",
                            sub: "is Arr[index] the search term?",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "h-4 w-4",
                                style: {
                                    color: "#c2410c"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 989,
                                columnNumber: 76
                            }, void 0)
                        },
                        {
                            label: "Yes → stop",
                            sub: "found — return index",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-4 w-4",
                                style: {
                                    color: "#5c7a24"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 990,
                                columnNumber: 69
                            }, void 0)
                        },
                        {
                            label: "No → move on",
                            sub: "index = index + 1",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "h-4 w-4",
                                style: {
                                    color: "#c2410c"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 991,
                                columnNumber: 68
                            }, void 0)
                        },
                        {
                            label: "Repeat",
                            sub: "until found or array ends",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"], {
                                className: "h-4 w-4",
                                style: {
                                    color: "#c2410c"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 992,
                                columnNumber: 70
                            }, void 0)
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 987,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 986,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                    title: "array_search.pseudo — the loop, written down",
                    runnable: false,
                    code: `SEARCH(Arr, N, term):
    index ← 0
    while index < N:
        if Arr[index] = term:  return index   // yes → stop
        index ← index + 1                     // no → move on
    return NOT FOUND                          // loop ended empty-handed

UPDATE(Arr, term, newValue):                  // business: stock after a sale
    pos ← SEARCH(Arr, N, term)
    if pos ≠ NOT FOUND:  Arr[pos] ← newValue  // update is instant once found`
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 996,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 995,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold",
                    children: [
                        "Benefits vs ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "grad-text",
                            children: "challenges"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1010,
                            columnNumber: 56
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 1010,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1009,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-5 md:grid-cols-2",
                children: [
                    {
                        head: "Benefits",
                        tone: "#5c7a24",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
                        items: [
                            "Easy to understand — a numbered row of boxes",
                            "Memory-saving — contiguous allocation, no gaps, no per-item overhead",
                            "Faster processing — direct access to any position",
                            "Ideal for predictable datasets — fixed count, same type (30 days of sales)",
                            "The foundation for other structures — stacks, queues, matrices build on arrays"
                        ]
                    },
                    {
                        head: "Challenges",
                        tone: "#be4a4a",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                        items: [
                            "Fixed length — waste if declared too large, overflow if too small",
                            "Some operations depend on the element's position (search, insert)",
                            "Needs contiguous memory — one free block big enough for the whole array",
                            "Inefficient for frequent modifications — inserts and deletes shift cells",
                            "Resizing costs time and resources — grow means allocate + copy everything"
                        ]
                    }
                ].map((col, ci)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: ci * 120,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.8rem] font-extrabold uppercase tracking-[.16em]",
                                    style: {
                                        color: col.tone
                                    },
                                    children: col.head
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1031,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-3 grid gap-2.5 text-[.9rem] text-[#2b2014]",
                                    children: col.items.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(col.icon, {
                                                    className: "mt-0.5 h-4 w-4 shrink-0",
                                                    style: {
                                                        color: col.tone
                                                    },
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 1035,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: t
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 1036,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, t, true, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1034,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1032,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1030,
                            columnNumber: 13
                        }, this)
                    }, col.head, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 1029,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1012,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Concept check",
                            q: "Sub = [60, 65, 70, 55, 60] — what does Sub[3] return?",
                            options: [
                                "70",
                                "55",
                                "60",
                                "65"
                            ],
                            answer: 1,
                            explain: "Indexing starts at 0, so Sub[3] is the FOURTH value: 60, 65, 70, 55 → 55. And because the position is known, the answer comes back in one direct jump."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1047,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 1046,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Concept check",
                            q: "Which operation is instantaneous in an array, no matter how big it is?",
                            options: [
                                "Search for a value",
                                "Read at a known index",
                                "Insert at the beginning",
                                "Find the position of a value"
                            ],
                            answer: 1,
                            explain: "Reading Sub[i] is one direct jump — the index IS the address. Search and find-position must scan; insert at the beginning shifts every element right."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1052,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 1051,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1045,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Practice"], {
                    title: "Pen-and-paper drills — arrays",
                    items: [
                        {
                            q: "Write the search algorithm in exactly five steps: start index = 0 → compare → yes, stop → no, increment → repeat.",
                            hint: "Each step must be unambiguous — a computer executes it without guessing."
                        },
                        {
                            q: "A store keeps its daily sales figure for 30 days. Why is an array the ideal structure for this?",
                            hint: "Fixed count, same data type, and any day is read directly by its number."
                        },
                        {
                            q: "Trace inserting 99 at the beginning of [10, 20, 30]. How many values move, and where does each go?",
                            hint: "Every existing element shifts one position to the right — then 99 lands at index 0."
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 1058,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1057,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 863,
        columnNumber: 5
    }, this);
}
_c19 = AtbArraysSection;
function AtbListSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "linkedlists",
        dark: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                dark: true,
                eyebrow: "Lecture 7 · Linked lists & linear structures",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "grad-text",
                            children: "Linked lists"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1078,
                            columnNumber: 18
                        }, void 0),
                        " — a playlist that never overflows"
                    ]
                }, void 0, true),
                lead: "The second major linear data structure after arrays. When the number of items is unknown and changes constantly, contiguity becomes a cage — links beat contiguity: every item carries the address of the next, so data can live anywhere and the chain can reshape itself in cheap pointer moves."
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1075,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "1",
                title: "Where arrays crack",
                sub: "Linear order, the row's three limitations — and when arrays still win"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1082,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1085,
                                    columnNumber: 34
                                }, this),
                                " Lecture 7 · linear data structures"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1085,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#e9d7bf]",
                            children: [
                                "A ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "#f5c889"
                                    },
                                    children: "linear data structure"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1087,
                                    columnNumber: 15
                                }, this),
                                " arranges its elements",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "#f5c889"
                                    },
                                    children: "sequentially, in a logical order"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1088,
                                    columnNumber: 13
                                }, this),
                                ": the elements are connected so that reaching one item lets you move on to its neighbours. Arrays are the first member of this family — they use ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "indexing"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1090,
                                    columnNumber: 22
                                }, this),
                                " for direct access, because the position IS the address. This lecture adds the second member, and it starts from the cracks in the first."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1086,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 grid gap-5 md:grid-cols-3",
                            children: [
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"],
                                    tone: "#f5c889",
                                    t: "Fixed size",
                                    chip: "Lecture 7 · limitation 1",
                                    d: "The size must be defined in advance. Adding elements beyond the initial size means redefining the entire array."
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                                    tone: "#f0a8a8",
                                    t: "Inefficient middle modifications",
                                    chip: "Lecture 7 · limitation 2",
                                    d: "Deleting or inserting in the middle forces the other elements to shift — or leaves null spaces behind."
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
                                    tone: "#cbb392",
                                    t: "Static structure",
                                    chip: "Lecture 7 · limitation 3",
                                    d: "Limited flexibility when data requirements change — the row cannot reshape itself."
                                }
                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-4",
                                    style: {
                                        background: "rgba(255,236,210,.04)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(c.icon, {
                                                    className: "h-5 w-5 shrink-0",
                                                    style: {
                                                        color: c.tone
                                                    },
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 1101,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[.88rem] font-extrabold leading-snug text-[#f5e6cd]",
                                                    children: c.t
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 1102,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1100,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.86rem] leading-relaxed text-[#cbb392]",
                                            children: c.d
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1104,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "chip mt-3",
                                            children: c.chip
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1105,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.t, true, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1099,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1093,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 grid gap-5 lg:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-5",
                                    style: {
                                        background: "rgba(255,236,210,.04)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.8rem] font-extrabold uppercase tracking-[.16em]",
                                            style: {
                                                color: "#f0a8a8"
                                            },
                                            children: "When arrays hurt"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "mt-3 grid gap-3 text-[.9rem] leading-relaxed text-[#e9d7bf]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "mt-0.5 h-4 w-4 shrink-0",
                                                            style: {
                                                                color: "#f0a8a8"
                                                            },
                                                            "aria-hidden": true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                            lineNumber: 1114,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "You need elements ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "connected"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                                    lineNumber: 1115,
                                                                    columnNumber: 43
                                                                }, this),
                                                                " — but you don't know in advance how many there will be. An array forces you to guess a size."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                            lineNumber: 1115,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 1113,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            className: "mt-0.5 h-4 w-4 shrink-0",
                                                            style: {
                                                                color: "#f0a8a8"
                                                            },
                                                            "aria-hidden": true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                            lineNumber: 1118,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "You ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "frequently add, delete or rearrange items"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                                    lineNumber: 1119,
                                                                    columnNumber: 29
                                                                }, this),
                                                                " — every array insert shifts cells and every resize copies the world."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                            lineNumber: 1119,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 1117,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1112,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-[.85rem] leading-relaxed text-[#cbb392]",
                                            children: "A music playlist does both, all day: songs get added at any position, removed, reordered — and nobody knows at breakfast how many songs you will have by midnight."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1122,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                                    kind: "insight",
                                    dark: true,
                                    title: "Lecture 7 · best use case — keep the array when…",
                                    children: [
                                        "You know the ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "exact number of elements in advance"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1128,
                                            columnNumber: 28
                                        }, this),
                                        " and ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "direct access is a priority"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1128,
                                            columnNumber: 85
                                        }, this),
                                        " — 30 days of sales, a fixed 8×6 programme. Linked lists take over when the count is",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "unknown in advance"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1130,
                                            columnNumber: 15
                                        }, this),
                                        ", items are ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "frequently added, deleted and rearranged"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1130,
                                            columnNumber: 62
                                        }, this),
                                        ", and ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "flexibility with dynamic sizing is essential"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1131,
                                            columnNumber: 19
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1127,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 1084,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1083,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "2",
                title: "The chain in memory",
                sub: "Head = the bus stop · node = data + pointer · last node → Null"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "h-3.5 w-3.5",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1141,
                                            columnNumber: 36
                                        }, this),
                                        " Lecture 7 · head = the bus stop"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[.92rem] leading-relaxed text-[#e9d7bf]",
                                    children: [
                                        "Every linked list starts at a ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: "#f5c889"
                                            },
                                            children: "head node"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1143,
                                            columnNumber: 45
                                        }, this),
                                        " — the",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "entry point"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1144,
                                            columnNumber: 15
                                        }, this),
                                        ". The lecture's analogy: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "the bus stop"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1144,
                                            columnNumber: 73
                                        }, this),
                                        ". Wherever the buses are parked across the city, every journey boards at the same stop — you always enter the list through the head."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[.92rem] leading-relaxed text-[#e9d7bf]",
                                    children: [
                                        "Each node carries ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: "#f5c889"
                                            },
                                            children: "data"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1149,
                                            columnNumber: 33
                                        }, this),
                                        " plus a",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: "#f5c889"
                                            },
                                            children: "connection — a pointer, an address"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1150,
                                            columnNumber: 15
                                        }, this),
                                        " — to the next node. The last node points to ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: "#f0a8a8"
                                            },
                                            children: "Null"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1151,
                                            columnNumber: 35
                                        }, this),
                                        ": no next stop, the journey ends."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[.9rem] leading-relaxed text-[#cbb392]",
                                    children: [
                                        "And the nodes themselves? ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: "#f5c889"
                                            },
                                            children: "Not contiguous."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1154,
                                            columnNumber: 41
                                        }, this),
                                        " They can be scattered anywhere in memory — the connections create the logical sequence, not physical proximity."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1140,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 1139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 120,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-3",
                                    style: {
                                        background: "rgba(255,236,210,.04)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlaylistChain, {}, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 1161,
                                        columnNumber: 94
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[.86rem] leading-relaxed text-[#cbb392]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: "#f5c889"
                                            },
                                            children: "Head"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1163,
                                            columnNumber: 15
                                        }, this),
                                        " holds the first node's address; each node =",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: "#f5c889"
                                            },
                                            children: "data + pointer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1164,
                                            columnNumber: 15
                                        }, this),
                                        "; the last node's pointer is",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: "#f0a8a8"
                                            },
                                            children: "Null"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1165,
                                            columnNumber: 15
                                        }, this),
                                        " — the chain simply ends."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1162,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1160,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 1159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MemoryMapLab, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 1170,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                    source: "Concept check",
                    q: "Compared with an array, linked-list nodes live…",
                    options: [
                        "in consecutive memory locations",
                        "anywhere in memory, connected by pointers",
                        "inside the head node",
                        "in a fixed 2-D grid"
                    ],
                    answer: 1,
                    explain: "Arrays occupy consecutive locations — position predicts the neighbour. Linked-list nodes can be scattered anywhere in memory; the pointer chain defines the logical order, not physical proximity."
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 1172,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "3",
                title: "Three flavours",
                sub: "Play next · play previous · repeat — then walk all three"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlavourMinis, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 1178,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TraversalLab, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 1179,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "4",
                title: "Surgery — insert & delete",
                sub: "Rewire two pointers to insert · redirect one to delete"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RewireLab, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 1182,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeleteLab, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 1183,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "5",
                title: "Shuffle — pointers, not songs",
                sub: "Random playback without moving a single song"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShuffleLab, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 1186,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "6",
                title: "Lists of lists — and how to choose",
                sub: "Nested chains — then the lecture's choosing checklist"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl p-4",
                            style: {
                                background: "rgba(255,236,210,.04)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListsOfLists, {}, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 1191,
                                columnNumber: 92
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                            kind: "insight",
                            dark: true,
                            title: "This is how real apps nest flexible data",
                            children: [
                                "User → playlists → songs is ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "a linked list whose elements are themselves linked lists"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1193,
                                    columnNumber: 41
                                }, this),
                                ". Because every level is a chain, users can own any number of playlists and each playlist can hold any number of songs — nothing was ever pre-declared."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1192,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 1190,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1201,
                                    columnNumber: 34
                                }, this),
                                " Lecture 7 · nested lists in the wild"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.92rem] leading-relaxed text-[#e9d7bf]",
                            children: [
                                "A ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "#f5c889"
                                    },
                                    children: "linked list of linked lists"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1203,
                                    columnNumber: 15
                                }, this),
                                " handles complex data with multiple levels of relationships — anywhere a thing owns a varying number of smaller things:"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1202,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-5 md:grid-cols-3",
                            children: [
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
                                    t: "University structure",
                                    d: "A programme → semesters → courses: each semester node owns its own chain of course nodes."
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListMusic$3e$__["ListMusic"],
                                    t: "Multi-playlist systems",
                                    d: "A user → playlists → songs — exactly the map above, any count at every level."
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"],
                                    t: "Hierarchical org data",
                                    d: "Departments → teams → people — hierarchy with a varying number of sub-elements at each level."
                                }
                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-4",
                                    style: {
                                        background: "rgba(255,236,210,.04)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(c.icon, {
                                            className: "h-5 w-5",
                                            style: {
                                                color: "#f5c889"
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1213,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.9rem] font-extrabold text-[#f5e6cd]",
                                            children: c.t
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1214,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1.5 text-[.85rem] leading-relaxed text-[#cbb392]",
                                            children: c.d
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1215,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.t, true, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1212,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1206,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 1200,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1223,
                                    columnNumber: 34
                                }, this),
                                " Lecture 7 · fixed vs variable"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1223,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-xl font-bold md:text-2xl",
                            children: "The academic programme, both ways"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1224,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-5 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-4",
                                    style: {
                                        background: "rgba(255,236,210,.04)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono-warm text-[.74rem] font-bold uppercase tracking-wider",
                                            style: {
                                                color: "#f5c889"
                                            },
                                            children: "Situation 1 · fixed"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.88rem] leading-relaxed text-[#e9d7bf]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "8 semesters × 6 courses each"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 1229,
                                                    columnNumber: 17
                                                }, this),
                                                ", same for the whole batch → a",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    style: {
                                                        color: "#f5c889"
                                                    },
                                                    children: "2-D array"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 1230,
                                                    columnNumber: 17
                                                }, this),
                                                " (Sem[i, j]). Efficient memory usage and fast direct access to any course."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1228,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-4",
                                    style: {
                                        background: "rgba(255,236,210,.04)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono-warm text-[.74rem] font-bold uppercase tracking-wider",
                                            style: {
                                                color: "#f5c889"
                                            },
                                            children: "Situation 2 · variable"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1235,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.88rem] leading-relaxed text-[#e9d7bf]",
                                            children: [
                                                "Semesters and courses per semester ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "vary student by student"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 1237,
                                                    columnNumber: 52
                                                }, this),
                                                " — retakes, deferrals → a",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    style: {
                                                        color: "#f5c889"
                                                    },
                                                    children: "linked list of linked lists"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 1238,
                                                    columnNumber: 17
                                                }, this),
                                                ": each semester is a node owning its own course chain, growing and shrinking freely."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1236,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1234,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1225,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 1222,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 pt-4 md:px-6 md:pt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chip",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                        className: "h-3.5 w-3.5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 1248,
                                        columnNumber: 36
                                    }, this),
                                    " Lecture 7 · choosing checklist"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 1248,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1247,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto p-4 md:p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "warm-table min-w-[640px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Scenario"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 1252,
                                                    columnNumber: 26
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Best structure"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 1252,
                                                    columnNumber: 43
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Why"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                    lineNumber: 1252,
                                                    columnNumber: 66
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                            lineNumber: 1252,
                                            columnNumber: 22
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 1252,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Fixed number of known elements, direct access needed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                        lineNumber: 1255,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Array — a 2-D array for multiple dimensions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                        lineNumber: 1256,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Efficient memory usage and fast direct access"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                        lineNumber: 1257,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                lineNumber: 1254,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Variable number of elements, frequent additions / deletions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                        lineNumber: 1260,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Linked list"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                        lineNumber: 1261,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Flexibility and ease of modification"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                        lineNumber: 1262,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                lineNumber: 1259,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Hierarchical structure, varying number of sub-elements"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                        lineNumber: 1265,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Nested linked lists"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                        lineNumber: 1266,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Accommodates complexity and variability at multiple levels"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                        lineNumber: 1267,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                                lineNumber: 1264,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 1253,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                lineNumber: 1251,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1250,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 1246,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Concept check",
                            q: "In a singly linked list, the last node's pointer holds…",
                            options: [
                                "the head's address",
                                "Null",
                                "its own address",
                                "the tail's address"
                            ],
                            answer: 1,
                            explain: "Null is the chain's full stop — it marks 'there is no next node'. Only a CIRCULAR list would point the last node back at the head."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1277,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 1276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Concept check",
                            q: "Frequent inserts anywhere + unknown final length — which structure fits best?",
                            options: [
                                "Array",
                                "Linked list",
                                "2-D array",
                                "Stack"
                            ],
                            answer: 1,
                            explain: "A linked list inserts by rewiring two pointers — no shifting — and grows node by node, so the length never has to be predicted."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1282,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 1281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Concept check",
                            q: "After deleting Song 2 by rewiring Song1.next → Song 3, Song 2 itself…",
                            options: [
                                "is erased from memory at once",
                                "is still in memory but no longer part of the list",
                                "moves to the end of the list",
                                "becomes the new head"
                            ],
                            answer: 1,
                            explain: "Deletion is only a redirect of the previous node's pointer — nothing is wiped, nothing shifts. Song 2 keeps sitting at its memory address until something overwrites it; it has simply left the active chain. An array deletion, by contrast, would shift every later element."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1287,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 1286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Concept check",
                            q: "When a playlist is shuffled, what actually moves?",
                            options: [
                                "The song files, into a new packed block",
                                "Nothing physical — only the pointer connections change order",
                                "The head node, to a random song",
                                "The nodes are physically re-sorted by name"
                            ],
                            answer: 1,
                            explain: "Reshuffling rewrites the pointer connections only: every node stays at its memory address, and the visiting path (Head → … → Null) defines the new playback order. That is how random playback works without physically moving data — and why reshuffling is cheap."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1292,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 1291,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Practice"], {
                    title: "Pen-and-paper drills — linked lists",
                    items: [
                        {
                            q: "Trace deleting the HEAD node of Head → A → B → Null. What exactly must change, and where does A end up?",
                            hint: "Head itself holds a pointer — repoint Head to B. Node A still sits in memory; it has simply left the list."
                        },
                        {
                            q: "Draw four nodes scattered at made-up addresses (0312, 0724, 1556, 2044) and wire TWO different shuffle orders through them. Count how many pointers you rewrote each time.",
                            hint: "Every node keeps its address; only the next-cells change — 4 pointer writes per shuffle (the last visited node writes Null)."
                        },
                        {
                            q: "Insert Song 2a between Song 2 and Song 3: write the two pointer moves in order, and say why the order matters.",
                            hint: "Song2.next → 2a first, then 2a.next → Song 3. Do it backwards and the rest of the chain is orphaned."
                        },
                        {
                            q: "The academic programme: the regular batch is a fixed 8 semesters × 6 courses, but retakes and deferrals make real students differ. Which structure fits each situation, and why?",
                            hint: "Fixed + known + direct access → 2-D array. Variable at two levels → linked list of linked lists."
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                    lineNumber: 1298,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex flex-wrap items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                    lineNumber: 1307,
                                    columnNumber: 34
                                }, this),
                                " Lecture 7 · key takeaways"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts3.tsx",
                            lineNumber: 1307,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 1306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        dark: true,
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Flexibility — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "dynamic sizing through pointer-based connections"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 1310,
                                        columnNumber: 27
                                    }, void 0),
                                    ": the list grows and shrinks node by node, with no size declared in advance."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Memory efficiency — elements ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "need not be contiguous"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 1311,
                                        columnNumber: 42
                                    }, void 0),
                                    "; scattered nodes can use memory anywhere, because the links carry the order."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Directional variants — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "single, doubly and circular"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 1312,
                                        columnNumber: 36
                                    }, void 0),
                                    " address different navigation requirements: play next, play previous, repeat."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Operation efficiency — insertion and deletion are ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "simpler than in arrays"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 1313,
                                        columnNumber: 63
                                    }, void 0),
                                    ": pointer rewiring instead of shifting elements."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Hierarchical applications — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "nested linked lists"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 1314,
                                        columnNumber: 41
                                    }, void 0),
                                    " handle complex multi-level structures: programmes → semesters → courses, users → playlists → songs."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Practical implementation — modern languages provide ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "built-in linked list implementations"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                                        lineNumber: 1315,
                                        columnNumber: 65
                                    }, void 0),
                                    "; understanding the conceptual mechanics is still essential."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts3.tsx",
                        lineNumber: 1309,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts3.tsx",
                lineNumber: 1305,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts3.tsx",
        lineNumber: 1074,
        columnNumber: 5
    }, this);
}
_c20 = AtbListSection;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20;
__turbopack_context__.k.register(_c, "OpBtn");
__turbopack_context__.k.register(_c1, "ArrayStrip");
__turbopack_context__.k.register(_c2, "ArrayStripLab");
__turbopack_context__.k.register(_c3, "TwoDGrid");
__turbopack_context__.k.register(_c4, "Cells");
__turbopack_context__.k.register(_c5, "TrioCard");
__turbopack_context__.k.register(_c6, "InsertTrio");
__turbopack_context__.k.register(_c7, "LlNode");
__turbopack_context__.k.register(_c8, "PlaylistChain");
__turbopack_context__.k.register(_c9, "FlavourMinis");
__turbopack_context__.k.register(_c10, "RewireLab");
__turbopack_context__.k.register(_c11, "ListsOfLists");
__turbopack_context__.k.register(_c12, "L7Node");
__turbopack_context__.k.register(_c13, "MmArrayView");
__turbopack_context__.k.register(_c14, "MmListView");
__turbopack_context__.k.register(_c15, "MemoryMapLab");
__turbopack_context__.k.register(_c16, "TraversalLab");
__turbopack_context__.k.register(_c17, "DeleteLab");
__turbopack_context__.k.register(_c18, "ShuffleLab");
__turbopack_context__.k.register(_c19, "AtbArraysSection");
__turbopack_context__.k.register(_c20, "AtbListSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_atb_AtbParts3_tsx_d281869f._.js.map