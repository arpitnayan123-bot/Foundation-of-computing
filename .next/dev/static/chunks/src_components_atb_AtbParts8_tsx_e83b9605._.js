(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/atb/AtbParts8.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AtbComplexitySection",
    ()=>AtbComplexitySection,
    "AtbSearchSection",
    ()=>AtbSearchSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   ATB — "Algorithmic Thinking in Business" · shelf 02
   FILE 8 — Module 4 · Lectures 21–22 (recorded lectures)
   Part 8: Algorithmic complexity (light) · Search strategies (light)
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/door-open.js [app-client] (ecmascript) <export default as DoorOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$footprints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Footprints$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/footprints.js [app-client] (ecmascript) <export default as Footprints>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gauge.js [app-client] (ecmascript) <export default as Gauge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-fork.js [app-client] (ecmascript) <export default as GitFork>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$split$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Split$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/split.js [app-client] (ecmascript) <export default as Split>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ---------- local button (real <button>, aria-labelled) ---------- */ function OpBtn({ onClick, children, active = false }) {
    const style = active ? {
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
        "aria-pressed": active,
        style: style,
        className: "rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 hover:-translate-y-0.5",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/atb/AtbParts8.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = OpBtn;
/* ============================================================
   LECTURE 21 · MACHINE 1 — the housing society (best/avg/worst)
   ============================================================ */ const HOUSE_ZONES = [
    {
        from: 3,
        to: 4,
        fill: "#dbe7c0",
        stroke: "#7c9a3e",
        tone: "BEST case",
        label: "best",
        text: "#44621d"
    },
    {
        from: 7,
        to: 18,
        fill: "#fde8cf",
        stroke: "#e2b075",
        tone: "AVERAGE case",
        label: "average",
        text: "#92600a"
    },
    {
        from: 19,
        to: 24,
        fill: "#fbe9e4",
        stroke: "#e6a08c",
        tone: "WORST case",
        label: "worst",
        text: "#8c2f2f"
    }
];
function houseZone(h) {
    return HOUSE_ZONES.find((z)=>h >= z.from && h <= z.to);
}
function SocietyLab() {
    _s();
    const [sel, setSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const zone = sel !== null ? houseZone(sel) : undefined;
    const status = sel === null ? "A society of 24 numbered houses, one Gate A. Click any house — the same search, three very different amounts of walking." : zone ? `House ${sel} · ${zone.tone} — ${zone.label === "best" ? "right beside the gate, the walk is minimal: the search finds the resident with almost no work." : zone.label === "average" ? "the typical amount of walking — neither lucky nor unlucky, the usual effort of the search." : "the far end of the society: maximum effort before the match is made."}` : `House ${sel} · just off the best-case block — still a very short walk from Gate A.`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$door$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DoorOpen$3e$__["DoorOpen"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#c2410c"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "One gate, 24 houses — three kinds of luck"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                children: [
                    "The lecture's own example: a ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "numbered housing society"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 72,
                        columnNumber: 43
                    }, this),
                    " with",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "24 houses"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    " and ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "one entrance, Gate A"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 73,
                        columnNumber: 40
                    }, this),
                    ". Searching for a resident means walking from the gate — and ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "where the house sits decides the effort"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 74,
                        columnNumber: 37
                    }, this),
                    ". Same algorithm, three different stories: that is exactly what best, average and worst case measure."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 rounded-2xl p-4",
                style: {
                    background: "#fffaf1",
                    border: "1px dashed #e5c79d"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 760 170",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": "A row of 24 numbered houses behind Gate A. Houses 3 and 4 are green, the best case, closest to the gate. Houses 7 to 18 are amber, the average case. Houses 19 to 24 are red, the worst case, farthest from the gate.",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                id: "s8-gate",
                                markerWidth: "8",
                                markerHeight: "8",
                                refX: "6",
                                refY: "3",
                                orient: "auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0,0 L7,3 L0,6 Z",
                                    fill: "#b45309"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "8",
                            y: "54",
                            width: "42",
                            height: "48",
                            rx: "8",
                            fill: "#f6e3c8",
                            stroke: "#c2410c",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "29",
                            y: "83",
                            textAnchor: "middle",
                            fontSize: "12",
                            fontWeight: "800",
                            fill: "#a0410a",
                            children: "A"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "29",
                            y: "122",
                            textAnchor: "middle",
                            fontSize: "10",
                            fontWeight: "700",
                            fill: "#8a5a06",
                            children: "Gate A"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "52",
                            y1: "78",
                            x2: "62",
                            y2: "78",
                            stroke: "#b45309",
                            strokeWidth: "1.5",
                            markerEnd: "url(#s8-gate)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        Array.from({
                            length: 24
                        }, (_, i)=>i + 1).map((h)=>{
                            const z = houseZone(h);
                            const on = sel === h;
                            const x = 68 + (h - 1) * 28;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                onClick: ()=>setSel(h),
                                className: "cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: x,
                                        y: "54",
                                        width: "24",
                                        height: "48",
                                        rx: "5",
                                        fill: on ? "#f6ad3c" : z ? z.fill : "#faf3e6",
                                        stroke: on ? "#c2410c" : z ? z.stroke : "#e8d9bd",
                                        strokeWidth: on ? 3 : 1.4
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: x + 12,
                                        y: "82",
                                        textAnchor: "middle",
                                        fontSize: "9",
                                        fontWeight: "700",
                                        fill: on ? "#7c2d0a" : z ? z.text : "#b09a7a",
                                        children: h
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, h, true, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: 68 + 2 * 28,
                            y1: "138",
                            x2: 68 + 3 * 28 + 24,
                            y2: "138",
                            stroke: "#7c9a3e",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 68 + 2.5 * 28 + 12,
                            y: "154",
                            textAnchor: "middle",
                            fontSize: "10",
                            fontWeight: "800",
                            fill: "#5c7a24",
                            children: "3–4 · best"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: 68 + 6 * 28,
                            y1: "138",
                            x2: 68 + 17 * 28 + 24,
                            y2: "138",
                            stroke: "#e2b075",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 68 + 11.5 * 28 + 12,
                            y: "154",
                            textAnchor: "middle",
                            fontSize: "10",
                            fontWeight: "800",
                            fill: "#92600a",
                            children: "7–18 · average"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: 68 + 18 * 28,
                            y1: "138",
                            x2: 68 + 23 * 28 + 24,
                            y2: "138",
                            stroke: "#e6a08c",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 68 + 20.5 * 28 + 12,
                            y: "154",
                            textAnchor: "middle",
                            fontSize: "10",
                            fontWeight: "800",
                            fill: "#8c2f2f",
                            children: "19–24 · worst"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 min-h-[1.6rem] text-[.85rem] font-bold leading-relaxed text-[#a0410a]",
                "aria-live": "polite",
                children: status
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 115,
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
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 119,
                                columnNumber: 32
                            }, this),
                            " Lecture 21 · best case — minimal work"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 120,
                                columnNumber: 32
                            }, this),
                            " Lecture 21 · average case — typical work"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 121,
                                columnNumber: 32
                            }, this),
                            " Lecture 21 · worst case — maximum effort"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts8.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(SocietyLab, "Kg/V/xzf+lXsiqS7aKUGktDgkZ8=");
