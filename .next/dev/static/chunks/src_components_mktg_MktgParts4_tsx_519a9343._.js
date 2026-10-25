(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/mktg/MktgParts4.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MktgAbcSection",
    ()=>MktgAbcSection,
    "MktgAlmondsSection",
    ()=>MktgAlmondsSection,
    "MktgAutopsySection",
    ()=>MktgAutopsySection,
    "MktgBiasSection",
    ()=>MktgBiasSection,
    "MktgBrandPerceptionSection",
    ()=>MktgBrandPerceptionSection,
    "MktgBucketsSection",
    ()=>MktgBucketsSection,
    "MktgGestaltSection",
    ()=>MktgGestaltSection,
    "MktgMotivationSection",
    ()=>MktgMotivationSection,
    "MktgRecap22Section",
    ()=>MktgRecap22Section,
    "MktgRetentionSection",
    ()=>MktgRetentionSection,
    "MktgSensorySection",
    ()=>MktgSensorySection,
    "MktgTheoryMatchSection",
    ()=>MktgTheoryMatchSection,
    "MktgTouchpointsSection",
    ()=>MktgTouchpointsSection,
    "MktgVariationsSection",
    ()=>MktgVariationsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   MKTG — "Principles of Marketing" · shelf 06 of THE ATLAS.
   Parts 4 — Lectures 20–28, fourteen chapters:

   journey-variations · autopsy-purchase          (Lecture 20)
   touchpoints-framework                          (Lecture 21)
   recap22                                        (Lecture 22 —
     blank page in the source PDF; honest L19–21 recap)
   motivation-theories · theory-match             (Lecture 23)
   brand-perception · almonds-price               (Lecture 24)
   sensory-stages · gestalt-lab                   (Lecture 25)
   attitude-buckets · retention-acquisition       (Lecture 26)
   abc-humanization                               (Lecture 27)
   bias-lab                                       (Lecture 28)

   Palette — teal (#0f766e / #14b8a6) + champagne (#a97d2c /
   #e3c26b) + ink (#1f2b2b), lagoon dark panels. No indigo,
   blue or purple anywhere. Content source: lecture notes only.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/anchor.js [app-client] (ecmascript) <export default as Anchor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgePercent$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-percent.js [app-client] (ecmascript) <export default as BadgePercent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cup$2d$soda$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CupSoda$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cup-soda.js [app-client] (ecmascript) <export default as CupSoda>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$footprints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Footprints$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/footprints.js [app-client] (ecmascript) <export default as Footprints>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-handshake.js [app-client] (ecmascript) <export default as HeartHandshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hourglass.js [app-client] (ecmascript) <export default as Hourglass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript) <export default as IndianRupee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/laptop.js [app-client] (ecmascript) <export default as Laptop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/microscope.js [app-client] (ecmascript) <export default as Microscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js [app-client] (ecmascript) <export default as MousePointerClick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pizza$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pizza$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pizza.js [app-client] (ecmascript) <export default as Pizza>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$puzzle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Puzzle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/puzzle.js [app-client] (ecmascript) <export default as Puzzle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/repeat.js [app-client] (ecmascript) <export default as Repeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/route.js [app-client] (ecmascript) <export default as Route>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle.js [app-client] (ecmascript) <export default as Triangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wheat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wheat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wheat.js [app-client] (ecmascript) <export default as Wheat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature(), _s13 = __turbopack_context__.k.signature(), _s14 = __turbopack_context__.k.signature(), _s15 = __turbopack_context__.k.signature(), _s16 = __turbopack_context__.k.signature(), _s17 = __turbopack_context__.k.signature(), _s18 = __turbopack_context__.k.signature(), _s19 = __turbopack_context__.k.signature(), _s20 = __turbopack_context__.k.signature(), _s21 = __turbopack_context__.k.signature(), _s22 = __turbopack_context__.k.signature(), _s23 = __turbopack_context__.k.signature(), _s24 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ---------- palette + shared helpers ---------- */ const TEAL = "#0f766e";
const TEAL_BRIGHT = "#14b8a6";
const INK = "#1f2b2b";
const MUTED = "#5f7472";
const GOLD = "#a97d2c";
const GOLD_LITE = "#e3c26b";
const CREAM = "#f2efe7";
const CREAM_BORDER = "#e3ddcf";
const ROSE = "#9f3d54";
const LAGOON = "linear-gradient(165deg,#0c2124 0%,#12302f 60%,#143236 100%)";
const TEAL_GRAD = "linear-gradient(135deg,#14b8a6,#0f766e)";
const GOLD_GRAD = "linear-gradient(135deg,#e3c26b,#a97d2c)";
const PROSE = "max-w-3xl text-[.93rem] leading-relaxed text-[#3a4a48]";
function GSpan({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            background: "linear-gradient(120deg,#0f766e,#14b8a6 55%,#a97d2c)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c = GSpan;
function MBtn({ onClick, children, tone = "ghost", label, active = false, disabled = false, pressed, className = "" }) {
    const style = tone === "primary" ? {
        background: TEAL_GRAD,
        color: "#f0faf7"
    } : tone === "gold" ? {
        background: GOLD_GRAD,
        color: "#fffaf0"
    } : active ? {
        background: "rgba(15,118,110,.12)",
        color: TEAL,
        border: `1.5px solid ${TEAL}`
    } : {
        background: "#fffdf9",
        color: TEAL,
        border: `1px solid ${CREAM_BORDER}`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        "aria-label": label,
        "aria-pressed": pressed,
        disabled: disabled,
        style: style,
        className: `rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_c1 = MBtn;
function MLog({ children, dark = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        "aria-live": "polite",
        className: "mt-4 min-h-[2.6rem] rounded-xl px-3.5 py-2.5 text-[.85rem] font-bold leading-relaxed",
        style: {
            background: dark ? "rgba(255,236,210,.06)" : CREAM,
            border: `1px dashed ${dark ? "rgba(227,194,107,.4)" : CREAM_BORDER}`,
            color: dark ? GOLD_LITE : TEAL
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_c2 = MLog;
function TChip({ children, tone = "teal" }) {
    const style = tone === "gold" ? {
        background: "rgba(169,125,44,.1)",
        color: GOLD,
        borderColor: "rgba(169,125,44,.32)"
    } : tone === "dark" ? {
        background: "rgba(20,50,54,.92)",
        color: GOLD_LITE,
        borderColor: "rgba(227,194,107,.35)"
    } : {
        background: "rgba(15,118,110,.08)",
        color: TEAL,
        borderColor: "rgba(15,118,110,.25)"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-lg border px-2.5 py-1 text-[.72rem] font-bold leading-relaxed",
        style: style,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_c3 = TChip;
function Pips({ n, i, dark = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1.5",
        "aria-hidden": true,
        children: Array.from({
            length: n
        }).map((_, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-2 rounded-full transition-all duration-300",
                style: {
                    width: k === i ? 20 : 8,
                    background: k <= i ? dark ? GOLD_LITE : TEAL : dark ? "rgba(227,194,107,.25)" : CREAM_BORDER
                }
            }, k, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_c4 = Pips;
/* step player — Play auto-advances one lap, Next/Prev/Reset manual */ function useStepPlayer(total, ms = 1500) {
    _s();
    const [i, setI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStepPlayer.useEffect": ()=>{
            if (!playing) return;
            if (i >= total - 1) {
                const t0 = setTimeout({
                    "useStepPlayer.useEffect.t0": ()=>setPlaying(false)
                }["useStepPlayer.useEffect.t0"], 0);
                return ({
                    "useStepPlayer.useEffect": ()=>clearTimeout(t0)
                })["useStepPlayer.useEffect"];
            }
            const t = setTimeout({
                "useStepPlayer.useEffect.t": ()=>setI({
                        "useStepPlayer.useEffect.t": (v)=>Math.min(v + 1, total - 1)
                    }["useStepPlayer.useEffect.t"])
            }["useStepPlayer.useEffect.t"], ms);
            return ({
                "useStepPlayer.useEffect": ()=>clearTimeout(t)
            })["useStepPlayer.useEffect"];
        }
    }["useStepPlayer.useEffect"], [
        playing,
        i,
        total,
        ms
    ]);
    const next = ()=>{
        setPlaying(false);
        setI((v)=>Math.min(v + 1, total - 1));
    };
    const prev = ()=>{
        setPlaying(false);
        setI((v)=>Math.max(v - 1, 0));
    };
    const reset = ()=>{
        setPlaying(false);
        setI(0);
    };
    const toggle = ()=>setPlaying((p)=>!p);
    return {
        i,
        setI,
        playing,
        next,
        prev,
        reset,
        toggle,
        atEnd: i >= total - 1
    };
}
_s(useStepPlayer, "FHb+nDnRTUugt4yVp6jChNPSMcs=");
function PlayerBtns({ p, name, dark = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                tone: "primary",
                onClick: p.toggle,
                label: `${name} — ${p.playing ? "pause" : "play"}`,
                children: [
                    p.playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                        className: "mr-1 inline h-3.5 w-3.5",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 171,
                        columnNumber: 22
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                        className: "mr-1 inline h-3.5 w-3.5",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 171,
                        columnNumber: 82
                    }, this),
                    p.playing ? "Pause" : "Play"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                onClick: p.prev,
                label: `${name} — previous step`,
                disabled: p.i === 0,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                        className: "inline h-3.5 w-3.5",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    " Prev"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                onClick: p.next,
                label: `${name} — next step`,
                disabled: p.atEnd,
                children: [
                    "Next ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "inline h-3.5 w-3.5",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 178,
                        columnNumber: 14
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                onClick: p.reset,
                label: `${name} — reset`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                        className: "mr-1 inline h-3.5 w-3.5",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    " Reset"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_c5 = PlayerBtns;
/* ============================================================
   LECTURE 20 · CHAPTER 1 — journey-variations
   Definitions, stimulus→choice, the five stages, and the
   skip / reverse / loop journeys — the journey-path machine.
   ============================================================ */ const J_LABELS = [
    [
        "Need",
        "recognition"
    ],
    [
        "Information",
        "search"
    ],
    [
        "Evaluation of",
        "alternatives"
    ],
    [
        "Purchase",
        "decision"
    ],
    [
        "Post-",
        "purchase"
    ]
];
const J_X = [
    130,
    265,
    400,
    535,
    670
];
const J_Y = 82;
const J_SCRIPTS = {
    linear: [
        {
            node: -1,
            log: "A stimulus grabs attention — an ad, a celebrity, a colour combination."
        },
        {
            node: 0,
            log: "Need recognition — a gap opens between the current and the desired state. Internal (the product is running out) or external (an ad, a recommendation)."
        },
        {
            node: 1,
            log: "Information search — online research, retail stores, multiple platforms, recommendations."
        },
        {
            node: 2,
            log: "Evaluation of alternatives — specifications, pricing, availability, discounts, benefits."
        },
        {
            node: 3,
            log: "Purchase decision — the final choice and the transaction."
        },
        {
            node: 4,
            log: "Post-purchase — satisfaction and happiness, or dissatisfaction, regret, guilt. It shapes loyalty."
        }
    ],
    impulse: [
        {
            node: -1,
            log: "Impulse: a heavily discounted tag — 70% off — shouts from the shelf."
        },
        {
            node: 3,
            log: "Straight to purchase. No prior need, no planning — need recognition, search and evaluation are all bypassed."
        },
        {
            node: 4,
            log: "Post-purchase still arrives — a bargain glow, or a small twinge of guilt."
        }
    ],
    direct: [
        {
            node: -1,
            log: "Direct purchase: a clear instruction — \u201Cplease buy ketchup.\u201D"
        },
        {
            node: 3,
            log: "The first three stages are skipped entirely; the consumer proceeds directly to purchase."
        },
        {
            node: 4,
            log: "Post-purchase — was it the right ketchup? Feedback still loops back."
        }
    ],
    reverse: [
        {
            node: 0,
            log: "Need recognition — the journey starts normally."
        },
        {
            node: 1,
            log: "Information search — options gathered."
        },
        {
            node: 2,
            log: "Evaluation — comparing specifications, price, discounts\u2026"
        },
        {
            node: 1,
            log: "Stage reversal — new information sends the journey BACK to search to explore additional options."
        },
        {
            node: 2,
            log: "Back to evaluation, with a better-informed consideration set."
        },
        {
            node: 3,
            log: "Purchase decision."
        },
        {
            node: 4,
            log: "Post-purchase can reverse too: external feedback may revisit need recognition itself — \u201Cwas this even necessary?\u201D"
        }
    ],
    loop: [
        {
            node: -1,
            log: "A stimulus starts the journey\u2026"
        },
        {
            node: 0,
            log: "Need recognition."
        },
        {
            node: 1,
            log: "Search."
        },
        {
            node: 2,
            log: "Evaluation."
        },
        {
            node: 1,
            log: "Circular pattern — new information, changing circumstances or unexpected feedback pulls the consumer back to an earlier stage."
        },
        {
            node: 2,
            log: "Evaluate again — the loop can repeat any number of times."
        },
        {
            node: 3,
            log: "Purchase decision — the loop finally exits."
        },
        {
            node: 4,
            log: "Post-purchase — and the whole journey feeds the next one."
        }
    ]
};
function JourneyPathMachine() {
    _s1();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("linear");
    const script = J_SCRIPTS[mode];
    const p = useStepPlayer(script.length, 1700);
    const cur = script[p.i];
    const visited = script.slice(0, p.i + 1).map((s)=>s.node);
    const pick = (m)=>{
        setMode(m);
        p.reset();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                        className: "h-6 w-6",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#12312e] md:text-2xl",
                        children: "The journey-path machine"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                        children: "one model · five real-world shapes"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                role: "group",
                "aria-label": "Journey mode",
                children: [
                    "linear",
                    "impulse",
                    "direct",
                    "reverse",
                    "loop"
                ].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        onClick: ()=>pick(m),
                        active: mode === m,
                        pressed: mode === m,
                        label: `Set journey mode to ${m}`,
                        children: m === "impulse" ? "Skip · impulse (70% off)" : m === "direct" ? "Skip · direct (ketchup)" : m
                    }, m, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 rounded-2xl p-3",
                style: {
                    background: LAGOON
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 760 176",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": `Five-stage journey diagram running in ${mode} mode: ${cur.log}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "72",
                            y1: J_Y,
                            x2: J_X[0] - 21,
                            y2: J_Y,
                            stroke: "#3f615c",
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this),
                        J_X.slice(0, -1).map((x, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: x + 21,
                                y1: J_Y,
                                x2: J_X[k + 1] - 21,
                                y2: J_Y,
                                stroke: "#3f615c",
                                strokeWidth: "2"
                            }, k, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this)),
                        mode === "impulse" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: `M 42 ${J_Y - 26} C 150 ${J_Y - 92}, 430 ${J_Y - 92}, 535 ${J_Y - 26}`,
                            fill: "none",
                            stroke: GOLD_LITE,
                            strokeWidth: "2.5",
                            strokeDasharray: "7 6",
                            initial: {
                                pathLength: 0,
                                opacity: 0
                            },
                            animate: {
                                pathLength: 1,
                                opacity: 1
                            },
                            transition: {
                                duration: 0.9
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 277,
                            columnNumber: 13
                        }, this) : null,
                        mode === "direct" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: `M 42 ${J_Y + 26} C 150 ${J_Y + 96}, 430 ${J_Y + 96}, 535 ${J_Y + 26}`,
                            fill: "none",
                            stroke: GOLD_LITE,
                            strokeWidth: "2.5",
                            strokeDasharray: "7 6",
                            initial: {
                                pathLength: 0,
                                opacity: 0
                            },
                            animate: {
                                pathLength: 1,
                                opacity: 1
                            },
                            transition: {
                                duration: 0.9
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 283,
                            columnNumber: 13
                        }, this) : null,
                        mode === "reverse" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: `M 400 ${J_Y - 24} C 370 ${J_Y - 64}, 295 ${J_Y - 64}, 265 ${J_Y - 24}`,
                            fill: "none",
                            stroke: "#f0b6a4",
                            strokeWidth: "2.5",
                            strokeDasharray: "6 5",
                            initial: {
                                pathLength: 0,
                                opacity: 0
                            },
                            animate: {
                                pathLength: 1,
                                opacity: 1
                            },
                            transition: {
                                duration: 0.8
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 289,
                            columnNumber: 13
                        }, this) : null,
                        mode === "loop" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: `M 265 ${J_Y + 24} C 295 ${J_Y + 66}, 370 ${J_Y + 66}, 400 ${J_Y + 24}`,
                            fill: "none",
                            stroke: GOLD_LITE,
                            strokeWidth: "2.5",
                            strokeDasharray: "6 5",
                            initial: {
                                pathLength: 0,
                                opacity: 0
                            },
                            animate: {
                                pathLength: 1,
                                opacity: 1
                            },
                            transition: {
                                duration: 0.8
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 295,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "30",
                            y: J_Y - 13,
                            width: "26",
                            height: "26",
                            rx: "8",
                            fill: "#1b3a37",
                            stroke: GOLD,
                            strokeWidth: "1.6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "43",
                            y: J_Y - 22,
                            textAnchor: "middle",
                            fontSize: "11",
                            fontWeight: "800",
                            fill: GOLD_LITE,
                            children: "stimulus"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this),
                        J_X.map((x, k)=>{
                            const on = visited.includes(k);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: x,
                                        cy: J_Y,
                                        r: "20",
                                        fill: on ? "#155e57" : "#122e2b",
                                        stroke: on ? TEAL_BRIGHT : "#3f615c",
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 306,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: x,
                                        y: J_Y + 4.5,
                                        textAnchor: "middle",
                                        fontSize: "13",
                                        fontWeight: "800",
                                        fill: on ? "#d8f3ec" : "#7ea49d",
                                        children: k + 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 307,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: x,
                                        y: J_Y + 44,
                                        textAnchor: "middle",
                                        fontSize: "11",
                                        fontWeight: "700",
                                        fill: on ? "#cfe9e2" : "#7ea49d",
                                        children: [
                                            J_LABELS[k][0],
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                                                x: x,
                                                dy: "12",
                                                children: J_LABELS[k][1]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 308,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, k, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 305,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                            animate: {
                                x: cur.node === -1 ? 43 : J_X[cur.node],
                                y: J_Y
                            },
                            transition: {
                                type: "spring",
                                stiffness: 220,
                                damping: 22
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "0",
                                cy: "0",
                                r: "9",
                                fill: GOLD_LITE,
                                stroke: "#a97d2c",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "380",
                            y: "172",
                            textAnchor: "middle",
                            fontSize: "10.5",
                            fontWeight: "700",
                            fill: "#7ea49d",
                            children: "the entire phenomenon between the stimulus and the choice is consumer behavior"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerBtns, {
                        p: p,
                        name: "Journey machine"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pips, {
                        n: script.length,
                        i: p.i
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                children: [
                    "Mode: ",
                    mode,
                    " · step ",
                    p.i + 1,
                    "/",
                    script.length,
                    " — ",
                    cur.log
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_s1(JourneyPathMachine, "rljcTLaHfSUvBw2lTdRwPw6ypZ0=", false, function() {
    return [
        useStepPlayer
    ];
});
_c6 = JourneyPathMachine;
function MktgVariationsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "journey-variations",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 20",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Journey ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GSpan, {
                            children: "variations"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 335,
                            columnNumber: 26
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Schiffman and Professor Jain define consumer behavior; the stimulus–choice frame and the five-stage model give it a skeleton — and then real buyers skip, reverse and loop right through it."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: PROSE,
                    children: [
                        "Consumer behavior is a ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "multidisciplinary field"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 339,
                            columnNumber: 32
                        }, this),
                        " — psychology, marketing, anthropology, behavioral economics and neurology — that explains ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "why, when, how and where"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 340,
                            columnNumber: 60
                        }, this),
                        " purchases are made. It covers not just the purchase decision itself but the emotions, psychology and behaviors that accompany it."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 338,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 grid gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Schiffman",
                            v: "Consumer behavior is the study of consumers' choices during searching, evaluating, purchasing, and using products and services that satisfy their needs."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 346,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 80,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Professor Jain",
                            v: "Consumer behavior is the study of people and activities associated with purchases — how products are chosen, distributed, and used, considering the emotions, psychology, and behaviors these processes create."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 347,
                            columnNumber: 28
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Stimulus → choice",
                sub: "the whole phenomenon in between is the field"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-stretch gap-3 md:flex-row md:items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-1 items-center gap-3 rounded-xl p-4",
                                    style: {
                                        background: "rgba(169,125,44,.09)",
                                        border: "1px solid rgba(169,125,44,.3)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "h-5 w-5 shrink-0",
                                            style: {
                                                color: GOLD
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 355,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.88rem] font-bold",
                                            style: {
                                                color: INK
                                            },
                                            children: "STIMULUS — any external element that grabs attention momentarily: advertisements, celebrities, colour combinations."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 354,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden h-0.5 flex-1 md:block",
                                    style: {
                                        background: `linear-gradient(90deg,${GOLD},${TEAL})`
                                    },
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-1 items-center gap-3 rounded-xl p-4",
                                    style: {
                                        background: "rgba(15,118,110,.08)",
                                        border: "1px solid rgba(15,118,110,.25)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"], {
                                            className: "h-5 w-5 shrink-0",
                                            style: {
                                                color: TEAL
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 360,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.88rem] font-bold",
                                            style: {
                                                color: INK
                                            },
                                            children: "CHOICE — the consumer's preference and decision to purchase a product, brand or service."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 359,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-center text-[.8rem] font-bold uppercase tracking-[.14em]",
                            style: {
                                color: MUTED
                            },
                            children: "understanding what stimulus triggered a purchase — and how it influenced the mind — is the heart of the field"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 352,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "The five-stage model, summarized",
                sub: "the theoretical spine every journey is measured against"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepsFlow"], {
                    steps: [
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: TEAL
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 374,
                                columnNumber: 21
                            }, void 0),
                            label: "Need recognition",
                            sub: "gap between current & desired state — internal or external trigger"
                        },
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: TEAL
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 375,
                                columnNumber: 21
                            }, void 0),
                            label: "Information search",
                            sub: "online, stores, platforms, recommendations"
                        },
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: TEAL
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 376,
                                columnNumber: 21
                            }, void 0),
                            label: "Evaluation of alternatives",
                            sub: "specs, price, availability, discounts, benefits"
                        },
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: TEAL
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 377,
                                columnNumber: 21
                            }, void 0),
                            label: "Purchase decision",
                            sub: "the transaction"
                        },
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: TEAL
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 378,
                                columnNumber: 21
                            }, void 0),
                            label: "Post-purchase",
                            sub: "satisfaction → regret — it decides loyalty"
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 372,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "…and then reality happens",
                sub: "run the five real-world shapes of the same journey"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JourneyPathMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 384,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid gap-5 md:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                    tone: "gold",
                                    children: "stage skipping"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 389,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[.88rem] leading-relaxed text-[#3a4a48]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Impulse:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 391,
                                            columnNumber: 15
                                        }, this),
                                        " jump straight from stimulus to purchase — a 70%-off item bought with no prior need or planning. ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Direct purchases:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 392,
                                            columnNumber: 33
                                        }, this),
                                        ' a parent\'s clear instruction ("buy ketchup") skips the first three stages entirely.'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 390,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 80,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                    tone: "gold",
                                    children: "stage reversal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 399,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[.88rem] leading-relaxed text-[#3a4a48]",
                                    children: [
                                        "After evaluation, new information can send the consumer ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "back to search"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 401,
                                            columnNumber: 71
                                        }, this),
                                        ". Post-purchase experiences or external feedback may even revisit ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "need recognition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 402,
                                            columnNumber: 65
                                        }, this),
                                        " — questioning whether the purchase was necessary at all."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 400,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 397,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 160,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                    tone: "gold",
                                    children: "circular patterns"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 409,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[.88rem] leading-relaxed text-[#3a4a48]",
                                    children: [
                                        "The journey is not always a forward progression — it can ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "loop"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 411,
                                            columnNumber: 72
                                        }, this),
                                        ", with consumers revisiting earlier stages based on new information, changing circumstances, or unexpected feedback from others."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 410,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 408,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 407,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Consumer decision-making ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "theoretically follows a linear path"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 420,
                                    columnNumber: 38
                                }, void 0),
                                " but often deviates in practice."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Consumers may ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "skip stages, reverse directions, or loop back"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 421,
                                    columnNumber: 27
                                }, void 0),
                                " based on new information and circumstances."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Both the framework ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "and"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 422,
                                    columnNumber: 32
                                }, void 0),
                                " its real-world variations matter — that is what makes the behavior influencable."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Post-purchase behavior is as important as the pre-purchase process"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 423,
                                    columnNumber: 13
                                }, void 0),
                                " in shaping future decisions and brand loyalty."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Discounts, time constraints, recommendations and availability decide ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "which stages get prioritized or skipped"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 424,
                                    columnNumber: 82
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 419,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 418,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 332,
        columnNumber: 5
    }, this);
}
_c7 = MktgVariationsSection;
/* ============================================================
   LECTURE 20 · CHAPTER 2 — autopsy-purchase
   The classroom exercise: a real purchase, dissected.
   ============================================================ */ const AUTOPSY = [
    {
        t: "Trigger",
        tag: "Need recognition",
        d: "Internal need — the existing shampoo was running out. The gap opened on its own; no advertisement required."
    },
    {
        t: "Search",
        tag: "Information search",
        d: "Multiple platforms checked — Nyka, Amazon, retail stores — comparing price, expiry dates and availability."
    },
    {
        t: "Alternatives",
        tag: "Evaluation of alternatives",
        d: "L'Oreal, Kerastase, Nat Habit and Flam — brands offering similar benefits, all in the consideration set."
    },
    {
        t: "Final factor",
        tag: "the nudge that closed it",
        d: "A 15% discount on Nyka made the final difference in choosing the product."
    },
    {
        t: "Purchase",
        tag: "Purchase decision",
        d: "The transaction completes — the Moroccan oil shampoo is bought, the discount having tipped the evaluation."
    },
    {
        t: "Post-purchase",
        tag: "Post-purchase behavior",
        d: "Satisfaction and confidence in nourishing hair — happiness and positive feelings that quietly book the next purchase."
    }
];
function AutopsyMachine() {
    _s2();
    const p = useStepPlayer(AUTOPSY.length, 1900);
    const cur = AUTOPSY[p.i];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$microscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Microscope$3e$__["Microscope"], {
                        className: "h-6 w-6",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#12312e] md:text-2xl",
                        children: "The autopsy table — step through it"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 452,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                        children: "Moroccan oil shampoo · classroom exercise"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 453,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 450,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 rounded-2xl p-3",
                style: {
                    background: LAGOON
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 760 120",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": `Autopsy of a purchase, step ${p.i + 1} of ${AUTOPSY.length}: ${cur.t} — ${cur.tag}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "70",
                            y1: "58",
                            x2: "690",
                            y2: "58",
                            stroke: "#3f615c",
                            strokeWidth: "2",
                            strokeDasharray: "5 6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 458,
                            columnNumber: 11
                        }, this),
                        AUTOPSY.map((s, k)=>{
                            const x = 70 + k * 124;
                            const on = k <= p.i;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: x,
                                        cy: "58",
                                        r: "17",
                                        fill: on ? "#155e57" : "#122e2b",
                                        stroke: k === p.i ? GOLD_LITE : on ? TEAL_BRIGHT : "#3f615c",
                                        strokeWidth: k === p.i ? 2.5 : 2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 464,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: x,
                                        y: "62.5",
                                        textAnchor: "middle",
                                        fontSize: "12",
                                        fontWeight: "800",
                                        fill: on ? "#d8f3ec" : "#7ea49d",
                                        children: k + 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 465,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: x,
                                        y: "94",
                                        textAnchor: "middle",
                                        fontSize: "10.5",
                                        fontWeight: "700",
                                        fill: k === p.i ? GOLD_LITE : on ? "#cfe9e2" : "#7ea49d",
                                        children: s.t
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 466,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                        cx: x,
                                        cy: "20",
                                        r: "5",
                                        fill: GOLD_LITE,
                                        stroke: "#a97d2c",
                                        strokeWidth: "1",
                                        animate: {
                                            opacity: k === p.i ? 1 : 0.15,
                                            scale: k === p.i ? 1.25 : 1
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 467,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, s.t, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 463,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                            animate: {
                                x: 70 + p.i * 124,
                                y: 58
                            },
                            transition: {
                                type: "spring",
                                stiffness: 220,
                                damping: 22
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "0",
                                cy: "0",
                                r: "24",
                                fill: "none",
                                stroke: GOLD_LITE,
                                strokeWidth: "1.5",
                                strokeDasharray: "4 4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 473,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 472,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 456,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerBtns, {
                        p: p,
                        name: "Autopsy machine"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 478,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pips, {
                        n: AUTOPSY.length,
                        i: p.i
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 479,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 477,
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
                        y: -8
                    },
                    transition: {
                        duration: 0.28
                    },
                    className: "mt-4 rounded-2xl p-5",
                    style: {
                        background: CREAM,
                        border: `1px solid ${CREAM_BORDER}`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[.72rem] font-extrabold uppercase tracking-[.16em]",
                            style: {
                                color: GOLD
                            },
                            children: [
                                "Step ",
                                p.i + 1,
                                " of ",
                                AUTOPSY.length,
                                " · ",
                                cur.tag
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 484,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-lg font-bold",
                            style: {
                                color: TEAL
                            },
                            children: cur.t
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 485,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1.5 text-[.92rem] leading-relaxed",
                            style: {
                                color: "#3a4a48"
                            },
                            children: cur.d
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 486,
                            columnNumber: 11
                        }, this)
                    ]
                }, p.i, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 482,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 481,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                children: [
                    "Autopsy status — step ",
                    p.i + 1,
                    "/",
                    AUTOPSY.length,
                    ": ",
                    cur.t,
                    " · ",
                    cur.tag
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 489,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 449,
        columnNumber: 5
    }, this);
}
_s2(AutopsyMachine, "bUSMC+TeyDZlfSSZdkZJz/3Rqb0=", false, function() {
    return [
        useStepPlayer
    ];
});
_c8 = AutopsyMachine;
function MktgAutopsySection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "autopsy-purchase",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 20",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Autopsy of ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GSpan, {
                            children: "a purchase"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 499,
                            columnNumber: 29
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "A classroom exercise takes one real, ordinary purchase and dissects it stage by stage — revealing the actual path a consumer walks, and the exact nudge that closes the deal."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 497,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: PROSE,
                    children: [
                        "The ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "autopsy of purchase"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 503,
                            columnNumber: 13
                        }, this),
                        " is a practical application of everything above: analyze a recent purchase and surface the stages you actually went through — including the ones theory says should be there but weren't. The specimen on the table: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Moroccan oil shampoo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 505,
                            columnNumber: 50
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 502,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 502,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Lay the stages on the table",
                sub: "trigger → search → alternatives → the closing nudge → purchase → post-purchase"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 508,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AutopsyMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 509,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 509,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                            kind: "story",
                            title: "Why the autopsy matters",
                            children: [
                                "The textbook says every stage runs in order. The autopsy found search across ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Nyka, Amazon and retail stores"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 514,
                                    columnNumber: 90
                                }, this),
                                ", four serious alternatives — ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "L'Oreal, Kerastase, Nat Habit, Flam"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 515,
                                    columnNumber: 65
                                }, this),
                                " — and then a single ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "15% discount"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 516,
                                    columnNumber: 31
                                }, this),
                                " settling the whole evaluation. Real journeys are shorter than models, and one heuristic can carry the final weight."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 513,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 512,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 80,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                            kind: "insight",
                            title: "The stage that outlives the receipt",
                            children: [
                                "Post-purchase here was ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "satisfaction and confidence in nourishing hair"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 522,
                                    columnNumber: 36
                                }, this),
                                " — happiness and positive feelings. That emotional residue is not the end of the journey; it is the ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "trigger waiting for the next repurchase"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 523,
                                    columnNumber: 96
                                }, this),
                                ", which lets the consumer skip exploration entirely next time."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 521,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 520,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "An autopsy maps the ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "actual"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 531,
                                    columnNumber: 33
                                }, void 0),
                                " stages of a real purchase — not the theoretical checklist."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Search spanned ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "platforms and stores"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 532,
                                    columnNumber: 28
                                }, void 0),
                                "; evaluation produced ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "four alternatives"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 532,
                                    columnNumber: 87
                                }, void 0),
                                " with similar benefits."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The final decision factor was ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "a 15% discount on Nyka"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 533,
                                    columnNumber: 43
                                }, void 0),
                                " — one heuristic, one closed deal."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Post-purchase ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "satisfaction feeds the next journey"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 534,
                                    columnNumber: 27
                                }, void 0),
                                " — as important as everything before the receipt."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 530,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 529,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 496,
        columnNumber: 5
    }, this);
}
_c9 = MktgAutopsySection;
/* ============================================================
   LECTURE 21 — touchpoints-framework
   Non-linear recap, involvement levels, touchpoints beyond the
   point of sale, and the integrated behavior framework cycle.
   ============================================================ */ const CYCLE = [
    {
        t: "Unfulfilled need",
        d: "A gap between the current state and the desired state — the lecture's example: hunger. It can be a need, a want or a desire."
    },
    {
        t: "Fear / tension",
        d: "The psychological discomfort the unmet need creates. Tension is the engine of everything that follows."
    },
    {
        t: "Drive",
        d: "An internal trigger — the motivation to act, produced to reduce the tension."
    },
    {
        t: "Behavior",
        d: "Individual-specific actions. One hungry person cooks; another orders delivery; another visits a restaurant, eats what's available at home, or asks family to prepare food."
    },
    {
        t: "Consumption",
        d: "The actual use of the product or service the behavior produced."
    },
    {
        t: "Goal fulfillment",
        d: "The need is satisfied — tension reduces. The cycle closes and can begin again with the next unfulfilled need."
    }
];
const CYCLE_POS = [
    -90,
    -30,
    30,
    90,
    150,
    210
].map(_c10 = (a)=>{
    const rad = a * Math.PI / 180;
    return {
        cx: 240 + 132 * Math.cos(rad),
        cy: 168 + 118 * Math.sin(rad)
    };
});
_c11 = CYCLE_POS;
function FrameworkCycleMachine() {
    _s3();
    const p = useStepPlayer(CYCLE.length, 1700);
    const cur = CYCLE[p.i];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$repeat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"], {
                        className: "h-6 w-6",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 566,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#12312e] md:text-2xl",
                        children: "The framework-cycle machine"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 567,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                        children: "unfulfilled need → tension reduced"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 568,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 565,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-5 lg:grid-cols-[1.2fr,1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl p-3",
                        style: {
                            background: LAGOON
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 480 336",
                            className: "h-auto w-full",
                            role: "img",
                            "aria-label": `Integrated consumer behavior framework, stage ${p.i + 1} of 6: ${cur.t} — ${cur.d}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "240",
                                    cy: "168",
                                    r: "118",
                                    fill: "none",
                                    stroke: "#3f615c",
                                    strokeWidth: "2",
                                    strokeDasharray: "6 7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 574,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "240",
                                    y: "163",
                                    textAnchor: "middle",
                                    fontSize: "12",
                                    fontWeight: "800",
                                    fill: GOLD_LITE,
                                    children: "tension ↓"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 575,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "240",
                                    y: "180",
                                    textAnchor: "middle",
                                    fontSize: "10",
                                    fontWeight: "700",
                                    fill: "#9fbcb4",
                                    children: "at goal fulfillment"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 576,
                                    columnNumber: 13
                                }, this),
                                CYCLE_POS.map((pos, k)=>{
                                    const on = k <= p.i;
                                    const px = pos.cx, py = pos.cy;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: px,
                                                cy: py,
                                                r: "24",
                                                fill: on ? "#155e57" : "#122e2b",
                                                stroke: k === p.i ? GOLD_LITE : on ? TEAL_BRIGHT : "#3f615c",
                                                strokeWidth: k === p.i ? 2.5 : 2
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                lineNumber: 582,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: px,
                                                y: py + 4.5,
                                                textAnchor: "middle",
                                                fontSize: "12",
                                                fontWeight: "800",
                                                fill: on ? "#d8f3ec" : "#7ea49d",
                                                children: k + 1
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                lineNumber: 583,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, k, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 581,
                                        columnNumber: 17
                                    }, this);
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                                    animate: {
                                        x: CYCLE_POS[p.i].cx,
                                        y: CYCLE_POS[p.i].cy
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 220,
                                        damping: 22
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "0",
                                        cy: "0",
                                        r: "10",
                                        fill: GOLD_LITE,
                                        stroke: "#a97d2c",
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 588,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 587,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: CYCLE_POS[0].cx,
                                    y: CYCLE_POS[0].cy - 36,
                                    textAnchor: "middle",
                                    fontSize: "10.5",
                                    fontWeight: "800",
                                    fill: "#cfe9e2",
                                    children: "unfulfilled need"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 590,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: CYCLE_POS[3].cx,
                                    y: CYCLE_POS[3].cy + 42,
                                    textAnchor: "middle",
                                    fontSize: "10.5",
                                    fontWeight: "800",
                                    fill: "#cfe9e2",
                                    children: "goal fulfillment & tension reduction"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 591,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 572,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 571,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerBtns, {
                                p: p,
                                name: "Framework cycle"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 595,
                                columnNumber: 11
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
                                        y: -8
                                    },
                                    transition: {
                                        duration: 0.28
                                    },
                                    className: "mt-4 rounded-2xl p-5",
                                    style: {
                                        background: CREAM,
                                        border: `1px solid ${CREAM_BORDER}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.72rem] font-extrabold uppercase tracking-[.16em]",
                                            style: {
                                                color: GOLD
                                            },
                                            children: [
                                                "Stage ",
                                                p.i + 1,
                                                " of 6"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 599,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-lg font-bold",
                                            style: {
                                                color: TEAL
                                            },
                                            children: cur.t
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 600,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1.5 text-[.9rem] leading-relaxed",
                                            style: {
                                                color: "#3a4a48"
                                            },
                                            children: cur.d
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 601,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, p.i, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 597,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 596,
                                columnNumber: 11
                            }, this),
                            p.i === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                        children: "cook"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 606,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                        children: "order delivery"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 606,
                                        columnNumber: 34
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                        children: "visit a restaurant"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 606,
                                        columnNumber: 63
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                        children: "eat what's at home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 607,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                        children: "ask family"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 607,
                                        columnNumber: 53
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 605,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                                children: [
                                    "Cycle status — stage ",
                                    p.i + 1,
                                    "/6: ",
                                    cur.t
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 610,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 594,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 570,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 564,
        columnNumber: 5
    }, this);
}
_s3(FrameworkCycleMachine, "bUSMC+TeyDZlfSSZdkZJz/3Rqb0=", false, function() {
    return [
        useStepPlayer
    ];
});
_c12 = FrameworkCycleMachine;
function MktgTouchpointsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "touchpoints-framework",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 21",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Touchpoints & the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GSpan, {
                            children: "integrated framework"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 622,
                            columnNumber: 40
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "The journey is non-linear; involvement sets its depth; marketing acts far beyond the point of sale — and underneath it all runs a six-part cycle from unfulfilled need to tension reduction."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 620,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                    children: "low involvement"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 629,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pizza$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pizza$3e$__["Pizza"], {
                                            className: "h-6 w-6 shrink-0",
                                            style: {
                                                color: GOLD
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 631,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.88rem] leading-relaxed text-[#3a4a48]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Pizza at 11:30 PM"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 17
                                                }, this),
                                                " — triggered by immediate need or a notification. Minimal search or evaluation; a quick decision without extensive comparison; driven by convenience and impulse."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 632,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 630,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 628,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 627,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 80,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                    children: "high involvement"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 641,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"], {
                                            className: "h-6 w-6 shrink-0",
                                            style: {
                                                color: TEAL
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 643,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.88rem] leading-relaxed text-[#3a4a48]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Laptop purchase"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 17
                                                }, this),
                                                " — extensive search and evaluation; specifications, brands, configurations and price ranges; detailed comparison with assigned weightage; significant emotional response post-purchase."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 644,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 642,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 640,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 639,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 626,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "insight",
                    title: "No generalized pattern applies",
                    children: [
                        "Decision-making is ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "highly subjective and varies from individual to individual"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 655,
                            columnNumber: 30
                        }, this),
                        " — the same person sails through a pizza order and spends weeks inside the messy middle for a laptop."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 654,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 653,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Marketing lives at every touchpoint",
                sub: "not just at the point of sale"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 660,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-3 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                    tone: "gold",
                                    children: "trigger"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 662,
                                    columnNumber: 48
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.86rem] leading-relaxed text-[#3a4a48]",
                                    children: "Discounts, celebrity endorsements, events — influence at the trigger phase itself."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 662,
                                    columnNumber: 82
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 662,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 662,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 60,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                    tone: "gold",
                                    children: "search"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 663,
                                    columnNumber: 59
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.86rem] leading-relaxed text-[#3a4a48]",
                                    children: "Discovering product popularity or best sellers while exploring options."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 663,
                                    columnNumber: 92
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 663,
                            columnNumber: 28
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 663,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 120,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                    tone: "gold",
                                    children: "evaluation"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 664,
                                    columnNumber: 60
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.86rem] leading-relaxed text-[#3a4a48]",
                                    children: "Product quality comparisons — the evaluation stage is a marketing surface too."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 664,
                                    columnNumber: 97
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 664,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 664,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 180,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                    tone: "gold",
                                    children: "post-purchase"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 665,
                                    columnNumber: 60
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.86rem] leading-relaxed text-[#3a4a48]",
                                    children: "Reviews, ratings, recall — and past positive experiences become future triggers, letting consumers skip exploration and go straight to purchase."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 665,
                                    columnNumber: 100
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 665,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 665,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 661,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "The integrated consumer behavior framework",
                sub: "unfulfilled need → fear/tension → drive → behavior → consumption → goal fulfillment & tension reduction"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 668,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FrameworkCycleMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 669,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 669,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Individual variability",
                            v: "The drive → behavior transition depends on individual perceptions, personality traits, ability to learn, and personal attitudes."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 672,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 672,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 80,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "The messy middle",
                            v: "Once triggered, consumers enter an infinity zone of continuous exploration and evaluation — comparing across Amazon, Flipkart and physical stores, filling carts and wish lists — until a strong enough stimulus converts it into an actual purchase."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 673,
                            columnNumber: 28
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 673,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 671,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Decision-making is a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "continuous, non-linear"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 678,
                                    columnNumber: 34
                                }, void 0),
                                " process of exploration and evaluation."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The journey differs sharply by ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "involvement level"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 679,
                                    columnNumber: 44
                                }, void 0),
                                " — pizza at 11:30 PM vs a laptop."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Marketing influences ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "multiple touchpoints across the entire journey"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 680,
                                    columnNumber: 34
                                }, void 0),
                                ", not just at purchase."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Behavior is fundamentally driven by the need to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "reduce tension from unfulfilled needs, wants or desires"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 681,
                                    columnNumber: 61
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Outcomes are individually specific — explaining them requires ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "perception, personality, learning and attitudes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 682,
                                    columnNumber: 75
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 677,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 676,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 619,
        columnNumber: 5
    }, this);
}
_c13 = MktgTouchpointsSection;
/* ============================================================
   LECTURE 22 — recap22 (dark)
   The source PDF page is blank. Honest recap of the L19–21 arc
   + a self-test. Nothing here is invented.
   ============================================================ */ function RecapStagesSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 520 120",
        className: "h-auto w-full",
        role: "img",
        "aria-label": "The five stages in a line: need recognition, information search, evaluation of alternatives, purchase decision, post-purchase behavior",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                    id: "rc-arrow",
                    markerWidth: "8",
                    markerHeight: "8",
                    refX: "6",
                    refY: "3",
                    orient: "auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0,0 L7,3 L0,6 Z",
                        fill: GOLD_LITE
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 698,
                        columnNumber: 100
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 698,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 698,
                columnNumber: 7
            }, this),
            [
                52,
                168,
                284,
                400
            ].map((x, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                    x1: x + 20,
                    y1: "58",
                    x2: x + 108,
                    y2: "58",
                    stroke: GOLD_LITE,
                    strokeWidth: "2",
                    markerEnd: "url(#rc-arrow)",
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
                        delay: 0.15 * k,
                        duration: 0.5
                    }
                }, k, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 700,
                    columnNumber: 9
                }, this)),
            [
                "Need",
                "Search",
                "Evaluation",
                "Purchase",
                "Post-"
            ].map((t, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: 52 + k * 104,
                            cy: "58",
                            r: "20",
                            fill: "#155e57",
                            stroke: TEAL_BRIGHT,
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 706,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 52 + k * 104,
                            y: "62.5",
                            textAnchor: "middle",
                            fontSize: "12",
                            fontWeight: "800",
                            fill: "#d8f3ec",
                            children: k + 1
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 707,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: 52 + k * 104,
                            y: "98",
                            textAnchor: "middle",
                            fontSize: "10",
                            fontWeight: "700",
                            fill: "#9fbcb4",
                            children: t
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 708,
                            columnNumber: 11
                        }, this)
                    ]
                }, t, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 705,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "260",
                y: "16",
                textAnchor: "middle",
                fontSize: "10.5",
                fontWeight: "700",
                fill: "#7ea49d",
                children: "theory drew a straight line — Lecture 20 showed every way reality bends it"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 711,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 697,
        columnNumber: 5
    }, this);
}
_c14 = RecapStagesSvg;
function RecapLoopSvg() {
    const pts = [
        [
            240,
            88
        ],
        [
            150,
            42
        ],
        [
            62,
            88
        ],
        [
            150,
            134
        ],
        [
            240,
            88
        ],
        [
            330,
            42
        ],
        [
            418,
            88
        ],
        [
            330,
            134
        ],
        [
            240,
            88
        ]
    ];
    const xs = pts.map((p)=>p[0]);
    const ys = pts.map((p)=>p[1]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 480 176",
        className: "h-auto w-full",
        role: "img",
        "aria-label": "The infinity loop: exploration and evaluation cycling until a strong stimulus breaks out to purchase",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                d: "M 62 88 C 62 30, 240 30, 240 88 C 240 146, 418 146, 418 88 C 418 30, 240 30, 240 88 C 240 146, 62 146, 62 88 Z",
                fill: "none",
                stroke: GOLD_LITE,
                strokeWidth: "2.5",
                strokeDasharray: "8 7",
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
                    duration: 1.4
                }
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 722,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                animate: {
                    x: xs,
                    y: ys
                },
                transition: {
                    duration: 7,
                    repeat: 1,
                    ease: "easeInOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "0",
                    cy: "0",
                    r: "9",
                    fill: TEAL_BRIGHT,
                    stroke: "#d8f3ec",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 728,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 727,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "240",
                y: "20",
                textAnchor: "middle",
                fontSize: "11",
                fontWeight: "800",
                fill: "#cfe9e2",
                children: "explore ⇄ evaluate — the messy middle"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 730,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "446",
                y: "92",
                textAnchor: "end",
                fontSize: "10.5",
                fontWeight: "800",
                fill: GOLD_LITE,
                children: "a strong stimulus → purchase"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 731,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 721,
        columnNumber: 5
    }, this);
}
_c15 = RecapLoopSvg;
function RecapCycleSvg() {
    const pos = [
        -90,
        -30,
        30,
        90,
        150,
        210
    ].map((a)=>{
        const rad = a * Math.PI / 180;
        return {
            cx: 130 + 92 * Math.cos(rad),
            cy: 118 + 86 * Math.sin(rad)
        };
    });
    const labels = [
        "Need",
        "Tension",
        "Drive",
        "Behavior",
        "Consumption",
        "Goal"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 260 236",
        className: "h-auto w-full",
        role: "img",
        "aria-label": "Six-node cycle: unfulfilled need, fear or tension, drive, behavior, consumption, goal fulfillment and tension reduction",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "130",
                cy: "118",
                r: "86",
                fill: "none",
                stroke: "#3f615c",
                strokeWidth: "1.8",
                strokeDasharray: "5 6"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 744,
                columnNumber: 7
            }, this),
            pos.map((p, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: p.cx,
                            cy: p.cy,
                            r: "18",
                            fill: "#155e57",
                            stroke: TEAL_BRIGHT,
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 747,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: p.cx,
                            y: p.cy + 4,
                            textAnchor: "middle",
                            fontSize: "10.5",
                            fontWeight: "800",
                            fill: "#d8f3ec",
                            children: k + 1
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 748,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: p.cx,
                            y: p.cy + (k === 3 ? 36 : -26),
                            textAnchor: "middle",
                            fontSize: "9.5",
                            fontWeight: "700",
                            fill: "#9fbcb4",
                            children: labels[k]
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 749,
                            columnNumber: 11
                        }, this)
                    ]
                }, k, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 746,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "130",
                y: "115",
                textAnchor: "middle",
                fontSize: "10",
                fontWeight: "800",
                fill: GOLD_LITE,
                children: "tension ↓"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 752,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "130",
                y: "130",
                textAnchor: "middle",
                fontSize: "9",
                fontWeight: "700",
                fill: "#9fbcb4",
                children: "at goal"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 753,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 743,
        columnNumber: 5
    }, this);
}
_c16 = RecapCycleSvg;
const RECAP_TABS = [
    {
        tag: "Lecture 19",
        t: "The five stages",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecapStagesSvg, {}, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
            lineNumber: 760,
            columnNumber: 51
        }, ("TURBOPACK compile-time value", void 0)),
        d: "Need recognition → information search → evaluation of alternatives → purchase decision → post-purchase behavior. Plus the heuristics — ratings, discounts, scarcity — that shortcut it, and the cart abandonment that proves decisions are non-linear."
    },
    {
        tag: "Lectures 19–20",
        t: "The messy middle & the variations",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecapLoopSvg, {}, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
            lineNumber: 764,
            columnNumber: 73
        }, ("TURBOPACK compile-time value", void 0)),
        d: "Consumers loop through exploration and evaluation — the infinity zone — while journeys skip stages (impulse 70% off, direct ketchup runs), reverse (back to search), and circle (loops on new information) until a strong stimulus closes the sale."
    },
    {
        tag: "Lecture 21",
        t: "The framework cycle",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecapCycleSvg, {}, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
            lineNumber: 768,
            columnNumber: 55
        }, ("TURBOPACK compile-time value", void 0)),
        d: "Unfulfilled need → fear or tension → internal drive → behavior → consumption → goal fulfillment and tension reduction. The same engine whether the purchase is a pizza at 11:30 PM or a laptop — involvement only sets the depth."
    }
];
function RecapArcMachine() {
    _s4();
    const p = useStepPlayer(RECAP_TABS.length, 4200);
    const cur = RECAP_TABS[p.i];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                        className: "h-6 w-6",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 779,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#12312e] md:text-2xl",
                        children: "The arc, one machine"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 780,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                        children: "three panels · Lectures 19–21"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 781,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 778,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                role: "group",
                "aria-label": "Recap panels",
                children: RECAP_TABS.map((t, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        onClick: ()=>{
                            p.setI(k);
                        },
                        active: p.i === k,
                        pressed: p.i === k,
                        label: `Show recap panel: ${t.t}`,
                        children: [
                            t.tag.split(" ").pop(),
                            " · ",
                            t.t.split(" ")[0]
                        ]
                    }, t.t, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 785,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 783,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 12
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "mt-5 grid gap-5 lg:grid-cols-[1fr,1.1fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl p-4",
                            style: {
                                background: LAGOON
                            },
                            children: cur.svg
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 793,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.72rem] font-extrabold uppercase tracking-[.16em]",
                                    style: {
                                        color: GOLD
                                    },
                                    children: [
                                        "Panel ",
                                        p.i + 1,
                                        " of 3 · ",
                                        cur.tag
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 795,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xl font-bold",
                                    style: {
                                        color: TEAL
                                    },
                                    children: cur.t
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 796,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.92rem] leading-relaxed text-[#3a4a48]",
                                    children: cur.d
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 797,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 794,
                            columnNumber: 11
                        }, this)
                    ]
                }, p.i, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 791,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 790,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerBtns, {
                        p: p,
                        name: "Recap arc"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 802,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pips, {
                        n: RECAP_TABS.length,
                        i: p.i
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 803,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 801,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                children: [
                    "Recap status — panel ",
                    p.i + 1,
                    "/3: ",
                    cur.tag,
                    " · ",
                    cur.t
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 805,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 777,
        columnNumber: 5
    }, this);
}
_s4(RecapArcMachine, "bUSMC+TeyDZlfSSZdkZJz/3Rqb0=", false, function() {
    return [
        useStepPlayer
    ];
});
_c17 = RecapArcMachine;
function MktgRecap22Section() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "recap22",
        dark: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                dark: true,
                eyebrow: "Principles of Marketing · Lecture 22",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Recap · ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                background: GOLD_GRAD,
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent"
                            },
                            children: "the decision-journey arc"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 816,
                            columnNumber: 26
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Session notes not captured — this lecture's page in the source PDF is blank. What follows is an honest recap of the Lectures 19–21 arc, plus a short self-test drawn only from that arc."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 813,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "warn",
                    dark: true,
                    title: "Session notes not captured — recap of the decision-journey arc",
                    children: [
                        "Lecture 22 arrived as a blank page in the source PDF. Rather than invent notes, this chapter replays the arc the previous three lectures built: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "the five stages"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 822,
                            columnNumber: 46
                        }, this),
                        ", ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "the infinity loop"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 822,
                            columnNumber: 80
                        }, this),
                        ", and",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "the integrated framework cycle"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 823,
                            columnNumber: 11
                        }, this),
                        ". Everything below comes strictly from Lectures 19–21."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 820,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 819,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "1",
                title: "Replay the arc",
                sub: "three panels, one continuous story — from the linear model to the engine underneath it"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 827,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecapArcMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 828,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 828,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                dark: true,
                n: "2",
                title: "Self-test",
                sub: "three questions, drawn only from Lectures 19–21"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 830,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 md:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Recap · Lectures 19–21",
                            q: "In the integrated framework, what does an unfulfilled need create first?",
                            options: [
                                "An impulse purchase",
                                "Fear or tension",
                                "A price comparison",
                                "Post-purchase regret"
                            ],
                            answer: 1,
                            explain: "Unfulfilled need creates fear or tension, which triggers the internal drive, which produces behavior, then consumption, then goal fulfillment and tension reduction."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 833,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 832,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 80,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Recap · Lectures 19–21",
                            q: "The “messy middle” describes…",
                            options: [
                                "a linear five-stage checklist",
                                "an exploration–evaluation loop that a strong stimulus eventually breaks",
                                "the post-purchase warranty window",
                                "a pricing heuristic"
                            ],
                            answer: 1,
                            explain: "Once triggered, consumers continuously explore and evaluate — the infinity zone of carts and wish lists — until a sufficiently strong trigger converts it into an actual purchase."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 842,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 841,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 160,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Recap · Lectures 19–21",
                            q: "Buying a 70%-off item with no prior need or planning skips…",
                            options: [
                                "only the information search",
                                "the purchase decision",
                                "need recognition, information search and evaluation",
                                "nothing — all five stages still run"
                            ],
                            answer: 2,
                            explain: "Impulse purchasing jumps straight from stimulus to purchase — need recognition, information search and evaluation of alternatives are all bypassed."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 851,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 850,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 831,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    dark: true,
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Five stages"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 863,
                                    columnNumber: 13
                                }, void 0),
                                " — recognition, search, evaluation, purchase, post-purchase: the spine of every journey."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "The messy middle"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 864,
                                    columnNumber: 13
                                }, void 0),
                                " — exploration and evaluation loop until a strong stimulus breaks it."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "The framework cycle"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 865,
                                    columnNumber: 13
                                }, void 0),
                                " — need → tension → drive → behavior → consumption → goal fulfillment; tension reduced."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Real journeys ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "skip, reverse and loop"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 866,
                                    columnNumber: 27
                                }, void 0),
                                " — the model is a map, not the territory."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 862,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 861,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 812,
        columnNumber: 5
    }, this);
}
_c18 = MktgRecap22Section;
/* ============================================================
   LECTURE 23 · CHAPTER 1 — motivation-theories
   Freud (iceberg 10/90 + ID/Ego/SuperEgo samosa), Maslow
   (climbable pyramid), Herzberg (two-factor dials + Free Chai).
   ============================================================ */ const MASLOW = [
    {
        t: "Self-actualization",
        d: "Self-development, personal fulfillment and realization — becoming what one is capable of becoming.",
        life: "Later in life, the climb turns to personal meaning."
    },
    {
        t: "Esteem needs",
        d: "Self-esteem, recognition, social status and respect.",
        life: "Mid-career, recognition and status enter the picture."
    },
    {
        t: "Social needs",
        d: "Belonging, love, trust and affection from others.",
        life: "Mid-career, the search widens to people."
    },
    {
        t: "Safety needs",
        d: "Security and protection for oneself and one's family.",
        life: "Young professionals build security through employment."
    },
    {
        t: "Physiological needs",
        d: "Food, water, shelter — basic survival requirements. The hungry person buys food, not luxury.",
        life: "Students focus here first — secured through education."
    }
];
const MASLOW_GEO = [
    {
        pts: "180,20 200,68 160,68"
    },
    {
        pts: "142,74 218,74 226,122 134,122"
    },
    {
        pts: "128,128 232,128 240,176 120,176"
    },
    {
        pts: "114,182 246,182 254,230 106,230"
    },
    {
        pts: "100,236 260,236 268,284 92,284"
    }
];
function MaslowPyramidMachine() {
    _s5();
    const p = useStepPlayer(MASLOW.length, 1700);
    const cur = MASLOW[p.i];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Triangle$3e$__["Triangle"], {
                        className: "h-6 w-6",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 901,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#12312e] md:text-2xl",
                        children: "Maslow's pyramid — climb it"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 902,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                        children: "the lowest unmet need drives behavior"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 903,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 900,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-5 md:grid-cols-[1.15fr,1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl p-4",
                        style: {
                            background: LAGOON
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 360 304",
                                className: "h-auto w-full",
                                role: "img",
                                "aria-label": `Maslow's five-level pyramid, level ${5 - p.i} highlighted: ${cur.t} — ${cur.d}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "mp-act",
                                            x1: "0",
                                            y1: "0",
                                            x2: "1",
                                            y2: "1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "#14b8a6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                    lineNumber: 911,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "#0f766e"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                    lineNumber: 912,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 910,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 909,
                                        columnNumber: 13
                                    }, this),
                                    MASLOW_GEO.map((g, k)=>{
                                        const active = k === 4 - p.i;
                                        const passed = k > 4 - p.i;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].polygon, {
                                            points: g.pts,
                                            fill: active ? "url(#mp-act)" : passed ? "rgba(20,184,166,.34)" : "rgba(233,242,238,.10)",
                                            stroke: active ? GOLD_LITE : passed ? TEAL_BRIGHT : "#3f615c",
                                            strokeWidth: active ? 2.5 : 1.6,
                                            onClick: ()=>{
                                                p.setI(4 - k);
                                            },
                                            style: {
                                                cursor: "pointer"
                                            },
                                            initial: {
                                                opacity: 0,
                                                y: 8
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                delay: 0.1 * k,
                                                duration: 0.45
                                            }
                                        }, k, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 919,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "180",
                                        y: "49",
                                        textAnchor: "middle",
                                        fontSize: "9.5",
                                        fontWeight: "800",
                                        fill: p.i === 0 ? "#d8f3ec" : "#7ea49d",
                                        children: "SELF-ACTUALIZATION"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 934,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "180",
                                        y: "102",
                                        textAnchor: "middle",
                                        fontSize: "9.5",
                                        fontWeight: "800",
                                        fill: p.i === 1 ? "#d8f3ec" : "#7ea49d",
                                        children: "ESTEEM"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 935,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "180",
                                        y: "156",
                                        textAnchor: "middle",
                                        fontSize: "9.5",
                                        fontWeight: "800",
                                        fill: p.i === 2 ? "#d8f3ec" : "#7ea49d",
                                        children: "SOCIAL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 936,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "180",
                                        y: "210",
                                        textAnchor: "middle",
                                        fontSize: "9.5",
                                        fontWeight: "800",
                                        fill: p.i === 3 ? "#d8f3ec" : "#7ea49d",
                                        children: "SAFETY"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 937,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: "180",
                                        y: "264",
                                        textAnchor: "middle",
                                        fontSize: "9.5",
                                        fontWeight: "800",
                                        fill: p.i === 4 ? "#d8f3ec" : "#7ea49d",
                                        children: "PHYSIOLOGICAL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 938,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 907,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-center text-[.72rem] font-bold uppercase tracking-[.14em]",
                                style: {
                                    color: "#9fbcb4"
                                },
                                children: "click a level, or let the climber run"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 940,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 906,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerBtns, {
                                p: p,
                                name: "Maslow pyramid"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 945,
                                columnNumber: 11
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
                                        y: -8
                                    },
                                    transition: {
                                        duration: 0.28
                                    },
                                    className: "mt-4 rounded-2xl p-5",
                                    style: {
                                        background: CREAM,
                                        border: `1px solid ${CREAM_BORDER}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.72rem] font-extrabold uppercase tracking-[.16em]",
                                            style: {
                                                color: GOLD
                                            },
                                            children: [
                                                "Level ",
                                                5 - p.i,
                                                " of 5 · climbing from the base"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 949,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-lg font-bold",
                                            style: {
                                                color: TEAL
                                            },
                                            children: cur.t
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 950,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1.5 text-[.9rem] leading-relaxed",
                                            style: {
                                                color: "#3a4a48"
                                            },
                                            children: cur.d
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 951,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.82rem] font-bold",
                                            style: {
                                                color: GOLD
                                            },
                                            children: [
                                                "Life journey: ",
                                                cur.life
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 952,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, p.i, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 947,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 946,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                                children: [
                                    "Pyramid status — level ",
                                    5 - p.i,
                                    "/5: ",
                                    cur.t,
                                    ". Consumers do not progress until the current level is satisfied."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 955,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 944,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 905,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 899,
        columnNumber: 5
    }, this);
}
_s5(MaslowPyramidMachine, "bUSMC+TeyDZlfSSZdkZJz/3Rqb0=", false, function() {
    return [
        useStepPlayer
    ];
});
_c19 = MaslowPyramidMachine;
function FreudIceberg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl p-4",
        style: {
            background: LAGOON
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 560 320",
            className: "h-auto w-full",
            role: "img",
            "aria-label": "Freud's iceberg: 10% conscious above the waterline, 90% subconscious below — pre-conscious near the surface, unconscious in the depths",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "fi-sea",
                        x1: "0",
                        y1: "0",
                        x2: "0",
                        y2: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#143236"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 969,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#0c2124"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 970,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 968,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 967,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "0",
                    y: "0",
                    width: "560",
                    height: "104",
                    fill: "#0e2629"
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 973,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "0",
                    y: "104",
                    width: "560",
                    height: "216",
                    fill: "url(#fi-sea)"
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 974,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                    x1: "0",
                    y1: "104",
                    x2: "560",
                    y2: "104",
                    stroke: GOLD_LITE,
                    strokeWidth: "2",
                    strokeDasharray: "10 8",
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
                        duration: 1.2
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 975,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "14",
                    y: "26",
                    fontSize: "12",
                    fontWeight: "800",
                    fill: "#d8f3ec",
                    children: "Conscious — thoughts and beliefs you are fully aware of"
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 977,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "14",
                    y: "46",
                    fontSize: "22",
                    fontWeight: "800",
                    fill: GOLD_LITE,
                    children: "10%"
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 978,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "14",
                    y: "298",
                    fontSize: "22",
                    fontWeight: "800",
                    fill: GOLD_LITE,
                    children: "90%"
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 979,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "60",
                    y: "278",
                    fontSize: "12",
                    fontWeight: "800",
                    fill: "#d8f3ec",
                    children: "Subconscious & pre-conscious — where most decisions originate"
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 980,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                    d: "M 300 44 L 352 104 L 470 180 L 430 262 L 340 300 L 246 262 L 214 176 L 258 104 Z",
                    fill: "rgba(233,242,238,.92)",
                    stroke: TEAL_BRIGHT,
                    strokeWidth: "2",
                    initial: {
                        opacity: 0,
                        y: 14
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.8
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 981,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "214",
                    y1: "140",
                    x2: "470",
                    y2: "140",
                    stroke: "#3f615c",
                    strokeWidth: "1.4",
                    strokeDasharray: "5 5"
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 986,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "478",
                    y: "144",
                    fontSize: "10.5",
                    fontWeight: "700",
                    fill: "#9fbcb4",
                    children: "pre-conscious — memories recalled when triggered"
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 987,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "214",
                    y1: "222",
                    x2: "470",
                    y2: "222",
                    stroke: "#3f615c",
                    strokeWidth: "1.4",
                    strokeDasharray: "5 5"
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 988,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                    x: "478",
                    y: "226",
                    fontSize: "10.5",
                    fontWeight: "700",
                    fill: "#9fbcb4",
                    children: "unconscious — deep desires, accessible through dreams"
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 989,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
            lineNumber: 965,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 964,
        columnNumber: 5
    }, this);
}
_c20 = FreudIceberg;
function HerzbergDials() {
    _s6();
    const [hyg, setHyg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [mot, setMot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dissat = hyg ? 18 : 92;
    const sat = mot ? 88 : 12;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                        className: "h-6 w-6",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1003,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#12312e] md:text-2xl",
                        children: "The two-factor dials"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1004,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                        children: "hygiene prevents · motivating propels"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1005,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1002,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl p-5",
                        style: {
                            background: CREAM,
                            border: `1px solid ${CREAM_BORDER}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.8rem] font-extrabold uppercase tracking-[.14em]",
                                style: {
                                    color: ROSE
                                },
                                children: "Hygiene factors — job dissatisfiers"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1009,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[.86rem] leading-relaxed text-[#3a4a48]",
                                children: "Salary & compensation · working conditions · company policies · supervisor relationships"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1010,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 h-4 overflow-hidden rounded-full",
                                style: {
                                    background: "#e8e2d2"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "h-full rounded-full",
                                    style: {
                                        background: ROSE
                                    },
                                    animate: {
                                        width: `${dissat}%`
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 20
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1012,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1011,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[.78rem] font-bold text-[#5f7472]",
                                        children: "Dissatisfaction meter"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1016,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                        onClick: ()=>setHyg((v)=>!v),
                                        active: !hyg,
                                        pressed: !hyg,
                                        label: "Toggle hygiene factors",
                                        children: hyg ? "hygiene present" : "hygiene removed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1017,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1015,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[.8rem] font-bold leading-relaxed",
                                style: {
                                    color: hyg ? TEAL : ROSE
                                },
                                "aria-live": "polite",
                                children: hyg ? "Present → dissatisfaction is prevented. But note: no satisfaction is created — hygiene only defends." : "Removed → salary, conditions, policies gone: dissatisfaction spikes immediately."
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1021,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1008,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl p-5",
                        style: {
                            background: CREAM,
                            border: `1px solid ${CREAM_BORDER}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.8rem] font-extrabold uppercase tracking-[.14em]",
                                style: {
                                    color: TEAL
                                },
                                children: "Motivating factors — job satisfiers"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1028,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[.86rem] leading-relaxed text-[#3a4a48]",
                                children: "Achievement & accomplishment · recognition & appreciation · responsibility · growth & development"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1029,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 h-4 overflow-hidden rounded-full",
                                style: {
                                    background: "#e8e2d2"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "h-full rounded-full",
                                    style: {
                                        background: TEAL_GRAD
                                    },
                                    animate: {
                                        width: `${sat}%`
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 20
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1031,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1030,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[.78rem] font-bold text-[#5f7472]",
                                        children: "Satisfaction meter"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1035,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                        onClick: ()=>setMot((v)=>!v),
                                        active: mot,
                                        pressed: mot,
                                        label: "Toggle motivating factors",
                                        children: mot ? "motivators present" : "motivators absent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1036,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1034,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[.8rem] font-bold leading-relaxed",
                                style: {
                                    color: mot ? TEAL : MUTED
                                },
                                "aria-live": "polite",
                                children: mot ? "Present → genuine satisfaction and motivation appear. This is the only dial that inspires." : "Absent → not dissatisfaction — just neutrality. Nothing to be unhappy about, nothing to be excited by."
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1040,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1027,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1007,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                children: [
                    "Dual approach: reduce dissatisfaction by improving hygiene (",
                    hyg ? "on" : "off",
                    ") · increase satisfaction by enhancing motivators (",
                    mot ? "on" : "off",
                    ")."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1047,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1001,
        columnNumber: 5
    }, this);
}
_s6(HerzbergDials, "KGaeard5YAS8/tZ+6HTUr52kLAA=");
_c21 = HerzbergDials;
function MktgMotivationSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "motivation-theories",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 23",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Three theories of ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GSpan, {
                            children: "motivation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1060,
                            columnNumber: 36
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Freud, Maslow and Herzberg answer the same question — why do we do what we do? — from three directions: the subconscious, the hierarchy of needs, and the two factors of satisfaction."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1058,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: PROSE,
                    children: [
                        "These theories explain ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "what initiates"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1064,
                            columnNumber: 32
                        }, this),
                        " the five-stage decision-making process — need recognition, search, evaluation, purchase, post-purchase. All three remain fundamentally relevant; consumers may not climb the ladder linearly and might skip stages, but knowing ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            children: "which theory is operating"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1066,
                            columnNumber: 78
                        }, this),
                        " helps predict and influence behavior."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1063,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1063,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Freudian theory — the iceberg",
                sub: "behavior is guided by subconscious, not conscious, motivations"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1070,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FreudIceberg, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1071,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1071,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "ID",
                            v: "Basic instincts and immediate desires — wanting that samosa right now."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1074,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Ego",
                            v: "Rationality and reality — eating only the cover of the samosa, balancing desire with health."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1075,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Super Ego",
                            v: "Morality and what is considered correct — refusing the samosa for health reasons."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1076,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1073,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1072,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "insight",
                    title: "Application",
                    children: [
                        "Consumer decisions are motivated by ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "which of the three dominates"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1081,
                            columnNumber: 47
                        }, this),
                        " — instinct, reality, or moral consideration. Only 10% of decision-making comes from the conscious mind; 90% originates from the subconscious and pre-conscious."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1080,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1079,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Maslow's hierarchy — the pyramid",
                sub: "behavior is driven by the lowest unmet need"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1087,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MaslowPyramidMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1088,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1088,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "story",
                    title: "The hungry-person test",
                    children: [
                        "A hungry person would prioritize ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "buying food over purchasing luxury items"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1091,
                            columnNumber: 44
                        }, this),
                        " — the lowest unmet level runs the show. Life journey: students secure physiological and safety needs through education; young professionals build security through employment; mid-career, social and esteem needs dominate; later in life, the pursuit turns to self-actualization and personal meaning."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1090,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1089,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "Herzberg's two-factor theory",
                sub: "hygiene prevents dissatisfaction; motivating factors create satisfaction"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1098,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HerzbergDials, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1099,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1099,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "story",
                    title: "The Free Chai Rule",
                    children: [
                        "Free chai at work will not make employees love their jobs — but ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "removing it creates discontent"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1102,
                            columnNumber: 75
                        }, this),
                        ". Salary, working conditions and basic amenities are ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            children: "expected"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1103,
                            columnNumber: 83
                        }, this),
                        ": they prevent dissatisfaction without inspiring motivation. True motivation comes from meaningful work, recognition, and opportunities for growth."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Freud:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1111,
                                    columnNumber: 13
                                }, void 0),
                                " 90% of decision-making is subconscious — ID (instinct), Ego (reality), Super Ego (morality)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Maslow:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1112,
                                    columnNumber: 13
                                }, void 0),
                                " physiological → safety → social → esteem → self-actualization; the lowest unmet need leads."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Herzberg:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1113,
                                    columnNumber: 13
                                }, void 0),
                                " hygiene factors prevent dissatisfaction; motivating factors create satisfaction — fix both, inspire with the second."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "All three remain relevant; consumers ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "may skip stages"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1114,
                                    columnNumber: 50
                                }, void 0),
                                " and rarely climb in a straight line."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "These theories are the ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "ignition system"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1115,
                                    columnNumber: 36
                                }, void 0),
                                " for the five-stage decision process."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1057,
        columnNumber: 5
    }, this);
}
_c22 = MktgMotivationSection;
const THEORY_MATCH = [
    {
        q: "I hit snooze because part of me wants bed, part of me fears my boss.",
        a: "Freudian",
        why: "ID vs Super Ego conflict — instinct (stay in bed) against fear and morality (the boss). Behavior guided by subconscious forces."
    },
    {
        q: "I cannot focus because hostel Wi-Fi is down.",
        a: "Maslow",
        why: "An unmet basic need blocks everything above it — focus does not return until the lower level is restored."
    },
    {
        q: "Salary is fine, but my work is boring and I nap at my desk.",
        a: "Herzberg",
        why: "Hygiene factor present (salary fine) but motivating factors absent (boring work) — no dissatisfaction, yet no satisfaction either."
    },
    {
        q: "I'm over my ex but cried at a sad ad.",
        a: "Freudian",
        why: "Conscious and unconscious motivations in conflict — the conscious mind says 'over it'; the subconscious hasn't agreed."
    },
    {
        q: "I have food, friends, and a job; now I want to write a novel.",
        a: "Maslow",
        why: "Lower levels satisfied — physiological, social, employment — so the climb continues toward self-actualization."
    },
    {
        q: "I got a raise and my AC fixed, but nobody thanks me; still not excited.",
        a: "Herzberg",
        why: "Hygiene improved (raise, working conditions) but recognition missing — hygiene fixes never create excitement."
    }
];
const MATCH_ORDER = [
    2,
    0,
    5,
    3,
    1,
    4
];
function TheoryMatchMachine() {
    _s7();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [picked, setPicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const cur = THEORY_MATCH[MATCH_ORDER[step]];
    const done = picked !== null;
    const correct = picked === cur.a;
    const pick = (t)=>{
        if (done) return;
        setPicked(t);
        if (t === cur.a) setScore((s)=>s + 1);
    };
    const next = ()=>{
        if (step < MATCH_ORDER.length - 1) {
            setStep((s)=>s + 1);
            setPicked(null);
        }
    };
    const reset = ()=>{
        setStep(0);
        setPicked(null);
        setScore(0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$puzzle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Puzzle$3e$__["Puzzle"], {
                        className: "h-6 w-6",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#12312e] md:text-2xl",
                        children: "Six confessions, three theories"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-auto flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[.78rem] font-extrabold",
                        style: {
                            background: "rgba(169,125,44,.12)",
                            color: GOLD
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                className: "h-4 w-4",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1162,
                                columnNumber: 11
                            }, this),
                            " ",
                            score,
                            " / ",
                            MATCH_ORDER.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pips, {
                    n: MATCH_ORDER.length,
                    i: step
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1165,
                    columnNumber: 29
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1165,
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
                        y: -8
                    },
                    transition: {
                        duration: 0.26
                    },
                    className: "mt-4 rounded-2xl p-5",
                    style: {
                        background: CREAM,
                        border: `1px solid ${CREAM_BORDER}`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                    className: "mt-0.5 h-5 w-5 shrink-0",
                                    style: {
                                        color: GOLD
                                    },
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[1rem] font-bold leading-relaxed",
                                    style: {
                                        color: INK
                                    },
                                    children: [
                                        "“",
                                        cur.q,
                                        "”"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1171,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-[.72rem] font-extrabold uppercase tracking-[.16em]",
                            style: {
                                color: MUTED
                            },
                            children: [
                                "Confession ",
                                step + 1,
                                " of ",
                                MATCH_ORDER.length,
                                " — whose theory explains it?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1173,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex flex-wrap gap-2",
                            children: [
                                "Freudian",
                                "Maslow",
                                "Herzberg"
                            ].map((t)=>{
                                const state = !done ? "idle" : t === cur.a ? "right" : t === picked ? "wrong" : "dim";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                    onClick: ()=>pick(t),
                                    disabled: done,
                                    tone: state === "right" ? "primary" : state === "wrong" ? "ghost" : "ghost",
                                    active: state === "right",
                                    label: `Answer confession ${step + 1} with ${t} theory`,
                                    children: [
                                        t,
                                        state === "wrong" ? " ✗" : state === "right" ? " ✓" : ""
                                    ]
                                }, t, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1180,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1176,
                            columnNumber: 11
                        }, this),
                        done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "mt-4 rounded-xl p-4",
                            style: {
                                background: correct ? "rgba(15,118,110,.08)" : "rgba(159,61,84,.08)",
                                border: `1px solid ${correct ? "rgba(15,118,110,.3)" : "rgba(159,61,84,.3)"}`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.88rem] font-extrabold",
                                    style: {
                                        color: correct ? TEAL : ROSE
                                    },
                                    children: correct ? "Correct — " : `Not quite — the answer is ${cur.a}. `
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1191,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[.88rem] leading-relaxed text-[#3a4a48]",
                                    children: cur.why
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1194,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1189,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, step, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1167,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "primary",
                        onClick: next,
                        disabled: step === MATCH_ORDER.length - 1,
                        label: "Next confession",
                        children: "Next confession"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        onClick: reset,
                        label: "Reset the matching game",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1204,
                                columnNumber: 11
                            }, this),
                            " Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                children: done ? `Confession ${step + 1}/${MATCH_ORDER.length}: you said ${picked} — ${correct ? "correct" : `the theory is ${cur.a}`}. Score ${score}/${MATCH_ORDER.length}.` : `Confession ${step + 1}/${MATCH_ORDER.length} on the table — pick Freudian, Maslow or Herzberg.`
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1156,
        columnNumber: 5
    }, this);
}
_s7(TheoryMatchMachine, "TTyynr8/ErwLNrfK6ZuF0vvHxIM=");
_c23 = TheoryMatchMachine;
function MktgTheoryMatchSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "theory-match",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 23",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Theory ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GSpan, {
                            children: "match"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1221,
                            columnNumber: 25
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Six confessions from the classroom. Each one is a motivation theory in miniature — pick the theory that explains it, and the reasoning behind the match."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TheoryMatchMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1224,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Snooze vs boss"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1227,
                                    columnNumber: 13
                                }, void 0),
                                " and ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "crying at the ad"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1227,
                                    columnNumber: 49
                                }, void 0),
                                " — Freudian: subconscious conflict between ID, Ego and Super Ego."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Dead Wi-Fi"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1228,
                                    columnNumber: 13
                                }, void 0),
                                " and ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "the novel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1228,
                                    columnNumber: 45
                                }, void 0),
                                " — Maslow: unmet lower needs block the climb; satisfied ones release self-actualization."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Boring-but-paid"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1229,
                                    columnNumber: 13
                                }, void 0),
                                " and ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "raise-without-thanks"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1229,
                                    columnNumber: 50
                                }, void 0),
                                " — Herzberg: hygiene is present, motivators are not."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Diagnosing the theory is the first step to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "predicting and influencing"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1230,
                                    columnNumber: 56
                                }, void 0),
                                " the behavior."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1226,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1225,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1218,
        columnNumber: 5
    }, this);
}
_c24 = MktgTheoryMatchSection;
/* ============================================================
   LECTURE 24 · CHAPTER 1 — brand-perception
   What perception is, the illusion cue exercises, and the
   brand-flip switcher: same model, three very different ads.
   ============================================================ */ const PERCEPTION_TRAITS = [
    {
        k: "Selective",
        v: "Consumers only absorb information that aligns with their needs, requirements and background."
    },
    {
        k: "Subjective",
        v: "The same product or image can mean completely different things to different individuals."
    },
    {
        k: "Constructive",
        v: "Given partial information, consumers fill in the gaps from existing knowledge and beliefs."
    },
    {
        k: "Abstract",
        v: "Perception varies significantly from person to person — it is not universally standardized."
    }
];
const BRAND_FLIP = [
    {
        brand: "Nykaa",
        kind: "Cosmetics brand",
        sees: [
            "Makeup",
            "Skincare",
            "Personal care products"
        ],
        accent: TEAL_BRIGHT
    },
    {
        brand: "Fab India",
        kind: "Heritage brand",
        sees: [
            "Clothing",
            "Accessories"
        ],
        accent: GOLD
    },
    {
        brand: "Label Life",
        kind: "Celebrity-founded brand",
        sees: [
            "Fashion",
            "Lifestyle products"
        ],
        accent: "#7c5a1e"
    }
];
function BrandFlipMachine() {
    _s8();
    const [idx, setIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const cur = BRAND_FLIP[idx];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                        className: "h-6 w-6",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#12312e] md:text-2xl",
                        children: "The brand-flip switcher"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                        children: "same model · three different expectations"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1264,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-5 md:grid-cols-[1fr,1.2fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl p-4",
                        style: {
                            background: LAGOON
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 300 260",
                            className: "h-auto w-full",
                            role: "img",
                            "aria-label": `The identical model, shown for ${cur.brand}: the ad never changes — only the brand name does`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "150",
                                    cy: "86",
                                    r: "40",
                                    fill: "rgba(233,242,238,.94)",
                                    stroke: "#3f615c",
                                    strokeWidth: "1.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1270,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 78 244 C 78 172, 118 140, 150 140 C 182 140, 222 172, 222 244 Z",
                                    fill: "rgba(233,242,238,.94)",
                                    stroke: "#3f615c",
                                    strokeWidth: "1.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1271,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "150",
                                    y: "120",
                                    textAnchor: "middle",
                                    fontSize: "10",
                                    fontWeight: "700",
                                    fill: "#9fbcb4",
                                    children: "the model — identical in all three ads"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1273,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                                    x: "0",
                                    y: "0",
                                    width: "300",
                                    height: "260",
                                    rx: "14",
                                    fill: "none",
                                    stroke: cur.accent,
                                    strokeWidth: "3",
                                    strokeDasharray: "10 8",
                                    animate: {
                                        opacity: [
                                            0.4,
                                            1,
                                            0.4
                                        ]
                                    },
                                    transition: {
                                        duration: 2.4,
                                        repeat: Infinity
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1274,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1268,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                role: "group",
                                "aria-label": "Choose the brand",
                                children: BRAND_FLIP.map((b, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                        onClick: ()=>setIdx(k),
                                        active: idx === k,
                                        pressed: idx === k,
                                        label: `Show the ad branded as ${b.brand}`,
                                        children: b.brand
                                    }, b.brand, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1282,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 12
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -10
                                    },
                                    transition: {
                                        duration: 0.3
                                    },
                                    className: "mt-4 rounded-2xl p-5",
                                    style: {
                                        background: CREAM,
                                        border: `1px solid ${CREAM_BORDER}`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.72rem] font-extrabold uppercase tracking-[.16em]",
                                            style: {
                                                color: GOLD
                                            },
                                            children: cur.kind
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 1290,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-2xl font-extrabold",
                                            style: {
                                                color: TEAL
                                            },
                                            children: cur.brand
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 1291,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[.9rem] leading-relaxed text-[#3a4a48]",
                                            children: "The viewer now expects to see:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 1292,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex flex-wrap gap-2",
                                            children: cur.sees.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                                    children: s
                                                }, s, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                    lineNumber: 1294,
                                                    columnNumber: 38
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 1293,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-[.84rem] font-bold leading-relaxed",
                                            style: {
                                                color: GOLD
                                            },
                                            children: "Same model, same pose — the brand name alone re-categorizes the entire ad."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 1296,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, cur.brand, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1288,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1287,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                                children: [
                                    "Brand: ",
                                    cur.brand,
                                    " (",
                                    cur.kind,
                                    ") → perception shifts to ",
                                    cur.sees.join(", ").toLowerCase(),
                                    ". Simply changing the brand name changes the product category the consumer expects."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1301,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1279,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1266,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1260,
        columnNumber: 5
    }, this);
}
_s8(BrandFlipMachine, "uLNXp11TVAHb/Uw+TtMzDY6Cb9o=");
_c25 = BrandFlipMachine;
function DuckRabbitDemo() {
    _s9();
    const [cue, setCue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("duck");
    const rabbit = cue === "rabbit";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-lg font-bold text-[#12312e]",
                        children: "Cue check — duck, or rabbit?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                onClick: ()=>setCue("duck"),
                                active: !rabbit,
                                pressed: !rabbit,
                                label: "Show the duck cue",
                                children: "Duck cue"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1319,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                onClick: ()=>setCue("rabbit"),
                                active: rabbit,
                                pressed: rabbit,
                                label: "Show the rabbit cue with carrots",
                                children: "Rabbit cue · add carrots"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1320,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1318,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl p-4",
                style: {
                    background: LAGOON
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 320 170",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": rabbit ? "The same figure read as a rabbit: long ears up, carrot at the right" : "The same figure read as a duck: beak at the left, no carrot",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "160",
                            cy: "96",
                            rx: "44",
                            ry: "34",
                            fill: "rgba(233,242,238,.94)",
                            stroke: "#3f615c",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1326,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: "M 142 68 C 132 34, 120 26, 116 44 C 112 60, 128 70, 142 68",
                            fill: "rgba(233,242,238,.94)",
                            stroke: rabbit ? TEAL_BRIGHT : "#3f615c",
                            strokeWidth: rabbit ? 3 : 1.5,
                            animate: {
                                opacity: rabbit ? 1 : 0.55
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1327,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: "M 178 68 C 188 34, 200 26, 204 44 C 208 60, 192 70, 178 68",
                            fill: "rgba(233,242,238,.94)",
                            stroke: rabbit ? TEAL_BRIGHT : "#3f615c",
                            strokeWidth: rabbit ? 3 : 1.5,
                            animate: {
                                opacity: rabbit ? 1 : 0.55
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1329,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: "M 118 92 L 84 84 L 84 104 Z",
                            fill: "rgba(233,242,238,.94)",
                            stroke: rabbit ? "#3f615c" : TEAL_BRIGHT,
                            strokeWidth: rabbit ? 1.5 : 3,
                            animate: {
                                opacity: rabbit ? 0.55 : 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1331,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "172",
                            cy: "92",
                            r: "4.5",
                            fill: "#0c2124"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1333,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                            animate: {
                                opacity: rabbit ? 1 : 0,
                                x: rabbit ? 0 : 12
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "236,88 292,98 236,108",
                                    fill: GOLD_LITE,
                                    stroke: "#a97d2c",
                                    strokeWidth: "1.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1335,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 240 86 C 246 74, 256 74, 252 86",
                                    fill: "none",
                                    stroke: TEAL_BRIGHT,
                                    strokeWidth: "2.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1336,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1334,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "160",
                            y: "152",
                            textAnchor: "middle",
                            fontSize: "10.5",
                            fontWeight: "700",
                            fill: "#9fbcb4",
                            children: rabbit ? "carrots in the frame → the lines read as a rabbit" : "no carrot → the beak wins: it's a duck"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1338,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1324,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[.86rem] leading-relaxed text-[#3a4a48]",
                "aria-live": "polite",
                children: rabbit ? "Add elements — like carrots — and the perception flips to rabbit. Marketers do exactly this: packaging, colours, imagery, price cues." : "The duck–rabbit exercise: same lines, different perception. Adding elements (like carrots) dramatically shifts how the object is read."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1343,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1315,
        columnNumber: 5
    }, this);
}
_s9(DuckRabbitDemo, "DcyHcbj6BObnoc5um0lTtAjesl4=");
_c26 = DuckRabbitDemo;
function MktgBrandPerceptionSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "brand-perception",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 24",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Perception & ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GSpan, {
                            children: "the brand flip"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1357,
                            columnNumber: 35
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Perception is the lens through which consumers view products and brands — and it is not built on objective reality. Marketers shape it with cues, illusions and brand associations."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1355,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: PROSE,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Perception"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1361,
                            columnNumber: 9
                        }, this),
                        " is the process of how individuals see and interpret the world around them. It is not based solely on objective reality — it is heavily influenced by the external cues and stimuli marketers provide."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1360,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1360,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 grid gap-3 md:grid-cols-2",
                children: PERCEPTION_TRAITS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: i * 70,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: t.k,
                            v: t.v
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1368,
                            columnNumber: 44
                        }, this)
                    }, t.k, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1368,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1366,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "How marketers influence perception",
                sub: "illusions prove the flip is possible — cues decide what you see"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1372,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-5 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DuckRabbitDemo, {}, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1374,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1374,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 80,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-full flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                                    kind: "story",
                                    title: "The classic illusions",
                                    children: [
                                        "The lecture uses two famous ambiguous images — the ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "young lady / elderly lady"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 1378,
                                            columnNumber: 66
                                        }, this),
                                        " and the",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "duck / rabbit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 1379,
                                            columnNumber: 15
                                        }, this),
                                        ". Same image, two readings: adding elements — like carrots in the rabbit-duck exercise — dramatically shifts how consumers perceive the object."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1377,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-warm p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.8rem] font-extrabold uppercase tracking-[.14em]",
                                            style: {
                                                color: GOLD
                                            },
                                            children: "The marketer's cue kit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 1383,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "mt-2 space-y-1.5 text-[.88rem] leading-relaxed text-[#3a4a48]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Adding visual elements — packaging design, colours, imagery"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                    lineNumber: 1385,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Introducing price points and discounts"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                    lineNumber: 1386,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Creating brand associations through endorsements and advertising"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                    lineNumber: 1387,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: "• Attaching meaning and messaging to physical products"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                    lineNumber: 1388,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 1384,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1382,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1376,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1375,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1373,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "The brand flip",
                sub: "the same model, three brands, three completely different expectations"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1395,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BrandFlipMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1396,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1396,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Perception is ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "selective, subjective, constructive and abstract"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1400,
                                    columnNumber: 27
                                }, void 0),
                                " — never a neutral camera."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Illusions (young lady / elderly lady, duck–rabbit) prove that ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "cues decide what is seen"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1401,
                                    columnNumber: 75
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Nykaa"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1402,
                                    columnNumber: 13
                                }, void 0),
                                " flips the same model to makeup and skincare; ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Fab India"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1402,
                                    columnNumber: 81
                                }, void 0),
                                " to clothing and accessories; ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Label Life"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1402,
                                    columnNumber: 137
                                }, void 0),
                                " to fashion and lifestyle."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The brand name alone re-categorizes the ad — that is the power of ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "brand perception"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1403,
                                    columnNumber: 79
                                }, void 0),
                                " in decision-making."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1399,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1398,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1354,
        columnNumber: 5
    }, this);
}
_c27 = MktgBrandPerceptionSection;
/* ============================================================
   LECTURE 24 · CHAPTER 2 — almonds-price
   The packaging experiment with the price reveal, price as a
   quality cue, and product vs perceptual product categories.
   ============================================================ */ const ALMONDS = [
    {
        id: "A",
        name: "Option A · basic",
        note: "Acceptable, but unremarkable.",
        rating: null,
        price: "₹1,000"
    },
    {
        id: "B",
        name: "Option B · unimpressive",
        note: "Least preferred packaging.",
        rating: 4,
        price: "₹800"
    },
    {
        id: "C",
        name: "Option C · transparent",
        note: "You can see the product — moderately preferred.",
        rating: 6,
        price: "₹550"
    },
    {
        id: "D",
        name: "Option D · premium",
        note: "Most preferred — same almonds, better meaning.",
        rating: 9,
        price: "₹2,700"
    }
];
const D_BENEFITS = [
    "California almonds",
    "Gluten-free",
    "High fiber",
    "Antioxidants",
    "Reusable zip-lock"
];
function AlmondsMachine() {
    _s10();
    const [priced, setPriced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pick, setPick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const reset = ()=>{
        setPriced(false);
        setPick(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                        className: "h-6 w-6",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1431,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#12312e] md:text-2xl",
                        children: "The almonds experiment"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1432,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                        children: "same almonds · four meanings"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1433,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1430,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 max-w-3xl text-[.88rem] leading-relaxed text-[#3a4a48]",
                children: [
                    "Marketing rarely changes the physical product — it changes the ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "meaning attached"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1436,
                        columnNumber: 72
                    }, this),
                    " to it. Rate the packs on looks first; the prices stay hidden until you reveal them."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1435,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
                children: ALMONDS.map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 14
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: i * 0.08,
                            duration: 0.4
                        },
                        className: "rounded-2xl p-4",
                        style: {
                            background: pick === o.id ? "rgba(15,118,110,.08)" : CREAM,
                            border: `1.5px solid ${pick === o.id ? TEAL : CREAM_BORDER}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-8 w-8 items-center justify-center rounded-lg text-[.85rem] font-black text-white",
                                        style: {
                                            background: o.id === "D" ? GOLD_GRAD : TEAL_GRAD
                                        },
                                        children: o.id
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1445,
                                        columnNumber: 15
                                    }, this),
                                    priced ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        initial: {
                                            scale: 0,
                                            rotate: -12
                                        },
                                        animate: {
                                            scale: 1,
                                            rotate: 0
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 16,
                                            delay: i * 0.1
                                        },
                                        className: "rounded-lg px-2 py-1 text-[.8rem] font-extrabold",
                                        style: {
                                            background: GOLD_GRAD,
                                            color: "#fffaf0"
                                        },
                                        children: o.price
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1448,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-lg border border-dashed px-2 py-1 text-[.72rem] font-bold",
                                        style: {
                                            borderColor: CREAM_BORDER,
                                            color: MUTED
                                        },
                                        children: "price hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1453,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1444,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[.92rem] font-bold",
                                style: {
                                    color: INK
                                },
                                children: o.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1456,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[.78rem] leading-relaxed text-[#5f7472]",
                                children: o.note
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1457,
                                columnNumber: 13
                            }, this),
                            o.rating !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2.5 overflow-hidden rounded-full",
                                        style: {
                                            background: "#e8e2d2"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "h-full rounded-full",
                                            style: {
                                                background: o.rating >= 9 ? GOLD_GRAD : TEAL_GRAD
                                            },
                                            initial: {
                                                width: 0
                                            },
                                            whileInView: {
                                                width: `${o.rating * 10}%`
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                duration: 0.9,
                                                delay: 0.3 + i * 0.1
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 1461,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1460,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[.72rem] font-extrabold",
                                        style: {
                                            color: TEAL
                                        },
                                        children: [
                                            "~",
                                            o.rating,
                                            "/10 class rating"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1464,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1459,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 rounded-lg border border-dashed px-2 py-1 text-[.72rem] font-bold",
                                style: {
                                    borderColor: CREAM_BORDER,
                                    color: MUTED
                                },
                                children: "no strong rating — acceptable"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1467,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                onClick: ()=>setPick(o.id),
                                active: pick === o.id,
                                pressed: pick === o.id,
                                label: `Mark ${o.name} as your pick`,
                                className: "mt-3",
                                children: pick === o.id ? "my pick ✓" : "this is my pick"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1471,
                                columnNumber: 13
                            }, this)
                        ]
                    }, o.id, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1441,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1439,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "gold",
                        onClick: ()=>setPriced(true),
                        disabled: priced,
                        label: "Reveal the prices of all four packs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgePercent$3e$__["BadgePercent"], {
                                className: "mr-1 inline h-4 w-4",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1479,
                                columnNumber: 11
                            }, this),
                            " Reveal prices"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1478,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        onClick: reset,
                        label: "Reset the experiment",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1482,
                                columnNumber: 11
                            }, this),
                            " Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1481,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1477,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: priced ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 12
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "mt-4 rounded-2xl p-5",
                    style: {
                        background: "rgba(169,125,44,.08)",
                        border: "1px solid rgba(169,125,44,.3)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[.8rem] font-extrabold uppercase tracking-[.14em]",
                            style: {
                                color: GOLD
                            },
                            children: "What shifted when the prices landed"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1489,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-[.9rem] leading-relaxed text-[#3a4a48]",
                            children: [
                                "A ₹1,000 · B ₹800 · C ₹550 · D ₹2,700. Preferences shifted dramatically — many switched to",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Option C (most economical)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1492,
                                    columnNumber: 15
                                }, this),
                                " or Option B. But consumers with ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "higher purchasing power stayed loyal to Option D"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1492,
                                    columnNumber: 91
                                }, this),
                                ": price itself became a perceptual cue — expensive products are perceived as better quality."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1490,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1487,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1485,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                children: priced ? `Prices revealed: A ₹1,000 · B ₹800 · C ₹550 · D ₹2,700. Most of the class moved to C or B; premium-buyers stayed with D.${pick ? ` Your pick was ${pick}.` : ""}` : `Rating phase — judge the packaging only.${pick ? ` Your pick: Option ${pick}.` : ""} Click "Reveal prices" when ready.`
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1499,
                columnNumber: 7
            }, this),
            priced ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap gap-2",
                children: [
                    D_BENEFITS.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                            tone: "gold",
                            children: b
                        }, b, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1506,
                            columnNumber: 34
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[.78rem] font-bold leading-relaxed",
                        style: {
                            color: MUTED
                        },
                        children: "← the perceived benefits that made D win before the prices showed up"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1507,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1505,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1429,
        columnNumber: 5
    }, this);
}
_s10(AlmondsMachine, "r2Sc5H+pJXdKPMDKRyt8lIMXz7c=");
_c28 = AlmondsMachine;
function MktgAlmondsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "almonds-price",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 24",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "The almonds ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GSpan, {
                            children: "experiment"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1521,
                            columnNumber: 30
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Four packs of essentially the same almonds. The class prefers one — until the prices are revealed. Then meet perceptual product categories: the shelf trick that ends pure price wars."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlmondsMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1524,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1524,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Product categories vs perceptual product categories",
                sub: "how consumers file products by default — and how marketers want them filed"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1526,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: PROSE,
                    children: [
                        "By default, consumers store information as ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "broad product categories"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1528,
                            columnNumber: 52
                        }, this),
                        ' — "toothpaste", "cars", "ketchup". The marketing goal is to create ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "perceptual product categories"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1529,
                            columnNumber: 80
                        }, this),
                        " built on specific needs and benefits. That lets marketers cater to different needs, reduce direct price competition, increase overall market sales, and build loyalty on benefits rather than product type."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1527,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1527,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Toothpaste",
                            v: "Sensitive teeth (Sensodyne) · overall protection (Colgate Total) · freshness (Close-Up) · whitening (Colgate Visible White) — four perceptual categories, one basic category."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1535,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1535,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 70,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Cars",
                            v: "Hatchbacks, sedans, trucks, ambulances, fire trucks — same basic category, very different perceived jobs."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1536,
                            columnNumber: 28
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1536,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 140,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Ketchup",
                            v: "Fresh tomato, premium, chef special — the condiment aisle, split into meanings."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1537,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1537,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1534,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "The Horlicks case",
                sub: "one brand, five perceptual categories — each a life stage"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1540,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5",
                children: [
                    {
                        v: "Growth Plus",
                        d: "children's growth & development"
                    },
                    {
                        v: "Light",
                        d: "health-conscious, reduced sugar"
                    },
                    {
                        v: "Jr.",
                        d: "children aged 8–14"
                    },
                    {
                        v: "Mother's",
                        d: "pregnant women's nutrition"
                    },
                    {
                        v: "Women's 30+",
                        d: "age-specific needs for women 30+"
                    }
                ].map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: i * 60,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.95rem] font-extrabold",
                                    style: {
                                        color: TEAL
                                    },
                                    children: [
                                        "Horlicks ",
                                        h.v
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1551,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[.8rem] leading-relaxed text-[#5f7472]",
                                    children: h.d
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1552,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1550,
                            columnNumber: 13
                        }, this)
                    }, h.v, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1549,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1541,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Consumers chose ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Option D (~9/10)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1560,
                                    columnNumber: 29
                                }, void 0),
                                " for perceived benefits — California almonds, gluten-free, high fiber, antioxidants, reusable zip-lock — not better almonds."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The price reveal (₹1,000 / ₹800 / ₹550 / ₹2,700) ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "reshuffled preferences"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1561,
                                    columnNumber: 62
                                }, void 0),
                                " toward C and B — but premium buyers stayed with D."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Price is a perceptual cue"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1562,
                                    columnNumber: 13
                                }, void 0),
                                ": expensive reads as better quality."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Perceptual product categories (Sensodyne = sensitivity, Colgate Total = 24-7 protection, Close-Up = freshness, Visible White = whitening) ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "end pure price competition"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1563,
                                    columnNumber: 151
                                }, void 0),
                                " — and Horlicks multiplied itself into five life-stage variants."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1559,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1558,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1518,
        columnNumber: 5
    }, this);
}
_c29 = MktgAlmondsSection;
/* ============================================================
   LECTURE 25 · CHAPTER 1 — sensory-stages
   Sensory thresholds (absolute / subliminal / differential)
   and the four perception-formation stages machine.
   ============================================================ */ const THRESHOLDS = [
    {
        k: "Sensory stimuli",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
            className: "h-5 w-5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
            lineNumber: 1577,
            columnNumber: 33
        }, ("TURBOPACK compile-time value", void 0)),
        v: "Any information received through the senses — sight, touch, smell, sound."
    },
    {
        k: "Absolute threshold",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
            className: "h-5 w-5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
            lineNumber: 1578,
            columnNumber: 36
        }, ("TURBOPACK compile-time value", void 0)),
        v: "The minimum level of stimulus needed to capture attention — a lit candle in a dark room."
    },
    {
        k: "Subliminal perception",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cup$2d$soda$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CupSoda$3e$__["CupSoda"], {
            className: "h-5 w-5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
            lineNumber: 1579,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0)),
        v: "Ads that appeal to multiple senses and create emotional connections — a beverage ad with pouring liquid and ice cubes appears more appealing than just a bottle."
    },
    {
        k: "Differential threshold",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wheat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wheat$3e$__["Wheat"], {
            className: "h-5 w-5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
            lineNumber: 1580,
            columnNumber: 40
        }, ("TURBOPACK compile-time value", void 0)),
        v: "The point at which a noticeable difference between two stimuli is detected — adding grains of rice until the weight becomes perceptible."
    }
];
const PSTAGES = [
    {
        t: "Exposure",
        d: "Encountering the advertisement or product — the stimulus first reaches the senses."
    },
    {
        t: "Attention",
        d: "Focusing on specific elements — most of the exposure is filtered out right here."
    },
    {
        t: "Interpretation",
        d: "Making sense of what is perceived — meaning is assigned, biased by experience."
    },
    {
        t: "Organization",
        d: "Structuring the perception in the mind — Gestalt principles do much of this work."
    },
    {
        t: "Outcome",
        d: "A purchase, or the intent to purchase — perception has done its job."
    }
];
function StagesFlowMachine() {
    _s11();
    const p = useStepPlayer(PSTAGES.length, 1600);
    const cur = PSTAGES[p.i];
    const xs = [
        95,
        265,
        435,
        605,
        715
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$footprints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Footprints$3e$__["Footprints"], {
                        className: "h-6 w-6",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1598,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#12312e] md:text-2xl",
                        children: "The four-stage flow machine"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1599,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                        children: "exposure → attention → interpretation → organization → outcome"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1600,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1597,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 rounded-2xl p-3",
                style: {
                    background: LAGOON
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 760 130",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": `Perception formation, stage ${p.i + 1} of 5: ${cur.t} — ${cur.d}`,
                    children: [
                        xs.slice(0, -1).map((x, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: x + 24,
                                y1: "56",
                                x2: xs[k + 1] - (k === 2 ? 38 : 24),
                                y2: "56",
                                stroke: "#3f615c",
                                strokeWidth: "2"
                            }, k, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1606,
                                columnNumber: 13
                            }, this)),
                        PSTAGES.map((s, k)=>{
                            const on = k <= p.i;
                            const isOutcome = k === 4;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: xs[k],
                                        cy: "56",
                                        r: isOutcome ? 26 : 22,
                                        fill: on ? isOutcome ? "#7c5a1e" : "#155e57" : "#122e2b",
                                        stroke: k === p.i ? GOLD_LITE : on ? isOutcome ? GOLD_LITE : TEAL_BRIGHT : "#3f615c",
                                        strokeWidth: k === p.i ? 2.5 : 2
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1613,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: xs[k],
                                        y: "61",
                                        textAnchor: "middle",
                                        fontSize: "12.5",
                                        fontWeight: "800",
                                        fill: on ? "#d8f3ec" : "#7ea49d",
                                        children: isOutcome ? "₹?" : k + 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1615,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: xs[k],
                                        y: "102",
                                        textAnchor: "middle",
                                        fontSize: "10.5",
                                        fontWeight: "700",
                                        fill: k === p.i ? GOLD_LITE : on ? "#cfe9e2" : "#7ea49d",
                                        children: s.t === "Organization" ? "Organi-" : s.t
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1618,
                                        columnNumber: 17
                                    }, this),
                                    s.t === "Organization" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: xs[k],
                                        y: "116",
                                        textAnchor: "middle",
                                        fontSize: "10.5",
                                        fontWeight: "700",
                                        fill: k === p.i ? GOLD_LITE : on ? "#cfe9e2" : "#7ea49d",
                                        children: "zation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1623,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, s.t, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1612,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                            animate: {
                                x: xs[p.i],
                                y: 56
                            },
                            transition: {
                                type: "spring",
                                stiffness: 220,
                                damping: 22
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "0",
                                cy: "0",
                                r: "9",
                                fill: GOLD_LITE,
                                stroke: "#a97d2c",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1630,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1629,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "380",
                            y: "18",
                            textAnchor: "middle",
                            fontSize: "10.5",
                            fontWeight: "700",
                            fill: "#7ea49d",
                            children: "sensory receptors register the stimulus — then four stages build the perception"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1632,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1603,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1602,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerBtns, {
                        p: p,
                        name: "Perception stages"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1636,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pips, {
                        n: PSTAGES.length,
                        i: p.i
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1637,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1635,
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
                        y: -8
                    },
                    transition: {
                        duration: 0.26
                    },
                    className: "mt-4 rounded-2xl p-5",
                    style: {
                        background: CREAM,
                        border: `1px solid ${CREAM_BORDER}`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[.72rem] font-extrabold uppercase tracking-[.16em]",
                            style: {
                                color: GOLD
                            },
                            children: p.i === 4 ? "Outcome" : `Stage ${p.i + 1} of 4`
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1642,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-lg font-bold",
                            style: {
                                color: TEAL
                            },
                            children: cur.t
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1645,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1.5 text-[.9rem] leading-relaxed text-[#3a4a48]",
                            children: cur.d
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1646,
                            columnNumber: 11
                        }, this)
                    ]
                }, p.i, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1640,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1639,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                children: [
                    "Stage machine — step ",
                    p.i + 1,
                    "/5: ",
                    cur.t,
                    ". Final outcome: purchase or intent to purchase."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1649,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1596,
        columnNumber: 5
    }, this);
}
_s11(StagesFlowMachine, "bUSMC+TeyDZlfSSZdkZJz/3Rqb0=", false, function() {
    return [
        useStepPlayer
    ];
});
_c30 = StagesFlowMachine;
function MktgSensorySection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "sensory-stages",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 25",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Sensory thresholds & ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GSpan, {
                            children: "the four stages"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1659,
                            columnNumber: 43
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Perception is what people think in their minds — subjective and changeable. It starts at the senses: absolute, subliminal and differential thresholds decide what gets in; four stages decide what it becomes."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1657,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: PROSE,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: '"First impression is the last impression"'
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1663,
                            columnNumber: 9
                        }, this),
                        " — first impressions significantly shape consumer perception. Marketers can mold it strategically by understanding how the brain processes information, and perception's inherent biases can be leveraged for marketing advantage."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1662,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1662,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 grid gap-3",
                children: THRESHOLDS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: i * 60,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3 rounded-xl px-3.5 py-2.5 transition-colors duration-200",
                            style: {
                                background: "#fffaf1",
                                border: "1px solid rgba(227,194,107,.45)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-0.5 shrink-0",
                                    style: {
                                        color: GOLD
                                    },
                                    children: t.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1673,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[.86rem] leading-relaxed text-[#241a0f]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mr-2 font-mono text-[.72rem] font-bold uppercase tracking-wider",
                                            style: {
                                                color: GOLD
                                            },
                                            children: t.k
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 1675,
                                            columnNumber: 17
                                        }, this),
                                        t.v
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1674,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1671,
                            columnNumber: 13
                        }, this)
                    }, t.k, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1670,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1668,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "From stimulus to purchase intent",
                sub: "exposure → attention → interpretation → organization → outcome"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1683,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StagesFlowMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1684,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1684,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Perception is ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "subjective"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1688,
                                    columnNumber: 27
                                }, void 0),
                                " and can change over time — and it can be strategically molded."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Absolute threshold"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1689,
                                    columnNumber: 13
                                }, void 0),
                                ": the minimum stimulus that captures attention (the lit candle in a dark room)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Subliminal perception"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1690,
                                    columnNumber: 13
                                }, void 0),
                                ": multi-sensory ads — pouring liquid, ice cubes — create emotional connection."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Differential threshold"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1691,
                                    columnNumber: 13
                                }, void 0),
                                ": the just-noticeable difference, grain by grain of rice."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Exposure → attention → interpretation → organization — and the outcome is a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "purchase or the intent to purchase"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1692,
                                    columnNumber: 89
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1687,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1686,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1656,
        columnNumber: 5
    }, this);
}
_c31 = MktgSensorySection;
/* ============================================================
   LECTURE 25 · CHAPTER 2 — gestalt-lab
   Five Gestalt principles, five live demos, tabbed.
   ============================================================ */ function FigureGroundDemo() {
    _s12();
    const [dark, setDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const bg = dark ? "#0c2124" : "#f2efe7";
    const fg = dark ? "#e9f2ee" : "#0f766e";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl p-4",
                style: {
                    background: LAGOON
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 320 158",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": dark ? "iPod-style demo: white device and cord on a black background — figure and ground" : "Inverted: dark device and cord on a light background — swap figure and ground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "1",
                            y: "1",
                            width: "318",
                            height: "156",
                            rx: "14",
                            fill: bg,
                            stroke: "#3f615c",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1713,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 36 116 C 86 40, 128 132, 178 62 S 262 96, 284 38",
                            fill: "none",
                            stroke: fg,
                            strokeWidth: "7",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1714,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "196",
                            y: "86",
                            width: "56",
                            height: "38",
                            rx: "7",
                            fill: fg
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1715,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "224",
                            cy: "105",
                            r: "9",
                            fill: bg
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1716,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1711,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1710,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        onClick: ()=>setDark((v)=>!v),
                        label: "Invert figure and ground",
                        children: "Invert figure & ground"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1720,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.8rem] font-bold",
                        style: {
                            color: MUTED
                        },
                        "aria-live": "polite",
                        children: dark ? "black ground, white figure — the iPod trick" : "light ground, dark figure — same elements, new focal point"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1721,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1719,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1709,
        columnNumber: 5
    }, this);
}
_s12(FigureGroundDemo, "NG2Ym4YHAY11FweyGsO9NeobAPI=");
_c32 = FigureGroundDemo;
function ContinuityDemo() {
    _s13();
    const [go, setGo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl p-4",
                style: {
                    background: LAGOON
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 320 158",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": "Two crossing curved paths; the eye follows the line it was tracing — a teal dot demonstrates the continuity",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 28 132 Q 160 22 292 132",
                            fill: "none",
                            stroke: TEAL_BRIGHT,
                            strokeWidth: "2.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1736,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 28 26 Q 160 138 292 26",
                            fill: "none",
                            stroke: "#5f8f88",
                            strokeWidth: "2",
                            strokeDasharray: "6 6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1737,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            r: "8",
                            fill: GOLD_LITE,
                            stroke: "#a97d2c",
                            strokeWidth: "2",
                            animate: {
                                x: [
                                    28,
                                    97,
                                    160,
                                    223,
                                    292
                                ],
                                y: [
                                    132,
                                    88,
                                    77,
                                    88,
                                    132
                                ]
                            },
                            transition: {
                                duration: 2.2,
                                ease: "easeInOut"
                            }
                        }, go, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1738,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "160",
                            y: "152",
                            textAnchor: "middle",
                            fontSize: "10",
                            fontWeight: "700",
                            fill: "#9fbcb4",
                            children: "two paths cross — the eye keeps tracing the one it started on"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1741,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1734,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1733,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                    onClick: ()=>setGo((v)=>v + 1),
                    label: "Send the dot along the continuous path",
                    children: "Trace the line"
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1745,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1744,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1732,
        columnNumber: 5
    }, this);
}
_s13(ContinuityDemo, "PIiCaz0wLDK+joG59qyO5z1581s=");
_c33 = ContinuityDemo;
function SimilarityDemo() {
    _s14();
    const [uniform, setUniform] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl p-4",
                style: {
                    background: LAGOON
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 320 158",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": uniform ? "Twelve shapes: teal circles in the first columns and champagne squares in the last — similarity groups them" : "The same twelve shapes randomly mixed — grouping breaks down",
                    children: Array.from({
                        length: 12
                    }).map((_, k)=>{
                        const col = k % 4, row = Math.floor(k / 4);
                        const x = 34 + col * 76, y = 30 + row * 44;
                        const isCircle = uniform ? col < 2 : (k * 7 + 3) % 3 !== 0;
                        const tealish = uniform ? col < 2 : (k * 5 + 1) % 2 === 0;
                        return isCircle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: x,
                            cy: y,
                            r: "14",
                            fill: tealish ? TEAL_BRIGHT : GOLD_LITE,
                            opacity: tealish ? 0.9 : 0.95
                        }, k, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1764,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: x - 13,
                            y: y - 13,
                            width: "26",
                            height: "26",
                            rx: "6",
                            fill: tealish ? TEAL_BRIGHT : GOLD_LITE,
                            opacity: tealish ? 0.9 : 0.95
                        }, k, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1766,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1756,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1755,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        onClick: ()=>setUniform((v)=>!v),
                        label: "Toggle similarity grouping",
                        children: uniform ? "Break the pattern" : "Restore the pattern"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1772,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.8rem] font-bold",
                        style: {
                            color: MUTED
                        },
                        "aria-live": "polite",
                        children: uniform ? "similar colour + shape → two clean groups" : "mixed attributes → grouping dissolves"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1773,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1771,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1754,
        columnNumber: 5
    }, this);
}
_s14(SimilarityDemo, "35vYHQZzT482H03vXyVrFUl+Cqc=");
_c34 = SimilarityDemo;
function ProximityDemo() {
    _s15();
    const [grouped, setGrouped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const xs = grouped ? [
        26,
        38,
        50,
        130,
        142,
        154,
        234,
        246,
        258
    ] : [
        26,
        58,
        90,
        122,
        154,
        186,
        218,
        250,
        282
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl p-4",
                style: {
                    background: LAGOON
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 320 120",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": grouped ? "Nine dots in three tight clusters — proximity creates three groups" : "Nine dots evenly spaced — the groups dissolve into one row",
                    children: [
                        xs.map((x, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                                animate: {
                                    x
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 140,
                                    damping: 18
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "0",
                                    cy: "52",
                                    r: "9",
                                    fill: k < 3 ? TEAL_BRIGHT : k < 6 ? GOLD_LITE : TEAL_BRIGHT,
                                    opacity: "0.9"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1793,
                                    columnNumber: 15
                                }, this)
                            }, k, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1792,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "160",
                            y: "104",
                            textAnchor: "middle",
                            fontSize: "10",
                            fontWeight: "700",
                            fill: "#9fbcb4",
                            children: grouped ? "tight clusters read as three groups — same three colours all along" : "even spacing — the grouping dissolves"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1796,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1789,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1788,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        onClick: ()=>setGrouped((v)=>!v),
                        label: "Toggle spacing between dots",
                        children: grouped ? "Spread evenly" : "Cluster again"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1802,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.8rem] font-bold",
                        style: {
                            color: MUTED
                        },
                        "aria-live": "polite",
                        children: "distance decides grouping — regardless of colour"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1803,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1801,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1787,
        columnNumber: 5
    }, this);
}
_s15(ProximityDemo, "YvtFAS223hSdWuYfm/Mac5o+rOE=");
_c35 = ProximityDemo;
function ClosureDemo() {
    _s16();
    const [complete, setComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl p-4",
                style: {
                    background: LAGOON
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 320 158",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": "A dashed, incomplete circle; when completed, the missing arc appears in gold — the mind had already finished it",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 160 26 A 54 54 0 1 1 106 80",
                            fill: "none",
                            stroke: "#8fb8b0",
                            strokeWidth: "4",
                            strokeDasharray: "10 8",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1816,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: "M 160 26 A 54 54 0 1 0 106 80",
                            fill: "none",
                            stroke: GOLD_LITE,
                            strokeWidth: "4",
                            strokeLinecap: "round",
                            initial: false,
                            animate: {
                                pathLength: complete ? 1 : 0,
                                opacity: complete ? 1 : 0.25
                            },
                            transition: {
                                duration: 0.9
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1817,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "160",
                            y: "86",
                            textAnchor: "middle",
                            fontSize: "11",
                            fontWeight: "800",
                            fill: "#cfe9e2",
                            children: "gaps? what gaps?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1819,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "160",
                            y: "140",
                            textAnchor: "middle",
                            fontSize: "10",
                            fontWeight: "700",
                            fill: "#9fbcb4",
                            children: "the brain predicts from past experience — and completes the shape"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1820,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1814,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1813,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        onClick: ()=>setComplete((v)=>!v),
                        label: "Reveal the completed arc",
                        children: complete ? "Re-break it" : "Let the mind finish it"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1824,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.8rem] font-bold",
                        style: {
                            color: MUTED
                        },
                        "aria-live": "polite",
                        children: complete ? "the missing arc was already there — in your head" : "incomplete on canvas, complete in the mind"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1825,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1823,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1812,
        columnNumber: 5
    }, this);
}
_s16(ClosureDemo, "W4L6AnPttCLDhvNcYegEh2PBZDM=");
_c36 = ClosureDemo;
const GESTALT_TABS = [
    {
        t: "Figure & ground",
        d: "The foreground object grabs attention; the background (negative space) provides the contrast that makes it stand out. Clever negative space creates visual impressions without explicitly drawing elements.",
        apps: [
            "Apple's iPod ads — black background, white cords",
            "Sensodyne — white teeth against black",
            "Wine bottle & fork — both in one negative space",
            "Peter and the Wolf cover — the child in silhouette"
        ],
        demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FigureGroundDemo, {}, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
            lineNumber: 1838,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        t: "Continuity",
        d: "Elements arranged in lines or curves are perceived as related; the eye follows the path it was tracing — even when two lines cross. Visual paths guide attention in a specific direction.",
        apps: [
            "Arrow signs on roads",
            "Supermarket placement — shampoos together, soaps together",
            "E-commerce flow: product → price → ratings",
            "Cars24: brands → evaluation → inspection → pricing"
        ],
        demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContinuityDemo, {}, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
            lineNumber: 1844,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        t: "Grouping & similarity",
        d: "Objects with similar characteristics — colour, shape, size, visual style — are perceived as belonging to the same group. Humans group similar items with no instruction at all.",
        apps: [
            "School uniforms — instant group identity",
            "Website menus under category headings",
            "Clothing sections — shirts, t-shirts, jeans, shoes",
            "Promo cards that share one layout"
        ],
        demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimilarityDemo, {}, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
            lineNumber: 1850,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        t: "Proximity",
        d: "Objects close together are perceived as a group; larger gaps read as separation. Distance decides grouping regardless of colour — and spacing creates the frame of reference for comparison.",
        apps: [
            "Notice boards — exam, holiday and sports blocks",
            "Product cards spaced into categories",
            "Shoe display: price + original price + discount together"
        ],
        demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProximityDemo, {}, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
            lineNumber: 1856,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        t: "Closure",
        d: "The brain predicts what it expects to see based on past experience — and mentally completes incomplete information. When predictions don't match reality, it finds the closest matching interpretation.",
        apps: [
            "Mentally completing incomplete information",
            "Engaging ads that let the consumer finish the story",
            "Organized interfaces like Pinterest — navigation you just 'get'"
        ],
        demo: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClosureDemo, {}, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
            lineNumber: 1862,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function GestaltLab() {
    _s17();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const cur = GESTALT_TABS[tab];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                        className: "h-6 w-6",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1872,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#12312e] md:text-2xl",
                        children: "The Gestalt lab — five live demos"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1873,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                        children: "the brain organizes; it doesn't photograph"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1874,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1871,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                role: "tablist",
                "aria-label": "Gestalt principles",
                children: GESTALT_TABS.map((g, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "tab",
                        "aria-selected": tab === k,
                        "aria-label": `Gestalt principle: ${g.t}`,
                        onClick: ()=>setTab(k),
                        className: "rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 hover:-translate-y-0.5",
                        style: tab === k ? {
                            background: TEAL_GRAD,
                            color: "#f0faf7"
                        } : {
                            background: "#fffdf9",
                            color: TEAL,
                            border: `1px solid ${CREAM_BORDER}`
                        },
                        children: [
                            k + 1,
                            ". ",
                            g.t
                        ]
                    }, g.t, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1878,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1876,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 12
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "mt-5 grid gap-5 lg:grid-cols-2",
                    children: [
                        cur.demo,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.72rem] font-extrabold uppercase tracking-[.16em]",
                                    style: {
                                        color: GOLD
                                    },
                                    children: [
                                        "Principle ",
                                        tab + 1,
                                        " of 5 · ",
                                        cur.t
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1891,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.92rem] leading-relaxed text-[#3a4a48]",
                                    children: cur.d
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1892,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-[.72rem] font-extrabold uppercase tracking-[.14em]",
                                    style: {
                                        color: MUTED
                                    },
                                    children: "In marketing"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1893,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 flex flex-wrap gap-2",
                                    children: cur.apps.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                            tone: "gold",
                                            children: a
                                        }, a, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 1895,
                                            columnNumber: 36
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1894,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1890,
                            columnNumber: 11
                        }, this)
                    ]
                }, tab, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1887,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1886,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                children: [
                    "Gestalt lab — demo ",
                    tab + 1,
                    "/5: ",
                    cur.t,
                    ". The brain organizes visual objects into coherent patterns and predicts what it expects to see."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1900,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1870,
        columnNumber: 5
    }, this);
}
_s17(GestaltLab, "axDiLEfgNOglNP+1xq9HAaUfJ9o=");
_c37 = GestaltLab;
function MktgGestaltSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "gestalt-lab",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 25",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "The ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GSpan, {
                            children: "Gestalt lab"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1910,
                            columnNumber: 22
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "The brain does not process images like a camera — it organizes elements into patterns and predicts from past experience. Five principles, five live demos, and the marketing that rides on each."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1908,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: PROSE,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "The Gestalt principle:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1914,
                            columnNumber: 9
                        }, this),
                        " humans organize visual elements into meaningful patterns rather than processing them separately. The brain predicts what it expects to see from past experience — and when predictions don't match reality, it finds the closest matching interpretation. Aesthetic, organized interfaces (like Pinterest) work precisely because of this: navigation becomes easy to understand."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1913,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1913,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GestaltLab, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1919,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1919,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Figure & ground"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1922,
                                    columnNumber: 13
                                }, void 0),
                                " — distinguish object from background to create the focal point (iPod, Sensodyne)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Continuity"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1923,
                                    columnNumber: 13
                                }, void 0),
                                " — guide viewers through sequences and natural decision flows (road arrows, Cars24)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Grouping & similarity"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1924,
                                    columnNumber: 13
                                }, void 0),
                                " — organize related information for easier comprehension (uniforms, menus)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Proximity"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1925,
                                    columnNumber: 13
                                }, void 0),
                                " — create logical relationships and facilitate comparison (notice boards, price displays)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Closure"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1926,
                                    columnNumber: 13
                                }, void 0),
                                " — engage consumers by letting them ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "mentally complete incomplete information"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 1926,
                                    columnNumber: 73
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 1921,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1920,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1907,
        columnNumber: 5
    }, this);
}
_c38 = MktgGestaltSection;
const BUCKET_ITEMS = [
    {
        id: "emp",
        label: "Employer – employee",
        bucket: "util",
        why: "Work for salary — a clean exchange."
    },
    {
        id: "buy",
        label: "Buyer – seller",
        bucket: "util",
        why: "Money for product — the textbook transaction."
    },
    {
        id: "sib",
        label: "Siblings",
        bucket: "util",
        why: "Even family can be transactional — Epicurus counts siblings in the utilitarian bucket."
    },
    {
        id: "spouse",
        label: "Spouses",
        bucket: "util",
        why: "Exchange-based too, per the lecture — harsh, but that is the bucket."
    },
    {
        id: "parent",
        label: "Parent – child",
        bucket: "love",
        why: "The ONLY truly non-transactional relationship — pure affection, no return expected."
    },
    {
        id: "tire",
        label: "Tire ad · father & daughter",
        bucket: "love",
        why: "Marketing engineered this one — safety and protection land the tire in the love bucket."
    }
];
function BucketSorter() {
    _s18();
    const [placed, setPlaced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [log, setLog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Click a relationship — it lands in the bucket Epicurus filed it under (340–270 BC).");
    const reset = ()=>{
        setPlaced({});
        setLog("Cleared. Click a relationship to file it again.");
    };
    const file = (it)=>{
        setPlaced((p)=>({
                ...p,
                [it.id]: it.bucket
            }));
        setLog(`${it.label} → ${it.bucket === "love" ? "LOVE bucket" : "utilitarian bucket"}. ${it.why}`);
    };
    const utilItems = BUCKET_ITEMS.filter((it)=>placed[it.id] === "util");
    const loveItems = BUCKET_ITEMS.filter((it)=>placed[it.id] === "love");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__["HeartHandshake"], {
                        className: "h-6 w-6",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1966,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#12312e] md:text-2xl",
                        children: "The bucket sorter"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1967,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                        children: "Epicurus · 340–270 BC"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1968,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1965,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    BUCKET_ITEMS.filter((it)=>!placed[it.id]).map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                            onClick: ()=>file(it),
                            label: `File "${it.label}" into its bucket`,
                            children: it.label
                        }, it.id, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 1972,
                            columnNumber: 11
                        }, this)),
                    BUCKET_ITEMS.every((it)=>placed[it.id]) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[.82rem] font-bold",
                        style: {
                            color: MUTED
                        },
                        children: "all six filed ✓"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1975,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1970,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-4 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        className: "rounded-2xl p-5",
                        style: {
                            background: CREAM,
                            border: `1px solid ${CREAM_BORDER}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.8rem] font-extrabold uppercase tracking-[.14em]",
                                style: {
                                    color: MUTED
                                },
                                children: "Utilitarian / transactional bucket"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1980,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[.8rem] leading-relaxed text-[#5f7472]",
                                children: "You give something, I give something in return."
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1981,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: utilItems.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                layout: true,
                                                initial: {
                                                    opacity: 0,
                                                    scale: 0.7
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    scale: 1
                                                },
                                                exit: {
                                                    opacity: 0
                                                },
                                                className: "rounded-lg border px-2.5 py-1 text-[.74rem] font-bold",
                                                style: {
                                                    background: "#fff",
                                                    borderColor: CREAM_BORDER,
                                                    color: INK
                                                },
                                                children: it.label
                                            }, it.id, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                lineNumber: 1985,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1983,
                                        columnNumber: 13
                                    }, this),
                                    utilItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[.76rem] font-bold text-[#9aa5a0]",
                                        children: "empty — file something"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1992,
                                        columnNumber: 39
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1982,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1979,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        className: "rounded-2xl p-5",
                        style: {
                            background: "rgba(15,118,110,.07)",
                            border: "1px solid rgba(15,118,110,.3)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.8rem] font-extrabold uppercase tracking-[.14em]",
                                style: {
                                    color: TEAL
                                },
                                children: "Love bucket"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1996,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[.8rem] leading-relaxed text-[#5f7472]",
                                children: "Pure affection — no expectation of return."
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1997,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: loveItems.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                layout: true,
                                                initial: {
                                                    opacity: 0,
                                                    scale: 0.7
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    scale: 1
                                                },
                                                exit: {
                                                    opacity: 0
                                                },
                                                className: "rounded-lg px-2.5 py-1 text-[.74rem] font-bold",
                                                style: {
                                                    background: TEAL_GRAD,
                                                    color: "#f0faf7"
                                                },
                                                children: it.label
                                            }, it.id, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                lineNumber: 2001,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 1999,
                                        columnNumber: 13
                                    }, this),
                                    loveItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[.76rem] font-bold text-[#9aa5a0]",
                                        children: "empty — who belongs here?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2008,
                                        columnNumber: 39
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 1998,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 1995,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 1978,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                    onClick: reset,
                    label: "Reset the bucket sorter",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                            className: "mr-1 inline h-3.5 w-3.5",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2013,
                            columnNumber: 63
                        }, this),
                        " Reset"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2013,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2012,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                children: log
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2015,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 1964,
        columnNumber: 5
    }, this);
}
_s18(BucketSorter, "zCxfmtTGKZLCMM1SnEqu7Crsf9o=");
_c39 = BucketSorter;
function BorgesBars() {
    const rows = [
        {
            label: "Antioxidants",
            mult: "2×",
            w: 66
        },
        {
            label: "Vitamin C",
            mult: "4×",
            w: 92
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                        className: "h-5 w-5",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2028,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-lg font-bold text-[#12312e]",
                        children: "The attribute war — Borges Olive Leaf Infusion Tea vs green tea"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2029,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2027,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-3",
                children: rows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[.84rem] font-bold",
                                        style: {
                                            color: INK
                                        },
                                        children: r.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2035,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[.84rem] font-extrabold",
                                        style: {
                                            color: GOLD
                                        },
                                        children: [
                                            "vs green tea: ",
                                            r.mult
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2036,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2034,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 h-3 overflow-hidden rounded-full",
                                style: {
                                    background: "#e8e2d2"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "h-full rounded-full",
                                    style: {
                                        background: GOLD_GRAD
                                    },
                                    initial: {
                                        width: 0
                                    },
                                    whileInView: {
                                        width: `${r.w}%`
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.9
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2039,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2038,
                                columnNumber: 13
                            }, this)
                        ]
                    }, r.label, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2033,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2031,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                        children: "oleuropin — helps regulate blood pressure"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2046,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                        children: "zero caffeine"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2047,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                        children: "zero added flavors"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2048,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2045,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[.84rem] leading-relaxed text-[#3a4a48]",
                children: [
                    "These attributes were ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "perception-driven"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2051,
                        columnNumber: 31
                    }, this),
                    " — organizations have far more flexibility manipulating attributes than the core product itself, and that is what positioned Borges as superior."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2050,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 2026,
        columnNumber: 5
    }, this);
}
_c40 = BorgesBars;
function MktgBucketsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "attitude-buckets",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 26",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Attitude & ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GSpan, {
                            children: "the two buckets"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2063,
                            columnNumber: 33
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Attitude is the bridge between perception and decision — Attitude = f(Object, Attributes). And brands that connect attributes to human traits escape the transactional bucket entirely."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2061,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: PROSE,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Motivation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2067,
                            columnNumber: 9
                        }, this),
                        " drives individuals to act on needs and desires; ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "perception"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2067,
                            columnNumber: 85
                        }, this),
                        ' is how consumers interpret and categorize products — which differs from objective reality. Consumers naturally file products into broad categories ("cars", "toothpaste"), but organizations win by shaping the perceptual categories: ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Sensodyne"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2070,
                            columnNumber: 32
                        }, this),
                        " = sensitivity relief, ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Colgate Total"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2070,
                            columnNumber: 81
                        }, this),
                        " = 24/7 protection, ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Close-Up"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2071,
                            columnNumber: 21
                        }, this),
                        " = fresh breath — and Horlicks splitting into variants for children, adults and diabetics."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2066,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2066,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Attitude as the bridge",
                sub: "perception ⇄ attitude, formed from past + fresh experiences"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2075,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-5 lg:grid-cols-[1.2fr,1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center justify-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-xl px-4 py-2 text-[.9rem] font-extrabold",
                                            style: {
                                                background: "rgba(15,118,110,.08)",
                                                color: TEAL
                                            },
                                            children: "Perception"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2080,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 90 34",
                                            className: "h-8 w-20",
                                            "aria-hidden": true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M 4 12 H 74",
                                                    stroke: TEAL,
                                                    strokeWidth: "2.2",
                                                    fill: "none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                    lineNumber: 2082,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M 68 6 L 78 12 L 68 18",
                                                    stroke: TEAL,
                                                    strokeWidth: "2.2",
                                                    fill: "none",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                    lineNumber: 2083,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M 86 22 H 16",
                                                    stroke: GOLD,
                                                    strokeWidth: "2.2",
                                                    fill: "none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                    lineNumber: 2084,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M 22 16 L 12 22 L 22 28",
                                                    stroke: GOLD,
                                                    strokeWidth: "2.2",
                                                    fill: "none",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                    lineNumber: 2085,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2081,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-xl px-4 py-2 text-[.9rem] font-extrabold",
                                            style: {
                                                background: "rgba(169,125,44,.1)",
                                                color: GOLD
                                            },
                                            children: "Attitude"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2087,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2079,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-center font-mono text-[1.05rem] font-extrabold",
                                    style: {
                                        color: INK
                                    },
                                    children: "Attitude = f(Object, Attributes)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2089,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[.88rem] leading-relaxed text-[#3a4a48]",
                                    children: [
                                        "A favorable or unfavorable response toward something. The relationship is ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "bidirectional"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2093,
                                            columnNumber: 89
                                        }, this),
                                        " — perception leads to attitude, and attitude influences perception. Formation depends on",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "past experiences and fresh experiences"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2095,
                                            columnNumber: 15
                                        }, this),
                                        ". The decision is never based solely on the product itself, but on the ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "product's attributes as perceived by the consumer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2096,
                                            columnNumber: 42
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2092,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2078,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2077,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 80,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BorgesBars, {}, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2100,
                            columnNumber: 28
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2076,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Humanizing brands — the two buckets",
                sub: "Epicurus, 340–270 BC: almost everything is transactional. Almost."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BucketSorter, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2104,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "story",
                    title: "Case study — why father-daughter in a tire ad?",
                    children: [
                        "Because a tire is the most utilitarian product imaginable — so the ad humanizes it. Daughters feel",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "protected and safe"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2109,
                            columnNumber: 11
                        }, this),
                        " with their fathers; that emotional connection (safety, protection) maps to tire quality — a quality tire provides vehicle stability and safety. The tire becomes associated with",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "protecting loved ones"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2111,
                            columnNumber: 11
                        }, this),
                        ", not just a transactional purchase — the brand lands in the",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "love bucket"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2112,
                            columnNumber: 11
                        }, this),
                        ", and loyalty follows."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Attitude = f(Object, Attributes)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2118,
                                    columnNumber: 13
                                }, void 0),
                                " — bidirectional with perception, built from past + fresh experiences."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Attributes are the marketer's flexible lever — the ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Borges"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2119,
                                    columnNumber: 69
                                }, void 0),
                                " tea won on 2× antioxidants, 4× vitamin C, oleuropin, zero caffeine."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Epicurus: everything is transactional except ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "parent → child"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2120,
                                    columnNumber: 58
                                }, void 0),
                                " — the only true love-bucket relationship."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Humanized brands shift the relationship from ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "transactional to relational"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2121,
                                    columnNumber: 58
                                }, void 0),
                                " — the tire ad's father-daughter safety story is the template."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 2060,
        columnNumber: 5
    }, this);
}
_c41 = MktgBucketsSection;
/* ============================================================
   LECTURE 26 · CHAPTER 2 — retention-acquisition
   CAC, churn, and the 1/7–1/10 retention rule — the
   cost-comparison machine.
   ============================================================ */ function RetentionMachine() {
    _s19();
    const [ratio, setRatio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(7);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                        className: "h-6 w-6",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#12312e] md:text-2xl",
                        children: "The cost-comparison machine"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                        children: "acquire 1 vs retain 1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-5 md:grid-cols-[1.3fr,1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl p-5",
                                style: {
                                    background: CREAM,
                                    border: `1px solid ${CREAM_BORDER}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[.84rem] font-extrabold uppercase tracking-[.12em]",
                                                style: {
                                                    color: ROSE
                                                },
                                                children: "Acquire a new customer — CAC"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                lineNumber: 2147,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[.9rem] font-extrabold",
                                                style: {
                                                    color: ROSE
                                                },
                                                children: "10 units"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                lineNumber: 2148,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1.5 h-5 overflow-hidden rounded-full",
                                        style: {
                                            background: "#e8e2d2"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "h-full rounded-full",
                                            style: {
                                                background: `linear-gradient(135deg,#c05a74,${ROSE})`
                                            },
                                            initial: {
                                                width: 0
                                            },
                                            whileInView: {
                                                width: "100%"
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                duration: 0.8
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2151,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-[.78rem] leading-relaxed text-[#5f7472]",
                                        children: [
                                            "High investment — especially in an ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "overcrowded market"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                lineNumber: 2154,
                                                columnNumber: 115
                                            }, this),
                                            " where every competitor is bidding for attention."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex items-baseline justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[.84rem] font-extrabold uppercase tracking-[.12em]",
                                                style: {
                                                    color: TEAL
                                                },
                                                children: "Retain an existing one"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                lineNumber: 2156,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                initial: {
                                                    opacity: 0,
                                                    y: -6
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                className: "text-[.9rem] font-extrabold",
                                                style: {
                                                    color: TEAL
                                                },
                                                children: [
                                                    "1 unit — 1/",
                                                    ratio,
                                                    "th of CAC"
                                                ]
                                            }, ratio, true, {
                                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                lineNumber: 2157,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1.5 h-5 overflow-hidden rounded-full",
                                        style: {
                                            background: "#e8e2d2"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "h-full rounded-full",
                                            style: {
                                                background: TEAL_GRAD
                                            },
                                            initial: {
                                                width: 0
                                            },
                                            animate: {
                                                width: `${100 / ratio}%`
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 120,
                                                damping: 20
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2162,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-[.78rem] leading-relaxed text-[#5f7472]",
                                        children: [
                                            "Retention costs approximately ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "one-seventh to one-tenth"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                lineNumber: 2165,
                                                columnNumber: 110
                                            }, this),
                                            " of acquisition costs."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2165,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2145,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                        onClick: ()=>setRatio(7),
                                        active: ratio === 7,
                                        pressed: ratio === 7,
                                        label: "Show retention at one-seventh of CAC",
                                        children: "1/7th"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                        onClick: ()=>setRatio(10),
                                        active: ratio === 10,
                                        pressed: ratio === 10,
                                        label: "Show retention at one-tenth of CAC",
                                        children: "1/10th"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2169,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl p-5",
                        style: {
                            background: LAGOON
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "h-5 w-5",
                                        style: {
                                            color: GOLD_LITE
                                        },
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.85rem] font-extrabold",
                                        style: {
                                            color: GOLD_LITE
                                        },
                                        children: "Churn — the leak in the bucket"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[.85rem] leading-relaxed text-[#cfe9e2]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: "#e9f2ee"
                                        },
                                        children: "Customer churn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2178,
                                        columnNumber: 13
                                    }, this),
                                    ": consumers leave for competitors despite every rupee of acquisition effort spent on them. Every churned customer must be re-acquired — at 7–10× the cost of simply keeping them."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-[.85rem] leading-relaxed text-[#cfe9e2]",
                                children: [
                                    "Focus on retention and the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        style: {
                                            color: GOLD_LITE
                                        },
                                        children: "ROI beats constant acquisition"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2183,
                                        columnNumber: 40
                                    }, this),
                                    " — the same effort compounds instead of leaking."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                children: [
                    "Comparison — acquire: 10 units · retain: ",
                    (10 / ratio).toFixed(1),
                    " unit",
                    ratio === 7 ? "s" : "",
                    " (1/",
                    ratio,
                    "th of CAC). Switch the dial to see the bar move; either way, retention wins."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2188,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 2137,
        columnNumber: 5
    }, this);
}
_s19(RetentionMachine, "kHr53cRmkMbpYf4jBvASvBuboQk=");
_c42 = RetentionMachine;
function MktgRetentionSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "retention-acquisition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 26",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Retention vs ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GSpan, {
                            children: "acquisition"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2201,
                            columnNumber: 31
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Acquisition is expensive and the market is overcrowded; churn keeps draining the funnel. Retention costs roughly a seventh to a tenth as much — the ROI case is not subtle."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RetentionMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2204,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "insight",
                    title: "The takeaway that outlives the spreadsheet",
                    children: [
                        "Organizations succeed by understanding that ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "consumers don't purchase products — they purchase solutions to their needs and emotional satisfaction"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2207,
                            columnNumber: 55
                        }, this),
                        ". Recognize perceptual product categories, leverage attributes, humanize the brand — and retention follows."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2206,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "CAC is high"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2214,
                                    columnNumber: 13
                                }, void 0),
                                " in an overcrowded market — attention is the scarce resource."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Retention costs about ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "1/7th to 1/10th of acquisition"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2215,
                                    columnNumber: 35
                                }, void 0),
                                " — the cheapest growth lever available."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Churn"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2216,
                                    columnNumber: 13
                                }, void 0),
                                " — customers leaving for competitors — is the major organizational challenge."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Focus on retention: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "better ROI than constant acquisition"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2217,
                                    columnNumber: 33
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Consumers purchase ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "solutions and emotional satisfaction, not products"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2218,
                                    columnNumber: 32
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2213,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 2198,
        columnNumber: 5
    }, this);
}
_c43 = MktgRetentionSection;
/* ============================================================
   LECTURE 27 — abc-humanization
   The Attribute → Benefit → Characteristic chain machine,
   CEAT & Asian Paints, the Hutch pug, and the
   motivation → perception → attitude → decision sequence.
   ============================================================ */ const ABC_CASES = [
    {
        brand: "CEAT",
        nodes: [
            {
                t: "Attribute",
                d: "Groove technology in the tire — the physical feature on the spec sheet."
            },
            {
                t: "Benefit",
                d: "Anti-skid properties — better traction, control and stability on the road."
            },
            {
                t: "Characteristic",
                d: "In the classic ad, a father's quick reaction and car control during an emergency reinforce safety and protection for loved ones. CEAT becomes family safety — the love bucket, not the utilitarian one."
            }
        ]
    },
    {
        brand: "Asian Paints",
        nodes: [
            {
                t: "Attribute",
                d: "Paint colours and finishes — thousands of shades on the shelf."
            },
            {
                t: "Benefit",
                d: "Personalized spaces that enable self-expression and create unique environments."
            },
            {
                t: "Characteristic",
                d: "\u201CHar Ghar Kuch Kehta Hai\u201D — belongingness, self-expression, memories and identity. Relatable families instead of celebrities let consumers see themselves in the stories."
            }
        ]
    }
];
function AbcChainMachine() {
    _s20();
    const [caseIdx, setCaseIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const p = useStepPlayer(3, 1700);
    const cur = ABC_CASES[caseIdx].nodes[p.i];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                        className: "h-6 w-6",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#12312e] md:text-2xl",
                        children: "The A → B → C chain machine"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-auto flex gap-2",
                        children: ABC_CASES.map((c, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                onClick: ()=>{
                                    setCaseIdx(k);
                                    p.reset();
                                },
                                active: caseIdx === k,
                                pressed: caseIdx === k,
                                label: `Run the ABC chain for ${c.brand}`,
                                children: c.brand
                            }, c.brand, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2262,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 rounded-2xl p-4",
                style: {
                    background: LAGOON
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 760 150",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": `${ABC_CASES[caseIdx].brand} ABC chain, step ${p.i + 1} of 3: ${cur.t} — ${cur.d}`,
                    children: [
                        [
                            120,
                            380,
                            640
                        ].map((x, k)=>{
                            const on = k <= p.i;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    k < 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: x + 64,
                                        y1: "66",
                                        x2: [
                                            380,
                                            640
                                        ][k] - 70,
                                        y2: "66",
                                        stroke: "#3f615c",
                                        strokeWidth: "2.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2275,
                                        columnNumber: 26
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                                        x: x - 64,
                                        y: "30",
                                        width: "128",
                                        height: "72",
                                        rx: "16",
                                        fill: on ? "#155e57" : "#122e2b",
                                        stroke: k === p.i ? GOLD_LITE : on ? TEAL_BRIGHT : "#3f615c",
                                        strokeWidth: k === p.i ? 3 : 2,
                                        animate: {
                                            scale: k === p.i ? 1.06 : 1
                                        },
                                        style: {
                                            originX: "50%",
                                            originY: "50%"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2276,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: x,
                                        y: "60",
                                        textAnchor: "middle",
                                        fontSize: "11",
                                        fontWeight: "800",
                                        fill: on ? GOLD_LITE : "#7ea49d",
                                        children: "ABC"[k]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2280,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: x,
                                        y: "82",
                                        textAnchor: "middle",
                                        fontSize: "12.5",
                                        fontWeight: "800",
                                        fill: on ? "#d8f3ec" : "#7ea49d",
                                        children: [
                                            "Attribute",
                                            "Benefit",
                                            "Characteristic"
                                        ][k]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2281,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                                        animate: {
                                            x: [
                                                120,
                                                380,
                                                640
                                            ][p.i],
                                            y: 66
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 220,
                                            damping: 22
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "0",
                                            cy: "0",
                                            r: "8",
                                            fill: GOLD_LITE,
                                            stroke: "#a97d2c",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2285,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2284,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, k, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2274,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "380",
                            y: "134",
                            textAnchor: "middle",
                            fontSize: "10.5",
                            fontWeight: "700",
                            fill: "#7ea49d",
                            children: "connect all three and the brand stops selling a product — it sells emotions and values"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2290,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2269,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerBtns, {
                        p: p,
                        name: `ABC chain (${ABC_CASES[caseIdx].brand})`
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pips, {
                        n: 3,
                        i: p.i
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2297,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2295,
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
                        y: -8
                    },
                    transition: {
                        duration: 0.26
                    },
                    className: "mt-4 rounded-2xl p-5",
                    style: {
                        background: CREAM,
                        border: `1px solid ${CREAM_BORDER}`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[.72rem] font-extrabold uppercase tracking-[.16em]",
                            style: {
                                color: GOLD
                            },
                            children: [
                                ABC_CASES[caseIdx].brand,
                                " · step ",
                                p.i + 1,
                                " of 3"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2302,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-lg font-bold",
                            style: {
                                color: TEAL
                            },
                            children: cur.t
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2305,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1.5 text-[.9rem] leading-relaxed text-[#3a4a48]",
                            children: cur.d
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2306,
                            columnNumber: 11
                        }, this)
                    ]
                }, `${caseIdx}-${p.i}`, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2300,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                children: [
                    "Chain status — ",
                    ABC_CASES[caseIdx].brand,
                    ": ",
                    [
                        "A",
                        "B",
                        "C"
                    ][p.i],
                    " · ",
                    cur.t
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2309,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 2256,
        columnNumber: 5
    }, this);
}
_s20(AbcChainMachine, "FvsSxIHxI1uKV2xcYr6noTQinf0=", false, function() {
    return [
        useStepPlayer
    ];
});
_c44 = AbcChainMachine;
function MktgAbcSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "abc-humanization",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 27",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "The ABC model of ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GSpan, {
                            children: "brand humanization"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2319,
                            columnNumber: 35
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Attribute → Benefit → Characteristic: physical features, the advantages they buy, and the human values they carry. CEAT, Asian Paints and a pug show how brands stop selling products and start selling meaning."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Walk the chain",
                sub: "two brands, the same three steps from spec sheet to human value"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AbcChainMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2323,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Love bucket vs utilitarian bucket",
                sub: "why the humanized approach compounds loyalty"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-3 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                    children: "utilitarian — transactional"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2329,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-3 space-y-1.5 text-[.88rem] leading-relaxed text-[#3a4a48]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Focuses on product quality, performance, value for money"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2331,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Every competitor can offer similar features"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2332,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Easily replaceable — subject to consumer churn"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2333,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2330,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2328,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2327,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 80,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm h-full p-5",
                            style: {
                                borderColor: "rgba(15,118,110,.4)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TChip, {
                                    children: "love bucket — relational"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2339,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-3 space-y-1.5 text-[.88rem] leading-relaxed text-[#3a4a48]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Incorporates emotional and human elements"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2341,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Creates deeper consumer connections"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2342,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Positive word-of-mouth and favorable attitudes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2343,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Reduces churn — loyalty beyond functional benefits"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2344,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2340,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2338,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2337,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2326,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "story",
                    title: "Anthropomorphism — the Hutch pug",
                    children: [
                        "Humanizing a brand — ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "anthropomorphism"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2352,
                            columnNumber: 32
                        }, this),
                        " — means relating human-like traits to products and using living elements (humans, animals) to create emotional connection. The ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Hutch pug"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2353,
                            columnNumber: 87
                        }, this),
                        " ",
                        'advertisement outperformed many celebrity-endorsed campaigns: the dog followed the boy everywhere, and the network "followed you too" — no superstar required.'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2351,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2350,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "The full sequence",
                sub: "where humanization plugs into consumer behavior"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepsFlow"], {
                    steps: [
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: TEAL
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2363,
                                columnNumber: 21
                            }, void 0),
                            label: "Motivation",
                            sub: "the drive that initiates the purchase decision"
                        },
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: TEAL
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2364,
                                columnNumber: 21
                            }, void 0),
                            label: "Perception",
                            sub: "interpretation of product attributes and features"
                        },
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: TEAL
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2365,
                                columnNumber: 21
                            }, void 0),
                            label: "Attitude",
                            sub: "favorable / unfavorable — f(object, attributes)"
                        },
                        {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: TEAL
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2366,
                                columnNumber: 21
                            }, void 0),
                            label: "Decision",
                            sub: "the final choice, influenced by attitude toward the brand"
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2361,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2360,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "A → B → C"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2373,
                                    columnNumber: 13
                                }, void 0),
                                ": attributes (tire grooves, paint colors) → benefits (anti-skid traction, personalized spaces) → characteristics (safety, belongingness, self-expression)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "CEAT"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2374,
                                    columnNumber: 13
                                }, void 0),
                                ": groove tech → anti-skid → a father protecting his family → the love bucket."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Asian Paints"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2375,
                                    columnNumber: 13
                                }, void 0),
                                ': "Har Ghar Kuch Kehta Hai" — belongingness, self-expression, memories, identity; relatable families, not celebrities.'
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Anthropomorphism"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2376,
                                    columnNumber: 13
                                }, void 0),
                                " works: Hutch's pug beat celebrity campaigns."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Humanization influences ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "motivation → perception → attitude → decision"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2377,
                                    columnNumber: 37
                                }, void 0),
                                " — and builds long-term preference."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2372,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2371,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 2316,
        columnNumber: 5
    }, this);
}
_c45 = MktgAbcSection;
/* ============================================================
   LECTURE 28 — bias-lab
   Conscious vs unconscious biases, then four live demos:
   anchoring · bandwagon · scarcity · endowment.
   ============================================================ */ const PHONES = [
    "Phone A",
    "Phone B",
    "Phone C"
];
function AnchorCard() {
    _s21();
    const dims = [
        "Price",
        "Ratings",
        "Delivery"
    ];
    const [anchor, setAnchor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$anchor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Anchor$3e$__["Anchor"], {
                        className: "h-5 w-5",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2398,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-lg font-bold text-[#12312e]",
                        children: "Anchoring"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2399,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2397,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[.85rem] leading-relaxed text-[#3a4a48]",
                children: [
                    "Attention anchors on one element — and everything else is excluded. In smartphone comparisons consumers anchor on ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "price, ratings or delivery speed"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2403,
                        columnNumber: 12
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2401,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap gap-2",
                children: [
                    dims.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                            onClick: ()=>setAnchor(d),
                            active: anchor === d,
                            pressed: anchor === d,
                            label: `Anchor the comparison on ${d}`,
                            children: d
                        }, d, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2407,
                            columnNumber: 11
                        }, this)),
                    anchor ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        onClick: ()=>setAnchor(null),
                        label: "Clear the anchor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                            className: "mr-1 inline h-3.5 w-3.5",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2412,
                            columnNumber: 74
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2412,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2405,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid grid-cols-3 gap-2",
                children: PHONES.map((ph)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl p-2.5",
                        style: {
                            background: CREAM,
                            border: `1px solid ${CREAM_BORDER}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.72rem] font-extrabold",
                                style: {
                                    color: INK
                                },
                                children: ph
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2418,
                                columnNumber: 13
                            }, this),
                            dims.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    animate: {
                                        opacity: anchor === null ? 1 : anchor === d ? 1 : 0.18
                                    },
                                    className: "mt-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.62rem] font-bold uppercase tracking-wide",
                                            style: {
                                                color: anchor === d ? TEAL : MUTED
                                            },
                                            children: d
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2421,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-0.5 h-1.5 overflow-hidden rounded-full",
                                            style: {
                                                background: "#e8e2d2"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full rounded-full",
                                                style: {
                                                    width: `${d === "Price" ? 60 + ph.length * 6 : d === "Ratings" ? 74 + ph.length * 2 : 48 + ph.length * 7}%`,
                                                    background: anchor === d ? TEAL_GRAD : "#b9c6c1"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                lineNumber: 2423,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2422,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, d, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2420,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, ph, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2417,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2415,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                children: anchor ? `Anchored on ${anchor} — the other information is excluded, and the decision moves to its next stage on this element alone.` : "Pick an anchor — price, ratings or delivery — and watch the rest of the comparison fade."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2430,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex items-center gap-2 rounded-xl px-3 py-2",
                style: {
                    background: "rgba(169,125,44,.08)",
                    border: "1px solid rgba(169,125,44,.28)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$percent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgePercent$3e$__["BadgePercent"], {
                        className: "h-4 w-4 shrink-0",
                        style: {
                            color: GOLD
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2436,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.78rem] font-bold leading-relaxed",
                        style: {
                            color: INK
                        },
                        children: [
                            "Zoom highlights ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: GOLD
                                },
                                children: "“Save 16%”"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2438,
                                columnNumber: 27
                            }, this),
                            " when switching from monthly to annual billing — anchoring you to the longer commitment."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2437,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2435,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 2396,
        columnNumber: 5
    }, this);
}
_s21(AnchorCard, "wxYvbWVl4wPDiI7jlInCOrjrm3Y=");
_c46 = AnchorCard;
function BandwagonCard() {
    _s22();
    const [lens, setLens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("herd");
    const herd = lens === "herd";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                        className: "h-5 w-5",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2452,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-lg font-bold text-[#12312e]",
                        children: "Bandwagon effect"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2453,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[.85rem] leading-relaxed text-[#3a4a48]",
                children: [
                    "If others are doing it, it must be valuable — the more people use something, the more credible it appears. Course platforms show ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "“15,000 people learning on edX today.”"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2457,
                        columnNumber: 31
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2455,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            scale: herd ? 1.03 : 1
                        },
                        className: "rounded-xl p-3",
                        style: {
                            background: herd ? "rgba(15,118,110,.08)" : CREAM,
                            border: `1.5px solid ${herd ? TEAL : CREAM_BORDER}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.8rem] font-extrabold",
                                style: {
                                    color: INK
                                },
                                children: "Hotel A"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.95rem] font-extrabold",
                                style: {
                                    color: TEAL
                                },
                                children: "1,157 reviews · 8.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2463,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 h-2 overflow-hidden rounded-full",
                                style: {
                                    background: "#e8e2d2"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "h-full rounded-full",
                                    style: {
                                        background: TEAL_GRAD
                                    },
                                    animate: {
                                        width: herd ? "88%" : "84%"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2465,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2464,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[.68rem] font-bold",
                                style: {
                                    color: MUTED
                                },
                                children: "credibility reads high"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2467,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2460,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            scale: herd ? 1 : 1.03
                        },
                        className: "rounded-xl p-3",
                        style: {
                            background: !herd ? "rgba(169,125,44,.08)" : CREAM,
                            border: `1.5px solid ${!herd ? GOLD : CREAM_BORDER}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.8rem] font-extrabold",
                                style: {
                                    color: INK
                                },
                                children: "Hotel B"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2471,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.95rem] font-extrabold",
                                style: {
                                    color: GOLD
                                },
                                children: "281 reviews · 8.1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2472,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 h-2 overflow-hidden rounded-full",
                                style: {
                                    background: "#e8e2d2"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "h-full rounded-full",
                                    style: {
                                        background: GOLD_GRAD
                                    },
                                    animate: {
                                        width: herd ? "70%" : "88%"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2474,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2473,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[.68rem] font-bold",
                                style: {
                                    color: MUTED
                                },
                                children: herd ? "fewer voices, less proof" : "less crowding, more exclusivity"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2476,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2469,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        onClick: ()=>setLens("herd"),
                        active: herd,
                        pressed: herd,
                        label: "View through the herd lens",
                        children: "Herd lens"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2480,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        onClick: ()=>setLens("excl"),
                        active: !herd,
                        pressed: !herd,
                        label: "View through the exclusivity lens",
                        children: "Exclusivity lens"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2481,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2479,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                children: herd ? "Theory view: 1,157 reviews at 8.5 look more credible than 281 reviews at 8.1 — the herd validates." : "Practice view: some consumers prefer FEWER reviews — it signals less crowding and more exclusivity."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2483,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 2450,
        columnNumber: 5
    }, this);
}
_s22(BandwagonCard, "pAp2vnULxpoUy90/YynTZWWKfDU=");
_c47 = BandwagonCard;
function ScarcityCard() {
    _s23();
    const [scarce, setScarce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__["Hourglass"], {
                        className: "h-5 w-5",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2497,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-lg font-bold text-[#12312e]",
                        children: "Scarcity effect"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2498,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2496,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[.85rem] leading-relaxed text-[#3a4a48]",
                children: "A product about to run out is valued more than one in abundance. The same room, the same price — the message changes the willingness to purchase."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2500,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-xl p-4",
                style: {
                    background: CREAM,
                    border: `1px solid ${CREAM_BORDER}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.8rem] font-extrabold",
                        style: {
                            color: INK
                        },
                        children: "Hotel booking — same property, same price"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2505,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 6
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "mt-1 text-[1rem] font-extrabold",
                        style: {
                            color: scarce ? ROSE : TEAL
                        },
                        children: scarce ? "\u201COnly 6 rooms left at this price\u201D" : "\u201CPlenty of rooms available at this price\u201D"
                    }, String(scarce), false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2506,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[.7rem] font-bold uppercase tracking-wide",
                            style: {
                                color: MUTED
                            },
                            children: "willingness to book now"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2511,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2510,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 h-3.5 overflow-hidden rounded-full",
                        style: {
                            background: "#e8e2d2"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "h-full rounded-full",
                            style: {
                                background: scarce ? `linear-gradient(135deg,#c05a74,${ROSE})` : TEAL_GRAD
                            },
                            animate: {
                                width: scarce ? "90%" : "34%"
                            },
                            transition: {
                                type: "spring",
                                stiffness: 120,
                                damping: 20
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2514,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2513,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[.78rem] font-bold leading-relaxed",
                        "aria-live": "polite",
                        style: {
                            color: scarce ? ROSE : TEAL
                        },
                        children: scarce ? "Scarcity communicated → higher willingness to purchase — the decision accelerates." : "Abundance communicated → the consumer compares across platforms, prices and reviews before deciding."
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2517,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2504,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        onClick: ()=>setScarce(true),
                        active: scarce,
                        pressed: scarce,
                        label: "Show the scarcity message",
                        children: "Scarcity message"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2524,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        onClick: ()=>setScarce(false),
                        active: !scarce,
                        pressed: !scarce,
                        label: "Show the abundance message",
                        children: "Abundance message"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2525,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2523,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                children: "H&M shows “Few pieces left” in checkout carts to prompt immediate purchase — and the inventory often quietly replenishes after 24 hours. The effect diminishes once alternatives exist (a different travel destination works just as well)."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2527,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 2495,
        columnNumber: 5
    }, this);
}
_s23(ScarcityCard, "U9KL9CIfX1u2kGh2gSyOKLk0N/Q=");
_c48 = ScarcityCard;
function EndowmentCard() {
    _s24();
    const [owned, setOwned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"], {
                        className: "h-5 w-5",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2541,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-lg font-bold text-[#12312e]",
                        children: "Endowment effect"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2542,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2540,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-[.85rem] leading-relaxed text-[#3a4a48]",
                children: "Ownership creates emotional attachment. The same ₹20,000 phone is priced differently depending on whose hands it is in — a ~50% gap showed up in classroom activities."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2544,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-xl p-4",
                style: {
                    background: CREAM,
                    border: `1px solid ${CREAM_BORDER}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.8rem] font-extrabold",
                        style: {
                            color: INK
                        },
                        children: [
                            "One phone. ₹20,000 new. ",
                            owned ? "You own it." : "You're browsing."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2549,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[.78rem] font-bold",
                                                style: {
                                                    color: INK
                                                },
                                                children: "You would SELL it for"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                lineNumber: 2553,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[.85rem] font-extrabold",
                                                style: {
                                                    color: TEAL
                                                },
                                                children: "₹15,000–18,000"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                lineNumber: 2554,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2552,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 h-3 overflow-hidden rounded-full",
                                        style: {
                                            background: "#e8e2d2"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "h-full rounded-full",
                                            style: {
                                                background: TEAL_GRAD
                                            },
                                            animate: {
                                                width: owned ? "84%" : "55%"
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 120,
                                                damping: 20
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2557,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2556,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2551,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[.78rem] font-bold",
                                                style: {
                                                    color: INK
                                                },
                                                children: "You would BUY one for"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                lineNumber: 2563,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[.85rem] font-extrabold",
                                                style: {
                                                    color: ROSE
                                                },
                                                children: "₹7,000–10,000"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                                lineNumber: 2564,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2562,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 h-3 overflow-hidden rounded-full",
                                        style: {
                                            background: "#e8e2d2"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "h-full rounded-full",
                                            style: {
                                                background: `linear-gradient(135deg,#c05a74,${ROSE})`
                                            },
                                            animate: {
                                                width: owned ? "42%" : "30%"
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 120,
                                                damping: 20
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                            lineNumber: 2567,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                        lineNumber: 2566,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                lineNumber: 2561,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2550,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[.72rem] font-bold",
                        style: {
                            color: GOLD
                        },
                        children: "≈ 50% gap between selling and buying prices — for the identical phone."
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2572,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2548,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                    onClick: ()=>setOwned((v)=>!v),
                    label: "Toggle ownership of the phone",
                    children: owned ? "Put it down — just browsing" : "Take it — now you own it"
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2575,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2574,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLog, {
                children: owned ? "Owning it: you demand 15,000–18,000 to sell, but would only offer 7,000–10,000 to buy the same phone. Ownership inflates value." : "Just browsing: the premium shrinks — attachment, not features, was doing the pricing."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2579,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex items-center gap-2 rounded-xl px-3 py-2",
                style: {
                    background: "rgba(15,118,110,.07)",
                    border: "1px solid rgba(15,118,110,.25)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                        className: "h-4 w-4 shrink-0",
                        style: {
                            color: TEAL
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2585,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.78rem] font-bold leading-relaxed",
                        style: {
                            color: INK
                        },
                        children: "Starbucks writes your name on the cup and calls it out — a tiny act of ownership that raises perceived value and loyalty."
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2586,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2584,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 2539,
        columnNumber: 5
    }, this);
}
_s24(EndowmentCard, "X+9ckpIaDE3qVsk0RnXIGXDemVI=");
_c49 = EndowmentCard;
function MktgBiasSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "bias-lab",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 28",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "The ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GSpan, {
                            children: "bias lab"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2600,
                            columnNumber: 22
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Cognitive biases are systematic errors in judgment that run at an unconscious level — mental shortcuts that help consumers navigate complex choices, and the exact levers marketers build on."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2598,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Conscious vs unconscious",
                sub: "two very different kinds of bias"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2603,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Conscious biases",
                            v: "Stereotypes developed through social conditioning, environmental influences, and how the people around us think."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2606,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2605,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 80,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Unconscious biases",
                            v: "Cognitive biases operating at a subconscious level — unintentional judgment errors that misinterpret information and shape consumer behavior."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2609,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2608,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2604,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "warn",
                    title: "The Benetton controversy — conscious bias on display",
                    children: [
                        "The lecture's example of conscious stereotyping: in the Benetton advertisement controversy, consumers stereotypically associated ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "darker-skinned individuals with criminals"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2615,
                            columnNumber: 38
                        }, this),
                        " and",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "lighter-skinned individuals with authority figures"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2616,
                            columnNumber: 11
                        }, this),
                        " — bias shaped by social conditioning, not by the ad's intent."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2613,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2612,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Four biases, four live demos",
                sub: "anchoring · bandwagon · scarcity · endowment — poke each one"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2621,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 xl:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnchorCard, {}, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2623,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2623,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 80,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BandwagonCard, {}, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2624,
                            columnNumber: 28
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2624,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScarcityCard, {}, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2625,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2625,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 80,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EndowmentCard, {}, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                            lineNumber: 2626,
                            columnNumber: 28
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                        lineNumber: 2626,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2622,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Cognitive biases are ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "subconscious errors in thinking"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2631,
                                    columnNumber: 34
                                }, void 0),
                                " that lead to judgment errors in decisions."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "They function as ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "mental shortcuts (heuristics)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2632,
                                    columnNumber: 30
                                }, void 0),
                                " — useful, but they often produce irrational purchases."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Marketers deliberately use them: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "anchoring"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2633,
                                    columnNumber: 46
                                }, void 0),
                                " (Save 16%), ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "bandwagon"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2633,
                                    columnNumber: 85
                                }, void 0),
                                " (15,000 learning), ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "scarcity"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2633,
                                    columnNumber: 131
                                }, void 0),
                                " (only 6 rooms left), ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "personalization"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2633,
                                    columnNumber: 178
                                }, void 0),
                                " (your name on the cup)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Scarcity messaging nudges ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "low-involvement"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2634,
                                    columnNumber: 39
                                }, void 0),
                                " purchases — and the stock often replenishes after 24 hours."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Biases are not always bad — but recognizing them makes consumers ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "more deliberate"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                                    lineNumber: 2635,
                                    columnNumber: 78
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                    lineNumber: 2630,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts4.tsx",
                lineNumber: 2629,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts4.tsx",
        lineNumber: 2597,
        columnNumber: 5
    }, this);
}
_c50 = MktgBiasSection;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44, _c45, _c46, _c47, _c48, _c49, _c50;
__turbopack_context__.k.register(_c, "GSpan");
__turbopack_context__.k.register(_c1, "MBtn");
__turbopack_context__.k.register(_c2, "MLog");
__turbopack_context__.k.register(_c3, "TChip");
__turbopack_context__.k.register(_c4, "Pips");
__turbopack_context__.k.register(_c5, "PlayerBtns");
__turbopack_context__.k.register(_c6, "JourneyPathMachine");
__turbopack_context__.k.register(_c7, "MktgVariationsSection");
__turbopack_context__.k.register(_c8, "AutopsyMachine");
__turbopack_context__.k.register(_c9, "MktgAutopsySection");
__turbopack_context__.k.register(_c10, "CYCLE_POS$[-90, -30, 30, 90, 150, 210].map");
__turbopack_context__.k.register(_c11, "CYCLE_POS");
__turbopack_context__.k.register(_c12, "FrameworkCycleMachine");
__turbopack_context__.k.register(_c13, "MktgTouchpointsSection");
__turbopack_context__.k.register(_c14, "RecapStagesSvg");
__turbopack_context__.k.register(_c15, "RecapLoopSvg");
__turbopack_context__.k.register(_c16, "RecapCycleSvg");
__turbopack_context__.k.register(_c17, "RecapArcMachine");
__turbopack_context__.k.register(_c18, "MktgRecap22Section");
__turbopack_context__.k.register(_c19, "MaslowPyramidMachine");
__turbopack_context__.k.register(_c20, "FreudIceberg");
__turbopack_context__.k.register(_c21, "HerzbergDials");
__turbopack_context__.k.register(_c22, "MktgMotivationSection");
__turbopack_context__.k.register(_c23, "TheoryMatchMachine");
__turbopack_context__.k.register(_c24, "MktgTheoryMatchSection");
__turbopack_context__.k.register(_c25, "BrandFlipMachine");
__turbopack_context__.k.register(_c26, "DuckRabbitDemo");
__turbopack_context__.k.register(_c27, "MktgBrandPerceptionSection");
__turbopack_context__.k.register(_c28, "AlmondsMachine");
__turbopack_context__.k.register(_c29, "MktgAlmondsSection");
__turbopack_context__.k.register(_c30, "StagesFlowMachine");
__turbopack_context__.k.register(_c31, "MktgSensorySection");
__turbopack_context__.k.register(_c32, "FigureGroundDemo");
__turbopack_context__.k.register(_c33, "ContinuityDemo");
__turbopack_context__.k.register(_c34, "SimilarityDemo");
__turbopack_context__.k.register(_c35, "ProximityDemo");
__turbopack_context__.k.register(_c36, "ClosureDemo");
__turbopack_context__.k.register(_c37, "GestaltLab");
__turbopack_context__.k.register(_c38, "MktgGestaltSection");
__turbopack_context__.k.register(_c39, "BucketSorter");
__turbopack_context__.k.register(_c40, "BorgesBars");
__turbopack_context__.k.register(_c41, "MktgBucketsSection");
__turbopack_context__.k.register(_c42, "RetentionMachine");
__turbopack_context__.k.register(_c43, "MktgRetentionSection");
__turbopack_context__.k.register(_c44, "AbcChainMachine");
__turbopack_context__.k.register(_c45, "MktgAbcSection");
__turbopack_context__.k.register(_c46, "AnchorCard");
__turbopack_context__.k.register(_c47, "BandwagonCard");
__turbopack_context__.k.register(_c48, "ScarcityCard");
__turbopack_context__.k.register(_c49, "EndowmentCard");
__turbopack_context__.k.register(_c50, "MktgBiasSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_mktg_MktgParts4_tsx_519a9343._.js.map