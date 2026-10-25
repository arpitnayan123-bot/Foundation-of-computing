(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/mktg/MktgApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MktgApp",
    ()=>MktgApp,
    "MktgFooter",
    ()=>MktgFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   MktgApp — "Principles of Marketing", shelf 06 of THE ATLAS.

   Mounted by the Atlas router (src/app/page.tsx); `onExitAtlas`
   returns the reader to the Atlas landing page. A LECTURE
   READER: the hero holds the 28-lecture sequence, each lecture
   opens with a "Principles of Marketing Lecture N" band, and
   all pen-paper practice lives behind the "Test my knowledge"
   hub so the reading surface stays clean.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/PartBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/exam-runtime.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open-text.js [app-client] (ecmascript) <export default as BookOpenText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-client] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js [app-client] (ecmascript) <export default as MousePointerClick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$section$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-section-progress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$open$2d$section$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-open-section.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/progress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mktg/MktgHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mktg/MktgParts1.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mktg/MktgParts2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mktg/MktgParts3.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mktg/MktgParts4.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgExamWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/mktg/MktgExamWindow.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mktg/questions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/mktg/lectures.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/* shelf 06 palette — boutique teal & champagne */ const TEAL = "#0f766e";
const TEAL_BRIGHT = "#14b8a6";
const GOLD = "#a97d2c";
const GOLD_LITE = "#e3c26b";
const INK = "#1f2b2b";
const LAGOON = "linear-gradient(165deg,#0c2124 0%,#12302f 60%,#143236 100%)";
const FLAT_ITEMS = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_GROUPS"].flatMap(_c = (g)=>g.items);
_c1 = FLAT_ITEMS;
function groupOf(id) {
    for (const g of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_GROUPS"])if (g.items.some((i)=>i.id === id)) return g.id;
    return null;
}
/* ============================================================
   The chapter components, keyed by section id — the lecture
   reader renders exactly the slice the chosen lecture owns.
   ============================================================ */ const SECTION_COMPONENTS = {
    "why-mktg": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgWhySection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 90,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    anticipation: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgAnticipationSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 91,
        columnNumber: 17
    }, ("TURBOPACK compile-time value", void 0)),
    topline: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgToplineSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 92,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    "mktg-vs-selling": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgVsSellingSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 93,
        columnNumber: 22
    }, ("TURBOPACK compile-time value", void 0)),
    definitions: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgDefinitionsSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 94,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    "mktg-system": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgSystemSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 95,
        columnNumber: 18
    }, ("TURBOPACK compile-time value", void 0)),
    marketable: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgMarketableSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 96,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    "need-want-demand": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgNwdSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 97,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0)),
    "demand-states": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgDemandStatesSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 98,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0)),
    "closed-system": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgClosedSystemSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 99,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0)),
    "biz-value": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgBizValueSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 100,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    "chai-value": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgChaiSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 101,
        columnNumber: 17
    }, ("TURBOPACK compile-time value", void 0)),
    "cpv-formula": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgCpvSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 102,
        columnNumber: 18
    }, ("TURBOPACK compile-time value", void 0)),
    environment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgEnvironmentSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 103,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    "exchange-system": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgExchangeSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 104,
        columnNumber: 22
    }, ("TURBOPACK compile-time value", void 0)),
    "value-price-features": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgValuePriceSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 105,
        columnNumber: 27
    }, ("TURBOPACK compile-time value", void 0)),
    "luxury-lever": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgLuxurySection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 106,
        columnNumber: 19
    }, ("TURBOPACK compile-time value", void 0)),
    "es-ds": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgEsDsSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 107,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    "purchase-chain": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgChainSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 108,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0)),
    "context-matters": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgContextSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 109,
        columnNumber: 22
    }, ("TURBOPACK compile-time value", void 0)),
    "loyalty-econ": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgLoyaltyEconSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 110,
        columnNumber: 19
    }, ("TURBOPACK compile-time value", void 0)),
    "campaigns-esds": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgCampaignsSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 111,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0)),
    "beyond-purchase": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgBeyondSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 112,
        columnNumber: 22
    }, ("TURBOPACK compile-time value", void 0)),
    heterogeneity: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgHeteroSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 113,
        columnNumber: 18
    }, ("TURBOPACK compile-time value", void 0)),
    bases: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgBasesSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 114,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    "behavioral-benefit": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgBehavioralSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 115,
        columnNumber: 25
    }, ("TURBOPACK compile-time value", void 0)),
    "tupo-case": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgTupoSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 116,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    "safe-targeting": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgSafeSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 117,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0)),
    "pos-3q": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgPos3qSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 118,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    "accor-map": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgAccorSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 119,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    "frame-podspops": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgFrameSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 120,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0)),
    "four-levels": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgLevelsSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 121,
        columnNumber: 18
    }, ("TURBOPACK compile-time value", void 0)),
    "pop-pod-evolution": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgEvolutionSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 122,
        columnNumber: 24
    }, ("TURBOPACK compile-time value", void 0)),
    "three-circles": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgCirclesSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 123,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0)),
    "pod-pop-cases": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgPopPodCasesSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 124,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0)),
    "why-buy": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgWhyBuySection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 125,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    "eras-nudges": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgErasSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 126,
        columnNumber: 18
    }, ("TURBOPACK compile-time value", void 0)),
    "five-stages": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgStagesSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 127,
        columnNumber: 18
    }, ("TURBOPACK compile-time value", void 0)),
    "messy-middle": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgMessySection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 128,
        columnNumber: 19
    }, ("TURBOPACK compile-time value", void 0)),
    "journey-variations": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgVariationsSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 129,
        columnNumber: 25
    }, ("TURBOPACK compile-time value", void 0)),
    "autopsy-purchase": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgAutopsySection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 130,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0)),
    "touchpoints-framework": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgTouchpointsSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 131,
        columnNumber: 28
    }, ("TURBOPACK compile-time value", void 0)),
    recap22: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgRecap22Section"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 132,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    "motivation-theories": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgMotivationSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 133,
        columnNumber: 26
    }, ("TURBOPACK compile-time value", void 0)),
    "theory-match": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgTheoryMatchSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 134,
        columnNumber: 19
    }, ("TURBOPACK compile-time value", void 0)),
    "brand-perception": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgBrandPerceptionSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 135,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0)),
    "almonds-price": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgAlmondsSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 136,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0)),
    "sensory-stages": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgSensorySection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 137,
        columnNumber: 21
    }, ("TURBOPACK compile-time value", void 0)),
    "gestalt-lab": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgGestaltSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 138,
        columnNumber: 18
    }, ("TURBOPACK compile-time value", void 0)),
    "attitude-buckets": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgBucketsSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 139,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0)),
    "retention-acquisition": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgRetentionSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 140,
        columnNumber: 28
    }, ("TURBOPACK compile-time value", void 0)),
    "abc-humanization": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgAbcSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 141,
        columnNumber: 23
    }, ("TURBOPACK compile-time value", void 0)),
    "bias-lab": /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgBiasSection"], {}, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 142,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0))
};
/* ============================================================
   useSeenDisplay — the read-checkmark data for every menu.
   Marking is per-lecture; display spans the whole shelf.
   ============================================================ */ function useSeenDisplay(lecture) {
    _s();
    const ids = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSeenDisplay.useMemo[ids]": ()=>lecture.chapters.map({
                "useSeenDisplay.useMemo[ids]": (c)=>c.id
            }["useSeenDisplay.useMemo[ids]"])
    }["useSeenDisplay.useMemo[ids]"], [
        lecture
    ]);
    const live = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$section$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionProgress"])("mktg", ids);
    const persisted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSeenDisplay.useMemo[persisted]": ()=>{
            try {
                return new Set(Object.keys((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadProgress"])().mktg ?? {}));
            } catch  {
                return new Set();
            }
        }
    }["useSeenDisplay.useMemo[persisted]"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSeenDisplay.useMemo": ()=>new Set([
                ...persisted,
                ...live
            ])
    }["useSeenDisplay.useMemo"], [
        persisted,
        live
    ]);
}
_s(useSeenDisplay, "DELvzeEi17LckFW8qCPew5wnROQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$section$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionProgress"]
    ];
});
/* ============================================================
   TopNav — structured chapter menu + a "Test my knowledge"
   launcher inside every chapter group.
   ============================================================ */ function TopNav({ onOpenExam, onExitAtlas, onJumpChapter, seen }) {
    _s1();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [openGroup, setOpenGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mobileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogA11y"])(mobileOpen);
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TopNav.useEffect": ()=>{
            let ticking = false;
            const update = {
                "TopNav.useEffect.update": ()=>{
                    ticking = false;
                    const doc = document.documentElement;
                    const total = doc.scrollHeight - doc.clientHeight;
                    const pct = total > 0 ? doc.scrollTop / total * 100 : 0;
                    if (progressRef.current) progressRef.current.style.width = `${pct}%`;
                    const probe = window.innerHeight * 0.32;
                    let current = "";
                    for (const item of FLAT_ITEMS){
                        const el = document.getElementById(item.id);
                        if (el && el.getBoundingClientRect().top <= probe) current = item.id;
                    }
                    if (current !== activeRef.current) {
                        activeRef.current = current;
                        setActive(current);
                    }
                }
            }["TopNav.useEffect.update"];
            const onScroll = {
                "TopNav.useEffect.onScroll": ()=>{
                    if (!ticking) {
                        ticking = true;
                        requestAnimationFrame(update);
                    }
                }
            }["TopNav.useEffect.onScroll"];
            update();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            window.addEventListener("resize", onScroll);
            return ({
                "TopNav.useEffect": ()=>{
                    window.removeEventListener("scroll", onScroll);
                    window.removeEventListener("resize", onScroll);
                }
            })["TopNav.useEffect"];
        }
    }["TopNav.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TopNav.useEffect": ()=>{
            const onDown = {
                "TopNav.useEffect.onDown": (e)=>{
                    if (navRef.current && !navRef.current.contains(e.target)) setOpenGroup(null);
                }
            }["TopNav.useEffect.onDown"];
            const onKey = {
                "TopNav.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") {
                        setOpenGroup(null);
                        setMobileOpen(false);
                    }
                }
            }["TopNav.useEffect.onKey"];
            document.addEventListener("mousedown", onDown);
            document.addEventListener("keydown", onKey);
            return ({
                "TopNav.useEffect": ()=>{
                    document.removeEventListener("mousedown", onDown);
                    document.removeEventListener("keydown", onKey);
                }
            })["TopNav.useEffect"];
        }
    }["TopNav.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TopNav.useEffect": ()=>{
            document.body.style.overflow = mobileOpen ? "hidden" : "";
            return ({
                "TopNav.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["TopNav.useEffect"];
        }
    }["TopNav.useEffect"], [
        mobileOpen
    ]);
    const activeGroup = active ? groupOf(active) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        ref: navRef,
        "aria-label": "Chapters",
        className: "fixed inset-x-0 top-0 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-shell",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex h-14 max-w-7xl items-center gap-2 px-3 sm:px-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onExitAtlas,
                            title: "Back to The Atlas — the subject shelf",
                            "aria-label": "Back to The Atlas",
                            className: "flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-white/70 bg-white/60 px-3 text-[.64rem] font-extrabold uppercase tracking-[.14em] text-[#4d6b66] shadow-[0_4px_16px_-8px_rgba(15,50,48,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/85 hover:text-[#0f766e]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "Atlas"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#top",
                            className: "flex shrink-0 items-center gap-2 rounded-full border border-white/70 bg-white/60 py-1.5 pl-2 pr-3.5 shadow-[0_4px_16px_-8px_rgba(15,50,48,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-6 w-6 items-center justify-center rounded-full text-white",
                                    style: {
                                        background: `linear-gradient(135deg,${TEAL_BRIGHT},${TEAL})`,
                                        boxShadow: "0 4px 10px -3px rgba(15,118,110,.55)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-black tracking-tight text-[#1f2b2b]",
                                    children: "MKTG Notes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-2 hidden flex-1 items-center gap-1 lg:flex",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_GROUPS"].map((group)=>{
                                const isActive = activeGroup === group.id;
                                const open = openGroup === group.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    onMouseEnter: ()=>setOpenGroup(group.id),
                                    onMouseLeave: ()=>setOpenGroup((g)=>g === group.id ? null : g),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-expanded": open,
                                            "aria-haspopup": "true",
                                            onClick: ()=>setOpenGroup(group.id),
                                            onFocus: ()=>setOpenGroup(group.id),
                                            className: `flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[.76rem] font-semibold tracking-wide transition-all duration-200 xl:px-3.5 ${isActive || open ? "bg-white/80 text-[#0f766e] shadow-[0_4px_16px_-8px_rgba(15,50,48,.4),inset_0_1px_0_rgba(255,255,255,.9)]" : "text-[#5f7472] hover:bg-white/55 hover:text-[#1f2b2b] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.9)]"}`,
                                            children: [
                                                group.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[.58rem] font-extrabold opacity-45",
                                                    children: String(group.items.length).padStart(2, "0")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: `h-3 w-3 opacity-50 transition-transform duration-200 ${open ? "rotate-180" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                            lineNumber: 289,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 8,
                                                    scale: 0.98
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: 6,
                                                    scale: 0.98
                                                },
                                                transition: {
                                                    duration: 0.16,
                                                    ease: "easeOut"
                                                },
                                                className: "absolute left-1/2 top-full z-50 w-[min(26rem,calc(100vw-2rem))] -translate-x-1/2 pt-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-1.5 backdrop-blur-2xl",
                                                    style: {
                                                        WebkitBackdropFilter: "blur(28px) saturate(170%)",
                                                        backdropFilter: "blur(28px) saturate(170%)",
                                                        boxShadow: "0 24px 70px -18px rgba(15,50,48,.4), inset 0 1px 0 rgba(255,255,255,.85)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "flex items-center gap-1.5 px-3 pb-1.5 pt-2 text-[.58rem] font-extrabold uppercase tracking-[.22em] text-[#a97d2c]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenText$3e$__["BookOpenText"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                    lineNumber: 325,
                                                                    columnNumber: 29
                                                                }, this),
                                                                group.label,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "ml-auto font-mono tracking-[.08em] opacity-90",
                                                                    children: [
                                                                        group.items.filter((it)=>seen.has(it.id)).length,
                                                                        "/",
                                                                        group.items.length,
                                                                        " read"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                    lineNumber: 327,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 27
                                                        }, this),
                                                        group.items.map((item, i)=>{
                                                            const isActiveItem = active === item.id;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `#${item.id}`,
                                                                onClick: (e)=>{
                                                                    e.preventDefault();
                                                                    setOpenGroup(null);
                                                                    onJumpChapter(item.id);
                                                                },
                                                                className: `group flex items-start gap-3 rounded-xl px-3 py-2 transition-colors duration-150 ${isActiveItem ? "bg-[#14b8a6]/[.10]" : "hover:bg-[#1f2b2b]/[.05]"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[.58rem] font-black ${isActiveItem ? "text-white" : "border border-white/80 bg-white/70 text-[#a97d2c]"}`,
                                                                        style: isActiveItem ? {
                                                                            background: `linear-gradient(135deg,${TEAL_BRIGHT},${TEAL})`
                                                                        } : undefined,
                                                                        children: String(i + 1).padStart(2, "0")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                        lineNumber: 346,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `block text-[.82rem] font-bold leading-tight ${isActiveItem ? "text-[#0f766e]" : "text-[#1f2b2b]"}`,
                                                                                children: item.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                                lineNumber: 355,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "mt-0.5 block text-[.7rem] leading-snug text-[#8aa09b]",
                                                                                children: item.desc
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                                lineNumber: 358,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                        lineNumber: 354,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    isActiveItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-auto mt-1 h-1.5 w-1.5 shrink-0 rounded-full",
                                                                        style: {
                                                                            background: TEAL
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                        lineNumber: 361,
                                                                        columnNumber: 35
                                                                    }, this) : seen.has(item.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "ml-auto mt-1 h-3.5 w-3.5 shrink-0",
                                                                        style: {
                                                                            color: "#5f9e58"
                                                                        },
                                                                        "aria-label": "Chapter read"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                        lineNumber: 363,
                                                                        columnNumber: 35
                                                                    }, this) : null
                                                                ]
                                                            }, item.id, true, {
                                                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                lineNumber: 334,
                                                                columnNumber: 31
                                                            }, this);
                                                        }),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 border-t border-[#e3eadb] p-1.5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setOpenGroup(null);
                                                                    onOpenExam(group.id);
                                                                },
                                                                className: "group/exam flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left transition-colors duration-150 hover:bg-[#1f2b2b]/[.05]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white",
                                                                        style: {
                                                                            background: `linear-gradient(135deg,${TEAL_BRIGHT},${TEAL})`
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                                                            className: "h-3.5 w-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                            lineNumber: 383,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                        lineNumber: 379,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "block text-[.84rem] font-extrabold leading-tight text-[#0f766e]",
                                                                                children: "Test my knowledge"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                                lineNumber: 386,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "mt-0.5 block text-[.68rem] leading-snug text-[#8aa09b]",
                                                                                children: [
                                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_EXAM_BANKS"][group.id].questions.length,
                                                                                    " exam-style questions · pen-paper mode"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                                lineNumber: 389,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                        lineNumber: 385,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-auto shrink-0 text-[.58rem] font-black uppercase tracking-[.14em] text-[#a97d2c] transition-colors group-hover/exam:text-[#0f766e]",
                                                                        children: "open →"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                        lineNumber: 393,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                lineNumber: 371,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 25
                                                }, this)
                                            }, `${group.id}-panel`, false, {
                                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                lineNumber: 308,
                                                columnNumber: 23
                                            }, this) : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                            lineNumber: 306,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, group.id, true, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 283,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "scrollbar-thin flex flex-1 items-center gap-1 overflow-x-auto py-1 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                            children: FLAT_ITEMS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `#${item.id}`,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        onJumpChapter(item.id);
                                    },
                                    className: `nav-link ${active === item.id ? "active" : ""}`,
                                    children: item.label
                                }, item.id, false, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 410,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 408,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto flex shrink-0 items-center gap-2 md:ml-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>window.print(),
                                    title: "Print these notes",
                                    "aria-label": "Print these notes",
                                    className: "flex h-9 w-9 items-center justify-center rounded-xl border border-white/70 bg-white/60 text-[#5f7472] backdrop-blur-md transition-colors hover:bg-white/85 hover:text-[#0f766e]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                        lineNumber: 433,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setMobileOpen(true),
                                    "aria-label": "Open the chapter index",
                                    "aria-expanded": mobileOpen,
                                    className: "flex h-9 w-9 items-center justify-center rounded-xl border border-white/70 bg-white/60 text-[#5f7472] backdrop-blur-md transition-colors hover:bg-white/85 hover:text-[#0f766e] lg:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "h-4.5 w-4.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                        lineNumber: 442,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 435,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 425,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[3px] w-full bg-[#1f2b2b]/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: progressRef,
                    className: "h-full",
                    style: {
                        width: "0%",
                        background: `linear-gradient(90deg,${TEAL_BRIGHT},${TEAL},${GOLD_LITE})`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                    lineNumber: 450,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                lineNumber: 449,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    ref: mobileRef,
                    tabIndex: -1,
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.18
                    },
                    className: "fixed inset-0 z-[60] flex flex-col outline-none",
                    style: {
                        background: LAGOON
                    },
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "Chapter index",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-14 shrink-0 items-center justify-between px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2 text-sm font-black tracking-tight text-[#e9f2ee]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
                                            className: "h-4 w-4",
                                            style: {
                                                color: TEAL_BRIGHT
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                            lineNumber: 476,
                                            columnNumber: 17
                                        }, this),
                                        "Chapter index",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-white/10 px-2 py-0.5 font-mono text-[.55rem] font-bold text-[#cfe6df]",
                                            children: [
                                                seen.size,
                                                "/",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_ALL_CHAPTER_IDS"].length,
                                                " read"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                            lineNumber: 478,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 475,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setMobileOpen(false),
                                    "aria-label": "Close the chapter index",
                                    className: "flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#e9f2ee]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4.5 w-4.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                        lineNumber: 488,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 482,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 474,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto px-4 pb-10 pt-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_GROUPS"].map((group, gi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 14
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.05 + gi * 0.06,
                                        duration: 0.25
                                    },
                                    className: "mb-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-2 flex items-center gap-2 text-[.62rem] font-extrabold uppercase tracking-[.24em] text-[#9fc4ba]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-px w-5",
                                                    style: {
                                                        background: `linear-gradient(90deg,${TEAL_BRIGHT},transparent)`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 21
                                                }, this),
                                                group.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-white/10 px-2 py-0.5 text-[.55rem] text-[#cfe6df]",
                                                    children: [
                                                        group.items.filter((it)=>seen.has(it.id)).length,
                                                        "/",
                                                        group.items.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                            lineNumber: 500,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-hidden rounded-2xl border border-white/10 bg-white/[.04]",
                                            children: [
                                                group.items.map((item, i)=>{
                                                    const isActiveItem = active === item.id;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `#${item.id}`,
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            setMobileOpen(false);
                                                            onJumpChapter(item.id);
                                                        },
                                                        className: `flex items-center gap-3 px-4 py-3 transition-colors active:bg-white/10 ${i < group.items.length - 1 ? "border-b border-white/[.06]" : ""} ${isActiveItem ? "bg-white/[.08]" : ""}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[.6rem] font-black",
                                                                style: isActiveItem ? {
                                                                    background: `linear-gradient(135deg,${TEAL_BRIGHT},${TEAL})`,
                                                                    color: "#f2fbf8"
                                                                } : {
                                                                    background: "rgba(227,194,107,.12)",
                                                                    color: GOLD_LITE
                                                                },
                                                                children: String(i + 1).padStart(2, "0")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                lineNumber: 521,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "min-w-0 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `block text-[.9rem] font-bold leading-tight ${isActiveItem ? "text-[#a7e8dc]" : "text-[#e9f2ee]"}`,
                                                                        children: item.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                        lineNumber: 532,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-0.5 block text-[.7rem] leading-snug text-[#9fbcb4]",
                                                                        children: item.desc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                        lineNumber: 535,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                lineNumber: 531,
                                                                columnNumber: 27
                                                            }, this),
                                                            isActiveItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-1.5 w-1.5 shrink-0 rounded-full",
                                                                style: {
                                                                    background: TEAL_BRIGHT
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 29
                                                            }, this) : seen.has(item.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "h-4 w-4 shrink-0",
                                                                style: {
                                                                    color: "#5f9e58"
                                                                },
                                                                "aria-label": "Chapter read"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                lineNumber: 540,
                                                                columnNumber: 29
                                                            }, this) : null
                                                        ]
                                                    }, item.id, true, {
                                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                        lineNumber: 509,
                                                        columnNumber: 25
                                                    }, this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setMobileOpen(false);
                                                        onOpenExam(group.id);
                                                    },
                                                    className: "flex w-full items-center gap-2.5 border-t border-white/[.08] px-4 py-3 text-left transition-colors active:bg-white/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white",
                                                            style: {
                                                                background: `linear-gradient(135deg,${TEAL_BRIGHT},${TEAL})`
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                                lineNumber: 559,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                            lineNumber: 555,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[.88rem] font-extrabold text-[#a7e8dc]",
                                                            children: "Test my knowledge"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                            lineNumber: 561,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-auto text-[.6rem] font-black uppercase tracking-[.14em] text-[#9fc4ba]",
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_EXAM_BANKS"][group.id].questions.length,
                                                                " Qs →"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                            lineNumber: 562,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                            lineNumber: 505,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, group.id, true, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 493,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 491,
                            columnNumber: 13
                        }, this)
                    ]
                }, "mobile-index", true, {
                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                    lineNumber: 460,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                lineNumber: 458,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
_s1(TopNav, "IOmw7Wpfy/PHXrFgV9pTbdnLDL8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogA11y"]
    ];
});
_c2 = TopNav;
/* ============================================================
   PracticeHub — the ONE home of pen-paper practice.
   ============================================================ */ function PracticeHub({ open, onClose, onOpenExam }) {
    _s2();
    const hubRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogA11y"])(open);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PracticeHub.useEffect": ()=>{
            if (!open) return;
            document.body.style.overflow = "hidden";
            const onKey = {
                "PracticeHub.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["PracticeHub.useEffect.onKey"];
            document.addEventListener("keydown", onKey);
            return ({
                "PracticeHub.useEffect": ()=>{
                    document.body.style.overflow = "";
                    document.removeEventListener("keydown", onKey);
                }
            })["PracticeHub.useEffect"];
        }
    }["PracticeHub.useEffect"], [
        open,
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: hubRef,
            tabIndex: -1,
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.18
            },
            className: "fixed inset-0 z-[65] overflow-y-auto outline-none",
            style: {
                background: "rgba(9,28,30,.78)",
                WebkitBackdropFilter: "blur(12px) saturate(140%)",
                backdropFilter: "blur(12px) saturate(140%)"
            },
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Test my knowledge — pen-paper practice",
            onClick: (e)=>{
                if (e.target === e.currentTarget) onClose();
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto my-6 w-[min(66rem,calc(100vw-1.5rem))] overflow-hidden rounded-3xl border border-white/10 sm:my-10",
                style: {
                    background: LAGOON,
                    boxShadow: "0 48px 140px -32px rgba(0,0,0,.65)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4 px-6 pt-6 sm:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2 text-[.6rem] font-extrabold uppercase tracking-[.24em] text-[#9fc4ba]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-px w-5",
                                                style: {
                                                    background: `linear-gradient(90deg,${TEAL_BRIGHT},transparent)`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                lineNumber: 639,
                                                columnNumber: 19
                                            }, this),
                                            "Pen-paper practice"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                        lineNumber: 638,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-1.5 text-2xl font-black tracking-tight text-[#e9f2ee] sm:text-3xl",
                                        children: "Test my knowledge"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                        lineNumber: 642,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 max-w-2xl text-[.88rem] leading-relaxed text-[#c3d8d0]",
                                        children: "Every chapter group opens its own exam window: definitions, concept checks and case-numbers — write on real paper first, then mark yourself against the model answers with instant checking."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                        lineNumber: 643,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.64rem] font-black uppercase tracking-[.18em] text-[#8aa89e]",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_TOTAL_QUESTIONS"],
                                            " questions · ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_EXAM_GROUPS"].length,
                                            " windows"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                        lineNumber: 648,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                lineNumber: 637,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                "aria-label": "Close the practice hub",
                                className: "mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#e9f2ee] transition-colors hover:bg-white/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-4.5 w-4.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 658,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                lineNumber: 652,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                        lineNumber: 636,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 px-6 pb-7 pt-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_EXAM_GROUPS"].map((g)=>{
                            const bank = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_EXAM_BANKS"][g];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onOpenExam(g),
                                className: "group flex flex-col items-start rounded-2xl border border-white/10 bg-white/[.05] p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[.09]",
                                "aria-label": `Open the exam window — ${bank.title}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md",
                                        style: {
                                            background: `linear-gradient(135deg,${TEAL_BRIGHT},${TEAL})`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                            lineNumber: 678,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                        lineNumber: 674,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-3 text-[.98rem] font-extrabold leading-tight text-[#a7e8dc]",
                                        children: bank.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                        lineNumber: 680,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-1 text-[.76rem] leading-snug text-[#c3d8d0]",
                                        children: bank.topics
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                        lineNumber: 681,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-3 text-[.66rem] font-black uppercase tracking-[.16em] text-[#9fc4ba] transition-colors group-hover:text-[#a7e8dc]",
                                        children: [
                                            "Test my knowledge · ",
                                            bank.questions.length,
                                            " Qs →"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                        lineNumber: 682,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, g, true, {
                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                lineNumber: 667,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                        lineNumber: 663,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                lineNumber: 628,
                columnNumber: 11
            }, this)
        }, "practice-hub", false, {
            fileName: "[project]/src/components/mktg/MktgApp.tsx",
            lineNumber: 607,
            columnNumber: 9
        }, this) : null
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 605,
        columnNumber: 5
    }, this);
}
_s2(PracticeHub, "7GDftFTFWuBM2om00WmxHE6n++Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogA11y"]
    ];
});
_c3 = PracticeHub;
/* ============================================================
   MktgLectureHead — the "Principles of Marketing Lecture N"
   hero band. Every lecture opens with its number spoken aloud,
   exactly as the reader asked.
   ============================================================ */ function MktgLectureHead({ lecture }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-6xl px-4 pt-12 sm:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden rounded-3xl p-7 sm:p-10",
            style: {
                background: LAGOON,
                boxShadow: "0 30px 80px -30px rgba(12,33,36,.55)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    "aria-hidden": true,
                    viewBox: "0 0 600 200",
                    preserveAspectRatio: "none",
                    className: "pointer-events-none absolute inset-0 h-full w-full opacity-40",
                    children: [
                        70,
                        120,
                        170
                    ].map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            cx: 540,
                            cy: 100,
                            r: r,
                            fill: "none",
                            stroke: i === 2 ? GOLD_LITE : TEAL_BRIGHT,
                            strokeWidth: 1.4,
                            style: {
                                transformBox: "fill-box",
                                transformOrigin: "center"
                            },
                            animate: {
                                opacity: [
                                    0.12,
                                    0.4,
                                    0.12
                                ],
                                scale: [
                                    1,
                                    1.05,
                                    1
                                ]
                            },
                            transition: {
                                duration: 4.5,
                                repeat: Infinity,
                                delay: i * 0.8
                            }
                        }, r, false, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 711,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                    lineNumber: 709,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "flex flex-wrap items-center gap-2 text-[.62rem] font-extrabold uppercase tracking-[.26em] text-[#9fc4ba]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
                                    className: "h-3.5 w-3.5",
                                    style: {
                                        color: TEAL_BRIGHT
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 722,
                                    columnNumber: 13
                                }, this),
                                "Principles of Marketing · Shelf 06"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 721,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-3 text-3xl font-black leading-tight text-[#e9f2ee] sm:text-5xl",
                            children: [
                                "Principles of Marketing",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-clip-text text-transparent",
                                    style: {
                                        backgroundImage: `linear-gradient(120deg,${GOLD_LITE},${GOLD})`
                                    },
                                    children: [
                                        "Lecture ",
                                        lecture.n
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 727,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 725,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-3xl text-lg font-bold leading-snug text-[#a7e8dc]",
                            children: lecture.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 734,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 max-w-3xl text-[.92rem] leading-relaxed text-[#c3d8d0]",
                            children: lecture.blurb
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 735,
                            columnNumber: 11
                        }, this),
                        lecture.chapters.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex flex-wrap gap-2",
                            children: lecture.chapters.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `#${c.id}`,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        const el = document.getElementById(c.id);
                                        if (el) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$open$2d$section$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jumpTo"])(el);
                                    },
                                    className: "rounded-full border border-white/15 bg-white/[.07] px-3 py-1.5 text-[.68rem] font-extrabold text-[#cfe6df] transition-colors hover:border-[#14b8a6]/40 hover:bg-white/[.12] hover:text-[#a7e8dc]",
                                    children: [
                                        c.label,
                                        " ↓"
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 739,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 737,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                    lineNumber: 720,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mktg/MktgApp.tsx",
            lineNumber: 704,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 703,
        columnNumber: 5
    }, this);
}
_c4 = MktgLectureHead;
/* ============================================================
   LecturePager — prev/next lecture cards closing every lecture.
   ============================================================ */ function LecturePager({ current, onJump }) {
    const idx = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_LECTURES"].findIndex((l)=>l.id === current.id);
    const prev = idx > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_LECTURES"][idx - 1] : null;
    const next = idx < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_LECTURES"].length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_LECTURES"][idx + 1] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Lecture sequence",
        className: "mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3 sm:grid-cols-2",
            children: [
                prev ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onJump(prev.id),
                    className: "card-warm lift group flex min-w-0 items-center gap-3 p-4 text-left",
                    "aria-label": `Previous: ${prev.code} — ${prev.title}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-4 w-4 shrink-0 text-[#0f766e] transition-transform duration-200 group-hover:-translate-x-1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 778,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-[.6rem] font-extrabold uppercase tracking-[.18em] text-[#a97d2c]",
                                    children: [
                                        "Previous · ",
                                        prev.code
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 780,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-0.5 block truncate text-[.92rem] font-extrabold text-[#1f2b2b]",
                                    children: prev.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 783,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 779,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                    lineNumber: 772,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": true,
                    className: "hidden sm:block"
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                    lineNumber: 787,
                    columnNumber: 11
                }, this),
                next ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onJump(next.id),
                    className: "card-warm lift group flex min-w-0 items-center justify-end gap-3 p-4 text-right",
                    "aria-label": `Next: ${next.code} — ${next.title}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-[.6rem] font-extrabold uppercase tracking-[.18em] text-[#a97d2c]",
                                    children: [
                                        "Next · ",
                                        next.code
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 797,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-0.5 block truncate text-[.92rem] font-extrabold text-[#1f2b2b]",
                                    children: next.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 800,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 796,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "h-4 w-4 shrink-0 text-[#0f766e] transition-transform duration-200 group-hover:translate-x-1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 802,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                    lineNumber: 790,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "rounded-2xl border border-dashed border-[#dbeae5] p-4 text-center text-[.78rem] font-bold leading-snug text-[#8aa09b]",
                    children: "End of the sequence — Lecture 28 closes the course. Revise the biases, then retake the windows."
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                    lineNumber: 805,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mktg/MktgApp.tsx",
            lineNumber: 770,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 769,
        columnNumber: 5
    }, this);
}
_c5 = LecturePager;
/* ============================================================
   MktgFooter — the atlas signature, retold for shelf 06.
   ============================================================ */ const MKTG_SIG_CHIPS = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        label: `${FLAT_ITEMS.length} chapters`
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"],
        label: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_TOTAL_QUESTIONS"]} practice questions`
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        label: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_EXAM_GROUPS"].length} exam windows`
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"],
        label: "machines you can poke"
    }
];
function MktgFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "footer-stick relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "absolute inset-x-0 top-0 h-px",
                style: {
                    background: `linear-gradient(90deg, transparent, rgba(15,118,110,.35), transparent)`
                },
                initial: {
                    scaleX: 0,
                    opacity: 0
                },
                whileInView: {
                    scaleX: 1,
                    opacity: 1
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 1.3,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                }
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                lineNumber: 827,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "sig-glow"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                lineNumber: 837,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto flex max-w-3xl flex-col items-center px-4 py-8 text-center sm:py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "sig-eyebrow text-[.58rem] font-semibold uppercase text-[#8aa09b]",
                        "aria-label": "created by",
                        initial: {
                            opacity: 0,
                            letterSpacing: "1.05em"
                        },
                        whileInView: {
                            opacity: 1,
                            letterSpacing: "0.55em"
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 1.1,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ],
                            delay: 0.1
                        },
                        children: "created by"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                        lineNumber: 840,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        className: "footer-name-wrap mt-2.5",
                        "aria-label": "Arpit Nayan",
                        initial: {
                            opacity: 0,
                            y: 16,
                            filter: "blur(8px)"
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)"
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.9,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ],
                            delay: 0.28
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "footer-name",
                            children: "Arpit Nayan"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 859,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                        lineNumber: 851,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 300 22",
                        className: "mt-2 h-3.5 w-44",
                        "aria-hidden": true,
                        fill: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "mktgSigGrad",
                                    x1: "0",
                                    y1: "0",
                                    x2: "1",
                                    y2: "0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0",
                                            stopColor: "#0f9488",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                            lineNumber: 866,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0.5",
                                            stopColor: "#0f9488"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                            lineNumber: 867,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "#a97d2c",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                            lineNumber: 868,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 865,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                lineNumber: 864,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M6 12 C 62 4, 118 19, 152 11 C 186 4, 236 17, 294 10",
                                stroke: "url(#mktgSigGrad)",
                                strokeWidth: "1.6",
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
                                    duration: 1.4,
                                    ease: "easeInOut",
                                    delay: 0.75
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                lineNumber: 871,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                        lineNumber: 863,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "sig-blurb mt-5",
                        initial: {
                            opacity: 0,
                            y: 12,
                            filter: "blur(6px)"
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)"
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.9,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ],
                            delay: 1.0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Principles of Marketing"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                lineNumber: 890,
                                columnNumber: 11
                            }, this),
                            " — every concept of the course, distilled into one warm, living page you can read, poke and revise.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 block",
                                children: "Written for the late-night revision, the last-minute panic, and the quiet joy of finally seeing why people buy."
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                lineNumber: 892,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                        lineNumber: 883,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "mt-3 text-[.78rem] font-semibold text-[#5f7472]",
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
                            duration: 1.0,
                            ease: "easeOut",
                            delay: 1.25
                        },
                        children: "Course: Principles of Marketing — SME · IIT Jodhpur"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                        lineNumber: 898,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "list",
                        "aria-label": "What this project contains",
                        className: "mt-4 flex flex-wrap items-center justify-center gap-2",
                        children: MKTG_SIG_CHIPS.map((chip, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                role: "listitem",
                                className: "sig-chip",
                                initial: {
                                    opacity: 0,
                                    y: 10,
                                    scale: 0.92
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1
                                    ],
                                    delay: 1.2 + i * 0.1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(chip.icon, {
                                        className: "h-3 w-3",
                                        strokeWidth: 2.2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                        lineNumber: 927,
                                        columnNumber: 15
                                    }, this),
                                    chip.label
                                ]
                            }, chip.label, true, {
                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                lineNumber: 914,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                        lineNumber: 908,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "sig-colo mt-5",
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
                            duration: 1.1,
                            ease: "easeOut",
                            delay: 1.7
                        },
                        children: "shelf 06 · the atlas — crafted with next.js · react · tailwind — mmxxvi"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                        lineNumber: 933,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                lineNumber: 839,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 826,
        columnNumber: 5
    }, this);
}
_c6 = MktgFooter;
function MktgApp({ onExitAtlas }) {
    _s3();
    const [lectureId, setLectureId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_DEFAULT_LECTURE"]);
    const [examGroup, setExamGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hubOpen, setHubOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lectureIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(lectureId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MktgApp.useEffect": ()=>{
            lectureIdRef.current = lectureId;
        }
    }["MktgApp.useEffect"], [
        lectureId
    ]);
    const lecture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lectureById"])(lectureId) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_LECTURES"][0];
    const seen = useSeenDisplay(lecture);
    const selectLecture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MktgApp.useCallback[selectLecture]": (id)=>{
            setLectureId(id);
            requestAnimationFrame({
                "MktgApp.useCallback[selectLecture]": ()=>requestAnimationFrame({
                        "MktgApp.useCallback[selectLecture]": ()=>{
                            const el = document.getElementById("notes-top");
                            if (!el) return;
                            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                            el.scrollIntoView({
                                behavior: reduce ? "auto" : "smooth",
                                block: "start"
                            });
                        }
                    }["MktgApp.useCallback[selectLecture]"])
            }["MktgApp.useCallback[selectLecture]"]);
        }
    }["MktgApp.useCallback[selectLecture]"], []);
    const goToChapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MktgApp.useCallback[goToChapter]": (chapterId)=>{
            const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lectureOfChapter"])(chapterId);
            if (!target) return;
            const scrollWhenReady = {
                "MktgApp.useCallback[goToChapter].scrollWhenReady": ()=>{
                    let frames = 0;
                    const tick = {
                        "MktgApp.useCallback[goToChapter].scrollWhenReady.tick": ()=>{
                            const el = document.getElementById(chapterId);
                            if (el) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$open$2d$section$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jumpTo"])(el);
                                return;
                            }
                            if (++frames < 240) requestAnimationFrame(tick);
                        }
                    }["MktgApp.useCallback[goToChapter].scrollWhenReady.tick"];
                    requestAnimationFrame(tick);
                }
            }["MktgApp.useCallback[goToChapter].scrollWhenReady"];
            if (lectureIdRef.current === target.id) {
                scrollWhenReady();
                return;
            }
            setLectureId(target.id);
            requestAnimationFrame({
                "MktgApp.useCallback[goToChapter]": ()=>requestAnimationFrame(scrollWhenReady)
            }["MktgApp.useCallback[goToChapter]"]);
        }
    }["MktgApp.useCallback[goToChapter]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$open$2d$section$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenSection"])("mktg", goToChapter);
    const openExam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MktgApp.useCallback[openExam]": (g)=>setExamGroup(g)
    }["MktgApp.useCallback[openExam]"], []);
    const openHub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MktgApp.useCallback[openHub]": ()=>setHubOpen(true)
    }["MktgApp.useCallback[openHub]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "top",
        className: "page-wrap mktg-canvas",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TopNav, {
                onOpenExam: openExam,
                onExitAtlas: onExitAtlas,
                onJumpChapter: goToChapter,
                seen: seen
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                lineNumber: 1004,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pt-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "Hero",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MktgHero"], {
                            activeId: lectureId,
                            onSelect: selectLecture,
                            onPractice: openHub,
                            seen: seen,
                            totalQuestions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MKTG_TOTAL_QUESTIONS"]
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 1007,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                        lineNumber: 1006,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "notes-top",
                        "aria-hidden": true,
                        className: "relative scroll-mt-16"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                        lineNumber: 1017,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: `Lecture ${lecture.code} — ${lecture.title}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 18
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.4,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MktgLectureHead, {
                                    lecture: lecture
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 1025,
                                    columnNumber: 13
                                }, this),
                                lecture.chapters.length > 0 ? lecture.chapters.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                                        label: c.label,
                                        children: SECTION_COMPONENTS[c.id]
                                    }, c.id, false, {
                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                        lineNumber: 1028,
                                        columnNumber: 17
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto max-w-3xl px-4 py-16 sm:px-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-warm p-8 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "chip mx-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                        lineNumber: 1036,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Slot reserved"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                lineNumber: 1035,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mt-4 text-2xl font-extrabold text-[#1f2b2b]",
                                                children: [
                                                    "Lecture ",
                                                    lecture.n,
                                                    " hasn’t been summarised yet"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                lineNumber: 1038,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mx-auto mt-3 max-w-md text-[.92rem] leading-relaxed text-[#5f7472]",
                                                children: "This lecture’s notes haven’t been uploaded, so the shelf keeps the slot open. The moment its summary arrives, the chapters fill in right here."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                                lineNumber: 1041,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                        lineNumber: 1034,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 1033,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LecturePager, {
                                    current: lecture,
                                    onJump: selectLecture
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgApp.tsx",
                                    lineNumber: 1048,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgApp.tsx",
                            lineNumber: 1020,
                            columnNumber: 11
                        }, this)
                    }, lecture.id, false, {
                        fileName: "[project]/src/components/mktg/MktgApp.tsx",
                        lineNumber: 1019,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                lineNumber: 1005,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MktgFooter, {}, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                lineNumber: 1052,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PracticeHub, {
                open: hubOpen,
                onClose: ()=>setHubOpen(false),
                onOpenExam: openExam
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                lineNumber: 1053,
                columnNumber: 7
            }, this),
            examGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$mktg$2f$MktgExamWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MktgExamWindow"], {
                group: examGroup,
                onClose: ()=>setExamGroup(null)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgApp.tsx",
                lineNumber: 1054,
                columnNumber: 20
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgApp.tsx",
        lineNumber: 1003,
        columnNumber: 5
    }, this);
}
_s3(MktgApp, "bCt/NHtPTLjBRRCskDQdkm9+ZlU=", false, function() {
    return [
        useSeenDisplay,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$open$2d$section$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenSection"]
    ];
});
_c7 = MktgApp;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "FLAT_ITEMS$MKTG_GROUPS.flatMap");
__turbopack_context__.k.register(_c1, "FLAT_ITEMS");
__turbopack_context__.k.register(_c2, "TopNav");
__turbopack_context__.k.register(_c3, "PracticeHub");
__turbopack_context__.k.register(_c4, "MktgLectureHead");
__turbopack_context__.k.register(_c5, "LecturePager");
__turbopack_context__.k.register(_c6, "MktgFooter");
__turbopack_context__.k.register(_c7, "MktgApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_mktg_MktgApp_tsx_1af5e858._.js.map