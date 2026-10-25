(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/atb/AtbParts5.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AtbDfsBfsSection",
    ()=>AtbDfsBfsSection,
    "AtbGraphPropsSection",
    ()=>AtbGraphPropsSection,
    "AtbGraphsSection",
    ()=>AtbGraphsSection,
    "AtbTraversalsSection",
    ()=>AtbTraversalsSection,
    "AtbTreesSection",
    ()=>AtbTreesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$to$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownToLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down-to-line.js [app-client] (ecmascript) <export default as ArrowDownToLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$from$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftFromLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left-from-line.js [app-client] (ecmascript) <export default as ArrowLeftFromLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left-right.js [app-client] (ecmascript) <export default as ArrowLeftRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$to$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightToLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right-to-line.js [app-client] (ecmascript) <export default as ArrowRightToLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$from$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpFromLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-from-line.js [app-client] (ecmascript) <export default as ArrowUpFromLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dna$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dna.js [app-client] (ecmascript) <export default as Dna>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move-horizontal.js [app-client] (ecmascript) <export default as MoveHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move-vertical.js [app-client] (ecmascript) <export default as MoveVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [app-client] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/repeat.js [app-client] (ecmascript) <export default as Repeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$train$2d$front$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrainFront$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/train-front.js [app-client] (ecmascript) <export default as TrainFront>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waypoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waypoints$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waypoints.js [app-client] (ecmascript) <export default as Waypoints>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$weight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Weight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/weight.js [app-client] (ecmascript) <export default as Weight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ============================================================
   TREES — anatomy diagram (nodes appear level by level)
   ============================================================ */ const rise = (delay)=>({
        initial: {
            opacity: 0,
            y: -18
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.3
        },
        transition: {
            duration: 0.55,
            delay
        }
    });
function AnatomyTree() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 640 400",
        className: "mx-auto h-auto w-full max-w-2xl",
        role: "img",
        "aria-label": "Anatomy of a tree: root node A, parent nodes B and C, child nodes and two leaf nodes, connected by edges",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                    id: "m5an",
                    markerWidth: "8",
                    markerHeight: "8",
                    refX: "6",
                    refY: "3",
                    orient: "auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0,0 L7,3 L0,6 Z",
                        fill: "#c99a5b"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.25),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "320",
                        y1: "64",
                        x2: "160",
                        y2: "168",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "320",
                        y1: "64",
                        x2: "480",
                        y2: "168",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.55),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "160",
                        y1: "168",
                        x2: "85",
                        y2: "278",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "160",
                        y1: "168",
                        x2: "235",
                        y2: "278",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "480",
                        y1: "168",
                        x2: "410",
                        y2: "278",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "480",
                        y1: "168",
                        x2: "555",
                        y2: "278",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "320",
                        cy: "64",
                        r: "25",
                        fill: "#c2410c"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "320",
                        y: "70",
                        textAnchor: "middle",
                        fontSize: "16",
                        fontWeight: "800",
                        fill: "#fff7ec",
                        children: "A"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.3),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "160",
                        cy: "168",
                        r: "21",
                        fill: "#f0a04b"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "160",
                        y: "174",
                        textAnchor: "middle",
                        fontSize: "14",
                        fontWeight: "800",
                        fill: "#3e2c1d",
                        children: "B"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "480",
                        cy: "168",
                        r: "21",
                        fill: "#f0a04b"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "480",
                        y: "174",
                        textAnchor: "middle",
                        fontSize: "14",
                        fontWeight: "800",
                        fill: "#3e2c1d",
                        children: "C"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.6),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "85",
                        cy: "278",
                        r: "19",
                        fill: "#fff3e0",
                        stroke: "#c99a5b",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "85",
                        y: "284",
                        textAnchor: "middle",
                        fontSize: "13",
                        fontWeight: "800",
                        fill: "#7c4a12",
                        children: "D"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "235",
                        cy: "278",
                        r: "19",
                        fill: "#fff3e0",
                        stroke: "#c99a5b",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "235",
                        y: "284",
                        textAnchor: "middle",
                        fontSize: "13",
                        fontWeight: "800",
                        fill: "#7c4a12",
                        children: "E"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "410",
                        cy: "278",
                        r: "19",
                        fill: "#fff3e0",
                        stroke: "#c99a5b",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "410",
                        y: "284",
                        textAnchor: "middle",
                        fontSize: "13",
                        fontWeight: "800",
                        fill: "#7c4a12",
                        children: "F"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "555",
                        cy: "278",
                        r: "19",
                        fill: "#fff3e0",
                        stroke: "#c99a5b",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "555",
                        y: "284",
                        textAnchor: "middle",
                        fontSize: "13",
                        fontWeight: "800",
                        fill: "#7c4a12",
                        children: "G"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(1),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "320",
                        y: "20",
                        textAnchor: "middle",
                        fontSize: "11",
                        fontWeight: "800",
                        letterSpacing: "2",
                        fill: "#c2410c",
                        children: "ROOT NODE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "320",
                        y1: "26",
                        x2: "320",
                        y2: "35",
                        stroke: "#c99a5b",
                        strokeWidth: "1.5",
                        markerEnd: "url(#m5an)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "118",
                        y: "140",
                        textAnchor: "end",
                        fontSize: "11",
                        fontWeight: "800",
                        letterSpacing: "1.5",
                        fill: "#b45309",
                        children: "PARENT"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "118",
                        y: "153",
                        textAnchor: "end",
                        fontSize: "11",
                        fontWeight: "800",
                        letterSpacing: "1.5",
                        fill: "#b45309",
                        children: "NODE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "122",
                        y1: "150",
                        x2: "140",
                        y2: "158",
                        stroke: "#c99a5b",
                        strokeWidth: "1.5",
                        markerEnd: "url(#m5an)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "235",
                        y: "318",
                        textAnchor: "middle",
                        fontSize: "10",
                        fontWeight: "700",
                        letterSpacing: "1",
                        fill: "#8a5a06",
                        children: "child nodes of B"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "46",
                        y: "308",
                        width: "78",
                        height: "20",
                        rx: "10",
                        fill: "#7c9a3e"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "85",
                        y: "322",
                        textAnchor: "middle",
                        fontSize: "10",
                        fontWeight: "800",
                        fill: "#fff7ec",
                        children: "LEAF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "516",
                        y: "308",
                        width: "78",
                        height: "20",
                        rx: "10",
                        fill: "#7c9a3e"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "555",
                        y: "322",
                        textAnchor: "middle",
                        fontSize: "10",
                        fontWeight: "800",
                        fill: "#fff7ec",
                        children: "LEAF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "243",
                        y: "112",
                        fontSize: "10",
                        fontWeight: "700",
                        fontStyle: "italic",
                        fill: "#a0410a",
                        children: "edge"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "101",
                        y: "234",
                        fontSize: "10",
                        fontWeight: "700",
                        fontStyle: "italic",
                        fill: "#a0410a",
                        children: "edge"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c = AnatomyTree;
/* ============================================================
   TREES — depth, height, subtrees diagram
   ============================================================ */ function DepthHeightTree() {
    const level = (y, label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "76",
                    y1: y,
                    x2: "604",
                    y2: y,
                    stroke: "#e8d5b8",
                    strokeWidth: "1.5",
                    strokeDasharray: "4 6"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 143,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "70",
                    y: y + 4,
                    textAnchor: "end",
                    fontSize: "12",
                    fontWeight: "800",
                    fill: "#a0410a",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 144,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 142,
            columnNumber: 5
        }, this);
    const node = (x, y, t, fill, txt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: x,
                    cy: y,
                    r: "19",
                    fill: fill,
                    stroke: "#c99a5b",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 149,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x,
                    y: y + 5,
                    textAnchor: "middle",
                    fontSize: "13",
                    fontWeight: "800",
                    fill: txt,
                    children: t
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 150,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 148,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 680 436",
        className: "mx-auto h-auto w-full max-w-2xl",
        role: "img",
        "aria-label": "Tree with depth labels d equals 0 to 3 on each level, height h equals 3 on the right, and two dashed subtree boxes",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                    id: "m5dh",
                    markerWidth: "8",
                    markerHeight: "8",
                    refX: "6",
                    refY: "3",
                    orient: "auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0,0 L7,3 L0,6 Z",
                        fill: "#c2410c"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            level(64, "d = 0"),
            level(168, "d = 1"),
            level(278, "d = 2"),
            level(368, "d = 3"),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "62",
                y: "134",
                width: "242",
                height: "268",
                rx: "16",
                fill: "rgba(217,119,6,.05)",
                stroke: "#d97706",
                strokeWidth: "1.5",
                strokeDasharray: "7 5"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "70",
                y: "126",
                fontSize: "11",
                fontWeight: "800",
                fill: "#b45309",
                children: "Subtree 1 — B and everything below it"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "374",
                y: "134",
                width: "232",
                height: "176",
                rx: "16",
                fill: "rgba(217,119,6,.05)",
                stroke: "#d97706",
                strokeWidth: "1.5",
                strokeDasharray: "7 5"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "382",
                y: "126",
                fontSize: "11",
                fontWeight: "800",
                fill: "#b45309",
                children: "Subtree 2 — C and everything below it"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "330",
                y1: "64",
                x2: "170",
                y2: "168",
                stroke: "#c99a5b",
                strokeWidth: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "330",
                y1: "64",
                x2: "490",
                y2: "168",
                stroke: "#c99a5b",
                strokeWidth: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "170",
                y1: "168",
                x2: "110",
                y2: "278",
                stroke: "#c99a5b",
                strokeWidth: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "170",
                y1: "168",
                x2: "250",
                y2: "278",
                stroke: "#c99a5b",
                strokeWidth: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "490",
                y1: "168",
                x2: "420",
                y2: "278",
                stroke: "#c99a5b",
                strokeWidth: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "490",
                y1: "168",
                x2: "560",
                y2: "278",
                stroke: "#c99a5b",
                strokeWidth: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "110",
                y1: "278",
                x2: "150",
                y2: "368",
                stroke: "#c99a5b",
                strokeWidth: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            node(330, 64, "A", "#c2410c", "#fff7ec"),
            node(170, 168, "B", "#f0a04b", "#3e2c1d"),
            node(490, 168, "C", "#f0a04b", "#3e2c1d"),
            node(110, 278, "D", "#fff3e0", "#7c4a12"),
            node(250, 278, "E", "#fff3e0", "#7c4a12"),
            node(420, 278, "F", "#fff3e0", "#7c4a12"),
            node(560, 278, "G", "#fff3e0", "#7c4a12"),
            node(150, 368, "H", "#7c9a3e", "#fff7ec"),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "640",
                y1: "64",
                x2: "640",
                y2: "368",
                stroke: "#c2410c",
                strokeWidth: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "632",
                y1: "64",
                x2: "648",
                y2: "64",
                stroke: "#c2410c",
                strokeWidth: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "632",
                y1: "368",
                x2: "648",
                y2: "368",
                stroke: "#c2410c",
                strokeWidth: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "640",
                y: "48",
                textAnchor: "middle",
                fontSize: "12",
                fontWeight: "800",
                fill: "#c2410c",
                children: "height"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "640",
                y: "392",
                textAnchor: "middle",
                fontSize: "12",
                fontWeight: "800",
                fill: "#c2410c",
                children: "h = 3"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "612",
                y1: "374",
                x2: "630",
                y2: "370",
                stroke: "#c2410c",
                strokeWidth: "1.5",
                markerEnd: "url(#m5dh)"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "576",
                y: "390",
                textAnchor: "end",
                fontSize: "10",
                fontWeight: "600",
                fill: "#8a5a06",
                children: "root → deepest leaf H"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c1 = DepthHeightTree;
/* ============================================================
   TREES — the lecture's family tree use case (Lecture 12)
   ============================================================ */ function FamilyTreeArt() {
    const node = (x, y, t, fill, txt, r = 19, fs = 12)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: x,
                    cy: y,
                    r: r,
                    fill: fill,
                    stroke: "#c99a5b",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 215,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x,
                    y: y + 5,
                    textAnchor: "middle",
                    fontSize: fs,
                    fontWeight: "800",
                    fill: txt,
                    children: t
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 216,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 214,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 640 372",
        className: "mx-auto h-auto w-full max-w-2xl",
        role: "img",
        "aria-label": "Lecture 12 family tree: grandfather at the root with children Son A, Son B and Daughter; Son A has daughter D1, Daughter has sons S1 and S2, and Son B has no children",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.2),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "330",
                        y1: "66",
                        x2: "140",
                        y2: "176",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "330",
                        y1: "66",
                        x2: "330",
                        y2: "176",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "330",
                        y1: "66",
                        x2: "520",
                        y2: "176",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.5),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "140",
                        y1: "176",
                        x2: "140",
                        y2: "290",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "520",
                        y1: "176",
                        x2: "424",
                        y2: "290",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "520",
                        y1: "176",
                        x2: "608",
                        y2: "290",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "330",
                        y: "22",
                        textAnchor: "middle",
                        fontSize: "11",
                        fontWeight: "800",
                        letterSpacing: "2",
                        fill: "#c2410c",
                        children: "ROOT · GRANDFATHER"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    node(330, 66, "GF", "#c2410c", "#fff7ec", 25, 13)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.35),
                children: [
                    node(140, 176, "Son A", "#f0a04b", "#3e2c1d", 28, 11),
                    node(330, 176, "Son B", "#f0a04b", "#3e2c1d", 28, 11),
                    node(520, 176, "Daughter", "#f0a04b", "#3e2c1d", 28, 11)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.65),
                children: [
                    node(140, 290, "D1", "#fff3e0", "#7c4a12"),
                    node(424, 290, "S1", "#fff3e0", "#7c4a12"),
                    node(608, 290, "S2", "#fff3e0", "#7c4a12")
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.9),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "266",
                        y: "216",
                        width: "128",
                        height: "20",
                        rx: "10",
                        fill: "#7c9a3e"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "330",
                        y: "230",
                        textAnchor: "middle",
                        fontSize: "10",
                        fontWeight: "800",
                        fill: "#fff7ec",
                        children: "LEAF · no children"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "140",
                        y: "330",
                        textAnchor: "middle",
                        fontSize: "10",
                        fontWeight: "700",
                        fill: "#8a5a06",
                        children: "D1 — daughter of Son A"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "516",
                        y: "330",
                        textAnchor: "middle",
                        fontSize: "10",
                        fontWeight: "700",
                        fill: "#8a5a06",
                        children: "S1 and S2 — sons of Daughter"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "330",
                        y: "358",
                        textAnchor: "middle",
                        fontSize: "11",
                        fontWeight: "800",
                        fill: "#a0410a",
                        children: "four leaves: D1 · Son B · S1 · S2 — every child has exactly ONE parent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
