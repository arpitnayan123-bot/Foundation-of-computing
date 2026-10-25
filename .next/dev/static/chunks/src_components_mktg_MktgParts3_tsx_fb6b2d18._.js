(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/mktg/MktgParts3.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MktgAccorSection",
    ()=>MktgAccorSection,
    "MktgCirclesSection",
    ()=>MktgCirclesSection,
    "MktgErasSection",
    ()=>MktgErasSection,
    "MktgEvolutionSection",
    ()=>MktgEvolutionSection,
    "MktgFrameSection",
    ()=>MktgFrameSection,
    "MktgLevelsSection",
    ()=>MktgLevelsSection,
    "MktgMessySection",
    ()=>MktgMessySection,
    "MktgPopPodCasesSection",
    ()=>MktgPopPodCasesSection,
    "MktgPos3qSection",
    ()=>MktgPos3qSection,
    "MktgSafeSection",
    ()=>MktgSafeSection,
    "MktgStagesSection",
    ()=>MktgStagesSection,
    "MktgTupoSection",
    ()=>MktgTupoSection,
    "MktgWhyBuySection",
    ()=>MktgWhyBuySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   MKTG — "Principles of Marketing" · shelf 06 of THE ATLAS
   FILE 3 — Lectures 13–19 (13 chapters)
   L13 Tupo case · L14 SAFE + positioning's 3 questions ·
   L15 Accor map + frames/POPs/PODs · L16 four levels + POD→POP
   evolution · L17 three circles + case files · L18 why people
   buy + eras & nudges · L19 five stages + the messy middle.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/baby.js [app-client] (ecmascript) <export default as Baby>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brush$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brush.js [app-client] (ecmascript) <export default as Brush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cup$2d$soda$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CupSoda$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cup-soda.js [app-client] (ecmascript) <export default as CupSoda>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-client] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gem.js [app-client] (ecmascript) <export default as Gem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hand.js [app-client] (ecmascript) <export default as Hand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-handshake.js [app-client] (ecmascript) <export default as HeartHandshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hotel.js [app-client] (ecmascript) <export default as Hotel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript) <export default as IndianRupee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$infinity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Infinity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/infinity.js [app-client] (ecmascript) <export default as Infinity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/leaf.js [app-client] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sofa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sofa$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sofa.js [app-client] (ecmascript) <export default as Sofa>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature(), _s12 = __turbopack_context__.k.signature(), _s13 = __turbopack_context__.k.signature(), _s14 = __turbopack_context__.k.signature(), _s15 = __turbopack_context__.k.signature(), _s16 = __turbopack_context__.k.signature(), _s17 = __turbopack_context__.k.signature(), _s18 = __turbopack_context__.k.signature(), _s19 = __turbopack_context__.k.signature(), _s20 = __turbopack_context__.k.signature(), _s21 = __turbopack_context__.k.signature(), _s22 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/* ============================================================
   SHARED HELPERS — teal & champagne machine kit
   ============================================================ */ function Grad({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            backgroundImage: "linear-gradient(115deg,#14b8a6 0%,#0f766e 48%,#a97d2c 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = Grad;
function MBtn({ onClick, children, tone = "ghost", ariaLabel, disabled = false }) {
    const style = tone === "teal" ? {
        background: "linear-gradient(135deg,#14b8a6,#0f766e)",
        color: "#f4fbf9"
    } : tone === "gold" ? {
        background: "linear-gradient(135deg,#e3c26b,#a97d2c)",
        color: "#fffaf0"
    } : {
        background: "#ffffff",
        color: "#0f766e",
        border: "1px solid #c8e2dc"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        style: style,
        "aria-label": ariaLabel,
        disabled: disabled,
        className: "inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c1 = MBtn;
function Status({ children, tone = "teal" }) {
    const c = tone === "rose" ? {
        bg: "#f7ecec",
        bd: "#dcc3c9",
        tx: "#9f3d54"
    } : tone === "gold" ? {
        bg: "#f7f1e0",
        bd: "#ddcda2",
        tx: "#8a6420"
    } : {
        bg: "#edf6f4",
        bd: "#c2ded8",
        tx: "#0f766e"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        "aria-live": "polite",
        className: "mt-4 min-h-[2.4rem] rounded-xl px-3.5 py-2.5 font-mono-warm text-[.85rem] font-bold leading-relaxed",
        style: {
            background: c.bg,
            border: `1px dashed ${c.bd}`,
            color: c.tx
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_c2 = Status;
function DarkPanel({ children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-2xl p-5 md:p-7 ${className}`,
        style: {
            background: "linear-gradient(165deg,#0c2124 0%,#12302f 60%,#143236 100%)",
            border: "1px solid rgba(227,194,107,.22)"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c3 = DarkPanel;
/** Step-player state: Play auto-advances, Next steps manually, Reset rewinds. */ function useStepPlayer(total, ms = 2200) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useStepPlayer.useEffect": ()=>{
            if (!playing) return;
            if (step >= total - 1) {
                const t = window.setTimeout({
                    "useStepPlayer.useEffect.t": ()=>setPlaying(false)
                }["useStepPlayer.useEffect.t"], 0);
                return ({
                    "useStepPlayer.useEffect": ()=>window.clearTimeout(t)
                })["useStepPlayer.useEffect"];
            }
            const id = window.setInterval({
                "useStepPlayer.useEffect.id": ()=>setStep({
                        "useStepPlayer.useEffect.id": (s)=>Math.min(s + 1, total - 1)
                    }["useStepPlayer.useEffect.id"])
            }["useStepPlayer.useEffect.id"], ms);
            return ({
                "useStepPlayer.useEffect": ()=>window.clearInterval(id)
            })["useStepPlayer.useEffect"];
        }
    }["useStepPlayer.useEffect"], [
        playing,
        step,
        total,
        ms
    ]);
    const next = ()=>setStep((s)=>Math.min(s + 1, total - 1));
    const reset = ()=>{
        setPlaying(false);
        setStep(0);
    };
    const toggle = ()=>{
        if (!playing && step >= total - 1) setStep(0);
        setPlaying(!playing);
    };
    return {
        step,
        setStep,
        next,
        reset,
        playing,
        toggle
    };
}
_s(useStepPlayer, "JAolRWA81lkGE101AfRUjyobxQk=");
function PlayerControls({ step, total, playing, onToggle, onNext, onReset, labels }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 flex flex-wrap items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                tone: "teal",
                onClick: onToggle,
                ariaLabel: playing ? "Pause the player" : "Play the player",
                children: [
                    playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                        className: "h-4 w-4",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 139,
                        columnNumber: 20
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                        className: "h-4 w-4",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 139,
                        columnNumber: 64
                    }, this),
                    playing ? "Pause" : "Play"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                tone: "gold",
                onClick: onNext,
                ariaLabel: "Next step",
                disabled: step >= total - 1,
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                onClick: onReset,
                ariaLabel: "Reset the player",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                        className: "h-4 w-4",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    "Reset"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-1 flex items-center gap-1.5",
                "aria-hidden": true,
                children: Array.from({
                    length: total
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-2 w-2 rounded-full transition-colors duration-300",
                        style: {
                            background: i <= step ? "#0f766e" : "#d5e6e1"
                        }
                    }, i, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-mono-warm text-[.75rem] font-bold text-[#5f7472]",
                children: labels ? labels[step] : `step ${step + 1}/${total}`
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_c4 = PlayerControls;
const proseCls = "max-w-3xl text-[.95rem] leading-relaxed text-[#3a4a48]";
/* ============================================================
   L13 · TUPO CASE (tupo-case)
   ============================================================ */ function TupoGapMachine() {
    _s1();
    const [revealed, setRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__["Baby"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#0f766e"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "The age map — find the hole"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "Lecture 13 · segmentation in the wild"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 640 200",
                className: "mt-4 h-auto w-full",
                role: "img",
                "aria-label": "Age axis from 0 to 20 with baby products for 0 to 2, adult and family products for 16 plus, and the 3 to 15 gap glowing once revealed",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                        x1: "40",
                        y1: "150",
                        x2: "600",
                        y2: "150",
                        stroke: "#5f7472",
                        strokeWidth: "2",
                        opacity: 1,
                        initial: {
                            pathLength: 0
                        },
                        whileInView: {
                            pathLength: 1
                        },
                        viewport: {
                            once: true
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M600 150 L590 144 L590 156 Z",
                        fill: "#5f7472"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "40",
                        y: "118",
                        width: "90",
                        height: "32",
                        rx: "8",
                        fill: "#0f766e",
                        opacity: 0.28
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "85",
                        y: "139",
                        textAnchor: "middle",
                        fontSize: "12",
                        fontWeight: "800",
                        fill: "#0f766e",
                        children: "0–2 · baby"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "490",
                        y: "118",
                        width: "100",
                        height: "32",
                        rx: "8",
                        fill: "#a97d2c",
                        opacity: 0.3
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "540",
                        y: "139",
                        textAnchor: "middle",
                        fontSize: "12",
                        fontWeight: "800",
                        fill: "#a97d2c",
                        children: "16+ · adult & family"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                        x: "150",
                        y: "108",
                        width: "320",
                        height: "52",
                        rx: "10",
                        fill: "#e3c26b",
                        stroke: "#a97d2c",
                        strokeWidth: "2",
                        opacity: revealed ? 0.55 : 0.12,
                        animate: {
                            opacity: revealed ? 0.55 : 0.12
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                        x: "310",
                        y: "128",
                        textAnchor: "middle",
                        fontSize: "14",
                        fontWeight: "800",
                        fill: "#a97d2c",
                        opacity: revealed ? 1 : 0,
                        animate: {
                            opacity: revealed ? 1 : 0
                        },
                        children: "3–15 · the gap Tupo claimed"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                        x: "310",
                        y: "176",
                        textAnchor: "middle",
                        fontSize: "11.5",
                        fontWeight: "700",
                        fill: "#5f7472",
                        opacity: revealed ? 1 : 0,
                        animate: {
                            opacity: revealed ? 1 : 0
                        },
                        children: "“too old for baby products but too young for adult products”"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                        x: "310",
                        y: "98",
                        textAnchor: "middle",
                        fontSize: "11.5",
                        fontWeight: "700",
                        fill: "#9f3d54",
                        opacity: revealed ? 0 : 1,
                        animate: {
                            opacity: revealed ? 0 : 1
                        },
                        children: "nobody's products — a market served by no one"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    [
                        "0",
                        "2",
                        "3",
                        "15",
                        "16",
                        "20"
                    ].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: 40 + i * 100,
                                    y1: "150",
                                    x2: 40 + i * 100,
                                    y2: "158",
                                    stroke: "#5f7472",
                                    strokeWidth: "1.6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: 40 + i * 100,
                                    y: "172",
                                    textAnchor: "middle",
                                    fontSize: "10.5",
                                    fontWeight: "700",
                                    fill: "#5f7472",
                                    children: t
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, t, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "320",
                        y: "194",
                        textAnchor: "middle",
                        fontSize: "10.5",
                        fontWeight: "700",
                        fill: "#5f7472",
                        children: "age →"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: revealed ? "ghost" : "teal",
                        onClick: ()=>setRevealed(false),
                        ariaLabel: "Show the market before Tupo",
                        children: "Before Tupo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: revealed ? "teal" : "gold",
                        onClick: ()=>setRevealed(true),
                        ariaLabel: "Reveal the 3 to 15 gap",
                        children: "Reveal the 3–15 gap"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
                children: revealed ? "Tupo identified and filled a previously overlooked gap for children aged 3–15 — a heterogeneous market divided into just two categories until then." : "Traditional personal care markets had only two shelves: baby (0–2) and adult & family (16+). Press reveal to see what Tupo saw."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
_s1(TupoGapMachine, "KtulkxOojQCTASfIDJjeF1Rg0Bo=");
_c5 = TupoGapMachine;
function TupoCasePlayer() {
    _s2();
    const { step, next, reset, playing, toggle } = useStepPlayer(6, 2600);
    const beats = [
        {
            t: "The overlooked middle",
            d: "Traditional personal care split into baby products (0–2) and adult & family products (16+). Children aged 3–15 fell between the shelves — too old for baby products, too young for adult products.",
            v: "gap"
        },
        {
            t: "Two lenses on one segment",
            d: "Demographic: age 3–15, growing children, early childhood through adolescence. Psychographic: belief in age-appropriate products, preference for natural & organic ingredients, desire for gentle non-harsh formulations that prevent skin irritation and infections.",
            v: "lenses"
        },
        {
            t: "Dual targeting",
            d: "Children are the preference-makers — increasingly developing their own desire for personal products. Parents are the purchasers — primary decision-makers who prioritise safety and well-being over price.",
            v: "doors"
        },
        {
            t: "Dadi-nani positioning",
            d: "Ingredients from traditional home remedies — turmeric, hibiscus, amla, shikakai. Not marketed as “organic” or “natural”, but as remedies recommended by grandparents — dadi and nani — creating emotional connection and trust.",
            v: "ingredients"
        },
        {
            t: "Premium pricing, willingly paid",
            d: "Standard market price for 300ML shampoo: ₹150. Tupo's price for the same volume: ₹450. Premium justified by age-appropriate formulation and ingredient quality — parents pay for child health and safety.",
            v: "price"
        },
        {
            t: "What the niche became",
            d: "Niche market creation · dual targeting · product expansion into face wash and makeup for growing children · brand ambassadorship with Farah Khan, aligned with brand values. Daughters actively request Tupo shampoo with shikakai.",
            v: "growth"
        }
    ];
    const v = beats[step].v;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#0f766e"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "The Tupo case player"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "six beats of a niche, end to end"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-5 lg:grid-cols-[1fr,1.15fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl p-4",
                        style: {
                            background: "#f2efe7",
                            border: "1px solid #e3ddcf",
                            minHeight: "220px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 14
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -14
                                },
                                transition: {
                                    duration: 0.35
                                },
                                children: [
                                    v === "gap" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl px-4 py-3 font-bold text-white",
                                                style: {
                                                    background: "linear-gradient(135deg,#14b8a6,#0f766e)"
                                                },
                                                children: "Baby products · 0–2 years"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 281,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl border-2 border-dashed px-4 py-3 text-center font-bold",
                                                style: {
                                                    borderColor: "#a97d2c",
                                                    color: "#a97d2c",
                                                    background: "rgba(227,194,107,.14)"
                                                },
                                                children: "3–15 · nobody home"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 282,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl px-4 py-3 font-bold text-white",
                                                style: {
                                                    background: "linear-gradient(135deg,#e3c26b,#a97d2c)"
                                                },
                                                children: "Adult & family · 16+ years"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 280,
                                        columnNumber: 17
                                    }, this) : null,
                                    v === "lenses" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl bg-white p-3",
                                                style: {
                                                    border: "1px solid #cfe3de"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[.72rem] font-extrabold uppercase tracking-[.14em]",
                                                        style: {
                                                            color: "#0f766e"
                                                        },
                                                        children: "Demographic"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-[.88rem] font-semibold text-[#1f2b2b]",
                                                        children: "Age 3–15 · growing children · early childhood → adolescence"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 290,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl bg-white p-3",
                                                style: {
                                                    border: "1px solid #e0d3ae"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[.72rem] font-extrabold uppercase tracking-[.14em]",
                                                        style: {
                                                            color: "#a97d2c"
                                                        },
                                                        children: "Psychographic"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-[.88rem] font-semibold text-[#1f2b2b]",
                                                        children: "Age-appropriate beliefs · natural & organic preference · gentle, non-harsh formulations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 294,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 289,
                                        columnNumber: 17
                                    }, this) : null,
                                    v === "doors" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl p-3 text-center",
                                                style: {
                                                    background: "linear-gradient(135deg,#14b8a6,#0f766e)",
                                                    color: "#f4fbf9"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        className: "mx-auto h-6 w-6",
                                                        "aria-hidden": true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-[.85rem] font-extrabold",
                                                        children: "Children 3–15"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[.74rem] font-semibold opacity-90",
                                                        children: "preference-makers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 302,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl p-3 text-center",
                                                style: {
                                                    background: "linear-gradient(135deg,#e3c26b,#a97d2c)",
                                                    color: "#fffaf0"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"], {
                                                        className: "mx-auto h-6 w-6",
                                                        "aria-hidden": true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-[.85rem] font-extrabold",
                                                        children: "Parents"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[.74rem] font-semibold opacity-90",
                                                        children: "purchasers · safety over price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 307,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "col-span-2 rounded-xl bg-white px-3 py-2 text-center text-[.78rem] font-bold text-[#5f7472]",
                                                style: {
                                                    border: "1px dashed #cfe3de"
                                                },
                                                children: "one brand, two doors — both must open"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 312,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 301,
                                        columnNumber: 17
                                    }, this) : null,
                                    v === "ingredients" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: [
                                                    "Turmeric",
                                                    "Hibiscus",
                                                    "Amla",
                                                    "Shikakai"
                                                ].map((ing)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full px-3 py-1.5 text-[.8rem] font-extrabold",
                                                        style: {
                                                            background: "#0f766e",
                                                            color: "#eefaf6"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                                                                className: "mr-1 inline h-3.5 w-3.5",
                                                                "aria-hidden": true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 25
                                                            }, this),
                                                            ing
                                                        ]
                                                    }, ing, true, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 319,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 rounded-xl px-4 py-3 text-center font-bold",
                                                style: {
                                                    background: "rgba(227,194,107,.2)",
                                                    border: "1px solid #e0d3ae",
                                                    color: "#8a6420"
                                                },
                                                children: "positioned as dadi & nani ke nuske — trust over labels"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 326,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 318,
                                        columnNumber: 17
                                    }, this) : null,
                                    v === "price" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[.78rem] font-bold text-[#5f7472]",
                                                        children: "Market standard · 300ML"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-1 h-8 rounded-lg",
                                                        style: {
                                                            background: "#cfe3de",
                                                            width: "33%"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 leading-[2rem] font-extrabold text-[#0f766e]",
                                                            children: "₹150"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 333,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[.78rem] font-bold text-[#5f7472]",
                                                        children: "Tupo · same 300ML"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "h-8 rounded-lg",
                                                        style: {
                                                            background: "linear-gradient(135deg,#e3c26b,#a97d2c)",
                                                            width: "100%"
                                                        },
                                                        initial: {
                                                            width: "33%"
                                                        },
                                                        animate: {
                                                            width: "100%"
                                                        },
                                                        transition: {
                                                            duration: 0.7,
                                                            ease: "easeInOut"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 leading-[2rem] font-extrabold text-[#fffaf0]",
                                                            children: "₹450"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 339,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[.74rem] font-bold text-[#5f7472]",
                                                children: "3× the price — paid without flinching when safety is the benefit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 346,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 332,
                                        columnNumber: 17
                                    }, this) : null,
                                    v === "growth" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            [
                                                "Niche creation",
                                                "Dual targeting",
                                                "Face wash line",
                                                "Makeup line",
                                                "Farah Khan ambassador"
                                            ].map((chip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "chip",
                                                    children: chip
                                                }, chip, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 21
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 w-full rounded-xl bg-white px-3 py-2 text-[.8rem] font-bold text-[#1f2b2b]",
                                                style: {
                                                    border: "1px solid #e3ddcf"
                                                },
                                                children: "“Mummy, the one with shikakai.” — children advocate brands by name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 354,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 350,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, v, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerControls, {
                                step: step,
                                total: 6,
                                playing: playing,
                                onToggle: toggle,
                                onNext: next,
                                onReset: reset,
                                labels: beats.map((b, i)=>`beat ${i + 1}/6`)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-[.95rem] leading-relaxed text-[#3a4a48]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-[#0f766e]",
                                        children: [
                                            step + 1,
                                            ". ",
                                            beats[step].t,
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 366,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    beats[step].d
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 365,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 362,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 269,
        columnNumber: 5
    }, this);
}
_s2(TupoCasePlayer, "rwd0htRa4lD55pV82iHkBJcsij4=", false, function() {
    return [
        useStepPlayer
    ];
});
_c6 = TupoCasePlayer;
function MktgTupoSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "tupo-case",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 13",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Tupo and the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grad, {
                            children: "3–15 gap"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 379,
                            columnNumber: 31
                        }, void 0),
                        " nobody served"
                    ]
                }, void 0, true),
                lead: "Segmentation and targeting in the real world: a personal-care brand for growing children — too old for baby products, too young for adult products — and the parents who still control the wallet."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "A market with only two shelves",
                sub: "Homogeneous division, heterogeneous reality"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: proseCls,
                    children: [
                        "Market segmentation divides a homogeneous market into heterogeneous groups with similar characteristics. Traditional personal care was divided into just two categories — ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "baby products (0–2 years)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 387,
                            columnNumber: 76
                        }, this),
                        " and",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "adult & family products (16+ years)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, this),
                        ". Tupo identified and filled the previously overlooked gap in between: children aged 3–15 who were ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            children: "“too old for baby products but too young for adult products.”"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 389,
                            columnNumber: 55
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 385,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TupoGapMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 392,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 392,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Segmentation, then dual targeting",
                sub: "Demographic + psychographic; preference-makers + purchasers"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Demographic",
                            v: "Age 3–15 years (growing children) · life stage: early childhood through adolescence"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 397,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Psychographic",
                            v: "Age-appropriate product beliefs · natural & organic preference · gentle, non-harsh formulations that prevent skin irritation and infections"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 396,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 395,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "insight",
                    title: "The key insight — quoted",
                    children: [
                        "“Children are old enough to have preferences, but young enough that parents still control the wallet and strongly care about their safety.” Children become the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "preference-makers"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 404,
                            columnNumber: 66
                        }, this),
                        "; parents remain the",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "purchasers"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 405,
                            columnNumber: 11
                        }, this),
                        " — safety and well-being outrank price."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 402,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 401,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TupoCasePlayer, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 408,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 408,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "Behaviour shifts the decision pattern",
                sub: "Children advocate; parents fund"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 410,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: `${proseCls} grid gap-2`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Children now have distinct preferences rather than simply using parental products."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 413,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                "• They actively advocate for specific brands — the lecture's example: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "daughters requesting Tupo shampoo with shikakai"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 414,
                                    columnNumber: 90
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 414,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Parents value age-appropriate formulations over cost savings."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 415,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 412,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 411,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "4",
                title: "Lessons & the company it keeps",
                sub: "What the case teaches — and who else plays this game"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 419,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                "Cetaphil",
                                "Bioderma",
                                "Plum",
                                "Juicy Chemistry",
                                "Mama Earth"
                            ].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: b
                                }, b, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 424,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 422,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-[.88rem] leading-relaxed text-[#2b2014]",
                            children: "Brands employing similar niche-segmentation strategies — each identified an underserved segment and created a specialised product category."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 427,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 421,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 420,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "story",
                    title: "Real-world marketing lessons",
                    children: "Live through the problem to identify genuine market gaps · understand evolving preferences and generational differences · create authentic value propositions from genuine needs · balance consumer preference with purchasing-power dynamics · and charge premium prices when clear value differentiation exists."
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 434,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Lecture 13 · concept check",
                            q: "Tupo charges ₹450 for a 300ML shampoo against a market standard of ₹150. The lecture justifies this premium by…",
                            options: [
                                "mass-production economies of scale",
                                "age-appropriate formulation and ingredient quality parents value for safety",
                                "heavy discounting to build trial",
                                "spending more on celebrity advertising alone"
                            ],
                            answer: 1,
                            explain: "Premium positioning is justified by age-appropriate formulation and ingredient quality — parents demonstrated willingness to pay premium prices for child health and safety."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 442,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                            items: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "A gap between two served shelves — 0–2 and 16+ — left ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "3–15 unserved"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 451,
                                            columnNumber: 69
                                        }, void 0),
                                        "; niches hide in plain sight."
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Segment on ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "two lenses"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 452,
                                            columnNumber: 26
                                        }, void 0),
                                        ": demographic (age, life stage) and psychographic (age-appropriate, natural, gentle)."
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Target ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "twice"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 453,
                                            columnNumber: 22
                                        }, void 0),
                                        ": children choose, parents pay — dual targeting of preference-makers and purchasers."
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Position on ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "dadi-nani trust"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 454,
                                            columnNumber: 27
                                        }, void 0),
                                        " (turmeric, hibiscus, amla, shikakai) rather than the “organic” label."
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "₹150 → ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "₹450"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 455,
                                            columnNumber: 22
                                        }, void 0),
                                        " for 300ML: clear differentiation lets you price premium — and expand (face wash, makeup, Farah Khan)."
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 450,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 441,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 376,
        columnNumber: 5
    }, this);
}
_c7 = MktgTupoSection;
/* ============================================================
   L14 · SAFE TARGETING (safe-targeting)
   ============================================================ */ const SAFE_GATES = [
    {
        k: "S",
        label: "Size",
        q: "Is market demand inside the segment large enough to justify the marketing investment and generate revenue?"
    },
    {
        k: "A",
        label: "Accessibility",
        q: "Can the organisation actually reach and serve the segment? A large market with no physical presence or distribution channels is not viable."
    },
    {
        k: "F",
        label: "Fitment",
        q: "Does the brand, product or service align with the segment's needs, values and requirements?"
    },
    {
        k: "E",
        label: "Economics",
        q: "Does serving the segment make financial sense — a sustainable, profitable business model?"
    }
];
const SAFE_SEGS = [
    "Sneakerheads",
    "First-time runners",
    "Marathon runners",
    "Comfort walkers"
];
function SafePipeline() {
    _s3();
    const { step, next, reset, playing, toggle } = useStepPlayer(5, 2800);
    const statuses = [
        "Gate 1 · Size — assess demand inside each segment; it must be large enough to justify the investment and generate revenue.",
        "Gate 2 · Accessibility — reach and serviceability. No presence or distribution channels? Not viable, however big.",
        "Gate 3 · Fitment — the offering must resonate with the segment's values and requirements, and with brand capability.",
        "Gate 4 · Economics — even if everything else passes, the business model must be sustainable and profitable for that segment.",
        "Verdict — first-time runners: high market size · medium competition · high brand capability · medium willingness to pay. Superior to the other three for a single new running-shoe line."
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#0f766e"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 487,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "The SAFE four-gate scan"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 488,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "four segments · one new running shoe"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 489,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 486,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-5 lg:grid-cols-[1fr,1.2fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-2.5",
                        children: SAFE_GATES.map((g, i)=>{
                            const active = step < 4 && step === i;
                            const done = step > i || step === 4;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 rounded-xl px-3.5 py-2.5 transition-all duration-300",
                                style: {
                                    background: active ? "linear-gradient(135deg,#14b8a6,#0f766e)" : done ? "#edf6f4" : "#ffffff",
                                    border: `1px solid ${active ? "#0f766e" : "#dce8e4"}`,
                                    opacity: step === 4 && !done ? 0.55 : 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-black",
                                        style: {
                                            background: active ? "rgba(255,255,255,.2)" : "#eef6f4",
                                            color: active ? "#f4fbf9" : "#0f766e"
                                        },
                                        children: g.k
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 504,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[.9rem] font-extrabold",
                                                style: {
                                                    color: active ? "#f4fbf9" : "#1f2b2b"
                                                },
                                                children: g.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 509,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[.72rem] font-semibold",
                                                style: {
                                                    color: active ? "rgba(244,251,249,.85)" : "#5f7472"
                                                },
                                                children: done && !active ? "cleared" : active ? "scanning…" : "waiting"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 510,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 508,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, g.k, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 497,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl p-4",
                                style: {
                                    background: "#f2efe7",
                                    border: "1px solid #e3ddcf",
                                    minHeight: "190px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "wait",
                                    children: step < 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            y: -12
                                        },
                                        transition: {
                                            duration: 0.3
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[.72rem] font-extrabold uppercase tracking-[.16em]",
                                                style: {
                                                    color: "#a97d2c"
                                                },
                                                children: [
                                                    "Gate ",
                                                    step + 1,
                                                    " of 4 · ",
                                                    SAFE_GATES[step].label
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 523,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-[.9rem] font-semibold leading-relaxed text-[#1f2b2b]",
                                                children: SAFE_GATES[step].q
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 526,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex flex-wrap gap-2",
                                                children: SAFE_SEGS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        initial: {
                                                            opacity: 0.35
                                                        },
                                                        animate: {
                                                            opacity: 1
                                                        },
                                                        className: "rounded-full px-3 py-1.5 text-[.78rem] font-extrabold",
                                                        style: {
                                                            background: s === "First-time runners" ? "rgba(20,184,166,.16)" : "#ffffff",
                                                            color: "#0f766e",
                                                            border: `1px solid ${s === "First-time runners" ? "#14b8a6" : "#cfe3de"}`
                                                        },
                                                        children: s
                                                    }, s, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 527,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, step, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 522,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.96
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            duration: 0.35
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl px-4 py-3",
                                                style: {
                                                    background: "linear-gradient(135deg,#14b8a6,#0f766e)",
                                                    color: "#f4fbf9"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[.72rem] font-extrabold uppercase tracking-[.16em] opacity-85",
                                                        children: "Target selected"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 544,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-extrabold",
                                                        children: "First-time runners"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 545,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 543,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex flex-wrap gap-2",
                                                children: [
                                                    "Market size: high",
                                                    "Competition: medium",
                                                    "Brand capability: high",
                                                    "Willingness to pay: medium"
                                                ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full bg-white px-3 py-1.5 text-[.76rem] font-extrabold",
                                                        style: {
                                                            border: "1px solid #cfe3de",
                                                            color: "#0f766e"
                                                        },
                                                        children: c
                                                    }, c, false, {
                                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                        lineNumber: 549,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 547,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-[.8rem] font-semibold text-[#5f7472]",
                                                children: "The other three segments stay evaluated — but a single product line goes where the four gates open widest."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 554,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, "verdict", true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 542,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 520,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 519,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerControls, {
                                step: step,
                                total: 5,
                                playing: playing,
                                onToggle: toggle,
                                onNext: next,
                                onReset: reset
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 561,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
                                children: statuses[step]
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 562,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 491,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 485,
        columnNumber: 5
    }, this);
}
_s3(SafePipeline, "rwd0htRa4lD55pV82iHkBJcsij4=", false, function() {
    return [
        useStepPlayer
    ];
});
_c8 = SafePipeline;
function MktgSafeSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "safe-targeting",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 14",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Targeting and the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grad, {
                            children: "SAFE framework"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 574,
                            columnNumber: 36
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Segmentation hands you many groups; limited budgets and resources force a choice. Targeting evaluates the segments and decides which to focus upon — because if everyone is your priority, then nobody is your priority."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 572,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "The constraint that creates targeting",
                sub: "You cannot market to all segments equally"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 578,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: proseCls,
                    children: [
                        "Targeting is the process of evaluating market segments and deciding which segment or segments the organisation will focus upon. Organisations have limited budgets and resources, which makes it impossible to market to all identified segments equally — hence the lecture's fundamental principle:",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "“if everyone is your priority, then nobody is your priority.”"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 584,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 580,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 579,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Four gates before you commit",
                sub: "Size · Accessibility · Fitment · Economics"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 588,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SafePipeline, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 589,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 589,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "Two dangerous assumptions",
                sub: "The traps hiding inside 'obvious' choices"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 591,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-5 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-5",
                            style: {
                                borderColor: "#e6a08c",
                                background: "#fdf3ef"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex items-center gap-2 font-extrabold text-[#8c2f2f]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "h-5 w-5",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 595,
                                            columnNumber: 82
                                        }, this),
                                        " The largest-segment assumption"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 595,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.9rem] leading-relaxed text-[#2b2014]",
                                    children: [
                                        "The largest market segment is not automatically the best target. Volume matters, but so do ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "value and profit margin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 597,
                                            columnNumber: 106
                                        }, this),
                                        " — a smaller, more profitable segment may generate greater revenue than a larger one with lower willingness to pay or higher competition."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 596,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 594,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm p-5",
                            style: {
                                borderColor: "#e6a08c",
                                background: "#fdf3ef"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex items-center gap-2 font-extrabold text-[#8c2f2f]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "h-5 w-5",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 603,
                                            columnNumber: 82
                                        }, this),
                                        " The fastest-growing assumption"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 603,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.9rem] leading-relaxed text-[#2b2014]",
                                    children: [
                                        "The fastest-growing segment may not align with the organisation's product fit or capabilities. Growth rate alone should not decide — ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "brand capability and product–segment alignment"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 606,
                                            columnNumber: 41
                                        }, this),
                                        " matter equally."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 604,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 602,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 593,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 592,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "4",
                title: "The framework in the wild",
                sub: "Netflix, Spotify and the sneaker company"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 612,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Netflix",
                            v: "A crime-thriller launch with a limited promotional budget of 10 crores concentrates on the “true crime” segment rather than spreading equally across all six consumer segments — focus maximises return on investment"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 615,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Spotify",
                            v: "Students were not the largest segment in Europe & India, yet Premium for Students at a subsidised price delivered higher overall revenue — large volume × price elasticity"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 616,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Sneaker company",
                            v: "Four segments (sneakerheads, first-time runners, marathon runners, comfort walkers) scanned with SAFE for one new product line → first-time runners: high market size, medium competition, high brand capability, medium willingness to pay"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 617,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 614,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 613,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Lecture 14 · concept check",
                            q: "In the sneaker-company SAFE scan, which segment is the optimal target for the single new running-shoe line?",
                            options: [
                                "Sneakerheads",
                                "First-time runners",
                                "Marathon runners",
                                "Comfort walkers"
                            ],
                            answer: 1,
                            explain: "First-time runners win with high market size, medium competition, high brand capability and medium willingness to pay — superior to the other options."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 623,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 622,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                            items: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Targeting = ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "evaluating and choosing"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 631,
                                            columnNumber: 27
                                        }, void 0),
                                        " — limited budgets make “everyone” impossible."
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "SAFE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 632,
                                            columnNumber: 15
                                        }, void 0),
                                        ": Size, Accessibility, Fitment, Economics — all four gates must open."
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Largest ≠ best (volume vs ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "value & margin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 633,
                                            columnNumber: 41
                                        }, void 0),
                                        "); fastest-growing ≠ best (growth vs ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "fit & capability"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 633,
                                            columnNumber: 113
                                        }, void 0),
                                        ")."
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Netflix puts a 10-crore budget on ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "true crime"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 634,
                                            columnNumber: 49
                                        }, void 0),
                                        "; Spotify wins big with ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "students"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 634,
                                            columnNumber: 100
                                        }, void 0),
                                        " via volume and price elasticity."
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "If everyone is your priority, ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "nobody is your priority"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 635,
                                            columnNumber: 45
                                        }, void 0),
                                        "."
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 630,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 629,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 621,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 571,
        columnNumber: 5
    }, this);
}
_c9 = MktgSafeSection;
/* ============================================================
   L14 · POSITIONING'S 3 QUESTIONS (pos-3q)
   ============================================================ */ const MIND_CARDS = [
    {
        brand: "Dettol",
        assoc: "Safety & germ protection",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"]
    },
    {
        brand: "Coca-Cola",
        assoc: "Dominates the cola category",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cup$2d$soda$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CupSoda$3e$__["CupSoda"]
    },
    {
        brand: "Bisleri",
        assoc: "The first brand for mineral water",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"]
    }
];
function MindFlipMachine() {
    _s4();
    const [flipped, setFlipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        false,
        false,
        false
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#0f766e"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 658,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "Mental associations — flip to check"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 659,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "not accidental; deliberately built"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 660,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 657,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-4 sm:grid-cols-3",
                children: MIND_CARDS.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setFlipped((f)=>f.map((v, j)=>j === i ? !v : v)),
                        "aria-label": `Flip the ${c.brand} card to reveal its mental association`,
                        className: "h-44 w-full cursor-pointer",
                        style: {
                            perspective: 900
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "relative h-full w-full",
                            animate: {
                                rotateY: flipped[i] ? 180 : 0
                            },
                            transition: {
                                duration: 0.55,
                                ease: "easeInOut"
                            },
                            style: {
                                transformStyle: "preserve-3d"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-warm lift absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl p-4",
                                    style: {
                                        backfaceVisibility: "hidden"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(c.icon, {
                                            className: "h-8 w-8",
                                            style: {
                                                color: "#0f766e"
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 672,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-extrabold text-[#1f2b2b]",
                                            children: c.brand
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 673,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.72rem] font-bold uppercase tracking-[.14em] text-[#5f7472]",
                                            children: "tap to flip"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 674,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 670,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center",
                                    style: {
                                        backfaceVisibility: "hidden",
                                        transform: "rotateY(180deg)",
                                        background: "linear-gradient(165deg,#0c2124,#143236)",
                                        border: "1px solid rgba(227,194,107,.25)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.7rem] font-bold uppercase tracking-[.16em]",
                                            style: {
                                                color: "#e3c26b"
                                            },
                                            children: "the mind holds…"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 683,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.95rem] font-extrabold leading-snug",
                                            style: {
                                                color: "#e9f2ee"
                                            },
                                            children: c.assoc
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 684,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 676,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 668,
                            columnNumber: 13
                        }, this)
                    }, c.brand, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 664,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 662,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
                children: "Positioning creates immediate mental associations when consumers encounter a brand — adrenaline/action brands own thrill and adventure. These are results of deliberate positioning strategies, not accidents."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 690,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 656,
        columnNumber: 5
    }, this);
}
_s4(MindFlipMachine, "7BEXjLWdpqoc0qPVicpukfUA2zY=");
_c10 = MindFlipMachine;
const POS_3Q = [
    {
        q: "Who is the target audience?",
        a: "Consumers experiencing tooth sensitivity — not those seeking whiteness, freshness or general oral hygiene.",
        chip: "the sensitive-teeth consumer"
    },
    {
        q: "What category are we competing in?",
        a: "The toothpaste category — clarify the competitive landscape you fight inside.",
        chip: "toothpaste"
    },
    {
        q: "Why should this target choose us?",
        a: "Specialised sensitivity relief and protection — distinguishing it from general-purpose toothpastes like Colgate or Close-Up.",
        chip: "sensitivity relief & protection"
    }
];
function ThreeQMachine() {
    _s5();
    const { step, next, reset, playing, toggle } = useStepPlayer(3, 2800);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#a97d2c"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 709,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "Three questions, one brand — Sensodyne"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 710,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "who · what · why"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 711,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 708,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-3 sm:grid-cols-3",
                children: POS_3Q.map((item, i)=>{
                    const active = step === i;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl px-3.5 py-3 transition-all duration-300",
                        style: {
                            background: active ? "linear-gradient(135deg,#14b8a6,#0f766e)" : "#ffffff",
                            border: `1px solid ${active ? "#0f766e" : "#dce8e4"}`,
                            opacity: step > i || active ? 1 : 0.55
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono-warm text-[.7rem] font-extrabold uppercase tracking-[.16em]",
                                style: {
                                    color: active ? "#e3c26b" : "#a97d2c"
                                },
                                children: [
                                    "Q",
                                    i + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 723,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[.86rem] font-extrabold leading-snug",
                                style: {
                                    color: active ? "#f4fbf9" : "#1f2b2b"
                                },
                                children: item.q
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 726,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.q, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 717,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 713,
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
                        y: -12
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "mt-4 rounded-2xl p-4",
                    style: {
                        background: "#f2efe7",
                        border: "1px solid #e3ddcf"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[.72rem] font-extrabold uppercase tracking-[.16em]",
                            style: {
                                color: "#a97d2c"
                            },
                            children: "Sensodyne's answer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 734,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1.5 text-[.92rem] font-semibold leading-relaxed text-[#1f2b2b]",
                            children: POS_3Q[step].a
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 735,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mt-2 inline-block rounded-full px-3 py-1 text-[.74rem] font-extrabold",
                            style: {
                                background: "rgba(20,184,166,.14)",
                                color: "#0f766e",
                                border: "1px solid #14b8a6"
                            },
                            children: POS_3Q[step].chip
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 736,
                            columnNumber: 11
                        }, this)
                    ]
                }, step, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 732,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 731,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerControls, {
                step: step,
                total: 3,
                playing: playing,
                onToggle: toggle,
                onNext: next,
                onReset: reset,
                labels: [
                    "who — the audience",
                    "what — the category",
                    "why — the reason to choose"
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 741,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 707,
        columnNumber: 5
    }, this);
}
_s5(ThreeQMachine, "rwd0htRa4lD55pV82iHkBJcsij4=", false, function() {
    return [
        useStepPlayer
    ];
});
_c11 = ThreeQMachine;
function MktgPos3qSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "pos-3q",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 14",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Positioning: the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grad, {
                            children: "three questions"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 752,
                            columnNumber: 35
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Positioning designs an offering and its image so it occupies a distinctive and valued place in the target consumer's mind relative to competitors. How do we differentiate ourselves in the minds of our target audience?"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 750,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "The mind already has shelves",
                sub: "Mental associations are manufactured"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 756,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: proseCls,
                    children: [
                        "Positioning creates ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "immediate mental associations"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 759,
                            columnNumber: 31
                        }, this),
                        ". Dettol is safety and germ protection; adrenaline and action brands are thrill and adventure; Coca-Cola dominates the cola category; Bisleri is the first brand that comes to mind for mineral water. None of this is accidental — each association results from a deliberate positioning strategy."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 758,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 757,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MindFlipMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 765,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 765,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Three fundamental questions",
                sub: "Every positioning strategy must answer them — Sensodyne does"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 767,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreeQMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 768,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 768,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "insight",
                    title: "Why the three questions work",
                    children: "Answering who / what / why lets Sensodyne occupy a distinct space focused specifically on sensitivity relief — differentiation from broader competitors like Colgate or Close-Up, without abandoning the toothpaste category."
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 770,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 769,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "The complete STP framework",
                sub: "Three moves, one integrated strategy"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 776,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepsFlow"], {
                    steps: [
                        {
                            label: "Segmentation",
                            sub: "divide the heterogeneous market into homogeneous groups",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: "#0f766e"
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 779,
                                columnNumber: 106
                            }, void 0)
                        },
                        {
                            label: "Targeting",
                            sub: "prioritise by size, accessibility, fitment, economics",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: "#0f766e"
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 780,
                                columnNumber: 101
                            }, void 0)
                        },
                        {
                            label: "Positioning",
                            sub: "create a distinctive image that resonates and differentiates",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__["Gem"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: "#a97d2c"
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 781,
                                columnNumber: 110
                            }, void 0)
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 778,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 777,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "warn",
                    title: "The cost of skipping it",
                    children: "Appealing to everyone results in diluted messaging and wasted resources. STP keeps new product launches and campaigns strategically focused."
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 785,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 784,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Positioning = a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "distinctive and valued place"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 793,
                                    columnNumber: 29
                                }, void 0),
                                " in the target consumer's mind, relative to competitors."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Associations — Dettol = safety, Coca-Cola = cola, Bisleri = water — are ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "built, not born"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 794,
                                    columnNumber: 85
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Three questions: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Who"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 795,
                                    columnNumber: 30
                                }, void 0),
                                " is the target, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "what"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 795,
                                    columnNumber: 66
                                }, void 0),
                                " category are we in, ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "why"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 795,
                                    columnNumber: 108
                                }, void 0),
                                " choose us?"
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: "Sensodyne: sensitive-teeth consumers · toothpaste category · specialised sensitivity relief & protection."
                        }, void 0, false),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "STP is one integrated strategy — skip a step and the messaging ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "dilutes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 797,
                                    columnNumber: 76
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 792,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 791,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 749,
        columnNumber: 5
    }, this);
}
_c12 = MktgPos3qSection;
/* ============================================================
   L15 · ACCOR PERCEPTUAL MAP (accor-map)
   ============================================================ */ const ACCOR_TIERS = [
    {
        k: "Ibis",
        band: "₹3,000–4,000 / night",
        seg: "Economy segment — standard room designs; budget-conscious travelers needing basic accommodations",
        pts: [
            {
                x: 205,
                y: 252,
                label: "Ibis"
            }
        ]
    },
    {
        k: "Novotel & Mercure",
        band: "₹5,000–7,000 / night",
        seg: "Mid-range segment — moderate pricing with better room designs and features",
        pts: [
            {
                x: 318,
                y: 168,
                label: "Novotel"
            },
            {
                x: 356,
                y: 186,
                label: "Mercure"
            }
        ]
    },
    {
        k: "Pullman & Sofitel Legend",
        band: "₹9,000–15,000+ / night",
        seg: "Premium segment — superior designs, luxury amenities and enhanced services",
        pts: [
            {
                x: 470,
                y: 98,
                label: "Pullman"
            },
            {
                x: 528,
                y: 80,
                label: "Sofitel Legend"
            }
        ]
    }
];
function AccorMapMachine() {
    _s6();
    const [sel, setSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const px = (rupees)=>90 + rupees / 16000 * 530;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hotel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hotel$3e$__["Hotel"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#0f766e"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 832,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "The perceptual map — price × experience"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 833,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "one parent, three positions"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 834,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 831,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 660 360",
                className: "mt-4 h-auto w-full",
                role: "img",
                "aria-label": "Perceptual map of the Accor Group: Ibis in the economy tier at 3000 to 4000 rupees, Novotel and Mercure mid-range at 5000 to 7000, Pullman and Sofitel Legend premium at 9000 to 15000 plus",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                        x1: "90",
                        y1: "310",
                        x2: "630",
                        y2: "310",
                        stroke: "#5f7472",
                        strokeWidth: "2",
                        opacity: 1,
                        initial: {
                            pathLength: 0
                        },
                        whileInView: {
                            pathLength: 1
                        },
                        viewport: {
                            once: true
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 839,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                        x1: "90",
                        y1: "310",
                        x2: "90",
                        y2: "40",
                        stroke: "#5f7472",
                        strokeWidth: "2",
                        opacity: 1,
                        initial: {
                            pathLength: 0
                        },
                        whileInView: {
                            pathLength: 1
                        },
                        viewport: {
                            once: true
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 841,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "360",
                        y: "340",
                        textAnchor: "middle",
                        fontSize: "11.5",
                        fontWeight: "700",
                        fill: "#5f7472",
                        children: "price per night →"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 843,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "30",
                        y: "175",
                        textAnchor: "middle",
                        fontSize: "11.5",
                        fontWeight: "700",
                        fill: "#5f7472",
                        transform: "rotate(-90 30 175)",
                        children: "room design · amenities · service →"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 844,
                        columnNumber: 9
                    }, this),
                    [
                        3000,
                        5000,
                        7000,
                        9000,
                        15000
                    ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: px(r),
                                    y1: "310",
                                    x2: px(r),
                                    y2: "316",
                                    stroke: "#5f7472",
                                    strokeWidth: "1.4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 849,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: px(r),
                                    y: "330",
                                    textAnchor: "middle",
                                    fontSize: "10",
                                    fontWeight: "700",
                                    fill: "#5f7472",
                                    children: [
                                        "₹",
                                        r.toLocaleString("en-IN"),
                                        "+"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 850,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, r, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 848,
                            columnNumber: 11
                        }, this)),
                    ACCOR_TIERS.map((tier, ti)=>tier.pts.map((p, pi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                                animate: {
                                    scale: sel === ti ? 1.12 : 1,
                                    opacity: sel === null || sel === ti ? 1 : 0.35
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 220,
                                    damping: 20
                                },
                                style: {
                                    originX: `${p.x}px`,
                                    originY: `${p.y}px`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: p.x,
                                        cy: p.y,
                                        r: "13",
                                        fill: ti === 2 ? "#e3c26b" : ti === 1 ? "#14b8a6" : "#0f766e",
                                        opacity: 0.9
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 860,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: p.x,
                                        cy: p.y,
                                        r: "5",
                                        fill: "#f4fbf9"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 861,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: p.x,
                                        y: p.y - 20,
                                        textAnchor: "middle",
                                        fontSize: "11.5",
                                        fontWeight: "800",
                                        fill: "#1f2b2b",
                                        children: p.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 862,
                                        columnNumber: 15
                                    }, this),
                                    sel === ti ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                        cx: p.x,
                                        cy: p.y,
                                        r: "20",
                                        fill: "none",
                                        stroke: "#a97d2c",
                                        strokeWidth: "2",
                                        opacity: 0.9,
                                        animate: {
                                            r: [
                                                18,
                                                24
                                            ],
                                            opacity: [
                                                0.9,
                                                0.15
                                            ]
                                        },
                                        transition: {
                                            duration: 1.6,
                                            repeat: Infinity,
                                            ease: "easeOut"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 864,
                                        columnNumber: 17
                                    }, this) : null
                                ]
                            }, `${ti}-${pi}`, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 856,
                                columnNumber: 13
                            }, this))),
                    ACCOR_TIERS.map((tier, ti)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: tier.pts[0].x,
                            y: "64",
                            textAnchor: "middle",
                            fontSize: "10.5",
                            fontWeight: "800",
                            fill: ti === 2 ? "#a97d2c" : ti === 1 ? "#0f766e" : "#0f766e",
                            opacity: sel === null || sel === ti ? 0.85 : 0.25,
                            children: tier.band
                        }, tier.k, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 872,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 836,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-wrap gap-2",
                children: [
                    ACCOR_TIERS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                            tone: sel === i ? "teal" : "ghost",
                            onClick: ()=>setSel(sel === i ? null : i),
                            ariaLabel: `Highlight ${t.k} (${t.band})`,
                            children: t.k
                        }, t.k, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 880,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        onClick: ()=>setSel(null),
                        ariaLabel: "Clear the highlight",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 884,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 878,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
                tone: sel === null ? "teal" : "gold",
                children: sel === null ? "Same parent company — Accor — yet each chain targets a different consumer segment with distinct positioning. Tap a tier to isolate it." : `${ACCOR_TIERS[sel].k} — ${ACCOR_TIERS[sel].band}. ${ACCOR_TIERS[sel].seg}.`
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 886,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 830,
        columnNumber: 5
    }, this);
}
_s6(AccorMapMachine, "Kg/V/xzf+lXsiqS7aKUGktDgkZ8=");
_c13 = AccorMapMachine;
function MktgAccorSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "accor-map",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 15",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "The ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grad, {
                            children: "Accor map"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 900,
                            columnNumber: 22
                        }, void 0),
                        ": many positions, one parent"
                    ]
                }, void 0, true),
                lead: "Positioning creates a distinct space in consumers' minds — beyond product features, into perception and psychology. Perceptual maps show how one group serves many segments at once."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 898,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Why positioning earns its own lecture",
                sub: "Mental space · dual time · competitive advantage"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 904,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Mental space",
                            v: "Positioning is not only what you do with a product — equally important is what you do to the minds of consumers. Coca-Cola and Bisleri created brand perceptions beyond just being beverages"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 907,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Dual-time perspective",
                            v: "Effective positioning puts “one foot in the present and one foot in the future” — anticipating market changes and consumer needs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 908,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Competitive advantage",
                            v: "Positioning correctly to multiple segments simultaneously increases revenue and profitability without one segment negatively influencing the parent company's brand image"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 909,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 906,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 905,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Accor's three-tier map",
                sub: "Ibis · Novotel & Mercure · Pullman & Sofitel Legend"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 913,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccorMapMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 914,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 914,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "The parallel at home",
                sub: "ITC runs the same play"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 916,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "story",
                    title: "ITC — five stars above, boutique below",
                    children: [
                        "Similarly, ITC maintains five-star properties while launching boutique hotel chains to reach price-sensitive consumers — ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "preserving the luxury brand image"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 920,
                            columnNumber: 23
                        }, this),
                        " while capturing segments that would never book the flagship. Multi-segment positioning without brand dilution."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 918,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 917,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Positioning happens ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "in the mind"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 927,
                                    columnNumber: 33
                                }, void 0),
                                " — perception and psychology, not just features."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Keep ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "one foot in the present, one in the future"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 928,
                                    columnNumber: 18
                                }, void 0),
                                " — anticipate the market you will serve next."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Accor: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "₹3,000–4,000"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 929,
                                    columnNumber: 20
                                }, void 0),
                                " Ibis · ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "₹5,000–7,000"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 929,
                                    columnNumber: 57
                                }, void 0),
                                " Novotel & Mercure · ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "₹9,000–15,000+"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 929,
                                    columnNumber: 111
                                }, void 0),
                                " Pullman & Sofitel Legend."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Multiple segments at once is an advantage ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "only if the positions stay distinct"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 930,
                                    columnNumber: 55
                                }, void 0),
                                " — no dilution."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: "ITC's boutique chains prove the same move works across industries."
                        }, void 0, false)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 926,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 925,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 897,
        columnNumber: 5
    }, this);
}
_c14 = MktgAccorSection;
/* ============================================================
   L15 · FRAMES OF REFERENCE + PODs/POPs (frame-podspops)
   ============================================================ */ function FrameSwitchMachine() {
    _s7();
    const [ext, setExt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#0f766e"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 947,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "The frame-of-reference switch"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 948,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "who are you actually fighting?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 949,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 946,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 640 330",
                className: "mt-4 h-auto w-full",
                role: "img",
                "aria-label": "Cooking oil in the centre: the natural frame of reference holds Safola, Dhara and Fortune; the extended frame adds olive oil, pure ghee and mustard oil as substitutes",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                        cx: "320",
                        cy: "165",
                        r: "108",
                        fill: "none",
                        stroke: "#0f766e",
                        strokeWidth: "1.8",
                        strokeDasharray: "6 6",
                        opacity: 1,
                        animate: {
                            opacity: 0.9
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 954,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                        cx: "320",
                        cy: "165",
                        r: "160",
                        fill: "none",
                        stroke: "#a97d2c",
                        strokeWidth: "1.8",
                        strokeDasharray: "6 6",
                        opacity: ext ? 0.9 : 0.12,
                        animate: {
                            opacity: ext ? 0.9 : 0.12
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 956,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "262",
                        y: "147",
                        width: "116",
                        height: "36",
                        rx: "10",
                        fill: "#0f766e"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 959,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "320",
                        y: "170",
                        textAnchor: "middle",
                        fontSize: "13",
                        fontWeight: "800",
                        fill: "#f4fbf9",
                        children: "Cooking oil"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 960,
                        columnNumber: 9
                    }, this),
                    [
                        {
                            x: 200,
                            y: 78,
                            t: "Safola"
                        },
                        {
                            x: 440,
                            y: 78,
                            t: "Dhara"
                        },
                        {
                            x: 320,
                            y: 42,
                            t: "Fortune"
                        }
                    ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: n.x - 56,
                                    y: n.y - 17,
                                    width: "112",
                                    height: "34",
                                    rx: "9",
                                    fill: "#ffffff",
                                    stroke: "#0f766e",
                                    strokeWidth: "1.6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 964,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: n.x,
                                    y: n.y + 5,
                                    textAnchor: "middle",
                                    fontSize: "12.5",
                                    fontWeight: "800",
                                    fill: "#0f766e",
                                    children: n.t
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 965,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, n.t, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 963,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "486",
                        y: "120",
                        fontSize: "11",
                        fontWeight: "800",
                        fill: "#0f766e",
                        children: "natural frame — direct competitors"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 968,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        opacity: ext ? 1 : 0,
                        animate: {
                            opacity: ext ? 1 : 0
                        },
                        children: [
                            [
                                {
                                    x: 160,
                                    y: 262,
                                    t: "Olive oil"
                                },
                                {
                                    x: 480,
                                    y: 262,
                                    t: "Pure ghee"
                                },
                                {
                                    x: 320,
                                    y: 300,
                                    t: "Mustard oil"
                                }
                            ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: n.x - 60,
                                            y: n.y - 17,
                                            width: "120",
                                            height: "34",
                                            rx: "9",
                                            fill: "#fdf6e7",
                                            stroke: "#a97d2c",
                                            strokeWidth: "1.6",
                                            strokeDasharray: "5 4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 973,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: n.x,
                                            y: n.y + 5,
                                            textAnchor: "middle",
                                            fontSize: "12.5",
                                            fontWeight: "800",
                                            fill: "#a97d2c",
                                            children: n.t
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 974,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, n.t, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 972,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "130",
                                y: "200",
                                fontSize: "11",
                                fontWeight: "800",
                                fill: "#a97d2c",
                                children: "extended frame — substitutes"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 977,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 970,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 951,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: !ext ? "teal" : "ghost",
                        onClick: ()=>setExt(false),
                        ariaLabel: "Show the natural frame of reference",
                        children: "Natural frame"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 981,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: ext ? "gold" : "ghost",
                        onClick: ()=>setExt(true),
                        ariaLabel: "Show the extended frame of reference",
                        children: "Extended frame"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 982,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 980,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
                tone: ext ? "gold" : "teal",
                children: ext ? "Extended frame: olive oil, pure ghee and mustard oil substitute traditional cooking oils as health consciousness increases — indirect competitors that may replace you." : "Natural frame: direct competitors offering similar products — for cooking oil, that is Safola, Dhara and Fortune."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 984,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 945,
        columnNumber: 5
    }, this);
}
_s7(FrameSwitchMachine, "D75Ll8MHfj1DpEEFic6fQi2qR/8=");
_c15 = FrameSwitchMachine;
function GypsyTimeline() {
    _s8();
    const { step, next, reset, playing, toggle } = useStepPlayer(4, 2600);
    const notes = [
        "1985 — Maruti launches the Gypsy, India's first SUV. It has no direct competitors: the natural frame of reference is empty.",
        "The blind spot — the extended frame of reference (potential future substitutes) is ignored. Today's emptiness is not tomorrow's.",
        "Tata Sumo and Mahindra Scorpio enter with superior features: AC, power steering, power windows, better mileage, better ride quality, improved seating.",
        "Result — Gypsy's market share declines as consumers switch to better-positioned alternatives, despite emotional attachment to the original."
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#0f766e"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1004,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "The Gypsy King case — a share story"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1005,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "launched 1985"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1006,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1003,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 640 250",
                className: "mt-4 h-auto w-full",
                role: "img",
                "aria-label": "Market share line for the Maruti Gypsy: flat after its 1985 launch, declining after Tata Sumo and Mahindra Scorpio enter with superior features",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                        x1: "50",
                        y1: "210",
                        x2: "610",
                        y2: "210",
                        stroke: "#5f7472",
                        strokeWidth: "2",
                        opacity: 1,
                        initial: {
                            pathLength: 0
                        },
                        whileInView: {
                            pathLength: 1
                        },
                        viewport: {
                            once: true
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1010,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "46",
                        y: "232",
                        fontSize: "10.5",
                        fontWeight: "700",
                        fill: "#5f7472",
                        children: "1985"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1012,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "300",
                        y: "232",
                        fontSize: "10.5",
                        fontWeight: "700",
                        fill: "#5f7472",
                        children: "competitors enter"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1013,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "560",
                        y: "232",
                        fontSize: "10.5",
                        fontWeight: "700",
                        fill: "#5f7472",
                        children: "after"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1014,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: "20",
                        y: "60",
                        fontSize: "10.5",
                        fontWeight: "800",
                        fill: "#5f7472",
                        transform: "rotate(-90 20 60)",
                        children: "market share →"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1015,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: "M50 62 L300 66 C 380 70, 440 120, 600 178",
                        fill: "none",
                        stroke: "#0f766e",
                        strokeWidth: "3.5",
                        opacity: 1,
                        initial: {
                            pathLength: 0
                        },
                        whileInView: {
                            pathLength: 1
                        },
                        viewport: {
                            once: true
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1017,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        opacity: step >= 2 ? 1 : 0,
                        animate: {
                            opacity: step >= 2 ? 1 : 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "312",
                                y1: "30",
                                x2: "312",
                                y2: "210",
                                stroke: "#9f3d54",
                                strokeWidth: "1.6",
                                strokeDasharray: "5 5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1021,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "318",
                                y: "24",
                                fontSize: "11",
                                fontWeight: "800",
                                fill: "#9f3d54",
                                children: "Tata Sumo · Mahindra Scorpio"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1022,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "318",
                                y: "40",
                                fontSize: "9.5",
                                fontWeight: "700",
                                fill: "#9f3d54",
                                children: "AC · power steering · power windows · mileage · ride · seating"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1023,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1020,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        opacity: step === 0 ? 1 : 0.35,
                        animate: {
                            opacity: step === 0 ? 1 : 0.35
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "50",
                                cy: "62",
                                r: "6",
                                fill: "#e3c26b"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1026,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "60",
                                y: "52",
                                fontSize: "11",
                                fontWeight: "800",
                                fill: "#a97d2c",
                                children: "India's first SUV — no direct competitors"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1027,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1025,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                        opacity: step >= 3 ? 1 : 0,
                        animate: {
                            opacity: step >= 3 ? 1 : 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "600",
                                cy: "178",
                                r: "6",
                                fill: "#9f3d54"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1030,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "592",
                                y: "168",
                                textAnchor: "end",
                                fontSize: "11",
                                fontWeight: "800",
                                fill: "#9f3d54",
                                children: "share declines — emotional attachment notwithstanding"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1031,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1029,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1008,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerControls, {
                step: step,
                total: 4,
                playing: playing,
                onToggle: toggle,
                onNext: next,
                onReset: reset
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1034,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
                tone: step === 3 ? "rose" : "teal",
                children: notes[step]
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1035,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1002,
        columnNumber: 5
    }, this);
}
_s8(GypsyTimeline, "rwd0htRa4lD55pV82iHkBJcsij4=", false, function() {
    return [
        useStepPlayer
    ];
});
_c16 = GypsyTimeline;
function PopRemovalToggle() {
    _s9();
    const [removed, setRemoved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const feats = [
        {
            t: "Germ-killing",
            pop: true
        },
        {
            t: "Cleaning",
            pop: true
        },
        {
            t: "Lime fragrance",
            pop: false
        },
        {
            t: "Shine",
            pop: false
        },
        {
            t: "Freshness",
            pop: false
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#0f766e"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1052,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "Lysol vs Gainda Phenyl — pull the POP"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1053,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "what happens if parity goes?"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1054,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1051,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-2",
                        children: feats.map((f)=>{
                            const dead = removed && f.pop;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex items-center justify-between rounded-xl px-3.5 py-2.5",
                                style: {
                                    background: dead ? "#f7ecec" : "#ffffff",
                                    border: `1px solid ${dead ? "#dcc3c9" : f.pop ? "#cfe3de" : "#e0d3ae"}`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[.88rem] font-bold",
                                        style: {
                                            color: dead ? "#9f3d54" : "#1f2b2b",
                                            textDecoration: dead ? "line-through" : "none"
                                        },
                                        children: f.t
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1063,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full px-2.5 py-1 text-[.68rem] font-extrabold",
                                        style: {
                                            background: f.pop ? "rgba(15,118,110,.1)" : "rgba(227,194,107,.22)",
                                            color: f.pop ? "#0f766e" : "#8a6420"
                                        },
                                        children: f.pop ? "POP" : "POD"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1066,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, f.t, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1061,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1057,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl p-4",
                                style: {
                                    background: "#f2efe7",
                                    border: "1px solid #e3ddcf"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.8rem] font-extrabold uppercase tracking-[.14em] text-[#5f7472]",
                                        children: "consumer choice"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1076,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-xl px-3 py-2 text-[.8rem] font-extrabold text-white",
                                                style: {
                                                    background: "linear-gradient(135deg,#14b8a6,#0f766e)"
                                                },
                                                children: "Lysol"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 1078,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-1.5 flex-1 rounded-full",
                                                style: {
                                                    background: "#d8e8e4"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full",
                                                    style: {
                                                        background: "#a97d2c",
                                                        left: "12%"
                                                    },
                                                    animate: {
                                                        left: removed ? "92%" : "12%"
                                                    },
                                                    transition: {
                                                        duration: 0.7,
                                                        ease: "easeInOut"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                    lineNumber: 1080,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 1079,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-xl px-3 py-2 text-[.8rem] font-extrabold",
                                                style: {
                                                    background: "#fdf6e7",
                                                    border: "1px solid #a97d2c",
                                                    color: "#a97d2c"
                                                },
                                                children: "Gainda Phenyl"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 1084,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1077,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1075,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                        tone: !removed ? "teal" : "ghost",
                                        onClick: ()=>setRemoved(false),
                                        ariaLabel: "Keep the germ-killing POP",
                                        children: "POPs intact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1090,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                        tone: removed ? "gold" : "ghost",
                                        onClick: ()=>setRemoved(true),
                                        ariaLabel: "Remove the germ-killing POP",
                                        children: "Remove germ-killing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1091,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1089,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1074,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1056,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
                tone: removed ? "rose" : "teal",
                children: removed ? "Removing a POP significantly weakens competitive positioning — consumers would revert to Gainda Phenyl, despite Lysol's fragrance, shine and freshness. POPs must be maintained while building PODs." : "Lysol's PODs — lime fragrance, shine, freshness — sit on top of the shared POPs (germ-killing, cleaning). Keep the parity; sell the difference."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1095,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1050,
        columnNumber: 5
    }, this);
}
_s9(PopRemovalToggle, "Q54z+WRlK+BTIgJlF0azbLk6k2I=");
_c17 = PopRemovalToggle;
function MktgFrameSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "frame-podspops",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 15",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Frames of reference, ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grad, {
                            children: "POPs & PODs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1109,
                            columnNumber: 39
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Positioning strategy, step by step: first choose the arena you compete in — natural and extended — then defend the points of parity and build the points of differentiation."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Step 1 — the frame of reference",
                sub: "Natural competitors vs extended substitutes"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Natural frame",
                            v: "Direct competitors offering similar products — for cooking oil: Safola, Dhara, Fortune"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Extended frame",
                            v: "Indirect competitors that may substitute your product — olive oil, pure ghee, mustard oil, as health consciousness increases"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FrameSwitchMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1120,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "The Gypsy King lesson",
                sub: "An empty natural frame is not a strategy"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GypsyTimeline, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1123,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "warn",
                    title: "Key takeaway — the long game",
                    children: "Understanding both natural and extended frames of reference is essential for long-term positioning success rather than short-lived market dominance."
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1125,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "Step 2 — POPs and PODs",
                sub: "Parity earns you a seat; differentiation wins the game"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "POPs",
                            v: "Attributes shared with competitors — the bare minimum standards required to be competitive. Uber, Ola and Meru all provide cab services; without POPs a brand loses competitive credibility and consumer trust"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "PODs",
                            v: "Unique attributes that distinguish your brand — Uber and Ola run outsourced driver models with personal vehicles, while Meru owns its fleet"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1133,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PopRemovalToggle, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1138,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Lecture 15 · concept check",
                            q: "If Lysol removed germ-killing — a POP shared with traditional phenyl — the lecture predicts that…",
                            options: [
                                "its lime fragrance would carry the brand",
                                "consumers would revert to Gainda Phenyl",
                                "nothing would change — PODs are enough",
                                "removing POPs strengthens positioning"
                            ],
                            answer: 1,
                            explain: "Removing a POP significantly weakens competitive positioning: consumers would revert to Gainda Phenyl. POPs must be maintained while building PODs."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1142,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                            items: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Frame of reference first: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "natural"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1150,
                                            columnNumber: 41
                                        }, void 0),
                                        " (Safola · Dhara · Fortune) and ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "extended"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1150,
                                            columnNumber: 97
                                        }, void 0),
                                        " (olive oil · ghee · mustard oil)."
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Gypsy (1985) owned an empty natural frame — then ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Tata Sumo & Mahindra Scorpio"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1151,
                                            columnNumber: 64
                                        }, void 0),
                                        " arrived with AC, power steering, power windows, better mileage, ride and seating."
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "POPs are the ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "entry ticket"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1152,
                                            columnNumber: 28
                                        }, void 0),
                                        "; PODs are the ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "reason to choose"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1152,
                                            columnNumber: 72
                                        }, void 0),
                                        " (Uber/Ola's outsourced drivers vs Meru's owned fleet)."
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: "Lysol: fragrance (lime), shine, freshness = PODs on top of germ-killing & cleaning POPs."
                                }, void 0, false),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Never trade away a POP — parity removed is ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "positioning weakened"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1154,
                                            columnNumber: 58
                                        }, void 0),
                                        "."
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1106,
        columnNumber: 5
    }, this);
}
_c18 = MktgFrameSection;
function dotSpec(level, i) {
    const teal = "#14b8a6", deep = "#0f766e", gold = "#e3c26b", champagne = "#a97d2c";
    if (level === 0) {
        return {
            x: 34 + i % 12 * 40,
            y: 42 + Math.floor(i / 12) * 52,
            fill: i % 2 ? teal : deep,
            o: 1,
            r: 6
        };
    }
    if (level === 1) {
        const centers = [
            {
                x: 95,
                y: 72,
                f: deep
            },
            {
                x: 262,
                y: 58,
                f: teal
            },
            {
                x: 160,
                y: 172,
                f: champagne
            },
            {
                x: 372,
                y: 150,
                f: gold
            }
        ];
        const c = centers[i % 4];
        const jx = (i * 7 % 5 - 2) * 9;
        const jy = (i * 11 % 5 - 2) * 8;
        return {
            x: c.x + jx,
            y: c.y + jy,
            fill: c.f,
            o: 1,
            r: 6
        };
    }
    if (level === 2) {
        const inNiche = i < 7;
        const jx = (i * 5 % 3 - 1) * 13;
        const jy = (i * 13 % 3 - 1) * 11;
        return {
            x: 260 + jx,
            y: 118 + jy,
            fill: gold,
            o: inNiche ? 1 : 0.07,
            r: inNiche ? 7 : 5
        };
    }
    const isOne = i === 0;
    return {
        x: 260,
        y: 118,
        fill: gold,
        o: isOne ? 1 : 0.05,
        r: isOne ? 11 : 5
    };
}
const LEVEL_INFO = [
    {
        k: "Mass market",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        phil: "Production-centric: mass production, mass distribution, mass promotion.",
        tgt: "Everyone — the entire market",
        ex: [
            "Coca-Cola",
            "Pepsi",
            "Amul butter",
            "Dettol"
        ],
        pros: "Cost-effective · high volume sales · wide market reach",
        cons: "Inventory costs if products don't sell · one-size-fits-all alienates specific preferences · waste and storage costs"
    },
    {
        k: "Market segment",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        phil: "Target a large but identifiable subgroup within the broader market.",
        tgt: "Specific demographic or psychographic groups — more customisation than mass, less than niche",
        ex: [
            "Dove Men Care — personal care for men",
            "Myntra Forward — designed exclusively for Generation Z"
        ],
        pros: "Better product–market fit · reduced inventory waste · targeted marketing efficiency",
        cons: null
    },
    {
        k: "Niche market",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        phil: "A narrowly defined customer group seeking a distinctive set of benefits — a sub-segment of a larger segment.",
        tgt: "Small markets with unique needs; premium pricing common; requires deep expertise",
        ex: [
            "Nomatic — high-performance travel backpacks",
            "Lush — handmade, ethically sourced, chemical-free cosmetics",
            "Beeswrap — reusable, compostable food wrapping"
        ],
        pros: "Limited direct competition · loyal customer base · premium pricing",
        cons: "Small market size · requires deep understanding of customer needs"
    },
    {
        k: "Individual · market of one",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
        phil: "Marketing and customisation at the individual level — maximum personalisation.",
        tgt: "One individual customer — tailored specifications, higher price points, strong relationships",
        ex: [
            "NIKEiD — customers design their own shoes",
            "“Share a Coke with Rahul” — personalised bottles",
            "Raymond Made-to-Measure — suits to individual measurements",
            "Shaadi.com · Jeevansathi.com — individual-level matching"
        ],
        pros: "Strong emotional connection · willingness to pay premium · highest satisfaction potential",
        cons: null
    }
];
function ZoomSpectrum() {
    _s10();
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const dots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ZoomSpectrum.useMemo[dots]": ()=>Array.from({
                length: 48
            }, {
                "ZoomSpectrum.useMemo[dots]": (_, i)=>{
                    const base = dotSpec(0, i);
                    const target = dotSpec(level, i);
                    return {
                        base,
                        dx: target.x - base.x,
                        dy: target.y - base.y,
                        fill: target.fill,
                        o: target.o,
                        r: target.r
                    };
                }
            }["ZoomSpectrum.useMemo[dots]"])
    }["ZoomSpectrum.useMemo[dots]"], [
        level
    ]);
    const info = LEVEL_INFO[level];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#0f766e"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "The zoom spectrum"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "crowd → group → few → single"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1244,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-5 lg:grid-cols-[1.1fr,1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl p-2",
                                style: {
                                    background: "#f2efe7",
                                    border: "1px solid #e3ddcf"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 520 236",
                                    className: "h-auto w-full",
                                    role: "img",
                                    "aria-label": "Forty-eight customer dots that regroup by marketing level: the whole crowd for mass market, four clusters for segments, a small gold group for niche, and a single dot for market of one",
                                    children: dots.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                            cx: d.base.x,
                                            cy: d.base.y,
                                            r: d.base.r,
                                            fill: d.base.fill,
                                            opacity: 1,
                                            animate: {
                                                x: d.dx,
                                                y: d.dy,
                                                fill: d.fill,
                                                opacity: d.o
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 90,
                                                damping: 18
                                            }
                                        }, i, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1252,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1249,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: LEVEL_INFO.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                        tone: level === i ? "teal" : "ghost",
                                        onClick: ()=>setLevel(i),
                                        ariaLabel: `Show the ${l.k} level`,
                                        children: [
                                            i + 1,
                                            ". ",
                                            l.k
                                        ]
                                    }, l.k, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1260,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1258,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
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
                                    y: -12
                                },
                                transition: {
                                    duration: 0.3
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2 text-lg font-extrabold text-[#1f2b2b]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(info.icon, {
                                                className: "h-5 w-5",
                                                style: {
                                                    color: level === 3 ? "#a97d2c" : "#0f766e"
                                                },
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 1270,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            level + 1,
                                            ". ",
                                            info.k
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1269,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-[.88rem] leading-relaxed text-[#3a4a48]",
                                        children: info.phil
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1272,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.82rem] font-bold text-[#5f7472]",
                                        children: [
                                            "Target: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-[#1f2b2b]",
                                                children: info.tgt
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 1273,
                                                columnNumber: 82
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1273,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex flex-wrap gap-1.5",
                                        children: info.ex.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-white px-2.5 py-1 text-[.74rem] font-bold",
                                                style: {
                                                    border: "1px solid #cfe3de",
                                                    color: "#0f766e"
                                                },
                                                children: e
                                            }, e, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 1276,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1274,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.78rem] leading-relaxed text-[#0f766e]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Advantages:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 1279,
                                                columnNumber: 80
                                            }, this),
                                            " ",
                                            info.pros
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1279,
                                        columnNumber: 15
                                    }, this),
                                    info.cons ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[.78rem] leading-relaxed text-[#9f3d54]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Challenges:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 1280,
                                                columnNumber: 93
                                            }, this),
                                            " ",
                                            info.cons
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1280,
                                        columnNumber: 28
                                    }, this) : null
                                ]
                            }, level, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1268,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1267,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1266,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1246,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1240,
        columnNumber: 5
    }, this);
}
_s10(ZoomSpectrum, "enP1n4V72ildGgpUcuLgl4W0r2E=");
_c19 = ZoomSpectrum;
function MktgLevelsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "four-levels",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 16",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "From mass market to ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grad, {
                            children: "market of one"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1294,
                            columnNumber: 38
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "The STP framework evolved into micro-marketing — four levels of approach, from serving everyone to serving a single customer by name."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Segments are found, not invented",
                sub: "The ground rules before the zoom"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Identify, don't create",
                            v: "Marketers do not create segments; they identify existing segments in the market based on shared needs and wants"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1301,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Homogeneity / heterogeneity",
                            v: "Within a segment customers are very similar to each other; across different segments they are distinctly different"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1302,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1300,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "The zoom spectrum",
                sub: "Mass → segment → niche → individual"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZoomSpectrum, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1307,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "The industrial middle ground",
                sub: "Mass customisation & customerisation"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Mass customisation",
                            v: "Combining mass-production efficiency with customised personalisation at the individual level"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1312,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Customerisation",
                            v: "A blend of mass marketing with customised messaging and product modifications — broad reach, individual relevance"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1313,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1311,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "insight",
                    title: "Flexibility is a strategy",
                    children: [
                        "Organisations can operate at ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "multiple levels simultaneously"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1318,
                            columnNumber: 40
                        }, this),
                        " with different product lines — and large groups may own multiple distinct brands serving different segments (L'Oréal and Body Shop)."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1317,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Mass"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1325,
                                    columnNumber: 13
                                }, void 0),
                                " (Coca-Cola, Pepsi, Amul butter, Dettol): cheapest per unit, but inventory risk and one-size-fits-all alienation."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Segment"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1326,
                                    columnNumber: 13
                                }, void 0),
                                ": Dove Men Care, Myntra Forward (Gen Z) — better product–market fit with targeted efficiency."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Niche"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1327,
                                    columnNumber: 13
                                }, void 0),
                                ": Nomatic, Lush, Beeswrap — limited competition, loyalty, premium pricing; small size and deep expertise required."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Market of one"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1328,
                                    columnNumber: 13
                                }, void 0),
                                ": NIKEiD, Share a Coke with Rahul, Raymond Made-to-Measure, Shaadi.com — maximum personalisation, premium willingness."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Mass customisation & customerisation blend ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "scale with individual relevance"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1329,
                                    columnNumber: 60
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1324,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1323,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1291,
        columnNumber: 5
    }, this);
}
_c20 = MktgLevelsSection;
/* ============================================================
   L16 · POD → POP EVOLUTION (pop-pod-evolution)
   ============================================================ */ function RazorLadder() {
    _s11();
    const { step, next, reset, playing, toggle } = useStepPlayer(5, 2400);
    const gillette = step < 1 ? 2 : step < 3 ? 3 : 5;
    const competitors = step < 2 ? 2 : 3;
    const notes = [
        "The baseline: two-blade razors are the category norm — the POP every competitor must match to be considered.",
        "Gillette Mark 3 arrives with three blades against two-blade competitors — a genuine POD.",
        "Competitors copy. Three blades becomes the shared standard — the POD has decayed into a POP.",
        "Gillette answers with five-blade Fusion — a new POD to re-open the gap.",
        "The treadmill: when competitors copy a POD it becomes a POP. Organisations must continuously innovate to maintain differentiation."
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-extrabold text-[#1f2b2b]",
                        children: "🪒"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "The razor ladder — POD → POP → POD"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1355,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "Gillette's endless climb"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1356,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-4 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MktgTrack, {
                        label: "Gillette",
                        count: gillette,
                        tone: "teal",
                        badge: gillette > competitors ? "POD" : "POP",
                        peak: Math.max(gillette, competitors)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1359,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MktgTrack, {
                        label: "Competitors",
                        count: competitors,
                        tone: "muted",
                        badge: gillette > competitors ? "POP" : "POP",
                        peak: Math.max(gillette, competitors)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1360,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1358,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerControls, {
                step: step,
                total: 5,
                playing: playing,
                onToggle: toggle,
                onNext: next,
                onReset: reset
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1362,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
                tone: step === 2 ? "gold" : "teal",
                children: notes[step]
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1363,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1352,
        columnNumber: 5
    }, this);
}
_s11(RazorLadder, "rwd0htRa4lD55pV82iHkBJcsij4=", false, function() {
    return [
        useStepPlayer
    ];
});
_c21 = RazorLadder;
function MktgEvolutionSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "pop-pod-evolution",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 16",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "The ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grad, {
                            children: "POD → POP"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1373,
                            columnNumber: 22
                        }, void 0),
                        " treadmill"
                    ]
                }, void 0, true),
                lead: "Points of parity are the minimum requirements to compete; points of differentiation are the reasons to choose. The catch: differentiation decays into parity the moment competitors copy it."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1371,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "POP and POD, defined",
                sub: "Category entry ticket vs reason to choose"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1377,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Point of parity",
                            v: "Attributes shared by competing brands in the same category — industry-standard features and the minimum requirements to be considered. All disinfectants must kill germs; without POP a brand cannot be competitive"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1380,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Point of differentiation",
                            v: "Unique attributes that distinguish one brand from competitors — reasons to choose one over another, creating competitive advantage"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1381,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1379,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1378,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Lysol",
                            v: "vs Genda-Final: better fragrance, plastic bottle, superior packaging"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1386,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Oral-B",
                            v: "blue indicator bristles that fade to white when it's time to replace the toothbrush"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1387,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Gillette Mark 3",
                            v: "three-blade design vs two-blade competitors — originally a POD"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1388,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1385,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1384,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Watch a POD die",
                sub: "Three blades → parity → five blades"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1392,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RazorLadder, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1393,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1393,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "Strategic implications",
                sub: "What the treadmill demands"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1395,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Flexibility",
                            v: "Operate at multiple levels simultaneously with different product lines"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1398,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Brand portfolio",
                            v: "Large organisations may own multiple distinct brands for different segments — L'Oréal and Body Shop"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1399,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Market research",
                            v: "Niche and individual-level success requires deep consumer insights into specific needs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1400,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Positioning",
                            v: "Effective STP needs clear understanding of competitors, frame of reference and meaningful differentiation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1401,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1397,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1396,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "insight",
                    title: "The one-line summary",
                    children: [
                        "Continuous innovation is necessary to maintain a POD and ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "prevent commoditisation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1406,
                            columnNumber: 68
                        }, this),
                        " — balance cost efficiency with customisation, because the appropriate strategy depends on resources, market conditions and consumer preferences."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1405,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1404,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "POP = industry-standard attributes ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "required to compete"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1414,
                                    columnNumber: 48
                                }, void 0),
                                " (all disinfectants kill germs)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "POD = unique attributes that ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "create preference"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1415,
                                    columnNumber: 42
                                }, void 0),
                                " (Oral-B's fading bristles, Lysol's fragrance & packaging)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Copied PODs become POPs: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "three blades → parity → five-blade Fusion"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1416,
                                    columnNumber: 38
                                }, void 0),
                                " as the new POD."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Run ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "multiple levels and brands"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1417,
                                    columnNumber: 17
                                }, void 0),
                                " at once — flexibility is part of the design (L'Oréal / Body Shop)."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Innovate continuously or be ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "commoditised"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1418,
                                    columnNumber: 41
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1413,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1412,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1370,
        columnNumber: 5
    }, this);
}
_c22 = MktgEvolutionSection;
function ThreeCirclesMachine() {
    _s12();
    const [zone, setZone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const labels = {
        pop: "POP — the triple intersection: where consumer need overlaps both your offering and competitors'. The category entry ticket.",
        pod: "POD — consumer desire ∩ your features, excluding competitors: the unique value proposition.",
        invalid: "Invalid positioning — features you and competitors both offer that consumers don't desire. Effort with no value."
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#0f766e"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1441,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "The three-circles locator"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1442,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "desires × competitors × you"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1443,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1440,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-5 lg:grid-cols-[1.15fr,1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl p-2",
                        style: {
                            background: "#f2efe7",
                            border: "1px solid #e3ddcf"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 520 360",
                            className: "h-auto w-full",
                            role: "img",
                            "aria-label": "Three overlapping circles: consumer desires, competitor features and your features. The triple intersection is POP; consumer desires plus your features excluding competitors is POD; your features plus competitors without consumer desire is the invalid zone",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                            id: "tcA",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "190",
                                                cy: "140",
                                                r: "95"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 1450,
                                                columnNumber: 34
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1450,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                            id: "tcB",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "330",
                                                cy: "140",
                                                r: "95"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 1451,
                                                columnNumber: 34
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1451,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                            id: "tcNoB",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "0",
                                                    y: "0",
                                                    width: "520",
                                                    height: "360",
                                                    fill: "#ffffff"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                    lineNumber: 1452,
                                                    columnNumber: 32
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "330",
                                                    cy: "140",
                                                    r: "95",
                                                    fill: "#000000"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                    lineNumber: 1452,
                                                    columnNumber: 92
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1452,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                            id: "tcNoA",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "0",
                                                    y: "0",
                                                    width: "520",
                                                    height: "360",
                                                    fill: "#ffffff"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                    lineNumber: 1453,
                                                    columnNumber: 32
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "190",
                                                    cy: "140",
                                                    r: "95",
                                                    fill: "#000000"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                    lineNumber: 1453,
                                                    columnNumber: 92
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1453,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1449,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    clipPath: "url(#tcA)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        mask: "url(#tcNoB)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                            cx: "260",
                                            cy: "245",
                                            r: "95",
                                            fill: "#0f766e",
                                            opacity: 0,
                                            animate: {
                                                opacity: zone === "pod" ? 0.65 : 0
                                            },
                                            transition: {
                                                duration: 0.4
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1457,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1456,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1456,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    clipPath: "url(#tcB)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        mask: "url(#tcNoA)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                            cx: "260",
                                            cy: "245",
                                            r: "95",
                                            fill: "#9f3d54",
                                            opacity: 0,
                                            animate: {
                                                opacity: zone === "invalid" ? 0.6 : 0
                                            },
                                            transition: {
                                                duration: 0.4
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1462,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1461,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1461,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                    clipPath: "url(#tcA)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        clipPath: "url(#tcB)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                            cx: "260",
                                            cy: "245",
                                            r: "95",
                                            fill: "#e3c26b",
                                            opacity: 0,
                                            animate: {
                                                opacity: zone === "pop" ? 0.85 : 0
                                            },
                                            transition: {
                                                duration: 0.4
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1467,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1466,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1466,
                                    columnNumber: 13
                                }, this),
                                [
                                    {
                                        cx: 190,
                                        cy: 140,
                                        c: "#a97d2c"
                                    },
                                    {
                                        cx: 330,
                                        cy: 140,
                                        c: "#0f766e"
                                    },
                                    {
                                        cx: 260,
                                        cy: 245,
                                        c: "#14b8a6"
                                    }
                                ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                        cx: c.cx,
                                        cy: c.cy,
                                        r: "95",
                                        fill: "none",
                                        stroke: c.c,
                                        strokeWidth: "2.5",
                                        opacity: 1,
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
                                            duration: 1.1,
                                            delay: i * 0.18
                                        }
                                    }, i, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1476,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "112",
                                    y: "34",
                                    fontSize: "12.5",
                                    fontWeight: "800",
                                    fill: "#a97d2c",
                                    children: "Consumer desires"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1480,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "410",
                                    y: "34",
                                    fontSize: "12.5",
                                    fontWeight: "800",
                                    fill: "#0f766e",
                                    children: "Competitor features"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1481,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "260",
                                    y: "356",
                                    textAnchor: "middle",
                                    fontSize: "12.5",
                                    fontWeight: "800",
                                    fill: "#0f766e",
                                    children: "Your features"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1482,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "260",
                                    y: "168",
                                    textAnchor: "middle",
                                    fontSize: "10.5",
                                    fontWeight: "800",
                                    fill: "#5f7472",
                                    children: "POP"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1483,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "176",
                                    y: "252",
                                    textAnchor: "middle",
                                    fontSize: "10.5",
                                    fontWeight: "800",
                                    fill: "#5f7472",
                                    children: "POD"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1484,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: "348",
                                    y: "252",
                                    textAnchor: "middle",
                                    fontSize: "10.5",
                                    fontWeight: "800",
                                    fill: "#5f7472",
                                    children: "invalid"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1485,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1447,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1446,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                        tone: zone === "pop" ? "gold" : "ghost",
                                        onClick: ()=>setZone("pop"),
                                        ariaLabel: "Light up the POP zone",
                                        children: "Light POP"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1490,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                        tone: zone === "pod" ? "teal" : "ghost",
                                        onClick: ()=>setZone("pod"),
                                        ariaLabel: "Light up the POD zone",
                                        children: "Light POD"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1491,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                        tone: zone === "invalid" ? "ghost" : "ghost",
                                        onClick: ()=>setZone("invalid"),
                                        ariaLabel: "Light up the invalid zone",
                                        children: "Light invalid zone"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1492,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                        onClick: ()=>setZone(null),
                                        ariaLabel: "Clear all zones",
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1493,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1489,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
                                tone: zone === "invalid" ? "rose" : zone === "pop" ? "gold" : "teal",
                                children: zone ? labels[zone] : "Press a button to light a zone — every positioning idea lives in one of these three places."
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1495,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 grid gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                                        k: "POP location",
                                        v: "Intersection of all three circles — consumer need overlaps both your and competitor offerings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1499,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                                        k: "POD location",
                                        v: "Intersection of consumer desire and your features, excluding competitor features — the unique value proposition"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1500,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                                        k: "Invalid zone",
                                        v: "Features you offer that competitors also offer, without matching consumer desires"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1501,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1498,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1488,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1445,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1439,
        columnNumber: 5
    }, this);
}
_s12(ThreeCirclesMachine, "euxt4oYqgrwmtRgiKi3MMyK7hM0=");
_c23 = ThreeCirclesMachine;
function MktgCirclesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "three-circles",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 17",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "The ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grad, {
                            children: "three circles"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1514,
                            columnNumber: 22
                        }, void 0),
                        " of positioning"
                    ]
                }, void 0, true),
                lead: "POPs and PODs, located on a map: consumer desires × competitor features × your organisation's features. Where the circles overlap decides what you must have, what wins, and what is wasted."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1512,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Why the model exists",
                sub: "Two elements, balanced"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1518,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: proseCls,
                    children: [
                        "POPs represent features and benefits ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "common across all competing brands"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1521,
                            columnNumber: 48
                        }, this),
                        " — basic consumer expectations and category requirements (a toothbrush maintaining oral hygiene; an antiseptic having antiseptic properties). PODs are ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "unique features or benefits competitors do not offer"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1523,
                            columnNumber: 33
                        }, this),
                        " — valued by consumers, genuinely different, and able to fulfil desires in ways competitors cannot. Establish parity to compete; create differentiation to win."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1520,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "The map itself",
                sub: "Light the zones"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1529,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreeCirclesMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1530,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1530,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "PODs expire",
                sub: "The Dettol motion-sensor lesson"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1532,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "story",
                    title: "Motion-sensor hand wash — a POD that didn't travel",
                    children: [
                        "Dettol's motion-sensor hand-wash dispenser was initially a POD — but it became expensive and impractical for home use due to the high frequency of use, never achieved universal adoption, and remained primarily in",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "commercial establishments"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1537,
                            columnNumber: 11
                        }, this),
                        ". PODs have a finite lifespan; once competitors copy a differentiation, it automatically becomes a POP."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1534,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1533,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "4",
                title: "The two-step strategy, revisited",
                sub: "Frame first, then differentiation"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1542,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepsFlow"], {
                    steps: [
                        {
                            label: "Determine frame of reference",
                            sub: "natural + extended competitors → the required POPs",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: "#0f766e"
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1545,
                                columnNumber: 117
                            }, void 0)
                        },
                        {
                            label: "Identify points of differentiation",
                            sub: "find gaps between competitor offerings and consumer desires",
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                className: "h-5 w-5 shrink-0",
                                style: {
                                    color: "#a97d2c"
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1546,
                                columnNumber: 132
                            }, void 0)
                        }
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1544,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1543,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "5",
                title: "Critical success factors for a POD",
                sub: "Five tests before you ship"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1550,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "grid gap-2 text-[.9rem] leading-relaxed text-[#2b2014]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Valued by consumers"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1554,
                                        columnNumber: 19
                                    }, this),
                                    " — addresses a genuine need or desire."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1554,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Defensible"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1555,
                                        columnNumber: 19
                                    }, this),
                                    " — ideally built on sustainable advantages: technology, patents, brand equity."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1555,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Addresses a market opportunity"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1556,
                                        columnNumber: 19
                                    }, this),
                                    " — a gap between what competitors offer and what consumers want."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1556,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Not easily replicated"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1557,
                                        columnNumber: 19
                                    }, this),
                                    " — if easily copied, it becomes a POP."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1557,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Clearly communicated"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1558,
                                        columnNumber: 19
                                    }, this),
                                    " — the target audience must understand and appreciate the differentiation."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1558,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1553,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1552,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1551,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                            source: "Lecture 17 · concept check",
                            q: "In the three-circles model, a POD lives…",
                            options: [
                                "at the triple intersection of all three circles",
                                "where consumer desires meet your features, excluding competitors",
                                "where you and competitors overlap without consumer desire",
                                "outside all three circles"
                            ],
                            answer: 1,
                            explain: "POP is the triple intersection; POD is consumer desire ∩ your features excluding competitors; the you∩competitor overlap without desire is the invalid zone."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1565,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1564,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                            items: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "POPs ensure ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "viability"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1573,
                                            columnNumber: 27
                                        }, void 0),
                                        " in the category; PODs create ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "preference"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1573,
                                            columnNumber: 83
                                        }, void 0),
                                        " and justify premium pricing or share gains."
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "POP = ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "triple intersection"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1574,
                                            columnNumber: 21
                                        }, void 0),
                                        "; POD = desires ∩ you, ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "minus competitors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1574,
                                            columnNumber: 80
                                        }, void 0),
                                        "."
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "The you∩competitor overlap without desire is the ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "invalid zone"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1575,
                                            columnNumber: 64
                                        }, void 0),
                                        " — effort nobody asked for."
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "PODs have a ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "finite lifespan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1576,
                                            columnNumber: 27
                                        }, void 0),
                                        " — Dettol's motion-sensor dispenser stayed commercial for a reason."
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Great positioning fulfils consumer desires ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "in ways competitors cannot"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1577,
                                            columnNumber: 58
                                        }, void 0),
                                        "."
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1572,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1571,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1563,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1511,
        columnNumber: 5
    }, this);
}
_c24 = MktgCirclesSection;
/* ============================================================
   L17 · CASE FILES (pod-pop-cases)
   ============================================================ */ function OralBCase() {
    _s13();
    const [worn, setWorn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                        k: "POP",
                        v: "Maintaining oral hygiene — common across every brand in the crowded toothbrush market"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1594,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                        k: "POD",
                        v: "Colour-changing bristles that indicate replacement — blue dye fades to white, signalling a new brush"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1595,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1593,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl p-4",
                style: {
                    background: "#f2efe7",
                    border: "1px solid #e3ddcf"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.8rem] font-extrabold text-[#5f7472]",
                                children: "bristle indicator"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1599,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                        tone: !worn ? "teal" : "ghost",
                                        onClick: ()=>setWorn(false),
                                        ariaLabel: "Reset the bristles to new",
                                        children: "New brush"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1601,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                        tone: worn ? "gold" : "ghost",
                                        onClick: ()=>setWorn(true),
                                        ariaLabel: "Simulate weeks of use",
                                        children: "Weeks pass"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 1602,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1600,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1598,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex h-9 items-end gap-1.5",
                        children: Array.from({
                            length: 14
                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "h-8 flex-1 rounded-t-md",
                                style: {
                                    background: "#0f766e"
                                },
                                animate: {
                                    background: worn ? "#f7f5ec" : "#0f766e"
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: worn ? i * 0.07 : 0
                                }
                            }, i, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1607,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1605,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[.8rem] font-bold",
                        style: {
                            color: worn ? "#a97d2c" : "#0f766e"
                        },
                        children: worn ? "Dye faded — time for a new brush. The benefit, not the feature, did the talking." : "Fresh brush — indicator fully saturated."
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1613,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1597,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[.88rem] leading-relaxed text-[#3a4a48]",
                children: [
                    "The move focused on ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "consumer benefit rather than product feature"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1618,
                        columnNumber: 29
                    }, this),
                    " and differentiated Oral-B",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "overnight without changing the underlying technology"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1619,
                        columnNumber: 9
                    }, this),
                    ". Once competitors copied it, the feature transitioned from POD to POP."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1617,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1592,
        columnNumber: 5
    }, this);
}
_s13(OralBCase, "YPhFBMIaU8aKaHIjtiySxJ5Kyr8=");
_c25 = OralBCase;
function QuirkCase() {
    _s14();
    const [day, setDay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const covers = [
        "#a97d2c",
        "#0f766e",
        "#9f3d54"
    ];
    const cover = covers[Math.floor(day / 10) % covers.length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                        k: "POP",
                        v: "Furnishing homes with quality furniture — but furniture is expensive and a long-term investment"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1633,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                        k: "POD",
                        v: "Affordable furniture covers and cushioning — a complete aesthetic makeover at minimal cost"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1634,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1632,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl p-4",
                style: {
                    background: "#f2efe7",
                    border: "1px solid #e3ddcf"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 300 150",
                        className: "mx-auto h-auto w-full max-w-xs",
                        role: "img",
                        "aria-label": "A sofa whose cover colour changes as ten-day cycles pass",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                                x: "40",
                                y: "30",
                                width: "220",
                                height: "52",
                                rx: "14",
                                fill: cover,
                                animate: {
                                    fill: cover
                                },
                                transition: {
                                    duration: 0.5
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1639,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                                x: "28",
                                y: "70",
                                width: "244",
                                height: "42",
                                rx: "12",
                                fill: cover,
                                animate: {
                                    fill: cover
                                },
                                transition: {
                                    duration: 0.5
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1640,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "40",
                                y: "76",
                                width: "102",
                                height: "30",
                                rx: "8",
                                fill: "#f7f5ec",
                                opacity: 0.35
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1641,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "158",
                                y: "76",
                                width: "102",
                                height: "30",
                                rx: "8",
                                fill: "#f7f5ec",
                                opacity: 0.35
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1642,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "44",
                                y: "112",
                                width: "14",
                                height: "22",
                                rx: "4",
                                fill: "#5f7472"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1643,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "242",
                                y: "112",
                                width: "14",
                                height: "22",
                                rx: "4",
                                fill: "#5f7472"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1644,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1637,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.8rem] font-extrabold text-[#5f7472]",
                                children: [
                                    "day ",
                                    day,
                                    " of ownership — same sofa, new appearance every 10 days"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1647,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                                tone: "teal",
                                onClick: ()=>setDay((d)=>d + 10),
                                ariaLabel: "Advance ten days to change the cover",
                                children: "10 days pass"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1648,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1646,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1636,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[.88rem] leading-relaxed text-[#3a4a48]",
                children: [
                    "House of Quirk created a ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "niche between traditional furniture sales and basic cushion covers"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1652,
                        columnNumber: 34
                    }, this),
                    " — flexibility without requiring major financial investment."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1651,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1631,
        columnNumber: 5
    }, this);
}
_s14(QuirkCase, "UGHJs/Q9M92/abwcDB+cfrEgsso=");
_c26 = QuirkCase;
function SavlonVolley() {
    _s15();
    const { step, next, reset, playing, toggle } = useStepPlayer(3, 3000);
    const beats = [
        {
            who: "Dettol holds the fort",
            d: "Dettol dominates with a strong association as “mother's favourite”. POP: antiseptic properties. But the stinging sensation during application causes consumer discomfort.",
            tilt: 0
        },
        {
            who: "Savlon attacks",
            d: "Savlon matches the antiseptic POP and introduces a POD: the “no sting” formula. Emotional advertising — a child not experiencing pain — shifts preference. Significant market share gained by addressing a pain point competitors ignored.",
            tilt: 1
        },
        {
            who: "Dettol counters",
            d: "Dettol smartly repositions the sting as evidence of effectiveness: “Sting means it's working.” The limitation is converted into a POD, the narrative reframed through advertising — and market leadership is regained.",
            tilt: 2
        }
    ];
    const arrowX = beats[step].tilt === 0 ? 50 : beats[step].tilt === 1 ? 20 : 80;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2",
                children: beats.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full px-3 py-1.5 text-[.74rem] font-extrabold transition-colors duration-300",
                        style: {
                            background: step === i ? "linear-gradient(135deg,#14b8a6,#0f766e)" : "#ffffff",
                            color: step === i ? "#f4fbf9" : "#0f766e",
                            border: "1px solid #cfe3de"
                        },
                        children: [
                            i + 1,
                            ". ",
                            b.who
                        ]
                    }, b.who, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1671,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1669,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl p-4",
                style: {
                    background: "#f2efe7",
                    border: "1px solid #e3ddcf"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-xl px-3 py-2 text-[.8rem] font-extrabold text-white",
                                style: {
                                    background: "linear-gradient(135deg,#14b8a6,#0f766e)"
                                },
                                children: "Dettol"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1679,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-10 flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute top-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-[.72rem] font-extrabold",
                                    style: {
                                        background: "linear-gradient(135deg,#e3c26b,#a97d2c)",
                                        color: "#fffaf0",
                                        left: `${arrowX}%`
                                    },
                                    animate: {
                                        left: `${arrowX}%`
                                    },
                                    transition: {
                                        duration: 0.7,
                                        ease: "easeInOut"
                                    },
                                    children: "momentum →"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1681,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1680,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-xl px-3 py-2 text-[.8rem] font-extrabold",
                                style: {
                                    background: "#fdf6e7",
                                    border: "1px solid #a97d2c",
                                    color: "#a97d2c"
                                },
                                children: "Savlon"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1687,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1678,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-[.9rem] leading-relaxed text-[#3a4a48]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-[#0f766e]",
                                children: [
                                    beats[step].who,
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1689,
                                columnNumber: 73
                            }, this),
                            " ",
                            beats[step].d
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1689,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1677,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerControls, {
                step: step,
                total: 3,
                playing: playing,
                onToggle: toggle,
                onNext: next,
                onReset: reset,
                labels: [
                    "volley 1/3",
                    "volley 2/3",
                    "volley 3/3"
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1691,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1668,
        columnNumber: 5
    }, this);
}
_s15(SavlonVolley, "rwd0htRa4lD55pV82iHkBJcsij4=", false, function() {
    return [
        useStepPlayer
    ];
});
_c27 = SavlonVolley;
const CASE_TABS = [
    {
        k: "Oral-B toothbrush",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brush$3e$__["Brush"],
        el: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OralBCase, {}, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
            lineNumber: 1698,
            columnNumber: 46
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        k: "House of Quirk",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sofa$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sofa$3e$__["Sofa"],
        el: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuirkCase, {}, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
            lineNumber: 1699,
            columnNumber: 42
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        k: "Dettol vs Savlon",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        el: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SavlonVolley, {}, void 0, false, {
            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
            lineNumber: 1700,
            columnNumber: 48
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function CaseFilesMachine() {
    _s16();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const TabIcon = CASE_TABS[tab].icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabIcon, {
                        className: "h-6 w-6",
                        style: {
                            color: "#0f766e"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1709,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "Case files — open one"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1710,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "three brands, one pattern"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1711,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1708,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: CASE_TABS.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: tab === i ? "teal" : "ghost",
                        onClick: ()=>setTab(i),
                        ariaLabel: `Open the ${t.k} case file`,
                        children: t.k
                    }, t.k, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1715,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1713,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
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
                            y: -12
                        },
                        transition: {
                            duration: 0.3
                        },
                        children: CASE_TABS[tab].el
                    }, tab, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1722,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1721,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1720,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1707,
        columnNumber: 5
    }, this);
}
_s16(CaseFilesMachine, "axDiLEfgNOglNP+1xq9HAaUfJ9o=");
_c28 = CaseFilesMachine;
function MktgPopPodCasesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "pod-pop-cases",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 17",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Case files: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grad, {
                            children: "POPs and PODs at work"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1736,
                            columnNumber: 30
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Three stories that make the framework tangible: a bristle that fades, a sofa that changes clothes, and an antiseptic war fought over a sting."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1734,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Open a case file",
                sub: "Oral-B · House of Quirk · Dettol vs Savlon"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1740,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CaseFilesMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1741,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1741,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "The pattern underneath",
                sub: "Every case runs the same play"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1743,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Find the POP",
                            v: "The shared expectation: oral hygiene · quality furniture · antiseptic properties"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1746,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Add a valued POD",
                            v: "Fading bristles · a new look every 10 days · a no-sting formula"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1747,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Defend or reframe",
                            v: "When copied, the POD becomes POP — Dettol reframed its sting as proof of working"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1748,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1745,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1744,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Oral-B: a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "colour-changing bristle"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1754,
                                    columnNumber: 23
                                }, void 0),
                                " (blue → white) differentiated the brand overnight — benefit, not feature."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "House of Quirk: furniture covers created a niche between furniture sales and cushion covers — ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "a makeover every 10 days"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1755,
                                    columnNumber: 107
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Savlon attacked the sting Dettol ignored; Dettol came back with ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "“Sting means it's working.”"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1756,
                                    columnNumber: 77
                                }, void 0)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Every case: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "hold the POP, own the POD"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1757,
                                    columnNumber: 25
                                }, void 0),
                                ", and reframe when attacked."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: "Copied PODs decay into POPs — the pattern repeats across categories."
                        }, void 0, false)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1753,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1752,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1733,
        columnNumber: 5
    }, this);
}
_c29 = MktgPopPodCasesSection;
/* ============================================================
   L18 · WHY PEOPLE BUY (why-buy)
   ============================================================ */ const VERBS = [
    {
        k: "reach",
        from: 0.2,
        to: 0.82,
        d: "cross the gap from where you are to where you wish to be"
    },
    {
        k: "restore",
        from: 0.98,
        to: 0.82,
        d: "return to a desired state you once held"
    },
    {
        k: "maintain",
        from: 0.82,
        to: 0.82,
        d: "hold the desired state steady"
    },
    {
        k: "protect",
        from: 0.82,
        to: 0.82,
        d: "guard the desired state from slipping"
    }
];
function DesiredStateMachine() {
    _s17();
    const [verb, setVerb] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const v = verb === null ? null : VERBS[verb];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#0f766e"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1782,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "The desired-state machine"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1783,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "reach · restore · maintain · protect"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1784,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1781,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-8 h-14 rounded-full",
                style: {
                    background: "#f2efe7",
                    border: "1px solid #e3ddcf"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-[82%] top-0 flex h-14 -translate-x-1/2 items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-lg px-2.5 py-1 text-[.68rem] font-extrabold",
                            style: {
                                background: "linear-gradient(135deg,#e3c26b,#a97d2c)",
                                color: "#fffaf0"
                            },
                            children: "desired state"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1788,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1787,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-[.68rem] font-extrabold text-[#5f7472]",
                        children: "current state"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1792,
                        columnNumber: 9
                    }, this),
                    v ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute top-1/2 h-9 w-9 -translate-y-1/2 rounded-full",
                        style: {
                            background: "linear-gradient(135deg,#14b8a6,#0f766e)",
                            border: "3px solid #fff",
                            boxShadow: "0 4px 12px rgba(15,118,110,.35)",
                            left: `${v.from * 100}%`
                        },
                        animate: {
                            left: `${v.to * 100}%`,
                            scale: v.k === "maintain" ? [
                                1,
                                1.12,
                                1
                            ] : 1
                        },
                        transition: {
                            duration: 0.8,
                            ease: "easeInOut",
                            scale: {
                                duration: 1.4,
                                repeat: v.k === "maintain" ? Infinity : 0
                            }
                        }
                    }, v.k, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1796,
                        columnNumber: 11
                    }, this) : null,
                    v && v.k === "protect" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.6
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        className: "absolute left-[82%] top-[-14px] -translate-x-1/2 rounded-lg px-2 py-0.5 text-[.62rem] font-extrabold",
                        style: {
                            background: "#0f766e",
                            color: "#f4fbf9"
                        },
                        children: "shielded"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1802,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1786,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 flex flex-wrap gap-2",
                children: [
                    VERBS.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                            tone: verb === i ? "teal" : "ghost",
                            onClick: ()=>setVerb(i),
                            ariaLabel: `Animate the ${b.k} motivation`,
                            children: b.k
                        }, b.k, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1811,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        onClick: ()=>setVerb(null),
                        ariaLabel: "Clear the machine",
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1815,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1809,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
                children: v ? `Buy to ${v.k.toUpperCase()} a desired state — ${v.d}. The purchase is about the gap between the current state and where the consumer wishes to be.` : "Purchases are driven by needs, desires, impulses and emotional states — and context matters (the same consumer buys coffee differently at different times of day). Pick a verb."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1817,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1780,
        columnNumber: 5
    }, this);
}
_s17(DesiredStateMachine, "kOTQOgN4NMaX1gxJJ5m2SR94fsk=");
_c30 = DesiredStateMachine;
function EvidenceReveal() {
    _s18();
    const { step, next, reset, playing, toggle } = useStepPlayer(2, 2600);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#a97d2c"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1830,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "Forest Essentials — the evidence machine"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1831,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "₹5,500–7,000 for 30ml"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1832,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1829,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-3",
                children: [
                    {
                        v: 100,
                        l: "100%"
                    },
                    {
                        v: 97,
                        l: "97%"
                    },
                    {
                        v: 94,
                        l: "94%"
                    }
                ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.78rem] font-bold text-[#5f7472]",
                                children: [
                                    "clinically claimed result ",
                                    i + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1837,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 h-7 rounded-lg",
                                style: {
                                    background: "#eef0ea"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "h-7 rounded-lg",
                                    style: {
                                        background: "linear-gradient(135deg,#e3c26b,#a97d2c)",
                                        width: 0
                                    },
                                    animate: {
                                        width: step >= 0 ? `${s.v}%` : 0
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: i * 0.15
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1839,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1838,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.l, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1836,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1834,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: step >= 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    className: "mt-4 rounded-xl px-4 py-3",
                    style: {
                        background: "#f7ecec",
                        border: "1px dashed #dcc3c9"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[.9rem] font-extrabold text-[#9f3d54]",
                            children: "The fine print: sample size was only 36."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1849,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-[.85rem] leading-relaxed text-[#2b2014]",
                            children: [
                                "Consumers overlook the limitation and assume they belong to the positive percentage groups. The",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "appearance of evidence"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1852,
                                    columnNumber: 15
                                }, this),
                                " substitutes for the actual quality of evidence."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1850,
                            columnNumber: 13
                        }, this)
                    ]
                }, "fine", true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1847,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1845,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerControls, {
                step: step,
                total: 2,
                playing: playing,
                onToggle: toggle,
                onNext: next,
                onReset: reset,
                labels: [
                    "the stats",
                    "the fine print"
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1857,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1828,
        columnNumber: 5
    }, this);
}
_s18(EvidenceReveal, "rwd0htRa4lD55pV82iHkBJcsij4=", false, function() {
    return [
        useStepPlayer
    ];
});
_c31 = EvidenceReveal;
function MktgWhyBuySection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "why-buy",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 18",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Why do people ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grad, {
                            children: "buy"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1868,
                            columnNumber: 32
                        }, void 0),
                        "?"
                    ]
                }, void 0, true),
                lead: "The fundamental question of consumer behaviour: purchases driven by needs, desires, impulses and emotional states — in minds that are never empty."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1866,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Every purchase closes a gap",
                sub: "Reach · restore · maintain · protect"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1872,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: proseCls,
                    children: [
                        "Consumers purchase to ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "reach, restore, maintain, or protect a desired state"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1875,
                            columnNumber: 33
                        }, this),
                        " — the gap between their current state and where they wish to be. And marketing never lands on a blank page: it engages with existing memories, experiences, expectations, desires, identities, biases and goals.",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Minds are never empty."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1878,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1874,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1873,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesiredStateMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1881,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1881,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "insight",
                    title: "Stimulus and imagination",
                    children: [
                        "Consumers respond to ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "imagined consumption"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1884,
                            columnNumber: 32
                        }, this),
                        " almost as strongly as to actual product information. Visual representations and storytelling create experiences that make products feel real and desirable."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1883,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1882,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Three case studies — the story beyond the product",
                sub: "Swiggy mangoes · TRIA · Forest Essentials"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1889,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 md:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.8rem] font-extrabold uppercase tracking-[.14em] text-[#0f766e]",
                                    children: "Swiggy mangoes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1893,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.86rem] leading-relaxed text-[#2b2014]",
                                    children: [
                                        "Water droplets, fresh appearance — sensory appeal through visual representation. Consumers feel they are looking at real mangoes: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "imagined consumption"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1896,
                                            columnNumber: 40
                                        }, this),
                                        " that sells an experience and freshness, not just a product."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1894,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1892,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.8rem] font-extrabold uppercase tracking-[.14em] text-[#0f766e]",
                                    children: "TRIA hair treatment"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1901,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.86rem] leading-relaxed text-[#2b2014]",
                                    children: [
                                        "Targets people experiencing hair loss or thinning; before-and-after narratives attempt to",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "reduce the distance between actual self and desired self"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1904,
                                            columnNumber: 15
                                        }, this),
                                        ", connecting with self-esteem. Relevance varies by audience — it matters only to those with the problem."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1902,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1900,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.8rem] font-extrabold uppercase tracking-[.14em] text-[#a97d2c]",
                                    children: "Forest Essentials serum"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1909,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-[.86rem] leading-relaxed text-[#2b2014]",
                                    children: [
                                        "₹5,500–7,000 for 30ml. Statistics — ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "100%, 97%, 94%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 1911,
                                            columnNumber: 51
                                        }, this),
                                        " — build credibility; luxury minimalistic upmarket packaging; visual appeal plus scientific claims create desirability. Sample size: 36."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1910,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1908,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1891,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1890,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EvidenceReveal, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1917,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1917,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "Story over product",
                sub: "The insight that ties the cases together"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1919,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: `${proseCls} grid gap-2`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Marketing creates narratives and storylines, not just product features."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1922,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• The emotional narrative helps consumers achieve their desired state more than the product itself."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1923,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                "• Consumers frequently use the ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "appearance of evidence"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1924,
                                    columnNumber: 46
                                }, this),
                                " — how data is presented — rather than the actual quality of evidence."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1924,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "• Successful marketing combines product benefits with storytelling that addresses aspirations and self-esteem."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1925,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1921,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1920,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "People buy to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "reach, restore, maintain or protect"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1931,
                                    columnNumber: 27
                                }, void 0),
                                " a desired state."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Marketing works on minds that are ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "never empty"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1932,
                                    columnNumber: 47
                                }, void 0),
                                " — memories, biases, identities, goals already live there."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Imagined consumption is nearly as strong as the real thing — ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Swiggy's droplets sell freshness"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1933,
                                    columnNumber: 74
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "TRIA sells the distance between ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "actual self and desired self"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1934,
                                    columnNumber: 45
                                }, void 0),
                                " — relevance varies by audience."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "₹5,500–7,000 serum: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "100% · 97% · 94%"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1935,
                                    columnNumber: 33
                                }, void 0),
                                " stats on a sample of ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "36"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1935,
                                    columnNumber: 88
                                }, void 0),
                                " — appearance of evidence beats quality of evidence."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1930,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1929,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1865,
        columnNumber: 5
    }, this);
}
_c32 = MktgWhyBuySection;
/* ============================================================
   L18 · ERAS & NUDGES (eras-nudges)
   ============================================================ */ const ERAS = [
    {
        k: "Classical era",
        span: "1950s–60s",
        body: "Dominated by classical economics: consumers are rational beings making predictable choices. People buy only what they need; demand and supply balance naturally; behaviour is easy to forecast.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"]
    },
    {
        k: "Cognitive revolution",
        span: "1970s–90s",
        body: "The key shift: consumers are irrational, not rational decision-makers. Daniel Kahneman and Amos Tversky's “Judgment under Uncertainty” showed decisions can be irrational with no logical basis — behaviour cannot be predicted with certainty.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"]
    },
    {
        k: "Contemporary era",
        span: "present",
        body: "Nudge theory, introduced by Professor Richard Thaler: create a choice environment that guides consumers toward decisions good for them ethically and socially — without restricting freedom of choice. Like a mother elephant nudging her baby back on track.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__["Hand"]
    }
];
function ErasTimeline() {
    _s19();
    const { step, next, reset, playing, toggle } = useStepPlayer(3, 3400);
    const EraIcon = ERAS[step].icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#0f766e"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1970,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "Three eras of the consumer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1971,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "rational → irrational → nudged"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1972,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1969,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-2 rounded-full",
                        style: {
                            background: "#e4ebe8"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute inset-y-0 left-0 rounded-full",
                                style: {
                                    background: "linear-gradient(90deg,#14b8a6,#0f766e)"
                                },
                                animate: {
                                    width: `${step / 2 * 100}%`
                                },
                                transition: {
                                    duration: 0.6
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1976,
                                columnNumber: 11
                            }, this),
                            ERAS.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[.72rem] font-extrabold transition-all duration-300",
                                    style: {
                                        left: `${i / 2 * 100}%`,
                                        background: i <= step ? "linear-gradient(135deg,#14b8a6,#0f766e)" : "#ffffff",
                                        color: i <= step ? "#f4fbf9" : "#5f7472",
                                        border: "2px solid " + (i <= step ? "#0f766e" : "#d5e6e1")
                                    },
                                    children: i + 1
                                }, e.k, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 1980,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1975,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex justify-between text-[.72rem] font-extrabold uppercase tracking-[.12em] text-[#5f7472]",
                        children: ERAS.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-1/3 text-center last:text-right first:text-left",
                                children: e.span
                            }, e.k, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 1993,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 1992,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1974,
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
                        y: -12
                    },
                    transition: {
                        duration: 0.35
                    },
                    className: "mt-5 rounded-2xl p-5",
                    style: {
                        background: "#f2efe7",
                        border: "1px solid #e3ddcf"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "flex items-center gap-2 text-lg font-extrabold text-[#1f2b2b]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EraIcon, {
                                    className: "h-5 w-5",
                                    style: {
                                        color: "#0f766e"
                                    },
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2000,
                                    columnNumber: 13
                                }, this),
                                " ",
                                ERAS[step].k,
                                " · ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "#a97d2c"
                                    },
                                    children: ERAS[step].span
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2000,
                                    columnNumber: 103
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 1999,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-[.92rem] leading-relaxed text-[#3a4a48]",
                            children: ERAS[step].body
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2002,
                            columnNumber: 11
                        }, this)
                    ]
                }, step, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 1997,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 1996,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerControls, {
                step: step,
                total: 3,
                playing: playing,
                onToggle: toggle,
                onNext: next,
                onReset: reset,
                labels: [
                    "classical era",
                    "cognitive revolution",
                    "contemporary era"
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2005,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 1968,
        columnNumber: 5
    }, this);
}
_s19(ErasTimeline, "rwd0htRa4lD55pV82iHkBJcsij4=", false, function() {
    return [
        useStepPlayer
    ];
});
_c33 = ErasTimeline;
function MktgErasSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "eras-nudges",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 18",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Rational → irrational → ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grad, {
                            children: "nudged"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2016,
                            columnNumber: 42
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "How the study of the consumer evolved: classical economics trusted the rational buyer, Kahneman and Tversky broke the assumption, and Thaler's nudges now design the choice environment itself."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2014,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "The evolution, era by era",
                sub: "Play through seventy years"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2020,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErasTimeline, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2021,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2021,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Evidence for irrationality",
                sub: "The breakfast menu experiment"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2023,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "story",
                    title: "Idly, biryani, desserts — in the morning",
                    children: [
                        "Presented with food menu options in the morning, people choose varied items — idly, biryani, desserts — despite it being early morning. Rational behaviour would suggest everyone picks light breakfast options; the varied choices reflect ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "individual experiences, memories, beliefs and preferences"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2028,
                            columnNumber: 27
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2025,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2024,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[.8rem] font-extrabold uppercase tracking-[.14em] text-[#a97d2c]",
                            children: "Heuristics at work — Nutella's Amazon listing"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2033,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex flex-wrap gap-2",
                            children: [
                                "800 ratings",
                                "4.5 stars",
                                "₹311 discount",
                                "free delivery",
                                "cash back offers",
                                "stock availability"
                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    children: h
                                }, h, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2036,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2034,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-[.88rem] leading-relaxed text-[#2b2014]",
                            children: "Mental shortcuts that help consumers move from one decision stage to the next — and choose right options efficiently."
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2039,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2032,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2031,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "The nudge toolkit",
                sub: "Choice architecture in the wild"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2045,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 sm:grid-cols-2",
                    children: [
                        {
                            t: "European trash disposal",
                            d: "Adding an interactive ramp near trash cans transformed waste disposal into a fun activity — proper disposal behaviour increased."
                        },
                        {
                            t: "Staircase placement",
                            d: "Positioning stairs before elevators encourages physical activity; design influences behaviour positively."
                        },
                        {
                            t: "Bestseller labels",
                            d: "Marking products as bestsellers creates choice architecture without demeaning other products — guiding selection toward popular options."
                        },
                        {
                            t: "Product recommendations",
                            d: "Suggesting products based on consumption patterns guides consumers toward suitable choices."
                        }
                    ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex items-center gap-2 font-extrabold text-[#1f2b2b]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hand$3e$__["Hand"], {
                                            className: "h-4 w-4",
                                            style: {
                                                color: "#a97d2c"
                                            },
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                            lineNumber: 2055,
                                            columnNumber: 84
                                        }, this),
                                        " ",
                                        n.t
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2055,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1.5 text-[.86rem] leading-relaxed text-[#2b2014]",
                                    children: n.d
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2056,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, n.t, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2054,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2047,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2046,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "4",
                title: "Heuristics vs nudges — the distinction",
                sub: "Shortcuts in the mind vs design of the environment"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2062,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Heuristics",
                            v: "Mental shortcuts that help compare options — ratings, prices, discounts"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2065,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KV"], {
                            k: "Nudges",
                            v: "Environmental design that guides behavior toward naturally better choices without direct persuasion"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2066,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2064,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2063,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                    source: "Lecture 18 · concept check",
                    q: "A 'bestseller' label on a menu is best described as…",
                    options: [
                        "a heuristic, because it is a mental shortcut",
                        "a nudge, because it redesigns the choice environment without restricting choice",
                        "a discount, because it changes the price",
                        "irrational behaviour with no logical basis"
                    ],
                    answer: 1,
                    explain: "Nudges are environmental design — choice architecture that guides behavior toward naturally better choices without direct persuasion. Heuristics are the mental shortcuts inside the consumer."
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2070,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2069,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Classical era (1950s–60s): ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "rational, predictable"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2079,
                                    columnNumber: 40
                                }, void 0),
                                " consumers who buy only what they need."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Cognitive revolution (1970s–90s): ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Kahneman & Tversky"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2080,
                                    columnNumber: 47
                                }, void 0),
                                ", “Judgment under Uncertainty” — consumers are irrational."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Contemporary era: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Thaler's nudges"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2081,
                                    columnNumber: 31
                                }, void 0),
                                " — the mother-elephant philosophy of gentle environmental design."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Heuristics are ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "mental shortcuts"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2082,
                                    columnNumber: 28
                                }, void 0),
                                " (800 ratings · 4.5 stars · ₹311 discount); nudges are ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "designed environments"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2082,
                                    columnNumber: 116
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Ethical marketing nudges consumers toward decisions ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "beneficial to both parties"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2083,
                                    columnNumber: 65
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2078,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2077,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 2013,
        columnNumber: 5
    }, this);
}
_c34 = MktgErasSection;
/* ============================================================
   L19 · FIVE STAGES (five-stages)
   ============================================================ */ const STAGES = [
    {
        k: "Problem recognition",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        d: "A need or gap between desired and existing state is identified — as simple as feeling hungry, as complex as needing new electronics. The triggering point for all subsequent purchasing decisions."
    },
    {
        k: "Information search",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
        d: "Consumers actively seek information about potential solutions across channels: websites (Amazon, Swiggy Instamart), physical stores, social media, peer recommendations, expert reviews. The extent of search varies with product importance and involvement."
    },
    {
        k: "Evaluation of alternatives",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"],
        d: "Comparison within a consideration set. Key attributes are identified (memory, graphics, price for laptops) and a weighted scoring method is often used — the final choice goes to the best overall value."
    },
    {
        k: "Purchase decision",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
        d: "The consumer commits to buying — the actual transaction point, often influenced by heuristics and mental shortcuts that expedite the decision."
    },
    {
        k: "Post-purchase behavior",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$handshake$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartHandshake$3e$__["HeartHandshake"],
        d: "Feelings after purchase range from satisfaction and confidence to regret and dissatisfaction. Critical for customer retention and brand loyalty — often overlooked in theoretical models but essential in practice."
    }
];
function FiveStagePlayer() {
    _s20();
    const { step, next, reset, playing, toggle } = useStepPlayer(5, 2600);
    const Icon = STAGES[step].icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-extrabold text-[#1f2b2b]",
                        children: "🧭"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "The five-stage step player"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "the textbook spine of a decision"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 grid gap-2 sm:grid-cols-5",
                children: STAGES.map((s, i)=>{
                    const active = step === i;
                    const done = i < step;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl px-3 py-3 text-center transition-all duration-300",
                        style: {
                            background: active ? "linear-gradient(135deg,#14b8a6,#0f766e)" : done ? "#edf6f4" : "#ffffff",
                            border: `1px solid ${active ? "#0f766e" : "#dce8e4"}`,
                            opacity: active || done ? 1 : 0.6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                className: "mx-auto h-5 w-5",
                                style: {
                                    color: active ? "#e3c26b" : "#0f766e"
                                },
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 2138,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-[.76rem] font-extrabold leading-tight",
                                style: {
                                    color: active ? "#f4fbf9" : "#1f2b2b"
                                },
                                children: [
                                    i + 1,
                                    ". ",
                                    s.k
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 2139,
                                columnNumber: 15
                            }, this)
                        ]
                    }, s.k, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2132,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2127,
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
                        y: -12
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "mt-4 rounded-2xl p-5",
                    style: {
                        background: "#f2efe7",
                        border: "1px solid #e3ddcf"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "flex items-center gap-2 text-lg font-extrabold text-[#1f2b2b]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-5 w-5",
                                    style: {
                                        color: "#a97d2c"
                                    },
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2150,
                                    columnNumber: 13
                                }, this),
                                " Stage ",
                                step + 1,
                                " · ",
                                STAGES[step].k
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-[.92rem] leading-relaxed text-[#3a4a48]",
                            children: STAGES[step].d
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2152,
                            columnNumber: 11
                        }, this)
                    ]
                }, step, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerControls, {
                step: step,
                total: 5,
                playing: playing,
                onToggle: toggle,
                onNext: next,
                onReset: reset
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
                children: step === 4 ? "Stage 5 closes the loop — post-purchase satisfaction feeds retention and loyalty, and sets up the next problem recognition." : "The theory assumes a linear, sequential process — consumers follow all five stages in order. (Reality is messier; see the next chapter.)"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 2121,
        columnNumber: 5
    }, this);
}
_s20(FiveStagePlayer, "rwd0htRa4lD55pV82iHkBJcsij4=", false, function() {
    return [
        useStepPlayer
    ];
});
_c35 = FiveStagePlayer;
function MktgStagesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "five-stages",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 19",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "The ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grad, {
                            children: "five stages"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2170,
                            columnNumber: 22
                        }, void 0),
                        " of buying"
                    ]
                }, void 0, true),
                lead: "Problem recognition → information search → evaluation of alternatives → purchase decision → post-purchase behavior — the theoretical framework every marketer learns first."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Walk the stages",
                sub: "Play, or step through manually"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiveStagePlayer, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2175,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "Heuristics speed every stage up",
                sub: "Mental shortcuts without extensive analysis"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                    children: [
                        {
                            t: "Ratings & reviews",
                            d: "High ratings — like 4.5 stars — provide assurance of product quality."
                        },
                        {
                            t: "Brand name",
                            d: "Established brands like JBL or Samsung serve as quality indicators."
                        },
                        {
                            t: "Price discounts",
                            d: "Percentage off or reduced prices influence purchase decisions."
                        },
                        {
                            t: "Scarcity",
                            d: "“Only 6 rooms left” creates urgency to purchase immediately."
                        },
                        {
                            t: "Free delivery",
                            d: "Adds perceived value to the offering."
                        },
                        {
                            t: "Warranty & returns",
                            d: "Warranty and return policies reduce perceived risk."
                        },
                        {
                            t: "Visual elements",
                            d: "Product images and property photos influence decision-making."
                        },
                        {
                            t: "H&M's nudge",
                            d: "Items labelled “Few pieces left” create urgency to buy before stock-outs."
                        }
                    ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[.84rem] font-extrabold text-[#1f2b2b]",
                                    children: h.t
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2191,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[.8rem] leading-relaxed text-[#2b2014]",
                                    children: h.d
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2192,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, h.t, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2190,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2179,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quiz"], {
                    source: "Lecture 19 · concept check",
                    q: "Weighted scoring — assigning importance to attributes like memory, graphics and price — belongs to which stage?",
                    options: [
                        "Problem recognition",
                        "Information search",
                        "Evaluation of alternatives",
                        "Post-purchase behavior"
                    ],
                    answer: 2,
                    explain: "Evaluation of alternatives compares options within the consideration set, often weighting attributes; the final choice is the best overall value."
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2198,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Problem recognition"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2207,
                                    columnNumber: 13
                                }, void 0),
                                " is the trigger — a gap between desired and existing state."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Search happens across ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Amazon, Swiggy Instamart, stores, social media, peers, experts"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2208,
                                    columnNumber: 35
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Evaluation = a consideration set + ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "weighted scoring"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2209,
                                    columnNumber: 48
                                }, void 0),
                                " on key attributes."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Purchase is the ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "transaction point"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2210,
                                    columnNumber: 29
                                }, void 0),
                                ", accelerated by heuristics."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Post-purchase feelings (satisfaction ↔ regret) decide ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "retention and loyalty"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2211,
                                    columnNumber: 67
                                }, void 0),
                                " — often overlooked, always essential."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2206,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2205,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 2167,
        columnNumber: 5
    }, this);
}
_c36 = MktgStagesSection;
/* ============================================================
   L19 · THE MESSY MIDDLE (messy-middle)
   ============================================================ */ const MM_NODES = [
    {
        x: 70,
        label: "Recognition"
    },
    {
        x: 190,
        label: "Search"
    },
    {
        x: 310,
        label: "Evaluation"
    },
    {
        x: 430,
        label: "Purchase"
    },
    {
        x: 550,
        label: "Post-purchase"
    }
];
function LinearVsMessyMachine() {
    _s21();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("linear");
    const { step, next, reset, playing, toggle } = useStepPlayer(5, 1500);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm lift p-5 md:p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#0f766e"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-[#1f2b2b]",
                        children: "Theory vs reality — the same five stages"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "toggle the lens"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2238,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: mode === "linear" ? "teal" : "ghost",
                        onClick: ()=>setMode("linear"),
                        ariaLabel: "Show the linear theory view",
                        children: "Theory: linear"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: mode === "messy" ? "gold" : "ghost",
                        onClick: ()=>setMode("messy"),
                        ariaLabel: "Show the messy reality view",
                        children: "Reality: messy"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2242,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 640 260",
                className: "mt-4 h-auto w-full",
                role: "img",
                "aria-label": "Five decision stages on a rail: in linear mode a token moves straight through them; in messy mode backward and skip arrows appear showing the non-linear path",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "40",
                        y1: "90",
                        x2: "600",
                        y2: "90",
                        stroke: "#d5e6e1",
                        strokeWidth: "3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2247,
                        columnNumber: 9
                    }, this),
                    MM_NODES.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: n.x,
                                    cy: "90",
                                    r: "24",
                                    fill: mode === "linear" && i === step ? "#0f766e" : "#ffffff",
                                    stroke: mode === "messy" ? "#a97d2c" : "#0f766e",
                                    strokeWidth: "2.5",
                                    opacity: mode === "linear" && i > step ? 0.55 : 1
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2250,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: n.x,
                                    y: "95",
                                    textAnchor: "middle",
                                    fontSize: "11",
                                    fontWeight: "800",
                                    fill: mode === "linear" && i === step ? "#f4fbf9" : "#0f766e",
                                    children: i + 1
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    x: n.x,
                                    y: "132",
                                    textAnchor: "middle",
                                    fontSize: "9.5",
                                    fontWeight: "800",
                                    fill: "#5f7472",
                                    children: n.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2254,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, n.label, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2249,
                            columnNumber: 11
                        }, this)),
                    mode === "linear" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            MM_NODES.slice(0, -1).map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                                    x1: n.x + 26,
                                    y1: "90",
                                    x2: MM_NODES[i + 1].x - 26,
                                    y2: "90",
                                    stroke: "#14b8a6",
                                    strokeWidth: "2.5",
                                    opacity: 1,
                                    initial: {
                                        pathLength: 0
                                    },
                                    whileInView: {
                                        pathLength: 1
                                    },
                                    viewport: {
                                        once: true
                                    }
                                }, i, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2261,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                cx: MM_NODES[0].x,
                                cy: "50",
                                r: "9",
                                fill: "#e3c26b",
                                stroke: "#a97d2c",
                                strokeWidth: "1.5",
                                animate: {
                                    cx: MM_NODES[step].x
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 160,
                                    damping: 20
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 2264,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2259,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M 310 62 C 280 30, 220 30, 190 62",
                                fill: "none",
                                stroke: "#9f3d54",
                                strokeWidth: "2",
                                strokeDasharray: "6 5",
                                opacity: 1,
                                initial: {
                                    pathLength: 0
                                },
                                whileInView: {
                                    pathLength: 1
                                },
                                viewport: {
                                    once: true
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 2270,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "250",
                                y: "22",
                                textAnchor: "middle",
                                fontSize: "9.5",
                                fontWeight: "800",
                                fill: "#9f3d54",
                                children: "back to search"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 2272,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M 430 62 C 400 30, 340 30, 310 62",
                                fill: "none",
                                stroke: "#9f3d54",
                                strokeWidth: "2",
                                strokeDasharray: "6 5",
                                opacity: 1,
                                initial: {
                                    pathLength: 0
                                },
                                whileInView: {
                                    pathLength: 1
                                },
                                viewport: {
                                    once: true
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 2273,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "370",
                                y: "46",
                                textAnchor: "middle",
                                fontSize: "9.5",
                                fontWeight: "800",
                                fill: "#9f3d54",
                                children: "cart add → remove"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 2275,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M 70 130 C 180 190, 320 190, 430 130",
                                fill: "none",
                                stroke: "#a97d2c",
                                strokeWidth: "2",
                                strokeDasharray: "6 5",
                                opacity: 1,
                                initial: {
                                    pathLength: 0
                                },
                                whileInView: {
                                    pathLength: 1
                                },
                                viewport: {
                                    once: true
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 2277,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "250",
                                y: "196",
                                textAnchor: "middle",
                                fontSize: "9.5",
                                fontWeight: "800",
                                fill: "#a97d2c",
                                children: "skip: low involvement · repeat brands · impulse · recommendations"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 2279,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "530",
                                y: "170",
                                textAnchor: "middle",
                                fontSize: "9.5",
                                fontWeight: "700",
                                fill: "#5f7472",
                                children: "cancel after placement"
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 2282,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2268,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2244,
                columnNumber: 7
            }, this),
            mode === "linear" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerControls, {
                        step: step,
                        total: 5,
                        playing: playing,
                        onToggle: toggle,
                        onNext: next,
                        onReset: reset
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2288,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
                        children: "Theory perspective: a linear, sequential process — Recognition → Search → Evaluation → Purchase → Post-purchase, all five stages in order."
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2289,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Status, {
                tone: "gold",
                children: "Reality: consumers backtrack (evaluation → search), skip stages entirely for low-involvement products, repeat purchases from loyal brands, impulse purchases during sales, and recommendations — and sometimes cancel orders after placement."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2295,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 2234,
        columnNumber: 5
    }, this);
}
_s21(LinearVsMessyMachine, "KPJxNUf09airXjo4KQ4KGfFqLPU=", false, function() {
    return [
        useStepPlayer
    ];
});
_c37 = LinearVsMessyMachine;
function InfinityLoopMachine() {
    _s22();
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [runId, setRunId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DarkPanel, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$infinity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Infinity$3e$__["Infinity"], {
                        className: "h-6 w-6",
                        style: {
                            color: "#e3c26b"
                        },
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2311,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold",
                        style: {
                            color: "#e9f2ee"
                        },
                        children: "The infinity loop"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chip",
                        children: "exploration × evaluation, forever until the gap closes"
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2313,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl p-2",
                style: {
                    background: "rgba(255,255,255,.03)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 600 300",
                    className: "h-auto w-full",
                    role: "img",
                    "aria-label": "An infinity-shaped loop connecting exploration and evaluation, with a gold token travelling around it endlessly",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "mmInfGrad",
                                x1: "0",
                                y1: "0",
                                x2: "1",
                                y2: "0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#14b8a6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 2320,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "55%",
                                        stopColor: "#0f766e"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 2321,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#e3c26b"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 2322,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 2319,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2318,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            id: "mmInfPath",
                            d: "M300 150 C 258 76, 126 76, 126 150 C 126 224, 258 224, 300 150 C 342 76, 474 76, 474 150 C 474 224, 342 224, 300 150 Z",
                            fill: "none",
                            stroke: "url(#mmInfGrad)",
                            strokeWidth: "4",
                            opacity: 0.9
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2325,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "182",
                            y: "72",
                            textAnchor: "middle",
                            fontSize: "14",
                            fontWeight: "800",
                            fill: "#e3c26b",
                            children: "explore"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2328,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "420",
                            y: "72",
                            textAnchor: "middle",
                            fontSize: "14",
                            fontWeight: "800",
                            fill: "#14b8a6",
                            children: "evaluate"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2329,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: "300",
                            y: "158",
                            textAnchor: "middle",
                            fontSize: "10.5",
                            fontWeight: "700",
                            fill: "#9fbcb4",
                            children: "the messy middle"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2330,
                            columnNumber: 11
                        }, this),
                        playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            r: "10",
                            fill: "#e3c26b",
                            stroke: "#0c2124",
                            strokeWidth: "2.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                dur: "7s",
                                repeatCount: "indefinite",
                                rotate: "0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mpath", {
                                    href: "#mmInfPath"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2334,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 2333,
                                columnNumber: 15
                            }, this)
                        }, runId, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2332,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2316,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        tone: "teal",
                        onClick: ()=>setPlaying(!playing),
                        ariaLabel: playing ? "Pause the loop token" : "Play the loop token",
                        children: [
                            playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                className: "h-4 w-4",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 2342,
                                columnNumber: 22
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "h-4 w-4",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 2342,
                                columnNumber: 66
                            }, this),
                            playing ? "Pause" : "Play"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2341,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MBtn, {
                        onClick: ()=>{
                            setPlaying(true);
                            setRunId((r)=>r + 1);
                        },
                        ariaLabel: "Restart the loop token",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 2346,
                                columnNumber: 11
                            }, this),
                            "Restart"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2345,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                "aria-live": "polite",
                className: "mt-4 min-h-[2.4rem] rounded-xl px-3.5 py-2.5 font-mono-warm text-[.85rem] font-bold leading-relaxed",
                style: {
                    background: "rgba(255,255,255,.05)",
                    border: "1px dashed rgba(227,194,107,.3)",
                    color: "#e3c26b"
                },
                children: "The consumer explores options and evaluates alternatives in an infinity-loop pattern — the loop continues until the gap between desired and existing state is satisfied. Non-linear, iterative — never a straight line."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2349,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 2309,
        columnNumber: 5
    }, this);
}
_s22(InfinityLoopMachine, "Om03PaeH3UKQQjxReREjWnr2ybg=");
_c38 = InfinityLoopMachine;
function MktgMessySection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "messy-middle",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                eyebrow: "Principles of Marketing · Lecture 19",
                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "The ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grad, {
                            children: "messy middle"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2363,
                            columnNumber: 22
                        }, void 0)
                    ]
                }, void 0, true),
                lead: "Linear vs non-linear: real decisions skip stages, backtrack, and loop between exploration and evaluation — an infinity that only closes when the gap between desired and existing state is satisfied."
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2361,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "1",
                title: "Theory vs reality",
                sub: "The same five stages, two very different shapes"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinearVsMessyMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2368,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "2",
                title: "The loop, live",
                sub: "Exploration and evaluation trade places"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfinityLoopMachine, {}, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2371,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2371,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "3",
                title: "What makes the middle messy",
                sub: "Involvement and time"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2373,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 md:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-extrabold text-[#1f2b2b]",
                                    children: "High-involvement products"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2377,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1.5 text-[.86rem] leading-relaxed text-[#2b2014]",
                                    children: "Cars, laptops, properties — all five stages methodically; extensive evaluation; multiple sources; test drives, physical visits, detailed comparisons."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2378,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2376,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-extrabold text-[#1f2b2b]",
                                    children: "Low-involvement products"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2384,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1.5 text-[.86rem] leading-relaxed text-[#2b2014]",
                                    children: "Everyday items, routine purchases — stages compressed or skipped; reduced evaluation; habit or convenience; heuristics play a more significant role."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2385,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2383,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-warm lift p-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-extrabold text-[#1f2b2b]",
                                    children: "Time constraints"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2391,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1.5 text-[.86rem] leading-relaxed text-[#2b2014]",
                                    children: "Limited time encourages skipping or compressing stages; speed over thorough evaluation; heuristics become more critical in expedited decisions."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2392,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2390,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2375,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2374,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadStep"], {
                n: "4",
                title: "Real purchases from class",
                sub: "Five journeys, five shapes"
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-warm p-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
                        children: [
                            {
                                t: "Novel",
                                d: "Online research (Amazon) → reviews → physical store comparison → final online purchase"
                            },
                            {
                                t: "Clothing",
                                d: "Quality check → price comparison → fitting → purchase with positive feeling"
                            },
                            {
                                t: "Keyboard",
                                d: "Online platform search → review analysis → offer evaluation → purchase"
                            },
                            {
                                t: "Coffee",
                                d: "Brand-preference decision — Davidoff, despite cheaper options"
                            },
                            {
                                t: "Jewelry",
                                d: "Multiple store visits → selection → price negotiation → satisfied purchase"
                            },
                            {
                                t: "Cart abandonment",
                                d: "Add items but don't complete purchase — reconsidering, re-evaluating; a stage of the loop, not a failure of it"
                            }
                        ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl p-3.5",
                                style: {
                                    background: "#fffaf1",
                                    border: "1px solid #f0e2c8"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2 font-bold text-[#7c6248]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                className: "h-4 w-4",
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                                lineNumber: 2413,
                                                columnNumber: 81
                                            }, this),
                                            " ",
                                            p.t
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 2413,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[.84rem] leading-relaxed text-[#2b2014]",
                                        children: p.d
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                        lineNumber: 2414,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.t, true, {
                                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                lineNumber: 2412,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2403,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2402,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2401,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Callout"], {
                    kind: "insight",
                    title: "Cart abandonment is proof, not failure",
                    children: [
                        "Significant in e-commerce: consumers add items but don't complete purchase — a stage where they reconsider or re-evaluate. Organisations deploy heuristics (scarcity, limited-stock notifications) to reduce abandonment rates. It demonstrates the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "non-linear nature"
                        }, void 0, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2424,
                            columnNumber: 38
                        }, this),
                        " of modern consumer behaviour."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2421,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2420,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                    items: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Consumers ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "cannot be assumed"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2430,
                                    columnNumber: 23
                                }, void 0),
                                " to follow linear decision paths."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Leverage heuristics strategically at ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "various touchpoints"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2431,
                                    columnNumber: 50
                                }, void 0),
                                " — ratings, scarcity, discounts, visuals."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Facilitate easy movement between stages — especially ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "revisiting information and evaluation"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2432,
                                    columnNumber: 66
                                }, void 0),
                                "."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Address ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "post-purchase satisfaction"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2433,
                                    columnNumber: 21
                                }, void 0),
                                " to build loyalty."
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "Understanding consumer segments helps predict ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "which heuristics will be most effective"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                                    lineNumber: 2434,
                                    columnNumber: 59
                                }, void 0),
                                "."
                            ]
                        }, void 0, true)
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                    lineNumber: 2429,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2428,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 2360,
        columnNumber: 5
    }, this);
}
_c39 = MktgMessySection;
/* Hoisted machine sub-component (module scope — never created during render). */ function MktgTrack({ label, count, tone, badge, peak }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl p-4",
        style: {
            background: "#f2efe7",
            border: "1px solid #e3ddcf"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[.82rem] font-extrabold text-[#1f2b2b]",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2446,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full px-2.5 py-1 text-[.68rem] font-extrabold",
                        style: {
                            background: badge === "POD" ? "rgba(227,194,107,.28)" : "rgba(15,118,110,.1)",
                            color: badge === "POD" ? "#8a6420" : "#0f766e"
                        },
                        children: badge
                    }, void 0, false, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2447,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2445,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex h-14 items-end gap-1.5",
                children: [
                    Array.from({
                        length: Math.max(peak, 1)
                    }).map((_, i)=>{
                        const on = i < count;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "w-4 rounded-t-md",
                            style: {
                                background: on ? tone === "teal" ? "linear-gradient(180deg,#14b8a6,#0f766e)" : "#c8d9d4" : "#e4ebe8",
                                height: "100%",
                                originY: 1
                            },
                            animate: {
                                opacity: on ? 1 : 0.35,
                                scaleY: on ? 1 : 0.55
                            },
                            transition: {
                                duration: 0.4,
                                delay: on ? i * 0.08 : 0
                            }
                        }, i, false, {
                            fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                            lineNumber: 2456,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2 self-center font-mono-warm text-[.78rem] font-extrabold text-[#5f7472]",
                        children: [
                            count,
                            " blade",
                            count > 1 ? "s" : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                        lineNumber: 2462,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/mktg/MktgParts3.tsx",
                lineNumber: 2452,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/mktg/MktgParts3.tsx",
        lineNumber: 2444,
        columnNumber: 5
    }, this);
}
_c40 = MktgTrack;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40;
__turbopack_context__.k.register(_c, "Grad");
__turbopack_context__.k.register(_c1, "MBtn");
__turbopack_context__.k.register(_c2, "Status");
__turbopack_context__.k.register(_c3, "DarkPanel");
__turbopack_context__.k.register(_c4, "PlayerControls");
__turbopack_context__.k.register(_c5, "TupoGapMachine");
__turbopack_context__.k.register(_c6, "TupoCasePlayer");
__turbopack_context__.k.register(_c7, "MktgTupoSection");
__turbopack_context__.k.register(_c8, "SafePipeline");
__turbopack_context__.k.register(_c9, "MktgSafeSection");
__turbopack_context__.k.register(_c10, "MindFlipMachine");
__turbopack_context__.k.register(_c11, "ThreeQMachine");
__turbopack_context__.k.register(_c12, "MktgPos3qSection");
__turbopack_context__.k.register(_c13, "AccorMapMachine");
__turbopack_context__.k.register(_c14, "MktgAccorSection");
__turbopack_context__.k.register(_c15, "FrameSwitchMachine");
__turbopack_context__.k.register(_c16, "GypsyTimeline");
__turbopack_context__.k.register(_c17, "PopRemovalToggle");
__turbopack_context__.k.register(_c18, "MktgFrameSection");
__turbopack_context__.k.register(_c19, "ZoomSpectrum");
__turbopack_context__.k.register(_c20, "MktgLevelsSection");
__turbopack_context__.k.register(_c21, "RazorLadder");
__turbopack_context__.k.register(_c22, "MktgEvolutionSection");
__turbopack_context__.k.register(_c23, "ThreeCirclesMachine");
__turbopack_context__.k.register(_c24, "MktgCirclesSection");
__turbopack_context__.k.register(_c25, "OralBCase");
__turbopack_context__.k.register(_c26, "QuirkCase");
__turbopack_context__.k.register(_c27, "SavlonVolley");
__turbopack_context__.k.register(_c28, "CaseFilesMachine");
__turbopack_context__.k.register(_c29, "MktgPopPodCasesSection");
__turbopack_context__.k.register(_c30, "DesiredStateMachine");
__turbopack_context__.k.register(_c31, "EvidenceReveal");
__turbopack_context__.k.register(_c32, "MktgWhyBuySection");
__turbopack_context__.k.register(_c33, "ErasTimeline");
__turbopack_context__.k.register(_c34, "MktgErasSection");
__turbopack_context__.k.register(_c35, "FiveStagePlayer");
__turbopack_context__.k.register(_c36, "MktgStagesSection");
__turbopack_context__.k.register(_c37, "LinearVsMessyMachine");
__turbopack_context__.k.register(_c38, "InfinityLoopMachine");
__turbopack_context__.k.register(_c39, "MktgMessySection");
__turbopack_context__.k.register(_c40, "MktgTrack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_mktg_MktgParts3_tsx_fb6b2d18._.js.map