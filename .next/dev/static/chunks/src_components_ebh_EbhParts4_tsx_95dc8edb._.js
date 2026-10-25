(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ebh/EbhParts4.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EbhEmpireSection",
    ()=>EbhEmpireSection,
    "EbhLaborSection",
    ()=>EbhLaborSection,
    "EbhSteamSection",
    ()=>EbhSteamSection,
    "EbhTextileSection",
    ()=>EbhTextileSection,
    "EbhWhyMachinesSection",
    ()=>EbhWhyMachinesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   Economic & Business History — PART 4 of 4 (shelf 04 of The
   Atlas). Module 3 — the machine age: why the machines came,
   the textile wave (shuttle → jenny → water frame), Watt's
   steam liberation and Cottonopolis, the labor movement that
   answered the factories, and the empire + mercantilism that
   fed the whole engine.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cog$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cog.js [app-client] (ecmascript) <export default as Cog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ship$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ship$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ship.js [app-client] (ecmascript) <export default as Ship>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wind.js [app-client] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ebh/EbhParts1.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function EbhWhyMachinesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "why-machines",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 3 · Lecture 10 — the demand explosion",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Why did people begin using",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-gold",
                                children: "machines"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, void 0),
                            " for production?"
                        ]
                    }, void 0, true),
                    lead: "Nobody woke up one morning and invented the factory out of curiosity. Labour had been freed, demand had exploded — and the old way of making things hit a wall made of human muscle."
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "01",
                    title: "Engine one — labour becomes available",
                    sub: "The agricultural revolution's gift"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "insight",
                    title: "From Module 3's opening",
                    children: [
                        "The Agricultural Revolution (enclosure, rotation, the seed drill) had already done its work: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "availability of labour"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 59,
                            columnNumber: 17
                        }, this),
                        ". Hands were leaving the countryside — the factories would be waiting for them."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "02",
                    title: "Engine two — demand explodes",
                    sub: "Population and global trade, both compounding"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 63,
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
                                        children: "Population rise"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 font-mono text-[1.05rem] font-black",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][800]
                                        },
                                        children: "5–6.5 million → 9–11 million"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[.8rem] leading-relaxed text-muted-warm",
                                        children: "1700 → 1801. More mouths, and more buyers."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 65,
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
                                        children: "Global trade rising"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 font-mono text-[1.05rem] font-black",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][800]
                                        },
                                        children: "£6.5M → £14.7M → £43.2M"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[.8rem] leading-relaxed text-muted-warm",
                                        children: "1700 → 1760 → 1800. The export market multiplies over six-fold."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 80,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-[#e0cb84] bg-[#fdfae9] p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cog$3e$__["Cog"], {
                                className: "h-5 w-5",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.9rem] leading-relaxed text-[#2b2014]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Textiles accounted for 70% to 90% of all manufactured exports."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    " Whatever transformed cloth-making transformed the economy."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "03",
                    title: "Engine three — the old system's ceiling",
                    sub: "The putting-out system's limits of human muscle"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "warn",
                    title: "Where putting-out broke",
                    children: [
                        "A ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "de-centralized system"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this),
                        ": time and money spent moving raw materials to rural households and collecting finished goods. And beneath it all, the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "limits of human muscle"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 101,
                            columnNumber: 77
                        }, this),
                        ". Productivity had to be increased — in the old system,",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "it took four spinners to keep up with one weaver"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "04",
                    title: "The production chain",
                    sub: "Where the machines would strike first"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-warm overflow-hidden p-4 sm:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center font-mono text-[.66rem] font-bold uppercase tracking-[.2em]",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                },
                                children: "Textile production chain — the machine map"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between",
                                children: [
                                    {
                                        t: "Raw cotton / wool",
                                        d: "the fibre"
                                    },
                                    {
                                        t: "Spinning",
                                        d: "fibre → yarn",
                                        hot: true,
                                        tag: "Jenny 1764 · Water Frame 1769"
                                    },
                                    {
                                        t: "Yarn",
                                        d: "the thread"
                                    },
                                    {
                                        t: "Weaving",
                                        d: "yarn → cloth",
                                        hot: true,
                                        tag: "Flying Shuttle 1733"
                                    },
                                    {
                                        t: "Cloth",
                                        d: "the product"
                                    }
                                ].map((s, i, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl border p-3 text-center",
                                                style: s.hot ? {
                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][600],
                                                    background: "linear-gradient(135deg,#fdf6dc,#faf0cd)",
                                                    boxShadow: "0 8px 20px -12px rgba(161,98,7,.4)"
                                                } : {
                                                    borderColor: "#e0cb84",
                                                    background: "#fffdf6"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[.88rem] font-extrabold text-[#3e2c1d]",
                                                        children: s.t
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[.7rem] text-muted-warm",
                                                        children: s.d
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, this),
                                                    s.tag ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1.5 text-[.62rem] font-black uppercase tracking-[.12em]",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                                        },
                                                        children: s.tag
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 23
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 121,
                                                columnNumber: 19
                                            }, this),
                                            i < arr.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "mx-auto h-4 w-4 shrink-0 rotate-90 sm:rotate-0",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 138,
                                                columnNumber: 21
                                            }, this) : null
                                        ]
                                    }, s.t, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhQuiz"], {
                            source: "Lecture 10",
                            q: "Put the lecture's three engines of mechanisation in order: why machines, why then?",
                            options: [
                                "Invention first, then demand, then labour",
                                "Labour freed by the agricultural revolution + demand exploding (population 5–6.5M → 9–11M; trade £6.5M → £43.2M; textiles 70–90% of exports) + the putting-out system's muscle ceiling",
                                "Government policy alone",
                                "Cheap coal replacing expensive wood"
                            ],
                            answer: 1,
                            explain: "The lecture's causal stack: the agricultural revolution freed labour; population (5–6.5M in 1700 → 9–11M by 1801) and global trade (£6.5M → £14.7M → £43.2M) exploded demand — with textiles at 70–90% of manufactured exports; and the putting-out system, decentralised and muscle-bound (four spinners per weaver), simply could not keep up. Machines answered all three pressures at once."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 146,
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
                                        children: "freed labour"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 166,
                                        columnNumber: 32
                                    }, void 0),
                                    " + ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "exploding demand"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 166,
                                        columnNumber: 54
                                    }, void 0),
                                    " (population, trade, textiles at 70–90%) + the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "putting-out ceiling"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 166,
                                        columnNumber: 124
                                    }, void 0),
                                    "."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The chain: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "raw fibre → spinning → yarn → weaving → cloth"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 167,
                                        columnNumber: 28
                                    }, void 0),
                                    " — machines struck at spinning and weaving first."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The ratio to remember: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "four spinners kept pace with one weaver"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 168,
                                        columnNumber: 40
                                    }, void 0),
                                    " — productivity had to rise."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = EbhWhyMachinesSection;