_c2 = FamilyTreeArt;
/* ============================================================
   TREES — section
   ============================================================ */ const TREE_SPOTS = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: "Family trees",
        chain: [
            "Grandfather",
            "Parents",
            "You"
        ],
        note: "drawn along one parental line — every child keeps exactly one parent"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"],
        title: "Folder structure",
        chain: [
            "Home",
            "Semester 1",
            "Algorithmic Thinking"
        ],
        note: "each subfolder belongs to only one parent folder"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
        title: "Corporate hierarchy",
        chain: [
            "CEO",
            "Managers",
            "Workers"
        ],
        note: "CEO at the root, managers between, workers at the leaves"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        title: "Library classification",
        chain: [
            "Language",
            "Genre",
            "Subgenre",
            "Author",
            "Title"
        ],
        note: "every book narrows down level by level"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dna$3e$__["Dna"],
        title: "Biological taxonomy",
        chain: [
            "Animal",
            "Vertebrate",
            "Mammal",
            "Dog"
        ],
        note: "organisms sort into ever-smaller groups"
    }
];
function AtbTreesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "trees",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Lecture 12 · Trees",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "grad-text",
                            children: "Trees"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, void 0),
                        " — hierarchy, drawn upside down"
                    ]
                }, void 0, true),
                lead: "Arrays, lists, stacks and queues are linear: the path through them is predetermined. Trees are the first nonlinear structure — multiple possible paths, hierarchical relationships. Every org chart, folder structure and family album is one — drawn upside down, root at the top, leaves at the bottom."
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "From family album to data structure",
                sub: "A flat list is not enough when the data itself is shaped like a family"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "story",
                    title: "The album that would not sit still",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Line every family member up in an ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "array"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 297,
                                columnNumber: 47
                            }, this),
                            " and you get a flat list — one name after another, no structure. But you also want the",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "hierarchy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this),
                            ": grandparents → parents → you → siblings. That branching shape is a ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "tree"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 300,
                                columnNumber: 34
                            }, this),
                            ": one element at the top (the",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "root"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this),
                            "), others hanging below it, level after level. Real trees grow up; data trees are drawn ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "upside down"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 302,
                                columnNumber: 34
                            }, this),
                            " — root at the top, growing downward."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-5 md:p-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 flex flex-wrap items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                            className: "h-3.5 w-3.5",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 310,
                                            columnNumber: 36
                                        }, this),
                                        " Lecture 12 · the family tree"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: "grandfather → Son A · Son B · Daughter"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FamilyTreeArt, {}, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                                    k: "root",
                                    v: "the grandfather — the first, topmost element of the tree"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 315,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                                    k: "parent → child",
                                    v: "Son A, Son B and Daughter are children of the grandfather — and parents of their own children below"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                                    k: "leaf",
                                    v: "D1, S1 and S2 — plus Son B, who has no children; leaves terminate every pathway"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 314,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Anatomy of a tree",
                sub: "Root, parent, child, leaf — and the edge that joins them"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-5 md:p-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 flex flex-wrap items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: "Lecture 12 · anatomy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: "the tree ↔ graph separator"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnatomyTree, {}, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex items-start justify-center gap-2 text-[.84rem] leading-relaxed text-[#8c2f2f]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "mt-0.5 h-4 w-4 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "One parent per child."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this),
                                        " A node may have many children but only ONE parent, and circular connections cannot form. The moment a node has two parents the structure stops being a tree and becomes a graph — this single rule",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "is"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this),
                                        " the separator between trees and graphs."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 330,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 324,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "Depth, height, subtrees",
                sub: "Three measuring sticks you will use on every tree"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-5 md:p-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 flex flex-wrap items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: "Lecture 12 · depth vs height"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 346,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: "Lecture 12 · subtrees"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 347,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 345,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DepthHeightTree, {}, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                                    k: "depth (d)",
                                    v: "edges on the path from a node UP to the root — count upwards from any node: the root sits at d = 0, each level adds 1, and every node carries its own depth value (here H sits at d = 3)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 351,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                                    k: "height (h)",
                                    v: "the maximum depth anywhere in the whole tree — one single value for the entire structure, the distance from the root to its deepest leaf (here h = 3, via A → B → D → H)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                                    k: "subtree",
                                    v: "any child section of the tree is itself a tree — B heads Subtree 1, C heads Subtree 2; a tree is really nested sub-trees, the way a branch of a real tree is a whole tree in miniature"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 353,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 344,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "4",
                title: "Where you already met trees",
                sub: "Five hierarchies you use without calling them data structures"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex flex-wrap items-center gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "chip",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                            className: "h-3.5 w-3.5",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 360,
                            columnNumber: 32
                        }, this),
                        " Lecture 12 · real-world applications"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 360,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                children: TREE_SPOTS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: i * 60,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift flex h-full flex-col gap-3 p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                                            style: {
                                                background: "linear-gradient(135deg,#fde8cf,#fbcf9f)",
                                                color: "#8a3d10"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                lineNumber: 371,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 367,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-[.95rem] font-bold text-[#3e2c1d]",
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 373,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 366,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-1.5",
                                    children: s.chain.map((c, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                            children: [
                                                j > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                                    className: "h-3 w-3 text-[#c2410c]",
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 30
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-lg border border-[#ecd9bd] bg-[#fffaf1] px-2 py-1 text-[.72rem] font-semibold text-[#7c4a12]",
                                                    children: c
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, c, true, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 377,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-auto text-[.76rem] leading-relaxed text-[#8a6a48]",
                                    children: s.note
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 385,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 365,
                            columnNumber: 13
                        }, this)
                    }, s.title, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 364,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            q: "The first element of a tree, drawn at the top, is the…",
                            options: [
                                "leaf",
                                "root",
                                "edge",
                                "subtree"
                            ],
                            answer: 1,
                            explain: "The root is the one node with no parent — everything else hangs below it. Leaves are the opposite extreme: nodes with no children."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 393,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            q: "A node without children is a…",
                            options: [
                                "root",
                                "leaf",
                                "parent",
                                "branch"
                            ],
                            answer: 1,
                            explain: "Leaves end the branches — by definition a leaf has zero children. Parents (by definition) have at least one."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 401,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 400,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 200,
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Lecture 12 · depth vs height",
                            q: "Every node carries its own depth; the tree as a whole carries a single…",
                            options: [
                                "height",
                                "edge count",
                                "parent map",
                                "level order"
                            ],
                            answer: 0,
                            explain: "Depth is per node — edges from that node UP to the root, with the root at 0. Height is the tree's one value: the maximum depth in the whole tree, measured to the deepest leaf."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 409,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 391,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Practice"], {
                    title: "Trees — pen & paper",
                    items: [
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Draw a tree with 3 levels and label its ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "root"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 424,
                                        columnNumber: 60
                                    }, void 0),
                                    ", one ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "parent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 424,
                                        columnNumber: 87
                                    }, void 0),
                                    ", its ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "children"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 424,
                                        columnNumber: 116
                                    }, void 0),
                                    " and two ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "leaves"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 424,
                                        columnNumber: 150
                                    }, void 0),
                                    "."
                                ]
                            }, void 0, true),
                            hint: "Root at the top; every leaf is a node with no children below it."
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Name ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "3 business hierarchies"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 428,
                                        columnNumber: 25
                                    }, void 0),
                                    " that are trees, and say what plays the root in each."
                                ]
                            }, void 0, true),
                            hint: "Org chart, product categories, approval chains — the CEO / category / final approver is usually the root."
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Draw the Lecture 12 family tree: grandfather → Son A, Son B, Daughter; Son A → daughter D1; Daughter → sons S1, S2. Mark the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "root"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 432,
                                        columnNumber: 145
                                    }, void 0),
                                    " and all four ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "leaves"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 432,
                                        columnNumber: 180
                                    }, void 0),
                                    ", then verify every node has exactly one parent."
                                ]
                            }, void 0, true),
                            hint: "Son B is a leaf too — no children. D1, S1 and S2 are the other three leaves."
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 420,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 419,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, this);
}
_c3 = AtbTreesSection;
const T_POS = {
    A: {
        x: 220,
        y: 46
    },
    B: {
        x: 118,
        y: 150
    },
    C: {
        x: 322,
        y: 150
    },
    D: {
        x: 66,
        y: 246
    },
    E: {
        x: 170,
        y: 246
    }
};
const T_EDGES = [
    [
        "A",
        "B"
    ],
    [
        "A",
        "C"
    ],
    [
        "B",
        "D"
    ],
    [
        "B",
        "E"
    ]
];
const T_SEQ = {
    pre: [
        "A",
        "B",
        "D",
        "E",
        "C"
    ],
    in: [
        "D",
        "B",
        "E",
        "A",
        "C"
    ],
    post: [
        "D",
        "E",
        "B",
        "C",
        "A"
    ]
};
const T_CARDS = [
    {
        key: "pre",
        name: "Pre-order",
        rule: "Root → Left → Right",
        result: "A B D E C",
        blurb: "copy a tree top-down"
    },
    {
        key: "in",
        name: "In-order",
        rule: "Left → Root → Right",
        result: "D B E A C",
        blurb: "sorted output from a BST"
    },
    {
        key: "post",
        name: "Post-order",
        rule: "Left → Right → Root",
        result: "D E B C A",
        blurb: "finish children before the parent"
    }
];
function TravTree({ seq, step, mini = false }) {
    const rank = (n)=>seq.indexOf(n);
    const seen = (n)=>rank(n) > -1 && rank(n) < step;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 440 292",
        className: "mx-auto h-auto w-full",
        style: {
            maxWidth: mini ? 180 : 380
        },
        "aria-hidden": mini || undefined,
        role: mini ? undefined : "img",
        "aria-label": mini ? undefined : "Tree A with children B and C; B has children D and E, showing the current traversal order",
        children: [
            T_EDGES.map(([a, b])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: T_POS[a].x,
                    y1: T_POS[a].y,
                    x2: T_POS[b].x,
                    y2: T_POS[b].y,
                    stroke: "rgba(201,154,91,.65)",
                    strokeWidth: "2.5"
                }, `${a}${b}`, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 484,
                    columnNumber: 9
                }, this)),
            Object.entries(T_POS).map(([n, p])=>{
                const on = seen(n);
                const cur = rank(n) === step - 1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        cur ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: p.x,
                            cy: p.y,
                            r: "27",
                            fill: "none",
                            stroke: "#f59e0b",
                            strokeWidth: "3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 499,
                            columnNumber: 20
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: p.x,
                            cy: p.y,
                            r: "20",
                            fill: on ? "#ea580c" : "rgba(255,246,232,.09)",
                            stroke: on ? "#c2410c" : "rgba(245,158,11,.45)",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 500,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: p.x,
                            y: p.y + 5,
                            textAnchor: "middle",
                            fontSize: "14",
                            fontWeight: "800",
                            fill: on ? "#fff7ec" : "#f5e6cd",
                            children: n
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 508,
                            columnNumber: 13
                        }, this),
                        on ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: p.x + 24,
                                    cy: p.y - 24,
                                    r: "11",
                                    fill: "#2b1b10",
                                    stroke: "#f5c889",
                                    strokeWidth: "1.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 520,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: p.x + 24,
                                    y: p.y - 20,
                                    textAnchor: "middle",
                                    fontSize: "10",
                                    fontWeight: "800",
                                    fill: "#f5c889",
                                    children: rank(n) + 1
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 521,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 519,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, n, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 498,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 475,
        columnNumber: 5
    }, this);
}
_c4 = TravTree;
function TraversalLab() {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pre");
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const seq = T_SEQ[mode];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TraversalLab.useEffect": ()=>{
            if (step >= seq.length) return;
            const t = window.setTimeout({
                "TraversalLab.useEffect.t": ()=>setStep({
                        "TraversalLab.useEffect.t": (s)=>s + 1
                    }["TraversalLab.useEffect.t"])
            }["TraversalLab.useEffect.t"], 620);
            return ({
                "TraversalLab.useEffect": ()=>window.clearTimeout(t)
            })["TraversalLab.useEffect"];
        }
    }["TraversalLab.useEffect"], [
        step,
        seq.length
    ]);
    const play = (k)=>{
        setMode(k);
        setStep(0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-3",
                children: T_CARDS.map((c)=>{
                    const active = mode === c.key;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>play(c.key),
                        "aria-pressed": active,
                        "aria-label": `Replay the ${c.name} traversal animation`,
                        className: `card-warm lift flex flex-col gap-2 rounded-xl p-4 text-left transition-all ${active ? "ring-2 ring-[#f59e0b]" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[.7rem] font-extrabold uppercase tracking-[.18em] text-[#f5c889]",
                                children: c.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 565,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[.78rem] font-bold text-[#ffd9ae]",
                                children: c.rule
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 568,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[.78rem] text-[#cbb392]",
                                children: c.blurb
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 569,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TravTree, {
                                seq: T_SEQ[c.key],
                                step: 5,
                                mini: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 570,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-[.8rem] font-bold text-[#f5e6cd]",
                                children: c.result
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 571,
                                columnNumber: 15
                            }, this)
                        ]
                    }, c.key, true, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 555,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 551,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 rounded-2xl p-4",
                style: {
                    background: "rgba(255,236,210,.05)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-[.72rem] font-extrabold uppercase tracking-[.2em] text-[#b98d5f]",
                        children: "watch it walk — click a card above to replay"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 578,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TravTree, {
                            seq: seq,
                            step: step
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 582,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 581,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex flex-wrap items-center justify-center gap-2",
                        children: seq.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `inline-flex h-9 w-9 items-center justify-center rounded-xl border font-mono text-sm font-bold transition-all duration-300 ${i < step ? `border-[rgba(245,158,11,.5)] bg-[rgba(234,88,12,.22)] text-[#ffd9ae] ${i === step - 1 ? "anim-pop" : ""}` : "border-[rgba(245,158,11,.16)] text-[#8a6a48]"}`,
                                children: n
                            }, `${mode}-${n}`, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 586,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 584,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 577,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 550,
        columnNumber: 5
    }, this);
}
_s(TraversalLab, "iW4OwiRDwRDSVJKYuS91/lsLJ3c=");
_c5 = TraversalLab;
/* level-order card */ function LevelOrderViz() {
    const pos = {
        A: {
            x: 240,
            y: 46
        },
        B: {
            x: 138,
            y: 150
        },
        C: {
            x: 342,
            y: 150
        },
        D: {
            x: 86,
            y: 246
        },
        E: {
            x: 190,
            y: 246
        }
    };
    const band = (top, h, o, label, ly)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "40",
                    y: top,
                    width: "400",
                    height: h,
                    rx: "14",
                    fill: `rgba(245,158,11,${o})`,
                    stroke: "rgba(245,158,11,.3)",
                    strokeDasharray: "6 5"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 614,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "430",
                    y: ly,
                    textAnchor: "end",
                    fontSize: "11",
                    fontWeight: "800",
                    letterSpacing: "1.5",
                    fill: "#f5c889",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 615,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 613,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 460 292",
        className: "mx-auto h-auto w-full max-w-md",
        role: "img",
        "aria-label": "Level order traversal: the tree read level by level, A then B and C, then D and E",
        children: [
            band(18, 58, 0.14, "LEVEL 0", 38),
            band(122, 58, 0.09, "LEVEL 1", 142),
            band(218, 58, 0.05, "LEVEL 2", 238),
            [
                [
                    "A",
                    "B"
                ],
                [
                    "A",
                    "C"
                ],
                [
                    "B",
                    "D"
                ],
                [
                    "B",
                    "E"
                ]
            ].map(([a, b])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: pos[a].x,
                    y1: pos[a].y,
                    x2: pos[b].x,
                    y2: pos[b].y,
                    stroke: "rgba(201,154,91,.65)",
                    strokeWidth: "2.5"
                }, `${a}${b}`, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 629,
                    columnNumber: 9
                }, this)),
            Object.entries(pos).map(([n, p])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: p.x,
                            cy: p.y,
                            r: "20",
                            fill: "#ea580c",
                            stroke: "#c2410c",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 633,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: p.x,
                            y: p.y + 5,
                            textAnchor: "middle",
                            fontSize: "14",
                            fontWeight: "800",
                            fill: "#fff7ec",
                            children: n
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 634,
                            columnNumber: 11
                        }, this)
                    ]
                }, n, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 632,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 619,
        columnNumber: 5
    }, this);
}
_c6 = LevelOrderViz;
function AtbTraversalsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "traversals",
        dark: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                dark: true,
                eyebrow: "Lecture 12 · Tree traversals",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Reading a tree ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "grad-text",
                            children: "four ways"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 649,
                            columnNumber: 28
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "A tree is useless if you cannot walk it. A traversal visits every node exactly once — and the order you choose changes the answer you get. Our demo tree: A at the root, children B and C, and D, E under B."
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 644,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "1",
                title: "The depth-first trio",
                sub: "Pre-order, in-order, post-order — same tree, three visits"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 655,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TraversalLab, {}, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 657,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 656,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-5 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: "Lecture 12 · the one rule that never changes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 663,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "mt-3 text-lg font-bold text-[#f5e6cd]",
                                    children: "Left before right. Always."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 664,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.88rem] leading-relaxed text-[#e9d7bf]",
                                    children: [
                                        "Every traversal — depth-first or breadth-first — visits the",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "left subtree before the right subtree"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 667,
                                            columnNumber: 15
                                        }, this),
                                        ". Flip that order and you get a different, wrong sequence. Only the root moves; the left-first rule never does."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 665,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 662,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: "Lecture 12 · naming rule"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 672,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "mt-3 text-lg font-bold text-[#f5e6cd]",
                                    children: "The root's position names the traversal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 673,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.88rem] leading-relaxed text-[#e9d7bf]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Root first"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 675,
                                            columnNumber: 15
                                        }, this),
                                        " → pre-order · ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "root in the middle"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 675,
                                            columnNumber: 57
                                        }, this),
                                        " → in-order ·",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "root last"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 676,
                                            columnNumber: 15
                                        }, this),
                                        " → post-order. (In-order reads cleanly when nodes have at most two children — one of the lecture's fine-print notes.)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 674,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 671,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 661,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 660,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "2",
                title: "Level order — the breadth-first reading",
                sub: "Top to bottom, left to right, one layer at a time"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 683,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-5 md:p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LevelOrderViz, {}, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 687,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 686,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 685,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm flex h-full flex-col gap-4 p-6 md:p-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "chip",
                                            children: "Lecture 12 · breadth-first · queue-based"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 693,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "mt-3 text-xl font-bold text-[#f5e6cd]",
                                            children: "Reads the tree like text"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 694,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.9rem] leading-relaxed text-[#e9d7bf]",
                                            children: [
                                                "Level order finishes ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "every node at the current depth"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 696,
                                                    columnNumber: 38
                                                }, this),
                                                " before going a single step deeper — top-to-bottom, left-to-right, ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "staying on each level"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 697,
                                                    columnNumber: 70
                                                }, this),
                                                " until the level is done. It runs on a ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "queue"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 698,
                                                    columnNumber: 49
                                                }, this),
                                                " — the mechanism Lecture 17 calls BFS. Result on our tree: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "font-mono text-[#ffd9ae]",
                                                    children: "A B C D E"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 30
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 695,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 692,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-2",
                                    children: [
                                        {
                                            lv: "Level 0",
                                            nodes: "A",
                                            note: "the root alone"
                                        },
                                        {
                                            lv: "Level 1",
                                            nodes: "B C",
                                            note: "children of A, left to right"
                                        },
                                        {
                                            lv: "Level 2",
                                            nodes: "D E",
                                            note: "children of B, left to right"
                                        }
                                    ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 rounded-xl border border-[rgba(245,158,11,.18)] bg-[rgba(43,27,16,.5)] px-3.5 py-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-16 shrink-0 text-[.7rem] font-extrabold uppercase tracking-wider text-[#f5c889]",
                                                    children: r.lv
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 712,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono text-sm font-bold text-[#ffd9ae]",
                                                    children: r.nodes
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 713,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-auto text-[.76rem] text-[#cbb392]",
                                                    children: r.note
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 714,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, r.lv, true, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 708,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 702,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-auto text-[.82rem] leading-relaxed text-[#cbb392]",
                                    children: [
                                        "Business read: pre-order reads an org chart like a CEO telling the story; level order reads it like HR — ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "entire seniority bands, one band at a time"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 720,
                                            columnNumber: 46
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 718,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 691,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 690,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 684,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    dark: true,
                    kind: "insight",
                    title: "Same tree, four readings",
                    children: [
                        "Four traversals, one tree — pick the order that answers your question. ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Pre-order"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 728,
                            columnNumber: 82
                        }, this),
                        " ",
                        "hands you the hierarchy top-down (reporting lines, a table of contents). ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "In-order"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 729,
                            columnNumber: 84
                        }, this),
                        " ",
                        "pours a binary search tree out ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            children: "sorted"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 730,
                            columnNumber: 42
                        }, this),
                        ". ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Post-order"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 730,
                            columnNumber: 59
                        }, this),
                        " settles children before parents (closing sub-ledgers before the group total). ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Level order"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 731,
                            columnNumber: 65
                        }, this),
                        " is the org-wide announcement: whole levels at once."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 727,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 726,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            q: "For the tree above (A with children B, C; B with children D, E), pre-order gives…",
                            options: [
                                "A B C D E",
                                "A B D E C",
                                "D B E A C",
                                "D E B C A"
                            ],
                            answer: 1,
                            explain: "Pre-order = Root, Left, Right: visit A, finish the whole left subtree under B (B, then D, then E), then C. The other options are level order, in-order and post-order respectively."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 738,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 737,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Practice"], {
                            title: "Traversals — from memory",
                            items: [
                                {
                                    q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Write the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "in-order"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                lineNumber: 750,
                                                columnNumber: 32
                                            }, void 0),
                                            " traversal of ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "font-mono text-[.82rem] text-[#ffd9ae]",
                                                children: "A(B(D,E),C)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                lineNumber: 750,
                                                columnNumber: 71
                                            }, void 0),
                                            " without looking up."
                                        ]
                                    }, void 0, true),
                                    hint: "Left → Root → Right: finish everything under B first."
                                },
                                {
                                    q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Invent a small company org tree (3 levels, 5–7 people) and write its ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "pre-order"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                lineNumber: 754,
                                                columnNumber: 91
                                            }, void 0),
                                            "."
                                        ]
                                    }, void 0, true),
                                    hint: "CEO, then the whole left-hand department, then the right — Root → Left → Right."
                                }
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 746,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 745,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 200,
                        className: "lg:col-span-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Lecture 12 · naming rule",
                            q: "What decides whether a depth-first traversal is called pre, in or post?",
                            options: [
                                "the height of the tree",
                                "where the ROOT sits in the visit order",
                                "the number of leaves",
                                "which child is older"
                            ],
                            answer: 1,
                            explain: "Root first = pre-order, root between the subtrees = in-order, root last = post-order. Left-before-right holds in all of them."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 761,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 760,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 736,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 643,
        columnNumber: 5
    }, this);
}
_c7 = AtbTraversalsSection;
/* ============================================================
   GRAPHS — the lecture graph (light)
   ============================================================ */ const G_POS = {
    C: {
        x: 120,
        y: 50
    },
    A: {
        x: 280,
        y: 50
    },
    B: {
        x: 440,
        y: 50
    },
    S: {
        x: 120,
        y: 170
    },
    P: {
        x: 215,
        y: 170
    },
    Q: {
        x: 345,
        y: 170
    },
    R: {
        x: 440,
        y: 170
    },
    X: {
        x: 170,
        y: 290
    },
    Y: {
        x: 390,
        y: 290
    }
};
const G_EDGES = [
    [
        "C",
        "S"
    ],
    [
        "A",
        "P"
    ],
    [
        "A",
        "Q"
    ],
    [
        "B",
        "R"
    ],
    [
        "S",
        "P"
    ],
    [
        "S",
        "X"
    ],
    [
        "P",
        "X"
    ],
    [
        "Q",
        "R"
    ],
    [
        "Q",
        "Y"
    ],
    [
        "R",
        "Y"
    ],
    [
        "X",
        "Y"
    ]
];
const HOT_EDGES = new Set([
    "AP",
    "SP",
    "PX"
]);
function GEdge({ a, b, hot = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
        x1: a.x,
        y1: a.y,
        x2: b.x,
        y2: b.y,
        stroke: hot ? "#d97706" : "#dcc9a4",
        strokeWidth: hot ? 4 : 2
    }, void 0, false, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 805,
        columnNumber: 5
    }, this);
}
_c8 = GEdge;
function GNode({ x, y, t, hot = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            hot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: x,
                cy: y,
                r: "27",
                fill: "none",
                stroke: "#d97706",
                strokeWidth: "2",
                strokeDasharray: "5 4"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 819,
                columnNumber: 14
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: x,
                cy: y,
                r: "20",
                fill: hot ? "#d97706" : "#fff8ec",
                stroke: hot ? "#b45309" : "#c99a5b",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 820,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: x,
                y: y + 5,
                textAnchor: "middle",
                fontSize: "14",
                fontWeight: "800",
                fill: hot ? "#fff7ec" : "#7c4a12",
                children: t
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 821,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 818,
        columnNumber: 5
    }, this);
}
_c9 = GNode;
function LectureGraph() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 560 340",
        className: "mx-auto h-auto w-full max-w-xl",
        role: "img",
        "aria-label": "Graph with vertices C A B on top, S P Q R in the middle, X Y at the bottom and eleven edges; P is highlighted with degree 3",
        children: [
            G_EDGES.map(([a, b])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GEdge, {
                    a: G_POS[a],
                    b: G_POS[b],
                    hot: HOT_EDGES.has(`${a}${b}`) || HOT_EDGES.has(`${b}${a}`)
                }, `${a}${b}`, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 837,
                    columnNumber: 9
                }, this)),
            Object.entries(G_POS).map(([n, p])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GNode, {
                    x: p.x,
                    y: p.y,
                    t: n,
                    hot: n === "P"
                }, n, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 840,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "40",
                y: "112",
                fontSize: "12",
                fontWeight: "800",
                fill: "#b45309",
                children: "Degree(P) = 3"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 842,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "128",
                y1: "120",
                x2: "196",
                y2: "152",
                stroke: "#b45309",
                strokeWidth: "1.5",
                strokeDasharray: "3 3"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 843,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "280",
                y: "326",
                textAnchor: "middle",
                fontSize: "11",
                fontWeight: "700",
                fill: "#8a5a06",
                children: "gold edges = the three edges touching P → degree 3"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 844,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 830,
        columnNumber: 5
    }, this);
}
_c10 = LectureGraph;
/* ============================================================
   GRAPHS — dichotomy micro-SVGs
   ============================================================ */ function DichArt({ kind }) {
    const dot = (x, y, t, f = "#f0a04b")=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: x,
                    cy: y,
                    r: "11",
                    fill: f
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 857,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x,
                    y: y + 4,
                    textAnchor: "middle",
                    fontSize: "10",
                    fontWeight: "800",
                    fill: "#3e2c1d",
                    children: t
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 858,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 856,
            columnNumber: 5
        }, this);
    switch(kind){
        case "dir":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 220 66",
                className: "h-16 w-full",
                "aria-hidden": true,
                children: [
                    dot(30, 22, "A"),
                    dot(110, 22, "B"),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "43",
                        y1: "22",
                        x2: "97",
                        y2: "22",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 867,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "70",
                        y: "52",
                        textAnchor: "middle",
                        fontSize: "9",
                        fontWeight: "700",
                        fill: "#8a5a06",
                        children: "cousin of · two-way"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 868,
                        columnNumber: 11
                    }, this),
                    dot(150, 22, "C", "#b45309"),
                    dot(200, 22, "D", "#b45309"),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "162",
                        y1: "22",
                        x2: "184",
                        y2: "22",
                        stroke: "#c2410c",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 871,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M182 17 L190 22 L182 27",
                        stroke: "#c2410c",
                        strokeWidth: "2.5",
                        fill: "none",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 872,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "176",
                        y: "52",
                        textAnchor: "middle",
                        fontSize: "9",
                        fontWeight: "700",
                        fill: "#c2410c",
                        children: "son of · one-way"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 873,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 864,
                columnNumber: 9
            }, this);
        case "wgt":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 220 66",
                className: "h-16 w-full",
                "aria-hidden": true,
                children: [
                    dot(30, 26, "A"),
                    dot(100, 26, "B"),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "43",
                        y1: "26",
                        x2: "87",
                        y2: "26",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 881,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "65",
                        y: "52",
                        textAnchor: "middle",
                        fontSize: "9",
                        fontWeight: "700",
                        fill: "#8a5a06",
                        children: "knows · equal"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 882,
                        columnNumber: 11
                    }, this),
                    dot(140, 26, "C", "#b45309"),
                    dot(200, 26, "D", "#b45309"),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "152",
                        y1: "26",
                        x2: "188",
                        y2: "26",
                        stroke: "#d97706",
                        strokeWidth: "3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 885,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "158",
                        y: "8",
                        width: "24",
                        height: "15",
                        rx: "4",
                        fill: "#d97706"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 886,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "170",
                        y: "19",
                        textAnchor: "middle",
                        fontSize: "9",
                        fontWeight: "800",
                        fill: "#fff7ec",
                        children: "5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 887,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "170",
                        y: "52",
                        textAnchor: "middle",
                        fontSize: "9",
                        fontWeight: "700",
                        fill: "#c2410c",
                        children: "brother of · strong"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 888,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 878,
                columnNumber: 9
            }, this);
        case "con":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 220 66",
                className: "h-16 w-full",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "30",
                        y1: "22",
                        x2: "70",
                        y2: "22",
                        stroke: "#c99a5b",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 894,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "30",
                        y1: "22",
                        x2: "50",
                        y2: "46",
                        stroke: "#c99a5b",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 895,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "70",
                        y1: "22",
                        x2: "50",
                        y2: "46",
                        stroke: "#c99a5b",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 896,
                        columnNumber: 11
                    }, this),
                    dot(30, 22, "a"),
                    dot(70, 22, "b"),
                    dot(50, 46, "c"),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "150",
                        y1: "22",
                        x2: "180",
                        y2: "22",
                        stroke: "#dcc9a4",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 900,
                        columnNumber: 11
                    }, this),
                    dot(150, 22, "d", "#e3b08a"),
                    dot(180, 22, "e", "#e3b08a"),
                    dot(165, 46, "f", "#e3b08a"),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "98",
                        y1: "30",
                        x2: "122",
                        y2: "30",
                        stroke: "#be4a4a",
                        strokeWidth: "2",
                        strokeDasharray: "3 4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 904,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 893,
                columnNumber: 9
            }, this);
        case "cyc":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 220 66",
                className: "h-16 w-full",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "45",
                        y1: "20",
                        x2: "25",
                        y2: "48",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 910,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "45",
                        y1: "20",
                        x2: "70",
                        y2: "48",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 911,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "29",
                        y1: "42",
                        x2: "66",
                        y2: "42",
                        stroke: "#c99a5b",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 912,
                        columnNumber: 11
                    }, this),
                    dot(45, 20, "A"),
                    dot(27, 48, "B"),
                    dot(68, 48, "C"),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "48",
                        y: "64",
                        textAnchor: "middle",
                        fontSize: "9",
                        fontWeight: "700",
                        fill: "#c2410c",
                        children: "A–B–C–A · cycles"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 916,
                        columnNumber: 11
                    }, this),
                    dot(150, 20, "A", "#7c9a3e"),
                    dot(130, 50, "B", "#7c9a3e"),
                    dot(175, 50, "C", "#7c9a3e"),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "145",
                        y1: "30",
                        x2: "135",
                        y2: "40",
                        stroke: "#7c9a3e",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 920,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "160",
                        y1: "30",
                        x2: "170",
                        y2: "40",
                        stroke: "#7c9a3e",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 921,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "153",
                        y: "64",
                        textAnchor: "middle",
                        fontSize: "9",
                        fontWeight: "700",
                        fill: "#5c7325",
                        children: "parents of C · no way back"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 922,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 909,
                columnNumber: 9
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 220 66",
                className: "h-16 w-full",
                "aria-hidden": true,
                children: [
                    dot(110, 32, "A", "#d97706"),
                    [
                        18,
                        55,
                        200,
                        165
                    ].map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: i < 2 ? 94 : 126,
                                    y1: i < 2 ? 26 : 38,
                                    x2: i < 2 ? x + 6 : x - 6,
                                    y2: i < 2 ? 12 : 52,
                                    stroke: i < 2 ? "#c2410c" : "#7c9a3e",
                                    strokeWidth: "2.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 931,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: i < 2 ? x : x,
                                    cy: i < 2 ? 10 : 54,
                                    r: "5",
                                    fill: i < 2 ? "#c2410c" : "#7c9a3e"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 939,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, x, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 930,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "30",
                        y: "8",
                        fontSize: "9",
                        fontWeight: "800",
                        fill: "#c2410c",
                        children: "in-degree 2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 942,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "196",
                        y: "64",
                        textAnchor: "end",
                        fontSize: "9",
                        fontWeight: "800",
                        fill: "#5c7325",
                        children: "out-degree 3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 943,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 927,
                columnNumber: 9
            }, this);
    }
}
_c11 = DichArt;
const DICHOTOMIES = [
    {
        kind: "dir",
        title: "Undirected vs Directed",
        rows: [
            "Undirected — “cousin of”: the link works both ways",
            "Directed — “son of”: arrows one way only, giving each vertex an in-degree and an out-degree"
        ]
    },
    {
        kind: "wgt",
        title: "Unweighted vs Weighted",
        rows: [
            "Unweighted — “knows”: every edge counts the same",
            "Weighted — “brother of” vs “cousin of”: edges carry strength values"
        ]
    },
    {
        kind: "con",
        title: "Connected vs Disconnected",
        rows: [
            "Connected — one community: every vertex reachable from every other",
            "Disconnected — isolated groups: a native Indian and a native Chinese with no path between"
        ]
    },
    {
        kind: "cyc",
        title: "Cyclic vs Acyclic",
        rows: [
            "Cyclic — A–B–C–A friends triangle: a path returns to its start",
            "Acyclic — A and B parents of C: no path ever loops back (a tree is this)"
        ]
    },
    {
        kind: "deg",
        title: "In-degree vs Out-degree",
        rows: [
            "In-degree — arrows pointing AT the vertex",
            "Out-degree — arrows leaving it; on undirected graphs they collapse into one degree"
        ]
    }
];
function AtbGraphsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "graphs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Lecture 15 · Graphs",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "grad-text",
                            children: "Graphs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 984,
                            columnNumber: 13
                        }, void 0),
                        " — when one parent isn't enough"
                    ]
                }, void 0, true),
                lead: "Friendship, roads, bank transfers: real relationships refuse to live under a single parent. Trees capture hierarchy between parent and child; graphs capture relationships between equal entities — multiple connections, multi-directional, the general structure underneath both."
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 980,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Trees can't do friendship",
                sub: "The one-parent rule that graphs break on purpose"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 990,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-6",
                            style: {
                                borderColor: "#eec3b6",
                                background: "#fdf0ec"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.14em]",
                                    style: {
                                        color: "#be4a4a"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 995,
                                            columnNumber: 15
                                        }, this),
                                        " the tree rule"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 994,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.92rem] leading-relaxed text-[#2b2014]",
                                    children: [
                                        "In a tree, every child has ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "exactly ONE parent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 998,
                                            columnNumber: 42
                                        }, this),
                                        " and links run",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "parent → child only"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 999,
                                            columnNumber: 15
                                        }, this),
                                        " — a single-sided, hierarchical view. Works for org charts and folders; hopeless for “who is friends with whom”, where anyone can connect to anyone."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 997,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip mt-3",
                                    children: "Lecture 15 · hierarchy, one parent"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1002,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 993,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 992,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-6",
                            style: {
                                borderColor: "#c9d8a4",
                                background: "#f4f6e8"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.14em]",
                                    style: {
                                        color: "#5c7325"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1008,
                                            columnNumber: 15
                                        }, this),
                                        " the graph upgrade"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1007,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.92rem] leading-relaxed text-[#2b2014]",
                                    children: [
                                        "A ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "graph"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1011,
                                            columnNumber: 17
                                        }, this),
                                        " drops the rule: vertices are ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "equal entities"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1011,
                                            columnNumber: 69
                                        }, this),
                                        ", each free to hold ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "multiple connections"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1012,
                                            columnNumber: 20
                                        }, this),
                                        " in every direction. Friendship, roads, the internet —",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "trees represent hierarchy, GRAPHS represent relationship"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1013,
                                            columnNumber: 15
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1010,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip mt-3",
                                    children: "Lecture 15 · equal entities"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1015,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1006,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1005,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 991,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "warn",
                    title: "Lecture 15 · when a family tree stops being a tree",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Draw the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "complete"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1023,
                                columnNumber: 22
                            }, this),
                            " family tree — both parental sides — and the one-parent rule breaks immediately: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "every child has TWO parents"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1024,
                                columnNumber: 33
                            }, this),
                            ". Add spouse links and cousin links and the hierarchy dissolves entirely. ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "A complete family tree needs a graph"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1025,
                                columnNumber: 47
                            }, this),
                            " — the lecture's cleanest proof that trees cannot do every job."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1022,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1021,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1020,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "V and E — the whole graph in two sets",
                sub: "The lecture graph, drawn and formalised"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1031,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-5 md:p-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 flex flex-wrap items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chip",
                                children: "Lecture 15 · the lecture graph"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1035,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1034,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LectureGraph, {}, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1037,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                                    k: "Vertices (V)",
                                    v: "the objects / entities — a person, account, city, product (singular: vertex, plural: vertices)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1039,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                                    k: "Edges (E)",
                                    v: "the connections / relationships between vertices — friendship, a road, a transaction, a collaboration"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1040,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                                    k: "G = (V, E)",
                                    v: "the standard notation: a graph is completely described by its vertex set V and its edge set E — nothing more"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1041,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1038,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                title: "the lecture graph, formally",
                                runnable: false,
                                code: `V = {A, B, C, P, Q, R, S, X, Y}

E = {(C,S), (A,P), (A,Q), (B,R), (S,P),
     (Q,R), (S,X), (P,X), (Q,Y), (R,Y), (X,Y)}   # 11 edges

degree(P) = 3        # P connects to A, S and X
degrees: C=1, A=2, B=1 · S=3, P=3, Q=3, R=3, X=3, Y=3
Σ degrees = 22 = 2 × |E|     # every edge has two ends`
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1044,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1043,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1033,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1032,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "Five dichotomies",
                sub: "Five either/or switches that classify any graph at a glance"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1060,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                children: [
                    DICHOTOMIES.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * 60,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift flex h-full flex-col gap-2 p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[.95rem] font-bold text-[#3e2c1d]",
                                        children: d.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1065,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DichArt, {
                                        kind: d.kind
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1066,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-1 grid gap-1.5",
                                        children: d.rows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-2 text-[.8rem] leading-relaxed text-[#4a3826]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d97706]",
                                                        "aria-hidden": true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 1070,
                                                        columnNumber: 21
                                                    }, this),
                                                    r
                                                ]
                                            }, r, true, {
                                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                lineNumber: 1069,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1067,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1064,
                                columnNumber: 13
                            }, this)
                        }, d.kind, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1063,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 300,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm flex h-full flex-col justify-center gap-2 p-5",
                            style: {
                                background: "linear-gradient(150deg,#fffaf0,#fdeed6)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "eyebrow",
                                    children: "the punchline"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1080,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.88rem] leading-relaxed text-[#2b2014]",
                                    children: [
                                        "Flip all five switches to ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "undirected · unweighted · connected · acyclic · one-parent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1082,
                                            columnNumber: 41
                                        }, this),
                                        " ",
                                        "and a graph collapses back into… a ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "tree"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1083,
                                            columnNumber: 50
                                        }, this),
                                        ". Every tree is a graph; most graphs are not trees."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1081,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1079,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1078,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1061,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "4",
                title: "Tree or graph? Ask the supervisor question",
                sub: "One boss → tree. Many independent connections → graph"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1089,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2 px-4 pt-4 md:px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chip",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                        className: "h-3.5 w-3.5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1093,
                                        columnNumber: 36
                                    }, this),
                                    " Lecture 15 · choosing checklist"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1093,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1092,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto p-4 md:p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "warm-table min-w-[680px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Scenario"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 1097,
                                                    columnNumber: 26
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Structure"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 1097,
                                                    columnNumber: 43
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Why"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 1097,
                                                    columnNumber: 61
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1097,
                                            columnNumber: 22
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1097,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Company hierarchy — people and designations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 1099,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Tree"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 1099,
                                                        columnNumber: 110
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Clear reporting structure: everyone answers to a single supervisor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 1099,
                                                        columnNumber: 123
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                lineNumber: 1099,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Corporate group of independent companies"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 1100,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Graph"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 1100,
                                                        columnNumber: 107
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Companies are autonomous, with multiple interconnections between them"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 1100,
                                                        columnNumber: 121
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                lineNumber: 1100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Institute collaborations and networks"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 1101,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Graph"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 1101,
                                                        columnNumber: 104
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Institutions are independent, linked by many research partnerships"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 1101,
                                                        columnNumber: 118
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                lineNumber: 1101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Departments within an institution"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 1102,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Tree"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 1102,
                                                        columnNumber: 100
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Clear hierarchy: institution → department → research groups"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 1102,
                                                        columnNumber: 113
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                lineNumber: 1102,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1098,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1096,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1095,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "px-4 pb-5 text-[.82rem] leading-relaxed text-[#8a6a48] md:px-6",
                            children: [
                                "Rule of thumb: if every node answers to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "exactly one"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1107,
                                    columnNumber: 53
                                }, this),
                                " node above it, draw a tree. The moment entities relate ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "sideways"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1108,
                                    columnNumber: 40
                                }, this),
                                " — partnerships, friendships, roads — you need a graph."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1091,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1090,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            q: "Degree of a vertex =",
                            options: [
                                "its height",
                                "number of edges directly connected to it",
                                "number of subtrees",
                                "its depth"
                            ],
                            answer: 1,
                            explain: "Degree counts the edges touching the vertex — P touches AP, SP and PX, so degree(P) = 3. Height and depth belong to trees, not to graph vertices."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1115,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            q: "Trees represent hierarchy; graphs represent…",
                            options: [
                                "sorted data",
                                "relationships",
                                "loops only",
                                "arrays"
                            ],
                            answer: 1,
                            explain: "Graphs are the general language of relationships: any entity may connect to any other, with no parent rules at all."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1123,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1122,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Practice"], {
                    title: "Graphs — pen & paper",
                    items: [
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Draw 4 friends (you + 3) with friendship edges, then list ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "V"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1137,
                                        columnNumber: 78
                                    }, void 0),
                                    " and ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "E"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1137,
                                        columnNumber: 101
                                    }, void 0),
                                    " for your graph."
                                ]
                            }, void 0, true),
                            hint: "V is the set of names; E is the set of pairs — write each edge as two letters, like XY."
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Compute the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "degree of every vertex"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1141,
                                        columnNumber: 32
                                    }, void 0),
                                    " in your friend graph and check the sum equals twice the number of edges."
                                ]
                            }, void 0, true),
                            hint: "Each edge has exactly two ends, so degrees always add up to 2 × |E|."
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1133,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 979,
        columnNumber: 5
    }, this);
}
_c12 = AtbGraphsSection;
/* ============================================================
   GRAPH PROPERTIES — Lecture 16 (dark)
   ============================================================ */ /* dark-theme definition row — the dark sibling of KV */ function DKV({ k, v }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1 rounded-xl border border-[rgba(245,158,11,.18)] bg-[rgba(43,27,16,.5)] px-3.5 py-2.5 sm:flex-row sm:items-baseline sm:gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "shrink-0 font-mono text-[.72rem] font-bold uppercase tracking-wider text-[#f5c889]",
                children: k
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[.86rem] leading-relaxed text-[#e9d7bf]",
                children: v
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 1158,
        columnNumber: 5
    }, this);
}
_c13 = DKV;
/* directed vs undirected — two panels, arrowhead vs plain edge */ function DirPairArt() {
    const n = (x, y, t, f, s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: x,
                    cy: y,
                    r: "21",
                    fill: f,
                    stroke: s,
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1169,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x,
                    y: y + 5,
                    textAnchor: "middle",
                    fontSize: "13",
                    fontWeight: "800",
                    fill: "#fff7ec",
                    children: t
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1170,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1168,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 640 212",
        className: "mx-auto h-auto w-full max-w-2xl",
        role: "img",
        "aria-label": "Two mini graphs side by side: an undirected edge between A and B with no arrowheads, meaning the relationship works both ways; and a directed edge with an arrowhead from A to B, meaning the relationship goes one way only",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "10",
                        y: "10",
                        width: "290",
                        height: "140",
                        rx: "18",
                        fill: "rgba(255,236,210,.05)",
                        stroke: "rgba(245,158,11,.25)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "155",
                        y: "34",
                        textAnchor: "middle",
                        fontSize: "11",
                        fontWeight: "800",
                        letterSpacing: "2",
                        fill: "#f5c889",
                        children: "UNDIRECTED · MUTUAL"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "106",
                        y1: "100",
                        x2: "204",
                        y2: "100",
                        stroke: "#f5c889",
                        strokeWidth: "3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1183,
                        columnNumber: 9
                    }, this),
                    n(80, 100, "A", "#ea580c", "#c2410c"),
                    n(230, 100, "B", "#ea580c", "#c2410c"),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "155",
                        y: "170",
                        textAnchor: "middle",
                        fontSize: "10.5",
                        fontWeight: "700",
                        fill: "#ffd9ae",
                        children: "no arrowheads — A cousin of B means B cousin of A"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.15),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "340",
                        y: "10",
                        width: "290",
                        height: "140",
                        rx: "18",
                        fill: "rgba(255,236,210,.05)",
                        stroke: "rgba(245,158,11,.25)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "485",
                        y: "34",
                        textAnchor: "middle",
                        fontSize: "11",
                        fontWeight: "800",
                        letterSpacing: "2",
                        fill: "#f5c889",
                        children: "DIRECTED · ONE-WAY"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "436",
                        y1: "100",
                        x2: "524",
                        y2: "100",
                        stroke: "#f5c889",
                        strokeWidth: "3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M536 100 L522 93 L522 107 Z",
                        fill: "#f5c889"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1192,
                        columnNumber: 9
                    }, this),
                    n(410, 100, "A", "#d97706", "#b45309"),
                    n(560, 100, "B", "#d97706", "#b45309"),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "485",
                        y: "170",
                        textAnchor: "middle",
                        fontSize: "10.5",
                        fontWeight: "700",
                        fill: "#ffd9ae",
                        children: "arrowhead — A son of B does not make B son of A"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.3),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "320",
                    y: "198",
                    textAnchor: "middle",
                    fontSize: "11",
                    fontWeight: "800",
                    fill: "#f5c889",
                    children: "the arrowhead is the whole difference"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 1174,
        columnNumber: 5
    }, this);
}
_c14 = DirPairArt;
/* in-degree vs out-degree — a creator node with counted arrows */ function DegreeCountArt() {
    const side = (x, y, t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: x,
                    cy: y,
                    r: "19",
                    fill: "rgba(255,246,232,.09)",
                    stroke: "rgba(245,158,11,.5)",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1208,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x,
                    y: y + 5,
                    textAnchor: "middle",
                    fontSize: "12",
                    fontWeight: "800",
                    fill: "#f5e6cd",
                    children: t
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1209,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1207,
            columnNumber: 5
        }, this);
    const head = (x, y, rot, col = "#f5c889")=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M0,-5.5 L10,0 L0,5.5 Z",
            fill: col,
            transform: `translate(${x} ${y}) rotate(${rot})`
        }, void 0, false, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1213,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 640 250",
        className: "mx-auto h-auto w-full max-w-xl",
        role: "img",
        "aria-label": "A creator node with three arrows arriving from followers P, Q and R, labelled in-degree 3, and one dashed arrow leaving to W, labelled out-degree 1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.1),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "88",
                        y1: "66",
                        x2: "277",
                        y2: "97",
                        stroke: "#f5c889",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1223,
                        columnNumber: 9
                    }, this),
                    head(289, 101, 13),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "80",
                        y1: "150",
                        x2: "275",
                        y2: "124",
                        stroke: "#f5c889",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1225,
                        columnNumber: 9
                    }, this),
                    head(287, 120, -7),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "130",
                        y1: "212",
                        x2: "275",
                        y2: "148",
                        stroke: "#f5c889",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1227,
                        columnNumber: 9
                    }, this),
                    head(287, 143, -24)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.2),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "370",
                        y1: "116",
                        x2: "512",
                        y2: "116",
                        stroke: "#e3b08a",
                        strokeWidth: "2.5",
                        strokeDasharray: "7 5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1231,
                        columnNumber: 9
                    }, this),
                    head(524, 116, 0, "#e3b08a")
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0),
                children: [
                    side(70, 56, "P"),
                    side(60, 152, "Q"),
                    side(112, 216, "R"),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "330",
                        cy: "118",
                        r: "34",
                        fill: "#d97706",
                        stroke: "#b45309",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "330",
                        y: "114",
                        textAnchor: "middle",
                        fontSize: "12",
                        fontWeight: "800",
                        fill: "#fff7ec",
                        children: "creator"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "330",
                        y: "130",
                        textAnchor: "middle",
                        fontSize: "12",
                        fontWeight: "800",
                        fill: "#fff7ec",
                        children: "you"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1240,
                        columnNumber: 9
                    }, this),
                    side(556, 116, "W")
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.3),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "196",
                        y: "24",
                        width: "132",
                        height: "22",
                        rx: "11",
                        fill: "rgba(234,88,12,.28)",
                        stroke: "rgba(245,158,11,.4)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "262",
                        y: "39",
                        textAnchor: "middle",
                        fontSize: "11",
                        fontWeight: "800",
                        fill: "#ffd9ae",
                        children: "in-degree 3 · followers"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "416",
                        y: "160",
                        width: "136",
                        height: "22",
                        rx: "11",
                        fill: "rgba(245,158,11,.1)",
                        stroke: "rgba(245,158,11,.3)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "484",
                        y: "175",
                        textAnchor: "middle",
                        fontSize: "11",
                        fontWeight: "800",
                        fill: "#e9d7bf",
                        children: "out-degree 1 · following"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1243,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 1216,
        columnNumber: 5
    }, this);
}
_c15 = DegreeCountArt;
/* weighted vs unweighted — thickness = strength */ function WeightArt() {
    const n = (x, y, t, fs = 12)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: x,
                    cy: y,
                    r: "17",
                    fill: "rgba(255,246,232,.09)",
                    stroke: "rgba(245,158,11,.5)",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1257,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x,
                    y: y + 4.5,
                    textAnchor: "middle",
                    fontSize: fs,
                    fontWeight: "800",
                    fill: "#f5e6cd",
                    children: t
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1258,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1256,
            columnNumber: 5
        }, this);
    const badge = (x, y, t, strong)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: x - 20,
                    y: y - 11,
                    width: "40",
                    height: "20",
                    rx: "10",
                    fill: strong ? "#d97706" : "rgba(245,158,11,.14)",
                    stroke: strong ? "#b45309" : "rgba(245,158,11,.4)"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1263,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x,
                    y: y + 3.5,
                    textAnchor: "middle",
                    fontSize: "11",
                    fontWeight: "800",
                    fill: strong ? "#fff7ec" : "#e9d7bf",
                    children: t
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1264,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1262,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 640 224",
        className: "mx-auto h-auto w-full max-w-2xl",
        role: "img",
        "aria-label": "Weighted edges: a thick edge from you to a sibling with weight 5 and a thin dashed edge to a distant cousin with weight 1; a thick edge Delhi to Mumbai labelled 28 flights a week and a thin dashed edge Delhi to Imphal labelled 2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "160",
                        y: "26",
                        textAnchor: "middle",
                        fontSize: "11",
                        fontWeight: "800",
                        letterSpacing: "2",
                        fill: "#f5c889",
                        children: "FAMILY STRENGTH"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "100",
                        y1: "110",
                        x2: "210",
                        y2: "110",
                        stroke: "#f5c889",
                        strokeWidth: "5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "93",
                        y1: "124",
                        x2: "146",
                        y2: "158",
                        stroke: "#e3b08a",
                        strokeWidth: "2",
                        strokeDasharray: "5 5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1277,
                        columnNumber: 9
                    }, this),
                    n(82, 110, "you"),
                    n(228, 110, "sibling", 9),
                    n(155, 170, "cousin", 9),
                    badge(158, 86, "5", true),
                    badge(104, 194, "1", false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "160",
                        y: "46",
                        textAnchor: "middle",
                        fontSize: "10",
                        fontWeight: "700",
                        fill: "#e9d7bf",
                        children: "siblings weigh more than distant cousins"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1283,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.15),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "480",
                        y: "26",
                        textAnchor: "middle",
                        fontSize: "11",
                        fontWeight: "800",
                        letterSpacing: "2",
                        fill: "#f5c889",
                        children: "FLIGHT FREQUENCY"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "404",
                        y1: "110",
                        x2: "514",
                        y2: "110",
                        stroke: "#f5c889",
                        strokeWidth: "5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "398",
                        y1: "124",
                        x2: "446",
                        y2: "158",
                        stroke: "#e3b08a",
                        strokeWidth: "2",
                        strokeDasharray: "5 5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1288,
                        columnNumber: 9
                    }, this),
                    n(386, 110, "Del"),
                    n(532, 110, "Mum"),
                    n(460, 170, "Imphal", 8),
                    badge(462, 86, "28", true),
                    badge(420, 194, "2", false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "480",
                        y: "46",
                        textAnchor: "middle",
                        fontSize: "10",
                        fontWeight: "700",
                        fill: "#e9d7bf",
                        children: "more flights between cities → higher weight"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1294,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1285,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 1268,
        columnNumber: 5
    }, this);
}
_c16 = WeightArt;
/* connected vs disconnected — the Port Blair island example */ function ConnectArt() {
    const n = (x, y, t, dim = false, fs = 9)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: x,
                    cy: y,
                    r: "18",
                    fill: dim ? "rgba(255,246,232,.05)" : "#ea580c",
                    stroke: dim ? "rgba(245,158,11,.4)" : "#c2410c",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1304,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x,
                    y: y + 3.5,
                    textAnchor: "middle",
                    fontSize: fs,
                    fontWeight: "800",
                    fill: dim ? "#cbb392" : "#fff7ec",
                    children: t
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1305,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1303,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 640 216",
        className: "mx-auto h-auto w-full max-w-2xl",
        role: "img",
        "aria-label": "Mainland road network: Delhi, Amdabad, Silchar and Kolkata all joined by roads; then a dashed sea gap and Port Blair alone with no road edges, a disconnected component",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "176",
                        y: "24",
                        textAnchor: "middle",
                        fontSize: "11",
                        fontWeight: "800",
                        letterSpacing: "2",
                        fill: "#f5c889",
                        children: "MAINLAND · CONNECTED"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "108",
                        y1: "80",
                        x2: "182",
                        y2: "80",
                        stroke: "rgba(245,158,11,.55)",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "101",
                        y1: "95",
                        x2: "130",
                        y2: "135",
                        stroke: "rgba(245,158,11,.55)",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "188",
                        y1: "94",
                        x2: "152",
                        y2: "136",
                        stroke: "rgba(245,158,11,.55)",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "212",
                        y1: "94",
                        x2: "250",
                        y2: "136",
                        stroke: "rgba(245,158,11,.55)",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1320,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "158",
                        y1: "150",
                        x2: "244",
                        y2: "150",
                        stroke: "rgba(245,158,11,.55)",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1321,
                        columnNumber: 9
                    }, this),
                    n(90, 80, "Delhi"),
                    n(200, 80, "Amdabad"),
                    n(140, 150, "Silchar"),
                    n(262, 150, "Kolkata", false, 8.5),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "176",
                        y: "198",
                        textAnchor: "middle",
                        fontSize: "10",
                        fontWeight: "700",
                        fill: "#e9d7bf",
                        children: "every city reaches every other by road"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1326,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.15),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "336",
                        y1: "104",
                        x2: "416",
                        y2: "104",
                        stroke: "#e6a08c",
                        strokeWidth: "2",
                        strokeDasharray: "4 7"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "376",
                        y: "92",
                        textAnchor: "middle",
                        fontSize: "10",
                        fontWeight: "800",
                        fill: "#e6a08c",
                        children: "sea — no roads"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1330,
                        columnNumber: 9
                    }, this),
                    n(490, 104, "", true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "490",
                        y: "140",
                        textAnchor: "middle",
                        fontSize: "10",
                        fontWeight: "800",
                        fill: "#e9d7bf",
                        children: "Port Blair"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1332,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "490",
                        y: "156",
                        textAnchor: "middle",
                        fontSize: "9",
                        fontWeight: "700",
                        fill: "#cbb392",
                        children: "no road edges — an island component"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1333,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "490",
                        y: "198",
                        textAnchor: "middle",
                        fontSize: "10",
                        fontWeight: "700",
                        fill: "#e9d7bf",
                        children: "Amdabad → Port Blair: disconnected"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1334,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1328,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 1309,
        columnNumber: 5
    }, this);
}
_c17 = ConnectArt;
/* cyclic vs acyclic — airports vs a metro line */ function CycleArt() {
    const head = (x, y, rot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M0,-5.5 L10,0 L0,5.5 Z",
            fill: "#f5c889",
            transform: `translate(${x} ${y}) rotate(${rot})`
        }, void 0, false, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1343,
            columnNumber: 5
        }, this);
    const n = (x, y, t, f = "#ea580c")=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: x,
                    cy: y,
                    r: "17",
                    fill: f,
                    stroke: "#c2410c",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1347,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x,
                    y: y + 4.5,
                    textAnchor: "middle",
                    fontSize: "11",
                    fontWeight: "800",
                    fill: "#fff7ec",
                    children: t
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1348,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1346,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 640 230",
        className: "mx-auto h-auto w-full max-w-2xl",
        role: "img",
        "aria-label": "Left: airports A, B and C joined by flights in both directions, a cyclic network where A to B to C returns to A. Right: a metro line with green terminal caps and one-way travel, an acyclic network",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "150",
                        y: "26",
                        textAnchor: "middle",
                        fontSize: "11",
                        fontWeight: "800",
                        letterSpacing: "2",
                        fill: "#f5c889",
                        children: "AIRPORTS · CYCLIC"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1359,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "150",
                        y1: "62",
                        x2: "84",
                        y2: "158",
                        stroke: "#f5c889",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1360,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "150",
                        y1: "62",
                        x2: "216",
                        y2: "158",
                        stroke: "#f5c889",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1361,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "98",
                        y1: "158",
                        x2: "202",
                        y2: "158",
                        stroke: "#f5c889",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1362,
                        columnNumber: 9
                    }, this),
                    head(96, 141, 124),
                    head(138, 79, -56),
                    head(204, 141, 56),
                    head(162, 79, -124),
                    head(196, 158, 0),
                    head(104, 158, 180),
                    n(150, 62, "A"),
                    n(84, 158, "B"),
                    n(216, 158, "C"),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "150",
                        y: "200",
                        textAnchor: "middle",
                        fontSize: "10",
                        fontWeight: "700",
                        fill: "#ffd9ae",
                        children: "return flights both ways — A → B → C → A without retracing a step"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1372,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1358,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                ...rise(0.15),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "462",
                        y: "26",
                        textAnchor: "middle",
                        fontSize: "11",
                        fontWeight: "800",
                        letterSpacing: "2",
                        fill: "#f5c889",
                        children: "METRO LINE · ACYCLIC"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1375,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "366",
                        y1: "110",
                        x2: "554",
                        y2: "110",
                        stroke: "#f5c889",
                        strokeWidth: "2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1376,
                        columnNumber: 9
                    }, this),
                    head(408, 110, 0),
                    head(456, 110, 0),
                    head(504, 110, 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "358",
                        y: "98",
                        width: "10",
                        height: "24",
                        rx: "3",
                        fill: "#7c9a3e"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1380,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "548",
                        y: "98",
                        width: "10",
                        height: "24",
                        rx: "3",
                        fill: "#7c9a3e"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1381,
                        columnNumber: 9
                    }, this),
                    n(384, 110, "1", "#f0a04b"),
                    n(432, 110, "2", "#f0a04b"),
                    n(480, 110, "3", "#f0a04b"),
                    n(528, 110, "4", "#f0a04b"),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "462",
                        y: "152",
                        textAnchor: "middle",
                        fontSize: "10",
                        fontWeight: "700",
                        fill: "#ffd9ae",
                        children: "green caps = terminals — forward only, no way back without retracing"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "462",
                        y: "200",
                        textAnchor: "middle",
                        fontSize: "10",
                        fontWeight: "700",
                        fill: "#e9d7bf",
                        children: "parent → child · org hierarchies · metro lines all live here"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1387,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1374,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 1352,
        columnNumber: 5
    }, this);
}
_c18 = CycleArt;
/* the four independent properties — mini diagrams for the matrix */ function PropMini({ kind }) {
    const dot = (x, y, t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: x,
                    cy: y,
                    r: "11",
                    fill: "#f0a04b"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1397,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x,
                    y: y + 4,
                    textAnchor: "middle",
                    fontSize: "10",
                    fontWeight: "800",
                    fill: "#3e2c1d",
                    children: t
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1398,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1396,
            columnNumber: 5
        }, this);
    const dim = (x, y, t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: x,
                    cy: y,
                    r: "11",
                    fill: "rgba(255,246,232,.08)",
                    stroke: "rgba(245,158,11,.5)"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1403,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: x,
                    y: y + 4,
                    textAnchor: "middle",
                    fontSize: "10",
                    fontWeight: "800",
                    fill: "#f5e6cd",
                    children: t
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1404,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1402,
            columnNumber: 5
        }, this);
    if (kind === "dir") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 220 56",
        className: "h-14 w-full",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "44",
                y1: "24",
                x2: "96",
                y2: "24",
                stroke: "#f5c889",
                strokeWidth: "2.5"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1410,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M104 24 L92 18 L92 30 Z",
                fill: "#f5c889"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1411,
                columnNumber: 9
            }, this),
            dot(32, 24, "A"),
            dot(116, 24, "B"),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "166",
                y: "28",
                textAnchor: "middle",
                fontSize: "9",
                fontWeight: "800",
                fill: "#ffd9ae",
                children: "one-way"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1414,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 1409,
        columnNumber: 7
    }, this);
    if (kind === "wgt") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 220 56",
        className: "h-14 w-full",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "44",
                y1: "30",
                x2: "96",
                y2: "30",
                stroke: "#f5c889",
                strokeWidth: "4"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1420,
                columnNumber: 9
            }, this),
            dot(32, 30, "A"),
            dot(108, 30, "B"),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "56",
                y: "8",
                width: "26",
                height: "15",
                rx: "7",
                fill: "#d97706"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1423,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "69",
                y: "19",
                textAnchor: "middle",
                fontSize: "9",
                fontWeight: "800",
                fill: "#fff7ec",
                children: "5"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1424,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "166",
                y: "34",
                textAnchor: "middle",
                fontSize: "9",
                fontWeight: "800",
                fill: "#ffd9ae",
                children: "strength"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1425,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 1419,
        columnNumber: 7
    }, this);
    if (kind === "con") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 220 56",
        className: "h-14 w-full",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "28",
                y1: "20",
                x2: "58",
                y2: "20",
                stroke: "#f5c889",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1431,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "28",
                y1: "20",
                x2: "43",
                y2: "42",
                stroke: "#f5c889",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1432,
                columnNumber: 9
            }, this),
            dot(26, 20, "a"),
            dim(60, 20, "b"),
            dim(43, 42, "c"),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "118",
                y1: "32",
                x2: "146",
                y2: "32",
                stroke: "#e6a08c",
                strokeWidth: "2",
                strokeDasharray: "3 5"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1436,
                columnNumber: 9
            }, this),
            dim(178, 28, "z"),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "110",
                y: "14",
                textAnchor: "middle",
                fontSize: "9",
                fontWeight: "800",
                fill: "#e6a08c",
                children: "no path"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1438,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 1430,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 220 56",
        className: "h-14 w-full",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "52",
                y1: "16",
                x2: "28",
                y2: "42",
                stroke: "#f5c889",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1443,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "52",
                y1: "16",
                x2: "76",
                y2: "42",
                stroke: "#f5c889",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1444,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "34",
                y1: "42",
                x2: "70",
                y2: "42",
                stroke: "#f5c889",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1445,
                columnNumber: 7
            }, this),
            dot(52, 14, "A"),
            dot(28, 44, "B"),
            dot(76, 44, "C"),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "164",
                y: "32",
                textAnchor: "middle",
                fontSize: "9",
                fontWeight: "800",
                fill: "#ffd9ae",
                children: "A-B-C-A"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1449,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 1442,
        columnNumber: 5
    }, this);
}
_c19 = PropMini;
const PROPERTY_MATRIX = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__["ArrowLeftRight"],
        kind: "dir",
        title: "Direction",
        q: "Does the relationship work both ways?",
        row: "Undirected — cousin of, mutual · Directed — son of, one-way"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$weight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Weight$3e$__["Weight"],
        kind: "wgt",
        title: "Weight",
        q: "Are all connections equal?",
        row: "Unweighted — all edges equal · Weighted — strength per connection"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waypoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waypoints$3e$__["Waypoints"],
        kind: "con",
        title: "Connectivity",
        q: "Can everyone reach everyone?",
        row: "Connected — one piece · Disconnected — isolated components"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"],
        kind: "cyc",
        title: "Cycles",
        q: "Can a path return to its start?",
        row: "Cyclic — loops exist · Acyclic — terminal endpoints"
    }
];
function AtbGraphPropsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "graphprops",
        dark: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                dark: true,
                eyebrow: "Lecture 16 · Graph properties",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Four switches that ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "grad-text",
                            children: "shape every graph"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1493,
                            columnNumber: 32
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Direction, weight, connectivity, cycles — four independent properties, each an either/or choice. Flip them in any combination and the result describes a real network: Facebook, Instagram, flight maps, metro lines."
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1488,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "1",
                title: "Directed or undirected?",
                sub: "Does the relationship automatically work in reverse?"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1499,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-5 md:p-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 flex flex-wrap items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-3.5 w-3.5",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1503,
                                            columnNumber: 36
                                        }, this),
                                        " Lecture 16 · direction"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1503,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: "the arrowhead is the whole difference"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1504,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1502,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DirPairArt, {}, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1506,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DKV, {
                                    k: "directed",
                                    v: "relationship defined in one direction only — “A is a son of B” does NOT make B a son of A; opposite directions are separate relationships (“son of” vs “father of”)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1508,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DKV, {
                                    k: "undirected",
                                    v: "the relationship is mutual — “A is a cousin of B” automatically means “B is a cousin of A”"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1509,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1507,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-[.84rem] leading-relaxed text-[#cbb392]",
                            children: [
                                "Rule of thumb: use a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-[#ffd9ae]",
                                    children: "directed"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1512,
                                    columnNumber: 34
                                }, this),
                                " graph when the direction of the relationship matters; an ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-[#ffd9ae]",
                                    children: "undirected"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1513,
                                    columnNumber: 38
                                }, this),
                                " one when you only care that a connection exists."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1511,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1501,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1500,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 md:grid-cols-3",
                    children: [
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                            name: "Facebook friendship",
                            read: "Mutual once the request is accepted — an undirected graph"
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"],
                            name: "Instagram follows",
                            read: "Following is not reciprocal — a directed graph"
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                            name: "LinkedIn",
                            read: "Connections are undirected, follows are directed — both kinds on one platform"
                        }
                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift flex flex-col gap-3 p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                                            style: {
                                                background: "rgba(245,158,11,.16)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                                className: "h-5 w-5",
                                                style: {
                                                    color: "#f5c889"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                lineNumber: 1528,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1527,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-[.92rem] font-bold text-[#f5e6cd]",
                                            children: s.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1530,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1526,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.84rem] leading-relaxed text-[#e9d7bf]",
                                    children: s.read
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1532,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, s.name, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1525,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1519,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1518,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "2",
                title: "In-degree vs out-degree",
                sub: "Edges arriving vs edges leaving — followers vs following"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1538,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-5 md:p-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 flex flex-wrap items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chip",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "h-3.5 w-3.5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1542,
                                        columnNumber: 36
                                    }, this),
                                    " Lecture 16 · count the arrows"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1542,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1541,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DegreeCountArt, {}, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1544,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DKV, {
                                    k: "in-degree",
                                    v: "number of edges coming INTO the vertex — on social media: how many users or pages follow you"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1546,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DKV, {
                                    k: "out-degree",
                                    v: "number of edges going OUT of the vertex — how many users or pages you follow"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1547,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1545,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1540,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1539,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    dark: true,
                    kind: "insight",
                    title: "Lecture 16 · why influencer marketing reads in-degrees",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "A firm buying influence wants an ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "audience"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1554,
                                columnNumber: 46
                            }, this),
                            ", so it hunts users with a",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "high in-degree"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1555,
                                columnNumber: 13
                            }, this),
                            " — many followers guarantee eyes on the campaign. Who the influencer ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "follows"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1556,
                                columnNumber: 24
                            }, this),
                            " (out-degree) is irrelevant to that deal. Same person, two counters — only one of them converts to marketing reach."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1553,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1552,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1551,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "3",
                title: "Weighted or unweighted?",
                sub: "Are all connections worth the same?"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1562,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-5 md:p-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 flex flex-wrap items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chip",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$weight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Weight$3e$__["Weight"], {
                                        className: "h-3.5 w-3.5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1566,
                                        columnNumber: 36
                                    }, this),
                                    " Lecture 16 · strength values"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1566,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1565,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WeightArt, {}, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1568,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DKV, {
                                    k: "unweighted",
                                    v: "every connection counts the same — “A knows B” is one plain edge, with no strength attached"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1570,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DKV, {
                                    k: "weighted",
                                    v: "each edge carries a strength value from context — sibling vs distant cousin, 28 flights a week between two cities vs 2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1571,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1569,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1564,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1563,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    dark: true,
                    kind: "why",
                    title: "Lecture 16 · the YouTube recommender is a weighted graph",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Videos from ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "subscribed channels you watch frequently"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1578,
                                columnNumber: 25
                            }, this),
                            " build high-weight connections — so the system recommends more of them. A brand-new channel you watched once carries ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "minimal weight"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1580,
                                columnNumber: 21
                            }, this),
                            ". Recommender systems prioritise content along the",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "highest connection strengths"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1581,
                                columnNumber: 13
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1577,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1576,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1575,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "4",
                title: "Connected or disconnected?",
                sub: "Can every vertex reach every other?"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1586,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-5 md:p-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 flex flex-wrap items-center gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chip",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waypoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waypoints$3e$__["Waypoints"], {
                                        className: "h-3.5 w-3.5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1590,
                                        columnNumber: 36
                                    }, this),
                                    " Lecture 16 · reachability"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1590,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1589,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConnectArt, {}, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1592,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DKV, {
                                    k: "connected",
                                    v: "every vertex can be reached from every other — paths may vary in length, but a path always exists"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1594,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DKV, {
                                    k: "disconnected",
                                    v: "some section is isolated — Amdabad → Silchar by road is connected; Amdabad → Port Blair by road is disconnected, because the island has no road to the mainland"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1595,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1593,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1588,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1587,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "5",
                title: "Cyclic or acyclic?",
                sub: "Can a path return home without retracing its steps?"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1600,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-5 md:p-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 flex flex-wrap items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
                                            className: "h-3.5 w-3.5",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1604,
                                            columnNumber: 36
                                        }, this),
                                        " Lecture 16 · airports → cyclic"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1604,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$train$2d$front$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrainFront$3e$__["TrainFront"], {
                                            className: "h-3.5 w-3.5",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1605,
                                            columnNumber: 36
                                        }, this),
                                        " Lecture 16 · metro → acyclic"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1605,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1603,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CycleArt, {}, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1607,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DKV, {
                                    k: "cyclic",
                                    v: "you can return to the starting vertex along a different route — the A–B–C–A friend triangle, an airport network where return flights close the loop"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1609,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DKV, {
                                    k: "acyclic",
                                    v: "no path returns to its start without retracing — parent → child moves forward only, org hierarchies descend, metro lines end at terminals"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1610,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1608,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1602,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1601,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "6",
                title: "Four independent switches",
                sub: "Any combination describes a real network"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: PROPERTY_MATRIX.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: i * 70,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift flex h-full flex-col gap-3 p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                                            style: {
                                                background: "rgba(245,158,11,.16)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(p.icon, {
                                                className: "h-5 w-5",
                                                style: {
                                                    color: "#f5c889"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                lineNumber: 1622,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1621,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-[1.02rem] font-bold text-[#f5e6cd]",
                                                    children: p.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 1625,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[.78rem] font-semibold text-[#b99a75]",
                                                    children: p.q
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 1626,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1624,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1620,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PropMini, {
                                    kind: p.kind
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1629,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-auto text-[.84rem] leading-relaxed text-[#e9d7bf]",
                                    children: p.row
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1630,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1619,
                            columnNumber: 13
                        }, this)
                    }, p.title, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1618,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1616,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    dark: true,
                    kind: "insight",
                    title: "Lecture 16 · independent — and that is the power",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "The four properties are ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "independent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1638,
                                columnNumber: 37
                            }, this),
                            ": a graph can be directed ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "and"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1638,
                                columnNumber: 91
                            }, this),
                            " weighted,",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "and"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1639,
                                columnNumber: 13
                            }, this),
                            " disconnected, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "and"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1639,
                                columnNumber: 40
                            }, this),
                            " cyclic — all at once. Together they describe real networks: Facebook friendships are undirected and cyclic (friend triangles); a metro line is acyclic with terminal endpoints; an airline map is weighted by flight frequency; Instagram follows are directed. Flip the four switches in combination and ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "any real system gets its graph"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1642,
                                columnNumber: 55
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1637,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1636,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1635,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Lecture 16 · direction",
                            q: "On Instagram, the who-follows-whom graph is…",
                            options: [
                                "undirected — following is mutual",
                                "directed — following is one-way",
                                "a tree — one root user",
                                "not a graph at all"
                            ],
                            answer: 1,
                            explain: "Your following list and your followers list are different, so every edge carries a direction. Facebook friendship is the undirected twin — mutual once accepted."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1649,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1648,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Lecture 16 · in-degree",
                            q: "A marketing firm is shortlisting influencers. The number it cares about is…",
                            options: [
                                "their out-degree — who they follow",
                                "their in-degree — how many follow them",
                                "the graph's height",
                                "the number of cycles"
                            ],
                            answer: 1,
                            explain: "In-degree = followers = a guaranteed audience for the campaign. Out-degree (who the influencer follows) is irrelevant to marketing value."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1658,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1657,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1647,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Practice"], {
                    title: "Graph properties — pen & paper",
                    items: [
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Classify the three platforms: Facebook friendship, Instagram follows, LinkedIn connections + follows. Which are ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "undirected"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1673,
                                        columnNumber: 132
                                    }, void 0),
                                    ", which ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "directed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1673,
                                        columnNumber: 167
                                    }, void 0),
                                    " — and which counter decides an influencer deal?"
                                ]
                            }, void 0, true),
                            hint: "Friendship and connections are mutual; follows are one-way. In-degree = followers = the marketing number."
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Draw Amdabad, Silchar and Kolkata with roads between them, then add Port Blair with ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "no road edges"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1677,
                                        columnNumber: 104
                                    }, void 0),
                                    ". Which property differs when you ask Amdabad → Silchar vs Amdabad → Port Blair?"
                                ]
                            }, void 0, true),
                            hint: "One query stays connected; the other meets a disconnected component — the sea."
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: "Weight your family graph: you–sibling, you–distant cousin, you–a classmate you rarely message. Assign strengths 1–5 and say which recommendation a system would prioritise."
                            }, void 0, false),
                            hint: "Recommenders follow the highest connection strength."
                        },
                        {
                            q: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "A metro line with two terminals vs an airport network with return flights — which is ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "acyclic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1685,
                                        columnNumber: 105
                                    }, void 0),
                                    ", which ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "cyclic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1685,
                                        columnNumber: 137
                                    }, void 0),
                                    ", and why?"
                                ]
                            }, void 0, true),
                            hint: "Terminals end every path; return flights close loops like A–B–C–A."
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1669,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1668,
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
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1694,
                                    columnNumber: 34
                                }, this),
                                " Lecture 16 · key takeaways"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1694,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1693,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        dark: true,
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Direction — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "undirected edges are mutual"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1699,
                                        columnNumber: 27
                                    }, void 0),
                                    " (cousin of, Facebook friendship); ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "directed edges are one-way"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1699,
                                        columnNumber: 106
                                    }, void 0),
                                    " (son of, Instagram follows)."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Counters — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "in-degree"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1700,
                                        columnNumber: 26
                                    }, void 0),
                                    " counts edges arriving (followers); ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "out-degree"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1700,
                                        columnNumber: 88
                                    }, void 0),
                                    " counts edges leaving (following). Influencer marketing prices the in-degree."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Weight — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "strength per connection"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1701,
                                        columnNumber: 24
                                    }, void 0),
                                    ": siblings over distant cousins, flight frequency, YouTube watch-time — recommenders follow the strongest links."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Connectivity — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "connected"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1702,
                                        columnNumber: 30
                                    }, void 0),
                                    ": every vertex reaches every other; ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "disconnected"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1702,
                                        columnNumber: 92
                                    }, void 0),
                                    ": Port Blair has no road to the mainland."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Cycles — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "cyclic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1703,
                                        columnNumber: 24
                                    }, void 0),
                                    ": return flights close A–B–C–A loops; ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "acyclic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1703,
                                        columnNumber: 85
                                    }, void 0),
                                    ": parent-child, org hierarchies and metro lines end at terminals."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The four properties are ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "independent switches"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1704,
                                        columnNumber: 39
                                    }, void 0),
                                    " — direction, weight, connectivity, cycles combine to describe any real network."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1696,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1692,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 1487,
        columnNumber: 5
    }, this);
}
_c20 = AtbGraphPropsSection;
/* ============================================================
   DFS & BFS — dark walk-through
   ============================================================ */ function DGNode({ x, y, t, rank, tone }) {
    const on = rank > -1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: x,
                cy: y,
                r: "20",
                fill: on ? tone : "rgba(255,246,232,.09)",
                stroke: on ? tone : "rgba(245,158,11,.45)",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1719,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: x,
                y: y + 5,
                textAnchor: "middle",
                fontSize: "14",
                fontWeight: "800",
                fill: on ? "#fff7ec" : "#f5e6cd",
                children: t
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1720,
                columnNumber: 7
            }, this),
            on ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: x + 24,
                        cy: y - 24,
                        r: "11",
                        fill: "#2b1b10",
                        stroke: "#f5c889",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1725,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: x + 24,
                        y: y - 20,
                        textAnchor: "middle",
                        fontSize: "10",
                        fontWeight: "800",
                        fill: "#f5c889",
                        children: rank + 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1726,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1724,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 1718,
        columnNumber: 5
    }, this);
}
_c21 = DGNode;
function GraphWalk({ seq, tone, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 560 340",
        className: "mx-auto h-auto w-full max-w-xl",
        role: "img",
        "aria-label": `${label}: visiting order ${seq.join(", ")} over the nine-vertex lecture graph`,
        children: [
            G_EDGES.map(([a, b])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: G_POS[a].x,
                    y1: G_POS[a].y,
                    x2: G_POS[b].x,
                    y2: G_POS[b].y,
                    stroke: "rgba(201,154,91,.5)",
                    strokeWidth: "2"
                }, `${a}${b}`, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1744,
                    columnNumber: 9
                }, this)),
            Object.entries(G_POS).map(([n, p])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DGNode, {
                    x: p.x,
                    y: p.y,
                    t: n,
                    rank: seq.indexOf(n),
                    tone: tone
                }, n, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1747,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 1737,
        columnNumber: 5
    }, this);
}
_c22 = GraphWalk;
function StackVisual() {
    const cells = [
        "S",
        "X",
        "P",
        "A"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-end gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-20 flex-col-reverse gap-1.5",
                children: cells.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex h-10 items-center justify-center rounded-lg border font-mono text-sm font-bold ${i === 0 ? "border-[#f59e0b] bg-[rgba(234,88,12,.28)] text-[#ffd9ae]" : "border-[rgba(245,158,11,.3)] bg-[rgba(255,246,232,.06)] text-[#e9d7bf]"}`,
                        children: c
                    }, c, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1759,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1757,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-2 pb-1 text-[.74rem] font-semibold text-[#cbb392]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                className: "h-3.5 w-3.5 text-[#f5c889]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1773,
                                columnNumber: 11
                            }, this),
                            " top — pop from here"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1772,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                className: "h-3.5 w-3.5 text-[#f5c889]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1776,
                                columnNumber: 11
                            }, this),
                            " bottom — first pushed"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1775,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1771,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 1756,
        columnNumber: 5
    }, this);
}
_c23 = StackVisual;
function QueueVisual() {
    const cells = [
        "A",
        "P",
        "Q",
        "X"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[.74rem] font-semibold text-[#cbb392]",
                children: "front ←"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1787,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1.5",
                children: cells.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex h-10 w-10 items-center justify-center rounded-lg border font-mono text-sm font-bold ${i === 0 ? "border-[#f59e0b] bg-[rgba(217,119,6,.3)] text-[#ffd9ae]" : "border-[rgba(245,158,11,.3)] bg-[rgba(255,246,232,.06)] text-[#e9d7bf]"}`,
                        children: c
                    }, c, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1790,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1788,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[.74rem] font-semibold text-[#cbb392]",
                children: "← rear — enqueue here"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1802,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 1786,
        columnNumber: 5
    }, this);
}
_c24 = QueueVisual;
const DFS_STEPS = [
    {
        label: "Push the start node",
        sub: "stack = [A]",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2d$to$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDownToLine$3e$__["ArrowDownToLine"], {
            className: "h-4 w-4",
            style: {
                color: "#f5c889"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1808,
            columnNumber: 61
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Pop the top & mark visited",
        sub: "newest node leaves first",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$from$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpFromLine$3e$__["ArrowUpFromLine"], {
            className: "h-4 w-4",
            style: {
                color: "#f5c889"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1809,
            columnNumber: 81
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Push its unvisited neighbours",
        sub: "they pile on top of the stack",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
            className: "h-4 w-4",
            style: {
                color: "#f5c889"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1810,
            columnNumber: 89
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Repeat until the stack is empty",
        sub: "stuck? backtrack — the stack remembers",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
            className: "h-4 w-4",
            style: {
                color: "#f5c889"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1811,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const BFS_STEPS = [
    {
        label: "Enqueue the start node",
        sub: "queue = [A]",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2d$to$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightToLine$3e$__["ArrowRightToLine"], {
            className: "h-4 w-4",
            style: {
                color: "#f5c889"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1814,
            columnNumber: 64
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Dequeue the front & mark visited",
        sub: "oldest node leaves first",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$from$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftFromLine$3e$__["ArrowLeftFromLine"], {
            className: "h-4 w-4",
            style: {
                color: "#f5c889"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1815,
            columnNumber: 87
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Enqueue its unvisited neighbours",
        sub: "they line up at the rear",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
            className: "h-4 w-4",
            style: {
                color: "#f5c889"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1816,
            columnNumber: 87
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: "Repeat until the queue is empty",
        sub: "level after level, front to back",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
            className: "h-4 w-4",
            style: {
                color: "#f5c889"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/atb/AtbParts5.tsx",
            lineNumber: 1817,
            columnNumber: 94
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function AtbDfsBfsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "dfsbfs",
        dark: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                dark: true,
                eyebrow: "Lecture 17 · DFS & BFS",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "DFS & BFS — ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "grad-text",
                            children: "two ways to explore a network"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1828,
                            columnNumber: 29
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Same nine vertices and eleven edges as Lecture 15's graph. How you explore decides what you learn: dive deep and ask whether a connection exists, or sweep wide and ask how close everything is."
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1823,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    dark: true,
                    kind: "insight",
                    title: "Lecture 17 · no root, any starting point",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "A tree hands you a root and the traversal starts there. A graph has ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "no designated root"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1837,
                                columnNumber: 81
                            }, this),
                            " — the starting node is specified in advance and can be ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "any node"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1838,
                                columnNumber: 82
                            }, this),
                            " at all. And since we traverse in order to search for elements, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "“search” and “traversal” are used interchangeably"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1839,
                                columnNumber: 73
                            }, this),
                            ". Unlike the tree's pre/in/post family, graphs have exactly ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "two"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 1841,
                                columnNumber: 26
                            }, this),
                            " major traversals: DFS and BFS."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1836,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1835,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1834,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "1",
                title: "Depth First Search (DFS)",
                sub: "Follow one path as far as it goes — then backtrack"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1846,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex flex-wrap items-center gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chip",
                                        children: "Lecture 17 · go deep first"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1851,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1850,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "grid gap-3 text-[.9rem] leading-relaxed text-[#e9d7bf]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Go ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "as far as possible along one path"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 1855,
                                                    columnNumber: 22
                                                }, this),
                                                " before backtracking."
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Visit an ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "unvisited neighbour"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 1856,
                                                    columnNumber: 28
                                                }, this),
                                                ", keep following unvisited neighbours until a node has ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "no unexplored connections"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 1856,
                                                    columnNumber: 119
                                                }, this),
                                                " left."
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Then ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "backtrack"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 1857,
                                                    columnNumber: 24
                                                }, this),
                                                " to the last junction and repeat from there."
                                            ]
                                        }, void 0, true)
                                    ].map((li, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[.7rem] font-bold",
                                                    style: {
                                                        background: "rgba(245,158,11,.18)",
                                                        color: "#f5c889"
                                                    },
                                                    children: i + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 1860,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: li
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 1863,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1859,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1853,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 rounded-xl border border-[rgba(245,158,11,.2)] bg-[rgba(43,27,16,.5)] p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.7rem] font-extrabold uppercase tracking-[.2em] text-[#b98d5f]",
                                            children: "the question DFS answers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1868,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.92rem] font-semibold text-[#ffd9ae]",
                                            children: "“Does ANY connection exist between two nodes?”"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1869,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.78rem] leading-relaxed text-[#cbb392]",
                                            children: "Social-network reachability: friend → friend-of-a-friend → friend-of-a-friend-of-a-friend. DFS walks the chain as deep as it needs, then answers yes or no."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1872,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1867,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1849,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1848,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraphWalk, {
                                    seq: [
                                        "A",
                                        "P",
                                        "X",
                                        "S",
                                        "C",
                                        "Q",
                                        "Y",
                                        "R",
                                        "B"
                                    ],
                                    tone: "#ea580c",
                                    label: "DFS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1881,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-center text-[.82rem] leading-relaxed text-[#cbb392]",
                                    children: [
                                        "DFS order: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-bold text-[#ffd9ae]",
                                            children: "A P X S C Q Y R B"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1883,
                                            columnNumber: 26
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1884,
                                            columnNumber: 15
                                        }, this),
                                        "(equally valid alternative: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[.78rem]",
                                            children: "A Q Y R B P X S"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1885,
                                            columnNumber: 43
                                        }, this),
                                        " — depends on neighbour order)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1882,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1880,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1879,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1847,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "2",
                title: "DFS runs on a STACK",
                sub: "Last in, first out — the mechanism behind the deep dive"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1891,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepsFlow"], {
                    steps: DFS_STEPS
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1893,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1892,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.7rem] font-extrabold uppercase tracking-[.2em] text-[#b98d5f]",
                                    children: "the stack, mid-run"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1898,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StackVisual, {}, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1900,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1899,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-[.82rem] leading-relaxed text-[#cbb392]",
                                    children: [
                                        "A pushed, then P, then X, then S — ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "the top of the stack is always the next visit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1903,
                                            columnNumber: 50
                                        }, this),
                                        ". Empty stack = exploration complete."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1902,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1897,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1896,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                            dark: true,
                            title: "dfs.py — the whole idea in seven lines",
                            runnable: false,
                            code: `def dfs(graph, start):
    stack = [start]
    while stack:
        node = stack.pop()      # take the TOP
        if node not in visited:
            mark node visited
            for nb in graph[node]:
                if nb not visited:
                    stack.push(nb)`,
                            note: "Pop from the top → pile new neighbours on top → the search dives deep before it ever looks sideways. That is the stack's personality."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1909,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1908,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1895,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "3",
                title: "Breadth First Search (BFS)",
                sub: "Visit ALL nodes at the current depth before going deeper"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1927,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GraphWalk, {
                                    seq: [
                                        "A",
                                        "P",
                                        "Q",
                                        "X",
                                        "Y",
                                        "S",
                                        "R",
                                        "C",
                                        "B"
                                    ],
                                    tone: "#d97706",
                                    label: "BFS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1931,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-center text-[.82rem] leading-relaxed text-[#cbb392]",
                                    children: [
                                        "BFS order: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono font-bold text-[#ffd9ae]",
                                            children: "A P Q X Y S R C B"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1933,
                                            columnNumber: 26
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1934,
                                            columnNumber: 15
                                        }, this),
                                        "(alternative: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-[.78rem]",
                                            children: "A Q P Y X R S B C"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1935,
                                            columnNumber: 29
                                        }, this),
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1932,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1930,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1929,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex flex-wrap items-center gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "chip",
                                        children: "Lecture 17 · level by level"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1942,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1941,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "grid gap-3 text-[.9rem] leading-relaxed text-[#e9d7bf]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Visit ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "all nodes at the current depth"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 1946,
                                                    columnNumber: 25
                                                }, this),
                                                " before going one level deeper."
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "The search ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "expands outward from the source"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 1947,
                                                    columnNumber: 30
                                                }, this),
                                                " like a ripple — neighbours first, neighbours-of-neighbours next."
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Because every vertex is reached by its ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "shortest"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 1948,
                                                    columnNumber: 58
                                                }, this),
                                                " route, BFS answers closeness questions."
                                            ]
                                        }, void 0, true)
                                    ].map((li, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[.7rem] font-bold",
                                                    style: {
                                                        background: "rgba(245,158,11,.18)",
                                                        color: "#f5c889"
                                                    },
                                                    children: i + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 1951,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: li
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 1954,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1950,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1944,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 rounded-xl border border-[rgba(245,158,11,.2)] bg-[rgba(43,27,16,.5)] p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.7rem] font-extrabold uppercase tracking-[.2em] text-[#b98d5f]",
                                            children: "the question BFS answers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1959,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.92rem] font-semibold text-[#ffd9ae]",
                                            children: "“What is the MINIMUM degree of separation?”"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1960,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.78rem] leading-relaxed text-[#cbb392]",
                                            children: "Shortest path = fewest hops. The famous “six degrees of separation” is a BFS question: how many handshakes link any two people on earth?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1963,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1958,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1940,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1939,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1928,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "4",
                title: "BFS runs on a QUEUE",
                sub: "First in, first out — the mechanism behind the ripple"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1972,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepsFlow"], {
                    steps: BFS_STEPS
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 1974,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1973,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.7rem] font-extrabold uppercase tracking-[.2em] text-[#b98d5f]",
                                    children: "the queue, mid-run"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1979,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QueueVisual, {}, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 1981,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1980,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-[.82rem] leading-relaxed text-[#cbb392]",
                                    children: [
                                        "A left first (front of the line), so A is explored before anything discovered after it —",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "distance order is preserved"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 1985,
                                            columnNumber: 15
                                        }, this),
                                        ", which is exactly why BFS finds shortest paths."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 1983,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1978,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1977,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
                            dark: true,
                            title: "bfs.py — same shape, different container",
                            runnable: false,
                            code: `def bfs(graph, start):
    queue = [start]
    while queue:
        node = queue.dequeue()   # take the FRONT
        if node not in visited:
            mark node visited
            for nb in graph[node]:
                if nb not visited:
                    queue.enqueue(nb)`,
                            note: "Swap the stack for a queue and the personality flips: deep dive becomes level-by-level sweep. One line of code, completely different behaviour."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 1990,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 1989,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 1976,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-5 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-6",
                            style: {
                                borderColor: "rgba(234,88,12,.4)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveVertical$3e$__["MoveVertical"], {
                                            className: "h-5 w-5",
                                            style: {
                                                color: "#f5c889"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 2012,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-lg font-bold text-[#f5e6cd]",
                                            children: "DFS ↔ stack ↔ go deep"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 2013,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 2011,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.88rem] leading-relaxed text-[#e9d7bf]",
                                    children: [
                                        "One path to the end, backtrack, repeat. Reachability: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "“is there any connection?”"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 2016,
                                            columnNumber: 69
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 2015,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 2010,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-6",
                            style: {
                                borderColor: "rgba(217,119,6,.5)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveHorizontal$3e$__["MoveHorizontal"], {
                                            className: "h-5 w-5",
                                            style: {
                                                color: "#f5c889"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 2021,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-lg font-bold text-[#f5e6cd]",
                                            children: "BFS ↔ queue ↔ go wide"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 2022,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 2020,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.88rem] leading-relaxed text-[#e9d7bf]",
                                    children: [
                                        "Every neighbour before every distance-2 node. Closeness: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "“fewest handshakes?”"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 2025,
                                            columnNumber: 72
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 2024,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 2019,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 2009,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 2008,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-2 px-4 pt-4 md:px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chip",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                        className: "h-3.5 w-3.5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 2034,
                                        columnNumber: 36
                                    }, this),
                                    " Lecture 17 · DFS ↔ BFS"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 2034,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 2033,
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
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 2038,
                                                    columnNumber: 26
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "DFS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 2038,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "BFS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                    lineNumber: 2038,
                                                    columnNumber: 53
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                            lineNumber: 2038,
                                            columnNumber: 22
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 2038,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Data structure"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 2040,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Stack — last in, first out"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 2040,
                                                        columnNumber: 81
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Queue — first in, first out"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 2040,
                                                        columnNumber: 116
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                lineNumber: 2040,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Strategy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 2041,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Go deep along one path, then backtrack"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 2041,
                                                        columnNumber: 75
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Visit all nodes at the current depth first"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 2041,
                                                        columnNumber: 122
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                lineNumber: 2041,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Use case"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 2042,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Does any connection exist between two nodes?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 2042,
                                                        columnNumber: 75
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Degree of separation — shortest path, fewest hops"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 2042,
                                                        columnNumber: 128
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                lineNumber: 2042,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "font-bold text-[#7c4a12]",
                                                        children: "Order"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 2043,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Path-dependent — depends on the route walked"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 2043,
                                                        columnNumber: 72
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: "Level-dependent — same distance band each pass"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                        lineNumber: 2043,
                                                        columnNumber: 125
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                                lineNumber: 2043,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 2039,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 2037,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 2036,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "px-4 pb-5 text-[.82rem] leading-relaxed text-[#cbb392] md:px-6",
                            children: "Swap the container, swap the personality — everything else in the two algorithms is identical."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 2047,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 2032,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 2031,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    dark: true,
                    kind: "story",
                    title: "Lecture 17 · many valid orders — all correct",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Trees have a left-before-right rule; graphs have ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "no such convention"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 2056,
                                columnNumber: 62
                            }, this),
                            ". Both DFS and BFS can produce ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "different valid paths depending on which neighbour is picked first"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 2057,
                                columnNumber: 33
                            }, this),
                            " — the two orders shown per walk above are both correct. Follow the algorithm faithfully and",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "every order you can produce is a right answer"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                lineNumber: 2059,
                                columnNumber: 13
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 2055,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                    lineNumber: 2054,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 2053,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            q: "DFS is implemented with a…",
                            options: [
                                "queue",
                                "stack",
                                "heap",
                                "hash table"
                            ],
                            answer: 1,
                            explain: "DFS pops the most recently discovered node — that is a stack (LIFO). BFS is the queue twin (FIFO)."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 2066,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 2065,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            q: "You need the minimum number of handshakes between two people. Use…",
                            options: [
                                "DFS",
                                "BFS",
                                "pre-order",
                                "in-order"
                            ],
                            answer: 1,
                            explain: "Minimum handshakes = shortest path in an unweighted graph = BFS: it reaches everyone in increasing distance order, so the first time you meet the target is guaranteed to be via the fewest handshakes."
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 2074,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 2073,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 2064,
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
                                    fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                    lineNumber: 2085,
                                    columnNumber: 34
                                }, this),
                                " Lecture 17 · key takeaways"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbParts5.tsx",
                            lineNumber: 2085,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 2084,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        dark: true,
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Trees store ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "hierarchies"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 2090,
                                        columnNumber: 27
                                    }, void 0),
                                    ": root → parent → child → leaf, one parent per child."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Depth"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 2091,
                                        columnNumber: 15
                                    }, void 0),
                                    " counts edges from the root to a node; ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "height"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 2091,
                                        columnNumber: 76
                                    }, void 0),
                                    " counts edges from the root to the deepest leaf."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Traversals read a tree — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "pre/in/post-order are depth-first"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 2092,
                                        columnNumber: 40
                                    }, void 0),
                                    "; ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "level order is breadth-first"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 2092,
                                        columnNumber: 92
                                    }, void 0),
                                    "."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Graphs capture ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "relationships"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 2093,
                                        columnNumber: 30
                                    }, void 0),
                                    ": G = (V, E), in directed/undirected, weighted/unweighted, connected/disconnected, cyclic/acyclic flavours."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "DFS (stack)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 2094,
                                        columnNumber: 15
                                    }, void 0),
                                    " goes deep — “does any connection exist?”; ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "BFS (queue)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 2094,
                                        columnNumber: 86
                                    }, void 0),
                                    " goes wide — “what is the minimum degree of separation?”"
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Graphs have ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "no designated root"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 2095,
                                        columnNumber: 27
                                    }, void 0),
                                    " — start at any node; DFS is ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "path-dependent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 2095,
                                        columnNumber: 91
                                    }, void 0),
                                    ", BFS is ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "level-dependent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                                        lineNumber: 2095,
                                        columnNumber: 131
                                    }, void 0),
                                    ", and every order the algorithm produces is a valid answer."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbParts5.tsx",
                        lineNumber: 2087,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbParts5.tsx",
                lineNumber: 2083,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbParts5.tsx",
        lineNumber: 1822,
        columnNumber: 5
    }, this);
}
_c25 = AtbDfsBfsSection;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25;
__turbopack_context__.k.register(_c, "AnatomyTree");
__turbopack_context__.k.register(_c1, "DepthHeightTree");
__turbopack_context__.k.register(_c2, "FamilyTreeArt");
__turbopack_context__.k.register(_c3, "AtbTreesSection");
__turbopack_context__.k.register(_c4, "TravTree");
__turbopack_context__.k.register(_c5, "TraversalLab");
__turbopack_context__.k.register(_c6, "LevelOrderViz");
__turbopack_context__.k.register(_c7, "AtbTraversalsSection");
__turbopack_context__.k.register(_c8, "GEdge");
__turbopack_context__.k.register(_c9, "GNode");
__turbopack_context__.k.register(_c10, "LectureGraph");
__turbopack_context__.k.register(_c11, "DichArt");
__turbopack_context__.k.register(_c12, "AtbGraphsSection");
__turbopack_context__.k.register(_c13, "DKV");
__turbopack_context__.k.register(_c14, "DirPairArt");
__turbopack_context__.k.register(_c15, "DegreeCountArt");
__turbopack_context__.k.register(_c16, "WeightArt");
__turbopack_context__.k.register(_c17, "ConnectArt");
__turbopack_context__.k.register(_c18, "CycleArt");
__turbopack_context__.k.register(_c19, "PropMini");
__turbopack_context__.k.register(_c20, "AtbGraphPropsSection");
__turbopack_context__.k.register(_c21, "DGNode");
__turbopack_context__.k.register(_c22, "GraphWalk");
__turbopack_context__.k.register(_c23, "StackVisual");
__turbopack_context__.k.register(_c24, "QueueVisual");
__turbopack_context__.k.register(_c25, "AtbDfsBfsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_atb_AtbParts5_tsx_0e5a7f26._.js.map