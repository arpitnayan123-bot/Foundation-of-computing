(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ebh/EbhParts3.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EbhAgrarianSection",
    ()=>EbhAgrarianSection,
    "EbhGuildsSection",
    ()=>EbhGuildsSection,
    "EbhLifeBeforeSection",
    ()=>EbhLifeBeforeSection,
    "EbhTradeSection",
    ()=>EbhTradeSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   Economic & Business History — PART 3 of 4 (shelf 04 of The
   Atlas). Module 2 — the world before the machines: agrarian
   economies (feudal and zamindari), the guild systems that
   ruled the towns, the trade routes that stitched continents
   together — and the agricultural revolution that cracked the
   whole pre-industrial order open.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript) <export default as Boxes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$church$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Church$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/church.js [app-client] (ecmascript) <export default as Church>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hammer.js [app-client] (ecmascript) <export default as Hammer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scroll-text.js [app-client] (ecmascript) <export default as ScrollText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ship$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ship$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ship.js [app-client] (ecmascript) <export default as Ship>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sprout.js [app-client] (ecmascript) <export default as Sprout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wheat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wheat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wheat.js [app-client] (ecmascript) <export default as Wheat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ebh/EbhParts1.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ============================================================
   CHAPTER 10 — AGRARIAN ECONOMIES  (#agrarian)
   ============================================================ */ const FEUDAL_ROWS = [
    {
        rank: "King / Crown",
        owes: "Grants land (fiefs)",
        gets: "Loyalty of the realm",
        top: 8
    },
    {
        rank: "Nobles / Lords",
        owes: "Provides estate management",
        gets: "Land from the crown",
        top: 32
    },
    {
        rank: "Vassals / Knights",
        owes: "Offers military protection",
        gets: "Land & money, knights",
        top: 56
    },
    {
        rank: "Peasants / Hereditary Serfs",
        owes: "Manual cultivation",
        gets: "Protection & a strip to live from",
        top: 80
    }
];
function EbhAgrarianSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "agrarian",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 2 · Lecture 7 — pre-industrial economies",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Agrarian ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-gold",
                                children: "economies"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 55,
                                columnNumber: 24
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "Before factories, before corporations — economies where the calendar was agricultural, the family was the factory, and land was the only wealth that mattered."
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "01",
                    title: "What is an agrarian economy?",
                    sub: "Seasons controlled the economy — and society"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "insight",
                    title: "The lecture's four marks",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Seasons controlled the economy and society."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        " Life revolved around",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "agriculture and the seasons"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        " — harvest, sowing seasons, the rainfall cycle.",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Agriculture meant families"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        " — the family was the unit of production. And",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "land was the main asset"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        ": owning more land meant rich."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                        kind: "why",
                        title: "Land as the core asset",
                        children: [
                            "Land ownership was not just property — it was the primary source of",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "capital and social stratification"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            ". Land functioned as the core asset",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "determining wealth, power, and production capacity"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            ". Social stratification: a society’s categorisation of its people into groups based on socioeconomic factors — wealth, income, race, education, ethnicity, gender, occupation, social status, or derived power."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "02",
                    title: "Three questions organise the whole module",
                    sub: "Who owned · who decided · how was it organised"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhPanel"], {
                        label: "Module 2's spine — memorise these three",
                        children: `1. Who owned the land?
2. Who decided what and how much to produce?
3. How was the production, distribution and
   consumption of agricultural products organized?`
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "03",
                    title: "Answer 1 — the feudal model (Western Europe)",
                    sub: "The crown, the lords, and the bound peasants"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "story",
                    title: "The pyramid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "The Crown/Lords"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        " owned the land and provided military protection.",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "The Peasants/Serfs"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        " were bound to the land, paying rent via crop shares or manual labour. ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Serfdom"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 93,
                            columnNumber: 19
                        }, this),
                        ": a legal and economic system where a peasant is",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "bound to a plot of land owned by a lord"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        " — they could not leave, move to another town, or marry without ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "the direct permission of their lord"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 95,
                            columnNumber: 34
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 80,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-warm mt-4 p-4 sm:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center font-mono text-[.66rem] font-bold uppercase tracking-[.2em]",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                },
                                children: "The feudal pyramid of power — obligations flowing both ways"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto mt-4 max-w-xl",
                                children: FEUDAL_ROWS.map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: -14
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            delay: i * 0.1,
                                            duration: 0.45,
                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1
                                            ]
                                        },
                                        className: "mb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1 rounded-xl border p-3 sm:flex-row sm:items-center sm:justify-between",
                                            style: {
                                                borderColor: i === FEUDAL_ROWS.length - 1 ? "#cec2a4" : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"].border,
                                                background: i === FEUDAL_ROWS.length - 1 ? "#f5f1e8" : "#fffdf6",
                                                marginLeft: `${r.top * 0.18}%`,
                                                marginRight: `${r.top * 0.18}%`
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "flex items-center gap-2 text-[.88rem] font-extrabold text-[#3e2c1d]",
                                                    children: [
                                                        i === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                                            className: "h-4 w-4",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 34
                                                        }, this) : i === FEUDAL_ROWS.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wheat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wheat$3e$__["Wheat"], {
                                                            className: "h-4 w-4",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"].sepia
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 127
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                            className: "h-4 w-4",
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 190
                                                        }, this),
                                                        r.rank
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[.72rem] leading-snug text-muted-warm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            style: {
                                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                                            },
                                                            children: "gives:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        r.owes,
                                                        " · ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: "gets:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 78
                                                        }, this),
                                                        " ",
                                                        r.gets
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, this)
                                    }, r.rank, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "04",
                    title: "Answer 1 — the zamindari / colonial model",
                    sub: "The state, the intermediaries, the squeezed ryots"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "story",
                    title: "The chain",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "The State"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        " granted revenue-collection rights to intermediaries (",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Zamindars"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 137,
                            columnNumber: 81
                        }, this),
                        ").",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: " The tenant farmers"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        " bore the brunt of high fixed tax rates — leading to systemic debt cycles. Under British colonial rule the chain ran:",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "British Colonial Government"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        " [demanded tax] → ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "the Zamindars"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 140,
                            columnNumber: 63
                        }, this),
                        " — hereditary, land-owning elites [extracted variable, highly inflated rents] →",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Cultivators / Tenant Ryots"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        " [vulnerable farmers]."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "05",
                    title: "Answer 2 — who decided what to produce?",
                    sub: "Nobody asked the market"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 145,
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
                                        className: "text-[.92rem] font-extrabold",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                        },
                                        children: "The feudal model"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "· Production was heavily ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "localised and traditional"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 46
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "· The lord mandated how much labour went to his personal fields"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "· Peasants decided what to grow on their ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "subsistence plots"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 62
                                                    }, this),
                                                    " based purely on ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "immediate survival needs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 103
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.92rem] font-extrabold",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                        },
                                        children: "The zamindari / colonial model"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "· Zamindars demanded ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "heavy cash rents"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 42
                                                    }, this),
                                                    "; the British state required specific revenues"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "· Cultivators were ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "forced away from food crops"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 40
                                                    }, this),
                                                    " toward ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "high-value, risky cash crops"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 82
                                                    }, this),
                                                    " (like indigo, opium, or cotton) to pay their debts"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                        kind: "warn",
                        title: "The line to remember",
                        children: [
                            "Production was ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "not determined by a free market of consumer demand"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 169,
                                columnNumber: 28
                            }, this),
                            ". It was dictated either by the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "survival needs of the worker"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 170,
                                columnNumber: 36
                            }, this),
                            " or the",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "coercive financial demands of the ruling elite"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "06",
                    title: "Answer 3 — how was it organised?",
                    sub: "Production, distribution, consumption"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 md:grid-cols-3",
                        children: [
                            {
                                t: "Production",
                                d: "Labour-intensive, low-technology farming organised around the family unit — or forced communal labour days."
                            },
                            {
                                t: "Distribution — feudalism",
                                d: "Moving goods was highly inefficient: surplus distributed locally via mandatory tithes to the Church and physical crop deliveries to the Lord's granary."
                            },
                            {
                                t: "Distribution — zamindari",
                                d: "Extractive and global: crops sold into colonial merchant supply chains, shipped to overseas markets — often leaving the local region vulnerable to famine."
                            }
                        ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: i * 90,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-warm lift h-full p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.9rem] font-extrabold",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                            },
                                            children: c.t
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 185,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1.5 text-[.82rem] leading-relaxed text-muted-warm",
                                            children: c.d
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                    lineNumber: 184,
                                    columnNumber: 17
                                }, this)
                            }, c.t, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                        kind: "insight",
                        title: "Consumption realities — a deeply unequal split",
                        children: [
                            "The ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "vast majority"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 194,
                                columnNumber: 17
                            }, this),
                            " of the population — peasants/tenants — lived on",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "subsistence consumption"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this),
                            ". Luxury and surplus consumption were entirely",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "restricted to the tiny landlord and merchant elite"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "07",
                    title: "The impact — why this world couldn't industrialise",
                    sub: "Three locks holding the economy shut"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-3",
                    children: [
                        {
                            t: "Immobile labour",
                            d: "Workers could not leave the land — preventing the rise of a free labour market."
                        },
                        {
                            t: "Zero disposable income",
                            d: "Surplus crops went to landlords, so the peasant class could not buy external goods — stalling retail consumer markets."
                        },
                        {
                            t: "Land as wealth",
                            d: "Wealth was stored in land rather than reinvested into commercial innovation or banking systems."
                        }
                    ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * 90,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full rounded-2xl border p-5",
                                style: {
                                    borderColor: "#e8a896",
                                    background: "#fbeae5"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.9rem] font-extrabold",
                                        style: {
                                            color: "#b3402c"
                                        },
                                        children: c.t
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-[.82rem] leading-relaxed text-[#5a2a24]",
                                        children: c.d
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, this)
                        }, c.t, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhQuiz"], {
                            source: "Lecture 7",
                            q: "A colonial ryot switches from rice to indigo — a high-value, risky cash crop. Which mechanism from the lecture forced that choice?",
                            options: [
                                "A free market signal: indigo prices rose",
                                "Zamindars demanded heavy cash rents and the British state required specific revenues — debts pushed cultivators toward cash crops",
                                "The guild mandated indigo over food",
                                "The Church's tithe schedule"
                            ],
                            answer: 1,
                            explain: "Under zamindari, heavy cash rents + state revenue demands meant debts — and debts pushed cultivators away from food crops toward high-value, risky cash crops like indigo, opium or cotton. Production followed coercion, not consumer demand; and when distribution ran global while local stores thinned, famine vulnerability followed."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 218,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Seasons ran the economy; ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "land was the core asset"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 236,
                                        columnNumber: 42
                                    }, void 0),
                                    " — wealth, power and stratification all grew from it."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Feudal model: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Crown → lords → knights → serfs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 237,
                                        columnNumber: 31
                                    }, void 0),
                                    ", bound by permission, paid in crop shares. Zamindari: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "state → zamindars → ryots"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 237,
                                        columnNumber: 124
                                    }, void 0),
                                    ", paid in inflated rents and debt."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Three locks: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "immobile labour, zero disposable income, land as wealth"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 238,
                                        columnNumber: 30
                                    }, void 0),
                                    " — the pre-industrial world could not break its own chains."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 234,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 233,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = EbhAgrarianSection;