/* ============================================================
   CHAPTER 15 — TEXTILE MACHINES  (#textile-machines)
   with Machine 04 — the Thread Race
   ============================================================ */ const ERAS = [
    {
        id: "before",
        year: "Before 1733",
        t: "The old balance",
        spinners: "4 spinners per weaver",
        spindles: 4,
        status: "Equilibrium",
        statusColor: "#44621d",
        statusBg: "#eef4dd",
        note: "The traditional wheel spins one single thread of yarn at a time. Slow, manual, skilled labour — four spinners keep one weaver fed with yarn."
    },
    {
        id: "shuttle",
        year: "Flying Shuttle · 1733",
        t: "The supply crisis",
        spinners: "MORE than 4 per weaver",
        spindles: 6,
        status: "Crisis",
        statusColor: "#b3402c",
        statusBg: "#fbeae5",
        note: "John Kay's shuttle lets one weaver weave much faster, produce fabrics of any width alone — twice as much cloth. Suddenly the weaver outruns the spinners: it now takes MORE spinners to supply one weaver."
    },
    {
        id: "jenny",
        year: "Spinning Jenny · 1764",
        t: "The crisis breaks",
        spinners: "1 spinner × 8 spindles",
        spindles: 8,
        status: "Eightfold",
        statusColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][800],
        statusBg: "#fdf6dc",
        note: "James Hargreaves' Jenny rotates multiple spindles at once — yarn production rises EIGHTFOLD. The bottleneck snaps: spinning catches up with weaving, and the race goes to the machine."
    }
];
function ThreadRace() {
    _s();
    const [era, setEra] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const e = ERAS[era];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-5 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                },
                children: "Machine 04 — the thread race · spinners vs weavers"
            }, void 0, false, {
                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-2 sm:grid-cols-3",
                children: ERAS.map((ee, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setEra(i),
                        "aria-pressed": i === era,
                        className: "rounded-2xl border p-3 text-center transition-all duration-200",
                        style: i === era ? {
                            borderColor: "transparent",
                            background: "linear-gradient(135deg,#fdf6dc,#faf0cd)",
                            boxShadow: "0 10px 22px -12px rgba(161,98,7,.45)"
                        } : {
                            borderColor: "#e0cb84",
                            background: "#fffdf6"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-mono text-[.72rem] font-black",
                            style: {
                                color: i === era ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][800] : "#8a6d4f"
                            },
                            children: ee.year
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 239,
                            columnNumber: 13
                        }, this)
                    }, ee.id, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                lineNumber: 225,
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
                                    className: "text-[1.02rem] font-black",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][800]
                                    },
                                    children: e.t
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full px-3 py-1 text-[.7rem] font-black",
                                    style: {
                                        color: e.statusColor,
                                        background: e.statusBg
                                    },
                                    children: e.status
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 font-mono text-[.86rem] font-bold",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                            },
                            children: e.spinners
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex items-center gap-1.5",
                            children: [
                                Array.from({
                                    length: e.spindles
                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.5
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            delay: i * 0.05,
                                            duration: 0.25
                                        },
                                        className: "flex h-6 w-6 items-center justify-center rounded-md text-[.6rem] font-black text-white",
                                        style: {
                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_BTN_GRAD"]
                                        },
                                        children: i + 1
                                    }, i, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-2 text-[.72rem] font-bold text-muted-warm",
                                    children: e.id === "before" ? "threads spun in the time one weaver weaves" : e.id === "shuttle" ? "…and the weaver still outruns them" : "threads at once — per single spinner"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-[.85rem] leading-relaxed text-[#2b2014]",
                            children: e.note
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this)
                    ]
                }, e.id, true, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
