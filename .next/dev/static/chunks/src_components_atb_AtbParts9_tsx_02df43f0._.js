(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/atb/AtbParts9.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AtbDijkstraSection",
    ()=>AtbDijkstraSection,
    "AtbSortingSection",
    ()=>AtbSortingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   ATB — "Algorithmic Thinking in Business" · shelf 09
   Lecture 24 · Network search algorithms — Dijkstra (light)
   Lecture 25 · Sorting & bubble sort (light)
   Source of truth: upload/lectures-8-25.txt (L24/L25 banners)
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$antenna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Antenna$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/antenna.js [app-client] (ecmascript) <export default as Antenna>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-up.js [app-client] (ecmascript) <export default as ArrowDownUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/banknote.js [app-client] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flip$2d$horizontal$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlipHorizontal2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flip-horizontal-2.js [app-client] (ecmascript) <export default as FlipHorizontal2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTree$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-tree.js [app-client] (ecmascript) <export default as ListTree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [app-client] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/route.js [app-client] (ecmascript) <export default as Route>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$signal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Signal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/signal.js [app-client] (ecmascript) <export default as Signal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skip-forward.js [app-client] (ecmascript) <export default as SkipForward>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waypoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waypoints$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waypoints.js [app-client] (ecmascript) <export default as Waypoints>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ---------- shared local button (real <button>, aria-labelled) ---------- */ function OpBtn({ onClick, children, tone = "ghost", disabled = false }) {
    const style = tone === "warm" ? {
        background: "linear-gradient(135deg,#ea580c,#c2410c)",
        color: "#fff7ec"
    } : {
        background: "#fffdf9",
        color: "#7c4a12",
        border: "1px solid #e5c79d"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        style: style,
        disabled: disabled,
        className: `rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 ${disabled ? "cursor-not-allowed opacity-40" : "hover:-translate-y-0.5"}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/atb/AtbParts9.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = OpBtn;
function GraphNode({ x, y, label, kind, tag }) {
    const fill = kind === "current" ? "#ea580c" : kind === "settled" ? "#7c9a3e" : "#fde8cf";
    const stroke = kind === "current" ? "#c2410c" : kind === "settled" ? "#5c7a24" : "#e2b075";
    const textFill = kind === "plain" ? "#3e2c1d" : "#fff7ec";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            kind === "current" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                cx: x,
                cy: y,
                fill: "none",
                stroke: "#c2410c",
                strokeWidth: 2,
                initial: {
                    r: 30,
                    opacity: 0.8
                },
                animate: {
                    r: 47,
                    opacity: 0.08
                },
                transition: {
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeOut"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: x,
                cy: y,
                r: 28,
                fill: fill,
                stroke: stroke,
                strokeWidth: kind === "plain" ? 1.6 : 2.6
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: x,
                y: y + 6,
                textAnchor: "middle",
                fontSize: 16,
                fontWeight: 800,
                fill: textFill,
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            tag ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: x,
                y: y + 48,
                textAnchor: "middle",
                fontSize: 10,
                fontWeight: 800,
                fill: "#8a5a06",
                children: tag
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts9.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c1 = GraphNode;
function WeightPill({ x, y, label, hot = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: x - 15,
                y: y - 13,
                width: 30,
                height: 22,
                rx: 8,
                fill: hot ? "#fde4c3" : "#fffaf1",
                stroke: hot ? "#c2410c" : "#ecd3ac",
                strokeWidth: hot ? 2 : 1.2
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: x,
                y: y + 2.5,
                textAnchor: "middle",
                fontSize: 11.5,
                fontWeight: 800,
                fill: hot ? "#9a3412" : "#7c4a12",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts9.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c2 = WeightPill;
/* ============================================================
   LECTURE 24 · ReadStep 1 — machine: network vocabulary
   ============================================================ */ /* trim an edge to the rims of its two node circles */ function edgeGeom(ax, ay, bx, by, r = 30) {
    const dx = bx - ax;
    const dy = by - ay;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len;
    const uy = dy / len;
    return {
        x1: ax + ux * r,
        y1: ay + uy * r,
        x2: bx - ux * (r - 4),
        y2: by - uy * (r - 4)
    };
}
const NV_NODES = [
    {
        id: "P",
        x: 70,
        y: 62
    },
    {
        id: "Q",
        x: 250,
        y: 48
    },
    {
        id: "R",
        x: 440,
        y: 92
    },
    {
        id: "S",
        x: 180,
        y: 196
    },
    {
        id: "T",
        x: 560,
        y: 208
    }
];
function NetworkVocabLab() {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("node");
    const nodeState = (id)=>{
        if (mode === "node") return id === "R" ? "current" : "plain";
        if (mode === "path") return id === "P" || id === "Q" || id === "R" || id === "T" ? "settled" : "plain";
        return "plain";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#c2410c"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "Node · edge · path — the three words"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 119,
                                columnNumber: 32
                            }, this),
                            " Lecture 24 · network anatomy"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]",
                children: "One tiny network, three readings. Switch the lens and watch the same five dots mean something different each time."
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: mode === "node" ? "warm" : "ghost",
                        onClick: ()=>setMode("node"),
                        children: "Node"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: mode === "edge" ? "warm" : "ghost",
                        onClick: ()=>setMode("edge"),
                        children: "Edge"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: mode === "path" ? "warm" : "ghost",
                        onClick: ()=>setMode("path"),
                        children: "Path"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 660 260",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": mode === "node" ? "A five-node network; one node, R, is highlighted — a node is a single point such as a city, a server or a person" : mode === "edge" ? "The same network with the edge between Q and R highlighted, carrying weight 7 — an edge is a connection that can carry a cost" : "The same network with the path P to Q to R to T highlighted in sequence — a path is a chain of edges, and in networks the path itself is usually what we search for",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                id: "nv-ah",
                                markerWidth: "8",
                                markerHeight: "8",
                                refX: "6",
                                refY: "3",
                                orient: "auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0,0 L7,3 L0,6 Z",
                                    fill: "#c2410c"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 137,
                                    columnNumber: 97
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        mode === "path" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                    d: "M 92 58 L 226 49",
                                    fill: "none",
                                    stroke: "#c2410c",
                                    strokeWidth: 3.4,
                                    markerEnd: "url(#nv-ah)",
                                    initial: {
                                        pathLength: 0
                                    },
                                    animate: {
                                        pathLength: 1
                                    },
                                    transition: {
                                        duration: 0.4
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                    d: "M 274 52 L 414 87",
                                    fill: "none",
                                    stroke: "#c2410c",
                                    strokeWidth: 3.4,
                                    markerEnd: "url(#nv-ah)",
                                    initial: {
                                        pathLength: 0
                                    },
                                    animate: {
                                        pathLength: 1
                                    },
                                    transition: {
                                        delay: 0.35,
                                        duration: 0.4
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                    d: "M 462 104 L 536 192",
                                    fill: "none",
                                    stroke: "#c2410c",
                                    strokeWidth: 3.4,
                                    markerEnd: "url(#nv-ah)",
                                    initial: {
                                        pathLength: 0
                                    },
                                    animate: {
                                        pathLength: 1
                                    },
                                    transition: {
                                        delay: 0.7,
                                        duration: 0.4
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            stroke: mode === "edge" ? "#e2b075" : "#e8d3b2",
                            strokeWidth: mode === "edge" ? 2 : 1.6,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "94",
                                    y1: "60",
                                    x2: "224",
                                    y2: "49"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "276",
                                    y1: "51",
                                    x2: "412",
                                    y2: "87"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "464",
                                    y1: "106",
                                    x2: "534",
                                    y2: "190"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "92",
                                    y1: "82",
                                    x2: "158",
                                    y2: "178"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "204",
                                    y1: "190",
                                    x2: "416",
                                    y2: "101"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "204",
                                    y1: "200",
                                    x2: "532",
                                    y2: "210"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this),
                        mode === "edge" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "276",
                                    y1: "51",
                                    x2: "412",
                                    y2: "87",
                                    stroke: "#c2410c",
                                    strokeWidth: 4
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 160,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WeightPill, {
                                    x: 344,
                                    y: 58,
                                    label: "7",
                                    hot: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this) : null,
                        NV_NODES.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraphNode, {
                                x: n.x,
                                y: n.y,
                                label: n.id,
                                kind: nodeState(n.id)
                            }, n.id, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 min-h-[1.6rem] text-[.86rem] font-bold text-[#9a3412]",
                "aria-live": "polite",
                children: mode === "node" ? "→ A node (vertex) is a single point in the network — a city, a server, a person. Old search asked: which one is it?" : mode === "edge" ? "→ An edge is a connection between two nodes — and it can carry a weight: kilometres, minutes, rupees." : "→ A path is a chain of edges from one node to another. In networks the PATH is usually what we are searching for — not a single element."
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts9.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(NetworkVocabLab, "o5Wzl3rSwepkxwOE4OPSLvB+07o=");
_c3 = NetworkVocabLab;
const CS_LEGS = [
    {
        from: "Home",
        to: "B",
        x1: 96,
        y1: 150,
        x2: 268,
        y2: 74,
        km: 5,
        toll: 20,
        min: 15
    },
    {
        from: "B",
        to: "Work",
        x1: 292,
        y1: 68,
        x2: 552,
        y2: 140,
        km: 3,
        toll: 10,
        min: 10
    },
    {
        from: "Home",
        to: "C",
        x1: 96,
        y1: 168,
        x2: 268,
        y2: 236,
        km: 7,
        toll: 0,
        min: 20
    },
    {
        from: "C",
        to: "Work",
        x1: 292,
        y1: 244,
        x2: 552,
        y2: 172,
        km: 5,
        toll: 0,
        min: 15
    },
    {
        from: "Home",
        to: "Work",
        x1: 108,
        y1: 156,
        x2: 540,
        y2: 154,
        km: 15,
        toll: 50,
        min: 18,
        direct: true
    }
];
function CostSwitchLab() {
    _s1();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("km");
    const win = mode === "km" ? "Home-B-Work" : mode === "time" ? "Home-Work" : "Home-C-Work";
    const legOn = (l)=>win === "Home-B-Work" ? l.to === "B" || l.from === "B" : win === "Home-C-Work" ? l.to === "C" || l.from === "C" : l.direct === true;
    const routes = {
        km: {
            name: "Home → B → Work — the old highway",
            why: "8 km wins. Note what loses: the expressway is the FASTEST at 18 minutes yet the LONGEST at 15 km — distance and time disagree, so “shortest” depends entirely on what you optimise."
        },
        time: {
            name: "Home → Work — the expressway",
            why: "18 minutes wins — and it is the LONGEST road on the map (15 km). This is the lecture's whole point: shortest ≠ shortest distance. The cost is whatever you choose to optimise."
        },
        toll: {
            name: "Home → C → Work — the city roads",
            why: "₹0 wins — no toll booths at all. Cheapest cash, slowest clock (35 min). Same network, three different “shortest” answers."
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#c2410c"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "One map, three “shortest” routes"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 211,
                                columnNumber: 32
                            }, this),
                            " Lecture 24 · shortest ≠ distance"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]",
                children: [
                    "The cost on an edge can be ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "kilometres, minutes, toll rupees"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 214,
                        columnNumber: 36
                    }, this),
                    " — or a combination. Change what you optimise and the “shortest path” changes with it."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: mode === "km" ? "warm" : "ghost",
                        onClick: ()=>setMode("km"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 218,
                                    columnNumber: 137
                                }, this),
                                " Shortest distance"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 218,
                            columnNumber: 86
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: mode === "time" ? "warm" : "ghost",
                        onClick: ()=>setMode("time"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 219,
                                    columnNumber: 141
                                }, this),
                                " Fastest time"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 219,
                            columnNumber: 90
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: mode === "toll" ? "warm" : "ghost",
                        onClick: ()=>setMode("toll"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 220,
                                    columnNumber: 141
                                }, this),
                                " Avoid the toll"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 220,
                            columnNumber: 90
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 660 300",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": mode === "km" ? "Route cost map optimised for distance: Home to B to Work, 8 kilometres in total, is the shortest route" : mode === "time" ? "Route cost map optimised for time: the direct expressway from Home to Work, 18 minutes, is fastest despite being the longest road" : "Route cost map optimised for toll: Home to C to Work, zero rupees in tolls, avoids every toll booth",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: "cs-dim",
                                    markerWidth: "8",
                                    markerHeight: "8",
                                    refX: "6",
                                    refY: "3",
                                    orient: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L7,3 L0,6 Z",
                                        fill: "#d9c4a0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 230,
                                        columnNumber: 98
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: "cs-hot",
                                    markerWidth: "8",
                                    markerHeight: "8",
                                    refX: "6",
                                    refY: "3",
                                    orient: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L7,3 L0,6 Z",
                                        fill: "#c2410c"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 231,
                                        columnNumber: 98
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        CS_LEGS.map((l)=>{
                            const on = legOn(l);
                            const g = edgeGeom(l.x1, l.y1, l.x2, l.y2, 26);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                                        x1: g.x1,
                                        y1: g.y1,
                                        x2: g.x2,
                                        y2: g.y2,
                                        stroke: "#dcc9a8",
                                        strokeWidth: 2,
                                        opacity: 0.75,
                                        animate: {
                                            stroke: on ? "#c2410c" : "#dcc9a8",
                                            strokeWidth: on ? 3.6 : 2,
                                            opacity: on ? 1 : 0.75
                                        },
                                        markerEnd: on ? "url(#cs-hot)" : "url(#cs-dim)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: (l.x1 + l.x2) / 2 + (l.direct ? 0 : 14),
                                        y: (l.y1 + l.y2) / 2 - 10,
                                        textAnchor: "middle",
                                        fontSize: 10,
                                        fontWeight: 700,
                                        fill: on ? "#9a3412" : "#a08050",
                                        children: [
                                            l.km,
                                            " km · ",
                                            l.min,
                                            " min",
                                            l.toll > 0 ? ` · ₹${l.toll}` : " · no toll"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `${l.from}-${l.to}`, true, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraphNode, {
                            x: 88,
                            y: 156,
                            label: "🏠",
                            kind: "settled",
                            tag: "Home"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraphNode, {
                            x: 280,
                            y: 68,
                            label: "B",
                            kind: win === "Home-B-Work" ? "current" : "plain"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraphNode, {
                            x: 280,
                            y: 246,
                            label: "C",
                            kind: win === "Home-C-Work" ? "current" : "plain"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraphNode, {
                            x: 572,
                            y: 154,
                            label: "W",
                            kind: "settled",
                            tag: "Work"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 min-h-[2.6rem] text-[.86rem] font-bold text-[#9a3412]",
                "aria-live": "polite",
                children: [
                    "→ Winner: ",
                    routes[mode].name,
                    ". ",
                    routes[mode].why
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 grid gap-3 md:grid-cols-3",
                children: [
                    {
                        t: "Distance (km)",
                        d: "The old highway wins at 8 km.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"]
                    },
                    {
                        t: "Time (minutes)",
                        d: "The expressway wins at 18 min — despite being longest.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"]
                    },
                    {
                        t: "Money (toll ₹)",
                        d: "The city roads win at ₹0 — free, but slowest.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"]
                    }
                ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl p-4",
                        style: {
                            background: "#fbf3e6",
                            border: "1px solid #efdec2"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chip",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(c.icon, {
                                        className: "h-3.5 w-3.5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 265,
                                        columnNumber: 36
                                    }, this),
                                    " Lecture 24 · cost variable"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 265,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[.85rem] font-bold text-[#3e2c1d]",
                                children: c.t
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[.82rem] leading-relaxed text-[#5c4a33]",
                                children: c.d
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this)
                        ]
                    }, c.t, true, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts9.tsx",
        lineNumber: 207,
        columnNumber: 5
    }, this);
}
_s1(CostSwitchLab, "ON5F2tX/zRTDdZWRoimGBDC1z/o=");
_c4 = CostSwitchLab;
const DIJ_NODES = [
    {
        id: "A",
        x: 92,
        y: 84
    },
    {
        id: "B",
        x: 622,
        y: 84
    },
    {
        id: "C",
        x: 312,
        y: 234
    },
    {
        id: "D",
        x: 622,
        y: 250
    }
];
const DIJ_EDGES = [
    {
        k: "AB",
        from: "A",
        to: "B",
        w: 4,
        lx: 357,
        ly: 62
    },
    {
        k: "AC",
        from: "A",
        to: "C",
        w: 2,
        lx: 178,
        ly: 176
    },
    {
        k: "CB",
        from: "C",
        to: "B",
        w: 1,
        lx: 486,
        ly: 146
    },
    {
        k: "CD",
        from: "C",
        to: "D",
        w: 5,
        lx: 442,
        ly: 266
    },
    {
        k: "BD",
        from: "B",
        to: "D",
        w: 3,
        lx: 668,
        ly: 172
    }
];
const INF = "∞";
const DIJ_STEPS = [
    {
        dist: {
            A: 0,
            B: null,
            C: null,
            D: null
        },
        via: {
            A: "source",
            B: "—",
            C: "—",
            D: "—"
        },
        visited: [],
        current: null,
        improved: [],
        rejected: [],
        rejectedNote: {},
        tree: [],
        title: "Step 1 · initialise",
        status: "Initialise: the source A starts at 0; every other node starts at ∞ — unknown. Nothing is visited yet."
    },
    {
        dist: {
            A: 0,
            B: 4,
            C: 2,
            D: null
        },
        via: {
            A: "source",
            B: "A→B",
            C: "A→C",
            D: "—"
        },
        visited: [
            "A"
        ],
        current: "A",
        improved: [
            "AB",
            "AC"
        ],
        rejected: [],
        rejectedNote: {},
        tree: [],
        title: "Settle A (0)",
        status: "Pick the smallest unvisited node — A (0). Relax its neighbours: B gets 0+4 = 4, C gets 0+2 = 2. Mark A visited — its distance is final."
    },
    {
        dist: {
            A: 0,
            B: 3,
            C: 2,
            D: 7
        },
        via: {
            A: "source",
            B: "A→C→B",
            C: "A→C",
            D: "A→C→D"
        },
        visited: [
            "A",
            "C"
        ],
        current: "C",
        improved: [
            "CB",
            "CD"
        ],
        rejected: [
            "AB"
        ],
        rejectedNote: {
            AB: "direct 4 → beaten by 3"
        },
        tree: [],
        title: "Settle C (2) — the detour wins",
        status: "Smallest unvisited is C (2). Relax: A→C→B = 2+1 = 3 beats B's direct 4 → update! D gets 2+5 = 7. Mark C visited — 2 is final."
    },
    {
        dist: {
            A: 0,
            B: 3,
            C: 2,
            D: 6
        },
        via: {
            A: "source",
            B: "A→C→B",
            C: "A→C",
            D: "A→C→B→D"
        },
        visited: [
            "A",
            "C",
            "B"
        ],
        current: "B",
        improved: [
            "BD"
        ],
        rejected: [
            "CD"
        ],
        rejectedNote: {
            CD: "A→C→D = 7 → beaten by 6"
        },
        tree: [],
        title: "Settle B (3) — D gets cheaper",
        status: "Smallest unvisited is B (3). Relax: A→C→B→D = 3+3 = 6 beats D's 7 → update! Mark B visited — 3 is final."
    },
    {
        dist: {
            A: 0,
            B: 3,
            C: 2,
            D: 6
        },
        via: {
            A: "source",
            B: "A→C→B",
            C: "A→C",
            D: "A→C→B→D"
        },
        visited: [
            "A",
            "C",
            "B",
            "D"
        ],
        current: "D",
        improved: [],
        rejected: [],
        rejectedNote: {},
        tree: [],
        title: "Settle D (6) — all final",
        status: "Smallest unvisited is D (6). D has no unvisited neighbours to relax. Mark D visited — every distance is now final."
    },
    {
        dist: {
            A: 0,
            B: 3,
            C: 2,
            D: 6
        },
        via: {
            A: "source",
            B: "A→C→B",
            C: "A→C",
            D: "A→C→B→D"
        },
        visited: [
            "A",
            "C",
            "B",
            "D"
        ],
        current: null,
        improved: [],
        rejected: [],
        rejectedNote: {
            AB: "never used — 4 loses to 3"
        },
        tree: [
            "AC",
            "CB",
            "BD"
        ],
        title: "Result — the shortest-path tree",
        status: "Done — shortest distances from source A: A = 0, C = 2, B = 3, D = 6. The direct A→B edge (4) was never used, and D's cheapest route is the three-hop A→C→B→D, not A→C→D = 7."
    }
];
function DijkstraLab() {
    _s2();
    const [i, setI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const s = DIJ_STEPS[i];
    const done = i === DIJ_STEPS.length - 1;
    const nodeKind = (id)=>s.current === id ? "current" : s.visited.includes(id) ? "settled" : "plain";
    const edgeState = (k)=>s.tree.includes(k) ? "tree" : s.improved.includes(k) ? "hot" : s.rejected.includes(k) ? "dim" : "idle";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waypoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waypoints$3e$__["Waypoints"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#c2410c"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "Run Dijkstra on the lecture's graph"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 373,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waypoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waypoints$3e$__["Waypoints"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 374,
                                columnNumber: 32
                            }, this),
                            " Lecture 24 · worked example"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]",
                children: [
                    "Node ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "A"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 377,
                        columnNumber: 14
                    }, this),
                    " is the source. Edges: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "A→B 4 · A→C 2 · C→B 1 · C→D 5 · B→D 3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 377,
                        columnNumber: 55
                    }, this),
                    ". Press ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 378,
                        columnNumber: 15
                    }, this),
                    " to walk the five algorithm steps — watch two direct routes get beaten by detours."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: "warm",
                        onClick: ()=>setI((v)=>Math.min(v + 1, DIJ_STEPS.length - 1)),
                        disabled: done,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 382,
                                    columnNumber: 62
                                }, this),
                                " Next step"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        onClick: ()=>setI(0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 385,
                                    columnNumber: 62
                                }, this),
                                " Reset"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 385,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            "step ",
                            i,
                            " of ",
                            DIJ_STEPS.length - 1,
                            " · ",
                            s.title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 760 312",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": `Dijkstra's algorithm on the lecture graph, ${s.title}: ${s.status}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: "dj-idle",
                                    markerWidth: "8",
                                    markerHeight: "8",
                                    refX: "6",
                                    refY: "3",
                                    orient: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L7,3 L0,6 Z",
                                        fill: "#d9c4a0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 393,
                                        columnNumber: 99
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 393,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: "dj-hot",
                                    markerWidth: "8",
                                    markerHeight: "8",
                                    refX: "6",
                                    refY: "3",
                                    orient: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L7,3 L0,6 Z",
                                        fill: "#c2410c"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 394,
                                        columnNumber: 98
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 394,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 392,
                            columnNumber: 11
                        }, this),
                        DIJ_EDGES.map((e)=>{
                            const a = DIJ_NODES.find((n)=>n.id === e.from);
                            const b = DIJ_NODES.find((n)=>n.id === e.to);
                            const st = edgeState(e.k);
                            const hot = st === "hot" || st === "tree";
                            const g = edgeGeom(a.x, a.y, b.x, b.y, 30);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                                        x1: g.x1,
                                        y1: g.y1,
                                        x2: g.x2,
                                        y2: g.y2,
                                        stroke: "#dcc9a8",
                                        strokeWidth: 2,
                                        opacity: 0.85,
                                        strokeDasharray: "0",
                                        animate: {
                                            stroke: st === "dim" ? "#c9b291" : hot ? "#c2410c" : "#dcc9a8",
                                            strokeWidth: st === "dim" ? 1.6 : hot ? 3.4 : 2,
                                            strokeDasharray: st === "dim" ? "7 5" : "0",
                                            opacity: st === "idle" ? 0.85 : 1
                                        },
                                        markerEnd: hot ? "url(#dj-hot)" : "url(#dj-idle)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 404,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WeightPill, {
                                        x: e.lx,
                                        y: e.ly,
                                        label: String(e.w),
                                        hot: hot
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 413,
                                        columnNumber: 17
                                    }, this),
                                    s.rejectedNote[e.k] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                                        x: e.lx,
                                        y: e.ly - 22,
                                        textAnchor: "middle",
                                        fontSize: 9.5,
                                        fontWeight: 800,
                                        fill: "#b3492f",
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        children: s.rejectedNote[e.k]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 415,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, e.k, true, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 403,
                                columnNumber: 15
                            }, this);
                        }),
                        DIJ_NODES.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraphNode, {
                                        x: n.x,
                                        y: n.y,
                                        label: n.id,
                                        kind: nodeKind(n.id),
                                        tag: n.id === "A" ? "start" : undefined
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 423,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                                        x: n.x,
                                        y: n.y - 40,
                                        textAnchor: "middle",
                                        fontSize: 13,
                                        fontWeight: 800,
                                        fill: nodeKind(n.id) === "settled" ? "#5c7a24" : nodeKind(n.id) === "current" ? "#c2410c" : "#8a5a06",
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        children: s.dist[n.id] === null ? INF : s.dist[n.id]
                                    }, `d-${n.id}-${i}`, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 424,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, n.id, true, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 422,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 384,
                            y: 300,
                            textAnchor: "middle",
                            fontSize: 10.5,
                            fontWeight: 700,
                            fill: "#a08050",
                            children: "settled = its distance can never improve again · ∞ = not reached yet"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 431,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 390,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4",
                children: DIJ_NODES.map((n)=>{
                    const st = nodeKind(n.id);
                    const d = s.dist[n.id];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl p-3",
                        style: {
                            background: st === "settled" ? "#eef4dd" : st === "current" ? "#fde4c3" : "#fbf3e6",
                            border: `1px solid ${st === "settled" ? "#c4d6a0" : st === "current" ? "#eec088" : "#efdec2"}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[.72rem] font-extrabold uppercase tracking-[.14em] text-[#8a5a06]",
                                        children: [
                                            "node ",
                                            n.id
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 447,
                                        columnNumber: 17
                                    }, this),
                                    st === "settled" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "h-3.5 w-3.5",
                                        style: {
                                            color: "#5c7a24"
                                        },
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 448,
                                        columnNumber: 37
                                    }, this) : st === "current" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-2 w-2 rounded-full bg-[#c2410c]",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 449,
                                        columnNumber: 38
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 446,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 font-mono-warm text-2xl font-extrabold",
                                style: {
                                    color: st === "settled" ? "#44621d" : "#3e2c1d"
                                },
                                children: d === null ? INF : d
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 451,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-0.5 text-[.72rem] font-semibold text-[#8c7a5c]",
                                children: s.via[n.id]
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 454,
                                columnNumber: 15
                            }, this)
                        ]
                    }, n.id, true, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 441,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 min-h-[2.6rem] text-[.88rem] font-bold leading-relaxed text-[#9a3412]",
                "aria-live": "polite",
                children: s.status
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl p-4",
                style: {
                    background: "#fbf3e6",
                    border: "1px solid #efdec2"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waypoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waypoints$3e$__["Waypoints"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 463,
                                columnNumber: 32
                            }, this),
                            " Lecture 24 · the two discoveries"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 463,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 grid gap-3 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl bg-[#fffaf1] p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.86rem] font-extrabold text-[#3e2c1d]",
                                        children: "Discovery 1 — B is reachable cheaper"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 466,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[.85rem] leading-relaxed text-[#5c4a33]",
                                        children: [
                                            "Direct ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "A→B = 4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                lineNumber: 468,
                                                columnNumber: 22
                                            }, this),
                                            ". But ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "A→C→B = 2+1 = 3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                lineNumber: 468,
                                                columnNumber: 52
                                            }, this),
                                            " — shorter! Dijkstra only trusts a node once no cheaper route can exist."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 467,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 465,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl bg-[#fffaf1] p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.86rem] font-extrabold text-[#3e2c1d]",
                                        children: "Discovery 2 — D takes the long way round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 473,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[.85rem] leading-relaxed text-[#5c4a33]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "A→C→D = 2+5 = 7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                lineNumber: 475,
                                                columnNumber: 15
                                            }, this),
                                            ". But ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "A→C→B→D = 3+3 = 6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                lineNumber: 475,
                                                columnNumber: 53
                                            }, this),
                                            " — shorter! The cheapest road to D runs through B, not straight from C."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 474,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 472,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 462,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts9.tsx",
        lineNumber: 370,
        columnNumber: 5
    }, this);
}
_s2(DijkstraLab, "dZ1hZj/RWe+7Q/SoaXuKacRY+8w=");
_c5 = DijkstraLab;
/* ============================================================
   LECTURE 24 · ReadStep 5 — machine: hub & spoke
   ============================================================ */ const HS_HUBS = [
    {
        id: "Jaipur",
        x: 300,
        y: 176
    },
    {
        id: "Delhi",
        x: 540,
        y: 176
    }
];
const HS_SPOKES = [
    {
        id: "Jodhpur",
        x: 84,
        y: 84,
        hub: "Jaipur",
        ship: true
    },
    {
        id: "Pali",
        x: 150,
        y: 252,
        hub: "Jaipur",
        ship: false
    },
    {
        id: "Ajmer",
        x: 330,
        y: 272,
        hub: "Jaipur",
        ship: false
    },
    {
        id: "Agra",
        x: 512,
        y: 62,
        hub: "Delhi",
        ship: false
    },
    {
        id: "Kurukshetra",
        x: 668,
        y: 236,
        hub: "Delhi",
        ship: false
    },
    {
        id: "Somnath",
        x: 688,
        y: 84,
        hub: "Delhi",
        ship: true
    }
];
function HubSpokeLab() {
    _s3();
    const [shipping, setShipping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shipped, setShipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ship = ()=>{
        setShipping(true);
        window.setTimeout(()=>{
            setShipped(true);
            setShipping(false);
        }, 2600);
    };
    const reset = ()=>{
        setShipped(false);
        setShipping(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#c2410c"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 513,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "Hubs & spokes — the courier model"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 514,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 515,
                                columnNumber: 32
                            }, this),
                            " Lecture 24 · spoke-and-hub"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 515,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 512,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]",
                children: [
                    "Courier firms do ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "not"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 518,
                        columnNumber: 26
                    }, this),
                    " connect every city to every city — that network explodes in complexity. They build ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "hubs"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 519,
                        columnNumber: 20
                    }, this),
                    " (Jaipur, Delhi) with ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "spoke cities"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 519,
                        columnNumber: 63
                    }, this),
                    " hanging off them, and Dijkstra pre-computes the shortest hub-to-hub distances once."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 760 312",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": "Spoke-and-hub courier network: Jodhpur, Pali and Ajmer feed the Jaipur hub; Agra, Kurukshetra and Somnath feed the Delhi hub. The shipped package travels Jodhpur to Jaipur to Delhi to Somnath through the hubs.",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: "hs-spoke",
                                    markerWidth: "8",
                                    markerHeight: "8",
                                    refX: "6",
                                    refY: "3",
                                    orient: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L7,3 L0,6 Z",
                                        fill: "#c9a76a"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 526,
                                        columnNumber: 100
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 526,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: "hs-route",
                                    markerWidth: "8",
                                    markerHeight: "8",
                                    refX: "6",
                                    refY: "3",
                                    orient: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L7,3 L0,6 Z",
                                        fill: "#c2410c"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 527,
                                        columnNumber: 100
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 527,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 525,
                            columnNumber: 11
                        }, this),
                        HS_SPOKES.map((sp)=>{
                            const h = HS_HUBS.find((x)=>x.id === sp.hub);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: sp.x,
                                y1: sp.y,
                                x2: h.x,
                                y2: h.y,
                                stroke: "#dcc9a8",
                                strokeWidth: 1.8,
                                markerEnd: "url(#hs-spoke)"
                            }, sp.id, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 532,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: 330,
                            y1: 176,
                            x2: 508,
                            y2: 176,
                            stroke: "#c2410c",
                            strokeWidth: 3.4,
                            markerEnd: "url(#hs-route)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 535,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 419,
                            y: 162,
                            textAnchor: "middle",
                            fontSize: 11,
                            fontWeight: 800,
                            fill: "#9a3412",
                            children: "hub ⇄ hub · Dijkstra territory"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 536,
                            columnNumber: 11
                        }, this),
                        shipping || shipped ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                    d: "M 84 84 L 300 176",
                                    fill: "none",
                                    stroke: "#c2410c",
                                    strokeWidth: 3.4,
                                    markerEnd: "url(#hs-route)",
                                    initial: {
                                        pathLength: 0
                                    },
                                    animate: shipping || shipped ? {
                                        pathLength: 1
                                    } : {},
                                    transition: {
                                        duration: 0.7
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 539,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                    d: "M 300 176 L 540 176",
                                    fill: "none",
                                    stroke: "#c2410c",
                                    strokeWidth: 3.4,
                                    initial: {
                                        pathLength: 0
                                    },
                                    animate: shipping || shipped ? {
                                        pathLength: 1
                                    } : {},
                                    transition: {
                                        delay: 0.7,
                                        duration: 0.7
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 541,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                    d: "M 540 176 L 688 84",
                                    fill: "none",
                                    stroke: "#c2410c",
                                    strokeWidth: 3.4,
                                    markerEnd: "url(#hs-route)",
                                    initial: {
                                        pathLength: 0
                                    },
                                    animate: shipping || shipped ? {
                                        pathLength: 1
                                    } : {},
                                    transition: {
                                        delay: 1.4,
                                        duration: 0.7
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 543,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                    r: 11,
                                    fill: "#c2410c",
                                    stroke: "#fff7ec",
                                    strokeWidth: 3,
                                    initial: {
                                        cx: 84,
                                        cy: 84,
                                        opacity: 0
                                    },
                                    animate: shipping || shipped ? {
                                        cx: [
                                            84,
                                            300,
                                            540,
                                            688
                                        ],
                                        cy: [
                                            84,
                                            176,
                                            176,
                                            84
                                        ],
                                        opacity: [
                                            0,
                                            1,
                                            1,
                                            1
                                        ]
                                    } : {
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 2.1,
                                        times: [
                                            0,
                                            0.33,
                                            0.66,
                                            1
                                        ],
                                        ease: "easeInOut"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 545,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 538,
                            columnNumber: 13
                        }, this) : null,
                        HS_SPOKES.map((sp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: sp.x,
                                        cy: sp.y,
                                        r: 22,
                                        fill: "#fde8cf",
                                        stroke: sp.ship ? "#c2410c" : "#e2b075",
                                        strokeWidth: sp.ship ? 2.4 : 1.6
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 555,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: sp.x,
                                        y: sp.y - 30,
                                        textAnchor: "middle",
                                        fontSize: 10.5,
                                        fontWeight: 800,
                                        fill: "#8a5a06",
                                        children: sp.id
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 556,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, sp.id, true, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 554,
                                columnNumber: 13
                            }, this)),
                        HS_HUBS.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                        cx: h.x,
                                        cy: h.y,
                                        r: 38,
                                        fill: "none",
                                        stroke: "#d97706",
                                        strokeWidth: 1.6,
                                        strokeDasharray: "5 4",
                                        initial: {
                                            opacity: 0.5
                                        },
                                        animate: {
                                            opacity: [
                                                0.35,
                                                0.9,
                                                0.35
                                            ]
                                        },
                                        transition: {
                                            duration: 2.4,
                                            repeat: Infinity
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 561,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: h.x,
                                        cy: h.y,
                                        r: 30,
                                        fill: "#b45309",
                                        stroke: "#92400e",
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 563,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: h.x,
                                        y: h.y - 46,
                                        textAnchor: "middle",
                                        fontSize: 11.5,
                                        fontWeight: 800,
                                        fill: "#7c2d0a",
                                        children: [
                                            h.id,
                                            " · HUB"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 564,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, h.id, true, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 560,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 380,
                            y: 302,
                            textAnchor: "middle",
                            fontSize: 10.5,
                            fontWeight: 700,
                            fill: "#a08050",
                            children: "8 cities · all-to-all = 28 direct routes · hub & spoke = 10 routes (and Dijkstra only works the 1 hub-to-hub edge)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 567,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 523,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 522,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: "warm",
                        onClick: ship,
                        disabled: shipping,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 574,
                                    columnNumber: 62
                                }, this),
                                " Ship Jodhpur → Somnath"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 574,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 573,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        onClick: reset,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 576,
                                    columnNumber: 83
                                }, this),
                                " Reset"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 576,
                            columnNumber: 32
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 576,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 572,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 min-h-[2.2rem] text-[.86rem] font-bold text-[#9a3412]",
                "aria-live": "polite",
                children: shipping ? "→ Shipping: Jodhpur → Jaipur → Delhi → Somnath. Two spokes, two hubs, three hops." : shipped ? "→ Delivered via hubs. Dijkstra computed the Jaipur ⇄ Delhi hub distance once — every spoke city reuses it. Network complexity and cost both drop." : "→ Ready. A package from Jodhpur to Somnath never takes a Jodhpur→Somnath road — it hops Jodhpur → Jaipur → Delhi → Somnath through the hubs."
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 578,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts9.tsx",
        lineNumber: 511,
        columnNumber: 5
    }, this);
}
_s3(HubSpokeLab, "hr+QejhxsJzKnj1VfBb+mLHo0q0=");
_c6 = HubSpokeLab;
function AtbDijkstraSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "dijkstra",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Lecture 24 · Network search algorithms",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "grad-text",
                            children: "Network search"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 598,
                            columnNumber: 18
                        }, void 0),
                        " & Dijkstra's algorithm"
                    ]
                }, void 0, true),
                lead: "Module 4 concludes by leaving the straight line: search now runs over networks of nodes and edges, where the target is not one element but the cheapest PATH between two. One Dutch professor, five steps — and every map app on your phone."
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 596,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Search leaves the straight line",
                sub: "From arrays and lists to nodes & edges"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 602,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 605,
                                    columnNumber: 34
                                }, this),
                                " Lecture 24 · networks"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 605,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "So far, search lived inside ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "linear structures"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 607,
                                    columnNumber: 41
                                }, this),
                                " — scan an array, walk a list.",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "#c2410c"
                                    },
                                    children: "Network search extends the idea to trees and graphs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 608,
                                    columnNumber: 13
                                }, this),
                                ": a network is just ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "#c2410c"
                                    },
                                    children: "nodes (vertices) joined by edges"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 609,
                                    columnNumber: 29
                                }, this),
                                ". And here the goal changes character — we rarely ask “where is element X?”. We ask",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "“what is the best path from here to there?”"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 611,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 606,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 grid gap-4 md:grid-cols-3",
                            children: [
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
                                    t: "Node (vertex)",
                                    d: "One point in the network — a city, a router, a warehouse, a person."
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"],
                                    t: "Edge",
                                    d: "A connection between two nodes, often carrying a weight: km, minutes, rupees."
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                    t: "Path",
                                    d: "A chain of edges from one node to another — the usual target of a network search."
                                }
                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-4",
                                    style: {
                                        background: "#fbf3e6",
                                        border: "1px solid #efdec2"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(c.icon, {
                                            className: "h-5 w-5",
                                            style: {
                                                color: "#c2410c"
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 620,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.9rem] font-extrabold text-[#3e2c1d]",
                                            children: c.t
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 621,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.84rem] leading-relaxed text-[#5c4a33]",
                                            children: c.d
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 622,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.t, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 619,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 613,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 604,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 603,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NetworkVocabLab, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 629,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 628,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Every traversal is already a search",
                sub: "Walking the structure = reading the data"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 632,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTree$3e$__["ListTree"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 635,
                                    columnNumber: 34
                                }, this),
                                " Lecture 24 · traversals as search"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 635,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "The tree traversals you already know are searches in disguise — each one",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "reads the data while it walks"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 638,
                                    columnNumber: 13
                                }, this),
                                ". Pre-order visits ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "root → left → right"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 638,
                                    columnNumber: 78
                                }, this),
                                ", in-order visits ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "left → root → right"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 639,
                                    columnNumber: 29
                                }, this),
                                ", post-order visits",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "left → right → root"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 640,
                                    columnNumber: 13
                                }, this),
                                ". Same tree, three reading orders."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 636,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 grid gap-5 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-5",
                                    style: {
                                        background: "#fbf3e6",
                                        border: "1px solid #efdec2"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "chip",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                    className: "h-3.5 w-3.5",
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 38
                                                }, this),
                                                " Lecture 24 · DFS — the stack"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 644,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 340 150",
                                            className: "mt-3 h-auto w-full",
                                            role: "img",
                                            "aria-label": "Depth-first search dives down one branch to its deepest leaf before backtracking — visit order 1, 2, 4, then 3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "157",
                                                    y1: "36",
                                                    x2: "122",
                                                    y2: "76",
                                                    stroke: "#c2410c",
                                                    strokeWidth: "2.4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 646,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "183",
                                                    y1: "36",
                                                    x2: "228",
                                                    y2: "76",
                                                    stroke: "#dcc9a8",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "98",
                                                    y1: "98",
                                                    x2: "64",
                                                    y2: "118",
                                                    stroke: "#c2410c",
                                                    strokeWidth: "2.4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 648,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "250",
                                                    y1: "98",
                                                    x2: "286",
                                                    y2: "118",
                                                    stroke: "#dcc9a8",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 649,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "170",
                                                    cy: "26",
                                                    r: "17",
                                                    fill: "#f6ad3c",
                                                    stroke: "#c2410c",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "170",
                                                    y: "31",
                                                    textAnchor: "middle",
                                                    fontSize: "11",
                                                    fontWeight: "800",
                                                    fill: "#7c2d0a",
                                                    children: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 651,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "110",
                                                    cy: "88",
                                                    r: "17",
                                                    fill: "#f6ad3c",
                                                    stroke: "#c2410c",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "110",
                                                    y: "93",
                                                    textAnchor: "middle",
                                                    fontSize: "11",
                                                    fontWeight: "800",
                                                    fill: "#7c2d0a",
                                                    children: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 653,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "240",
                                                    cy: "88",
                                                    r: "17",
                                                    fill: "#fde8cf",
                                                    stroke: "#e2b075",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 654,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "240",
                                                    y: "93",
                                                    textAnchor: "middle",
                                                    fontSize: "11",
                                                    fontWeight: "800",
                                                    fill: "#3e2c1d",
                                                    children: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 655,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "50",
                                                    cy: "128",
                                                    r: "15",
                                                    fill: "#f6ad3c",
                                                    stroke: "#c2410c",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 656,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "50",
                                                    y: "133",
                                                    textAnchor: "middle",
                                                    fontSize: "11",
                                                    fontWeight: "800",
                                                    fill: "#7c2d0a",
                                                    children: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "296",
                                                    cy: "128",
                                                    r: "15",
                                                    fill: "#fde8cf",
                                                    stroke: "#e2b075",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "296",
                                                    y: "133",
                                                    textAnchor: "middle",
                                                    fontSize: "11",
                                                    fontWeight: "800",
                                                    fill: "#3e2c1d",
                                                    children: "5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "330",
                                                    y: "26",
                                                    fontSize: "9.5",
                                                    fontWeight: "700",
                                                    fill: "#a08050",
                                                    children: "amber = visit order"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 660,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 645,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.85rem] leading-relaxed text-[#5c4a33]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Depth-first search"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 663,
                                                    columnNumber: 17
                                                }, this),
                                                " runs as far as possible along each branch before backtracking — powered by a ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "stack"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 30
                                                }, this),
                                                ". It maps the ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "complete topology"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 66
                                                }, this),
                                                ", which makes it the tool when ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "new nodes or connections appear"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 31
                                                }, this),
                                                " and the map must be re-drawn."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 662,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 643,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-5",
                                    style: {
                                        background: "#fbf3e6",
                                        border: "1px solid #efdec2"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "chip",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$signal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Signal$3e$__["Signal"], {
                                                    className: "h-3.5 w-3.5",
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 38
                                                }, this),
                                                " Lecture 24 · BFS — the queue"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 669,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 340 150",
                                            className: "mt-3 h-auto w-full",
                                            role: "img",
                                            "aria-label": "Breadth-first search expands level by level by hop count — main servers, then intermediate servers, then clients",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "158",
                                                    y1: "34",
                                                    x2: "92",
                                                    y2: "74",
                                                    stroke: "#dcc9a8",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 671,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "170",
                                                    y1: "34",
                                                    x2: "170",
                                                    y2: "74",
                                                    stroke: "#dcc9a8",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 672,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "182",
                                                    y1: "34",
                                                    x2: "248",
                                                    y2: "74",
                                                    stroke: "#dcc9a8",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 673,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "80",
                                                    y1: "94",
                                                    x2: "52",
                                                    y2: "114",
                                                    stroke: "#dcc9a8",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "106",
                                                    y1: "96",
                                                    x2: "122",
                                                    y2: "114",
                                                    stroke: "#dcc9a8",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "196",
                                                    y1: "96",
                                                    x2: "212",
                                                    y2: "114",
                                                    stroke: "#dcc9a8",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 676,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "260",
                                                    y1: "94",
                                                    x2: "288",
                                                    y2: "114",
                                                    stroke: "#dcc9a8",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 677,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "170",
                                                    cy: "24",
                                                    r: "16",
                                                    fill: "#f6ad3c",
                                                    stroke: "#c2410c",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 678,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "170",
                                                    y: "28.5",
                                                    textAnchor: "middle",
                                                    fontSize: "8.5",
                                                    fontWeight: "800",
                                                    fill: "#7c2d0a",
                                                    children: "main"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 679,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "80",
                                                    cy: "86",
                                                    r: "14",
                                                    fill: "#fde8cf",
                                                    stroke: "#e2b075",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 680,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "80",
                                                    y: "90",
                                                    textAnchor: "middle",
                                                    fontSize: "8.5",
                                                    fontWeight: "800",
                                                    fill: "#3e2c1d",
                                                    children: "inter"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 681,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "170",
                                                    cy: "86",
                                                    r: "14",
                                                    fill: "#fde8cf",
                                                    stroke: "#e2b075",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 682,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "170",
                                                    y: "90",
                                                    textAnchor: "middle",
                                                    fontSize: "8.5",
                                                    fontWeight: "800",
                                                    fill: "#3e2c1d",
                                                    children: "inter"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 683,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "260",
                                                    cy: "86",
                                                    r: "14",
                                                    fill: "#fde8cf",
                                                    stroke: "#e2b075",
                                                    strokeWidth: "1.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 684,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "260",
                                                    y: "90",
                                                    textAnchor: "middle",
                                                    fontSize: "8.5",
                                                    fontWeight: "800",
                                                    fill: "#3e2c1d",
                                                    children: "inter"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "44",
                                                    cy: "126",
                                                    r: "10",
                                                    fill: "#fde8cf",
                                                    stroke: "#e2b075",
                                                    strokeWidth: "1.4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 686,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "130",
                                                    cy: "126",
                                                    r: "10",
                                                    fill: "#fde8cf",
                                                    stroke: "#e2b075",
                                                    strokeWidth: "1.4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 687,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "212",
                                                    cy: "126",
                                                    r: "10",
                                                    fill: "#fde8cf",
                                                    stroke: "#e2b075",
                                                    strokeWidth: "1.4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 688,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "296",
                                                    cy: "126",
                                                    r: "10",
                                                    fill: "#fde8cf",
                                                    stroke: "#e2b075",
                                                    strokeWidth: "1.4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 689,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "332",
                                                    y: "20",
                                                    textAnchor: "end",
                                                    fontSize: "9.5",
                                                    fontWeight: "700",
                                                    fill: "#a08050",
                                                    children: "hop 0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 690,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "332",
                                                    y: "90",
                                                    textAnchor: "end",
                                                    fontSize: "9.5",
                                                    fontWeight: "700",
                                                    fill: "#a08050",
                                                    children: "hop 1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 691,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "332",
                                                    y: "130",
                                                    textAnchor: "end",
                                                    fontSize: "9.5",
                                                    fontWeight: "700",
                                                    fill: "#a08050",
                                                    children: "hop 2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 692,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 670,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.85rem] leading-relaxed text-[#5c4a33]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Breadth-first search"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 695,
                                                    columnNumber: 17
                                                }, this),
                                                " expands ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "level by level by hop count"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 695,
                                                    columnNumber: 63
                                                }, this),
                                                " — powered by a ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "queue"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 696,
                                                    columnNumber: 19
                                                }, this),
                                                ". It reveals the hierarchy of a network:",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "client machines → intermediate servers → main servers"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 697,
                                                    columnNumber: 17
                                                }, this),
                                                " — and tells you how many hops any node needs."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 694,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 668,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 642,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 634,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 633,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "The shortest-path problem",
                sub: "Knowing the map is not the same as navigating it"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 705,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 708,
                                    columnNumber: 34
                                }, this),
                                " Lecture 24 · targeted navigation"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 708,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "Once you know a network's ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "topology"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 710,
                                    columnNumber: 44
                                }, this),
                                ", exploration stops being the point — users need",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "targeted navigation"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 711,
                                    columnNumber: 13
                                }, this),
                                " between a specific source and destination. And here the lecture drops the trap: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "#c2410c"
                                    },
                                    children: "“shortest” does not mean shortest distance"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 712,
                                    columnNumber: 23
                                }, this),
                                ". The cost on an edge can be ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "kilometres, time, toll money"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 713,
                                    columnNumber: 40
                                }, this),
                                " — or a combination of factors — and the right route depends on the requirement: avoid the tolls, or arrive faster despite a longer road."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 709,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 707,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 706,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CostSwitchLab, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 719,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 718,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "4",
                title: "Dijkstra — five steps to every shortest path",
                sub: "The lecture's exact graph, step by step"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 722,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                            className: "h-3.5 w-3.5",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 726,
                                            columnNumber: 36
                                        }, this),
                                        " Lecture 24 · the algorithm"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 726,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: "Edsger Dijkstra — pronounced “DIK-struh”"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 727,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 725,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "Named after the Dutch computer scientist ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Edsger Dijkstra"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 730,
                                    columnNumber: 54
                                }, this),
                                ", the algorithm finds the shortest path ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "from one source node to ALL other nodes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 731,
                                    columnNumber: 27
                                }, this),
                                " in a weighted graph — and it works",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "#c2410c"
                                    },
                                    children: "only with positive weights"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 732,
                                    columnNumber: 13
                                }, this),
                                "; negative edges are not permitted. Three assumptions run underneath it:"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 729,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-3 md:grid-cols-3",
                            children: [
                                "Every edge has an associated cost (weight).",
                                "All costs must be non-negative.",
                                "Cost is whatever you are optimising — distance, time, tolls."
                            ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2 rounded-xl p-3.5",
                                    style: {
                                        background: "#fbf3e6",
                                        border: "1px solid #efdec2"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "mt-0.5 h-4 w-4 shrink-0",
                                            style: {
                                                color: "#c2410c"
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 742,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[.85rem] font-semibold leading-relaxed text-[#3e2c1d]",
                                            children: t
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 743,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 741,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 735,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepsFlow"], {
                                steps: [
                                    {
                                        label: "1 · Initialise",
                                        sub: "source = 0, all others = ∞"
                                    },
                                    {
                                        label: "2 · Select",
                                        sub: "smallest unvisited distance"
                                    },
                                    {
                                        label: "3 · Relax",
                                        sub: "shorter via current? update"
                                    },
                                    {
                                        label: "4 · Mark visited",
                                        sub: "distance is now final"
                                    },
                                    {
                                        label: "5 · Repeat",
                                        sub: "until all visited"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 748,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 747,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 724,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 723,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DijkstraLab, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 759,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 758,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 md:grid-cols-3",
                    children: [
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"],
                            t: "One source → all nodes",
                            d: "Dijkstra answers one question per run: how far is EVERY node from THIS starting point?",
                            chip: "Lecture 24 · single source"
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"],
                            t: "Not all pairs",
                            d: "It does not give the absolute shortest distance between every pair — that is a different algorithm's job.",
                            chip: "Lecture 24 · one question per run"
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"],
                            t: "Start matters",
                            d: "Change the starting node and the whole answer sheet changes — results are relative to the source.",
                            chip: "Lecture 24 · results vary by start"
                        }
                    ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(c.icon, {
                                    className: "h-5 w-5",
                                    style: {
                                        color: "#c2410c"
                                    },
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 769,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.92rem] font-extrabold text-[#3e2c1d]",
                                    children: c.t
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 770,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[.85rem] leading-relaxed text-[#5c4a33]",
                                    children: c.d
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 771,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip mt-3",
                                    children: c.chip
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 772,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, c.t, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 768,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 762,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 761,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "5",
                title: "Hubs, spokes and the real world",
                sub: "Where Dijkstra quietly earns its keep"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 778,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HubSpokeLab, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 780,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 779,
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 784,
                                    columnNumber: 34
                                }, this),
                                " Lecture 24 · current use cases"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 784,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                            children: [
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                    t: "GPS navigation",
                                    d: "Route planning computes the cheapest path from you to the destination, live."
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
                                    t: "Food delivery",
                                    d: "Zomato & Swiggy allocate drivers by shortest reachable path to pickup and drop."
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$antenna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Antenna$3e$__["Antenna"],
                                    t: "Telecommunications",
                                    d: "Network optimisation routes signals along the lowest-cost links."
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
                                    t: "Courier & logistics",
                                    d: "Hub-and-spoke networks run on pre-computed hub-to-hub shortest distances."
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"],
                                    t: "Computer networks",
                                    d: "Routing protocols pick the least-cost path for every packet through the mesh."
                                }
                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-4",
                                    style: {
                                        background: "#fbf3e6",
                                        border: "1px solid #efdec2"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(c.icon, {
                                            className: "h-5 w-5",
                                            style: {
                                                color: "#c2410c"
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 794,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.88rem] font-extrabold text-[#3e2c1d]",
                                            children: c.t
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 795,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.8rem] leading-relaxed text-[#5c4a33]",
                                            children: c.d
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 796,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.t, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 793,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 785,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 783,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 782,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "6",
                title: "The variant family — and how to choose",
                sub: "A* and its five cousins"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 803,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 806,
                                    columnNumber: 34
                                }, this),
                                " Lecture 24 · A* — the GPS standard"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 806,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "Plain Dijkstra is ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "direction-blind"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 808,
                                    columnNumber: 31
                                }, this),
                                " — it expands in every direction equally. The",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "A* algorithm"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 809,
                                    columnNumber: 13
                                }, this),
                                " adds a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "heuristic"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 809,
                                    columnNumber: 50
                                }, this),
                                ": actual cost so far",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "plus a “sense of direction”"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 810,
                                    columnNumber: 13
                                }, this),
                                " — if the destination is south, paths heading south get priority. That makes it ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "more optimal than Dijkstra in practice"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 811,
                                    columnNumber: 41
                                }, this),
                                ", which is why A* is the engine inside GPS navigation."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 807,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 805,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 804,
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                        className: "h-3.5 w-3.5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 819,
                                        columnNumber: 36
                                    }, this),
                                    " Lecture 24 · the variant table"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 819,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 818,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto p-4 md:p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "warm-table",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Algorithm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 825,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "What it does"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 826,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Reach for it when…"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 827,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 824,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 823,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Uniform Cost Search"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                        lineNumber: 832,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Expands the lowest-cost paths first"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                        lineNumber: 833,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Constraints matter — e.g. avoid tolls, minimise spend"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                        lineNumber: 834,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                lineNumber: 831,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Bidirectional Search"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                        lineNumber: 837,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Searches from source AND destination simultaneously, meeting in the middle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                        lineNumber: 838,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Both endpoints are known and the space is huge"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                        lineNumber: 839,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                lineNumber: 836,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Floyd–Warshall"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                        lineNumber: 842,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Shortest paths between ALL pairs of nodes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                        lineNumber: 843,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "You need the whole distance matrix upfront"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                lineNumber: 841,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Bellman–Ford"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                        lineNumber: 847,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Shortest paths tolerating NEGATIVE edge weights"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                        lineNumber: 848,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Costs can drop below zero"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                        lineNumber: 849,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                lineNumber: 846,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Prim's & Kruskal's"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                        lineNumber: 852,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Minimum spanning tree — connect every node at minimum total cost"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                        lineNumber: 853,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "You are BUILDING the network, not just travelling it"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                        lineNumber: 854,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                lineNumber: 851,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 830,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 822,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 821,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 817,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 816,
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 863,
                                    columnNumber: 34
                                }, this),
                                " Lecture 24 · selection criteria"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 863,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-3 md:grid-cols-2",
                            children: [
                                {
                                    k: "Dijkstra",
                                    v: "one source → all destinations, positive weights"
                                },
                                {
                                    k: "Bellman–Ford",
                                    v: "negative edge weights exist"
                                },
                                {
                                    k: "Prim's / Kruskal's",
                                    v: "connect ALL nodes at minimum total cost"
                                },
                                {
                                    k: "Floyd–Warshall",
                                    v: "all-pairs shortest paths are required"
                                },
                                {
                                    k: "A*",
                                    v: "a directional heuristic is available"
                                }
                            ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-1 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3.5 py-2.5 sm:flex-row sm:items-baseline sm:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "shrink-0 font-mono text-[.72rem] font-bold uppercase tracking-wider text-[#a0410a]",
                                            children: r.k
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 873,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[.86rem] leading-relaxed text-[#241a0f]",
                                            children: r.v
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 874,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, r.k, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 872,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 864,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                            kind: "insight",
                            title: "In practice you SELECT algorithms, you don't write them",
                            children: [
                                "Real GPS units, delivery platforms and telecom stacks ship",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "variants or combinations of these algorithms, already implemented"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 880,
                                    columnNumber: 13
                                }, this),
                                ". The lecture's closing point: understanding ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "which algorithm fits which scenario"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 881,
                                    columnNumber: 42
                                }, this),
                                " matters more than implementing one from scratch."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 878,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 862,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 861,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Lecture 24 · Dijkstra",
                            q: "In the lecture's graph (A→B 4 · A→C 2 · C→B 1 · C→D 5 · B→D 3), what is the shortest distance from A to B?",
                            options: [
                                "4 — the direct edge",
                                "3 — via A→C→B",
                                "2 — via A→C",
                                "6 — via A→C→B→D"
                            ],
                            answer: 1,
                            explain: "A→C = 2, then C→B = 1, so A→C→B = 3 — one less than the direct edge's 4. This is exactly the discovery the step-through makes in step 3: the settled distance for B is 3, and the direct edge is never used."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 889,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 888,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Lecture 24 · choosing algorithms",
                            q: "Your network contains some NEGATIVE edge weights. Which algorithm still works?",
                            options: [
                                "Dijkstra's algorithm",
                                "Bellman–Ford",
                                "Prim's algorithm",
                                "Kruskal's algorithm"
                            ],
                            answer: 1,
                            explain: "Dijkstra's non-negative assumption breaks with negative edges. Bellman–Ford is built for exactly this: it handles both positive and negative weights. Prim's and Kruskal's are spanning-tree builders, not shortest-path solvers."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 894,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 893,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 887,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Practice"], {
                    title: "Pen-and-paper drills — network search",
                    items: [
                        {
                            q: "Run Dijkstra by hand on the lecture graph starting from A: write the settled order, each node's final distance, and the path used for D.",
                            hint: "Order: A(0) → C(2) → B(3) → D(6). D's path is A→C→B→D — the A→C→D route (7) gets beaten."
                        },
                        {
                            q: "Re-run the same graph but start from D. Do A, B and C keep the same distances? What does this prove about Dijkstra's output?",
                            hint: "Distances are relative to the chosen source — a different start produces a different answer sheet."
                        },
                        {
                            q: "A delivery app must find the cheapest route for a driver who pays the tolls personally. Which variant fits, and why not plain Dijkstra with time weights?",
                            hint: "Uniform Cost Search — expand lowest-COST paths first; the cost variable is rupees, not minutes."
                        },
                        {
                            q: "A monitoring tool must map a data centre whose connections change weekly. Which traversal do you reach for — DFS or BFS — and what structure powers it?",
                            hint: "DFS on a stack: as far as possible per branch, backtracking — ideal for re-discovering topology when new nodes or connections appear."
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 900,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 899,
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waypoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waypoints$3e$__["Waypoints"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 909,
                                    columnNumber: 34
                                }, this),
                                " Lecture 24 · key takeaways"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 909,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 908,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Network search finds ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "optimal paths between nodes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 912,
                                        columnNumber: 34
                                    }, void 0),
                                    " in weighted graphs — the goal shifts from locating an element to routing between two."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Dijkstra's algorithm is the fundamental answer to the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "single-source shortest path"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 913,
                                        columnNumber: 72
                                    }, void 0),
                                    " problem: one start, distances to all others."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "It works only on ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "weighted graphs with non-negative weights"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 914,
                                        columnNumber: 30
                                    }, void 0),
                                    " — the cost is whatever you optimise: distance, time, tolls or a blend."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The two lecture discoveries: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "direct routes can lose to detours"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 915,
                                        columnNumber: 42
                                    }, void 0),
                                    " (A→C→B beats A→B; A→C→B→D beats A→C→D)."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Different business scenarios need ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "different variants"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 916,
                                        columnNumber: 47
                                    }, void 0),
                                    " — Bellman–Ford for negatives, Floyd–Warshall for all pairs, Prim's/Kruskal's to build cheap networks, A* when a sense of direction exists."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "In practice, ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "selecting the right algorithm beats implementing one"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 917,
                                        columnNumber: 26
                                    }, void 0),
                                    " — real systems already ship these as library variants and combinations."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 911,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 907,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts9.tsx",
        lineNumber: 595,
        columnNumber: 5
    }, this);
}
_c7 = AtbDijkstraSection;
function buildBubbleSteps(input) {
    const a = [
        ...input
    ];
    const n = a.length;
    const steps = [
        {
            arr: [
                ...a
            ],
            cmp: null,
            swapped: false,
            pass: 0,
            cmpNo: 0,
            cmpTotal: n - 1,
            lockedFrom: n,
            settledValue: null,
            status: `The list as it arrives: [${a.join(", ")}]. Pass 1 will make ${n - 1} adjacent comparisons — watch the largest value sink.`
        }
    ];
    for(let pass = 1; pass <= n - 1; pass++){
        const limit = n - pass;
        for(let i = 0; i < limit; i++){
            const l = a[i];
            const r = a[i + 1];
            const swapped = l > r;
            if (swapped) {
                a[i] = r;
                a[i + 1] = l;
            }
            steps.push({
                arr: [
                    ...a
                ],
                cmp: i,
                swapped,
                pass,
                cmpNo: i + 1,
                cmpTotal: limit,
                lockedFrom: i === limit - 1 ? n - pass : n - pass + 1,
                settledValue: null,
                status: `Pass ${pass} · comparison ${i + 1} of ${limit} — compare ${l} & ${r} → ${swapped ? `${l} > ${r}, SWAP` : `${l} < ${r}, no swap`} → [${a.join(", ")}]`
            });
        }
        steps.push({
            arr: [
                ...a
            ],
            cmp: null,
            swapped: false,
            pass,
            cmpNo: 0,
            cmpTotal: limit,
            lockedFrom: n - pass,
            settledValue: a[n - pass],
            status: `Pass ${pass} complete — ${a[n - pass]} has bubbled into its FINAL position (position ${n - pass + 1}). ${n - pass > 1 ? `Pass ${pass + 1} needs only ${limit - 1} comparisons.` : "The list is sorted."}`
        });
    }
    steps.push({
        arr: [
            ...a
        ],
        cmp: null,
        swapped: false,
        pass: n - 1,
        cmpNo: 0,
        cmpTotal: 1,
        lockedFrom: 0,
        settledValue: null,
        status: `SORTED — [${a.join(", ")}]. ${n - 1} passes, ${steps.filter((s)=>s.cmp !== null).length} comparisons in total. Every element is settled.`
    });
    return steps;
}
const BUBBLE_STEPS = buildBubbleSteps([
    10,
    5,
    8,
    4,
    3,
    2
]);
function BubbleLab() {
    _s4();
    const [i, setI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const s = BUBBLE_STEPS[i];
    const done = s.lockedFrom === 0;
    const passLedger = BUBBLE_STEPS.slice(0, i + 1).filter((st)=>st.settledValue !== null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownUp$3e$__["ArrowDownUp"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#c2410c"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 987,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "Bubble sort, pass by pass — [10, 5, 8, 4, 3, 2]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 988,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownUp$3e$__["ArrowDownUp"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 989,
                                columnNumber: 32
                            }, this),
                            " Lecture 25 · flagship trace"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 989,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 986,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]",
                children: [
                    "The lecture's exact list. Each press of ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 992,
                        columnNumber: 54
                    }, this),
                    " performs one adjacent comparison — larger values ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "sink right"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 993,
                        columnNumber: 23
                    }, this),
                    ", smaller ones ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "float left"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 993,
                        columnNumber: 65
                    }, this),
                    ", and after every pass the largest unsettled value locks into its final slot."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 991,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: "warm",
                        onClick: ()=>setI((v)=>Math.min(v + 1, BUBBLE_STEPS.length - 1)),
                        disabled: done,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skip$2d$forward$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SkipForward$3e$__["SkipForward"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 998,
                                    columnNumber: 62
                                }, this),
                                " Next comparison"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 998,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 997,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        onClick: ()=>setI(0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1001,
                                    columnNumber: 62
                                }, this),
                                " Reset"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1001,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1000,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: s.pass === 0 ? "before pass 1" : `pass ${s.pass}${s.cmpNo > 0 ? ` · comparison ${s.cmpNo}/${s.cmpTotal}` : " · complete"}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1003,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 996,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end justify-center gap-3 sm:gap-5",
                        "aria-hidden": true,
                        children: s.arr.map((v, idx)=>{
                            const locked = idx >= s.lockedFrom;
                            const comparing = s.cmp === idx || s.cmp === idx - 1;
                            const bg = locked ? "#dce8c8" : comparing ? "#f6ad3c" : "#fde8cf";
                            const border = locked ? "#7c9a3e" : comparing ? "#c2410c" : "#e2b075";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layout: true,
                                transition: {
                                    type: "spring",
                                    stiffness: 420,
                                    damping: 30
                                },
                                className: "flex w-12 flex-col items-center sm:w-14",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mb-1.5 font-mono-warm text-[.95rem] font-extrabold",
                                        style: {
                                            color: locked ? "#44621d" : comparing ? "#9a3412" : "#3e2c1d"
                                        },
                                        children: v
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 1019,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "w-full rounded-t-lg",
                                        style: {
                                            backgroundColor: bg,
                                            borderColor: border,
                                            borderStyle: "solid",
                                            borderWidth: 2,
                                            borderBottomWidth: 0
                                        },
                                        initial: false,
                                        animate: {
                                            height: 16 + v * 10.5,
                                            backgroundColor: bg,
                                            borderColor: border
                                        },
                                        transition: {
                                            duration: 0.25
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 1021,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-1 text-[.62rem] font-bold text-[#a08050]",
                                        children: locked ? "settled" : `idx ${idx}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 1028,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `el-${v}`, true, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 1013,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1006,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-center text-[.78rem] font-semibold text-[#a08050]",
                        children: "locked cells (olive) are in their final position — never touched again"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1033,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1005,
                columnNumber: 7
            }, this),
            passLedger.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: passLedger.map((st, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        initial: {
                            scale: 0.7,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        className: "chip",
                        style: {
                            background: "#eef4dd",
                            borderColor: "#c4d6a0",
                            color: "#44621d"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 1042,
                                columnNumber: 15
                            }, this),
                            " Pass ",
                            st.pass,
                            " ✓ ",
                            st.cmpTotal,
                            " comparisons · ",
                            st.settledValue,
                            " settled"
                        ]
                    }, k, true, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1040,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1038,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 min-h-[2.6rem] text-[.88rem] font-bold leading-relaxed text-[#9a3412]",
                "aria-live": "polite",
                children: s.status
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1047,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts9.tsx",
        lineNumber: 985,
        columnNumber: 5
    }, this);
}
_s4(BubbleLab, "dZ1hZj/RWe+7Q/SoaXuKacRY+8w=");
_c8 = BubbleLab;
/* ---------- machine · NameSortLab: non-numerical data ---------- */ const NAMES = [
    "Mohan",
    "Ram",
    "Sham",
    "Lakshman",
    "Arjun",
    "Bheem"
];
const NAMES_SORTED = [
    ...NAMES
].sort();
function NameSortLab() {
    _s5();
    const [sorted, setSorted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const arr = sorted ? NAMES_SORTED : NAMES;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#c2410c"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1065,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "Sorting words — not just numbers"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1066,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 1067,
                                columnNumber: 32
                            }, this),
                            " Lecture 25 · A < Z"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1067,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1064,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]",
                children: [
                    "Bubble sort works on ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "any comparable data"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1070,
                        columnNumber: 30
                    }, this),
                    ". Here is the lecture's name list — the compare step now checks capital letters alphabetically (",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "A < Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1071,
                        columnNumber: 57
                    }, this),
                    "), and the same swap logic takes over."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1069,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: "warm",
                        onClick: ()=>setSorted(true),
                        disabled: sorted,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownUp$3e$__["ArrowDownUp"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1075,
                                    columnNumber: 62
                                }, this),
                                " Sort A → Z"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1075,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1074,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        onClick: ()=>setSorted(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1078,
                                    columnNumber: 62
                                }, this),
                                " Reset"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1078,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1077,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1073,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-3 rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-5",
                children: arr.map((nm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        transition: {
                            type: "spring",
                            stiffness: 420,
                            damping: 30
                        },
                        className: "rounded-xl px-4 py-2.5 font-mono-warm text-[.9rem] font-extrabold",
                        style: {
                            background: sorted ? "#dce8c8" : "#fde8cf",
                            border: `1.6px solid ${sorted ? "#7c9a3e" : "#e2b075"}`,
                            color: sorted ? "#44621d" : "#3e2c1d"
                        },
                        children: nm
                    }, nm, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1083,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1081,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 min-h-[1.6rem] text-[.86rem] font-bold text-[#9a3412]",
                "aria-live": "polite",
                children: sorted ? "→ [Arjun, Bheem, Lakshman, Mohan, Ram, Sham] — same compare-and-swap logic, the values just happen to be names." : "→ [Mohan, Ram, Sham, Lakshman, Arjun, Bheem] as given. Press Sort and watch the same adjacent swaps apply to strings."
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1098,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts9.tsx",
        lineNumber: 1063,
        columnNumber: 5
    }, this);
}
_s5(NameSortLab, "+sGaf/H+Oyt54CrLcj2yy7omAsI=");
_c9 = NameSortLab;
/* ---------- machine · ComplexityLab: the price of O(n²) ---------- */ const N_PRESETS = [
    6,
    10,
    100,
    1000,
    10000
];
function ComplexityLab() {
    _s6();
    const [n, setN] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(6);
    const maxCmp = 10000 * 9999 / 2;
    const cmp = n * (n - 1) / 2;
    const verdicts = {
        6: "15 comparisons — a handful. This is bubble sort's comfort zone: a lecture example, a classroom trace.",
        10: "45 comparisons — still trivial. You could bubble-sort a hand of cards this way forever.",
        100: "4,950 comparisons — noticeable, tolerable. A small catalogue could survive it.",
        1000: "499,500 comparisons — half a million. Users start feeling the wait.",
        10000: "49,995,000 comparisons — roughly 50 million; the lecture rounds the O(n²) growth to ~100 MILLION operations. Unusable for real datasets."
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#c2410c"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "Grow n — watch n(n−1)/2 explode"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 1127,
                                columnNumber: 32
                            }, this),
                            " Lecture 25 · quadratic blow-up"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: N_PRESETS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        tone: n === p ? "warm" : "ghost",
                        onClick: ()=>setN(p),
                        children: [
                            p.toLocaleString("en-IN"),
                            " elements"
                        ]
                    }, p, true, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1131,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono-warm text-[.8rem] font-bold text-[#8a5a06]",
                                children: "n(n−1)/2 ="
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 1138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    scale: 0.85,
                                    opacity: 0
                                },
                                animate: {
                                    scale: 1,
                                    opacity: 1
                                },
                                className: "font-mono-warm text-3xl font-extrabold text-[#c2410c]",
                                children: cmp.toLocaleString("en-IN")
                            }, n, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 1139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[.8rem] font-semibold text-[#8c7a5c]",
                                children: "comparisons"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 1143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 h-7 w-full overflow-hidden rounded-full bg-[#f6ead2]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "h-full rounded-full",
                            style: {
                                background: "linear-gradient(90deg,#f59e0b,#c2410c)"
                            },
                            animate: {
                                width: `${Math.max(3, Math.sqrt(cmp / maxCmp) * 100)}%`
                            },
                            transition: {
                                type: "spring",
                                stiffness: 120,
                                damping: 22
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1146,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 text-[.68rem] font-bold uppercase tracking-[.14em] text-[#a08050]",
                        children: "bar on a square-root scale — a linear bar could not fit 10,000 on this screen"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 min-h-[2.6rem] text-[.88rem] font-bold leading-relaxed text-[#9a3412]",
                "aria-live": "polite",
                children: verdicts[n]
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts9.tsx",
        lineNumber: 1123,
        columnNumber: 5
    }, this);
}
_s6(ComplexityLab, "QZufDgnbTSqdahayNWVujjlO+JE=");
_c10 = ComplexityLab;
function AtbSortingSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "sorting",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Lecture 25 · Sorting & bubble sort",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "grad-text",
                            children: "Sorting"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1173,
                            columnNumber: 18
                        }, void 0),
                        " & bubble sort"
                    ]
                }, void 0, true),
                lead: "The final module opens with the step that makes efficient searching possible: arranging elements by a parameter. Bubble sort is the simplest sorter ever devised — and the clearest demonstration that simplicity has a price."
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "What is sorting?",
                sub: "One word, many parameters"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownUp$3e$__["ArrowDownUp"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1180,
                                    columnNumber: 34
                                }, this),
                                " Lecture 25 · definition"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: "#c2410c"
                                    },
                                    children: "Sorting is arranging elements in a specific order"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1182,
                                    columnNumber: 13
                                }, this),
                                " — ascending, descending, or by any parameter you choose: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "numerical value, alphabetical order, relevance, price, quality"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1183,
                                    columnNumber: 68
                                }, this),
                                ". It sounds mundane, but hold one fact tight:",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "most search algorithms assume the data is already sorted"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1185,
                                    columnNumber: 13
                                }, this),
                                " — which makes sorting the",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "prerequisite for efficient searching"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1186,
                                    columnNumber: 13
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1181,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 grid gap-4 md:grid-cols-3",
                            children: [
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"],
                                    t: "E-commerce",
                                    d: "Products sorted by relevance, price, quality — every parameter is a different sort.",
                                    chip: "Lecture 25 · e-commerce"
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"],
                                    t: "Flight booking",
                                    d: "Results ranked by price and travel time; the cheapest flight and the fastest flight rarely coincide.",
                                    chip: "Lecture 25 · travel"
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
                                    t: "Academic reporting",
                                    d: "Marks sorted highest → lowest so grades can be assigned by position.",
                                    chip: "Lecture 25 · academics"
                                }
                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-4",
                                    style: {
                                        background: "#fbf3e6",
                                        border: "1px solid #efdec2"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(c.icon, {
                                            className: "h-5 w-5",
                                            style: {
                                                color: "#c2410c"
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1195,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.9rem] font-extrabold text-[#3e2c1d]",
                                            children: c.t
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1196,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.84rem] leading-relaxed text-[#5c4a33]",
                                            children: c.d
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1197,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "chip mt-3",
                                            children: c.chip
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1198,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.t, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1194,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                            kind: "why",
                            title: "Multiple parameters, better decisions",
                            children: [
                                "Platforms never stop at one sort. Sorting the same data ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "several ways"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1203,
                                    columnNumber: 69
                                }, this),
                                " — by price, then by rating, then by delivery speed — is what turns a raw list into a decision tool. The parameter",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "is"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1205,
                                    columnNumber: 13
                                }, this),
                                " the user experience."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1202,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 1179,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Bubble sort — the rising bubble",
                sub: "Light values float, heavy values sink"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1213,
                                    columnNumber: 34
                                }, this),
                                " Lecture 25 · the name"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1213,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "The name comes from ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "air bubbles rising in water"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1215,
                                    columnNumber: 33
                                }, this),
                                ": the lighter (smaller) values",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "drift toward the front"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1216,
                                    columnNumber: 13
                                }, this),
                                " while heavier (larger) values ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "sink to the end"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1216,
                                    columnNumber: 83
                                }, this),
                                ". The machinery is just two moves on loop: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "compare adjacent elements → swap if out of order"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1217,
                                    columnNumber: 54
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.93rem] font-bold text-[#9a3412]",
                            children: "The classic method — largest element to the end, in six rules:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1219,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 grid gap-2.5 md:grid-cols-2",
                            children: [
                                "Start from the first element and compare it with the next.",
                                "If the first is larger, swap their positions.",
                                "Move to the next pair and repeat along the row.",
                                "After each pass, the largest unsorted element lands in its final position at the end.",
                                "Repeat — one fewer comparison in each subsequent pass.",
                                "Total passes needed equals the number of elements."
                            ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-2.5 rounded-xl p-3.5",
                                    style: {
                                        background: "#fbf3e6",
                                        border: "1px solid #efdec2"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f59e0b] to-[#c2410c] text-[.7rem] font-bold text-white",
                                            "aria-hidden": true,
                                            children: i + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1232,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[.86rem] font-semibold leading-relaxed text-[#3e2c1d]",
                                            children: t
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1233,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1231,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1222,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 1212,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BubbleLab, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 1240,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "Two directions, one result",
                sub: "…and sorting words, not just numbers"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1243,
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flip$2d$horizontal$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlipHorizontal2$3e$__["FlipHorizontal2"], {
                                            className: "h-3.5 w-3.5",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1247,
                                            columnNumber: 36
                                        }, this),
                                        " Lecture 25 · alternative method"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1247,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[.9rem] font-extrabold text-[#3e2c1d]",
                                    children: "Smallest element to the front"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1248,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.86rem] leading-relaxed text-[#5c4a33]",
                                    children: [
                                        "The mirror variant: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "start from the last element"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1250,
                                            columnNumber: 35
                                        }, this),
                                        " and compare it with the",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "previous"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1251,
                                            columnNumber: 15
                                        }, this),
                                        " one, bubbling the ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "minimum leftward"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1251,
                                            columnNumber: 59
                                        }, this),
                                        ". After each pass, the smallest unsorted element lands in its correct position ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "at the beginning"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1252,
                                            columnNumber: 71
                                        }, this),
                                        ". Same result, opposite direction — the lecture calls it the alternative method."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1249,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl p-3.5",
                                            style: {
                                                background: "#fde4c3",
                                                border: "1px solid #eec088"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[.78rem] font-extrabold text-[#9a3412]",
                                                    children: "Classic"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 1257,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-[.8rem] leading-relaxed text-[#7c4a12]",
                                                    children: "largest sinks to the END each pass"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 1258,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1256,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl p-3.5",
                                            style: {
                                                background: "#eef4dd",
                                                border: "1px solid #c4d6a0"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[.78rem] font-extrabold text-[#44621d]",
                                                    children: "Alternative"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 1261,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-[.8rem] leading-relaxed text-[#5c7a24]",
                                                    children: "smallest floats to the FRONT each pass"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                                    lineNumber: 1262,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1260,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1255,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1246,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NameSortLab, {}, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1268,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1267,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "4",
                title: "The price of simplicity — O(n²)",
                sub: "From 15 comparisons to 100 million"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1275,
                                    columnNumber: 34
                                }, this),
                                " Lecture 25 · the derivation"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1275,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "Count the work. Pass 1 makes ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "n"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1277,
                                    columnNumber: 42
                                }, this),
                                " comparisons, pass 2 makes ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "n−1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1277,
                                    columnNumber: 87
                                }, this),
                                ", pass 3 makes ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "n−2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1278,
                                    columnNumber: 19
                                }, this),
                                " … the final pass makes ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1278,
                                    columnNumber: 63
                                }, this),
                                ". Add them up:"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1276,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepsFlow"], {
                                steps: [
                                    {
                                        label: "Sum the passes",
                                        sub: "n + (n−1) + … + 1"
                                    },
                                    {
                                        label: "Closed form",
                                        sub: "n(n−1)/2"
                                    },
                                    {
                                        label: "Expand",
                                        sub: "½n² − ½n"
                                    },
                                    {
                                        label: "Big O rules",
                                        sub: "drop −½n · drop the ½"
                                    },
                                    {
                                        label: "Verdict",
                                        sub: "O(n²) — quadratic"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                lineNumber: 1281,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1280,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 grid gap-3 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl p-3.5",
                                    style: {
                                        background: "#fde4c3",
                                        border: "1px solid #eec088"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.8rem] font-extrabold text-[#9a3412]",
                                            children: "Big O rule 1 · discard lower-order terms"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1291,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.82rem] leading-relaxed text-[#7c4a12]",
                                            children: "−½n is negligible next to ½n² once n grows."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1292,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1290,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl p-3.5",
                                    style: {
                                        background: "#fde4c3",
                                        border: "1px solid #eec088"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.8rem] font-extrabold text-[#9a3412]",
                                            children: "Big O rule 2 · remove numerical constants"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.82rem] leading-relaxed text-[#7c4a12]",
                                            children: "The ½ goes too — ½n² is still O(n²)."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1296,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1294,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1289,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 1274,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ComplexityLab, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 1302,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1301,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-3.5 w-3.5",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1307,
                                            columnNumber: 36
                                        }, this),
                                        " Lecture 25 · when it's fine"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1307,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[.9rem] leading-relaxed text-[#2b2014]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Small lists — 5 or 6 elements — are manageable"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1309,
                                            columnNumber: 15
                                        }, this),
                                        ": about 25 operations. For a classroom trace or a tiny array, bubble sort is honest, obvious, and perfectly adequate."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1308,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1306,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "h-3.5 w-3.5",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1314,
                                            columnNumber: 36
                                        }, this),
                                        " Lecture 25 · when it's fatal"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1314,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[.9rem] leading-relaxed text-[#2b2014]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "10,000 elements ≈ 100 million comparisons"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1316,
                                            columnNumber: 15
                                        }, this),
                                        " — despite its logical simplicity, bubble sort is ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "unsuitable for large datasets or business applications"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                            lineNumber: 1317,
                                            columnNumber: 23
                                        }, this),
                                        ". The next lectures exist to fix exactly this."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1315,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1313,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 1305,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Lecture 25 · bubble sort",
                            q: "After Pass 1 of bubble sort on [10, 5, 8, 4, 3, 2], where does the 10 end up?",
                            options: [
                                "At the front — it floated left",
                                "In its final position at the end",
                                "Still at index 0",
                                "In the middle of the list"
                            ],
                            answer: 1,
                            explain: "Each pass sinks the largest unsorted value all the way to the end: 10 won all five comparisons of pass 1 and locked into the last slot — which is why pass 2 needs only four comparisons."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1326,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Lecture 25 · complexity",
                            q: "The exact comparison count is n(n−1)/2 = ½n² − ½n. Why do we report O(n²)?",
                            options: [
                                "Because swaps count double",
                                "Because Big O discards lower-order terms and constants",
                                "Because passes are counted twice",
                                "Because n(n−1)/2 simplifies to n² exactly"
                            ],
                            answer: 1,
                            explain: "Two Big O rules: the −½n term is negligible next to n² (drop lower orders), and the ½ constant is dropped too. ½n² − ½n collapses to O(n²) — quadratic growth."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1331,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1330,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Practice"], {
                    title: "Pen-and-paper drills — bubble sort",
                    items: [
                        {
                            q: "Trace Pass 2 of [10, 5, 8, 4, 3, 2] by hand: list every comparison, every swap, and the final array with two settled values.",
                            hint: "Pass 2 makes 4 comparisons: 5,8 stay · 8,4 swap · 8,3 swap · 8,2 swap → [5, 4, 3, 2, 8, 10]."
                        },
                        {
                            q: "Sort [Mohan, Ram, Sham, Lakshman, Arjun, Bheem] alphabetically using bubble sort's compare-and-swap. How many passes does it take?",
                            hint: "Capital letters compare A < Z — same six rules, no arithmetic needed."
                        },
                        {
                            q: "Compute the total comparisons for n = 6 and n = 20 using n(n−1)/2. Then explain in one sentence why the second number should worry you.",
                            hint: "15 vs 190 — twenty elements already cost 12× more work than six."
                        },
                        {
                            q: "Write the six rules of the ALTERNATIVE method (smallest to the front). Which end of the row do you walk from, and which end locks first?",
                            hint: "Start from the last element, compare with the previous one, bubble the minimum left; position 1 locks first."
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                    lineNumber: 1337,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1336,
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownUp$3e$__["ArrowDownUp"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                    lineNumber: 1346,
                                    columnNumber: 34
                                }, this),
                                " Lecture 25 · key takeaways"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts9.tsx",
                            lineNumber: 1346,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Sorting arranges data by a ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "parameter of your choice"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 1349,
                                        columnNumber: 40
                                    }, void 0),
                                    " — numerical, alphabetical, relevance, price — and multiple parameters mean multiple useful orders."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Most search algorithms ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "assume sorted data"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 1350,
                                        columnNumber: 36
                                    }, void 0),
                                    " — sorting is the prerequisite for efficient searching."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Bubble sort orders data by ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "successive adjacent comparisons and swaps"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 1351,
                                        columnNumber: 40
                                    }, void 0),
                                    " — light values float forward, heavy values sink."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Each pass moves ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "one element into its final position"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 1352,
                                        columnNumber: 29
                                    }, void 0),
                                    "; passes needed equal the list size, with one fewer comparison per pass."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Time complexity is ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "O(n²)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 1353,
                                        columnNumber: 32
                                    }, void 0),
                                    ": n + (n−1) + … + 1 = n(n−1)/2 → fine for 5–6 elements, unusable at 10,000 (~100 million comparisons)."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The next algorithms in the module exist to ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "fix this efficiency problem"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                                        lineNumber: 1354,
                                        columnNumber: 56
                                    }, void 0),
                                    " for large datasets."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts9.tsx",
                        lineNumber: 1348,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts9.tsx",
                lineNumber: 1344,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts9.tsx",
        lineNumber: 1170,
        columnNumber: 5
    }, this);
}
_c11 = AtbSortingSection;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "OpBtn");
__turbopack_context__.k.register(_c1, "GraphNode");
__turbopack_context__.k.register(_c2, "WeightPill");
__turbopack_context__.k.register(_c3, "NetworkVocabLab");
__turbopack_context__.k.register(_c4, "CostSwitchLab");
__turbopack_context__.k.register(_c5, "DijkstraLab");
__turbopack_context__.k.register(_c6, "HubSpokeLab");
__turbopack_context__.k.register(_c7, "AtbDijkstraSection");
__turbopack_context__.k.register(_c8, "BubbleLab");
__turbopack_context__.k.register(_c9, "NameSortLab");
__turbopack_context__.k.register(_c10, "ComplexityLab");
__turbopack_context__.k.register(_c11, "AtbSortingSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_atb_AtbParts9_tsx_02df43f0._.js.map