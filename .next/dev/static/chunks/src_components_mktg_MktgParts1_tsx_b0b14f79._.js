(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/mktg/MktgParts1.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MktgAnticipationSection",
    ()=>MktgAnticipationSection,
    "MktgBizValueSection",
    ()=>MktgBizValueSection,
    "MktgChaiSection",
    ()=>MktgChaiSection,
    "MktgClosedSystemSection",
    ()=>MktgClosedSystemSection,
    "MktgCpvSection",
    ()=>MktgCpvSection,
    "MktgDefinitionsSection",
    ()=>MktgDefinitionsSection,
    "MktgDemandStatesSection",
    ()=>MktgDemandStatesSection,
    "MktgMarketableSection",
    ()=>MktgMarketableSection,
    "MktgNwdSection",
    ()=>MktgNwdSection,
    "MktgSystemSection",
    ()=>MktgSystemSection,
    "MktgToplineSection",
    ()=>MktgToplineSection,
    "MktgVsSellingSection",
    ()=>MktgVsSellingSection,
    "MktgWhySection",
    ()=>MktgWhySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   MKTG — "Principles of Marketing" · shelf 06 of THE ATLAS
   PARTS 1 — Lectures 1–5 (13 chapters)
   · L1  why-mktg          · L3  definitions / mktg-system /
   · L2  anticipation            marketable / need-want-demand /
   · L2  topline                 demand-states
   · L2  mktg-vs-selling   · L4  closed-system / biz-value
                             · L5  chai-value / cpv-formula

   Design system: Boutique Teal & Champagne — teal #0f766e/#14b8a6,
   champagne #a97d2c/#e3c26b, ink #1f2b2b, lagoon dark panels.
   Every fact, figure and brand story comes from
   /upload/marketing-lectures.txt (Lectures 1–5).
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/app-window.js [app-client] (ecmascript) <export default as AppWindow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$armchair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Armchair$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/armchair.js [app-client] (ecmascript) <export default as Armchair>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left-right.js [app-client] (ecmascript) <export default as ArrowLeftRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-check.js [app-client] (ecmascript) <export default as BadgeCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clapperboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clapperboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clapperboard.js [app-client] (ecmascript) <export default as Clapperboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$drumstick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drumstick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/drumstick.js [app-client] (ecmascript) <export default as Drumstick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-handshake.js [app-client] (ecmascript) <export default as HeartHandshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket.js [app-client] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$watch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Watch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/watch.js [app-client] (ecmascript) <export default as Watch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircleQuestion$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle-question-mark.js [app-client] (ecmascript) <export default as MessageCircleQuestion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pizza$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pizza$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pizza.js [app-client] (ecmascript) <export default as Pizza>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.js [app-client] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sandwich$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sandwich$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sandwich.js [app-client] (ecmascript) <export default as Sandwich>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scissors.js [app-client] (ecmascript) <export default as Scissors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$school$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__School$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/school.js [app-client] (ecmascript) <export default as School>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shirt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shirt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shirt.js [app-client] (ecmascript) <export default as Shirt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sofa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sofa$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sofa.js [app-client] (ecmascript) <export default as Sofa>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-client] (ecmascript) <export default as UtensilsCrossed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature(), _s13 = __turbopack_context__.k.signature(), _s14 = __turbopack_context__.k.signature(), _s15 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ---------- palette + shared helpers ---------- */ const TEAL = "#0f766e";
const TEAL_B = "#14b8a6";
const INK = "#1f2b2b";
const GOLD = "#a97d2c";
const GOLD_L = "#e3c26b";
const ROSE = "#9f3d54";
const LAGOON = "linear-gradient(165deg,#0c2124 0%,#12302f 60%,#143236 100%)";
const TEAL_GRAD = "linear-gradient(135deg,#14b8a6,#0f766e)";
const GOLD_GRAD = "linear-gradient(135deg,#e3c26b,#a97d2c)";
const LIGHT = "#e9f2ee"; // light text on lagoon panels
const DIM = "#9fbcb4"; // muted text on lagoon panels
/** Teal→gold gradient text span (never the ATB .grad-text class). */ function GT({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            background: "linear-gradient(135deg,#14b8a6,#0f766e 55%,#a97d2c)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = GT;
/** Reader prose paragraph. */ function P({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: `max-w-3xl text-[.95rem] leading-relaxed text-[#3a4a48] ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
_c1 = P;
function MBtn({ onClick, children, tone = "teal", aria, active = false, disabled = false }) {
    const styles = {
        teal: {
            background: TEAL_GRAD,
            color: "#f0fdfa"
        },
        gold: {
            background: GOLD_GRAD,
            color: "#33260b"
        },
        plain: {
            background: "#f2efe7",
            color: INK,
            border: "1px solid #e3ddcf"
        },
        dark: {
            background: "rgba(20,184,166,.14)",
            color: "#c6f4ea",
            border: "1px solid rgba(20,184,166,.42)"
        },
        rose: {
            background: "#f7e9ec",
            color: ROSE,
            border: "1px solid #e5c2cb"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        "aria-label": aria,
        "aria-pressed": active || undefined,
        disabled: disabled,
        style: active ? {
            background: TEAL_GRAD,
            color: "#f0fdfa"
        } : styles[tone],
        className: `rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 ${disabled ? "cursor-not-allowed opacity-50" : "hover:-translate-y-0.5"}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_c2 = MBtn;
/** aria-live status line for machines. */ function MLive({ msg }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        "aria-live": "polite",
        className: "mt-4 min-h-[2.6rem] rounded-xl px-3.5 py-2.5 font-mono-warm text-[.85rem] font-bold",
        style: {
            background: "#edf5f2",
            border: "1px dashed #9fd0c6",
            color: TEAL
        },
        children: msg
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c3 = MLive;
/** Machine header row: icon badge + title + chip. */ function MHead({ icon, title, chip }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                style: {
                    background: "linear-gradient(135deg,rgba(20,184,166,.18),rgba(15,118,110,.10))",
                    color: TEAL
                },
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold md:text-2xl",
                style: {
                    color: INK
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            chip ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "chip",
                children: chip
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 105,
                columnNumber: 15
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_c4 = MHead;
/** Dark lagoon panel that hosts machine SVGs. */ function LagoonBox({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-2xl p-3 md:p-4 ${className}`,
        style: {
            background: LAGOON,
            border: "1px solid rgba(20,184,166,.28)"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_c5 = LagoonBox;
/** Numbered objective dot. */ function NumDot({ n }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[.8rem] font-black",
        style: {
            background: TEAL_GRAD,
            color: "#f0fdfa"
        },
        "aria-hidden": true,
        children: n
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c6 = NumDot;
/** Auto-advance effect shared by step players: returns a timeout that steps `step` while playing. */ function useAutoStep(playing, step, max, ms, setStep, stop) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAutoStep.useEffect": ()=>{
            if (!playing) return;
            if (step >= max) {
                stop();
                return;
            }
            const t = window.setTimeout({
                "useAutoStep.useEffect.t": ()=>setStep({
                        "useAutoStep.useEffect.t": (s)=>Math.min(s + 1, max)
                    }["useAutoStep.useEffect.t"])
            }["useAutoStep.useEffect.t"], ms);
            return ({
                "useAutoStep.useEffect": ()=>window.clearTimeout(t)
            })["useAutoStep.useEffect"];
        }
    }["useAutoStep.useEffect"], [
        playing,
        step,
        max,
        ms,
        setStep,
        stop
    ]);
}
_s(useAutoStep, "OD7bBpZva5O2jO+Puf00hKivP7c=");
/* ============================================================
   CH 1 · why-mktg — the meaning machine
   ============================================================ */ const MEANING_BEATS = [
    {
        k: "Beyond selling",
        line: "Marketing is not limited to selling or product promotion."
    },
    {
        k: "Reading decisions",
        line: "It encompasses understanding consumer behavior and decision-making processes."
    },
    {
        k: "Brand preference",
        line: "It explores why customers prefer certain brands over competitors."
    },
    {
        k: "Creating value",
        line: "It focuses on creating value rather than just transacting sales."
    }
];
function MeaningMachine() {
    _s1();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const stop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "MeaningMachine.useCallback[stop]": ()=>setPlaying(false)
    }["MeaningMachine.useCallback[stop]"], []);
    useAutoStep(playing, step, MEANING_BEATS.length - 1, 1700, setStep, stop);
    const beat = MEANING_BEATS[step];
    const msg = `Beat ${step + 1} of 4 · ${beat.k} — ${beat.line}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MHead, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 163,
                    columnNumber: 20
                }, void 0),
                title: "What marketing really means — four beats",
                chip: "Lecture 1 · the definition surface"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LagoonBox, {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 sm:gap-3",
                        "aria-hidden": true,
                        children: MEANING_BEATS.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-1 flex-col items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        className: "flex h-9 w-9 items-center justify-center rounded-full text-[.82rem] font-black",
                                        animate: {
                                            scale: i === step ? 1.18 : 1
                                        },
                                        style: i === step ? {
                                            background: GOLD_GRAD,
                                            color: "#33260b"
                                        } : {
                                            background: "rgba(20,184,166,.12)",
                                            color: DIM,
                                            border: "1px solid rgba(20,184,166,.4)"
                                        },
                                        children: i + 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden text-center text-[.66rem] font-bold uppercase tracking-wider sm:block",
                                        style: {
                                            color: i === step ? GOLD_L : DIM
                                        },
                                        children: b.k
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, b.k, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 h-1.5 w-full overflow-hidden rounded-full",
                        style: {
                            background: "rgba(20,184,166,.16)"
                        },
                        "aria-hidden": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "h-full rounded-full",
                            style: {
                                background: GOLD_GRAD
                            },
                            initial: false,
                            animate: {
                                width: `${(step + 1) / MEANING_BEATS.length * 100}%`
                            },
                            transition: {
                                type: "spring",
                                stiffness: 160,
                                damping: 24
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 min-h-[5.4rem]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
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
                                    duration: 0.32
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold md:text-3xl",
                                        style: {
                                            color: LIGHT
                                        },
                                        children: beat.k
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 max-w-xl text-[.95rem] leading-relaxed",
                                        style: {
                                            color: DIM
                                        },
                                        children: beat.line
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, step, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: playing ? "plain" : "teal",
                        onClick: ()=>playing ? setPlaying(false) : (setStep(0), setPlaying(true)),
                        aria: playing ? "Pause the four beats" : "Play the four beats",
                        children: [
                            playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 196,
                                columnNumber: 22
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 196,
                                columnNumber: 82
                            }, this),
                            playing ? "Pause" : "Play"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        onClick: ()=>setStep((s)=>Math.min(s + 1, MEANING_BEATS.length - 1)),
                        aria: "Next beat",
                        children: [
                            "Next ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "ml-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 199,
                                columnNumber: 124
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        onClick: ()=>{
                            setPlaying(false);
                            setStep(0);
                        },
                        aria: "Reset to the first beat",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 200,
                                columnNumber: 110
                            }, this),
                            "Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLive, {
                msg: msg
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_s1(MeaningMachine, "dzv6XnLFIWvkZhrouD9AuoosRIQ=", false, function() {
    return [
        useAutoStep
    ];
});
_c7 = MeaningMachine;
const BRANDS = [
    {
        key: "bb",
        name: "BlackBerry",
        sub: "the keyboard everyone trusted",
        events: [
            {
                tag: "2007",
                label: "Apple launches the iPhone",
                note: "The stock price begins a gradual decline."
            },
            {
                tag: "2008",
                label: "Android's launch",
                note: "The decline deepens with Android's arrival."
            },
            {
                tag: "2010",
                label: "The bottom",
                note: "The stock reaches bottom in 2010."
            },
            {
                tag: "End",
                label: "Bankruptcy",
                note: "The company eventually went bankrupt — it failed to anticipate the market shift."
            }
        ]
    },
    {
        key: "hz",
        name: "Hertz",
        sub: "renting cars, owning the burden",
        events: [
            {
                tag: "Uber",
                label: "Uber's 2019 launch — a $17 billion valuation",
                note: "Hertz faces decline after Uber's arrival."
            },
            {
                tag: "Fleet",
                label: "Owned fleet, owned burden",
                note: "Owning the car fleet means high capital and maintenance costs."
            },
            {
                tag: "Model",
                label: "Uber's asset-light answer",
                note: "Outsourced drivers and vehicles prove superior."
            },
            {
                tag: "2018",
                label: "Global exit",
                note: "Hertz exits the global market by 2018 — yet remains operational in southern India."
            }
        ]
    },
    {
        key: "bl",
        name: "Blockbuster",
        sub: "Friday night, on a disc",
        events: [
            {
                tag: "DVD",
                label: "The rental king",
                note: "A movie rental company at the centre of home entertainment."
            },
            {
                tag: "2002",
                label: "Netflix personalizes",
                note: "Netflix introduces personalized recommendations in 2002."
            },
            {
                tag: "2012",
                label: "Netflix streams",
                note: "Netflix launches its streaming service in 2012."
            },
            {
                tag: "CEO",
                label: "“Non-competitive”",
                note: "Despite holding a competitive advantage, Blockbuster's CEO dismisses Netflix as non-competitive."
            },
            {
                tag: "End",
                label: "Bankrupt",
                note: "The OTT model disrupts the industry — Blockbuster goes bankrupt."
            }
        ]
    }
];
const BRAND_ICONS = {
    bb: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
        className: "h-4 w-4",
        "aria-hidden": true
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 243,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0)),
    hz: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
        className: "h-4 w-4",
        "aria-hidden": true
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 244,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0)),
    bl: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clapperboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clapperboard$3e$__["Clapperboard"], {
        className: "h-4 w-4",
        "aria-hidden": true
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 245,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0))
};
function DeclineChart({ b, step }) {
    const n = b.events.length;
    const L = 78, R = 596, T = 62, B = 236;
    const pts = b.events.map((_, i)=>[
            L + i * (R - L) / (n - 1),
            T + i * (B - T) / (n - 1)
        ]);
    const d = "M" + pts.map((p)=>`${p[0]},${p[1]}`).join(" L");
    const frac = step === 0 ? 0 : (step - 1) / (n - 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 660 300",
        className: "h-auto w-full",
        role: "img",
        "aria-label": `Schematic stock chart of the ${b.name} decline, event by event`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                    id: "dc-ah",
                    markerWidth: "8",
                    markerHeight: "8",
                    refX: "6",
                    refY: "3",
                    orient: "auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0,0 L7,3 L0,6 Z",
                        fill: DIM
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 257,
                        columnNumber: 93
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "56",
                y1: "40",
                x2: "56",
                y2: "252",
                stroke: "#3a5350",
                strokeWidth: "1.6",
                markerEnd: "url(#dc-ah)"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "56",
                y1: "252",
                x2: "636",
                y2: "252",
                stroke: "#3a5350",
                strokeWidth: "1.6",
                markerEnd: "url(#dc-ah)"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "40",
                y: "150",
                fontSize: "10.5",
                fontWeight: "700",
                fill: DIM,
                transform: "rotate(-90 40 150)",
                textAnchor: "middle",
                children: "share price · schematic"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "600",
                y: "278",
                fontSize: "10.5",
                fontWeight: "700",
                fill: DIM,
                textAnchor: "end",
                children: "time →"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: d,
                fill: "none",
                stroke: "#9f3d54",
                strokeWidth: "2",
                opacity: "0.22",
                strokeDasharray: "5 7"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                d: d,
                fill: "none",
                stroke: "#9f3d54",
                strokeWidth: "3.5",
                strokeLinecap: "round",
                initial: {
                    pathLength: 0
                },
                animate: {
                    pathLength: frac
                },
                transition: {
                    type: "spring",
                    stiffness: 60,
                    damping: 18
                }
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            pts.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            cx: p[0],
                            cy: p[1],
                            r: i === step - 1 ? 8 : 6,
                            fill: i === step - 1 ? GOLD_L : "#9f3d54",
                            stroke: "#f2efe7",
                            strokeWidth: "2",
                            opacity: i < step ? 1 : 0.12,
                            initial: false,
                            animate: {
                                opacity: i < step ? 1 : 0.12
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: p[0],
                            y: p[1] + (i % 2 === 0 ? -16 : 24),
                            textAnchor: "middle",
                            fontSize: "11",
                            fontWeight: "800",
                            fill: i < step ? GOLD_L : "#54706b",
                            opacity: i < step ? 1 : 0.35,
                            children: b.events[i].tag
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_c8 = DeclineChart;
function DeclineMachine() {
    _s2();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const b = BRANDS[tab];
    const stop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "DeclineMachine.useCallback[stop]": ()=>setPlaying(false)
    }["DeclineMachine.useCallback[stop]"], []);
    useAutoStep(playing, step, b.events.length, 1500, setStep, stop);
    const pick = (i)=>{
        setTab(i);
        setStep(1);
        setPlaying(false);
    };
    const msg = step === 0 ? `${b.name} — press Play to trace the decline.` : `${b.name} · event ${step} of ${b.events.length} — ${b.events[step - 1].note}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MHead, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 296,
                    columnNumber: 20
                }, void 0),
                title: "Three giants, one missing skill",
                chip: "Lecture 2 · anticipation"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                role: "tablist",
                "aria-label": "Choose a decline case",
                children: BRANDS.map((br, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        role: "tab",
                        "aria-selected": tab === i,
                        onClick: ()=>pick(i),
                        className: "inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 hover:-translate-y-0.5",
                        style: tab === i ? {
                            background: TEAL_GRAD,
                            color: "#f0fdfa"
                        } : {
                            background: "#f2efe7",
                            color: INK,
                            border: "1px solid #e3ddcf"
                        },
                        children: [
                            BRAND_ICONS[br.key],
                            " ",
                            br.name
                        ]
                    }, br.key, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LagoonBox, {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-baseline justify-between gap-2 px-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-bold",
                                style: {
                                    color: LIGHT
                                },
                                children: b.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.8rem]",
                                style: {
                                    color: DIM
                                },
                                children: b.sub
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeclineChart, {
                        b: b,
                        step: step
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 311,
                        columnNumber: 9
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
                                opacity: 0
                            },
                            transition: {
                                duration: 0.25
                            },
                            className: "min-h-[3.2rem] px-1 text-[.92rem] leading-relaxed",
                            style: {
                                color: LIGHT
                            },
                            children: step === 0 ? "Watch the pattern: a gradual drop… then the sudden collapse." : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: GOLD_L,
                                            fontWeight: 800
                                        },
                                        children: [
                                            b.events[step - 1].tag,
                                            " · ",
                                            b.events[step - 1].label,
                                            ". "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 317,
                                        columnNumber: 17
                                    }, this),
                                    b.events[step - 1].note
                                ]
                            }, void 0, true)
                        }, `${b.key}-${step}`, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: playing ? "plain" : "teal",
                        onClick: ()=>playing ? setPlaying(false) : (setStep(0), setPlaying(true)),
                        aria: playing ? "Pause the decline trace" : "Play the decline trace",
                        children: [
                            playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 326,
                                columnNumber: 22
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 326,
                                columnNumber: 82
                            }, this),
                            playing ? "Pause" : "Play"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        onClick: ()=>setStep((s)=>Math.min(s + 1, b.events.length)),
                        aria: "Next event",
                        children: [
                            "Next ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "ml-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 329,
                                columnNumber: 116
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        onClick: ()=>{
                            setPlaying(false);
                            setStep(0);
                        },
                        aria: "Reset the trace",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 330,
                                columnNumber: 102
                            }, this),
                            "Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLive, {
                msg: msg
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 295,
        columnNumber: 5
    }, this);
}
_s2(DeclineMachine, "Qwi6ZZ0M6RgReR6dZTgSovhHMc4=", false, function() {
    return [
        useAutoStep
    ];
});
_c9 = DeclineMachine;
/** Static pattern-of-decline curve. */ function PatternSvg() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 640 220",
        className: "h-auto w-full",
        role: "img",
        "aria-label": "The pattern of organizational decline: a gradual performance drop followed by a sudden collapse, with a pivot branch for anticipators",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                        id: "pt-g",
                        markerWidth: "8",
                        markerHeight: "8",
                        refX: "6",
                        refY: "3",
                        orient: "auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0,0 L7,3 L0,6 Z",
                            fill: GOLD
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 342,
                            columnNumber: 92
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                        id: "pt-r",
                        markerWidth: "8",
                        markerHeight: "8",
                        refX: "6",
                        refY: "3",
                        orient: "auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0,0 L7,3 L0,6 Z",
                            fill: ROSE
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 343,
                            columnNumber: 92
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 341,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "40",
                y1: "180",
                x2: "610",
                y2: "180",
                stroke: "#d8d2c2",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                d: "M60,40 C180,52 300,70 400,110 C440,127 462,140 478,172",
                fill: "none",
                stroke: ROSE,
                strokeWidth: "3.4",
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
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 346,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                d: "M300,84 C352,96 384,60 424,44",
                fill: "none",
                stroke: GOLD,
                strokeWidth: "3.4",
                strokeLinecap: "round",
                strokeDasharray: "8 6",
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
                    duration: 1,
                    delay: 1,
                    ease: "easeOut"
                },
                markerEnd: "url(#pt-g)"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 348,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "478",
                cy: "172",
                r: "6",
                fill: ROSE
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "500",
                y: "176",
                fontSize: "12",
                fontWeight: "800",
                fill: ROSE,
                children: "sudden collapse"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "60",
                y: "28",
                fontSize: "12",
                fontWeight: "800",
                fill: ROSE,
                children: "initial gradual performance drop"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 352,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "300",
                y: "34",
                fontSize: "12",
                fontWeight: "800",
                fill: GOLD,
                children: "anticipators pivot before the cliff"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "470",
                y: "202",
                fontSize: "11",
                fontWeight: "700",
                fill: "#7a8b87",
                markerEnd: "url(#pt-r)",
                children: "unable to anticipate → rapid market exit"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 354,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 340,
        columnNumber: 5
    }, this);
}
_c10 = PatternSvg;
/* ============================================================
   CH 3 · topline — the cold-coffee P&L calculator
   ============================================================ */ function PnLMachine() {
    _s3();
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(120);
    const [glasses, setGlasses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(80);
    const [cost, setCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(70);
    const revenue = price * glasses;
    const totalCost = cost * glasses;
    const profit = revenue - totalCost;
    const fmt = (n)=>`₹${n.toLocaleString("en-IN")}`;
    const costShare = revenue > 0 ? Math.max(0, Math.min(1, totalCost / revenue)) : 0;
    const profitShare = revenue > 0 ? Math.max(0, Math.min(1, profit / revenue)) : 0;
    const slider = (label, v, set, min, max, aria)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex flex-1 min-w-[210px] flex-col gap-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-baseline justify-between text-[.78rem] font-extrabold uppercase tracking-wider",
                    style: {
                        color: GOLD
                    },
                    children: [
                        label,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono-warm text-[.95rem]",
                            style: {
                                color: INK
                            },
                            children: fmt(v)
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 377,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 376,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "range",
                    min: min,
                    max: max,
                    step: 5,
                    value: v,
                    onChange: (e)=>set(Number(e.target.value)),
                    "aria-label": aria,
                    className: "w-full accent-[#0f766e]"
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 379,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 375,
            columnNumber: 5
        }, this);
    const tile = (k, v, bg, fg, hint)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 rounded-2xl p-4",
            style: {
                background: bg,
                border: "1px solid rgba(20,184,166,.18)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[.68rem] font-extrabold uppercase tracking-[.16em]",
                    style: {
                        color: fg,
                        opacity: 0.85
                    },
                    children: k
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 386,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0.35,
                        y: 5
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.22
                    },
                    className: "mt-1 font-mono-warm text-xl font-black md:text-2xl",
                    style: {
                        color: fg
                    },
                    children: fmt(v)
                }, v, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 387,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-[.72rem]",
                    style: {
                        color: fg,
                        opacity: 0.75
                    },
                    children: hint
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 389,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 385,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MHead, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 395,
                    columnNumber: 20
                }, void 0),
                title: "The cold-coffee P&L — run the café yourself",
                chip: "Lecture 2 · price ₹120 · 80 glasses · cost ₹70"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 395,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-4",
                children: [
                    slider("Price per glass", price, setPrice, 60, 200, "Price per glass in rupees"),
                    slider("Glasses a day", glasses, setGlasses, 20, 150, "Number of glasses sold per day"),
                    slider("Cost per glass", cost, setCost, 40, 120, "Cost per glass in rupees")
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 396,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LagoonBox, {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-3",
                        children: [
                            tile("Top line · revenue", revenue, "rgba(20,184,166,.14)", LIGHT, "price × volume"),
                            tile("Total cost", totalCost, "rgba(227,194,107,.10)", GOLD_L, "cost × volume"),
                            tile("Bottom line · profit", profit, profit < 0 ? "rgba(159,61,84,.20)" : "rgba(20,184,166,.20)", profit < 0 ? "#f3b7c3" : LIGHT, "revenue − cost")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 px-1",
                        "aria-hidden": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-3.5 w-full overflow-hidden rounded-full",
                                style: {
                                    background: "rgba(20,184,166,.12)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "h-full",
                                        style: {
                                            background: GOLD_GRAD
                                        },
                                        initial: false,
                                        animate: {
                                            width: `${costShare * 100}%`
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 130,
                                            damping: 22
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 409,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "h-full",
                                        style: {
                                            background: ROSE
                                        },
                                        initial: false,
                                        animate: {
                                            width: `${profitShare * 100}%`
                                        },
                                        transition: {
                                            type: "spring",
                                            stiffness: 130,
                                            damping: 22
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 410,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 408,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-[.72rem]",
                                style: {
                                    color: DIM
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: GOLD_L
                                        },
                                        children: "■ cost share"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 413,
                                        columnNumber: 13
                                    }, this),
                                    " · ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#e89db0"
                                        },
                                        children: "■ profit share"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 413,
                                        columnNumber: 67
                                    }, this),
                                    " of the top line",
                                    profit < 0 ? " — the bottom line dips below zero at this price" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 407,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 401,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLive, {
                msg: `${fmt(price)} × ${glasses} − ${fmt(cost)} × ${glasses} = revenue ${fmt(revenue)} − cost ${fmt(totalCost)} = profit ${fmt(profit)}.`
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        onClick: ()=>{
                            setPrice(120);
                            setGlasses(80);
                            setCost(70);
                        },
                        aria: "Reset to the lecture's café numbers",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 419,
                                columnNumber: 135
                            }, this),
                            "Back to the lecture's café"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 419,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.82rem] leading-relaxed text-[#5f7472]",
                        children: [
                            "The lecture's run: ₹120 × 80 − ₹70 × 80 → revenue ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: TEAL
                                },
                                children: "₹9,600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 420,
                                columnNumber: 119
                            }, this),
                            ", cost ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: GOLD
                                },
                                children: "₹5,600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 420,
                                columnNumber: 173
                            }, this),
                            ", profit ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: TEAL
                                },
                                children: "₹4,000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 420,
                                columnNumber: 229
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 420,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 418,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 394,
        columnNumber: 5
    }, this);
}
_s3(PnLMachine, "95dniz9jf/FLTdWLuw4oPAy125w=");
_c11 = PnLMachine;
/* ============================================================
   CH 4 · mktg-vs-selling — the pen machine + spot-the-marketing
   ============================================================ */ const PEN_ATTRS = [
    "writes flawlessly",
    "black color",
    "good grip",
    "improves exam marks"
];
const PEN_QS = [
    "Do you prefer ballpoint, pilot, or ink pens?",
    "What is your budget?",
    "Do you prefer fine or broad nib?",
    "What color do you prefer?"
];
function PenMachine() {
    _s4();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sales");
    const [qi, setQi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const stop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "PenMachine.useCallback[stop]": ()=>setPlaying(false)
    }["PenMachine.useCallback[stop]"], []);
    useAutoStep(playing && mode === "mktg", qi, PEN_QS.length, 1250, setQi, stop);
    const msg = mode === "sales" ? "Sales-dominant: push the pen's attributes — after the product already exists." : qi < PEN_QS.length ? `Marketing question ${qi + 1} of ${PEN_QS.length}: ${PEN_QS[qi]}` : "All four asked — understanding needs before presenting the product ensures better fit, and more successful sales outcomes.";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MHead, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 452,
                    columnNumber: 20
                }, void 0),
                title: "One pen, two postures",
                chip: "Lecture 2 · the pen test"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 452,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "teal",
                        active: mode === "sales",
                        onClick: ()=>{
                            setMode("sales");
                            setPlaying(false);
                        },
                        aria: "Show the sales-dominant approach",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 454,
                                columnNumber: 150
                            }, this),
                            "Sales-dominant"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 454,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "gold",
                        active: mode === "mktg",
                        onClick: ()=>{
                            setMode("mktg");
                            setQi(0);
                        },
                        aria: "Show the marketing approach",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircleQuestion$3e$__["MessageCircleQuestion"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 455,
                                columnNumber: 134
                            }, this),
                            "Marketing — ask first"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 455,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 453,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LagoonBox, {
                className: "mt-4 min-h-[12rem]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: mode === "sales" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 24
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        exit: {
                            opacity: 0,
                            x: -24
                        },
                        transition: {
                            duration: 0.3
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex items-center gap-2 text-lg font-bold",
                                style: {
                                    color: LIGHT
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
                                        className: "h-5 w-5",
                                        style: {
                                            color: GOLD_L
                                        },
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 461,
                                        columnNumber: 97
                                    }, this),
                                    " Push the product's attributes"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 461,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 max-w-xl text-[.92rem] leading-relaxed",
                                style: {
                                    color: DIM
                                },
                                children: [
                                    "Selling focuses on pushing products to consumers ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "after"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 462,
                                        columnNumber: 146
                                    }, this),
                                    " creation — so the pitch is all product:"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 462,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: PEN_ATTRS.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        className: "rounded-full px-3.5 py-1.5 text-[.84rem] font-bold",
                                        style: {
                                            background: "rgba(20,184,166,.14)",
                                            border: "1px solid rgba(20,184,166,.4)",
                                            color: LIGHT
                                        },
                                        initial: {
                                            opacity: 0,
                                            scale: 0.85
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            delay: 0.12 * i
                                        },
                                        children: a
                                    }, a, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 465,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 463,
                                columnNumber: 15
                            }, this)
                        ]
                    }, "sales", true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 460,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -24
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        exit: {
                            opacity: 0,
                            x: 24
                        },
                        transition: {
                            duration: 0.3
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex items-center gap-2 text-lg font-bold",
                                style: {
                                    color: LIGHT
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircleQuestion$3e$__["MessageCircleQuestion"], {
                                        className: "h-5 w-5",
                                        style: {
                                            color: GOLD_L
                                        },
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 475,
                                        columnNumber: 97
                                    }, this),
                                    " Ask before you present"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 475,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 max-w-xl text-[.92rem] leading-relaxed",
                                style: {
                                    color: DIM
                                },
                                children: [
                                    "Marketing begins with understanding consumer needs ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "before"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 476,
                                        columnNumber: 148
                                    }, this),
                                    " the pen comes out:"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 476,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-3 grid gap-2",
                                children: PEN_QS.slice(0, qi).map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                        initial: {
                                            opacity: 0,
                                            y: 8
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        className: "rounded-xl px-3.5 py-2 text-[.9rem] font-semibold",
                                        style: {
                                            background: "rgba(227,194,107,.10)",
                                            border: "1px solid rgba(227,194,107,.35)",
                                            color: LIGHT
                                        },
                                        children: q
                                    }, q, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 479,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 477,
                                columnNumber: 15
                            }, this)
                        ]
                    }, "mktg", true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 474,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 458,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 457,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: mode === "mktg" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                            tone: playing ? "plain" : "teal",
                            onClick: ()=>playing ? setPlaying(false) : (setQi(0), setPlaying(true)),
                            aria: playing ? "Pause the questions" : "Play the questions",
                            children: [
                                playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                    className: "mr-1 inline h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 494,
                                    columnNumber: 26
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "mr-1 inline h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 494,
                                    columnNumber: 86
                                }, this),
                                playing ? "Pause" : "Play"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 493,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                            tone: "plain",
                            disabled: qi >= PEN_QS.length,
                            onClick: ()=>setQi((q)=>Math.min(q + 1, PEN_QS.length)),
                            aria: "Next question",
                            children: [
                                "Next question ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "ml-1 inline h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 496,
                                    columnNumber: 159
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 496,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                            tone: "plain",
                            onClick: ()=>{
                                setPlaying(false);
                                setQi(0);
                            },
                            aria: "Reset the questions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                    className: "mr-1 inline h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 497,
                                    columnNumber: 108
                                }, this),
                                "Reset"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 497,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                    tone: "gold",
                    onClick: ()=>{
                        setMode("mktg");
                        setQi(0);
                    },
                    aria: "Switch to the marketing approach",
                    children: [
                        "Now ask the four questions instead ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "ml-1 inline h-3.5 w-3.5",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 500,
                            columnNumber: 151
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 500,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLive, {
                msg: msg
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 503,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 451,
        columnNumber: 5
    }, this);
}
_s4(PenMachine, "UZgkuEIxS5L71RfleP0rkAvttjo=", false, function() {
    return [
        useAutoStep
    ];
});
_c12 = PenMachine;
const SPOT_ITEMS = [
    {
        t: "₹1 shampoo sachets",
        d: "Smaller sachets, for one rupee, targeting value-conscious consumers.",
        v: "m",
        why: "product design — a marketing-mix decision made before any selling happens."
    },
    {
        t: "20% off at a restaurant",
        d: "A restaurant runs a 20% discount.",
        v: "m",
        why: "promotional pricing — the promotion element of the marketing mix."
    },
    {
        t: "Iced-coffee study",
        d: "A brand studies student preferences for iced coffee.",
        v: "m",
        why: "consumer research — understanding needs before the product exists."
    },
    {
        t: "Zomato's timed notifications",
        d: "Time-targeted, humorous notifications about food deals.",
        v: "m",
        why: "digital marketing — triggering purchase intent."
    },
    {
        t: "Chocolates at the billing counter",
        d: "Chocolates kept near the billing counter.",
        v: "m",
        why: "point-of-purchase placement — retail marketing for impulse purchases."
    },
    {
        t: "The laptop pitch",
        d: "A salesperson convinces a customer to buy a laptop.",
        v: "s",
        why: "direct persuasion — this one is sales, not marketing."
    }
];
function SpotMachine() {
    _s5();
    const [sel, setSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ans, setAns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [log, setLog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Pick an activity, then call it Marketing or Sales.");
    const answered = Object.keys(ans).length;
    const correct = SPOT_ITEMS.filter((it, i)=>ans[i] === it.v).length;
    function judge(v) {
        if (sel === null) return;
        const it = SPOT_ITEMS[sel];
        setAns((a)=>({
                ...a,
                [sel]: v
            }));
        setLog(`${v === it.v ? "✓" : "✗"} ${it.t} — ${it.why}`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MHead, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 532,
                    columnNumber: 20
                }, void 0),
                title: "Spot the marketing",
                chip: "Lecture 2 · six moments from the notes"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 532,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3",
                children: SPOT_ITEMS.map((it, i)=>{
                    const a = ans[i];
                    const picked = sel === i;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setSel(i),
                        "aria-pressed": picked,
                        className: "rounded-2xl p-3.5 text-left transition-transform duration-200 hover:-translate-y-0.5",
                        style: {
                            background: picked ? "rgba(20,184,166,.10)" : "#f2efe7",
                            border: `1.5px solid ${a ? a === it.v ? TEAL_B : ROSE : picked ? TEAL_B : "#e3ddcf"}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.9rem] font-extrabold",
                                style: {
                                    color: INK
                                },
                                children: [
                                    it.t,
                                    " ",
                                    a ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: a === it.v ? TEAL : ROSE
                                        },
                                        children: a === it.v ? "✓" : "✗"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 544,
                                        columnNumber: 93
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 544,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[.8rem] leading-relaxed",
                                style: {
                                    color: "#5f7472"
                                },
                                children: it.d
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 545,
                                columnNumber: 15
                            }, this)
                        ]
                    }, it.t, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 538,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 533,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "teal",
                        disabled: sel === null,
                        onClick: ()=>judge("m"),
                        aria: "Classify as marketing",
                        children: "Marketing"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 551,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "gold",
                        disabled: sel === null,
                        onClick: ()=>judge("s"),
                        aria: "Classify as sales",
                        children: "Sales"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 552,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        onClick: ()=>{
                            setAns({});
                            setSel(null);
                            setLog("Cleared — try classifying all six again.");
                        },
                        aria: "Reset the game",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 553,
                                columnNumber: 148
                            }, this),
                            "Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 553,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: [
                            "answered ",
                            answered,
                            "/6 · correct ",
                            correct
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 554,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 550,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLive, {
                msg: log
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 556,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 531,
        columnNumber: 5
    }, this);
}
_s5(SpotMachine, "65T042EYXpnRNNw7wqGQMqNkN4o=");
_c13 = SpotMachine;
/* ============================================================
   CH 5 · definitions — outside-in / inside-out machine
   ============================================================ */ function InOutMachine() {
    _s6();
    const [dir, setDir] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("out");
    const outside = dir === "out";
    const msg = outside ? "Outside-in — gather information from the market about consumer needs, wants and market dynamics, then bring this knowledge into the organization." : "Inside-out — take a finished product created by the organization and push it to consumers through retailers, distribution, online.";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MHead, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__["ArrowLeftRight"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 573,
                    columnNumber: 20
                }, void 0),
                title: "Two directions, two disciplines",
                chip: "Lecture 3 · outside-in vs inside-out"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 573,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "teal",
                        active: outside,
                        onClick: ()=>setDir("out"),
                        aria: "Show outside-in marketing",
                        children: "Outside-in · marketing"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 575,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "gold",
                        active: !outside,
                        onClick: ()=>setDir("in"),
                        aria: "Show inside-out selling",
                        children: "Inside-out · selling"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 576,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 574,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LagoonBox, {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 680 250",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": msg,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: "io-t",
                                    markerWidth: "9",
                                    markerHeight: "9",
                                    refX: "7",
                                    refY: "3.5",
                                    orient: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L8,3.5 L0,7 Z",
                                        fill: TEAL_B
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 581,
                                        columnNumber: 98
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 581,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: "io-g",
                                    markerWidth: "9",
                                    markerHeight: "9",
                                    refX: "7",
                                    refY: "3.5",
                                    orient: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L8,3.5 L0,7 Z",
                                        fill: GOLD_L
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 582,
                                        columnNumber: 98
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 582,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 580,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "34",
                            y: "86",
                            width: "188",
                            height: "86",
                            rx: "14",
                            fill: "rgba(20,184,166,.10)",
                            stroke: TEAL_B,
                            strokeWidth: "1.8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 584,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "128",
                            y: "122",
                            textAnchor: "middle",
                            fontSize: "15",
                            fontWeight: "800",
                            fill: LIGHT,
                            children: "MARKET"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 585,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "128",
                            y: "144",
                            textAnchor: "middle",
                            fontSize: "10.5",
                            fontWeight: "700",
                            fill: DIM,
                            children: "consumers · needs · wants"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 586,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "458",
                            y: "86",
                            width: "188",
                            height: "86",
                            rx: "14",
                            fill: "rgba(227,194,107,.09)",
                            stroke: GOLD_L,
                            strokeWidth: "1.8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 587,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "552",
                            y: "122",
                            textAnchor: "middle",
                            fontSize: "15",
                            fontWeight: "800",
                            fill: LIGHT,
                            children: "ORGANIZATION"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 588,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "552",
                            y: "144",
                            textAnchor: "middle",
                            fontSize: "10.5",
                            fontWeight: "700",
                            fill: DIM,
                            children: "research · strategy · product"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 589,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: outside ? "M448,129 L232,129" : "M232,129 L448,129",
                            fill: "none",
                            strokeWidth: "3",
                            stroke: outside ? TEAL_B : GOLD_L,
                            strokeDasharray: "9 7",
                            markerEnd: outside ? "url(#io-t)" : "url(#io-g)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 590,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            r: "7",
                            fill: outside ? TEAL_B : GOLD_L,
                            stroke: "#0c2124",
                            strokeWidth: "2",
                            initial: false,
                            animate: {
                                cx: outside ? [
                                    436,
                                    244
                                ] : [
                                    244,
                                    436
                                ],
                                opacity: 1
                            },
                            transition: {
                                duration: 1.7,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 592,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                                x: "340",
                                y: outside ? "96" : "170",
                                textAnchor: "middle",
                                fontSize: "12",
                                fontWeight: "800",
                                fill: outside ? TEAL_B : GOLD_L,
                                initial: {
                                    opacity: 0,
                                    y: outside ? 108 : 158
                                },
                                animate: {
                                    opacity: 1,
                                    y: outside ? 96 : 170
                                },
                                exit: {
                                    opacity: 0
                                },
                                children: outside ? "needs · wants · market dynamics →" : "← finished product, pushed out"
                            }, dir, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 597,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 596,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: !outside ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                children: [
                                    "retailers",
                                    "distribution",
                                    "online"
                                ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: 286 + i * 54,
                                                cy: 200,
                                                r: "4",
                                                fill: GOLD_L
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                                lineNumber: 608,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: 286 + i * 54,
                                                y: 224,
                                                textAnchor: "middle",
                                                fontSize: "10",
                                                fontWeight: "700",
                                                fill: DIM,
                                                children: c
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                                lineNumber: 609,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, c, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 607,
                                        columnNumber: 19
                                    }, this))
                            }, "channels", false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 605,
                                columnNumber: 15
                            }, this) : null
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 603,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 579,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 578,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLive, {
                msg: msg
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 617,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[.85rem] leading-relaxed text-[#5f7472]",
                children: "Both are essential and interconnected — marketing cannot succeed without sales, and sales cannot succeed without marketing insights."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 618,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 572,
        columnNumber: 5
    }, this);
}
_s6(InOutMachine, "ZqA9+gTM5BtsR13jic9+KZCyjMU=");
_c14 = InOutMachine;
function bez(p0, p1, p2, p3, t) {
    const u = 1 - t;
    const x = u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0];
    const y = u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1];
    return [
        x,
        y
    ];
}
function samples(p0, p1, p2, p3) {
    return [
        0,
        0.25,
        0.5,
        0.75,
        1
    ].map((t)=>p1[0] === p2[0] && p1[1] === p2[1] ? p0[0] + (p3[0] - p0[0]) * t : bez(p0, p1, p2, p3, t)[0]);
}
function samplesY(p0, p1, p2, p3) {
    return [
        0,
        0.25,
        0.5,
        0.75,
        1
    ].map((t)=>p1[0] === p2[0] && p1[1] === p2[1] ? p0[1] + (p3[1] - p0[1]) * t : bez(p0, p1, p2, p3, t)[1]);
}
const FLOWS = [
    {
        key: "com",
        name: "Communication",
        dir: "industry → market",
        desc: "products, offers and promotions flow from industry to market",
        color: TEAL_B,
        d: "M196,142 C300,54 380,54 484,142",
        c: [
            [
                196,
                142
            ],
            [
                300,
                54
            ],
            [
                380,
                54
            ],
            [
                484,
                142
            ]
        ]
    },
    {
        key: "goods",
        name: "Goods & services",
        dir: "industry → market",
        desc: "tangible offerings travel from industry to market",
        color: TEAL_B,
        d: "M196,178 L484,178",
        c: [
            [
                196,
                178
            ],
            [
                340,
                178
            ],
            [
                340,
                178
            ],
            [
                484,
                178
            ]
        ]
    },
    {
        key: "money",
        name: "Money",
        dir: "market → industry",
        desc: "payment flows from consumers back to sellers",
        color: GOLD_L,
        d: "M484,204 L196,204",
        c: [
            [
                484,
                204
            ],
            [
                340,
                204
            ],
            [
                340,
                204
            ],
            [
                196,
                204
            ]
        ]
    },
    {
        key: "info",
        name: "Information",
        dir: "market → industry",
        desc: "market feedback that helps organizations redesign and refine products",
        color: GOLD_L,
        d: "M484,240 C380,326 300,326 196,240",
        c: [
            [
                484,
                240
            ],
            [
                380,
                326
            ],
            [
                300,
                326
            ],
            [
                196,
                240
            ]
        ]
    }
];
function SystemMachine() {
    _s7();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const stop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "SystemMachine.useCallback[stop]": ()=>setPlaying(false)
    }["SystemMachine.useCallback[stop]"], []);
    useAutoStep(playing, step, FLOWS.length - 1, 1800, setStep, stop);
    const f = FLOWS[step];
    const msg = `Flow ${step + 1} of 4 · ${f.name} (${f.dir}) — ${f.desc}.`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MHead, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftRight$3e$__["ArrowLeftRight"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 657,
                    columnNumber: 20
                }, void 0),
                title: "The marketing system, alive",
                chip: "Lecture 3 · four key flows"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 657,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LagoonBox, {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 680 360",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": "Industry and market exchanging communication, goods and services, money, and information",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: FLOWS.map((fl)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                    id: `ms-${fl.key}`,
                                    markerWidth: "9",
                                    markerHeight: "9",
                                    refX: "7",
                                    refY: "3.5",
                                    orient: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L8,3.5 L0,7 Z",
                                        fill: fl.color
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 662,
                                        columnNumber: 123
                                    }, this)
                                }, fl.key, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 662,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 660,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "28",
                            y: "128",
                            width: "168",
                            height: "104",
                            rx: "16",
                            fill: "rgba(20,184,166,.10)",
                            stroke: TEAL_B,
                            strokeWidth: "1.8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 665,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "112",
                            y: "172",
                            textAnchor: "middle",
                            fontSize: "16",
                            fontWeight: "800",
                            fill: LIGHT,
                            children: "INDUSTRY"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 666,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "112",
                            y: "194",
                            textAnchor: "middle",
                            fontSize: "10.5",
                            fontWeight: "700",
                            fill: DIM,
                            children: "a collection of sellers"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 667,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "484",
                            y: "128",
                            width: "168",
                            height: "104",
                            rx: "16",
                            fill: "rgba(227,194,107,.09)",
                            stroke: GOLD_L,
                            strokeWidth: "1.8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 668,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "568",
                            y: "172",
                            textAnchor: "middle",
                            fontSize: "16",
                            fontWeight: "800",
                            fill: LIGHT,
                            children: "MARKET"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 669,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "568",
                            y: "194",
                            textAnchor: "middle",
                            fontSize: "10.5",
                            fontWeight: "700",
                            fill: DIM,
                            children: "a collection of buyers"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 670,
                            columnNumber: 11
                        }, this),
                        FLOWS.map((fl, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: fl.d,
                                        fill: "none",
                                        stroke: "#3a5350",
                                        strokeWidth: "2",
                                        strokeDasharray: "6 6",
                                        opacity: i === step ? 0.25 : 0.7
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 673,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                        d: fl.d,
                                        fill: "none",
                                        stroke: fl.color,
                                        strokeWidth: i === step ? 3.4 : 2,
                                        opacity: i === step ? 1 : 0.3,
                                        strokeDasharray: "10 7",
                                        markerEnd: `url(#ms-${fl.key})`,
                                        initial: false,
                                        animate: {
                                            opacity: i === step ? 1 : 0.3,
                                            strokeWidth: i === step ? 3.4 : 2
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 674,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, fl.key, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 672,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            r: "7.5",
                            fill: f.color,
                            stroke: "#0c2124",
                            strokeWidth: "2",
                            cx: samples(...f.c)[0],
                            cy: samplesY(...f.c)[0],
                            opacity: 0.95,
                            animate: {
                                cx: samples(...f.c),
                                cy: samplesY(...f.c)
                            },
                            transition: {
                                duration: 2.1,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }, step, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 679,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "340",
                            y: "42",
                            textAnchor: "middle",
                            fontSize: "12.5",
                            fontWeight: "800",
                            fill: TEAL_B,
                            children: "communication ↑ goods & services"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 683,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "340",
                            y: "346",
                            textAnchor: "middle",
                            fontSize: "12.5",
                            fontWeight: "800",
                            fill: GOLD_L,
                            children: "money · information"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 684,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 659,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 658,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: FLOWS.map((fl, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        active: i === step,
                        onClick: ()=>{
                            setPlaying(false);
                            setStep(i);
                        },
                        aria: `Highlight ${fl.name}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mr-1.5 inline-block h-2.5 w-2.5 rounded-full align-middle",
                                style: {
                                    background: fl.color
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 690,
                                columnNumber: 13
                            }, this),
                            fl.name
                        ]
                    }, fl.key, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 689,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 687,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: playing ? "plain" : "teal",
                        onClick: ()=>playing ? setPlaying(false) : (setStep(0), setPlaying(true)),
                        aria: playing ? "Pause the flows" : "Play the four flows",
                        children: [
                            playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 696,
                                columnNumber: 22
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 696,
                                columnNumber: 82
                            }, this),
                            playing ? "Pause" : "Play"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 695,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        onClick: ()=>setStep((s)=>(s + 1) % FLOWS.length),
                        aria: "Next flow",
                        children: [
                            "Next ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "ml-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 698,
                                columnNumber: 105
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 698,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        onClick: ()=>{
                            setPlaying(false);
                            setStep(0);
                        },
                        aria: "Reset to communication",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 699,
                                columnNumber: 109
                            }, this),
                            "Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 699,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 694,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLive, {
                msg: msg
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 701,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 656,
        columnNumber: 5
    }, this);
}
_s7(SystemMachine, "dzv6XnLFIWvkZhrouD9AuoosRIQ=", false, function() {
    return [
        useAutoStep
    ];
});
_c15 = SystemMachine;
/* ============================================================
   CH 7 · marketable — the ten entities explorer
   ============================================================ */ const ENTITIES = [
    {
        name: "Goods",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$watch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Watch$3e$__["Watch"], {
            className: "h-4.5 w-4.5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 711,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0)),
        tag: "physical products",
        lines: [
            "Apple iWatch — tangible products with specific features."
        ]
    },
    {
        name: "Services",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"], {
            className: "h-4.5 w-4.5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 712,
            columnNumber: 29
        }, ("TURBOPACK compile-time value", void 0)),
        tag: "deeds & expertise",
        lines: [
            "B-Blunt, Tony and Guy, local salons — each markets a distinct value proposition: premium vs economical, different experiences.",
            "Every service has unique selling points aimed at different consumer segments."
        ]
    },
    {
        name: "Experiences",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"], {
            className: "h-4.5 w-4.5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 713,
            columnNumber: 32
        }, ("TURBOPACK compile-time value", void 0)),
        tag: "memories, not features",
        lines: [
            "Imagica — marketed not through rides and features but the emotional experience: happiness, joy, creating memories with family.",
            "Sunburn Festival — the overall experience of attending, not specific performances.",
            "Coca-Cola “Make a Friend” — vending machines connecting India and Pakistan; marketing connection and friendship, not the beverage."
        ]
    },
    {
        name: "Financial services",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
            className: "h-4.5 w-4.5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 714,
            columnNumber: 39
        }, ("TURBOPACK compile-time value", void 0)),
        tag: "the card as gateway",
        lines: [
            "American Express doesn't directly sell credit cards — it markets the experience of having Amex: “don't take on the world without it”, “the gateway to great experiences”."
        ]
    },
    {
        name: "Persons",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
            className: "h-4.5 w-4.5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 715,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0)),
        tag: "trust precedes product",
        lines: [
            "The Rock (Dwayne Johnson) launched Papatui on personal brand and trust; Oprah Winfrey launched skincare on personal credibility.",
            "Indian examples: Hrithik Roshan (HRX), Virat Kohli, Kriti Sanon (Hyphen). Consumers buy on initial trust in the individual before the product."
        ]
    },
    {
        name: "Places",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "h-4.5 w-4.5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 716,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0)),
        tag: "destinations as brands",
        lines: [
            "Rajasthan Tourism — “Agar Neha ne Rajasthan dekha, toh Aran bhi dekh hi lega” promoted the place through individuals, revitalizing tourism."
        ]
    },
    {
        name: "Properties",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
            className: "h-4.5 w-4.5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 717,
            columnNumber: 31
        }, ("TURBOPACK compile-time value", void 0)),
        tag: "real estate & status",
        lines: [
            "World Towers (Mumbai) — marketed through name, location and facilities.",
            "Trump Towers (Delhi) — the Trump legacy and premium positioning.",
            "The Camellias (Gurgaon) — ₹85–100 crore per apartment; ambience, views, amenities and status-symbol value."
        ]
    },
    {
        name: "Organizations",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$school$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__School$3e$__["School"], {
            className: "h-4.5 w-4.5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 718,
            columnNumber: 34
        }, ("TURBOPACK compile-time value", void 0)),
        tag: "institutions market themselves",
        lines: [
            "Harvard Business School — marketed through faculty quality, student caliber, legacy, leadership and organizational reputation."
        ]
    },
    {
        name: "Information",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeCheck$3e$__["BadgeCheck"], {
            className: "h-4.5 w-4.5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 719,
            columnNumber: 32
        }, ("TURBOPACK compile-time value", void 0)),
        tag: "rankings as credentials",
        lines: [
            "NIRF rankings — institutes leverage ranking information for marketing.",
            "ACSB accreditation — a marketing credential for business schools."
        ]
    },
    {
        name: "Ideas",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
            className: "h-4.5 w-4.5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 720,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0)),
        tag: "concepts that connect",
        lines: [
            "Zomato's “Hungry” New Year campaign — connecting the idea of celebrating with ordering food, through conceptual connection rather than product promotion.",
            "Blinkit's “Food mangoge, do minute mein dunga” vs Zomato's “Kheer mangoge, kheer dengunge” — combining ideas of daily necessities and finished products."
        ]
    }
];
function EntityGrid() {
    _s8();
    const [sel, setSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [seen, setSeen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "EntityGrid.useState": ()=>new Set([
                0
            ])
    }["EntityGrid.useState"]);
    const pick = (i)=>{
        setSel(i);
        setSeen((s)=>new Set(s).add(i));
    };
    const e = ENTITIES[sel];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MHead, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 730,
                    columnNumber: 20
                }, void 0),
                title: "The ten marketable entities",
                chip: "Lecture 3 · Kotler's shelf"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 730,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3",
                        children: ENTITIES.map((en, i)=>{
                            const on = sel === i;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>pick(i),
                                "aria-pressed": on,
                                className: "flex flex-col items-start gap-1.5 rounded-2xl p-3 text-left transition-transform duration-200 hover:-translate-y-0.5",
                                style: on ? {
                                    background: TEAL_GRAD,
                                    color: "#f0fdfa"
                                } : {
                                    background: "#f2efe7",
                                    color: INK,
                                    border: "1px solid #e3ddcf"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1.5 text-[.86rem] font-extrabold",
                                        children: [
                                            en.icon,
                                            en.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 741,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[.68rem] font-bold uppercase tracking-wider",
                                        style: {
                                            color: on ? "rgba(240,253,250,.8)" : GOLD
                                        },
                                        children: en.tag
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 742,
                                        columnNumber: 17
                                    }, this),
                                    seen.has(i) && !on ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[.62rem] font-black",
                                        style: {
                                            color: TEAL
                                        },
                                        children: "✓ explored"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 743,
                                        columnNumber: 39
                                    }, this) : null
                                ]
                            }, en.name, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 736,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 732,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LagoonBox, {
                        className: "min-h-[16rem]",
                        children: [
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
                                        y: -8
                                    },
                                    transition: {
                                        duration: 0.28
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "flex items-center gap-2 text-xl font-bold",
                                            style: {
                                                color: LIGHT
                                            },
                                            children: [
                                                e.icon,
                                                " ",
                                                e.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 751,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-0.5 text-[.72rem] font-bold uppercase tracking-[.16em]",
                                            style: {
                                                color: GOLD_L
                                            },
                                            children: e.tag
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 752,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "mt-3 grid gap-2.5",
                                            children: e.lines.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "text-[.92rem] leading-relaxed",
                                                    style: {
                                                        color: LIGHT
                                                    },
                                                    children: l
                                                }, l, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                                    lineNumber: 755,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 753,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, e.name, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 750,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 749,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-[.75rem]",
                                style: {
                                    color: DIM
                                },
                                "aria-live": "polite",
                                children: [
                                    "explored ",
                                    seen.size,
                                    " of ",
                                    ENTITIES.length,
                                    " entities"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 760,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 748,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 731,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                    tone: "plain",
                    onClick: ()=>{
                        setSel(0);
                        setSeen(new Set([
                            0
                        ]));
                    },
                    aria: "Reset exploration",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                            className: "mr-1 inline h-3.5 w-3.5",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 764,
                            columnNumber: 107
                        }, this),
                        "Reset"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 764,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 763,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 729,
        columnNumber: 5
    }, this);
}
_s8(EntityGrid, "kz5cqnbYPmGSl8AmEq7asG/YjkQ=");
_c16 = EntityGrid;
/* ============================================================
   CH 8 · need-want-demand — the wallet machine
   ============================================================ */ const FOODS = [
    {
        name: "Pizza",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pizza$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pizza$3e$__["Pizza"], {
            className: "h-5 w-5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 775,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Tandoori chicken",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$drumstick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drumstick$3e$__["Drumstick"], {
            className: "h-5 w-5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 776,
            columnNumber: 37
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        name: "Vada pao",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sandwich$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sandwich$3e$__["Sandwich"], {
            className: "h-5 w-5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 777,
            columnNumber: 29
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const NWD_STEPS = [
    {
        k: "The need",
        d: "Hunger strikes. Needs are basic human requirements — food, shelter, clothing. They pre-exist naturally, and marketers do not create them.",
        afford: -1
    },
    {
        k: "The want",
        d: "The need attaches to objects shaped by marketing, culture and personal preference: pizza, tandoori chicken, vada pao. A want is a need directed toward a specific solution.",
        afford: -1
    },
    {
        k: "₹20 in hand",
        d: "With 20 rupees, demand is limited to vada pao — the want backed by the ability to pay becomes demand; the rest stay wants.",
        afford: 2
    },
    {
        k: "Purchasing power rises",
        d: "With more money, all three options become possible — demand converts wants into actual purchasing behavior.",
        afford: 3
    }
];
function WalletMachine() {
    _s9();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const stop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "WalletMachine.useCallback[stop]": ()=>setPlaying(false)
    }["WalletMachine.useCallback[stop]"], []);
    useAutoStep(playing, step, NWD_STEPS.length - 1, 1900, setStep, stop);
    const s = NWD_STEPS[step];
    const msg = `Step ${step + 1} of 4 · ${s.k} — ${s.d}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MHead, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 796,
                    columnNumber: 20
                }, void 0),
                title: "Hunger, ₹20, and the making of demand",
                chip: "Lecture 3 · the triad in motion"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 796,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LagoonBox, {
                className: "mt-4 min-h-[15rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: "rounded-full px-4 py-1.5 text-[.78rem] font-black uppercase tracking-[.14em]",
                                animate: {
                                    scale: [
                                        1,
                                        1.06,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 2.2,
                                    repeat: Infinity
                                },
                                style: {
                                    background: "rgba(227,194,107,.14)",
                                    border: "1px solid rgba(227,194,107,.45)",
                                    color: GOLD_L
                                },
                                children: "NEED · hunger"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 799,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: step >= 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        opacity: 0,
                                        x: -10
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    className: "text-lg font-black",
                                    style: {
                                        color: DIM
                                    },
                                    "aria-hidden": true,
                                    children: "→"
                                }, "arrow", false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 806,
                                    columnNumber: 15
                                }, this) : null
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 804,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                className: "rounded-full px-4 py-1.5 text-[.78rem] font-black uppercase tracking-[.14em]",
                                style: {
                                    background: "rgba(20,184,166,.16)",
                                    border: "1px solid rgba(20,184,166,.45)",
                                    color: LIGHT
                                },
                                children: step >= 3 ? "wallet · purchasing power ↑" : step === 2 ? "wallet · ₹20" : step === 1 ? "wants forming" : "wallet · empty"
                            }, `w-${step}`, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 810,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 798,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid gap-2.5 sm:grid-cols-3",
                        children: FOODS.map((f, i)=>{
                            const afford = s.afford === 3 || s.afford === i;
                            const shown = step >= 1;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: false,
                                animate: {
                                    opacity: shown ? afford ? 1 : 0.32 : 0.18,
                                    scale: afford && shown ? 1 : 0.97
                                },
                                className: "flex flex-col items-center gap-1 rounded-2xl p-3.5 text-center",
                                style: afford && shown ? {
                                    background: "rgba(20,184,166,.16)",
                                    border: `1.5px solid ${TEAL_B}`
                                } : {
                                    background: "rgba(255,255,255,.03)",
                                    border: "1.5px dashed rgba(159,188,180,.4)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: afford && shown ? LIGHT : DIM
                                        },
                                        children: f.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 826,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.86rem] font-extrabold",
                                        style: {
                                            color: shown ? LIGHT : DIM
                                        },
                                        children: f.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 827,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.68rem] font-bold uppercase tracking-wider",
                                        style: {
                                            color: afford && shown ? "#7ee3d4" : DIM
                                        },
                                        children: !shown ? "hidden" : afford ? "demand ✓" : "want only"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 828,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, f.name, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 821,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 816,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 0.25
                            },
                            className: "mt-4 min-h-[3rem] max-w-2xl text-[.92rem] leading-relaxed",
                            style: {
                                color: LIGHT
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: GOLD_L,
                                        fontWeight: 800
                                    },
                                    children: [
                                        s.k,
                                        ". "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 838,
                                    columnNumber: 13
                                }, this),
                                s.d
                            ]
                        }, step, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 836,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 835,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 797,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: playing ? "plain" : "teal",
                        onClick: ()=>playing ? setPlaying(false) : (setStep(0), setPlaying(true)),
                        aria: playing ? "Pause the triad" : "Play the triad",
                        children: [
                            playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 844,
                                columnNumber: 22
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 844,
                                columnNumber: 82
                            }, this),
                            playing ? "Pause" : "Play"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 843,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        onClick: ()=>setStep((v)=>Math.min(v + 1, NWD_STEPS.length - 1)),
                        aria: "Next step",
                        children: [
                            "Next ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "ml-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 846,
                                columnNumber: 120
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 846,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        onClick: ()=>{
                            setPlaying(false);
                            setStep(0);
                        },
                        aria: "Reset the triad",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 847,
                                columnNumber: 102
                            }, this),
                            "Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 847,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 842,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLive, {
                msg: msg
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 849,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 795,
        columnNumber: 5
    }, this);
}
_s9(WalletMachine, "dzv6XnLFIWvkZhrouD9AuoosRIQ=", false, function() {
    return [
        useAutoStep
    ];
});
_c17 = WalletMachine;
/* ============================================================
   CH 9 · demand-states — need layers + state explorer
   ============================================================ */ const NEED_LAYERS = [
    {
        k: "Stated",
        v: "“I want a car”",
        d: "What the customer explicitly asks for."
    },
    {
        k: "Real",
        v: "…with low operating costs",
        d: "The meaning underneath the stated need — not merely a low price."
    },
    {
        k: "Unstated",
        v: "great service and a warranty",
        d: "Expected, but the customer doesn't always mention it upfront."
    },
    {
        k: "Delight",
        v: "a built-in GPS",
        d: "Never explicitly requested — yet it creates satisfaction."
    },
    {
        k: "Secret",
        v: "a luxury car as a status symbol",
        d: "The intangible, often unspoken desire the customer keeps to themselves."
    }
];
function NeedLayers() {
    _s10();
    const [layer, setLayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const l = NEED_LAYERS[layer];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MHead, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 871,
                    columnNumber: 20
                }, void 0),
                title: "Five needs under one car",
                chip: "Lecture 3 · types of consumer needs"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 871,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: NEED_LAYERS.map((nl, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        active: i === layer,
                        onClick: ()=>setLayer(i),
                        aria: `Show the ${nl.k} need`,
                        children: nl.k
                    }, nl.k, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 874,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 872,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LagoonBox, {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        "aria-hidden": true,
                        children: NEED_LAYERS.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: "h-2 flex-1 rounded-full",
                                initial: false,
                                animate: {
                                    opacity: i <= layer ? 1 : 0.25
                                },
                                style: {
                                    background: i === layer ? GOLD_GRAD : TEAL_GRAD
                                }
                            }, i, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 880,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 878,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 0.24
                            },
                            className: "mt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.7rem] font-extrabold uppercase tracking-[.18em]",
                                    style: {
                                        color: GOLD_L
                                    },
                                    children: [
                                        l.k,
                                        " need"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 887,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xl font-bold",
                                    style: {
                                        color: LIGHT
                                    },
                                    children: l.v
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 888,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[.9rem] leading-relaxed",
                                    style: {
                                        color: DIM
                                    },
                                    children: l.d
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 889,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, l.k, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 886,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 885,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-[.75rem]",
                        style: {
                            color: DIM
                        },
                        children: "The deeper the layer, the less the customer says it out loud."
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 892,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 877,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLive, {
                msg: `${l.k} need — ${l.v}. ${l.d}`
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 894,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 870,
        columnNumber: 5
    }, this);
}
_s10(NeedLayers, "ZaHbXgPXqZ63IXJDfGtgswHzk7o=");
_c18 = NeedLayers;
const DEMAND_STATES = [
    {
        name: "Negative",
        def: "Consumers actively avoid the product — and may even pay to prevent it.",
        ex: [
            "dentist appointments",
            "purchasing ad-free music subscriptions"
        ],
        rose: true
    },
    {
        name: "Non-existent",
        def: "Consumers are unaware of, or uninterested in, the product.",
        ex: [
            "BlackBerry Key2 — limited consumer awareness"
        ]
    },
    {
        name: "Latent",
        def: "A strong underlying need that current products cannot satisfy.",
        ex: [
            "wanting better smartphone cameras than currently available"
        ]
    },
    {
        name: "Declining",
        def: "Products purchased less frequently over time, as consumers move to newer alternatives.",
        ex: [
            "floppy disks",
            "CDs",
            "LCDs",
            "older technology-based products"
        ]
    },
    {
        name: "Irregular",
        def: "Seasonal or fluctuating demand patterns.",
        ex: [
            "air conditioners and coolers",
            "seasonal fruits and foods"
        ]
    },
    {
        name: "Full",
        def: "Products consistently purchased at adequate marketplace levels.",
        ex: [
            "over-the-counter (OTC) drugs — always in demand"
        ]
    },
    {
        name: "Overfull",
        def: "Demand exceeds available supply.",
        ex: [
            "bread and milk in grocery stores",
            "regularly sold-out items"
        ]
    },
    {
        name: "Unwholesome",
        def: "Products with demand but socially undesirable consequences.",
        ex: [
            "cigarettes",
            "tobacco",
            "alcohol"
        ],
        rose: true
    }
];
function DemandExplorer() {
    _s11();
    const [sel, setSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const s = DEMAND_STATES[sel];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MHead, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 915,
                    columnNumber: 20
                }, void 0),
                title: "The eight demand states",
                chip: "Lecture 3 · click a state"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 915,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4",
                children: DEMAND_STATES.map((d, i)=>{
                    const on = i === sel;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setSel(i),
                        "aria-pressed": on,
                        className: "rounded-2xl p-3 text-left transition-transform duration-200 hover:-translate-y-0.5",
                        style: on ? {
                            background: d.rose ? "linear-gradient(135deg,#b95c74,#9f3d54)" : TEAL_GRAD,
                            color: "#f7fbfa"
                        } : {
                            background: "#f2efe7",
                            color: INK,
                            border: "1px solid #e3ddcf"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[.6rem] font-black tracking-widest",
                                style: {
                                    color: on ? "rgba(255,255,255,.75)" : GOLD
                                },
                                children: String(i + 1).padStart(2, "0")
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 925,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.92rem] font-extrabold leading-tight",
                                children: d.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 926,
                                columnNumber: 15
                            }, this)
                        ]
                    }, d.name, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 920,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 916,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LagoonBox, {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
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
                            opacity: 0
                        },
                        transition: {
                            duration: 0.24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-bold",
                                style: {
                                    color: LIGHT
                                },
                                children: [
                                    s.name,
                                    " demand"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 934,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 max-w-2xl text-[.95rem] leading-relaxed",
                                style: {
                                    color: LIGHT
                                },
                                children: s.def
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 935,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: s.ex.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full px-3 py-1 text-[.8rem] font-bold",
                                        style: {
                                            background: s.rose ? "rgba(159,61,84,.28)" : "rgba(20,184,166,.14)",
                                            border: `1px solid ${s.rose ? "rgba(159,61,84,.5)" : "rgba(20,184,166,.4)"}`,
                                            color: LIGHT
                                        },
                                        children: x
                                    }, x, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 938,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 936,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.name, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 933,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 932,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 931,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLive, {
                msg: `${s.name} demand — ${s.def} Examples: ${s.ex.join(", ")}.`
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 947,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 914,
        columnNumber: 5
    }, this);
}
_s11(DemandExplorer, "2rLuJwfOrg0pnQg2vcdw4WWDrco=");
_c19 = DemandExplorer;
/* ============================================================
   CH 10 · closed-system — the mind machine
   ============================================================ */ const INTERRUPTS = [
    "Promotional offer",
    "Celebrity endorsement",
    "Limited-time deal",
    "Exclusive collection"
];
function MindMachine() {
    _s12();
    const [interest, setInterest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [log, setLog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("The mind recycles familiar options, known brands, established habits. Interest 0 — the system is closed.");
    const stop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "MindMachine.useCallback[stop]": ()=>setPlaying(false)
    }["MindMachine.useCallback[stop]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MindMachine.useEffect": ()=>{
            if (!playing || interest >= 100) return;
            const t = window.setTimeout({
                "MindMachine.useEffect.t": ()=>{
                    const next = Math.min(100, interest + 2);
                    setInterest(next);
                    if (next >= 100) setPlaying(false);
                }
            }["MindMachine.useEffect.t"], 42);
            return ({
                "MindMachine.useEffect": ()=>window.clearTimeout(t)
            })["MindMachine.useEffect"];
        }
    }["MindMachine.useEffect"], [
        playing,
        interest
    ]);
    const state = interest >= 67 ? "OPEN" : interest >= 34 ? "STIRRING" : "CLOSED";
    const open = state === "OPEN";
    const t = interest / 100;
    const px = 70 + t * (660 - 70);
    const py = 280 - t * (280 - 52);
    const mcx = Math.max(96, Math.min(634, px));
    const mcy = Math.max(88, Math.min(244, py));
    function interrupt(name) {
        setPlaying(false);
        setInterest((v)=>{
            const nv = Math.min(100, v + 22);
            setLog(`Interrupt — ${name}: the habitual loop cracks, openness to new possibilities grows. Interest ${nv}.`);
            return nv;
        });
    }
    const msg = `Interest ${interest} · Openness ${interest} — the linear law holds. Mind: ${state}.`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MHead, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 993,
                    columnNumber: 20
                }, void 0),
                title: "Open the closed system",
                chip: "Lecture 4 · interest × openness"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 993,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex min-w-[230px] flex-1 flex-col gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-baseline justify-between text-[.78rem] font-extrabold uppercase tracking-wider",
                                style: {
                                    color: GOLD
                                },
                                children: [
                                    "Slide the consumer's interest ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono-warm text-[.95rem]",
                                        style: {
                                            color: INK
                                        },
                                        children: interest
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 997,
                                        columnNumber: 48
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 996,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: 0,
                                max: 100,
                                value: interest,
                                onChange: (e)=>{
                                    setPlaying(false);
                                    setInterest(Number(e.target.value));
                                },
                                "aria-label": "Interest level of the consumer",
                                className: "w-full accent-[#0f766e]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 999,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 995,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                tone: playing ? "plain" : "teal",
                                onClick: ()=>playing ? setPlaying(false) : (setInterest(0), setPlaying(true)),
                                aria: playing ? "Pause the opening" : "Play the opening",
                                children: [
                                    playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                        className: "mr-1 inline h-3.5 w-3.5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 1004,
                                        columnNumber: 24
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "mr-1 inline h-3.5 w-3.5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 1004,
                                        columnNumber: 84
                                    }, this),
                                    playing ? "Pause" : "Play"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1003,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                tone: "plain",
                                onClick: ()=>{
                                    setPlaying(false);
                                    setInterest(0);
                                    setLog("Reset — the mind is closed again, recycling its familiar options.");
                                },
                                aria: "Reset the mind",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "mr-1 inline h-3.5 w-3.5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 1007,
                                        columnNumber: 13
                                    }, this),
                                    "Reset"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1006,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1002,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 994,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LagoonBox, {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 700 330",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": `Interest-openness chart with the consumer mind at ${state}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "70",
                            y1: "292",
                            x2: "672",
                            y2: "292",
                            stroke: "#3a5350",
                            strokeWidth: "1.6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1013,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "70",
                            y1: "292",
                            x2: "70",
                            y2: "40",
                            stroke: "#3a5350",
                            strokeWidth: "1.6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1014,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "660",
                            y: "316",
                            textAnchor: "end",
                            fontSize: "11",
                            fontWeight: "700",
                            fill: DIM,
                            children: "openness to receive information →"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1015,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "44",
                            y: "170",
                            fontSize: "11",
                            fontWeight: "700",
                            fill: DIM,
                            transform: "rotate(-90 44 170)",
                            textAnchor: "middle",
                            children: "interest ↑"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1016,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "70",
                            y1: "280",
                            x2: "660",
                            y2: "52",
                            stroke: "#3a5350",
                            strokeWidth: "1.4",
                            strokeDasharray: "6 7",
                            opacity: "0.75"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1017,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "330",
                            y: "86",
                            fontSize: "11",
                            fontWeight: "700",
                            fill: DIM,
                            transform: "rotate(-15 330 86)",
                            children: "the linear law — interest and openness rise together"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1018,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                            x1: "70",
                            y1: "280",
                            x2: "660",
                            y2: "52",
                            stroke: TEAL_B,
                            strokeWidth: "3",
                            strokeLinecap: "round",
                            initial: false,
                            animate: {
                                pathLength: t
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1019,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            cx: px,
                            cy: py,
                            r: "6",
                            fill: GOLD_L,
                            stroke: "#0c2124",
                            strokeWidth: "2",
                            initial: false
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1021,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: mcx,
                            cy: mcy,
                            r: "42",
                            fill: open ? "rgba(20,184,166,.20)" : interest >= 34 ? "rgba(20,184,166,.10)" : "rgba(12,33,36,.75)",
                            stroke: open ? GOLD_L : "#3a5350",
                            strokeWidth: open ? 2.4 : 1.6
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1023,
                            columnNumber: 11
                        }, this),
                        !open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                            style: {
                                transformBox: "fill-box",
                                transformOrigin: "center"
                            },
                            animate: {
                                rotate: 360
                            },
                            transition: {
                                duration: 7,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: mcx,
                                cy: mcy,
                                r: "24",
                                fill: "none",
                                stroke: interest >= 34 ? GOLD_L : "#54706b",
                                strokeWidth: "2.4",
                                strokeDasharray: "46 22"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1027,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1026,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: mcx,
                                    cy: mcy,
                                    r: "24",
                                    fill: "none",
                                    stroke: GOLD_L,
                                    strokeWidth: "2.4",
                                    strokeDasharray: "14 12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1031,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                    d: `M${mcx - 16},${mcy - 8} L${mcx - 4},${mcy - 1} L${mcx - 12},${mcy + 9} L${mcx + 4},${mcy + 15}`,
                                    fill: "none",
                                    stroke: GOLD_L,
                                    strokeWidth: "2.4",
                                    strokeLinecap: "round",
                                    initial: {
                                        pathLength: 0
                                    },
                                    animate: {
                                        pathLength: 1
                                    },
                                    transition: {
                                        duration: 0.5
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1032,
                                    columnNumber: 15
                                }, this),
                                [
                                    0,
                                    60,
                                    120,
                                    180,
                                    240,
                                    300
                                ].map((a)=>{
                                    const rad = a * Math.PI / 180;
                                    const x1 = mcx + 48 * Math.cos(rad), y1 = mcy + 48 * Math.sin(rad);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: x1,
                                        y1: y1,
                                        x2: mcx + 58 * Math.cos(rad),
                                        y2: mcy + 58 * Math.sin(rad),
                                        stroke: GOLD_L,
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        opacity: "0.85"
                                    }, a, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 1038,
                                        columnNumber: 24
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1030,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: mcx,
                            y: mcy + 68,
                            textAnchor: "middle",
                            fontSize: "12",
                            fontWeight: "800",
                            fill: open ? GOLD_L : DIM,
                            children: state
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1042,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1012,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1011,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "self-center text-[.72rem] font-extrabold uppercase tracking-[.14em]",
                        style: {
                            color: GOLD
                        },
                        children: "Interrupts"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1046,
                        columnNumber: 9
                    }, this),
                    INTERRUPTS.map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                            tone: "dark",
                            onClick: ()=>interrupt(name),
                            aria: `Deliver the interrupt: ${name}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    className: "mr-1 inline h-3.5 w-3.5",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1049,
                                    columnNumber: 13
                                }, this),
                                name
                            ]
                        }, name, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1048,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1045,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLive, {
                msg: `${log} ${msg}`
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1053,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 992,
        columnNumber: 5
    }, this);
}
_s12(MindMachine, "h8FY9YVU4N53yz9c2r2oBBL5Kjk=");
_c20 = MindMachine;
/* ============================================================
   CH 11 · biz-value — the four-lever machine
   ============================================================ */ const LEVERS = [
    {
        key: "pricing",
        label: "Pricing",
        d: "price the offering"
    },
    {
        key: "product",
        label: "Product",
        d: "develop the product"
    },
    {
        key: "promotion",
        label: "Promotion",
        d: "communicate the value"
    },
    {
        key: "distribution",
        label: "Distribution",
        d: "put it within reach"
    }
];
function LeverMachine() {
    _s13();
    const [on, setOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const count = LEVERS.filter((l)=>on[l.key]).length;
    const stop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "LeverMachine.useCallback[stop]": ()=>setPlaying(false)
    }["LeverMachine.useCallback[stop]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeverMachine.useEffect": ()=>{
            if (!playing) return;
            const next = LEVERS.find({
                "LeverMachine.useEffect.next": (l)=>!on[l.key]
            }["LeverMachine.useEffect.next"]);
            if (!next) return;
            const isLast = !LEVERS.some({
                "LeverMachine.useEffect": (l)=>l.key !== next.key && !on[l.key]
            }["LeverMachine.useEffect"]);
            const t = window.setTimeout({
                "LeverMachine.useEffect.t": ()=>{
                    setOn({
                        "LeverMachine.useEffect.t": (o)=>({
                                ...o,
                                [next.key]: true
                            })
                    }["LeverMachine.useEffect.t"]);
                    if (isLast) setPlaying(false);
                }
            }["LeverMachine.useEffect.t"], 620);
            return ({
                "LeverMachine.useEffect": ()=>window.clearTimeout(t)
            })["LeverMachine.useEffect"];
        }
    }["LeverMachine.useEffect"], [
        playing,
        on
    ]);
    const msg = count === 0 ? "No levers pulled — without a top line there is no bottom line." : count === LEVERS.length ? "Pricing, product, promotion and distribution working together — creating consumer demand and driving sales." : `${count} of 4 levers on — demand builds with every component marketing adds.`;
    const bar = (label, sub, frac, bg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-baseline justify-between text-[.78rem] font-bold",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: LIGHT
                            },
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1095,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[.68rem]",
                            style: {
                                color: DIM
                            },
                            children: sub
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1096,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1094,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1 h-4 w-full overflow-hidden rounded-full",
                    style: {
                        background: "rgba(255,255,255,.06)"
                    },
                    "aria-hidden": true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "h-full rounded-full",
                        style: {
                            background: bg
                        },
                        initial: false,
                        animate: {
                            width: `${Math.round(frac * 100)}%`
                        },
                        transition: {
                            type: "spring",
                            stiffness: 130,
                            damping: 22
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1099,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1098,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 1093,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MHead, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1106,
                    columnNumber: 20
                }, void 0),
                title: "The marketer's four levers",
                chip: "Lecture 4 · the role of marketing"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: LEVERS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        active: !!on[l.key],
                        onClick: ()=>{
                            setPlaying(false);
                            setOn((o)=>({
                                    ...o,
                                    [l.key]: !o[l.key]
                                }));
                        },
                        aria: `${on[l.key] ? "Switch off" : "Switch on"} ${l.label}`,
                        children: [
                            l.label,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 font-normal opacity-80",
                                children: [
                                    "· ",
                                    l.d
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1110,
                                columnNumber: 23
                            }, this)
                        ]
                    }, l.key, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1109,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LagoonBox, {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4",
                        children: [
                            bar("Consumer demand", "created by marketing", count / 4, TEAL_GRAD),
                            bar("Top line", "products sold × selling price", count / 4, "linear-gradient(135deg,#7ee3d4,#14b8a6)"),
                            bar("Bottom line", "revenue − total costs", count / 4, GOLD_GRAD)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-[.72rem]",
                        style: {
                            color: DIM
                        },
                        children: "schematic — the point is the dependency chain, not the decimals"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: playing ? "plain" : "teal",
                        onClick: ()=>playing ? setPlaying(false) : (setOn({}), setPlaying(true)),
                        aria: playing ? "Pause the levers" : "Play all four levers",
                        children: [
                            playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1124,
                                columnNumber: 22
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1124,
                                columnNumber: 82
                            }, this),
                            playing ? "Pause" : "Play all four"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        onClick: ()=>{
                            setPlaying(false);
                            setOn({});
                        },
                        aria: "Reset the levers",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1126,
                                columnNumber: 102
                            }, this),
                            "Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLive, {
                msg: msg
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 1105,
        columnNumber: 5
    }, this);
}
_s13(LeverMachine, "izDppBI5uMka3iQVmkLDkgHHsJU=");
_c21 = LeverMachine;
/* ============================================================
   CH 12 · chai-value — the context machine
   ============================================================ */ const CHAIS = [
    {
        key: "road",
        price: "₹20",
        place: "Roadside tea",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
            className: "h-5 w-5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 1138,
            columnNumber: 61
        }, ("TURBOPACK compile-time value", void 0)),
        why: "Economical option, suitable for casual consumption."
    },
    {
        key: "cafe",
        price: "₹250",
        place: "Café tea",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
            className: "h-5 w-5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 1139,
            columnNumber: 58
        }, ("TURBOPACK compile-time value", void 0)),
        why: "Preferred for business meetings and professional settings — improved ambiance, impression management."
    },
    {
        key: "air",
        price: "₹500",
        place: "Airport tea",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"], {
            className: "h-5 w-5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 1140,
            columnNumber: 60
        }, ("TURBOPACK compile-time value", void 0)),
        why: "Selected when no other options are available — or while traveling."
    }
];
function ChaiMachine() {
    _s14();
    const [sel, setSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const stop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "ChaiMachine.useCallback[stop]": ()=>setPlaying(false)
    }["ChaiMachine.useCallback[stop]"], []);
    useAutoStep(playing, sel, CHAIS.length - 1, 2000, setSel, stop);
    const c = CHAIS[sel];
    const msg = `${c.place}, ${c.price} — ${c.why} Same product, different perceived value.`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MHead, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1152,
                    columnNumber: 20
                }, void 0),
                title: "Same cup, three contexts",
                chip: "Lecture 5 · the chai example"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-2 sm:grid-cols-3",
                children: CHAIS.map((ch, i)=>{
                    const on = i === sel;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            setPlaying(false);
                            setSel(i);
                        },
                        "aria-pressed": on,
                        className: "flex items-center gap-3 rounded-2xl p-3.5 text-left transition-transform duration-200 hover:-translate-y-0.5",
                        style: on ? {
                            background: TEAL_GRAD,
                            color: "#f0fdfa"
                        } : {
                            background: "#f2efe7",
                            color: INK,
                            border: "1px solid #e3ddcf"
                        },
                        children: [
                            ch.icon,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[.9rem] font-extrabold",
                                        children: ch.place
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 1162,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block font-mono-warm text-[.78rem] font-bold",
                                        style: {
                                            color: on ? "#c9f7ec" : GOLD
                                        },
                                        children: ch.price
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 1163,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1161,
                                columnNumber: 15
                            }, this)
                        ]
                    }, ch.key, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1157,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LagoonBox, {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-center gap-6 py-2 md:gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 150 150",
                            className: "w-28 shrink-0 md:w-36",
                            role: "img",
                            "aria-label": "The same cup of tea in every context",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                    d: "M40,58 L48,120 C49,128 101,128 102,120 L110,58 Z",
                                    fill: "rgba(20,184,166,.16)",
                                    stroke: TEAL_B,
                                    strokeWidth: "2.4",
                                    initial: false,
                                    animate: {
                                        scale: [
                                            1,
                                            1.03,
                                            1
                                        ]
                                    },
                                    transition: {
                                        duration: 2.4,
                                        repeat: Infinity
                                    },
                                    style: {
                                        transformBox: "fill-box",
                                        transformOrigin: "center"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M110,66 C126,66 126,88 108,90",
                                    fill: "none",
                                    stroke: TEAL_B,
                                    strokeWidth: "2.4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1174,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M62,44 C58,36 66,32 62,24",
                                    fill: "none",
                                    stroke: GOLD_L,
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    opacity: "0.9"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M78,46 C74,38 82,34 78,26",
                                    fill: "none",
                                    stroke: GOLD_L,
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    opacity: "0.65"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M94,44 C90,36 98,32 94,24",
                                    fill: "none",
                                    stroke: GOLD_L,
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    opacity: "0.9"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "75",
                                    y: "144",
                                    textAnchor: "middle",
                                    fontSize: "9.5",
                                    fontWeight: "700",
                                    fill: DIM,
                                    children: "the product never changes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1178,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1171,
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
                                className: "min-w-[220px] flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.7rem] font-extrabold uppercase tracking-[.18em]",
                                        style: {
                                            color: GOLD_L
                                        },
                                        children: [
                                            "perceived value · context ",
                                            sel + 1,
                                            " of 3"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 1183,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-3xl font-black",
                                        style: {
                                            color: LIGHT
                                        },
                                        children: c.price
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 1184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-lg font-bold",
                                        style: {
                                            color: LIGHT
                                        },
                                        children: c.place
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 1185,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 max-w-sm text-[.92rem] leading-relaxed",
                                        style: {
                                            color: DIM
                                        },
                                        children: c.why
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 1186,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, c.key, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1181,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1180,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1170,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: playing ? "plain" : "teal",
                        onClick: ()=>playing ? setPlaying(false) : (setSel(0), setPlaying(true)),
                        aria: playing ? "Pause the contexts" : "Play the three contexts",
                        children: [
                            playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1193,
                                columnNumber: 22
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1193,
                                columnNumber: 82
                            }, this),
                            playing ? "Pause" : "Play"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        onClick: ()=>{
                            setPlaying(false);
                            setSel((s)=>(s + 1) % CHAIS.length);
                        },
                        aria: "Next context",
                        children: [
                            "Next ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                className: "ml-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1195,
                                columnNumber: 131
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        onClick: ()=>{
                            setPlaying(false);
                            setSel(0);
                        },
                        aria: "Reset to roadside chai",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1196,
                                columnNumber: 108
                            }, this),
                            "Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1196,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLive, {
                msg: msg
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1198,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 1151,
        columnNumber: 5
    }, this);
}
_s14(ChaiMachine, "vEb0ViOMZD8cwUTNN406bc+TB7w=", false, function() {
    return [
        useAutoStep
    ];
});
_c22 = ChaiMachine;
/* ============================================================
   CH 13 · cpv-formula — the benefits−costs balance
   ============================================================ */ const CPV_BEN = [
    {
        key: "psy",
        label: "Psychological",
        ex: "the jacket keeping you warm through winter"
    },
    {
        key: "fun",
        label: "Functional",
        ex: "pockets, hoodie, wind resistance"
    },
    {
        key: "eco",
        label: "Economic",
        ex: "the monetary value and savings"
    },
    {
        key: "xpsy",
        label: "Extended psychological",
        ex: "status — how others perceive your choice"
    }
];
const CPV_COST = [
    {
        key: "price",
        label: "Direct price",
        ex: "the money actually paid"
    },
    {
        key: "time",
        label: "Time",
        ex: "getting there and back"
    },
    {
        key: "effort",
        label: "Effort",
        ex: "the energy expended"
    },
    {
        key: "stress",
        label: "Psychological stress",
        ex: "worrying about parking, traffic"
    },
    {
        key: "dispose",
        label: "Disposal",
        ex: "after-sales, getting rid of it"
    }
];
function ScaleMachine() {
    _s15();
    const [ben, setBen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        psy: true,
        fun: true,
        eco: true,
        xpsy: true
    });
    const [cost, setCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        price: true,
        time: true,
        effort: false,
        stress: false,
        dispose: false
    });
    const [log, setLog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Four benefits on the left pan, price and time on the right — CPV starts positive. Toggle chips to move the scale.");
    const bCount = CPV_BEN.filter((b)=>ben[b.key]).length;
    const cCount = CPV_COST.filter((c)=>cost[c.key]).length;
    const net = bCount - cCount;
    const tilt = Math.max(-14, Math.min(14, -net * 5));
    function toggle(kind, key) {
        if (kind === "b") setBen((o)=>({
                ...o,
                [key]: !o[key]
            }));
        else setCost((o)=>({
                ...o,
                [key]: !o[key]
            }));
        setLog(`Toggled ${key} — benefits ${bCount} − costs ${cCount}, recalculating…`);
    }
    function scenario(kind) {
        if (kind === "store") {
            setCost({
                price: true,
                time: true,
                effort: true,
                stress: true,
                dispose: false
            });
            setLog("Walk to the store — the ice cream is cheaper, but travel time, effort and parking stress pile onto the cost pan.");
        } else {
            setCost({
                price: true,
                time: false,
                effort: false,
                stress: false,
                dispose: false
            });
            setLog("Order by app — a higher money cost, but no travel time, no parking, home convenience: the abstract costs collapse and perceived value jumps.");
        }
    }
    const msg = `Benefits ${bCount} − Costs ${cCount} = CPV ${net >= 0 ? "+" : ""}${net}. ${net > 0 ? "Value tips toward the customer." : net < 0 ? "Value tips away — the customer walks." : "Level scales — a fair trade."}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MHead, {
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1247,
                    columnNumber: 20
                }, void 0),
                title: "The CPV balance",
                chip: "Lecture 5 · benefits − costs"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[.78rem] font-extrabold uppercase tracking-[.14em]",
                style: {
                    color: TEAL
                },
                children: "Benefits — toggle on/off"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-wrap gap-2",
                children: CPV_BEN.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "teal",
                        active: !ben[b.key],
                        onClick: ()=>toggle("b", b.key),
                        aria: `${ben[b.key] ? "Remove" : "Add"} the ${b.label} benefit`,
                        children: [
                            ben[b.key] ? "✓ " : "",
                            b.label
                        ]
                    }, b.key, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1251,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[.78rem] font-extrabold uppercase tracking-[.14em]",
                style: {
                    color: GOLD
                },
                children: "Costs — toggle on/off"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-wrap gap-2",
                children: CPV_COST.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "gold",
                        active: !cost[c.key],
                        onClick: ()=>toggle("c", c.key),
                        aria: `${cost[c.key] ? "Remove" : "Add"} the ${c.label} cost`,
                        children: [
                            cost[c.key] ? "✓ " : "",
                            c.label
                        ]
                    }, c.key, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1259,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LagoonBox, {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 640 300",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": `Balance scale: ${bCount} benefits versus ${cCount} costs, CPV ${net >= 0 ? "+" : ""}${net}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "320,148 300,236 340,236",
                            fill: "rgba(20,184,166,.18)",
                            stroke: TEAL_B,
                            strokeWidth: "2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1266,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "262",
                            y: "236",
                            width: "116",
                            height: "10",
                            rx: "5",
                            fill: "#3a5350"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1267,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                            animate: {
                                rotate: tilt
                            },
                            transition: {
                                type: "spring",
                                stiffness: 90,
                                damping: 14
                            },
                            style: {
                                transformBox: "fill-box",
                                transformOrigin: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "104",
                                    y: "142",
                                    width: "432",
                                    height: "9",
                                    rx: "4.5",
                                    fill: LIGHT
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1270,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "124",
                                    y1: "151",
                                    x2: "124",
                                    y2: "196",
                                    stroke: TEAL_B,
                                    strokeWidth: "2.2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1271,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M84,196 L164,196 L124,238 Z",
                                    fill: "rgba(20,184,166,.20)",
                                    stroke: TEAL_B,
                                    strokeWidth: "2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "124",
                                    y: "222",
                                    textAnchor: "middle",
                                    fontSize: "13",
                                    fontWeight: "800",
                                    fill: LIGHT,
                                    children: [
                                        "B ",
                                        bCount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1273,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "516",
                                    y1: "151",
                                    x2: "516",
                                    y2: "196",
                                    stroke: GOLD_L,
                                    strokeWidth: "2.2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1274,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M476,196 L556,196 L516,238 Z",
                                    fill: "rgba(227,194,107,.14)",
                                    stroke: GOLD_L,
                                    strokeWidth: "2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "516",
                                    y: "222",
                                    textAnchor: "middle",
                                    fontSize: "13",
                                    fontWeight: "800",
                                    fill: LIGHT,
                                    children: [
                                        "C ",
                                        cCount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1276,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1268,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "320",
                            cy: "146",
                            r: "7",
                            fill: GOLD_L
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1278,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "320",
                            y: "286",
                            textAnchor: "middle",
                            fontSize: "14",
                            fontWeight: "800",
                            fill: LIGHT,
                            children: [
                                "CPV = B − C = ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                                    fill: net >= 0 ? GOLD_L : "#e89db0",
                                    children: [
                                        net >= 0 ? "+" : "",
                                        net
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1280,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1279,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1265,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "teal",
                        onClick: ()=>scenario("store"),
                        aria: "Run the store-visit scenario",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1285,
                                columnNumber: 97
                            }, this),
                            "Ice cream: walk to the store"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "gold",
                        onClick: ()=>scenario("app"),
                        aria: "Run the delivery-app scenario",
                        children: "Ice cream: order by app"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "plain",
                        onClick: ()=>{
                            setBen({
                                psy: true,
                                fun: true,
                                eco: true,
                                xpsy: true
                            });
                            setCost({
                                price: true,
                                time: true,
                                effort: false,
                                stress: false,
                                dispose: false
                            });
                            setLog("Reset — benefits 4, costs 2 (price and time).");
                        },
                        aria: "Reset the balance",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "mr-1 inline h-3.5 w-3.5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1287,
                                columnNumber: 271
                            }, this),
                            "Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1287,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MLive, {
                msg: `${msg} ${log}`
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1289,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 1246,
        columnNumber: 5
    }, this);
}
_s15(ScaleMachine, "QXC8K4sQNT9rONXMBHUr9j9CGHo=");
_c23 = ScaleMachine;
/* ============================================================
   EXPORTED SECTION 1 · why-mktg  (Lecture 1)
   ============================================================ */ const OBJECTIVES = [
    "How companies identify and analyze customer needs",
    "Product and service design strategies",
    "Pricing strategies and value determination",
    "Brand building and development",
    "Effective communication and marketing messaging",
    "Methods for establishing and maintaining long-term customer relationships"
];
const EVERYDAY = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
            className: "h-4 w-4",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 1308,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        t: "Mobile devices and technology"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shirt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shirt$3e$__["Shirt"], {
            className: "h-4 w-4",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 1309,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        t: "Clothing and fashion choices"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__["UtensilsCrossed"], {
            className: "h-4 w-4",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 1310,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        t: "Food and dining preferences"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$app$2d$window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppWindow$3e$__["AppWindow"], {
            className: "h-4 w-4",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 1311,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        t: "Mobile applications and digital platforms"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__["HeartHandshake"], {
            className: "h-4 w-4",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 1312,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        t: "Brand trust and loyalty decisions"
    }
];
function MktgWhySection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "why-mktg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 1",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Why marketing? You're ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GT, {
                            children: "already inside it"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1320,
                            columnNumber: 45
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Marketing is a comprehensive business discipline that extends far beyond selling products or creating advertisements — it is understanding customer needs, analyzing how people make purchasing decisions, exploring brand preferences, and enabling businesses to create meaningful value."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                    children: [
                        "Before this course asks you to define marketing, it asks you to notice it. Every phone you chose, every dish you ordered, every brand you keep coming back to — each is the visible end of a discipline that studies ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: TEAL
                            },
                            children: "needs, decisions, preference and value"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1323,
                            columnNumber: 231
                        }, this),
                        ". This opening chapter sets the frame: what marketing really means, where it already touches your day, and what you will be able to do by the end."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1323,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "What marketing really means",
                sub: "Four beats — and none of them is 'selling'"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MeaningMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1326,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1326,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "insight",
                    title: "Lecture 1 · the shift",
                    children: [
                        "The discipline moves from ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "transacting sales"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1329,
                            columnNumber: 37
                        }, this),
                        " to ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "creating value"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1329,
                            columnNumber: 75
                        }, this),
                        ": understanding consumer behavior and decision-making, and explaining why customers prefer certain brands over competitors. Selling is one visible slice; understanding is the whole base."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1328,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Marketing in everyday life",
                sub: "You were a consumer long before you were a student of consumers"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                        children: "Marketing permeates all aspects of daily consumer experience. The lecture names five surfaces — check which ones you have already touched today:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-wrap gap-2",
                        children: EVERYDAY.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "chip",
                                children: [
                                    e.icon,
                                    " ",
                                    e.t
                                ]
                            }, e.t, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1338,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "Where this course takes you",
                sub: "Six learning objectives"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: OBJECTIVES.map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift flex items-center gap-3 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NumDot, {
                                    n: String(i + 1)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1348,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.9rem] font-semibold leading-snug",
                                    style: {
                                        color: INK
                                    },
                                    children: o
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1349,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, o, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1347,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1345,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1344,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "story",
                    title: "Course significance",
                    children: [
                        "The aim is to equip you to ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "recognize and analyze marketing in your everyday life"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1357,
                            columnNumber: 38
                        }, this),
                        ", while building a comprehensive understanding of marketing as a critical business discipline within the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "BAS program in management and technology"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1357,
                            columnNumber: 213
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1356,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1355,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Marketing is ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "not limited to selling or product promotion"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1363,
                                    columnNumber: 26
                                }, void 0),
                                " — that is the first and most repeated correction of Lecture 1."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Its real work: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "understanding consumer behavior and decision-making"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1364,
                                    columnNumber: 28
                                }, void 0),
                                ", and why customers prefer certain brands over competitors."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The destination is ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "creating value"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1365,
                                    columnNumber: 32
                                }, void 0),
                                ", not just transacting sales."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Marketing already permeates your devices, clothes, food, apps and brand loyalties — this course trains you to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "see it"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1366,
                                    columnNumber: 123
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: "Six objectives ahead: needs analysis, product & service design, pricing & value, brand building, communication, and long-term relationships."
                        }, void 0, false)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1362,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1361,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 1317,
        columnNumber: 5
    }, this);
}
_c24 = MktgWhySection;
function MktgAnticipationSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "anticipation",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 2",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Anticipation — ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GT, {
                            children: "see the turn before it comes"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1383,
                            columnNumber: 33
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Three giants — BlackBerry, Hertz, Blockbuster — had customers, revenue and reputation. What they lacked was marketing's core function: anticipating consumer needs and market evolution before the market moved."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                    children: [
                        "The lecture opens with its fundamental concept: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: TEAL
                            },
                            children: "anticipation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1387,
                            columnNumber: 60
                        }, this),
                        ". Each case below is the same story in a different industry — a dominant player reading today perfectly, and tomorrow not at all. Run each machine and watch the same pattern draw itself."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1387,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Three declines, one pattern",
                sub: "BlackBerry · Hertz · Blockbuster — trace each fall event by event"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1390,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DeclineMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1391,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1391,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "The pattern of organizational decline",
                sub: "Gradual drop, then the cliff — unless someone pivots first"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1393,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm lift p-5 md:p-7",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MHead, {
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                                className: "h-5 w-5",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1396,
                                columnNumber: 24
                            }, void 0),
                            title: "The decline curve",
                            chip: "Lecture 2 · pattern"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1396,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 rounded-2xl p-3",
                            style: {
                                background: LAGOON,
                                border: "1px solid rgba(20,184,166,.28)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PatternSvg, {}, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1398,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1397,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-3 md:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-4",
                                    style: {
                                        background: "#f2efe7",
                                        border: "1px solid #e3ddcf"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.88rem] font-extrabold",
                                            style: {
                                                color: INK
                                            },
                                            children: "1 · The gradual drop"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 1402,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.82rem] leading-relaxed text-[#5f7472]",
                                            children: "Performance erodes slowly at first — easy to explain away, easy to miss."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 1403,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1401,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-4",
                                    style: {
                                        background: "rgba(20,184,166,.08)",
                                        border: "1px solid rgba(20,184,166,.35)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.88rem] font-extrabold",
                                            style: {
                                                color: TEAL
                                            },
                                            children: "2 · The pivot window"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 1406,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.82rem] leading-relaxed text-[#5f7472]",
                                            children: [
                                                "Organizations that ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "anticipate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                                    lineNumber: 1407,
                                                    columnNumber: 99
                                                }, this),
                                                " market changes pivot successfully before the sudden decline."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 1407,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1405,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl p-4",
                                    style: {
                                        background: "rgba(159,61,84,.07)",
                                        border: "1px solid rgba(159,61,84,.3)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.88rem] font-extrabold",
                                            style: {
                                                color: ROSE
                                            },
                                            children: "3 · The sudden collapse"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 1410,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.82rem] leading-relaxed text-[#5f7472]",
                                            children: "Those unable to anticipate face a rapid market exit — the cliff always arrives faster than the slope."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 1411,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1409,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1400,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1395,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "The definition that follows",
                sub: "Marketing's core function, stated plainly"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1417,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl p-6 md:p-8",
                    style: {
                        background: LAGOON,
                        border: "1px solid rgba(20,184,166,.28)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                            className: "h-6 w-6",
                            style: {
                                color: GOLD_L
                            },
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1420,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-3xl text-xl font-bold leading-relaxed md:text-2xl",
                            style: {
                                color: LIGHT
                            },
                            children: [
                                "Marketing is the function that enables organizations to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: GOLD_L
                                    },
                                    children: "anticipate consumer needs and market evolution"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1422,
                                    columnNumber: 69
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1421,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-3xl text-[.95rem] leading-relaxed",
                            style: {
                                color: DIM
                            },
                            children: [
                                "Success requires understanding not only current consumer requirements but also predicting future needs and demands. Anticipation allows companies to create products consumers will value — ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: LIGHT
                                    },
                                    children: "before competitors do"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1425,
                                    columnNumber: 201
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1424,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1419,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1418,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "BlackBerry: the stock declined after the iPhone (2007), hit bottom in 2010, deepened with Android (2008) — ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "bankrupt for failing to anticipate the shift"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1432,
                                    columnNumber: 120
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Hertz: Uber ($17 billion valuation) brought an ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "asset-light model"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1433,
                                    columnNumber: 60
                                }, void 0),
                                " — outsourced drivers and vehicles — against an owned fleet's capital and maintenance costs; Hertz exited the global market by 2018 but remains operational in southern India."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Blockbuster: Netflix moved from DVD rentals to personalized recommendations (2002) and streaming (2012); the CEO dismissed Netflix as ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "non-competitive"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1434,
                                    columnNumber: 147
                                }, void 0),
                                " — bankruptcy followed as OTT disrupted the industry."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The decline pattern: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "gradual drop → sudden collapse"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1435,
                                    columnNumber: 34
                                }, void 0),
                                "; anticipators pivot before the cliff, non-anticipators exit fast."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Marketing's core function is to enable organizations to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "anticipate consumer needs and market evolution"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1436,
                                    columnNumber: 74
                                }, void 0),
                                " — and to build what consumers will value before competitors do."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1431,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1430,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 1380,
        columnNumber: 5
    }, this);
}
_c25 = MktgAnticipationSection;
function MktgToplineSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "topline",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 2",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "The top line & ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GT, {
                            children: "the bottom line"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1452,
                            columnNumber: 37
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Marketing's financial argument in two numbers: revenue generated through sales, and the profit that remains after cost. The lecture grounds both in a café selling cold coffee."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1450,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                    children: [
                        "Every organization lives on two metrics. The ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: TEAL
                            },
                            children: "top line"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1456,
                            columnNumber: 57
                        }, this),
                        " is revenue — the total money earned through sales. The ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: GOLD
                            },
                            children: "bottom line"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1456,
                            columnNumber: 162
                        }, this),
                        " is profit — sales minus cost. And the lecture's fundamental principle links them in one direction only:"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1456,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1455,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-2.5 md:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Top line",
                            v: "Revenue generated through sales — the total money earned by the organization."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1460,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Bottom line",
                            v: "Profit, calculated as Sales minus Cost."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1461,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "The principle",
                            v: "There must be a top line (revenue) for there to be a bottom line (profit)."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1462,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1459,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1458,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "The café's cold coffee, priced and counted",
                sub: "₹120 a glass · 80 glasses a day · ₹70 a glass to make"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1466,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PnLMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1467,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1467,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "insight",
                    title: "Why marketing sits upstream of profit",
                    children: [
                        "Marketing ensures ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "steady revenue streams"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1471,
                            columnNumber: 29
                        }, this),
                        ", directly enabling profit generation and organizational financial success. No marketing, no customers; no customers, no top line; no top line — and the bottom line never arrives."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1470,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1469,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                    source: "Lecture 2 · concept check",
                    q: "₹120 × 80 glasses = ₹9,600. In the lecture's language, that number is the café's…",
                    options: [
                        "bottom line",
                        "top line",
                        "profit",
                        "cost"
                    ],
                    answer: 1,
                    explain: "Price × volume = revenue = the top line. The bottom line is what survives after cost: 9,600 − 5,600 = ₹4,000 of profit."
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1476,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1475,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Top line"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1482,
                                    columnNumber: 13
                                }, void 0),
                                " = revenue from sales; ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "bottom line"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1482,
                                    columnNumber: 61
                                }, void 0),
                                " = sales − cost."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The café: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "₹120 × 80 = ₹9,600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1483,
                                    columnNumber: 23
                                }, void 0),
                                " revenue; ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "₹70 × 80 = ₹5,600"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1483,
                                    columnNumber: 68
                                }, void 0),
                                " cost; ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "₹4,000"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1483,
                                    columnNumber: 109
                                }, void 0),
                                " profit."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "There is ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "no bottom line without a top line"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1484,
                                    columnNumber: 22
                                }, void 0),
                                " — the dependency runs one way."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: "Marketing's financial job is to keep the top line steady — profit generation follows."
                        }, void 0, false)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1481,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1480,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 1449,
        columnNumber: 5
    }, this);
}
_c26 = MktgToplineSection;
function MktgVsSellingSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "mktg-vs-selling",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 2",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Selling the pen vs ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GT, {
                            children: "understanding the hand"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1501,
                            columnNumber: 37
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Selling pushes a finished product and its attributes. Marketing begins by understanding consumer needs before the product is even presented. The lecture's humble prop — a pen — carries the whole distinction."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1499,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "The pen test",
                sub: "One pen, two completely different postures"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1504,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PenMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1505,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1505,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "insight",
                    title: "Lecture 2 · why asking wins",
                    children: [
                        "Understanding customer needs before presenting the product ensures ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "better fit"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1508,
                            columnNumber: 78
                        }, this),
                        " — and ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "more successful sales outcomes"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1508,
                            columnNumber: 112
                        }, this),
                        ". The pen never changed; the sequence did."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1507,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1506,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "The definition",
                sub: "Understand → create → communicate → deliver"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1512,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepsFlow"], {
                    steps: [
                        {
                            label: "Understand",
                            sub: "consumer needs and preferences"
                        },
                        {
                            label: "Create",
                            sub: "value through product or service development"
                        },
                        {
                            label: "Communicate",
                            sub: "value to consumers"
                        },
                        {
                            label: "Deliver",
                            sub: "value through satisfactory transactions"
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1514,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1513,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "story",
                    title: "What happens when value lands",
                    children: [
                        "When value is successfully delivered, customers become ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "advocates"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1523,
                            columnNumber: 66
                        }, this),
                        " — they speak positively about the brand and generate ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "repeat business and revenue"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1523,
                            columnNumber: 146
                        }, this),
                        ". Advocacy is delivered value, amplified."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1522,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1521,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "Marketing in the wild — or is it sales?",
                sub: "Five marketing moves and one sales move, straight from the notes"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1527,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpotMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1528,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1528,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "4",
                title: "Marketing → sales",
                sub: "The relationship, stated precisely"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1530,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-2.5 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Sales is",
                            v: "the transaction that results from successful marketing."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1533,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Marketing does",
                            v: "creates awareness, builds desire, communicates value — then sales completes the transaction."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1534,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Together",
                            v: "both are essential — but marketing precedes and enables sales."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1535,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "The order",
                            v: "customer-centric understanding comes first; product development follows."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1536,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1532,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1531,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "5",
                title: "Where the course goes next",
                sub: "Keep a repository of notes as you go"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1540,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                    children: [
                        "Upcoming lectures take up the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: TEAL
                            },
                            children: "evolution of marketing"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1542,
                            columnNumber: 42
                        }, this),
                        " — how concepts and practices developed over time — and the fundamental consumer-behavior triad of ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: TEAL
                            },
                            children: "need vs want vs demand"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1542,
                            columnNumber: 204
                        }, this),
                        ": distinguishing customer requirements from desires, and desires from actual purchasing behavior. You are encouraged to maintain a ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: GOLD
                            },
                            children: "repository of notes"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1542,
                            columnNumber: 398
                        }, this),
                        " on brands, organizations and marketing concepts encountered throughout the course, for practical application and future reference."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1542,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1541,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                    source: "Lecture 2 · concept check",
                    q: "“Do you prefer ballpoint, pilot, or ink pens?” · “What is your budget?” · “Fine or broad nib?” — this opening is…",
                    options: [
                        "selling",
                        "marketing",
                        "promotion",
                        "distribution"
                    ],
                    answer: 1,
                    explain: "The marketing approach asks preliminary questions to understand customer requirements before presenting the product. Listing attributes (writes flawlessly, good grip) is the sales-dominant approach."
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1546,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1545,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Selling"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1552,
                                    columnNumber: 13
                                }, void 0),
                                " pushes products after creation and leans on attributes; ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "marketing"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1552,
                                    columnNumber: 94
                                }, void 0),
                                " starts with understanding consumer needs before the product exists."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The pen: sales says ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "writes flawlessly, black, good grip, improves exam marks"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1553,
                                    columnNumber: 33
                                }, void 0),
                                "; marketing asks ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "ballpoint or ink? budget? fine or broad nib? which color?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1553,
                                    columnNumber: 115
                                }, void 0)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Marketing = ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "understand → create → communicate → deliver"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1554,
                                    columnNumber: 25
                                }, void 0),
                                " value — and delivered value turns customers into advocates."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: "The lecture's marketing sightings: ₹1 shampoo sachets, 20% discounts, iced-coffee research, Zomato's notifications, chocolates at the billing counter — the laptop persuasion alone is sales."
                        }, void 0, false),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Sales is the ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "transaction that results from successful marketing"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1556,
                                    columnNumber: 26
                                }, void 0),
                                " — marketing precedes and enables it."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1551,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1550,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 1498,
        columnNumber: 5
    }, this);
}
_c27 = MktgVsSellingSection;
/* ============================================================
   EXPORTED SECTION 5 · definitions  (Lecture 3)
   ============================================================ */ const DEF_STORIES = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "h-5 w-5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 1568,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        name: "Google",
        line: "Products and services that are relevant and required by consumers — effectively connecting with target audiences."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$armchair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Armchair$3e$__["Armchair"], {
            className: "h-5 w-5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 1569,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        name: "IKEA",
        line: "Revolutionized furniture through DIY — quality, aesthetically pleasing furniture you assemble yourself, solving the problem of tedious furniture installation."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sofa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sofa$3e$__["Sofa"], {
            className: "h-5 w-5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 1570,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        name: "Urban Ladder & PepperFry",
        line: "Captured an untapped Indian market by recognizing that modern consumers move frequently between cities and don't want furniture for generations — convenient, economical solutions."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
            className: "h-5 w-5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 1571,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        name: "Uber & Ola",
        line: "Replicated the traditional agency model in digital format — drivers now receive 25–30 bookings daily instead of 1–2 through traditional channels."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
            className: "h-5 w-5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 1572,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        name: "Apple iPod · Steve Jobs",
        line: "“Marketing is about meeting needs profitably” — great products combined with business viability."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
            className: "h-5 w-5",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
            lineNumber: 1573,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        name: "Seth Godin",
        line: "Marketing is not about selling more products but making better things that create genuine value for consumers."
    }
];
function MktgDefinitionsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "definitions",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 3",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "What marketing ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GT, {
                            children: "is"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1581,
                            columnNumber: 33
                        }, void 0),
                        " — definitions & perspectives"
                    ]
                }, void 0, true),
                lead: "An outside-in approach that starts with understanding customer needs rather than simply selling products: creating, communicating, and delivering value to customers, clients, partners, and society."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1579,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl p-6 md:p-8",
                    style: {
                        background: LAGOON,
                        border: "1px solid rgba(20,184,166,.28)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[.7rem] font-extrabold uppercase tracking-[.2em]",
                            style: {
                                color: GOLD_L
                            },
                            children: "American Marketing Association · the theoretical definition"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1586,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-3xl text-lg font-bold leading-relaxed md:text-xl",
                            style: {
                                color: LIGHT
                            },
                            children: [
                                "“Marketing is the activity, set of institutions, and processes for creating value, communicating, delivering, and exchanging offerings that have value for ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: GOLD_L
                                    },
                                    children: "customers, clients, partners, and society at large"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1588,
                                    columnNumber: 168
                                }, this),
                                ".”"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1587,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1585,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1584,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                    children: [
                        "The business perspective translates the AMA definition into daily work. Marketing is ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: TEAL
                            },
                            children: "identifying and meeting human and social needs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1594,
                            columnNumber: 97
                        }, this),
                        "; it is ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: TEAL
                            },
                            children: "making lives better by making better things"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1594,
                            columnNumber: 192
                        }, this),
                        "; it is ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: TEAL
                            },
                            children: "connecting with consumers"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1594,
                            columnNumber: 284
                        }, this),
                        " — the Apple CEO's perspective. The stories below are that definition, wearing different logos:"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1594,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1593,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                    children: DEF_STORIES.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift h-full p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-9 w-9 items-center justify-center rounded-xl",
                                            style: {
                                                background: "linear-gradient(135deg,rgba(20,184,166,.18),rgba(15,118,110,.10))",
                                                color: TEAL
                                            },
                                            children: s.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 1602,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[1.02rem] font-extrabold",
                                            style: {
                                                color: INK
                                            },
                                            children: s.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 1603,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1601,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2.5 text-[.88rem] leading-relaxed",
                                    style: {
                                        color: "#3a4a48"
                                    },
                                    children: s.line
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1605,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, s.name, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1600,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1598,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1597,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Outside-in vs inside-out",
                sub: "The distinction that separates marketing from selling — again, with arrows"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1611,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InOutMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1612,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1612,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "AMA: marketing is the activity, set of institutions and processes for ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "creating, communicating, delivering and exchanging offerings that have value"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1616,
                                    columnNumber: 83
                                }, void 0),
                                " — for customers, clients, partners, and society at large."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Business view: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "identify and meet human and social needs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1617,
                                    columnNumber: 28
                                }, void 0),
                                " · make lives better by making better things · connect with consumers."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Outside-in (marketing):"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1618,
                                    columnNumber: 13
                                }, void 0),
                                " gather market information — needs, wants, dynamics — and bring it into the organization. ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Inside-out (selling):"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1618,
                                    columnNumber: 143
                                }, void 0),
                                " push a finished product out through retailers, distribution, online."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: "The stories: Google (relevance), IKEA (DIY), Urban Ladder & PepperFry (frequent movers), Uber & Ola (25–30 bookings vs 1–2), Jobs (“meeting needs profitably”), Godin (“better things”)."
                        }, void 0, false),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Marketing cannot succeed without sales, and sales cannot succeed without marketing insights — ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "interconnected, both essential"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1620,
                                    columnNumber: 107
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1615,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1614,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 1578,
        columnNumber: 5
    }, this);
}
_c28 = MktgDefinitionsSection;
function MktgSystemSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "mktg-system",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 3",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Industry ↔ market — ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GT, {
                            children: "a system of four flows"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1636,
                            columnNumber: 38
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Zoom out from definitions and marketing becomes a system: sellers on one side, buyers on the other, and four flows constantly crossing the gap between them."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1634,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                    children: [
                        "The framework has two core components. The ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: TEAL
                            },
                            children: "industry"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1640,
                            columnNumber: 55
                        }, this),
                        " is a ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "collection of sellers"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1640,
                            columnNumber: 110
                        }, this),
                        "; the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: GOLD
                            },
                            children: "market"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1640,
                            columnNumber: 154
                        }, this),
                        " is a ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "collection of buyers"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1640,
                            columnNumber: 207
                        }, this),
                        ". Between them run four key flows — two going out, two coming back:"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1640,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1639,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-2.5 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Communication",
                            v: "From industry to market — about products, offers, and promotions."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1644,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Goods & services",
                            v: "Tangible offerings from industry to market."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1645,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Money",
                            v: "Payment from consumers back to sellers."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1646,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Information",
                            v: "Market feedback that helps organizations redesign and refine products."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1647,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1643,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1642,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Run the exchange",
                sub: "Highlight each flow, or let the machine cycle all four"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1651,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SystemMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1652,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1652,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "insight",
                    title: "Why the return flows matter",
                    children: [
                        "The money flow pays for everything — but the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "information flow"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1656,
                            columnNumber: 56
                        }, this),
                        " is what keeps the system alive: market feedback is how organizations redesign and refine products. A system with only outbound flows is a broadcast, not a market."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1655,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1654,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Industry = ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "collection of sellers"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1662,
                                    columnNumber: 24
                                }, void 0),
                                "; market = ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "collection of buyers"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1662,
                                    columnNumber: 73
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Outbound: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "communication"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1663,
                                    columnNumber: 23
                                }, void 0),
                                " (products, offers, promotions) and ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "goods & services"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1663,
                                    columnNumber: 89
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Inbound: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "money"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1664,
                                    columnNumber: 22
                                }, void 0),
                                " (payment from consumers) and ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "information"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1664,
                                    columnNumber: 74
                                }, void 0),
                                " (feedback for redesign and refinement)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The four flows make marketing a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "system"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1665,
                                    columnNumber: 45
                                }, void 0),
                                ", not a megaphone — value travels both ways."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1661,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1660,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 1633,
        columnNumber: 5
    }, this);
}
_c29 = MktgSystemSection;
function MktgMarketableSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "marketable",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 3",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Ten things you can ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GT, {
                            children: "market"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1681,
                            columnNumber: 37
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Marketing extends far beyond tangible products — from goods and services all the way to persons, places, properties, organizations, information and ideas."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1679,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                    children: [
                        "The lecture's list is deliberately surprising. Goods are only the first of ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: TEAL
                            },
                            children: "ten marketable entities"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1685,
                            columnNumber: 92
                        }, this),
                        " — and the further down the list you go, the less the offering looks like a “product” at all. Explore each entity; the examples are all from the notes."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1685,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1684,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "The entity explorer",
                sub: "Goods → ideas: click through all ten"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1688,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntityGrid, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1689,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1689,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "why",
                    title: "Why this list matters",
                    children: [
                        "When ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "American Express markets an experience"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1693,
                            columnNumber: 16
                        }, this),
                        " rather than a card, when ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Rajasthan Tourism markets a place"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1693,
                            columnNumber: 97
                        }, this),
                        " through people, when ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "HBS markets an organization"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1693,
                            columnNumber: 169
                        }, this),
                        " through legacy — each proves the same point: marketing is the discipline of creating and exchanging value, whatever form the offering takes."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1692,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1691,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The ten entities: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "goods, services, experiences, financial services, persons, places, properties, organizations, information, ideas"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1699,
                                    columnNumber: 31
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Experiences: Imagica sells happiness and memories; Sunburn sells the festival, not the setlist; Coca-Cola's ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "“Make a Friend”"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1700,
                                    columnNumber: 126
                                }, void 0),
                                " connected India–Pakistan vending machines."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Persons: The Rock's Papatui, Oprah's skincare, Hrithik's HRX, Virat Kohli, Kriti Sanon's Hyphen — ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "trust in the person precedes the product"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1701,
                                    columnNumber: 131
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: "Properties: World Towers (name, location, facilities), Trump Towers (legacy), The Camellias (₹85–100 crore; ambience, views, amenities, status)."
                        }, void 0, false),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Information & ideas: NIRF rankings and ACSB accreditation as credentials; Zomato's ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "“Hungry”"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1703,
                                    columnNumber: 105
                                }, void 0),
                                " New Year idea and Blinkit's ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "“Food mangoge, do minute mein dunga”"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1703,
                                    columnNumber: 164
                                }, void 0),
                                " vs ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "“Kheer mangoge, kheer dengunge”"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1703,
                                    columnNumber: 221
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1698,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1697,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 1678,
        columnNumber: 5
    }, this);
}
_c30 = MktgMarketableSection;
function MktgNwdSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "need-want-demand",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 3",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Need → want → ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GT, {
                            children: "demand"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1719,
                            columnNumber: 32
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Three interconnected concepts that explain every purchase: the requirement that pre-exists, the object it attaches to, and the purchasing power that turns desire into behavior."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1717,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-2.5 md:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Need",
                            v: "A basic human requirement — biological or fundamental (food, shelter, clothing). It pre-exists naturally; marketers do not create needs."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1724,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Want",
                            v: "A need directed toward a specific object — shaped by marketing, culture and personal preferences. Hunger becomes a want for pizza, tandoori chicken, or vada pao."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1725,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Demand",
                            v: "A want backed by the ability to pay — the conversion of desire into actual purchasing behavior."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1726,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1723,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1722,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Hunger, ₹20, and the making of demand",
                sub: "The lecture's food triad, played out step by step"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1730,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1731,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1731,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "The Starbucks check",
                sub: "Same want, different cities — only one becomes demand"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1733,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm lift p-5 md:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-9 w-9 items-center justify-center rounded-xl",
                                    style: {
                                        background: "linear-gradient(135deg,rgba(20,184,166,.18),rgba(15,118,110,.10))",
                                        color: TEAL
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"], {
                                        className: "h-5 w-5",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 1738,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1737,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold",
                                    style: {
                                        color: INK
                                    },
                                    children: "Tier 1 vs Tier 3"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1740,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: "Lecture 3 · ability to pay"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1741,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1736,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-3xl text-[.93rem] leading-relaxed text-[#3a4a48]",
                            children: [
                                "Consumers in a Tier 3 city may ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "want"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1744,
                                    columnNumber: 44
                                }, this),
                                " Starbucks coffee exactly as much as consumers in a Tier 1 city. But only in Tier 1 cities do they have the ability to pay ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: GOLD
                                    },
                                    children: "₹300 for a coffee"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1744,
                                    columnNumber: 188
                                }, this),
                                " — and that is what creates ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: TEAL
                                    },
                                    children: "demand"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1744,
                                    columnNumber: 274
                                }, this),
                                ". The want is universal; the demand is economic."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1743,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1735,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1734,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "What the marketer controls",
                sub: "Three honest lines of authority"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1749,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-2.5 md:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Cannot create",
                            v: "Needs — they pre-exist; marketers recognize rather than create them."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1752,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Can create & shape",
                            v: "Wants — attaching needs to specific objects and solutions."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1753,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Can influence",
                            v: "Demand — through pricing, availability, and promotion."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1754,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1751,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1750,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Need"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1760,
                                    columnNumber: 13
                                }, void 0),
                                ": basic human requirement — food, shelter, clothing. Pre-exists naturally; marketers do not create it."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Want"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1761,
                                    columnNumber: 13
                                }, void 0),
                                ": a need attached to a specific object — pizza, tandoori chicken or vada pao — shaped by marketing, culture, personal preference."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Demand"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1762,
                                    columnNumber: 13
                                }, void 0),
                                ": want + ability to pay. With ₹20, demand is limited to vada pao; with more money, all three become possible."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Starbucks: the want exists in Tier 1 and Tier 3 cities alike — ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "₹300 of purchasing power"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1763,
                                    columnNumber: 76
                                }, void 0),
                                " is what turns it into demand."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: "The marketer's authority: recognize needs, shape wants, influence demand through pricing, availability and promotion."
                        }, void 0, false)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1759,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1758,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 1716,
        columnNumber: 5
    }, this);
}
_c31 = MktgNwdSection;
function MktgDemandStatesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "demand-states",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 3",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Five needs, ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GT, {
                            children: "eight demand states"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1780,
                            columnNumber: 30
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Under every stated request lie four deeper layers of need — and every market sits somewhere on a spectrum from negative demand to unwholesome demand. Reading both correctly is the marketer's diagnostic skill."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1778,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "The five types of consumer needs",
                sub: "A car purchase, dissected layer by layer"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1783,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NeedLayers, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1784,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1784,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "The eight demand states",
                sub: "From actively-avoided to socially-unwanted — click each state"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1786,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DemandExplorer, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1787,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1787,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "insight",
                    title: "Lecture 3 · key principles",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "grid gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• Needs are ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "pre-existing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 1792,
                                        columnNumber: 29
                                    }, this),
                                    "; marketers recognize rather than create them."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1792,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Wants and demands are malleable"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 1793,
                                        columnNumber: 19
                                    }, this),
                                    " — they can be shaped through marketing strategies."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1793,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• Successful marketing requires understanding ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "all types of needs and demand states"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 1794,
                                        columnNumber: 63
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1794,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• Marketing must address customer needs ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "profitably"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 1795,
                                        columnNumber: 57
                                    }, this),
                                    " to be sustainable."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1795,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• The most effective marketing connects consumers with products through ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "meaningful ideas, experiences, or emotional connections"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 1796,
                                        columnNumber: 89
                                    }, this),
                                    " — not direct product promotion."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 1796,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 1791,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1790,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1789,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                    source: "Lecture 3 · concept check",
                    q: "Paying extra for an ad-free music subscription is the lecture's example of…",
                    options: [
                        "negative demand",
                        "latent demand",
                        "full demand",
                        "irregular demand"
                    ],
                    answer: 0,
                    explain: "Negative demand: consumers actively avoid the product — the ads — and may pay to prevent it. The dentist appointment is the same state played straight."
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1802,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1801,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Five need types: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "stated"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1808,
                                    columnNumber: 30
                                }, void 0),
                                " (“I want a car”), ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "real"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1808,
                                    columnNumber: 84
                                }, void 0),
                                " (low operating costs), ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "unstated"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1808,
                                    columnNumber: 129
                                }, void 0),
                                " (service & warranty), ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "delight"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1808,
                                    columnNumber: 181
                                }, void 0),
                                " (built-in GPS), ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "secret"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1808,
                                    columnNumber: 222
                                }, void 0),
                                " (status symbol)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Eight demand states: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "negative → non-existent → latent → declining → irregular → full → overfull → unwholesome"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1809,
                                    columnNumber: 34
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: "Signature examples: dentist appointments (negative), BlackBerry Key2 (non-existent), better cameras (latent), floppy disks & CDs (declining), ACs & seasonal fruits (irregular), OTC drugs (full), bread & milk (overfull), cigarettes (unwholesome)."
                        }, void 0, false),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Needs pre-exist — marketers ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "recognize"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1811,
                                    columnNumber: 41
                                }, void 0),
                                " them; wants and demands are ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "malleable"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1811,
                                    columnNumber: 96
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Marketing must address needs ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "profitably"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1812,
                                    columnNumber: 42
                                }, void 0),
                                ", and connect through ideas, experiences and emotion rather than direct product promotion."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1807,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1806,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 1777,
        columnNumber: 5
    }, this);
}
_c32 = MktgDemandStatesSection;
function MktgClosedSystemSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "closed-system",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 4",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "The consumer mind is a ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GT, {
                            children: "closed system"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1828,
                            columnNumber: 41
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "By default the mind recycles familiar options, known brands and established habits. Drowning in information overload, it opens only when something triggers genuine interest — and marketing is the discipline of engineering that trigger."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1826,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                    children: [
                        "Consumers are exposed to ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: TEAL
                            },
                            children: "countless advertisements and brands daily"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1832,
                            columnNumber: 37
                        }, this),
                        ". To survive the noise, the mind selectively opens only when something creates a compelling reason to consider alternatives. Lecture 4 turns this into one clean, measurable relationship:"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1832,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1831,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "The linear law of interest and openness",
                sub: "X-axis: openness to receive information · Y-axis: interest in the product"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1835,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MindMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1836,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1836,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "insight",
                    title: "The key principle, verbatim",
                    children: [
                        "“If a consumer is ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "interested"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1840,
                            columnNumber: 35
                        }, this),
                        " in something, they will be ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "open"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1840,
                            columnNumber: 90
                        }, this),
                        " to learning more about it. Conversely, openness to information indicates underlying interest.” This relationship remains ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "consistently linear across different consumer segments"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1840,
                            columnNumber: 239
                        }, this),
                        " — and both conditions (interest generation + information receptivity) must be met simultaneously to move from a closed system to an open one."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1839,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1838,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Breaking the loop",
                sub: "Every consumer has a unique breaking point"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1844,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                    children: [
                        "Every consumer has a ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: GOLD
                            },
                            children: "breaking point"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1846,
                            columnNumber: 33
                        }, this),
                        " — a threshold at which they become willing to explore beyond established preferences. Marketing efforts serve as ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: TEAL
                            },
                            children: "interrupts"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1846,
                            columnNumber: 202
                        }, this),
                        " that break the habitual loop and create openness to new possibilities. The lecture names four: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "promotional offers, celebrity endorsements, limited-time deals, and exclusive collections"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1846,
                            columnNumber: 349
                        }, this),
                        ". You fired all four in the machine above."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1846,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1845,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "warn",
                    title: "The critical distinction",
                    children: [
                        "Marketing always starts with ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "the customer, not the product"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1851,
                            columnNumber: 40
                        }, this),
                        ". Products are essential for business operations — but understanding and opening the consumer's closed system is the prerequisite for successful marketing efforts."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1850,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1849,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "The mind is a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "closed system by default"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1857,
                                    columnNumber: 27
                                }, void 0),
                                ": familiar options, known brands, established habits — with resistance driven by information overload."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Openness (X) and interest (Y) rise ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "linearly and together"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1858,
                                    columnNumber: 48
                                }, void 0),
                                "; both conditions must be met simultaneously."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Every consumer has a unique ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "breaking point"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1859,
                                    columnNumber: 41
                                }, void 0),
                                "; marketing's ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "interrupts"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1859,
                                    columnNumber: 91
                                }, void 0),
                                " — offers, celebrities, limited drops, exclusives — crack the loop."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Interested → open; open → interested. The law holds ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "across consumer segments"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1860,
                                    columnNumber: 65
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Marketing starts with ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "the customer, not the product"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1861,
                                    columnNumber: 35
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1856,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1855,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 1825,
        columnNumber: 5
    }, this);
}
_c33 = MktgClosedSystemSection;
function MktgBizValueSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "biz-value",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 4",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "The business value of ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GT, {
                            children: "marketing"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1877,
                            columnNumber: 40
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Organizations run on two financial metrics — and marketing is the engine of the first one. Every organization, regardless of its nature, needs revenue to keep functioning."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1875,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-2.5 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Top line (revenue/sales)",
                            v: "The total income generated from selling products or services — the number of products sold multiplied by their selling price."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1882,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Bottom line (profit)",
                            v: "The net income remaining after deducting costs from revenue — Revenue minus Total Costs."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1883,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1881,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1880,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "warn",
                    title: "The critical relationship",
                    children: [
                        "Without a top line (revenue), there cannot be a bottom line (profit). Every organization — ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "including NGOs and social enterprises"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1889,
                            columnNumber: 102
                        }, this),
                        " — requires revenue to sustain operations, pay employees, and continue functioning."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1888,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1887,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "The four levers",
                sub: "Pricing, product, promotion, distribution — working together"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1893,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeverMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1894,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1894,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Two fundamental approaches",
                sub: "The same inside-out / outside-in distinction, from the business side"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1896,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift h-full p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.72rem] font-extrabold uppercase tracking-[.16em]",
                                    style: {
                                        color: GOLD
                                    },
                                    children: "Inside-out · sales"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1900,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-2 grid gap-1.5 text-[.9rem] leading-relaxed text-[#3a4a48]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Focuses on what the organization has produced or created."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 1902,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Pushes existing products to consumers."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 1903,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Centers on transaction completion."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 1904,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1901,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1899,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift h-full p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.72rem] font-extrabold uppercase tracking-[.16em]",
                                    style: {
                                        color: TEAL
                                    },
                                    children: "Outside-in · marketing"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1908,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-2 grid gap-1.5 text-[.9rem] leading-relaxed text-[#3a4a48]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Begins with understanding consumer needs, desires, and preferences."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 1910,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "• Conducts market research to gather consumer insights."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 1911,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                "• Focuses on ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "relationship building"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                                    lineNumber: 1912,
                                                    columnNumber: 32
                                                }, this),
                                                " rather than immediate transactions."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 1912,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1909,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1907,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1898,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1897,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Top line = ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "products sold × selling price"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1920,
                                    columnNumber: 24
                                }, void 0),
                                "; bottom line = ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "revenue − total costs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1920,
                                    columnNumber: 86
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "No revenue → no profit — true for ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "every organization, NGOs included"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1921,
                                    columnNumber: 47
                                }, void 0),
                                ": revenue sustains operations and pays employees."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Financial success depends on marketing's ability to generate revenue across ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "pricing, product development, promotion, and distribution"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1922,
                                    columnNumber: 94
                                }, void 0),
                                " — together creating consumer demand and driving sales."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: "Inside-out pushes what was already made; outside-in begins with the customer's needs, desires and preferences."
                        }, void 0, false)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1919,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1918,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 1874,
        columnNumber: 5
    }, this);
}
_c34 = MktgBizValueSection;
function MktgChaiSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "chai-value",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 5",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "One chai, three ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GT, {
                            children: "prices"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1939,
                            columnNumber: 34
                        }, void 0),
                        ", three values"
                    ]
                }, void 0, true),
                lead: "Customer perceived value is not merely the price printed on a product — it is a calculation made in the consumer's mind. The lecture's opening proof is a cup of tea sold at three very different prices."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1937,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                    children: [
                        "The same tea. Three contexts. The roadside cup costs ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: TEAL
                            },
                            children: "₹20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1943,
                            columnNumber: 65
                        }, this),
                        ", the café cup ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: TEAL
                            },
                            children: "₹250"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1943,
                            columnNumber: 124
                        }, this),
                        ", the airport cup ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: TEAL
                            },
                            children: "₹500"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1943,
                            columnNumber: 187
                        }, this),
                        " — and no one is being cheated at any of the three counters. What changed is not the product; it is the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: GOLD
                            },
                            children: "consumer's situation, and therefore the value computed in their mind"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1943,
                            columnNumber: 336
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1943,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1942,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "The three cups",
                sub: "Pick a context — the cup never changes"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1946,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChaiMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1947,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1947,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "story",
                    title: "The lecture's point, stated exactly",
                    children: [
                        "Customer perceived value is ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "a calculation made in the consumer's mind based on the benefits received minus the costs incurred"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1951,
                            columnNumber: 39
                        }, this),
                        ". The value is ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "highly subjective and contextual"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1951,
                            columnNumber: 173
                        }, this),
                        ", varying based on individual situations and circumstances. The same product carries different perceived values depending on the consumer's context and needs."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1950,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1949,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Roadside tea (",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "₹20"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1957,
                                    columnNumber: 27
                                }, void 0),
                                "): economical, casual. Café tea (",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "₹250"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1957,
                                    columnNumber: 80
                                }, void 0),
                                "): business meetings, ambiance, impression management. Airport tea (",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "₹500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1957,
                                    columnNumber: 169
                                }, void 0),
                                "): no other options, or traveling."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "CPV is ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "computed in the mind"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1958,
                                    columnNumber: 20
                                }, void 0),
                                " — benefits received minus costs incurred — not read off a price tag."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Value is ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "subjective and contextual"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1959,
                                    columnNumber: 22
                                }, void 0),
                                ": it varies person to person, situation to situation."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Context matters"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 1960,
                                    columnNumber: 13
                                }, void 0),
                                " even when the product is identical — this cup is Lecture 5's anchor example for everything that follows."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1956,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1955,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 1936,
        columnNumber: 5
    }, this);
}
_c35 = MktgChaiSection;
/* ============================================================
   EXPORTED SECTION 13 · cpv-formula  (Lecture 5)
   ============================================================ */ const DENIM = [
    {
        tier: "Generic jeans",
        price: "₹1,000–1,500",
        note: "the fabric does its job"
    },
    {
        tier: "Levi's jeans",
        price: "₹3,900–5,900",
        note: "the brand adds its layer"
    },
    {
        tier: "Armani jeans",
        price: "₹25,000–50,000",
        note: "the label speaks before you do"
    }
];
const LIMITS = [
    {
        name: "Psychological",
        limit: "Limited by the maximum warmth a jacket can provide.",
        color: TEAL
    },
    {
        name: "Functional",
        limit: "Constrained by practical design limits — and too many features risk cognitive overload.",
        color: TEAL
    },
    {
        name: "Economic",
        limit: "Cannot be reduced indefinitely without causing business losses.",
        color: TEAL
    },
    {
        name: "Extended psychological",
        limit: "No inherent limitation — organizations can continuously enhance perception through branding and marketing.",
        color: GOLD
    }
];
function MktgCpvSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "cpv-formula",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 5",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "CPV = Benefits − ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GT, {
                            children: "Costs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1989,
                            columnNumber: 35
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "The theoretical framework behind the chai: customer perceived value is a mental ledger of four kinds of benefits against direct and abstract costs — and organizations can move either side of the equation."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1987,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-2.5 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "The formula",
                            v: "Customer Perceived Value = Benefits − Costs."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1994,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "The insight",
                            v: "Value is calculated in the consumer's mind — benefits extend beyond the physical product, and costs extend beyond the price."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 1995,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 1993,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1992,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "The balance machine",
                sub: "Toggle benefits and costs; watch value tip"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 1999,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScaleMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 2000,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 2000,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "The four benefits — and their ceilings",
                sub: "Three benefits hit limits; one never does"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 2002,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-2",
                        children: LIMITS.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-5",
                                style: l.color === GOLD ? {
                                    borderColor: "#e0c88f",
                                    background: "#fdf9ef"
                                } : undefined,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-2.5 w-2.5 rounded-full",
                                                style: {
                                                    background: l.color === GOLD ? GOLD_GRAD : TEAL_GRAD
                                                },
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                                lineNumber: 2008,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-[1rem] font-extrabold",
                                                style: {
                                                    color: INK
                                                },
                                                children: [
                                                    l.name,
                                                    " benefit"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                                lineNumber: 2009,
                                                columnNumber: 17
                                            }, this),
                                            l.color === GOLD ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "chip",
                                                children: "the uncapped one"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                                lineNumber: 2010,
                                                columnNumber: 37
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 2007,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.88rem] leading-relaxed",
                                        style: {
                                            color: "#3a4a48"
                                        },
                                        children: l.limit
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                        lineNumber: 2012,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, l.name, true, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 2006,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 2004,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                        className: "mt-4",
                        children: [
                            "The extended psychological benefit is ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                style: {
                                    color: GOLD
                                },
                                children: "particularly powerful in modern marketing"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                lineNumber: 2016,
                                columnNumber: 67
                            }, this),
                            " — it shapes how consumers feel about social acceptability and personal image, and it is the only benefit with no built-in ceiling."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                        lineNumber: 2016,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 2003,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "The abstract costs",
                sub: "What you pay beyond money"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 2019,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(P, {
                    children: [
                        "Costs are not limited to the direct price. The lecture lists four ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            style: {
                                color: GOLD
                            },
                            children: "abstract costs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 2021,
                            columnNumber: 78
                        }, this),
                        ": the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "time"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 2021,
                            columnNumber: 139
                        }, this),
                        " required to purchase and obtain the product, the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "effort and energy"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 2021,
                            columnNumber: 210
                        }, this),
                        " expended, the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "psychological stress"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 2021,
                            columnNumber: 259
                        }, this),
                        " (worrying about parking, traffic), and ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "disposal costs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 2021,
                            columnNumber: 336
                        }, this),
                        " with after-sales service considerations."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 2021,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 2020,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "story",
                    title: "The ice-cream test",
                    children: [
                        "Ordering ice cream from a delivery app may cost ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "more money"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 2025,
                            columnNumber: 59
                        }, this),
                        " — but its abstract costs are lower: no travel time, no parking concerns, the convenience of home delivery. Against the store visit, the app can win on perceived value while losing on price. Run both scenarios in the balance machine above."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 2024,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 2023,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "4",
                title: "How organizations move the equation",
                sub: "Two directions: raise the benefits, or cut the costs"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 2029,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-2.5 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Increase benefits",
                            v: "Improve the product quality, features, or emotional appeal."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 2032,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Reduce costs",
                            v: "Lower prices, simplify processes, reduce friction in purchase and usage."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 2033,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 2031,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 2030,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 lg:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift p-5 md:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold",
                                    style: {
                                        color: INK
                                    },
                                    children: "Denim: same jeans, different ledger"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2040,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 grid gap-2",
                                    children: DENIM.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-baseline justify-between gap-2 rounded-xl px-3.5 py-2.5",
                                            style: {
                                                background: "#f2efe7",
                                                border: "1px solid #e3ddcf"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[.9rem] font-extrabold",
                                                    style: {
                                                        color: INK
                                                    },
                                                    children: d.tier
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                                    lineNumber: 2044,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono-warm text-[.9rem] font-black",
                                                    style: {
                                                        color: GOLD
                                                    },
                                                    children: d.price
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                                    lineNumber: 2045,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-full text-[.78rem] text-[#5f7472]",
                                                    children: d.note
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                                    lineNumber: 2046,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, d.tier, true, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 2043,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2041,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[.85rem] leading-relaxed text-[#5f7472]",
                                    children: [
                                        "The product remains physically similar — the brand creates the ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: TEAL
                                            },
                                            children: "extended psychological benefit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 2050,
                                            columnNumber: 141
                                        }, this),
                                        " through brand equity, moving perceived value by orders of magnitude."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2050,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 2039,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift p-5 md:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold",
                                    style: {
                                        color: INK
                                    },
                                    children: "Friction is a cost"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2053,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[.9rem] leading-relaxed text-[#3a4a48]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            style: {
                                                color: TEAL
                                            },
                                            children: "Amazon Prime"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 2055,
                                            columnNumber: 15
                                        }, this),
                                        " integrates shopping within entertainment — the “Add to Cart” button appearing during OTT advertisements makes purchasing easier, ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "reducing the abstract cost"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 2055,
                                            columnNumber: 210
                                        }, this),
                                        " of obtaining products."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2054,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 grid gap-3 sm:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl p-3.5",
                                            style: {
                                                background: "#f2efe7",
                                                border: "1px solid #e3ddcf"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[.85rem] font-extrabold",
                                                    style: {
                                                        color: INK
                                                    },
                                                    children: "Application A"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                                    lineNumber: 2059,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-[.8rem] leading-relaxed text-[#5f7472]",
                                                    children: "Better playlists — but frequent ads and a complex six-step login. Free, and still worth less."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                                    lineNumber: 2060,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 2058,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl p-3.5",
                                            style: {
                                                background: "rgba(20,184,166,.08)",
                                                border: "1px solid rgba(20,184,166,.35)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[.85rem] font-extrabold",
                                                    style: {
                                                        color: TEAL
                                                    },
                                                    children: "Application B"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                                    lineNumber: 2063,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-[.8rem] leading-relaxed text-[#5f7472]",
                                                    children: [
                                                        "A simpler one-step login with minimal friction — ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "superior perceived value"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                                            lineNumber: 2064,
                                                            columnNumber: 130
                                                        }, this),
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                                    lineNumber: 2064,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                            lineNumber: 2062,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2057,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                            lineNumber: 2052,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 2038,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 2037,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                    source: "Lecture 5 · concept check",
                    q: "A mattress ad leads with 'memory foam core'. In the lecture's language, that is a…",
                    options: [
                        "benefit",
                        "feature",
                        "cost",
                        "demand state"
                    ],
                    answer: 1,
                    explain: "Features describe what the product has (memory foam); benefits explain why the consumer should care (better sleep, reduced discomfort). Effective marketing communicates benefits — consumers buy what products do for them, not the features themselves."
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 2072,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 2071,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "CPV = Benefits − Costs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2078,
                                    columnNumber: 13
                                }, void 0),
                                " — a calculation in the consumer's mind, not the price on the tag."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Four benefits: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "psychological"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2079,
                                    columnNumber: 28
                                }, void 0),
                                " (warmth), ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "functional"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2079,
                                    columnNumber: 69
                                }, void 0),
                                " (pockets, hoodie, wind resistance), ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "economic"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2079,
                                    columnNumber: 133
                                }, void 0),
                                " (savings), ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "extended psychological"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2079,
                                    columnNumber: 170
                                }, void 0),
                                " (status) — only the last one has no ceiling."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Costs beyond price: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "time, effort, psychological stress, disposal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2080,
                                    columnNumber: 33
                                }, void 0),
                                " — the abstract ledger."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Denim: generic ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "₹1,000–1,500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2081,
                                    columnNumber: 28
                                }, void 0),
                                " · Levi's ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "₹3,900–5,900"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2081,
                                    columnNumber: 72
                                }, void 0),
                                " · Armani ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "₹25,000–50,000"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2081,
                                    columnNumber: 111
                                }, void 0),
                                " — brand equity as extended psychological benefit."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "More features ≠ more value — excess features cause ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "cognitive overload"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2082,
                                    columnNumber: 64
                                }, void 0),
                                "; communicate benefits (better sleep), not features (memory foam)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Organizations create value by ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "increasing benefits or reducing costs"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                                    lineNumber: 2083,
                                    columnNumber: 43
                                }, void 0),
                                " — and friction reduction (Amazon Prime, one-step logins) is often the cheapest win."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                    lineNumber: 2077,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts1.tsx",
                lineNumber: 2076,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts1.tsx",
        lineNumber: 1986,
        columnNumber: 5
    }, this);
}
_c36 = MktgCpvSection;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36;
__turbopack_context__.k.register(_c, "GT");
__turbopack_context__.k.register(_c1, "P");
__turbopack_context__.k.register(_c2, "MBtn");
__turbopack_context__.k.register(_c3, "MLive");
__turbopack_context__.k.register(_c4, "MHead");
__turbopack_context__.k.register(_c5, "LagoonBox");
__turbopack_context__.k.register(_c6, "NumDot");
__turbopack_context__.k.register(_c7, "MeaningMachine");
__turbopack_context__.k.register(_c8, "DeclineChart");
__turbopack_context__.k.register(_c9, "DeclineMachine");
__turbopack_context__.k.register(_c10, "PatternSvg");
__turbopack_context__.k.register(_c11, "PnLMachine");
__turbopack_context__.k.register(_c12, "PenMachine");
__turbopack_context__.k.register(_c13, "SpotMachine");
__turbopack_context__.k.register(_c14, "InOutMachine");
__turbopack_context__.k.register(_c15, "SystemMachine");
__turbopack_context__.k.register(_c16, "EntityGrid");
__turbopack_context__.k.register(_c17, "WalletMachine");
__turbopack_context__.k.register(_c18, "NeedLayers");
__turbopack_context__.k.register(_c19, "DemandExplorer");
__turbopack_context__.k.register(_c20, "MindMachine");
__turbopack_context__.k.register(_c21, "LeverMachine");
__turbopack_context__.k.register(_c22, "ChaiMachine");
__turbopack_context__.k.register(_c23, "ScaleMachine");
__turbopack_context__.k.register(_c24, "MktgWhySection");
__turbopack_context__.k.register(_c25, "MktgAnticipationSection");
__turbopack_context__.k.register(_c26, "MktgToplineSection");
__turbopack_context__.k.register(_c27, "MktgVsSellingSection");
__turbopack_context__.k.register(_c28, "MktgDefinitionsSection");
__turbopack_context__.k.register(_c29, "MktgSystemSection");
__turbopack_context__.k.register(_c30, "MktgMarketableSection");
__turbopack_context__.k.register(_c31, "MktgNwdSection");
__turbopack_context__.k.register(_c32, "MktgDemandStatesSection");
__turbopack_context__.k.register(_c33, "MktgClosedSystemSection");
__turbopack_context__.k.register(_c34, "MktgBizValueSection");
__turbopack_context__.k.register(_c35, "MktgChaiSection");
__turbopack_context__.k.register(_c36, "MktgCpvSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_mktg_MktgParts1_tsx_b0b14f79._.js.map