_c1 = SocietyLab;
/* ============================================================
   LECTURE 21 · FLAGSHIP — Big O growth curves
   ============================================================ */ const PLOT = {
    x0: 58,
    x1: 618,
    y0: 262,
    y1: 30
};
const BIGO_CURVES = [
    {
        label: "O(1)",
        color: "#7c9a3e",
        f: ()=>0.05,
        blurb: "constant — flat line, same effort whatever n is"
    },
    {
        label: "O(log n)",
        color: "#d97706",
        f: (t)=>0.30 * (Math.log2(1 + 9 * t) / Math.log2(10)),
        blurb: "logarithmic — slow growth, divide & conquer"
    },
    {
        label: "O(n)",
        color: "#c2410c",
        f: (t)=>0.56 * t,
        blurb: "linear — input doubles, time doubles"
    },
    {
        label: "O(n log n)",
        color: "#b45309",
        f: (t)=>0.72 * t * (Math.log2(1 + 9 * t) / Math.log2(10)),
        blurb: "linearithmic — moderate growth, faster than quadratic"
    },
    {
        label: "O(n²)",
        color: "#be4a4a",
        f: (t)=>0.86 * t * t,
        blurb: "quadratic — dramatic growth"
    },
    {
        label: "O(2ⁿ)",
        color: "#8c2f2f",
        f: (t)=>Math.pow(2, 6.2 * t) / Math.pow(2, 6.2),
        blurb: "exponential — explosive growth, impractical for large inputs"
    }
];
function curvePath(f) {
    const pts = [];
    for(let i = 0; i <= 64; i++){
        const t = i / 64;
        const x = PLOT.x0 + t * (PLOT.x1 - PLOT.x0);
        const y = PLOT.y0 - f(t) * (PLOT.y0 - PLOT.y1);
        pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(" ");
}
function BigOChart() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#c2410c"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "The growth chart — six classes, one axis"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                children: [
                    "Big O answers one question: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "“if the input grows, in what proportion does the time requirement grow?”"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 163,
                        columnNumber: 37
                    }, this),
                    " On this one shared axis — input size ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "n"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 164,
                        columnNumber: 80
                    }, this),
                    " running from",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "100 to 10 lakh"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    " records — the six classes pull apart. The flat ones stay flat; the explosive ones leave the planet."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 rounded-2xl p-4",
                style: {
                    background: "#fffaf1",
                    border: "1px dashed #e5c79d"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 660 300",
                        className: "h-auto w-full",
                        role: "img",
                        "aria-label": "Growth curves of six complexity classes over one shared axis of input size. O(1) is a flat green line. O(log n) rises slowly. O(n) rises in a straight proportional line. O(n log n) climbs moderately. O(n²) curves upward dramatically. O(2ⁿ) hugs the floor and then explodes past everything near the right edge.",
                        children: [
                            [
                                1,
                                2,
                                3,
                                4
                            ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: PLOT.x0,
                                    y1: PLOT.y0 - k * 48,
                                    x2: PLOT.x1,
                                    y2: PLOT.y0 - k * 48,
                                    stroke: "#ecd9bd",
                                    strokeWidth: "1",
                                    strokeDasharray: "4 5"
                                }, k, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: PLOT.x0,
                                y1: PLOT.y1 - 6,
                                x2: PLOT.x0,
                                y2: PLOT.y0,
                                stroke: "#b09a7a",
                                strokeWidth: "1.6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: PLOT.x0,
                                y1: PLOT.y0,
                                x2: PLOT.x1 + 12,
                                y2: PLOT.y0,
                                stroke: "#b09a7a",
                                strokeWidth: "1.6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: PLOT.x0 - 4,
                                y: "16",
                                fontSize: "11",
                                fontWeight: "700",
                                fill: "#8a5a06",
                                children: "work required ↑"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: PLOT.x1 + 2,
                                y: "284",
                                textAnchor: "end",
                                fontSize: "11",
                                fontWeight: "700",
                                fill: "#8a5a06",
                                children: "input size n →"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: PLOT.x0,
                                y: "284",
                                fontSize: "10",
                                fontWeight: "700",
                                fill: "#b09a7a",
                                children: "100"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: PLOT.x1,
                                y: "284",
                                textAnchor: "end",
                                fontSize: "10",
                                fontWeight: "700",
                                fill: "#b09a7a",
                                children: "10 lakh"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            BIGO_CURVES.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                    d: curvePath(c.f),
                                    fill: "none",
                                    stroke: c.color,
                                    strokeWidth: c.label === "O(2ⁿ)" || c.label === "O(n²)" ? 3.4 : 3,
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
                                        duration: 1.5,
                                        delay: 0.15 + i * 0.18,
                                        ease: "easeInOut"
                                    }
                                }, c.label, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex flex-wrap gap-2",
                        children: BIGO_CURVES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chip",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block h-2.5 w-2.5 rounded-full",
                                        style: {
                                            background: c.color
                                        },
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono-warm font-extrabold",
                                        children: c.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this),
                                    " · ",
                                    c.blurb
                                ]
                            }, c.label, true, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[.88rem] leading-relaxed text-[#6f5438]",
                children: [
                    "Read it the manager's way: at ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "n = 100"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 210,
                        columnNumber: 44
                    }, this),
                    " the curves almost touch — every algorithm feels fine. By ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "n = 10 lakh"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 211,
                        columnNumber: 24
                    }, this),
                    " the flat and logarithmic classes are still near the floor, while ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "O(n²)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 212,
                        columnNumber: 15
                    }, this),
                    " and ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "O(2ⁿ)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 212,
                        columnNumber: 42
                    }, this),
                    " have left the chart. That gap",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        children: "is"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    " algorithmic complexity: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "the growth rate, never the seconds."
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 213,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts8.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
_c2 = BigOChart;
/* ============================================================
   LECTURE 21 · MACHINE 2 — the ×10 question
   ============================================================ */ const SCALE_STEPS = [
    {
        n: "100 records",
        ops: {
            linear: "100 operations",
            quad: "10,000 operations",
            exp: "≈ 10³⁰ operations"
        }
    },
    {
        n: "10,000 records",
        ops: {
            linear: "10,000 operations",
            quad: "1 crore operations",
            exp: "≈ 10³⁰¹⁰ operations"
        }
    },
    {
        n: "10 lakh records",
        ops: {
            linear: "10 lakh operations",
            quad: "10 lakh crore operations",
            exp: "beyond any computer, ever"
        }
    }
];
function ScaleLab() {
    _s1();
    const [k, setK] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const s = SCALE_STEPS[k];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "chip",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                        className: "h-3.5 w-3.5",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 234,
                        columnNumber: 30
                    }, this),
                    " Lecture 21 · the ×10 question"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[.92rem] leading-relaxed text-[#2b2014]",
                children: [
                    "The lecture's stress test: the input jumps from ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "100 to 10 lakh"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 236,
                        columnNumber: 62
                    }, this),
                    " elements — how does each class answer? Pick a size and watch the bill."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: SCALE_STEPS.map((st, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        onClick: ()=>setK(i),
                        active: k === i,
                        children: st.n
                    }, st.n, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.35
                },
                className: "mt-4 grid gap-3 sm:grid-cols-3",
                children: [
                    {
                        cls: "O(n)",
                        tone: "#5c7a24",
                        bg: "rgba(124,154,62,.14)",
                        v: s.ops.linear
                    },
                    {
                        cls: "O(n²)",
                        tone: "#92600a",
                        bg: "rgba(217,119,6,.14)",
                        v: s.ops.quad
                    },
                    {
                        cls: "O(2ⁿ)",
                        tone: "#8c2f2f",
                        bg: "rgba(190,74,74,.14)",
                        v: s.ops.exp
                    }
                ].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl p-4",
                        style: {
                            background: b.bg
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono-warm text-[.78rem] font-extrabold",
                                style: {
                                    color: b.tone
                                },
                                children: b.cls
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[.95rem] font-extrabold text-[#3e2c1d]",
                                "aria-live": "polite",
                                children: b.v
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this)
                        ]
                    }, b.cls, true, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this))
            }, k, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[.85rem] leading-relaxed text-[#6f5438]",
                children: [
                    "Linear's bill grows ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "in proportion"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 263,
                        columnNumber: 34
                    }, this),
                    "; quadratic's grows ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "with the square"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 263,
                        columnNumber: 89
                    }, this),
                    "; exponential's is the chessboard again — by 10 lakh records it is not a budgeting problem, it is physics."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts8.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, this);
}
_s1(ScaleLab, "59SH2AuN/l9mIBI7r60AJQ9TbEA=");
_c3 = ScaleLab;
const COST_TONES = {
    fast: {
        bg: "rgba(124,154,62,.16)",
        color: "#4c6b1f"
    },
    log: {
        bg: "rgba(217,119,6,.15)",
        color: "#92600a"
    },
    linear: {
        bg: "rgba(194,65,12,.12)",
        color: "#a0410a"
    }
};
const DS_COSTS = [
    {
        key: "array",
        label: "Arrays",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        blurb: "The position is the address — direct access when indexed, sequential work when searched.",
        rows: [
            {
                op: "Access by index",
                cost: "O(1)",
                why: "direct jump to a known position",
                tone: "fast"
            },
            {
                op: "Search (linear)",
                cost: "O(n)",
                why: "position unknown → check elements sequentially",
                tone: "linear"
            },
            {
                op: "Insert at end",
                cost: "O(1)",
                why: "append — no other element moves",
                tone: "fast"
            },
            {
                op: "Insert at beginning / middle",
                cost: "O(n)",
                why: "every later element shifts to open the gap",
                tone: "linear"
            },
            {
                op: "Update by index / by search",
                cost: "O(1) / O(n)",
                why: "direct if indexed; search first if not",
                tone: "fast"
            },
            {
                op: "Delete by index / by search",
                cost: "O(1) / O(n)",
                why: "direct removal at a known index; search-first otherwise",
                tone: "fast"
            }
        ]
    },
    {
        key: "list",
        label: "Linked lists",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"],
        blurb: "Pointers make structure cheap — but reaching the spot means walking the chain.",
        rows: [
            {
                op: "Insert at end",
                cost: "O(1)",
                why: "connect the new node to the last node's pointer — pure rewiring",
                tone: "fast"
            },
            {
                op: "Insert at beginning",
                cost: "O(n)",
                why: "may require a search before the rewire",
                tone: "linear"
            },
            {
                op: "Insert in middle",
                cost: "O(n)",
                why: "must walk the chain to find the insertion point first",
                tone: "linear"
            }
        ]
    },
    {
        key: "stack",
        label: "Stacks",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        blurb: "The top is a fixed address — that is why the two core operations never slow down.",
        rows: [
            {
                op: "Push",
                cost: "O(1)",
                why: "always adds at the top; the location is fixed",
                tone: "fast"
            },
            {
                op: "Pop",
                cost: "O(1)",
                why: "always removes from the top; the location is fixed",
                tone: "fast"
            },
            {
                op: "Search",
                cost: "O(n)",
                why: "pop elements until the target surfaces",
                tone: "linear"
            }
        ]
    },
    {
        key: "queue",
        label: "Queues",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"],
        blurb: "Two fixed ends — rear for arrivals, front for departures.",
        rows: [
            {
                op: "Enqueue",
                cost: "O(1)",
                why: "always adds at the rear; the location is fixed",
                tone: "fast"
            },
            {
                op: "Dequeue",
                cost: "O(1)",
                why: "always removes from the front; the location is fixed",
                tone: "fast"
            },
            {
                op: "Search",
                cost: "O(n)",
                why: "dequeue elements until the target is found",
                tone: "linear"
            }
        ]
    },
    {
        key: "tree",
        label: "Trees",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$fork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitFork$3e$__["GitFork"],
        blurb: "General trees demand everything; a balanced BST halves the world at every level.",
        rows: [
            {
                op: "General traversal / search",
                cost: "O(n)",
                why: "may need to visit every node — proportional to tree size",
                tone: "linear"
            },
            {
                op: "BST search (balanced)",
                cost: "O(log n)",
                why: "each level halves the remaining candidates",
                tone: "log"
            }
        ]
    },
    {
        key: "graph",
        label: "Graphs",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"],
        blurb: "V vertices and E edges — a search may need to meet them all.",
        rows: [
            {
                op: "Traversal / search (BFS or DFS)",
                cost: "O(V + E)",
                why: "potentially every vertex and every edge — V = vertices, E = edges",
                tone: "linear"
            }
        ]
    }
];
function DSCostLab() {
    _s2();
    const [k, setK] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const ds = DS_COSTS[k];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#c2410c"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "What every operation costs"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                children: [
                    "Complexity is not just for algorithms — ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "every data structure has a price list"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 351,
                        columnNumber: 49
                    }, this),
                    ". Choose a structure and read its menu: the operation, the cost, and the reason behind it."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: DS_COSTS.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        onClick: ()=>setK(i),
                        active: k === i,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(d.icon, {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 358,
                                    columnNumber: 15
                                }, this),
                                " ",
                                d.label
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this)
                    }, d.key, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 356,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.35
                },
                className: "mt-5 rounded-2xl p-4",
                style: {
                    background: "#fffaf1",
                    border: "1px dashed #e5c79d"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.88rem] font-semibold leading-relaxed text-[#6f5438]",
                        "aria-live": "polite",
                        children: ds.blurb
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 grid gap-2.5",
                        children: ds.rows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1.5 rounded-xl bg-white/70 px-3.5 py-2.5 sm:flex-row sm:items-center sm:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[.88rem] font-bold text-[#3e2c1d] sm:w-56 sm:shrink-0",
                                        children: r.op
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 375,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-fit rounded-full px-2.5 py-0.5 font-mono-warm text-[.74rem] font-extrabold sm:w-28 sm:shrink-0 sm:text-center",
                                        style: {
                                            background: COST_TONES[r.tone].bg,
                                            color: COST_TONES[r.tone].color
                                        },
                                        children: r.cost
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 376,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[.83rem] leading-relaxed text-[#6f5438]",
                                        children: r.why
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, r.op, true, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 374,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 372,
                        columnNumber: 9
                    }, this)
                ]
            }, ds.key, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 363,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-3 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                        kind: "insight",
                        title: "Lecture 21 · why BST search halves",
                        children: [
                            "The BST property — ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "left subtree smaller, right subtree larger"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 387,
                                columnNumber: 30
                            }, this),
                            " — means every comparison sends you down exactly one branch, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "discarding half the remaining nodes"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 388,
                                columnNumber: 57
                            }, this),
                            ". Halve at every level and a thousand nodes cost about ten comparisons. (Let the tree go",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "unbalanced"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 390,
                                columnNumber: 11
                            }, this),
                            ", though, and it collapses toward linked-list behaviour — O(n).)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                        kind: "why",
                        title: "Lecture 21 · reading O(V + E)",
                        children: [
                            "Graph searches are priced in ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "two currencies"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 393,
                                columnNumber: 40
                            }, this),
                            ": ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "V"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 393,
                                columnNumber: 73
                            }, this),
                            ", the number of vertices, and ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "E"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 394,
                                columnNumber: 25
                            }, this),
                            ", the number of edges. Whether BFS or DFS, the worst case must potentially touch ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "all of both"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 395,
                                columnNumber: 29
                            }, this),
                            " — that is the whole cost of mapping a network."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts8.tsx",
        lineNumber: 345,
        columnNumber: 5
    }, this);
}
_s2(DSCostLab, "59SH2AuN/l9mIBI7r60AJQ9TbEA=");
_c4 = DSCostLab;
function AtbComplexitySection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "complexity",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Lecture 21 · Search algorithms & algorithmic complexity",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "grad-text",
                            children: "Algorithmic complexity"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 411,
                            columnNumber: 18
                        }, void 0),
                        " — measuring growth, not seconds"
                    ]
                }, void 0, true),
                lead: "Search is the heartbeat of the internet — every web search, product recommendation and train booking is a search, and users expect the answer instantly. Before picking a strategy, you need the ruler that measures algorithms: as the input grows from 100 rows to 10 lakh, how does the work grow?"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Why search matters",
                sub: "Every internet activity is a search — and businesses pay for its speed"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 418,
                                    columnNumber: 34
                                }, this),
                                " Lecture 21 · search is everywhere"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 418,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "Search engines, shopping platforms, booking systems, streaming services, product recommendations, train bookings — ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "every internet activity involves search in some form"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 421,
                                    columnNumber: 30
                                }, this),
                                ". That is why this module opens the subject: the algorithm behind the search box decides whether the user waits or smiles."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 419,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 grid gap-5 md:grid-cols-3",
                            children: [
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                                    tone: "#c2410c",
                                    chip: "Lecture 21 · practical relevance",
                                    t: "Practical relevance",
                                    d: "Web searches, product recommendations, train bookings — search in some form powers essentially everything online."
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"],
                                    tone: "#b45309",
                                    chip: "Lecture 21 · efficiency concerns",
                                    t: "Efficiency concerns",
                                    d: "Users expect immediate results. Delays mean poor user experience — and poor user experience means lost customers."
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                                    tone: "#7c9a3e",
                                    chip: "Lecture 21 · business perspective",
                                    t: "Business perspective",
                                    d: "Companies evaluate every solution on four checks: feasibility, cost (computing resources), speed of delivery, and scalability."
                                }
                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-4",
                                    style: {
                                        background: "#fffaf1",
                                        border: "1px solid #f0e2c8"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(c.icon, {
                                            className: "h-5 w-5",
                                            style: {
                                                color: c.tone
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 432,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.9rem] font-extrabold text-[#3e2c1d]",
                                            children: c.t
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1.5 text-[.85rem] leading-relaxed text-[#6f5438]",
                                            children: c.d
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "chip mt-3",
                                            children: c.chip
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 435,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.t, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 431,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 425,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 grid gap-3 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                                    kind: "insight",
                                    title: "Lecture 21 · growth rate, not seconds",
                                    children: [
                                        "Algorithmic complexity describes ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "how much time an algorithm requires as the input size increases"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 441,
                                            columnNumber: 48
                                        }, this),
                                        " — deliberately ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "not"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 442,
                                            columnNumber: 49
                                        }, this),
                                        " in seconds or hours. Seconds belong to the machine; the ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "growth rate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 443,
                                            columnNumber: 28
                                        }, this),
                                        " belongs to the algorithm. The question is always scalability: input 100 → 10 lakh — what happens to performance?"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 440,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                                    kind: "why",
                                    title: "Lecture 21 · time beats space",
                                    children: [
                                        "Different algorithms solve the same problem with vastly different resources — and when choosing,",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "time complexity is prioritized over space complexity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 448,
                                            columnNumber: 15
                                        }, this),
                                        ": faster responses improve user satisfaction, and satisfied users are the business. Managers and programmers alike need this lens to evaluate systems."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 439,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 417,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Best, average, worst",
                sub: "The three scenarios — measured in the lecture's housing society"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 456,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocietyLab, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 457,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 457,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                    source: "Concept check",
                    q: "A search usually lands somewhere in between the lucky and the unlucky run. That middle scenario is called the…",
                    options: [
                        "random case",
                        "average case — the typical amount of work",
                        "median runtime measured in seconds",
                        "space complexity"
                    ],
                    answer: 1,
                    explain: "Three scenarios are always analysed: best case (solution found with minimal work), worst case (maximum effort required), and average case (the typical amount of work, falling between the two). In the housing society, houses 7–18 play the average role."
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 459,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 458,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "Big O — the growth dial",
                sub: "One notation, one shared chart, six very different futures"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 464,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BigOChart, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 465,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 465,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScaleLab, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 466,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "4",
                title: "The complexity classes",
                sub: "Notation × name × behaviour × growth pattern"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 468,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 pt-4 md:px-6 md:pt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chip",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"], {
                                        className: "h-3.5 w-3.5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 472,
                                        columnNumber: 36
                                    }, this),
                                    " Lecture 21 · the six classes, fastest to slowest"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 472,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 471,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto p-4 md:p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "warm-table min-w-[720px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Notation"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 26
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 43
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Behaviour"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 56
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Growth pattern"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 74
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 476,
                                            columnNumber: 22
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            {
                                                n: "O(1)",
                                                name: "Constant",
                                                d: "Irrespective of input size, the effort remains the same",
                                                g: "Flat line"
                                            },
                                            {
                                                n: "O(log n)",
                                                name: "Logarithmic",
                                                d: "Work increases slowly — typical of divide-and-conquer algorithms",
                                                g: "Slow growth"
                                            },
                                            {
                                                n: "O(n)",
                                                name: "Linear",
                                                d: "Input size and time increase proportionally — input doubles, time doubles",
                                                g: "Straight line"
                                            },
                                            {
                                                n: "O(n log n)",
                                                name: "Linearithmic",
                                                d: "Slightly faster growth than linear — faster than O(n), slower than O(log n)",
                                                g: "Moderate growth"
                                            },
                                            {
                                                n: "O(n²)",
                                                name: "Quadratic",
                                                d: "Work increases dramatically — input 2 → effort 4; input 5 → effort 25",
                                                g: "Rapid growth"
                                            },
                                            {
                                                n: "O(2ⁿ)",
                                                name: "Exponential",
                                                d: "Extremely rapid growth — typically impractical for large inputs",
                                                g: "Very rapid growth"
                                            }
                                        ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-mono-warm font-extrabold text-[#a0410a]",
                                                        children: r.n
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 487,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: r.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: r.d
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: r.g
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, r.n, true, {
                                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                lineNumber: 486,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 477,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 475,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 474,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 470,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 469,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                            className: "h-5 w-5",
                                            style: {
                                                color: "#5c7a24"
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 502,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[.8rem] font-extrabold uppercase tracking-[.16em]",
                                            style: {
                                                color: "#5c7a24"
                                            },
                                            children: "Fast algorithms"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 503,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 501,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.9rem] leading-relaxed text-[#2b2014]",
                                    children: [
                                        "Low complexity = ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "slower growth rate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 506,
                                            columnNumber: 32
                                        }, this),
                                        " — the curve stays near the floor:"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 505,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-wrap gap-2",
                                    children: [
                                        "O(1)",
                                        "O(log n)",
                                        "O(n)"
                                    ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full px-3 py-1 font-mono-warm text-[.8rem] font-extrabold",
                                            style: {
                                                background: "rgba(124,154,62,.16)",
                                                color: "#4c6b1f"
                                            },
                                            children: c
                                        }, c, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 510,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 508,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 500,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 499,
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "h-5 w-5",
                                            style: {
                                                color: "#be4a4a"
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 518,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[.8rem] font-extrabold uppercase tracking-[.16em]",
                                            style: {
                                                color: "#be4a4a"
                                            },
                                            children: "Slow algorithms"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 519,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 517,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.9rem] leading-relaxed text-[#2b2014]",
                                    children: [
                                        "High complexity = ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "faster growth rate"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 522,
                                            columnNumber: 33
                                        }, this),
                                        " — the curve climbs the wall:"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 521,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-wrap gap-2",
                                    children: [
                                        "O(n²)",
                                        "O(2ⁿ)",
                                        "O(n³)"
                                    ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full px-3 py-1 font-mono-warm text-[.8rem] font-extrabold",
                                            style: {
                                                background: "rgba(190,74,74,.14)",
                                                color: "#8c2f2f"
                                            },
                                            children: c
                                        }, c, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 526,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 524,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 516,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 515,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 498,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "story",
                    title: "Lecture 21 · the chess legend — exponential by grains",
                    children: [
                        "The lecture's analogy for exponential blowup: a chessboard where",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "square 1 gets 1 grain, and every next square doubles it"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 535,
                            columnNumber: 11
                        }, this),
                        " — 1, 2, 4, 8, 16… By the back ranks the count is ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "astronomically large"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 536,
                            columnNumber: 35
                        }, this),
                        " (all 64 squares together hold about",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "1.8 × 10¹⁹ grains"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 537,
                            columnNumber: 11
                        }, this),
                        " — more rice than has ever been harvested). That is O(2ⁿ):",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "quickly unmanageable"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 538,
                            columnNumber: 11
                        }, this),
                        ", no matter how fast the machine."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 533,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 532,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "5",
                title: "What operations cost",
                sub: "The price list of every structure you already know"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 542,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DSCostLab, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 543,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 543,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "6",
                title: "The business ladder",
                sub: "Which classes businesses prefer — and the heuristics escape hatch"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 545,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 548,
                                    columnNumber: 34
                                }, this),
                                " Lecture 21 · business preference order"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 548,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-3",
                            children: [
                                {
                                    r: 1,
                                    cls: "O(1)",
                                    verdict: "Ideal — but rarely achievable in real scenarios",
                                    tone: "#4c6b1f",
                                    bg: "rgba(124,154,62,.14)"
                                },
                                {
                                    r: 2,
                                    cls: "O(log n)",
                                    verdict: "Excellent — highly scalable",
                                    tone: "#4c6b1f",
                                    bg: "rgba(124,154,62,.12)"
                                },
                                {
                                    r: 3,
                                    cls: "O(n log n)",
                                    verdict: "Good — manageable for most applications",
                                    tone: "#92600a",
                                    bg: "rgba(217,119,6,.12)"
                                },
                                {
                                    r: 4,
                                    cls: "O(n)",
                                    verdict: "Acceptable — straightforward scaling",
                                    tone: "#92600a",
                                    bg: "rgba(217,119,6,.10)"
                                },
                                {
                                    r: 5,
                                    cls: "O(n²) · O(2ⁿ) · O(n³)",
                                    verdict: "Problematic — avoid unless truly necessary",
                                    tone: "#8c2f2f",
                                    bg: "rgba(190,74,74,.12)"
                                }
                            ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: -18
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: i * 0.08
                                    },
                                    className: "flex items-center gap-3 rounded-2xl p-4",
                                    style: {
                                        background: s.bg
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f59e0b] to-[#c2410c] text-[.8rem] font-extrabold text-white",
                                            "aria-hidden": true,
                                            children: s.r
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 566,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-32 shrink-0 font-mono-warm text-[.85rem] font-extrabold",
                                            style: {
                                                color: s.tone
                                            },
                                            children: s.cls
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 567,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[.88rem] font-semibold text-[#3e2c1d]",
                                            children: s.verdict
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 568,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, s.r, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 557,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 549,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 547,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 546,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "why",
                    title: "Lecture 21 · when high complexity is unavoidable — heuristics",
                    children: [
                        "Sometimes O(n²) or exponential work is simply the problem you have. Businesses then reach for",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "heuristics — rules of thumb that provide good-enough (though not optimal) solutions"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 577,
                            columnNumber: 11
                        }, this),
                        " ",
                        "rather than perfect answers. It is a pragmatic trade: computational feasibility on one side,",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "practical results"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 579,
                            columnNumber: 11
                        }, this),
                        " on the other."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 575,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 574,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Concept check",
                            q: "Big O notation answers which question?",
                            options: [
                                "How many seconds does the algorithm take on my laptop?",
                                "If the input grows, in what proportion does the time requirement grow?",
                                "How many lines of code does the algorithm need?",
                                "How much memory does one run consume?"
                            ],
                            answer: 1,
                            explain: "Big O describes the ORDER OF MAGNITUDE of work growth with input size — never wall-clock seconds, which depend on the machine. It is the manager's ruler: compare algorithms by how their time scales, from 100 records to 10 lakh."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 585,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 584,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Concept check",
                            q: "An O(n²) routine runs on an input of 5. How much effort?",
                            options: [
                                "5",
                                "10",
                                "25",
                                "32"
                            ],
                            answer: 2,
                            explain: "Quadratic means effort = input²: input 2 → effort 4; input 5 → effort 25. The work grows dramatically — and that is why O(n²) sits on the 'avoid unless necessary' rung of the business ladder."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 590,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 589,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Concept check",
                            q: "Why is searching a balanced binary search tree O(log n)?",
                            options: [
                                "Because the tree secretly stores a sorted array",
                                "Because each level halves the remaining candidates — left subtree smaller, right subtree larger",
                                "Because trees are always small in practice",
                                "Because the search uses a queue to sweep levels"
                            ],
                            answer: 1,
                            explain: "The BST property (left < parent < right) lets every comparison discard one whole branch — the problem subdivides into one relevant sub-problem, halving at every level. Warning: an UNBALANCED BST loses the halving and degrades toward O(n), behaving like a linked list."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 595,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 594,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Concept check",
                            q: "Search inside a stack costs O(n) because…",
                            options: [
                                "stack elements are unsorted",
                                "you must pop elements until the target surfaces",
                                "stacks are stored as linked lists",
                                "the top keeps moving around memory"
                            ],
                            answer: 1,
                            explain: "Push and pop are O(1) — the top is a fixed location. But searching means popping elements one by one until the target appears (a queue's mirror image: dequeue until found). The convenience of fixed ends is also the prison of search."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 600,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 599,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 583,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Practice"], {
                    title: "Pen-and-paper drills — complexity",
                    items: [
                        {
                            q: "Rank the six classes fastest to slowest from memory, then name the growth pattern of each.",
                            hint: "Constant → logarithmic → linear → linearithmic → quadratic → exponential; flat · slow · straight · moderate · rapid · very rapid."
                        },
                        {
                            q: "The chess legend: square 1 = 1 grain, each square doubles. How many grains on square 10? On square 64 alone?",
                            hint: "Square n holds 2^(n−1): square 10 → 512 grains; square 64 → about 9.2 × 10¹⁸."
                        },
                        {
                            q: "For n = 10,000, count the operations of O(n), O(n log n) and O(n²).",
                            hint: "10⁴ · about 1.3 × 10⁵ (log₂ 10,000 ≈ 13.3) · 10⁸ — feel the gap before the chart even draws it."
                        },
                        {
                            q: "Your marketplace must answer searches in milliseconds over 10 lakh products. Which classes are acceptable, which are out — and what do you do about the ones you cannot avoid?",
                            hint: "O(1)/O(log n) comfortable, O(n) borderline, O(n²)/O(2ⁿ) out — and for the unavoidable ones, heuristics: good-enough beats perfect-never."
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 606,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 605,
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 615,
                                    columnNumber: 34
                                }, this),
                                " Lecture 21 · key takeaways"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 615,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 614,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Algorithmic complexity measures the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "growth rate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 618,
                                        columnNumber: 49
                                    }, void 0),
                                    ", not absolute time — seconds belong to the machine, growth belongs to the algorithm."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Big O notation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 619,
                                        columnNumber: 13
                                    }, void 0),
                                    " enables comparing algorithms across input sizes: “if the input grows, in what proportion does the time requirement grow?”"
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Scalability is the point — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "how does performance change as data volume increases"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 620,
                                        columnNumber: 40
                                    }, void 0),
                                    " from 100 to 10 lakh?"
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "choice of algorithm directly impacts system responsiveness and user experience"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 621,
                                        columnNumber: 17
                                    }, void 0),
                                    " — which is why time complexity is prioritized over space."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "O(1) and O(log n) are preferable"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 622,
                                        columnNumber: 13
                                    }, void 0),
                                    "; quadratic and exponential complexities should be avoided — or tamed with heuristics."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Knowing ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "data-structure operation costs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 623,
                                        columnNumber: 21
                                    }, void 0),
                                    " (arrays, lists, stacks, queues, trees, graphs) is fundamental to choosing appropriate solutions."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 617,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 613,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts8.tsx",
        lineNumber: 408,
        columnNumber: 5
    }, this);
}
_c5 = AtbComplexitySection;
/* ============================================================
   LECTURE 22 · FLAGSHIP — the search race
   ============================================================ */ const RACE_VALS = [
    4,
    9,
    14,
    19,
    24,
    29,
    34,
    39,
    44,
    49,
    54,
    59,
    64,
    69,
    74,
    79
];
const RACE_TARGET = 49;
const RACE_LINEAR = RACE_VALS.map(_c6 = (v, i)=>({
        idx: i,
        kind: i === 9 ? "found" : "probe",
        note: i === 9 ? `${v} = ${RACE_TARGET} → found at last!` : `${v} < ${RACE_TARGET} → move on to the next cell`
    }));