/* ============================================================
   CHAPTER 11 — GUILD SYSTEMS  (#guilds)
   with Machine 02 — the Guild Ladder
   ============================================================ */ const GUILD_RANKS = [
    {
        rank: "Apprentice",
        pay: "Paid nothing",
        rights: "Learns skills — no ownership",
        limit: "Bound to a master; the hatters' rules fixed a term of no less than seven years — and only a freeman could take an apprentice at all"
    },
    {
        rank: "Journeyman",
        pay: "Earns wages",
        rights: "A skilled worker — can work independently (with any master)",
        limit: "Still not a full guild member; the workshop belongs to someone else"
    },
    {
        rank: "Master",
        pay: "Owns the workshop",
        rights: "Can train apprentices — a full guild member",
        limit: "The gate: produce a MASTERPIECE, judged by other Masters"
    }
];
function GuildLadder() {
    _s();
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const r = GUILD_RANKS[stage];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-5 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                },
                children: "Machine 02 — the guild ladder · climb it"
            }, void 0, false, {
                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 flex items-center justify-center gap-2",
                children: GUILD_RANKS.map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setStage(i),
                                "aria-label": `Show the ${g.rank} stage`,
                                className: "flex h-11 items-center gap-2 rounded-full border px-4 text-[.78rem] font-extrabold transition-all duration-200",
                                style: i === stage ? {
                                    borderColor: "transparent",
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_BTN_GRAD"],
                                    color: "#fff",
                                    boxShadow: "0 8px 18px -8px rgba(161,98,7,.55)"
                                } : {
                                    borderColor: "#e0cb84",
                                    background: "#fffdf6",
                                    color: "#8a6d4f"
                                },
                                children: [
                                    i === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 296,
                                        columnNumber: 26
                                    }, this) : i === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 296,
                                        columnNumber: 73
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 296,
                                        columnNumber: 110
                                    }, this),
                                    g.rank
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this),
                            i < GUILD_RANKS.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: `h-4 w-4 shrink-0 ${i < stage ? "" : "opacity-40"}`,
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 300,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, g.rank, true, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                lineNumber: 282,
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
                        duration: 0.24
                    },
                    className: "mt-5 rounded-2xl border p-5",
                    style: {
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"].border,
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"].wash
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[1.05rem] font-black",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][800]
                                    },
                                    children: r.rank
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full border border-[#e0cb84] bg-white px-3 py-1 text-[.7rem] font-bold",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                    },
                                    children: [
                                        "step ",
                                        stage + 1,
                                        " of 3"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 316,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 grid gap-2 sm:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-[#e0cb84] bg-white p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.62rem] font-black uppercase tracking-[.16em] text-[#a08a5a]",
                                            children: "Pay"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.84rem] font-bold text-[#3e2c1d]",
                                            children: r.pay
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 325,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                    lineNumber: 323,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-[#e0cb84] bg-white p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.62rem] font-black uppercase tracking-[.16em] text-[#a08a5a]",
                                            children: "Rights"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 328,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.84rem] font-bold text-[#3e2c1d]",
                                            children: r.rights
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-[#e0cb84] bg-white p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.62rem] font-black uppercase tracking-[.16em] text-[#a08a5a]",
                                            children: "The catch"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.82rem] leading-snug text-[#3e2c1d]",
                                            children: r.limit
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this),
                        stage === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            className: "mt-3 text-center text-[.82rem] font-semibold leading-relaxed",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                            },
                            children: [
                                "To become a Master: produce a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Masterpiece"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                    lineNumber: 343,
                                    columnNumber: 45
                                }, this),
                                " — judged by other Masters. Quality control as a career gate."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 337,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setStage((s)=>Math.min(s + 1, 2)),
                                className: "rounded-full px-4 py-2 text-[.78rem] font-bold text-white shadow-md transition hover:scale-[1.03]",
                                style: {
                                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_BTN_GRAD"]
                                },
                                children: [
                                    "Climb to ",
                                    GUILD_RANKS[stage + 1].rank,
                                    " →"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 348,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 347,
                            columnNumber: 13
                        }, this)
                    ]
                }, stage, true, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 307,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
        lineNumber: 276,
        columnNumber: 5
    }, this);
}
_s(GuildLadder, "zwUFUxd1+sHVODiNaJU7dmqASQE=");
_c1 = GuildLadder;
function EbhGuildsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "guilds",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 2 · Lecture 8 — the city's operating system",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Guild ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-gold",
                                children: "systems"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 372,
                                columnNumber: 21
                            }, void 0),
                            " & early trade organizations"
                        ]
                    }, void 0, true),
                    lead: "For three centuries, if you wanted to weave, smith, brew or bake in a European town, you asked the guild first. It was employer, union, quality bureau, court and church all at once."
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 368,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "01",
                    title: "What is a guild?",
                    sub: "Mutual aid, protection, standards"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 378,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "insight",
                    title: "The definition",
                    children: [
                        "An association of ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "craftsmen or merchants"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 380,
                            columnNumber: 29
                        }, this),
                        " formed for",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "mutual aid and protection"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 381,
                            columnNumber: 11
                        }, this),
                        ", and ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "to maintain standards"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 381,
                            columnNumber: 49
                        }, this),
                        ". Two families:",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Merchant guilds"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, this),
                        " — the traders — and ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Craft guilds"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 382,
                            columnNumber: 54
                        }, this),
                        ": blacksmiths, weavers, potters, hatters, goldsmiths, carpenters, and more."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 379,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "02",
                    title: "History & rise",
                    sub: "From Rome's collegia to the craft explosion"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 386,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhPanel"], {
                        label: "The timeline of the guilds",
                        children: `Classical Rome    →  collegia: associations of merchants
                     & artisans. Vanish in Western Europe
                     after Rome's collapse.

1000–1150 AD      →  RISE OF MERCHANT GUILDS
                     · innovation in agriculture (food surplus:
                       three-field crop rotation, the heavy plough)
                     · revival of long-distance trade
                     · urbanization (growth of towns)
                     · protection: merchants pooled resources against
                       robbery, high transit tolls, arbitrary
                       seizures by feudal lords

1100–1300 AD      →  CRAFT GUILDS
                     · urban manufacturing & specialised crafts expand
                     · weavers, blacksmiths, carpenters, goldsmiths…

Throughout        →  guilds provided predictability
                     and a social security net`
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 388,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 387,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "03",
                    title: "Charters — permission on parchment",
                    sub: "The Weaver's Guild of London, 1155"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 411,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "story",
                    title: "Granted by King Henry II",
                    children: [
                        "Guilds were established by ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "charters"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 413,
                            columnNumber: 38
                        }, this),
                        " from the city or the ruler. The Charter of the Weaver’s Guild of London (1155), granted by ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "King Henry II"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 414,
                            columnNumber: 65
                        }, this),
                        ":",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            children: "“Know ye that I have granted to the weavers of London to have their guild in London with all the liberties and customs which they had in the time of King Henry my grandfather; and so that none shall intermeddle within the city concerning their craft, unless he belong to the guild…”"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 415,
                            columnNumber: 11
                        }, this),
                        " That guild exists to this day — as the",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Worshipful Company of Weavers"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 419,
                            columnNumber: 11
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 412,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "04",
                    title: "Structure of the guild",
                    sub: "Apprentice → journeyman → master"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 422,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GuildLadder, {}, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 424,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 423,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "05",
                    title: "Functions of the guild",
                    sub: "Economic, social, religious, political"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 427,
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
                                        className: "flex items-center gap-2 text-[.92rem] font-extrabold",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 432,
                                                columnNumber: 17
                                            }, this),
                                            " Economic"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 431,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "· ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Quality control"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 23
                                                    }, this),
                                                    " — wardens searched all hats for sale; defects went before the Mayor of London for punishment"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 435,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "· ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Training"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 23
                                                    }, this),
                                                    " — the apprenticeship system itself"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 436,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "· ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Price regulation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 23
                                                    }, this),
                                                    " & ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "production control"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 437,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "· ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Worker welfare"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 23
                                                    }, this),
                                                    " · ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "market reputation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 47
                                                    }, this),
                                                    " · ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "regulated competition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 74
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 438,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "· Even ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "daylight-only work"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 28
                                                    }, this),
                                                    " — night work hid defects from inspection"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 439,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 434,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 430,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 429,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2 text-[.92rem] font-extrabold",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$church$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Church$3e$__["Church"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 446,
                                                columnNumber: 17
                                            }, this),
                                            " Social · religious · political"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 445,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "· ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Social"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 23
                                                    }, this),
                                                    " — care for the sick and elderly; burial and funeral benefits; support for dependents. The Guild of the Tailors (Lincoln, 1328): if a brother falls into poverty, “he shall have a penny every day from the common box”"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 449,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "· ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Religious"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 23
                                                    }, this),
                                                    " — patron saints and altars: St. Joseph for carpenters, St. Crispin for shoemakers"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 450,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "· ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: "Political"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 23
                                                    }, this),
                                                    " — guilds operated their own courts, settling commercial disputes; “guild wars”: craft guilds frequently launched political revolts against the merchant guilds"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 451,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 448,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 444,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 428,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhQuiz"], {
                            source: "Lecture 8",
                            q: "A journeyman in 1250 wants to open his own hat workshop in London. Standing in his way, per the lecture, are…",
                            options: [
                                "Nothing — journeymen were free to open shops",
                                "A masterpiece to produce, judged by other Masters — plus guild rules on who may take apprentices",
                                "A royal licence costing 250 rupees",
                                "A seven-year waiting list at the Worshipful Company"
                            ],
                            answer: 1,
                            explain: "The gate to mastery was the masterpiece — judged by other Masters. The hatters' regulations show how thick the rules ran: apprenticeships of no less than seven years, and no one may take an apprentice unless he is himself a freeman of London. The guild controlled entry, quality, training and competition — all at once."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 459,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 458,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 457,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Guild = craftsmen/merchants organised for ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "mutual aid, protection, standards"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 477,
                                        columnNumber: 59
                                    }, void 0),
                                    " — merchant guilds ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "1000–1150 AD"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 477,
                                        columnNumber: 118
                                    }, void 0),
                                    ", craft guilds ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "1100–1300 AD"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 477,
                                        columnNumber: 152
                                    }, void 0),
                                    "."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The ladder: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "apprentice"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 478,
                                        columnNumber: 29
                                    }, void 0),
                                    " (unpaid, learning) → ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "journeyman"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 478,
                                        columnNumber: 68
                                    }, void 0),
                                    " (wages, any master) → ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "master"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 478,
                                        columnNumber: 108
                                    }, void 0),
                                    " (workshop, apprentices — via the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "masterpiece"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 478,
                                        columnNumber: 155
                                    }, void 0),
                                    ")."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Four function-faces: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "economic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 479,
                                        columnNumber: 38
                                    }, void 0),
                                    " (quality, prices, competition), ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "social"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 479,
                                        columnNumber: 86
                                    }, void 0),
                                    " (sickness, burial, poverty), ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "religious"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 479,
                                        columnNumber: 129
                                    }, void 0),
                                    " (patron saints), ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "political"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 479,
                                        columnNumber: 163
                                    }, void 0),
                                    " (own courts, revolts)."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 475,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 474,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
            lineNumber: 367,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
        lineNumber: 366,
        columnNumber: 5
    }, this);
}
_c2 = EbhGuildsSection;
/* ============================================================
   CHAPTER 12 — TRADE ROUTES  (#trade-routes)
   with Machine 03 — the Silk Road Speedway
   ============================================================ */ const MODES = [
    {
        id: "caravan",
        label: "Overland caravan",
        engine: "Camels / mules / horses",
        lo: 30,
        hi: 40,
        viability: "High-value luxury only — silk, gems, incense. The animals' feeding costs eat anything cheaper."
    },
    {
        id: "barge",
        label: "River barge",
        engine: "River currents / human towing",
        lo: 10,
        hi: 20,
        viability: "Bulk domestic goods — grain, stone, agricultural tax revenue. Slow, but cheap per ton (upstream is the crawl)."
    },
    {
        id: "ship",
        label: "Ocean-going ship",
        engine: "Monsoon winds / trade winds",
        lo: 100,
        hi: 150,
        viability: "International bulk & luxury — spices, textiles, timber, ceramics. The wind is free; the ocean is a highway."
    }
];
function SilkSpeed() {
    _s1();
    const [modeIdx, setModeIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [days, setDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(30);
    const m = MODES[modeIdx];
    const lo = m.lo * days;
    const hi = m.hi * days;
    const maxKm = 18000; // ship at 120 days
    const pct = Math.min(100, hi / maxKm * 100);
    const fmt = (n)=>n.toLocaleString("en-IN");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-5 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                },
                children: "Machine 03 — the Silk Road speedway · pick a mode, drag the days"
            }, void 0, false, {
                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                lineNumber: 530,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-2 sm:grid-cols-3",
                children: MODES.map((mm, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setModeIdx(i),
                        "aria-pressed": i === modeIdx,
                        className: "rounded-2xl border p-3 text-left transition-all duration-200",
                        style: i === modeIdx ? {
                            borderColor: "transparent",
                            background: "linear-gradient(135deg,#fdf6dc,#faf0cd)",
                            boxShadow: "0 10px 22px -12px rgba(161,98,7,.45)"
                        } : {
                            borderColor: "#e0cb84",
                            background: "#fffdf6"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex items-center gap-1.5 text-[.85rem] font-extrabold text-[#3e2c1d]",
                                children: [
                                    i === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ship$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ship$3e$__["Ship"], {
                                        className: "h-4 w-4",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 548,
                                        columnNumber: 26
                                    }, this) : i === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Boxes$3e$__["Boxes"], {
                                        className: "h-4 w-4",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 548,
                                        columnNumber: 97
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wheat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wheat$3e$__["Wheat"], {
                                        className: "h-4 w-4",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 548,
                                        columnNumber: 159
                                    }, this),
                                    mm.label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 547,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[.72rem] leading-snug text-muted-warm",
                                children: mm.engine
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 551,
                                columnNumber: 13
                            }, this)
                        ]
                    }, mm.id, true, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 535,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                lineNumber: 533,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-[.78rem] font-bold text-[#6f5438]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Days of travel"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 558,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][800]
                                },
                                children: [
                                    days,
                                    " days"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 559,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: 1,
                        max: 120,
                        value: days,
                        onChange: (e)=>setDays(Number(e.target.value)),
                        "aria-label": "Days of travel",
                        className: "mt-2 w-full",
                        style: {
                            accentColor: "#ca8a04"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 561,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                lineNumber: 556,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl border p-4",
                style: {
                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"].border,
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"].wash
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-mono text-[.8rem] font-bold",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][800]
                        },
                        children: [
                            fmt(lo),
                            " – ",
                            fmt(hi),
                            " km covered"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 574,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 h-3 w-full overflow-hidden rounded-full bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "h-full rounded-full",
                            style: {
                                background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_BTN_GRAD"]
                            },
                            animate: {
                                width: `${pct}%`
                            },
                            transition: {
                                type: "spring",
                                stiffness: 90,
                                damping: 20
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 578,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 577,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-[.82rem] leading-relaxed text-[#2b2014]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Economic viability:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 586,
                                columnNumber: 11
                            }, this),
                            " ",
                            m.viability
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 585,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                lineNumber: 573,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-center text-[.78rem] leading-relaxed text-muted-warm",
                children: [
                    "Average daily speeds from the lecture: caravan ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "30–40 km/day"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 590,
                        columnNumber: 56
                    }, this),
                    " · river barge",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "10–20 km/day"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 591,
                        columnNumber: 9
                    }, this),
                    " (upstream) · ocean ship ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                        children: "100–150 km/day"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 591,
                        columnNumber: 53
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                lineNumber: 589,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
        lineNumber: 529,
        columnNumber: 5
    }, this);
}
_s1(SilkSpeed, "i8B43Kc5o6xB9gmHLHWUXMe/4wM=");
_c3 = SilkSpeed;
function EbhTradeSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "trade-routes",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 2 · Live Session 3 — the long distance",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Trade routes & the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-gold",
                                children: "Commercial Revolution"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 605,
                                columnNumber: 38
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "The Silk Road was less a road than a relay of speeds — and the maths of those speeds decided what could be traded, by whom, and which cities got rich."
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 601,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "01",
                    title: "Three ways to move a bale of silk",
                    sub: "Speed decided the cargo"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 611,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-warm overflow-x-auto p-4 sm:p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "warm-table min-w-[640px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Transport mode"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 617,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Primary engine"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 618,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Average daily speed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 619,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Economic viability"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 620,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 616,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                    lineNumber: 615,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "font-bold",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][800]
                                                    },
                                                    children: "Overland caravan"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "Camels / mules / horses"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "font-mono",
                                                    children: "30–40 km / day"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "High-value luxury only (silk, gems, incense) — due to high feeding costs"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 628,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 624,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "font-bold",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][800]
                                                    },
                                                    children: "River barge"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 631,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "River currents / human towing"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 632,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "font-mono",
                                                    children: "10–20 km / day (upstream)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "Bulk domestic goods (grain, stone, agricultural tax revenue)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 634,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 630,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "font-bold",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][800]
                                                    },
                                                    children: "Ocean-going ship"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "Monsoon winds / trade winds"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 638,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "font-mono",
                                                    children: "100–150 km / day"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 639,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "International bulk & luxury (spices, textiles, timber, ceramics)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 636,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                    lineNumber: 623,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 614,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 613,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 612,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "02",
                    title: "Feel the maths",
                    sub: "Why the sea beat the camel for everything cheap"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 647,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SilkSpeed, {}, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 649,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 648,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "03",
                    title: "What the routes did to the world",
                    sub: "Power, faith, and ideas moved with the cargo"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 652,
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
                                        className: "flex items-center gap-2 text-[.92rem] font-extrabold",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 657,
                                                columnNumber: 17
                                            }, this),
                                            " Political power and conflict"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 656,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "Strategic control of key ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "mountain passes and desert oases"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 660,
                                                columnNumber: 42
                                            }, this),
                                            " — whoever held the choke points taxed the flow."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 659,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 655,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 654,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2 text-[.92rem] font-extrabold",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__["ScrollText"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 668,
                                                columnNumber: 17
                                            }, this),
                                            " Cultural and technological exchange"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 667,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Spread of faith"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 671,
                                                columnNumber: 17
                                            }, this),
                                            " — and ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "new ideas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 671,
                                                columnNumber: 46
                                            }, this),
                                            ". Goods travel with their makers’ gods, scripts and techniques attached."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 670,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 666,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 665,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 653,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "04",
                    title: "The Commercial Revolution — Europe",
                    sub: "11th century to the mid-18th: trade builds a continent"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 678,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "insight",
                    title: "Two headlines",
                    children: [
                        "A European economy develops ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "based on trade"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 680,
                            columnNumber: 39
                        }, this),
                        " — 11th century AD until the mid-18th century. ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Italy"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 681,
                            columnNumber: 29
                        }, this),
                        ": ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "1,00,000+ residents"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 681,
                            columnNumber: 43
                        }, this),
                        " in Venice, Florence, and Milan. And beneath it, a new class: the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "rising urban merchant class"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 682,
                            columnNumber: 51
                        }, this),
                        " —",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "wealth became liquid"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 683,
                            columnNumber: 11
                        }, this),
                        ", measured in ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "money and goods rather than land"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 683,
                            columnNumber: 52
                        }, this),
                        " — and the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "laws/policies"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 684,
                            columnNumber: 15
                        }, this),
                        " began to be written by that urban merchant class."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 679,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                        kind: "why",
                        title: "Connect it back",
                        children: [
                            "Remember the agrarian world’s third lock — ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "land as wealth"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 688,
                                columnNumber: 62
                            }, this),
                            "? The Commercial Revolution is where that lock starts to rust: once wealth is measured in",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "money and goods"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 690,
                                columnNumber: 13
                            }, this),
                            ", it can move, split, pool and multiply — land cannot."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 687,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 686,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhQuiz"], {
                            source: "Live Session 3",
                            q: "A merchant in Venice wants to ship 40 tonnes of ordinary grain to a domestic buyer, 600 km upriver. A rival wants to move 2 crates of gems 3,000 km overland. Using the lecture's speeds and viability logic, who has the cheaper per-kg journey?",
                            options: [
                                "The gem merchant — luxury goods travel cheapest",
                                "The grain merchant — barges (10–20 km/day) exist precisely for bulk domestic goods; the caravan's feeding costs forbid cheap cargo",
                                "Both pay the same per km",
                                "Neither — grain never travelled in the pre-industrial world"
                            ],
                            answer: 1,
                            explain: "The transport table is a cost-sorting machine: river barges at 10–20 km/day hauled bulk domestic goods — grain, stone, tax grain. Overland caravans at 30–40 km/day carried high-value luxury only, because feeding camels/mules/horses was ruinous per kg. Cargo followed the engine's economics."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 696,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 695,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 694,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Three engines: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "caravan 30–40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 714,
                                        columnNumber: 32
                                    }, void 0),
                                    " · ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "barge 10–20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 714,
                                        columnNumber: 55
                                    }, void 0),
                                    " · ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "ship 100–150 km/day"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 714,
                                        columnNumber: 76
                                    }, void 0),
                                    " — speed sorted luxury from bulk."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Routes carried more than goods: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "power"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 715,
                                        columnNumber: 49
                                    }, void 0),
                                    " (passes, oases) and ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "culture"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 715,
                                        columnNumber: 82
                                    }, void 0),
                                    " (faith, ideas)."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The Commercial Revolution made wealth ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "liquid"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 716,
                                        columnNumber: 55
                                    }, void 0),
                                    " — money and goods, not land — and merchant classes wrote the laws."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 712,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 711,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
            lineNumber: 600,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
        lineNumber: 599,
        columnNumber: 5
    }, this);
}
_c4 = EbhTradeSection;
function EbhLifeBeforeSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "life-before",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 3 · Lecture 9 — the threshold",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Life ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-gold",
                                children: "before machines"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 736,
                                columnNumber: 20
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "The Industrial Revolution arrives around the 1760s, in Great Britain. To feel what it shattered, imagine England around 1700: you want 100 shirts — and there are no factories, no power looms, no steam-powered production lines."
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 732,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "01",
                    title: "The world as it stood",
                    sub: "Agriculture the mainstay, guilds the rulebook"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 742,
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
                                        className: "text-[.92rem] font-extrabold",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                        },
                                        children: "Agriculture"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 746,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "The ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "mainstay of the population"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 748,
                                                columnNumber: 21
                                            }, this),
                                            " — most people, most fields, most hours. Hand work on the land, made viable by skill and sweat."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 747,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 745,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 744,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.92rem] font-extrabold",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                        },
                                        children: "Guilds"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 755,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "Craftsmen worked in guilds — ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "regulated professions and markets at the city level"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                lineNumber: 757,
                                                columnNumber: 46
                                            }, this),
                                            ". Your 100 shirts would be slow, manual, skilled labour — produced under guild rules, workshop by workshop."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 756,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 754,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 753,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 743,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "02",
                    title: "How did the system break?",
                    sub: "Two cracks: the agricultural revolution and the putting-out system"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 765,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhPanel"], {
                        label: "The lecture's answer, in two lines",
                        children: `How did the agriculture and guild system break,
allowing the factories to exist?

  → the AGRICULTURE REVOLUTION
  → the PUTTING-OUT SYSTEM developed`
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 767,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 766,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "03",
                    title: "The agricultural revolution",
                    sub: "Rotation, tools, and enclosure"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 776,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-3",
                    children: [
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"],
                            t: "Four-field crop rotation",
                            d: "Clover · barley · wheat · turnips — fields never exhausted, animals fed through winter, soil renewed in a cycle."
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wheat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wheat$3e$__["Wheat"],
                            t: "Innovation in tools",
                            d: "Jethro Tull's seed drill (1701) — seed sown in neat rows instead of scattered, yields up."
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
                            t: "…and then enclosure",
                            d: "The legal earthquake that redrew the countryside — next step."
                        }
                    ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * 90,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-warm lift h-full p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md",
                                        style: {
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_BTN_GRAD"]
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(c.icon, {
                                            className: "h-4.5 w-4.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 786,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 785,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[.9rem] font-extrabold text-[#3e2c1d]",
                                        children: c.t
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 788,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[.8rem] leading-relaxed text-muted-warm",
                                        children: c.d
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 789,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 784,
                                columnNumber: 15
                            }, this)
                        }, c.t, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 783,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 777,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "04",
                    title: "The enclosure movement",
                    sub: "Common land becomes private property — by Act of Parliament"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 795,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "story",
                    title: "Before and after",
                    children: [
                        "Before: the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "open-field system"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 797,
                            columnNumber: 23
                        }, this),
                        " — a portion of land categorised as",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "“common”"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 798,
                            columnNumber: 11
                        }, this),
                        ", with ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "grazing rights"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 798,
                            columnNumber: 45
                        }, this),
                        ", and life that",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "necessitated co-operation among the residents of the manor/village"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 799,
                            columnNumber: 11
                        }, this),
                        ". Then:",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Enclosure Acts through Parliament"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 800,
                            columnNumber: 11
                        }, this),
                        " — created legal property rights to land previously held in common; ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "abolished communal rights"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 801,
                            columnNumber: 38
                        }, this),
                        ";",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "consolidated small strips into massive private farms"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 802,
                            columnNumber: 11
                        }, this),
                        "; landowners built physical boundaries — ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "fences, hedges, or stone walls"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 803,
                            columnNumber: 24
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 796,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 80,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-warm mt-4 p-4 sm:p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center font-mono text-[.64rem] font-bold uppercase tracking-[.2em]",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"].sepia
                                            },
                                            children: "Before — open fields & commons"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 809,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 300 170",
                                            className: "mt-2 h-auto w-full",
                                            role: "img",
                                            "aria-label": "Open-field system: many small strips of land with a shared common area",
                                            children: [
                                                Array.from({
                                                    length: 24
                                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: 10 + i % 6 * 48,
                                                        y: 10 + Math.floor(i / 6) * 34,
                                                        width: "42",
                                                        height: "28",
                                                        rx: "3",
                                                        fill: i % 2 === 0 ? "#f3ecc9" : "#ece1ad",
                                                        stroke: "#cdbd7d",
                                                        strokeWidth: "1"
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 814,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "10",
                                                    y: "146",
                                                    width: "280",
                                                    height: "16",
                                                    rx: "4",
                                                    fill: "#dcead2",
                                                    stroke: "#9ab86b"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 826,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "150",
                                                    y: "158",
                                                    textAnchor: "middle",
                                                    fontSize: "9",
                                                    fontWeight: "700",
                                                    fill: "#44621d",
                                                    children: "THE COMMON — grazing rights, shared by all"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 827,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 812,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                    lineNumber: 808,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center font-mono text-[.64rem] font-bold uppercase tracking-[.2em]",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                            },
                                            children: "After — enclosed private farms"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 831,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 300 170",
                                            className: "mt-2 h-auto w-full",
                                            role: "img",
                                            "aria-label": "Enclosed landscape: a few large private farms separated by hedges and walls",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "10",
                                                    y: "10",
                                                    width: "170",
                                                    height: "92",
                                                    rx: "4",
                                                    fill: "#f6efc6",
                                                    stroke: "#a16207",
                                                    strokeWidth: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 835,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "95",
                                                    y: "60",
                                                    textAnchor: "middle",
                                                    fontSize: "10",
                                                    fontWeight: "800",
                                                    fill: "#854d0e",
                                                    children: "MASSIVE PRIVATE FARM"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 836,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "190",
                                                    y: "10",
                                                    width: "100",
                                                    height: "92",
                                                    rx: "4",
                                                    fill: "#f3ecc9",
                                                    stroke: "#a16207",
                                                    strokeWidth: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 837,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "240",
                                                    y: "60",
                                                    textAnchor: "middle",
                                                    fontSize: "9",
                                                    fontWeight: "700",
                                                    fill: "#854d0e",
                                                    children: "FARM II"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 838,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "10",
                                                    y: "112",
                                                    width: "130",
                                                    height: "48",
                                                    rx: "4",
                                                    fill: "#f3ecc9",
                                                    stroke: "#a16207",
                                                    strokeWidth: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 839,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "75",
                                                    y: "140",
                                                    textAnchor: "middle",
                                                    fontSize: "9",
                                                    fontWeight: "700",
                                                    fill: "#854d0e",
                                                    children: "FARM III"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 840,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "150",
                                                    y: "112",
                                                    width: "140",
                                                    height: "48",
                                                    rx: "4",
                                                    fill: "#f6efc6",
                                                    stroke: "#a16207",
                                                    strokeWidth: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 841,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "220",
                                                    y: "140",
                                                    textAnchor: "middle",
                                                    fontSize: "9",
                                                    fontWeight: "700",
                                                    fill: "#854d0e",
                                                    children: "FARM IV"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 842,
                                                    columnNumber: 19
                                                }, this),
                                                [
                                                    102,
                                                    104
                                                ].map((y, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "10",
                                                        y1: y,
                                                        x2: "290",
                                                        y2: y,
                                                        stroke: "#7c6248",
                                                        strokeWidth: "1.6",
                                                        strokeDasharray: "4 3"
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                    x: "150",
                                                    y: "98",
                                                    textAnchor: "middle",
                                                    fontSize: "8.5",
                                                    fill: "#7c6248",
                                                    children: "fences · hedges · stone walls"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                                    lineNumber: 846,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 834,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                    lineNumber: 830,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 807,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 806,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 805,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                        kind: "warn",
                        title: "Not bloodless — the Midland Revolt, 1607",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Enclosure riots."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 854,
                                columnNumber: 13
                            }, this),
                            " In the Midland Revolt (1607), thousands of peasants in",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Northamptonshire and Warwickshire"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 855,
                                columnNumber: 13
                            }, this),
                            " — calling themselves",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "“Diggers” and “Levellers”"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 856,
                                columnNumber: 13
                            }, this),
                            " — organised to",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "level enclosure fences"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 857,
                                columnNumber: 13
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 853,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 852,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
                        children: [
                            {
                                t: "Easier to manage",
                                d: "Land became easier to manage as a single economic unit"
                            },
                            {
                                t: "Greater incentive",
                                d: "For agricultural improvement — your farm, your profit"
                            },
                            {
                                t: "Higher productivity",
                                d: "More food available than ever before"
                            },
                            {
                                t: "Labour released",
                                d: "Some labour now available for non-agricultural work"
                            }
                        ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                delay: i * 70,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-warm lift h-full p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.86rem] font-extrabold",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                            },
                                            children: c.t
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 870,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-[.78rem] leading-relaxed text-muted-warm",
                                            children: c.d
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                            lineNumber: 871,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                    lineNumber: 869,
                                    columnNumber: 17
                                }, this)
                            }, c.t, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 868,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 861,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 860,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "05",
                    title: "The putting-out system",
                    sub: "Subcontracting around the guild — the first crack"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 878,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "why",
                    title: "The bottleneck",
                    children: [
                        "Labour was ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "available"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 880,
                            columnNumber: 22
                        }, this),
                        " (enclosure had seen to that). But the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "guild"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 880,
                            columnNumber: 77
                        }, this),
                        " was the bottleneck: it held a ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "monopoly on manufacturing"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 881,
                            columnNumber: 33
                        }, this),
                        ", strictly",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "limited the number of workers"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 882,
                            columnNumber: 11
                        }, this),
                        ", ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "set prices"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 882,
                            columnNumber: 49
                        }, this),
                        ", and ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "banned new technology"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 882,
                            columnNumber: 72
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 879,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                        kind: "insight",
                        title: "The workaround",
                        children: [
                            "Merchants developed a method of ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "subcontracting production"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 887,
                                columnNumber: 45
                            }, this),
                            ": the",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "merchant"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 888,
                                columnNumber: 13
                            }, this),
                            " provided distributed raw materials to workers; the",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "workers"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 889,
                                columnNumber: 13
                            }, this),
                            " completed the work in their own homes or small workshops;",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "workers were paid wages"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 890,
                                columnNumber: 13
                            }, this),
                            ". This was the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "beginning of the breaking of the guild system"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 890,
                                columnNumber: 58
                            }, this),
                            " — and the first sketch of the factory, drawn in cottages."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 886,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 885,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 80,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-center text-[.85rem] leading-relaxed text-muted-warm",
                        children: [
                            "Looming ahead, the lecture’s last word of the day: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Machines — the Spinning Jenny, the Steam Engine."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                lineNumber: 896,
                                columnNumber: 70
                            }, this),
                            " Module 3 is their story."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 895,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 894,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhQuiz"], {
                            source: "Lecture 9",
                            q: "Chain the causes: enclosure → food → factories. Which rung is the lecture's explicit link?",
                            options: [
                                "Enclosure made farming romantic, so more people farmed",
                                "Enclosure consolidated strips and raised productivity — more food available, and some labour now free for non-agricultural work",
                                "Enclosure banned guilds directly",
                                "Enclosure created the seed drill"
                            ],
                            answer: 1,
                            explain: "Enclosure's outcomes: land easier to manage as a single economic unit, greater incentive for improvement, higher agricultural productivity — more food — and some labour available for non-agricultural work. Food plus freed hands: exactly the two inputs the coming factories would consume. (The seed drill was Tull's, 1701 — a separate innovation.)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                            lineNumber: 903,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 902,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 901,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Pre-industrial Britain: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "agriculture the mainstay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 921,
                                        columnNumber: 41
                                    }, void 0),
                                    ", guilds regulating trades city by city."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Agriculture revolution: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "four-field rotation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 922,
                                        columnNumber: 41
                                    }, void 0),
                                    ", Tull’s ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "seed drill (1701)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 922,
                                        columnNumber: 82
                                    }, void 0),
                                    ", and ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "enclosure"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 922,
                                        columnNumber: 112
                                    }, void 0),
                                    " — commons into private farms, resistance from the Diggers & Levellers (1607)."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Putting-out: merchants subcontracted ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "raw materials → homes → wages"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                                        lineNumber: 923,
                                        columnNumber: 54
                                    }, void 0),
                                    " — the guild system begins to break."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                        lineNumber: 919,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts3.tsx",
                    lineNumber: 918,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ebh/EbhParts3.tsx",
            lineNumber: 731,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ebh/EbhParts3.tsx",
        lineNumber: 730,
        columnNumber: 5
    }, this);
}
_c5 = EbhLifeBeforeSection;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "EbhAgrarianSection");
__turbopack_context__.k.register(_c1, "GuildLadder");
__turbopack_context__.k.register(_c2, "EbhGuildsSection");
__turbopack_context__.k.register(_c3, "SilkSpeed");
__turbopack_context__.k.register(_c4, "EbhTradeSection");
__turbopack_context__.k.register(_c5, "EbhLifeBeforeSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ebh_EbhParts3_tsx_8e2dd20c._.js.map