_s(ThreadRace, "J3cbriT+/bBFZ2EQYyF1kNs/BG8=");
_c1 = ThreadRace;
function EbhTextileSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "textile-machines",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 3 · Lectures 10–11 — the first wave",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "How machines transformed",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-gold",
                                children: "textile production"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 294,
                                columnNumber: 15
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "Three machines, three inventors, three mobs. The shuttle, the jenny and the water frame doubled, then eightfold-ed, then industrialised the making of cloth — and resistance met every step."
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "01",
                    title: "Weaving — the Flying Shuttle (1730s)",
                    sub: "John Kay, 1733 — one weaver, twice the cloth"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 300,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "insight",
                    title: "The machine and its mathematics",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "John Kay (1733)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, this),
                        ": one weaver could weave much faster and produce fabrics of",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "any width alone"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this),
                        " — earlier, two workers were needed. Productivity: a single weaver produced ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "twice as much cloth"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 304,
                            columnNumber: 27
                        }, this),
                        "; ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "one weaver instead of 2 or 3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 304,
                            columnNumber: 55
                        }, this),
                        ". The side-effect: a ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "supply crisis"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 305,
                            columnNumber: 26
                        }, this),
                        " — it took ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "more spinners"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 305,
                            columnNumber: 57
                        }, this),
                        " to supply one weaver."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                        kind: "warn",
                        title: "The response — 1753",
                        children: [
                            "An ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "angry mob attacked"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 309,
                                columnNumber: 16
                            }, this),
                            " — smashing his furniture and destroying his models. The problem lay with the weavers (whose livelihoods the machine threatened). Meanwhile",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "factory owners quickly pirated his design"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this),
                            " — the “Shuttle Club” —",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "to avoid paying royalty"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, this),
                            " to John Kay. ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Kay fled to France."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 312,
                                columnNumber: 57
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 308,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 307,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "02",
                    title: "Spinning — the Spinning Jenny (1760s)",
                    sub: "James Hargreaves, 1764 — eight threads at once"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 316,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "insight",
                    title: "The machine and its mathematics",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "James Hargreaves — 1764"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this),
                        ": a single worker turned a wheel to rotate",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "multiple spindles at once"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this),
                        ". The traditional spinning wheel could spin only",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "one single thread of yarn"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, this),
                        " at a time. Productivity: an individual’s yarn production rose ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "eightfold"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 321,
                            columnNumber: 27
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 317,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                        kind: "warn",
                        title: "The response — 1768",
                        children: [
                            "Problems with the spinners: a ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "mob of local spinners broke into Hargreaves’ house in Blackburn"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 325,
                                columnNumber: 43
                            }, this),
                            " — ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "smashed his spinning jennies"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 326,
                                columnNumber: 38
                            }, this),
                            " and ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "forced him to flee the town"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 326,
                                columnNumber: 78
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 324,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreadRace, {}, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 332,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "03",
                    title: "The leap — the Water Frame (1769)",
                    sub: "Richard Arkwright: barber, wigmaker, and the birth of the factory"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 335,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "insight",
                    title: "From muscle to water",
                    children: [
                        "Spinning had relied ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "strictly on human muscle"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 337,
                            columnNumber: 31
                        }, this),
                        " — limited in strength and speed.",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Richard Arkwright — 1769"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this),
                        " (a barber and wigmaker by trade) patented the",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "water frame"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this),
                        ": ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "water-powered machinery"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 339,
                            columnNumber: 31
                        }, this),
                        ". The machines were",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "too heavy for homes"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 340,
                            columnNumber: 11
                        }, this),
                        " — sparking the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "birth of the factory system"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 340,
                            columnNumber: 53
                        }, this),
                        " — and",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "enabled mass production of cloth"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 336,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 grid gap-3 md:grid-cols-2",
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
                                        children: "Cromford Mill — 1771"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 346,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "In Derbyshire — the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "world’s first water-powered cotton spinning mill"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 348,
                                                columnNumber: 37
                                            }, this),
                                            ". Presently the centerpiece of the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "Derwent Valley Mills UNESCO World Heritage Site"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 349,
                                                columnNumber: 60
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 344,
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
                                        children: "Birkacre Mill — 1777"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-[.85rem] leading-relaxed text-muted-warm",
                                        children: [
                                            "Lancashire — ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "burnt"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 358,
                                                columnNumber: 30
                                            }, this),
                                            " in the ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "1779 machine-breaking riots"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 358,
                                                columnNumber: 50
                                            }, this),
                                            ", as",
                                            " ",
                                            "Lancashire became an epicenter of cotton production."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 357,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 343,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "04",
                    title: "The Arkwright monopoly",
                    sub: "Patents, courts, and a cascade of mills"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 365,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhPanel"], {
                        label: "Arkwright's rise and fall",
                        children: `1769  patents the water frame
1775  GRAND PATENT — second massive patent,
      covering the preparatory carding process
1785  monopoly BROKE — court invalidated
      and overturned the patents
1788  Arkwright-style water mills → 143
1800  300 of the 900 factories are massive,
      centralized "Arkwright-type" complexes
      → 300–400 workers each`
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 367,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 366,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                        kind: "why",
                        title: "The pattern to carry forward",
                        children: [
                            "Every machine in this chapter repeats one rhythm: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "productivity leaps"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 381,
                                columnNumber: 63
                            }, this),
                            " →",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "resistance from spinners & weavers"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 382,
                                columnNumber: 13
                            }, this),
                            " → ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "mass production"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 382,
                                columnNumber: 61
                            }, this),
                            " →",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "the factory system"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 383,
                                columnNumber: 13
                            }, this),
                            " → ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "working-class resistance"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 383,
                                columnNumber: 41
                            }, this),
                            ". Hold that rhythm — the next chapter is what it did to geography, and the one after is what it did to people."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 380,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 379,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhQuiz"], {
                            source: "Lectures 10–11",
                            q: "Three inventors, three escapes: what happened to Kay (1753) and Hargreaves (1768) — and why is Arkwright the exception?",
                            options: [
                                "All three fled to France",
                                "Mobs attacked Kay (smashing his models) and Hargreaves (smashing his jennies) — but Arkwright became a rich & successful businessman, his patents building a mill empire until courts broke them in 1785",
                                "None faced resistance — the machines were welcomed",
                                "Kay and Hargreaves were executed; Arkwright fled"
                            ],
                            answer: 1,
                            explain: "Kay: 1753 mob, furniture and models smashed, fled to France — while factory owners pirated the design (the 'Shuttle Club'). Hargreaves: 1768 Blackburn mob, jennies smashed, forced to flee. Arkwright played a different game — patents (1769, Grand Patent 1775), a monopoly of water-powered mills (143 by 1788; 300 of 900 factories by 1800, 300–400 workers each) — until the courts invalidated the patents in 1785."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 390,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 389,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 388,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Flying Shuttle ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "(Kay, 1733)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 408,
                                        columnNumber: 32
                                    }, void 0),
                                    ": 2× cloth, any width, one weaver — and a supply crisis in spinning."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Spinning Jenny ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "(Hargreaves, 1764)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 409,
                                        columnNumber: 32
                                    }, void 0),
                                    ": multiple spindles, ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "eightfold yarn"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 409,
                                        columnNumber: 78
                                    }, void 0),
                                    "."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Water Frame ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "(Arkwright, 1769)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 410,
                                        columnNumber: 29
                                    }, void 0),
                                    ": water power, machines too heavy for homes → ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "factory system"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 410,
                                        columnNumber: 99
                                    }, void 0),
                                    "; Cromford 1771; patents broken 1785."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 405,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
            lineNumber: 288,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
        lineNumber: 287,
        columnNumber: 5
    }, this);
}
_c2 = EbhTextileSection;
/* ============================================================
   CHAPTER 16 — STEAM & COTTONOPOLIS  (#steam-cottonopolis)
   with Machine 05 — the Cottonopolis counter
   ============================================================ */ const COTTON_YEARS = [
    {
        y: 1802,
        mills: 50,
        label: "Over 50 textile mills",
        note: "Steam has begun its work — the mill count climbs."
    },
    {
        y: 1816,
        mills: 43,
        label: "43 large-scale working mills",
        note: "McConnel & Kennedy employed over 1,000 workers in a single location."
    },
    {
        y: 1853,
        mills: 108,
        label: "108 massive cotton mills",
        note: "Cottonopolis at full roar — the town built around the factory."
    }
];
function useCountUp(target, duration = 650) {
    _s1();
    const [val, setVal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(target);
    const fromRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(target);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountUp.useEffect": ()=>{
            const from = fromRef.current;
            const start = performance.now();
            let raf = 0;
            const tick = {
                "useCountUp.useEffect.tick": (t)=>{
                    const p = Math.min(1, (t - start) / duration);
                    const eased = 1 - Math.pow(1 - p, 3);
                    setVal(Math.round(from + (target - from) * eased));
                    if (p < 1) raf = requestAnimationFrame(tick);
                    else fromRef.current = target;
                }
            }["useCountUp.useEffect.tick"];
            raf = requestAnimationFrame(tick);
            return ({
                "useCountUp.useEffect": ()=>cancelAnimationFrame(raf)
            })["useCountUp.useEffect"];
        }
    }["useCountUp.useEffect"], [
        target,
        duration
    ]);
    return val;
}
_s1(useCountUp, "COEWGgCXSiaHj2xs0q70dOYdWWk=");
function CottonopolisCounter() {
    _s2();
    const [idx, setIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const y = COTTON_YEARS[idx];
    const mills = useCountUp(y.mills);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-warm p-5 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                },
                children: "Machine 05 — the Cottonopolis counter · Manchester’s mills, year by year"
            }, void 0, false, {
                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex flex-wrap justify-center gap-2",
                children: COTTON_YEARS.map((cy, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setIdx(i),
                        "aria-pressed": i === idx,
                        className: "rounded-full border px-5 py-2 font-mono text-[.8rem] font-black transition-all duration-200",
                        style: i === idx ? {
                            borderColor: "transparent",
                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_BTN_GRAD"],
                            color: "#fff",
                            boxShadow: "0 8px 18px -8px rgba(161,98,7,.55)"
                        } : {
                            borderColor: "#e0cb84",
                            background: "#fffdf6",
                            color: "#8a6d4f"
                        },
                        children: cy.y
                    }, cy.y, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 460,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                lineNumber: 458,
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
                        duration: 0.22
                    },
                    className: "mt-5 rounded-2xl border p-5 text-center",
                    style: {
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"].border,
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"].wash
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-display text-5xl font-black",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][800]
                            },
                            children: [
                                mills,
                                y.mills === 50 ? "+" : ""
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 486,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-[.92rem] font-extrabold text-[#3e2c1d]",
                            children: y.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 490,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-2 max-w-md text-[.82rem] leading-relaxed text-muted-warm",
                            children: y.note
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 491,
                            columnNumber: 11
                        }, this)
                    ]
                }, y.y, true, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 477,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                lineNumber: 476,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid gap-2 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-[#e0cb84] bg-white p-3 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.62rem] font-black uppercase tracking-[.16em] text-[#a08a5a]",
                                children: "Population 1771"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 496,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 font-mono text-[1.05rem] font-black",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][800]
                                },
                                children: "20,000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 497,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border p-3 text-center",
                        style: {
                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][600],
                            background: "linear-gradient(135deg,#fdf6dc,#faf0cd)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[.62rem] font-black uppercase tracking-[.16em]",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                },
                                children: "Population 1851"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 500,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 font-mono text-[1.05rem] font-black",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][800]
                                },
                                children: "3,00,000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 501,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 499,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                lineNumber: 494,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
        lineNumber: 454,
        columnNumber: 5
    }, this);
}
_s2(CottonopolisCounter, "Q+YIH1SNAazIm9d3jbeKDP/loAE=", false, function() {
    return [
        useCountUp
    ];
});
_c3 = CottonopolisCounter;
function EbhSteamSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "steam-cottonopolis",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 3 · Lecture 12 — the liberation",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Steam & ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-gold",
                                children: "Cottonopolis"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 516,
                                columnNumber: 27
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "Water power had a catch written into geography: fast-flowing rivers. James Watt's rotary steam engine erased the catch — and Manchester grew from a market town into Cottonopolis."
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 512,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "01",
                    title: "The limitation — geography and nature",
                    sub: "Water wheels only turn where rivers run fast"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 522,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "warn",
                    title: "Before steam",
                    children: [
                        "Water-powered mills were ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "dependent on geography and nature"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 524,
                            columnNumber: 36
                        }, this),
                        " — they required",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "fast-flowing rivers to turn water wheels"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 525,
                            columnNumber: 11
                        }, this),
                        ". Which meant mills sat in",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "rural / mountainous river valleys"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 526,
                            columnNumber: 11
                        }, this),
                        " — ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "away from consumer markets and ports"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 526,
                            columnNumber: 54
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 523,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "02",
                    title: "Watt's rotary steam engine — 1781",
                    sub: "Heat in, motion out — anywhere"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 529,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-warm overflow-hidden p-4 sm:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between",
                                children: [
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
                                        t: "Heat energy",
                                        d: "burning fuel"
                                    },
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"],
                                        t: "Pressurized steam",
                                        d: "the working fluid"
                                    },
                                    {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cog$3e$__["Cog"],
                                        t: "Mechanical work",
                                        d: "rotation, on demand"
                                    }
                                ].map((s, i, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-1 items-center gap-3 rounded-2xl border border-[#e0cb84] bg-[#fffdf6] p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-md",
                                                        style: {
                                                            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_BTN_GRAD"]
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                            lineNumber: 541,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                        lineNumber: 540,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[.9rem] font-extrabold leading-tight text-[#3e2c1d]",
                                                                children: s.t
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[.74rem] text-muted-warm",
                                                                children: s.d
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                                lineNumber: 545,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                        lineNumber: 543,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 539,
                                                columnNumber: 19
                                            }, this),
                                            i < arr.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "mx-auto h-4 w-4 shrink-0 rotate-90 sm:rotate-0",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 549,
                                                columnNumber: 21
                                            }, this) : null
                                        ]
                                    }, s.t, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 538,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 532,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-center text-[.85rem] leading-relaxed text-muted-warm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "James Watt’s rotary steam engine — patented 1781"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 555,
                                        columnNumber: 15
                                    }, this),
                                    " — a mechanical device that converts heat energy into mechanical work by using pressurized steam.",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                        },
                                        children: "It broke the limitation."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 557,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 554,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 531,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 530,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                        kind: "insight",
                        title: "Geographical liberation",
                        children: [
                            "Factories could now be built ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "anywhere"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 563,
                                columnNumber: 42
                            }, this),
                            " — and they",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "relocated to urban centers closer to ports"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 564,
                                columnNumber: 13
                            }, this),
                            ". Around them grew",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "steam mill towns"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 565,
                                columnNumber: 13
                            }, this),
                            ": towns organized around ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "factories"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 565,
                                columnNumber: 61
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 562,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 561,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "03",
                    title: "Manchester — Cottonopolis",
                    sub: "A town that reorganised itself around the mill"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 569,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CottonopolisCounter, {}, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 571,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 570,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "04",
                    title: "The inputs — coal and cotton",
                    sub: "Why here, why then"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 574,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 md:grid-cols-3",
                    children: [
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
                            t: "Coal supply",
                            d: "Coal was available nearby — the South Lancashire coalfield"
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ship$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ship$3e$__["Ship"],
                            t: "Bridgewater Canal — 1761",
                            d: "10 miles / 16 km — carried coal to Manchester"
                        },
                        {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ship$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ship$3e$__["Ship"],
                            t: "Liverpool port",
                            d: "Cotton arriving from across the seas"
                        }
                    ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * 80,
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
                                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                            lineNumber: 584,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 583,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[.9rem] font-extrabold text-[#3e2c1d]",
                                        children: c.t
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 586,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[.8rem] leading-relaxed text-muted-warm",
                                        children: c.d
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 587,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 582,
                                columnNumber: 15
                            }, this)
                        }, c.t, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 581,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 575,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                        kind: "why",
                        title: "What steam left behind",
                        children: [
                            "Geographical liberation · steam mill towns · the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "rise of the factory system"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 594,
                                columnNumber: 62
                            }, this),
                            " · the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "rise of the corporation (joint stock company)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 595,
                                columnNumber: 17
                            }, this),
                            " — and, gathering in the streets, the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "labor movement: the Luddites, et cetera"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 596,
                                columnNumber: 26
                            }, this),
                            ". Next chapter."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 593,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 592,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhQuiz"], {
                            source: "Lecture 12",
                            q: "A mill owner in 1800 weighs two sites: a fast river in a mountain valley, or a coal-and-canal town near a port. After Watt (1781), what decides it — and what grew around the choice?",
                            options: [
                                "Rivers still win — steam was only for mines",
                                "Steam broke the geography limitation: factories could be built anywhere and relocated to urban centers closer to ports — steam mill towns organized around factories",
                                "The guilds chose the sites",
                                "Parliament assigned each mill a town"
                            ],
                            answer: 1,
                            explain: "Watt's rotary steam engine (patented 1781) converts heat into mechanical work via pressurized steam — no fast-flowing river required. Geographical liberation followed: factories left the rural valleys for urban centres near ports, and steam mill towns grew organized around factories. Manchester — fed by South Lancashire coal (via the Bridgewater Canal, 1761) and Liverpool cotton — became Cottonopolis: 50+ mills by 1802, 108 by 1853, population 20,000 → 3,00,000."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 602,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 601,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 600,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Water power was ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "captive to geography"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 620,
                                        columnNumber: 33
                                    }, void 0),
                                    " — fast rivers, far from markets."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Watt’s rotary engine ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "(patented 1781)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 621,
                                        columnNumber: 44
                                    }, void 0),
                                    ": heat → pressurized steam → mechanical work, anywhere."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Manchester — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Cottonopolis"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 622,
                                        columnNumber: 30
                                    }, void 0),
                                    ": 50+ (1802) → 43 (1816) → ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "108 mills (1853)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 622,
                                        columnNumber: 76
                                    }, void 0),
                                    "; population ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "20,000 → 3,00,000"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 622,
                                        columnNumber: 112
                                    }, void 0),
                                    "; coal + canal + port."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 618,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 617,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
            lineNumber: 511,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
        lineNumber: 510,
        columnNumber: 5
    }, this);
}
_c4 = EbhSteamSection;
/* ============================================================
   CHAPTER 17 — THE LABOR MOVEMENT  (#labor-movement)
   ============================================================ */ const LABOR_PHASE_1 = [
    {
        y: "1760s",
        t: "Unorganized, secret resistance",
        d: "The first murmurs under the factory roof"
    },
    {
        y: "1799–1800",
        t: "The Combination Acts",
        d: "Outlaw trade unions and collective bargaining"
    },
    {
        y: "1811–1816",
        t: "The Luddite protests",
        d: "Smashing automated knitting frames and power looms — 'collective bargaining by riot'"
    },
    {
        y: "1812–1813",
        t: "The state answers in blood",
        d: "Frame Breaking Act 1812 — machine-wrecking a capital crime; 1813: seventeen Luddites executed"
    },
    {
        y: "1819",
        t: "The Peterloo Massacre",
        d: "60,000 peaceful workers in Manchester; cavalry charges; 18 dead, hundreds injured"
    }
];
const LABOR_PHASE_2 = [
    {
        y: "1824",
        t: "Repeal of the Combination Act",
        d: "35 statutes over 520 years — undone; a wave of strikes follows through late 1824 and early 1825"
    },
    {
        y: "1825",
        t: "Combinations of Workmen Act",
        d: "'Statutory unions' legalized — but stripped of effective collective action: wages and hours only"
    }
];
function EbhLaborSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "labor-movement",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 3 · Lecture 13 — the answer from below",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "The ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-gold",
                                children: "labor movement"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 654,
                                columnNumber: 19
                            }, void 0),
                            " during the Industrial Revolution"
                        ]
                    }, void 0, true),
                    lead: "The factories had created a new class — and the class answered. From secret societies to a massacre to a half-freedom written into law: the working class learning to organise."
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 650,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "01",
                    title: "Why a movement at all?",
                    sub: "The factory's conditions built its own opposition"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 661,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
                    children: [
                        {
                            t: "Dangerous conditions",
                            d: "Unguarded machines, dust, injury"
                        },
                        {
                            t: "Long hours",
                            d: "12–16 hours a day"
                        },
                        {
                            t: "Child labor",
                            d: "Small hands, smaller wages"
                        },
                        {
                            t: "Secret resistance",
                            d: "Unorganized — from the 1760s"
                        }
                    ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: i * 70,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full rounded-2xl border p-4",
                                style: {
                                    borderColor: "#e8a896",
                                    background: "#fbeae5"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[.88rem] font-extrabold",
                                        style: {
                                            color: "#b3402c"
                                        },
                                        children: c.t
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 671,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[.78rem] leading-relaxed text-[#5a2a24]",
                                        children: c.d
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 672,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 670,
                                columnNumber: 15
                            }, this)
                        }, c.t, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 669,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 662,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 80,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-warm mt-4 p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[.95rem] leading-relaxed text-[#2b2014]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "The labor movement"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                    lineNumber: 680,
                                    columnNumber: 15
                                }, this),
                                " — the ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "collective organisation of the working class to further their shared political and economic interests"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                    lineNumber: 680,
                                    columnNumber: 47
                                }, this),
                                ". Its tool:",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "collective bargaining"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                    lineNumber: 682,
                                    columnNumber: 15
                                }, this),
                                " — the negotiation process between employers and a",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "labor union"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                    lineNumber: 683,
                                    columnNumber: 15
                                }, this),
                                " (representing the workers) to set ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "wages, working hours, and employment conditions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                    lineNumber: 683,
                                    columnNumber: 68
                                }, this),
                                ". Its form: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "trade unions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                    lineNumber: 684,
                                    columnNumber: 52
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 679,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 678,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 677,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "02",
                    title: "Phase 1 — secret resistance & the Luddite myth (1760s–1820s)",
                    sub: "Ned Ludd, the Combination Acts, and Peterloo"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 689,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "story",
                    title: "The folklore first",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Ned Ludd"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 691,
                            columnNumber: 11
                        }, this),
                        " — folklore about a young weaver’s apprentice who broke two knitting frames. His name became the flag for everyone who answered the machine with a hammer."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 690,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 80,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 space-y-2",
                        children: LABOR_PHASE_1.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    delay: i * 0.08,
                                    duration: 0.45,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1
                                    ]
                                },
                                className: "flex gap-3 rounded-2xl border border-[#e0cb84] bg-[#fffdf6] p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-20 shrink-0 pt-0.5 font-mono text-[.72rem] font-black",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                        },
                                        children: s.y
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 706,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[.9rem] font-extrabold leading-tight text-[#3e2c1d]",
                                                children: s.t
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 710,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-0.5 text-[.8rem] leading-relaxed text-muted-warm",
                                                children: s.d
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 711,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 709,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, s.y, true, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 698,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 696,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 695,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                        kind: "warn",
                        title: "Byron's protest, 1812",
                        children: [
                            "The British government ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "prioritized industrial property over human lives"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 719,
                                columnNumber: 36
                            }, this),
                            " — the Frame Breaking Act made machine-wrecking a capital crime, punishable by death.",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: "“Is there not blood enough upon your penal code?”"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 721,
                                columnNumber: 13
                            }, this),
                            " —",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Lord Byron"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 722,
                                columnNumber: 13
                            }, this),
                            ". In ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "1813, seventeen Luddites were executed"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 722,
                                columnNumber: 35
                            }, this),
                            " under the new law."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 718,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 717,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 80,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-warm mt-4 p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "flex items-start gap-2 text-[.92rem] leading-relaxed text-[#2b2014]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "mt-0.5 h-4 w-4 shrink-0",
                                    style: {
                                        color: "#b3402c"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                    lineNumber: 728,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "Peterloo, 1819."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                            lineNumber: 730,
                                            columnNumber: 17
                                        }, this),
                                        " A peaceful crowd of ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "60,000 workers"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                            lineNumber: 730,
                                            columnNumber: 60
                                        }, this),
                                        " gathered in Manchester — demanding ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "parliamentary reform"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                            lineNumber: 731,
                                            columnNumber: 40
                                        }, this),
                                        ". The cavalry charged the crowd: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "18 people died"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                            lineNumber: 732,
                                            columnNumber: 24
                                        }, this),
                                        " and hundreds were injured."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                    lineNumber: 729,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 727,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 726,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 725,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "03",
                    title: "Phase 2 — legalization and grand alliances (1824–1830s)",
                    sub: "Repeal, strikes, and the half-freedom of 1825"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 738,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 space-y-2",
                        children: LABOR_PHASE_2.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: 14
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
                                className: "rounded-2xl border p-4",
                                style: {
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][600],
                                    background: "linear-gradient(135deg,#fdf6dc,#faf0cd)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-baseline gap-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-[.78rem] font-black",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][800]
                                                },
                                                children: s.y
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 752,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[.95rem] font-extrabold text-[#3e2c1d]",
                                                children: s.t
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 753,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 751,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-[.84rem] leading-relaxed text-[#54430f]",
                                        children: s.d
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 755,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, s.y, true, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 742,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 740,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 739,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                        kind: "insight",
                        title: "Read the 1825 Act like a lawyer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Legalized"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 762,
                                columnNumber: 13
                            }, this),
                            ": unions may exist — as “statutory unions”.",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Permitted"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 763,
                                columnNumber: 13
                            }, this),
                            ": meeting and combining to discuss and agree upon their",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "own wages, prices, or hours of work"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 764,
                                columnNumber: 13
                            }, this),
                            ". ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "Still illegal"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 764,
                                columnNumber: 57
                            }, this),
                            ": combining to strike over ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "machinery use"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 765,
                                columnNumber: 18
                            }, this),
                            ", ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "hiring/firing practices"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 765,
                                columnNumber: 40
                            }, this),
                            ", or the",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "number of apprentices"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 766,
                                columnNumber: 13
                            }, this),
                            " a shop took on. Result: a",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: "drive toward underground and alternate methods"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 767,
                                columnNumber: 13
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 761,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 760,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhQuiz"], {
                            source: "Lecture 13",
                            q: "Sequence the state's four answers to worker organising: what came first, and what came last?",
                            options: [
                                "Peterloo → Combination Acts → Frame Breaking Act → Repeal",
                                "Combination Acts (1799–1800) → Frame Breaking Act (1812) + executions (1813) → Peterloo (1819) → Repeal (1824) and the 1825 Act",
                                "Repeal first, then the Combination Acts",
                                "The 1825 Act preceded all violence"
                            ],
                            answer: 1,
                            explain: "The arc: Combination Acts 1799 & 1800 (unions outlawed) → Frame Breaking Act 1812 (machine-wrecking = capital crime; 17 executed 1813) → Peterloo 1819 (60,000 crowd, cavalry, 18 dead) → Repeal 1824 (strike wave) → Combinations of Workmen Act 1825 (statutory unions, wages-and-hours-only). The state's first three answers were bans and blood; the last was a supervised half-freedom."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 773,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 772,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 771,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The movement = ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "collective organisation of the working class"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 791,
                                        columnNumber: 32
                                    }, void 0),
                                    " for shared political & economic interests — via ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "collective bargaining"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 791,
                                        columnNumber: 136
                                    }, void 0),
                                    " and ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "trade unions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 791,
                                        columnNumber: 169
                                    }, void 0),
                                    "."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Phase 1: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "secret societies → Combination Acts (1799/1800) → Luddites (1811–16) → Frame Breaking Act (1812) → Peterloo (1819)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 792,
                                        columnNumber: 26
                                    }, void 0),
                                    "."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Phase 2: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "Repeal 1824 → strike wave → 1825 Act"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 793,
                                        columnNumber: 26
                                    }, void 0),
                                    ": unions legal, but ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "wages & hours only"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 793,
                                        columnNumber: 89
                                    }, void 0),
                                    " — everything else still illegal."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 789,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 788,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
            lineNumber: 649,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
        lineNumber: 648,
        columnNumber: 5
    }, this);
}
_c5 = EbhLaborSection;
function EbhEmpireSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "empire",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                    eyebrow: "Module 3 · Live Session 4 — the global engine",
                    title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Growth of Britain’s empire &",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grad-gold",
                                children: "mercantilist policies"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 814,
                                columnNumber: 15
                            }, void 0)
                        ]
                    }, void 0, true),
                    lead: "The Industrial Revolution didn't happen in isolation in a single country. Its raw materials came from colonies; its goods sold back to them. The lecture closes the module by wiring Britain to the world."
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 809,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "01",
                    title: "Companies, not crowns",
                    sub: "How Britain's empire actually began"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 820,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "story",
                    title: "The 1600s — a corporate land-grab",
                    children: [
                        "Efforts to establish overseas settlements began in the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "1500s"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 822,
                            columnNumber: 66
                        }, this),
                        ". Then the",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "1600s"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 823,
                            columnNumber: 11
                        }, this),
                        ": in America — British colonies in ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "New England, Virginia, and Maryland"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 823,
                            columnNumber: 58
                        }, this),
                        ": the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Virginia Company of London"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 824,
                            columnNumber: 29
                        }, this),
                        " established ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Jamestown in 1607"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 824,
                            columnNumber: 75
                        }, this),
                        "; the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Massachusetts Bay Company"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 825,
                            columnNumber: 15
                        }, this),
                        " took New England; ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Maryland"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 825,
                            columnNumber: 66
                        }, this),
                        " was granted to",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Cecilius Calvert (Lord Baltimore)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 826,
                            columnNumber: 11
                        }, this),
                        ". In the East, the",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "East India Company began establishing trading posts in India in 1600"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 827,
                            columnNumber: 11
                        }, this),
                        " — leading, by the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "1700s"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 828,
                            columnNumber: 18
                        }, this),
                        ", to the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "1757 Battle of Plassey"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 828,
                            columnNumber: 39
                        }, this),
                        ". The kicker: early colonies were efforts of ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "particular companies"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 829,
                            columnNumber: 27
                        }, this),
                        " rather than of the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "English crown"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 829,
                            columnNumber: 74
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 821,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "02",
                    title: "Mercantilism — the empire's operating system",
                    sub: "Raw materials in, manufactured goods out, British ships between"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 832,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card-warm overflow-hidden p-4 sm:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center font-mono text-[.66rem] font-bold uppercase tracking-[.2em]",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                },
                                children: "The mercantilist loop"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 835,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 grid items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-[#e0cb84] bg-[#fffdf6] p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex items-center gap-2 text-[.95rem] font-extrabold text-[#3e2c1d]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                        className: "h-4 w-4",
                                                        style: {
                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                        lineNumber: 841,
                                                        columnNumber: 19
                                                    }, this),
                                                    " The colonies"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 840,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-2 space-y-1 text-[.82rem] leading-relaxed text-muted-warm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            "· A ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: "source of necessary raw materials"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                                lineNumber: 844,
                                                                columnNumber: 27
                                                            }, this),
                                                            " for England"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            "· Monopolies on their products — ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: "tobacco, cotton, indigo, & sugar"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                                lineNumber: 845,
                                                                columnNumber: 56
                                                            }, this),
                                                            " — in the British market"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                        lineNumber: 845,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            "· ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: "Markets"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                                lineNumber: 846,
                                                                columnNumber: 25
                                                            }, this),
                                                            " for British manufactured goods"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                        lineNumber: 846,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 843,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 839,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center gap-1 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-5 w-5 rotate-90 sm:rotate-0",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 850,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ship$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ship$3e$__["Ship"], {
                                                className: "h-4 w-4",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"].sepia
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 851,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-5 w-5 rotate-90 sm:rotate-180",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][700]
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 852,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 849,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border p-4",
                                        style: {
                                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][600],
                                            background: "linear-gradient(135deg,#fdf6dc,#faf0cd)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "flex items-center gap-2 text-[.95rem] font-extrabold",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_G"][800]
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Britain"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 855,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "mt-2 space-y-1 text-[.82rem] leading-relaxed text-[#54430f]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            "· Processes raw materials into ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: "manufactured goods"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                                lineNumber: 859,
                                                                columnNumber: 54
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                        lineNumber: 859,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            "· All colonial trade conducted by ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: "British ships"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                                lineNumber: 860,
                                                                columnNumber: 57
                                                            }, this),
                                                            " — the ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: "Navigation Act (1600s)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                                lineNumber: 860,
                                                                columnNumber: 84
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                        lineNumber: 860,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            "· ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: "Excluded other countries"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                                lineNumber: 861,
                                                                columnNumber: 25
                                                            }, this),
                                                            " from trading with its colonies — the flow was focused onto Britain"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                        lineNumber: 861,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                                lineNumber: 858,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 854,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                lineNumber: 838,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 834,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 833,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhReadStep"], {
                    n: "03",
                    title: "The Industrial Revolution, globalised",
                    sub: "No island industrialises alone"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 868,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                    kind: "insight",
                    title: "The lecture's closing frame",
                    children: [
                        "The ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "globalization of the Industrial Revolution"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 870,
                            columnNumber: 15
                        }, this),
                        ": it ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "didn’t happen in isolation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 870,
                            columnNumber: 69
                        }, this),
                        " — not in a single country. The ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "Industrial Revolution and the colonies"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 871,
                            columnNumber: 56
                        }, this),
                        ": colonies supplied ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "raw material"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 872,
                            columnNumber: 43
                        }, this),
                        " and served as",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "markets for manufactured goods"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 873,
                            columnNumber: 11
                        }, this),
                        ". Recall the demand numbers from Lecture 10 — trade climbing to £43.2 million by 1800 — and you can see the empire inside the arithmetic."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 869,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhCallout"], {
                        kind: "why",
                        title: "And so the course closes its first loop",
                        children: "Rules and players — you have now watched both move at every scale: a student’s pocket money, a zamindar’s ledger, a guild’s masterpiece, a mill owner’s patent, a Luddite’s hammer, a company’s charter. Module 4 (History of Business, 1850–1950) and Module 5 (Indian Business History, pre-1947) will pick up the players’ thread: division of labour, scientific management, the rise of large corporations — and India’s entrepreneurs between the wars."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 878,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 877,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$EbhParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EbhQuiz"], {
                            source: "Live Session 4",
                            q: "Jamestown (1607) and the East India Company's trading posts (1600) share one surprising feature, per the lecture. What is it?",
                            options: [
                                "Both were royal expeditions commanded by the crown",
                                "Both were efforts of particular companies rather than of the English crown",
                                "Both were religious missions",
                                "Both were financed by French investors"
                            ],
                            answer: 1,
                            explain: "Early colonies were corporate projects: the Virginia Company of London planted Jamestown in 1607; the Massachusetts Bay Company took New England; Maryland was granted to Lord Baltimore; the East India Company opened its Indian trading posts from 1600 (leading to Plassey, 1757). Empire began as business — the crown came later."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                            lineNumber: 890,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 889,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 888,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 60,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Takeaways"], {
                        items: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The empire began as ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "company business"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 908,
                                        columnNumber: 37
                                    }, void 0),
                                    ": Jamestown 1607, Massachusetts Bay, Maryland, EIC posts from 1600, Plassey 1757."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Mercantilism: colonies = ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "raw materials + captive markets"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 909,
                                        columnNumber: 42
                                    }, void 0),
                                    "; trade on ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "British ships"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 909,
                                        columnNumber: 91
                                    }, void 0),
                                    " (Navigation Act); rivals ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "excluded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 909,
                                        columnNumber: 137
                                    }, void 0),
                                    "."
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "The IR was ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: "global from birth"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                                        lineNumber: 910,
                                        columnNumber: 28
                                    }, void 0),
                                    " — colonies fed it raw material and bought its goods."
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                        lineNumber: 906,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhParts4.tsx",
                    lineNumber: 905,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ebh/EbhParts4.tsx",
            lineNumber: 808,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ebh/EbhParts4.tsx",
        lineNumber: 807,
        columnNumber: 5
    }, this);
}
_c6 = EbhEmpireSection;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "EbhWhyMachinesSection");
__turbopack_context__.k.register(_c1, "ThreadRace");
__turbopack_context__.k.register(_c2, "EbhTextileSection");
__turbopack_context__.k.register(_c3, "CottonopolisCounter");
__turbopack_context__.k.register(_c4, "EbhSteamSection");
__turbopack_context__.k.register(_c5, "EbhLaborSection");
__turbopack_context__.k.register(_c6, "EbhEmpireSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ebh_EbhParts4_tsx_95dc8edb._.js.map