_c7 = RACE_LINEAR;
const RACE_BINARY = [
    {
        idx: 7,
        kind: "probe",
        note: "middle of 0–15 → 39 < 49 → the target must be in the RIGHT half",
        lo: 0,
        hi: 15
    },
    {
        idx: 11,
        kind: "probe",
        note: "middle of 8–15 → 59 > 49 → back into the LEFT half",
        lo: 8,
        hi: 15
    },
    {
        idx: 9,
        kind: "found",
        note: "middle of 8–10 → 49 = 49 → found in three probes!",
        lo: 8,
        hi: 10
    }
];
const RACE_JUMP = [
    {
        idx: 0,
        kind: "probe",
        note: "block 0 → 4 < 49 → jump √16 = 4 ahead"
    },
    {
        idx: 4,
        kind: "probe",
        note: "24 < 49 → jump 4 again"
    },
    {
        idx: 8,
        kind: "probe",
        note: "44 < 49 → jump 4 again"
    },
    {
        idx: 12,
        kind: "overshoot",
        note: "64 > 49 → overshot the target! step back to the block start (8)"
    },
    {
        idx: 8,
        kind: "probe",
        note: "back inside the block → 44 < 49 → linear, one step forward"
    },
    {
        idx: 9,
        kind: "found",
        note: "49 = 49 → found in six probes"
    }
];
const RACE_STRATEGIES = [
    {
        key: "linear",
        label: "Linear",
        steps: RACE_LINEAR,
        moral: "One-by-one from the first cell — works on anything, costs a probe per element."
    },
    {
        key: "binary",
        label: "Binary",
        steps: RACE_BINARY,
        moral: "Halve the window at every probe — but only because the data is sorted."
    },
    {
        key: "jump",
        label: "Jump",
        steps: RACE_JUMP,
        moral: "Leap in √n blocks, step back, then walk linearly — the manageable middle ground."
    }
];
function SearchRace() {
    _s3();
    const [strategy, setStrategy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("linear");
    const [replay, setReplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#c2410c"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 674,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold md:text-2xl",
                        children: "The search race — one target, three strategies"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 675,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 673,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                children: [
                    "A sorted array of ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "16 cells"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 678,
                        columnNumber: 27
                    }, this),
                    " hides one value: ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "49"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 678,
                        columnNumber: 70
                    }, this),
                    ". Watch the same target hunted by three strategies — ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "linear"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 679,
                        columnNumber: 45
                    }, this),
                    " sweeping cell by cell,",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "binary"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 680,
                        columnNumber: 9
                    }, this),
                    " halving the range, ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "jump"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 680,
                        columnNumber: 52
                    }, this),
                    " leaping in √n blocks. The array never changes; the bill does."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 677,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center gap-2",
                children: [
                    RACE_STRATEGIES.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                            onClick: ()=>setStrategy(s.key),
                            active: strategy === s.key,
                            children: s.label
                        }, s.key, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 685,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OpBtn, {
                        onClick: ()=>setReplay((r)=>r + 1),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 688,
                                    columnNumber: 62
                                }, this),
                                " replay"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 688,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 687,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 683,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RaceTrack, {
                strategy: strategy
            }, `${strategy}-${replay}`, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 692,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts8.tsx",
        lineNumber: 672,
        columnNumber: 5
    }, this);
}
_s3(SearchRace, "qRnpEEv9Cjsrnj7wsQm7miTMtN4=");
_c8 = SearchRace;
function RaceTrack({ strategy }) {
    _s4();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const strat = RACE_STRATEGIES.find((s)=>s.key === strategy) ?? RACE_STRATEGIES[0];
    const steps = strat.steps;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RaceTrack.useEffect": ()=>{
            if (step >= steps.length - 1) return;
            const t = setTimeout({
                "RaceTrack.useEffect.t": ()=>setStep({
                        "RaceTrack.useEffect.t": (s)=>s + 1
                    }["RaceTrack.useEffect.t"])
            }["RaceTrack.useEffect.t"], 950);
            return ({
                "RaceTrack.useEffect": ()=>clearTimeout(t)
            })["RaceTrack.useEffect"];
        }
    }["RaceTrack.useEffect"], [
        step,
        steps
    ]);
    const visible = steps.slice(0, step + 1);
    const done = step >= steps.length - 1;
    const found = steps[step]?.kind === "found";
    const probeOf = new Map();
    visible.forEach((st, i)=>probeOf.set(st.idx, i + 1));
    const win = steps[step]?.lo !== undefined ? {
        lo: steps[step].lo,
        hi: steps[step].hi
    } : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 rounded-2xl p-4",
                style: {
                    background: "#fffaf1",
                    border: "1px dashed #e5c79d"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 830 158",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": `A sorted array of sixteen values from 4 to 79 being searched for 49 by ${strat.label.toLowerCase()} search. Probed cells light up in sequence until the target cell at index 9 is found.`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                id: "s8-race",
                                markerWidth: "8",
                                markerHeight: "8",
                                refX: "6",
                                refY: "3",
                                orient: "auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0,0 L7,3 L0,6 Z",
                                    fill: "#c2410c"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 722,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 721,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 720,
                            columnNumber: 11
                        }, this),
                        win && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                            x: 16 + win.lo * 50 - 4,
                            y: "50",
                            width: (win.hi - win.lo) * 50 + 50,
                            height: "58",
                            rx: "10",
                            fill: "#f59e0b",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 0.18
                            },
                            transition: {
                                duration: 0.4
                            }
                        }, `${win.lo}-${win.hi}`, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 727,
                            columnNumber: 13
                        }, this),
                        RACE_VALS.map((v, i)=>{
                            const x = 16 + i * 50;
                            const p = probeOf.get(i);
                            const isFound = found && steps[step].idx === i;
                            const isOvershoot = p !== undefined && steps[Math.min(p, visible.length) - 1]?.kind === "overshoot";
                            const fill = isFound ? "#dbe7c0" : p !== undefined && !isOvershoot ? "#f6ad3c" : p !== undefined ? "#fbe9e4" : "#fde8cf";
                            const stroke = isFound ? "#7c9a3e" : p !== undefined ? isOvershoot ? "#e6a08c" : "#c2410c" : "#e2b075";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    p !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                        cx: x + 21,
                                        cy: "38",
                                        r: "10",
                                        fill: isOvershoot ? "#e6a08c" : "#c2410c",
                                        initial: {
                                            scale: 0,
                                            opacity: 0
                                        },
                                        animate: {
                                            scale: 1,
                                            opacity: 1
                                        },
                                        transition: {
                                            duration: 0.3
                                        },
                                        style: {
                                            transformOrigin: `${x + 21}px 38px`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                            children: `probe ${p}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 758,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 751,
                                        columnNumber: 19
                                    }, this),
                                    p !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                                        x: x + 21,
                                        y: "42",
                                        textAnchor: "middle",
                                        fontSize: "10",
                                        fontWeight: "800",
                                        fill: "#fff7ec",
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        transition: {
                                            duration: 0.3
                                        },
                                        children: p
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 762,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                                        x: x,
                                        y: "54",
                                        width: "42",
                                        height: "48",
                                        rx: "8",
                                        fill: fill,
                                        stroke: stroke,
                                        strokeWidth: p !== undefined ? 2.5 : 1.4,
                                        animate: {
                                            fill,
                                            stroke,
                                            strokeWidth: p !== undefined ? 2.5 : 1.4
                                        },
                                        transition: {
                                            duration: 0.35
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 767,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                                        x: x + 21,
                                        y: "84",
                                        textAnchor: "middle",
                                        fontSize: "14",
                                        fontWeight: "800",
                                        animate: {
                                            fill: isFound ? "#44621d" : "#3e2c1d"
                                        },
                                        transition: {
                                            duration: 0.35
                                        },
                                        children: v
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 773,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: x + 21,
                                        y: "122",
                                        textAnchor: "middle",
                                        fontSize: "9",
                                        fontWeight: "700",
                                        fill: "#b09a7a",
                                        children: i
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 779,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 749,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                            x1: 16 + 9 * 50 + 21,
                            y1: "132",
                            x2: 16 + 9 * 50 + 21,
                            y2: "140",
                            stroke: "#c2410c",
                            strokeWidth: "1.6",
                            markerEnd: "url(#s8-race)",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 0.6,
                                duration: 0.5
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 784,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                            x: 16 + 9 * 50 + 21,
                            y: "154",
                            textAnchor: "middle",
                            fontSize: "10",
                            fontWeight: "800",
                            fill: "#a0410a",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 0.6,
                                duration: 0.5
                            },
                            children: "target 49 · index 9"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 789,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 718,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 717,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 min-h-[2.4rem] text-[.88rem] font-bold leading-relaxed text-[#a0410a]",
                "aria-live": "polite",
                children: `Probe ${step + 1}/${steps.length} · index ${steps[step].idx} → ${steps[step].note}`
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 797,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex max-h-24 flex-wrap gap-1.5 overflow-y-auto",
                "aria-hidden": true,
                children: visible.map((st, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full px-2.5 py-0.5 font-mono-warm text-[.7rem] font-bold",
                        style: {
                            background: st.kind === "found" ? "rgba(124,154,62,.16)" : st.kind === "overshoot" ? "rgba(190,74,74,.12)" : "rgba(245,158,11,.14)",
                            color: st.kind === "found" ? "#4c6b1f" : st.kind === "overshoot" ? "#8c2f2f" : "#92600a"
                        },
                        children: [
                            i + 1,
                            "·idx ",
                            st.idx
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 802,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 800,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[.85rem] leading-relaxed text-[#6f5438]",
                children: done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Final bill:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 813,
                            columnNumber: 13
                        }, this),
                        " ",
                        strat.label,
                        " needed ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: [
                                steps.length,
                                " probe",
                                steps.length === 1 ? "" : "s"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 813,
                            columnNumber: 63
                        }, this),
                        " here. ",
                        strat.moral,
                        " On this same array: linear 10 · binary 3 · jump 6 — the strategy, not the data, sets the price."
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: strat.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 815,
                            columnNumber: 13
                        }, this),
                        " — ",
                        strat.moral
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 811,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s4(RaceTrack, "NrA/6fXDv8xclF3w9SjbVQPSnu8=");
_c9 = RaceTrack;
/* ============================================================
   LECTURE 22 · hash-based search mini-map
   ============================================================ */ function HashMini() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 720 176",
        className: "h-auto w-full",
        role: "img",
        "aria-label": "A hash table with ten buckets numbered 0 to 9. The key 71 hashes by mod 10 to bucket 1, landing directly. Bucket 7 holds a collision chain: key 27 linked to key 7 like a linked list.",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                        id: "s8-hash",
                        markerWidth: "8",
                        markerHeight: "8",
                        refX: "6",
                        refY: "3",
                        orient: "auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0,0 L7,3 L0,6 Z",
                            fill: "#c2410c"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 832,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 831,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                        id: "s8-hashg",
                        markerWidth: "8",
                        markerHeight: "8",
                        refX: "6",
                        refY: "3",
                        orient: "auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0,0 L7,3 L0,6 Z",
                            fill: "#7c9a3e"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 835,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 834,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 830,
                columnNumber: 7
            }, this),
            Array.from({
                length: 10
            }, (_, i)=>{
                const x = 20 + i * 68;
                const hit = i === 1, chain = i === 7;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: x,
                            y: "24",
                            width: "56",
                            height: "36",
                            rx: "8",
                            fill: hit ? "#dbe7c0" : chain ? "#f6ad3c" : "#fde8cf",
                            stroke: hit ? "#7c9a3e" : chain ? "#c2410c" : "#e2b075",
                            strokeWidth: hit || chain ? 2.5 : 1.4
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 843,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: x + 28,
                            y: "47",
                            textAnchor: "middle",
                            fontSize: "13",
                            fontWeight: "800",
                            fill: "#3e2c1d",
                            children: i
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 846,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 842,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "52",
                y: "140",
                fontSize: "12",
                fontWeight: "800",
                fill: "#4c6b1f",
                children: "71 mod 10 = 1"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 851,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "118",
                y1: "136",
                x2: "118",
                y2: "66",
                stroke: "#7c9a3e",
                strokeWidth: "2",
                markerEnd: "url(#s8-hashg)"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 852,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "494",
                y1: "60",
                x2: "494",
                y2: "88",
                stroke: "#c2410c",
                strokeWidth: "1.6",
                markerEnd: "url(#s8-hash)"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 854,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "466",
                y: "92",
                width: "56",
                height: "32",
                rx: "8",
                fill: "#fffaf1",
                stroke: "#c2410c",
                strokeWidth: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 855,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "494",
                y: "113",
                textAnchor: "middle",
                fontSize: "12",
                fontWeight: "800",
                fill: "#3e2c1d",
                children: "27"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 856,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "522",
                y1: "108",
                x2: "540",
                y2: "108",
                stroke: "#c2410c",
                strokeWidth: "1.6",
                markerEnd: "url(#s8-hash)"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 857,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "544",
                y: "92",
                width: "56",
                height: "32",
                rx: "8",
                fill: "#fffaf1",
                stroke: "#c2410c",
                strokeWidth: "1.6"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 858,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "572",
                y: "113",
                textAnchor: "middle",
                fontSize: "12",
                fontWeight: "800",
                fill: "#3e2c1d",
                children: "7"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 859,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "612",
                y: "113",
                fontSize: "10.5",
                fontWeight: "700",
                fill: "#8c2f2f",
                children: "← collision"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 860,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "20",
                y: "166",
                fontSize: "11",
                fontWeight: "700",
                fill: "#8a5a06",
                children: "the hash computes the address directly · collided keys chain like a linked list — walk it linearly"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 861,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts8.tsx",
        lineNumber: 828,
        columnNumber: 5
    }, this);
}
_c10 = HashMini;
function AtbSearchSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "search",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Lecture 22 · Search algorithms overview",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "grad-text",
                            children: "Five ways to find"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 877,
                            columnNumber: 18
                        }, void 0),
                        " — the search strategies"
                    ]
                }, void 0, true),
                lead: "Linear, binary, jump, exponential, hash-based — five answers to the same question, with wildly different bills. The trick of the lecture: match the strategy to the data's size, sorting status, distribution and growth rate."
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 875,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Linear search",
                sub: "One by one, from the very first element"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 881,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$footprints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Footprints$3e$__["Footprints"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 884,
                                    columnNumber: 34
                                }, this),
                                " Lecture 22 · sequential, no preconditions"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 884,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "Linear search walks the data ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "sequentially, one element at a time, from the first element"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 886,
                                    columnNumber: 42
                                }, this),
                                ": compare each element with the search term; no match → move to the next. Its superpower is that it makes ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "no demands"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 888,
                                    columnNumber: 41
                                }, this),
                                " — and its bill is the growth of the data itself."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 885,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 grid gap-3 md:grid-cols-3",
                            children: [
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
                                    tone: "#5c7a24",
                                    t: "Sorted or unsorted",
                                    d: "Both work — order is never required."
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"],
                                    tone: "#c2410c",
                                    t: "Any structure",
                                    d: "Arrays, linked lists, trees, graphs — anywhere you can visit elements one by one."
                                },
                                {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"],
                                    tone: "#b45309",
                                    t: "O(n) — and its limit",
                                    d: "Effort grows in proportion with data size: fine for hundreds, time-consuming for millions of records."
                                }
                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-4",
                                    style: {
                                        background: "#fffaf1",
                                        border: "1px solid #f0e2c8"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(c.icon, {
                                            className: "h-5 w-5",
                                            style: {
                                                color: c.tone
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 898,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.9rem] font-extrabold text-[#3e2c1d]",
                                            children: c.t
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 899,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1.5 text-[.85rem] leading-relaxed text-[#6f5438]",
                                            children: c.d
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 900,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.t, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 897,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 891,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            className: "mt-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepsFlow"], {
                                steps: [
                                    {
                                        label: "Start",
                                        sub: "at the first element",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                            className: "h-4 w-4",
                                            style: {
                                                color: "#c2410c"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 906,
                                            columnNumber: 68
                                        }, void 0)
                                    },
                                    {
                                        label: "Compare",
                                        sub: "element = search term?",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "h-4 w-4",
                                            style: {
                                                color: "#c2410c"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 907,
                                            columnNumber: 72
                                        }, void 0)
                                    },
                                    {
                                        label: "Yes → stop",
                                        sub: "report the position",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-4 w-4",
                                            style: {
                                                color: "#5c7a24"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 908,
                                            columnNumber: 72
                                        }, void 0)
                                    },
                                    {
                                        label: "No → next",
                                        sub: "move one element forward",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-4 w-4",
                                            style: {
                                                color: "#c2410c"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 909,
                                            columnNumber: 76
                                        }, void 0)
                                    },
                                    {
                                        label: "Repeat",
                                        sub: "until found or data ends",
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            className: "h-4 w-4",
                                            style: {
                                                color: "#c2410c"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 910,
                                            columnNumber: 73
                                        }, void 0)
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 905,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 904,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 883,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 882,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Binary search",
                sub: "Sorted data only — halve, compare, repeat"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 916,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$split$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Split$3e$__["Split"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 919,
                                    columnNumber: 34
                                }, this),
                                " Lecture 22 · the halving algorithm"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 919,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "Binary search divides a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "sorted list"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 921,
                                    columnNumber: 37
                                }, this),
                                " into halves to locate an element. Start at the",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "middle element"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 922,
                                    columnNumber: 13
                                }, this),
                                " and compare with the search term: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "if smaller, search the right half"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 922,
                                    columnNumber: 79
                                }, this),
                                "; ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "if larger, search the left half"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 923,
                                    columnNumber: 34
                                }, this),
                                " — then repeat with the middle of the remaining segment. Every probe throws away half of what is left → ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "O(log n)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 924,
                                    columnNumber: 86
                                }, this),
                                ", the divide-and-conquer signature from Lecture 21."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 920,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-wrap gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-3.5 w-3.5",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 928,
                                            columnNumber: 36
                                        }, this),
                                        " requirement · sorted in increasing order"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 928,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "h-3.5 w-3.5",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 929,
                                            columnNumber: 36
                                        }, this),
                                        " cost · O(log n)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 929,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                            className: "h-3.5 w-3.5",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 930,
                                            columnNumber: 36
                                        }, this),
                                        " wider applicability than the BST"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 930,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 927,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 918,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 917,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 pt-4 md:px-6 md:pt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$split$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Split$3e$__["Split"], {
                                            className: "h-3.5 w-3.5",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 937,
                                            columnNumber: 36
                                        }, this),
                                        " Lecture 22 · binary search vs binary search tree"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 937,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 max-w-4xl text-[.9rem] leading-relaxed text-[#2b2014]",
                                    children: [
                                        "The classic exam trap — ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "an algorithm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 939,
                                            columnNumber: 39
                                        }, this),
                                        " and ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "a data structure"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 939,
                                            columnNumber: 73
                                        }, this),
                                        " that share a name. Five aspects, five differences:"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 938,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 936,
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
                                                    children: "Aspect"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                    lineNumber: 945,
                                                    columnNumber: 26
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Binary search"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                    lineNumber: 945,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Binary search tree (BST)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                    lineNumber: 945,
                                                    columnNumber: 63
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 945,
                                            columnNumber: 22
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 945,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Definition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 948,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "An algorithm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 949,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "A data structure"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 950,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                lineNumber: 947,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Requirement"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 953,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "A sorted list is needed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 954,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Maintains order through its structure"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 955,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                lineNumber: 952,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Complexity (balanced)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 958,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "O(log n)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 959,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "O(log n)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 960,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                lineNumber: 957,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Complexity (unbalanced)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 963,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "N/A"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 964,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "O(n) — behaves like a linked list"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 965,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                lineNumber: 962,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Application"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 968,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Wider applicability — any sorted list"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 969,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Specific tree structure"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 970,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                lineNumber: 967,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 946,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 944,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 943,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 935,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 934,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "warn",
                    title: "Lecture 22 · the unbalanced trap",
                    children: [
                        "A BST earns its O(log n) only while it stays ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "balanced"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 979,
                            columnNumber: 56
                        }, this),
                        ". Let it grow lopsided — every new value larger than the last — and the branches stretch into a chain: the tree",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "degrades to O(n), behaving like a linked list"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 981,
                            columnNumber: 11
                        }, this),
                        ". The algorithm is not broken; the structure stopped guaranteeing halves."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 978,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 977,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "Jump search",
                sub: "Fixed leaps of √n — then walk the block"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 986,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gauge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gauge$3e$__["Gauge"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 989,
                                    columnNumber: 34
                                }, this),
                                " Lecture 22 · blocks of √n"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 989,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "Jump search leaps by a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "fixed number of positions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 991,
                                    columnNumber: 36
                                }, this),
                                " instead of checking sequentially — and the fixed number is ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "√n"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 992,
                                    columnNumber: 52
                                }, this),
                                ", the square root of the data size:",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "100 elements → jumps of 10"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 993,
                                    columnNumber: 13
                                }, this),
                                "; ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "9 elements → jumps of 3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 993,
                                    columnNumber: 58
                                }, this),
                                ". It needs",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "sorted data"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 994,
                                    columnNumber: 13
                                }, this),
                                ". The process:"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 990,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "mt-4 grid gap-2.5 text-[.9rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "Jump forward by fixed intervals until the value exceeds the search term.",
                                "Return to the previous position — the start of the block that must hold the target.",
                                "Perform a linear search forward from that point until the term is found."
                            ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f59e0b] to-[#c2410c] text-[.7rem] font-bold text-white",
                                            "aria-hidden": true,
                                            children: i + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 1003,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: s
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 1004,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1002,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 996,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-[.9rem] leading-relaxed text-[#6f5438]",
                            children: [
                                "Cost: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "O(√n)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1009,
                                    columnNumber: 19
                                }, this),
                                " — the data splits into ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "√n blocks"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1009,
                                    columnNumber: 65
                                }, this),
                                ", dividing the problem into ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "manageable sub-problems"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1010,
                                    columnNumber: 26
                                }, this),
                                " without the large jumps of binary search."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1008,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 988,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 987,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "4",
                title: "Exponential search",
                sub: "Jumps that double — then binary inside the block"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 1015,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1018,
                                    columnNumber: 34
                                }, this),
                                " Lecture 22 · 1, 2, 4, 8, 16…"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1018,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "Exponential search also needs ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "sorted data"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1020,
                                    columnNumber: 43
                                }, this),
                                " — but its jumps",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "double as they go"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1021,
                                    columnNumber: 13
                                }, this),
                                ": 1, 2, 4, 8, 16… until the value exceeds the search term. Then it performs a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "binary search inside that identified block"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1022,
                                    columnNumber: 27
                                }, this),
                                ". The combination costs",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "O(log n)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1023,
                                    columnNumber: 13
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1019,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-3 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-4",
                                    style: {
                                        background: "rgba(217,119,6,.10)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.78rem] font-extrabold uppercase tracking-[.14em]",
                                            style: {
                                                color: "#92600a"
                                            },
                                            children: "Jump search"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 1027,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1.5 text-[.88rem] leading-relaxed text-[#2b2014]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Fixed-size"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                    lineNumber: 1029,
                                                    columnNumber: 17
                                                }, this),
                                                " jumps of √n, ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "linear"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                    lineNumber: 1029,
                                                    columnNumber: 58
                                                }, this),
                                                " search within blocks · O(√n)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 1028,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1026,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-4",
                                    style: {
                                        background: "rgba(124,154,62,.12)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.78rem] font-extrabold uppercase tracking-[.14em]",
                                            style: {
                                                color: "#4c6b1f"
                                            },
                                            children: "Exponential search"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 1033,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1.5 text-[.88rem] leading-relaxed text-[#2b2014]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Increasing"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                    lineNumber: 1035,
                                                    columnNumber: 17
                                                }, this),
                                                " jumps (doubling), ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "binary"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                    lineNumber: 1035,
                                                    columnNumber: 63
                                                }, this),
                                                " search within blocks · O(log n)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 1034,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1032,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1025,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-[.9rem] leading-relaxed text-[#6f5438]",
                            children: [
                                "Built for ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "very large and continuously growing databases"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1040,
                                    columnNumber: 23
                                }, this),
                                " — where nobody knows the final size, but doubling bounds always catch up with it."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1039,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 1017,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 1016,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                    source: "Concept check",
                    q: "The real difference between jump search and exponential search?",
                    options: [
                        "Exponential uses fixed jumps; jump search uses growing jumps",
                        "Exponential doubles its jumps and binary-searches inside the block; jump search uses fixed √n jumps with linear search inside",
                        "Exponential needs no sorting; jump search does",
                        "They are the same algorithm under two names"
                    ],
                    answer: 1,
                    explain: "Two dials differ: jump SIZE (fixed √n vs doubling 1, 2, 4, 8, 16…) and the IN-BLOCK method (linear vs binary). Both need sorted data; the doubling-plus-binary combination is what lifts exponential search to O(log n) — and makes it ideal for rapidly growing databases."
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 1046,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 1045,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "5",
                title: "Hash-based search",
                sub: "Compute the address — no comparisons, no sorting"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 1051,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-6 md:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1054,
                                    columnNumber: 34
                                }, this),
                                " Lecture 22 · the index is calculated"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1054,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "Hash-based search does not compare at all — a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "hash function calculates the index directly"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1056,
                                    columnNumber: 59
                                }, this),
                                " where the data lives (the lecture's example: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono-warm font-bold text-[#a0410a]",
                                    children: "key mod 10 → indices 0–9"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1057,
                                    columnNumber: 81
                                }, this),
                                "). Calculate the hash of the search term, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "go straight to that index"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1058,
                                    columnNumber: 52
                                }, this),
                                ", done. When two keys land on the same index — a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "collision"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1059,
                                    columnNumber: 45
                                }, this),
                                " — they ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "chain like a linked list"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1059,
                                    columnNumber: 79
                                }, this),
                                ", and the chain is walked linearly."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1055,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 rounded-2xl p-4",
                            style: {
                                background: "#fffaf1",
                                border: "1px dashed #e5c79d"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HashMini, {}, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 1063,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1062,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-3 sm:grid-cols-3",
                            children: [
                                {
                                    t: "Average · O(1)",
                                    d: "A fixed number of steps regardless of database size — the fastest when the hash distributes data evenly.",
                                    tone: "#4c6b1f",
                                    bg: "rgba(124,154,62,.14)"
                                },
                                {
                                    t: "Worst · O(n)",
                                    d: "When everything collides into the same index — one long chain to walk end to end.",
                                    tone: "#8c2f2f",
                                    bg: "rgba(190,74,74,.12)"
                                },
                                {
                                    t: "Balanced chains · O(log n)",
                                    d: "If the chains are organized as balanced trees, even collisions stay logarithmic.",
                                    tone: "#92600a",
                                    bg: "rgba(217,119,6,.12)"
                                }
                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-4",
                                    style: {
                                        background: c.bg
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.85rem] font-extrabold",
                                            style: {
                                                color: c.tone
                                            },
                                            children: c.t
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 1072,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1.5 text-[.84rem] leading-relaxed text-[#2b2014]",
                                            children: c.d
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 1073,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.t, true, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1071,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1065,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-[.9rem] leading-relaxed text-[#6f5438]",
                            children: [
                                "And the quiet superpower: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "no sorting is required"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1078,
                                    columnNumber: 39
                                }, this),
                                " — order never enters the deal, only the quality of the hash."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1077,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 1053,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 1052,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                    source: "Concept check",
                    q: "Hash search averages O(1). When does it collapse to O(n)?",
                    options: [
                        "When the data is unsorted",
                        "When every key collides into the same index — one chain holds everything",
                        "When the table is smaller than the data",
                        "When keys are negative numbers"
                    ],
                    answer: 1,
                    explain: "The average case is a fixed number of steps because the hash jumps straight to the index. The worst case is collision-intensive: ALL data points to the same index, so lookup degenerates into walking one long chain — O(n). Balanced-tree chains rescue it to O(log n); even distribution prevents it."
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 1084,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 1083,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "6",
                title: "The search race",
                sub: "Same array, same target — three very different bills"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 1089,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchRace, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 1090,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 1090,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                    source: "Concept check",
                    q: "Your data is unsorted — and sorting it is not an option. Which strategies still work?",
                    options: [
                        "Binary and jump search",
                        "Exponential search only",
                        "Linear and hash-based search",
                        "Binary and hash-based search"
                    ],
                    answer: 2,
                    explain: "Binary, jump and exponential all REQUIRE sorted data — halving, bounding and block-stepping collapse without order. Linear search works on anything, and hash-based search never needed order in the first place: it computes the address instead of comparing values."
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 1092,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 1091,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "7",
                title: "Which one, when",
                sub: "The lecture's five use cases — and the four selection factors"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 1097,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 pt-4 md:px-6 md:pt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chip",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                        className: "h-3.5 w-3.5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 1101,
                                        columnNumber: 36
                                    }, this),
                                    " Lecture 22 · use case → strategy"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 1101,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto p-4 md:p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "warm-table min-w-[720px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Use case"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                    lineNumber: 1105,
                                                    columnNumber: 26
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Recommended algorithm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                    lineNumber: 1105,
                                                    columnNumber: 43
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Reason"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                    lineNumber: 1105,
                                                    columnNumber: 73
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                            lineNumber: 1105,
                                            columnNumber: 22
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 1105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            {
                                                u: "Find a guest in today's hotel check-in register",
                                                a: "Linear search",
                                                r: "No inherent order — unstructured data; one-by-one is all you can do"
                                            },
                                            {
                                                u: "Find a product in a catalog sorted by categories",
                                                a: "Jump search",
                                                r: "Non-numeric category order — fixed √n jumps over blocks work better"
                                            },
                                            {
                                                u: "Find a student record using roll number in a database",
                                                a: "Hash search",
                                                r: "Databases index by hash — O(1) average access by key"
                                            },
                                            {
                                                u: "Find a product in a catalog sorted by price",
                                                a: "Binary search",
                                                r: "Numeric sorting allows value comparison — halving applies"
                                            },
                                            {
                                                u: "Search financial transactions in a rapidly growing system",
                                                a: "Exponential search",
                                                r: "Unknown growth — doubling jumps handle the scaling"
                                            }
                                        ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: r.u
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 1115,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full px-2.5 py-1 text-[.78rem] font-extrabold",
                                                            style: {
                                                                background: "rgba(245,158,11,.16)",
                                                                color: "#92600a"
                                                            },
                                                            children: r.a
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                            lineNumber: 1116,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 1116,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: r.r
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                        lineNumber: 1117,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, r.u, true, {
                                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                                lineNumber: 1114,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 1106,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                lineNumber: 1104,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 1099,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 1098,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "insight",
                    title: "Lecture 22 · the four selection factors",
                    children: [
                        "Algorithm choice is never a beauty contest — it is a fit against the data:",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "data size"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1128,
                            columnNumber: 11
                        }, this),
                        " (millions punish linear), ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "sorting status"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1128,
                            columnNumber: 64
                        }, this),
                        " (binary, jump and exponential demand it; hash and linear do not), ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "data distribution"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1129,
                            columnNumber: 63
                        }, this),
                        " (hash lives or dies by even spread), and ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "growth rate"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1130,
                            columnNumber: 40
                        }, this),
                        " (a continuously growing system wants exponential's doubling bounds)."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 1126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 1125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Concept check",
                            q: "Jump search on 9 elements — what jump size does √n prescribe?",
                            options: [
                                "9",
                                "4.5",
                                "3",
                                "2"
                            ],
                            answer: 2,
                            explain: "√9 = 3. The rule scales cleanly: 100 elements → jumps of 10; 9 elements → jumps of 3. Fixed √n jumps keep the number of jumps and the block walk balanced — that balance is exactly what O(√n) buys."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1137,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 1136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Concept check",
                            q: "A catalog lets users sort by price, then search it. Which strategy fits — and why that one?",
                            options: [
                                "Linear — price is a number",
                                "Hash — numbers hash well",
                                "Binary — numeric sorting allows value comparison and halving",
                                "Exponential — prices grow over time"
                            ],
                            answer: 2,
                            explain: "Sorted by a NUMERIC key → binary search: compare the middle, decide the half, repeat — O(log n). Category sorting (non-numeric) points to jump search instead, and an unstructured register leaves only linear. The data's order picks the algorithm."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1142,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 1141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 1135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Practice"], {
                    title: "Pen-and-paper drills — search strategies",
                    items: [
                        {
                            q: "Trace binary search for 59 in [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59, 64, 69, 74, 79]. Which middles do you probe?",
                            hint: "39 → 69 → 59: three probes, each discarding half of what remained."
                        },
                        {
                            q: "Compute the jump size for n = 100 and n = 2500, and state how many full jumps cover each array.",
                            hint: "√100 = 10, √2500 = 50 — the array splits into √n blocks of √n."
                        },
                        {
                            q: "Roll numbers R107, R217 and R45 hash with mod 10. Which collide, and what does the bucket look like afterwards?",
                            hint: "107 and 217 both end in 7 → bucket 7 chains: 7 → 107 → 217, walked linearly on lookup."
                        },
                        {
                            q: "Match and justify: hotel check-in register · category catalog · roll-number database · price-sorted catalog · rapidly growing transaction log.",
                            hint: "Linear · jump · hash · binary · exponential — then say WHY in one line each (order, order-type, indexing, numeric order, growth)."
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                    lineNumber: 1148,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 1147,
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                    className: "h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                    lineNumber: 1157,
                                    columnNumber: 34
                                }, this),
                                " Lecture 22 · key takeaways"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts8.tsx",
                            lineNumber: 1157,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 1156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Linear search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 1160,
                                        columnNumber: 13
                                    }, void 0),
                                    " — one-by-one sequential; works anywhere, but slow for large datasets."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Binary search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 1161,
                                        columnNumber: 13
                                    }, void 0),
                                    " — O(log n); requires a sorted list and divides it into two halves."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Jump search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 1162,
                                        columnNumber: 13
                                    }, void 0),
                                    " — O(√n); balances the number of jumps against block size."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Exponential search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 1163,
                                        columnNumber: 13
                                    }, void 0),
                                    " — O(log n); exponentially increases jumps, then applies binary search — made for continuously growing databases."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Hash search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 1164,
                                        columnNumber: 13
                                    }, void 0),
                                    " — O(1) average; calculates the exact location, fastest for evenly distributed data, needs no sorting."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Selection factors — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "data size, sorting status, distribution and growth rate"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                                        lineNumber: 1165,
                                        columnNumber: 33
                                    }, void 0),
                                    " decide which strategy fits the business problem."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts8.tsx",
                        lineNumber: 1159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts8.tsx",
                lineNumber: 1155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts8.tsx",
        lineNumber: 874,
        columnNumber: 5
    }, this);
}
_c11 = AtbSearchSection;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "OpBtn");
__turbopack_context__.k.register(_c1, "SocietyLab");
__turbopack_context__.k.register(_c2, "BigOChart");
__turbopack_context__.k.register(_c3, "ScaleLab");
__turbopack_context__.k.register(_c4, "DSCostLab");
__turbopack_context__.k.register(_c5, "AtbComplexitySection");
__turbopack_context__.k.register(_c6, "RACE_LINEAR$RACE_VALS.map");
__turbopack_context__.k.register(_c7, "RACE_LINEAR");
__turbopack_context__.k.register(_c8, "SearchRace");
__turbopack_context__.k.register(_c9, "RaceTrack");
__turbopack_context__.k.register(_c10, "HashMini");
__turbopack_context__.k.register(_c11, "AtbSearchSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_atb_AtbParts8_tsx_e83b9605._.js.map