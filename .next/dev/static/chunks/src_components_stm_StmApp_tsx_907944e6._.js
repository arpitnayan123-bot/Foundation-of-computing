(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/stm/StmApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StmApp",
    ()=>StmApp,
    "StmFooter",
    ()=>StmFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/PartBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/exam-runtime.ts [app-client] (ecmascript)");
/* ============================================================
   StmApp — the complete "Statistics for Managers" revision
   companion, registered as shelf 05 of THE ATLAS.

   Every number is computed, not memorised: the measurement-
   scale ladder, the data-anatomy table, the Marada pie, Hudson's
   histogram, the crosstab flip, the mean-vs-median outlier
   machine, the Venn laboratory, Bayes' prior→posterior bar, the
   Evans tree, the empirical-rule bell. Mounted by the Atlas
   router (src/app/page.tsx) when the reader enters the subject;
   `onExitAtlas` returns the reader to the Atlas landing page.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open-text.js [app-client] (ecmascript) <export default as BookOpenText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-client] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js [app-client] (ecmascript) <export default as MousePointerClick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sigma.js [app-client] (ecmascript) <export default as Sigma>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$section$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-section-progress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$open$2d$section$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-open-section.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stm/StmParts1.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stm/StmParts2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stm/StmParts3.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stm/StmParts4.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts5$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stm/StmParts5.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts6$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stm/StmParts6.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts7$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stm/StmParts7.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stm/StmParts8.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmExamWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/stm/StmExamWindow.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/stm/questions.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
;
/* ============================================================
   Structured chapter map — the top bar is organised into five
   groups instead of a flat 16-chip strip. Each group owns a
   "Test my knowledge" pen-paper window (see questions.ts).
   ============================================================ */ const GROUPS = [
    {
        id: "displays",
        label: "Data & Displays",
        items: [
            {
                id: "lens",
                label: "What is statistics?",
                desc: "Two meanings, six business applications"
            },
            {
                id: "scales",
                label: "Scales of measurement",
                desc: "Nominal → ordinal → interval → ratio"
            },
            {
                id: "sources",
                label: "Sources, analytics & ethics",
                desc: "Hudson's loop, big data, the ASA"
            },
            {
                id: "categorical",
                label: "Categorical displays",
                desc: "Marada Inn: tables, bars, pie"
            },
            {
                id: "quantitative",
                label: "Quantitative displays",
                desc: "Histograms, dot plots, stem-and-leaf"
            },
            {
                id: "twovars",
                label: "Two variables",
                desc: "Crosstabs, Simpson's paradox, dashboards"
            }
        ]
    },
    {
        id: "measures",
        label: "Numerical Measures",
        items: [
            {
                id: "location",
                label: "Measures of location",
                desc: "Mean, median, mode, percentiles"
            },
            {
                id: "variability",
                label: "Variability & shape",
                desc: "Range, IQR, σ, z, box plots"
            },
            {
                id: "association",
                label: "Association",
                desc: "Covariance & correlation"
            }
        ]
    },
    {
        id: "probability",
        label: "Probability",
        items: [
            {
                id: "prob-basics",
                label: "Experiments & counting",
                desc: "Sample space, counting rules, priors"
            },
            {
                id: "prob-laws",
                label: "Events & the laws",
                desc: "Union, intersection, conditionals"
            },
            {
                id: "bayes",
                label: "Bayes' theorem",
                desc: "Prior → information → posterior"
            }
        ]
    },
    {
        id: "discrete",
        label: "Discrete Distributions",
        items: [
            {
                id: "discrete",
                label: "Random variables & E(x)",
                desc: "JSL's 1.20 TVs, DiCarlo's bivariate"
            },
            {
                id: "binomial",
                label: "Binomial · Poisson · Hypergeometric",
                desc: "Evans, Mercy Hospital, Neveready"
            }
        ]
    },
    {
        id: "continuous",
        label: "Continuous & Sampling",
        items: [
            {
                id: "continuous",
                label: "Uniform · Normal · Exponential",
                desc: "Slater, Pep Zone, Al's pump, HUL"
            },
            {
                id: "sampling",
                label: "Sampling & the case file",
                desc: "NICE Paper, Go Bananas, McNeil's"
            }
        ]
    }
];
const FLAT_ITEMS = GROUPS.flatMap(_c = (g)=>g.items);
_c1 = FLAT_ITEMS;
const SECTION_IDS = FLAT_ITEMS.map(_c2 = (i)=>i.id);
_c3 = SECTION_IDS;
function groupOf(id) {
    for (const g of GROUPS)if (g.items.some((i)=>i.id === id)) return g.id;
    return null;
}
/* ============================================================
   TopNav — structured chapter menu + a "Test my knowledge"
   launcher inside every chapter group. Same engine as the
   FoC/ATB/FA/EBH shelves: progress bar written via ref inside
   rAF, React state only when the active section changes.
   ============================================================ */ function TopNav({ onOpenExam, onExitAtlas }) {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [openGroup, setOpenGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mobileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogA11y"])(mobileOpen);
    const seen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$section$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionProgress"])("stm", SECTION_IDS);
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
                            className: "flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-white/70 bg-white/60 px-3 text-[.64rem] font-extrabold uppercase tracking-[.14em] text-[#6b5b95] shadow-[0_4px_16px_-8px_rgba(40,20,80,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/85 hover:text-[#5b21b6]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "Atlas"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#top",
                            className: "flex shrink-0 items-center gap-2 rounded-full border border-white/70 bg-white/60 py-1.5 pl-2 pr-3.5 shadow-[0_4px_16px_-8px_rgba(40,20,80,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-6 w-6 items-center justify-center rounded-full text-white",
                                    style: {
                                        background: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
                                        boxShadow: "0 4px 10px -3px rgba(109,40,217,.55)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmApp.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-black tracking-tight text-[#3e2c1d]",
                                    children: "STM Notes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-2 hidden flex-1 items-center gap-1 lg:flex",
                            children: GROUPS.map((group)=>{
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
                                            className: `flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[.76rem] font-semibold tracking-wide transition-all duration-200 xl:px-3.5 xl:text-[.78rem] ${isActive || open ? "bg-white/80 text-[#6d28d9] shadow-[0_4px_16px_-8px_rgba(40,20,80,.4),inset_0_1px_0_rgba(255,255,255,.9)]" : "text-[#5d4e7e] hover:bg-white/55 hover:text-[#3e2c1d] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.9)]"}`,
                                            children: [
                                                group.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[.58rem] font-extrabold opacity-45",
                                                    children: String(group.items.length).padStart(2, "0")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: `h-3 w-3 opacity-50 transition-transform duration-200 ${open ? "rotate-180" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/stm/StmApp.tsx",
                                            lineNumber: 241,
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
                                                        boxShadow: "0 24px 70px -18px rgba(30,15,60,.4), inset 0 1px 0 rgba(255,255,255,.85)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "flex items-center gap-1.5 px-3 pb-1.5 pt-2 text-[.58rem] font-extrabold uppercase tracking-[.22em] text-[#8b7fb8]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenText$3e$__["BookOpenText"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                    lineNumber: 277,
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
                                                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                    lineNumber: 279,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/stm/StmApp.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 27
                                                        }, this),
                                                        group.items.map((item, i)=>{
                                                            const isActiveItem = active === item.id;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `#${item.id}`,
                                                                onClick: ()=>setOpenGroup(null),
                                                                className: `group flex items-start gap-3 rounded-xl px-3 py-2 transition-colors duration-150 ${isActiveItem ? "bg-[#8b5cf6]/[.12]" : "hover:bg-[#3e2c1d]/[.05]"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[.58rem] font-black ${isActiveItem ? "text-white" : "border border-white/80 bg-white/70 text-[#8b7fb8]"}`,
                                                                        style: isActiveItem ? {
                                                                            background: "linear-gradient(135deg,#8b5cf6,#6d28d9)"
                                                                        } : undefined,
                                                                        children: String(i + 1).padStart(2, "0")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                        lineNumber: 294,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `block text-[.82rem] font-bold leading-tight ${isActiveItem ? "text-[#6d28d9]" : "text-[#3e2c1d]"}`,
                                                                                children: item.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                                lineNumber: 303,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "mt-0.5 block text-[.7rem] leading-snug text-[#9b8ab0]",
                                                                                children: item.desc
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                                lineNumber: 306,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                        lineNumber: 302,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    isActiveItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-auto mt-1 h-1.5 w-1.5 shrink-0 rounded-full",
                                                                        style: {
                                                                            background: "#6d28d9"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                        lineNumber: 309,
                                                                        columnNumber: 33
                                                                    }, this) : seen.has(item.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "ml-auto mt-1 h-3.5 w-3.5 shrink-0",
                                                                        style: {
                                                                            color: "#8fae5d"
                                                                        },
                                                                        "aria-label": "Chapter read"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                        lineNumber: 311,
                                                                        columnNumber: 33
                                                                    }, this) : null
                                                                ]
                                                            }, item.id, true, {
                                                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 31
                                                            }, this);
                                                        }),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 border-t border-[#e8e0f6] p-1.5",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setOpenGroup(null);
                                                                    onOpenExam(group.id);
                                                                },
                                                                className: "group/exam flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left transition-colors duration-150 hover:bg-[#3e2c1d]/[.05]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white",
                                                                        style: {
                                                                            background: "linear-gradient(135deg,#8b5cf6,#6d28d9)"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                                                            className: "h-3.5 w-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                            lineNumber: 331,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                        lineNumber: 327,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "block text-[.84rem] font-extrabold leading-tight text-[#6d28d9]",
                                                                                children: "Test my knowledge"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                                lineNumber: 334,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "mt-0.5 block text-[.68rem] leading-snug text-[#9b8ab0]",
                                                                                children: [
                                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_EXAM_BANKS"][group.id].questions.length,
                                                                                    " exam-style questions · pen-paper mode"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                                lineNumber: 337,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                        lineNumber: 333,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-auto shrink-0 text-[.58rem] font-black uppercase tracking-[.14em] text-[#8b7fb8] transition-colors group-hover/exam:text-[#6d28d9]",
                                                                        children: "open →"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                        lineNumber: 341,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/stm/StmApp.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 25
                                                }, this)
                                            }, `${group.id}-panel`, false, {
                                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                                lineNumber: 260,
                                                columnNumber: 23
                                            }, this) : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmApp.tsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, group.id, true, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 235,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "scrollbar-thin flex flex-1 items-center gap-1 overflow-x-auto py-1 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                            children: GROUPS.flatMap((g)=>g.items).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `#${item.id}`,
                                    className: `nav-link ${active === item.id ? "active" : ""}`,
                                    children: item.label
                                }, item.id, false, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 358,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 356,
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
                                    className: "flex h-9 w-9 items-center justify-center rounded-xl border border-white/70 bg-white/60 text-[#6b563d] backdrop-blur-md transition-colors hover:bg-white/85 hover:text-[#c2410c]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmApp.tsx",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setMobileOpen(true),
                                    "aria-label": "Open the chapter index",
                                    "aria-expanded": mobileOpen,
                                    className: "flex h-9 w-9 items-center justify-center rounded-xl border border-white/70 bg-white/60 text-[#5d4e7e] backdrop-blur-md transition-colors hover:bg-white/85 hover:text-[#6d28d9] lg:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "h-4.5 w-4.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmApp.tsx",
                                        lineNumber: 382,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 375,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 365,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmApp.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmApp.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[3px] w-full bg-[#3e2c1d]/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: progressRef,
                    className: "h-full",
                    style: {
                        width: "0%",
                        background: "linear-gradient(90deg,#c4b5fd,#8b5cf6,#6d28d9)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmApp.tsx",
                    lineNumber: 390,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmApp.tsx",
                lineNumber: 389,
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
                        background: "linear-gradient(165deg,#160b28 0%,#241238 55%,#311a4d 100%)"
                    },
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "Chapter index",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-14 shrink-0 items-center justify-between px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2 text-sm font-black tracking-tight text-[#f1eafd]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sigma$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sigma$3e$__["Sigma"], {
                                            className: "h-4 w-4",
                                            style: {
                                                color: "#a78bfa"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmApp.tsx",
                                            lineNumber: 416,
                                            columnNumber: 17
                                        }, this),
                                        "Chapter index",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-white/10 px-2 py-0.5 font-mono text-[.55rem] font-bold text-[#e9d7bf]",
                                            children: [
                                                seen.size,
                                                "/",
                                                SECTION_IDS.length,
                                                " read"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/stm/StmApp.tsx",
                                            lineNumber: 418,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 415,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setMobileOpen(false),
                                    "aria-label": "Close the chapter index",
                                    className: "flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#f1eafd]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4.5 w-4.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmApp.tsx",
                                        lineNumber: 428,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 422,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 414,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto px-4 pb-10 pt-2",
                            children: GROUPS.map((group, gi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            className: "mb-2 flex items-center gap-2 text-[.62rem] font-extrabold uppercase tracking-[.24em] text-[#c0aef0]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-px w-5",
                                                    style: {
                                                        background: "linear-gradient(90deg,#8b5cf6,transparent)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 21
                                                }, this),
                                                group.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-white/10 px-2 py-0.5 text-[.55rem] text-[#e4dbf7]",
                                                    children: [
                                                        group.items.filter((it)=>seen.has(it.id)).length,
                                                        "/",
                                                        group.items.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/stm/StmApp.tsx",
                                            lineNumber: 440,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-hidden rounded-2xl border border-white/10 bg-white/[.04]",
                                            children: [
                                                group.items.map((item, i)=>{
                                                    const isActiveItem = active === item.id;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `#${item.id}`,
                                                        onClick: ()=>setMobileOpen(false),
                                                        className: `flex items-center gap-3 px-4 py-3 transition-colors active:bg-white/10 ${i < group.items.length - 1 ? "border-b border-white/[.06]" : ""} ${isActiveItem ? "bg-white/[.08]" : ""}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[.6rem] font-black",
                                                                style: isActiveItem ? {
                                                                    background: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
                                                                    color: "#fdfcff"
                                                                } : {
                                                                    background: "rgba(200,180,250,.1)",
                                                                    color: "#c0aef0"
                                                                },
                                                                children: String(i + 1).padStart(2, "0")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                lineNumber: 457,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "min-w-0 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `block text-[.9rem] font-bold leading-tight ${isActiveItem ? "text-[#d6c6fa]" : "text-[#ece4fa]"}`,
                                                                        children: item.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                        lineNumber: 468,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-0.5 block text-[.7rem] leading-snug text-[#a894cf]",
                                                                        children: item.desc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                        lineNumber: 471,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                lineNumber: 467,
                                                                columnNumber: 27
                                                            }, this),
                                                            isActiveItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-1.5 w-1.5 shrink-0 rounded-full",
                                                                style: {
                                                                    background: "#a78bfa"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                lineNumber: 474,
                                                                columnNumber: 29
                                                            }, this) : seen.has(item.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "h-4 w-4 shrink-0",
                                                                style: {
                                                                    color: "#8fae5d"
                                                                },
                                                                "aria-label": "Chapter read"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                lineNumber: 476,
                                                                columnNumber: 29
                                                            }, this) : null
                                                        ]
                                                    }, item.id, true, {
                                                        fileName: "[project]/src/components/stm/StmApp.tsx",
                                                        lineNumber: 449,
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
                                                                background: "linear-gradient(135deg,#8b5cf6,#6d28d9)"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                                                lineNumber: 495,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/stm/StmApp.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[.88rem] font-extrabold text-[#d6c6fa]",
                                                            children: "Test my knowledge"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/stm/StmApp.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-auto text-[.6rem] font-black uppercase tracking-[.14em] text-[#c0aef0]",
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_EXAM_BANKS"][group.id].questions.length,
                                                                " Qs →"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/stm/StmApp.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                                    lineNumber: 483,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/stm/StmApp.tsx",
                                            lineNumber: 445,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, group.id, true, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 433,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 431,
                            columnNumber: 13
                        }, this)
                    ]
                }, "mobile-index", true, {
                    fileName: "[project]/src/components/stm/StmApp.tsx",
                    lineNumber: 400,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmApp.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stm/StmApp.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
_s(TopNav, "hymb5t2C80vanBWbivxGnmxqa+U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogA11y"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$section$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionProgress"]
    ];
});
_c4 = TopNav;
/* ============================================================
   PracticeBand — the only place on the main page where
   "Test my knowledge" is written: one card per chapter group.
   Clicking opens that group's full pen-paper window.
   ============================================================ */ function PracticeBand({ onOpenExam }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "practice",
        "aria-label": "Test my knowledge — pen-paper practice",
        className: "relative scroll-mt-20 border-y border-[#e8e0f6] bg-[#fffaf1]/70",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "Pen-paper practice"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 524,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mt-2 text-2xl font-bold md:text-3xl",
                                    children: "Test my knowledge"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 525,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 max-w-xl text-[.9rem] leading-relaxed text-muted-warm",
                                    children: [
                                        "Every chapter group opens its own pen-paper window:",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            children: "pick the scale, compute the statistic, name the distribution"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmApp.tsx",
                                            lineNumber: 528,
                                            columnNumber: 15
                                        }, this),
                                        " — work on real paper first, then check against the model answers with instant feedback."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 526,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 523,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "shrink-0 text-[.68rem] font-black uppercase tracking-[.18em] text-[#6d28d9]",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_TOTAL_QUESTIONS"],
                                " questions · ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_EXAM_GROUPS"].length,
                                " windows"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 532,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/stm/StmApp.tsx",
                    lineNumber: 522,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_EXAM_GROUPS"].map((g)=>{
                        const bank = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_EXAM_BANKS"][g];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>onOpenExam(g),
                            className: "card-warm lift group flex flex-col items-start p-5 text-left",
                            "aria-label": `Test my knowledge — ${bank.title}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md",
                                    style: {
                                        background: "linear-gradient(135deg,#8b5cf6,#6d28d9)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/stm/StmApp.tsx",
                                        lineNumber: 552,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 548,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-3 text-[.95rem] font-extrabold leading-tight text-[#3e2c1d]",
                                    children: bank.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 554,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-1 text-[.74rem] leading-snug text-muted-warm",
                                    children: bank.topics
                                }, void 0, false, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 555,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-3 text-[.64rem] font-black uppercase tracking-[.16em] text-[#6d28d9]",
                                    children: [
                                        "Test my knowledge · ",
                                        bank.questions.length,
                                        " Qs →"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 556,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, g, true, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 541,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/stm/StmApp.tsx",
                    lineNumber: 537,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/stm/StmApp.tsx",
            lineNumber: 521,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/stm/StmApp.tsx",
        lineNumber: 520,
        columnNumber: 5
    }, this);
}
_c5 = PracticeBand;
/* ============================================================
   StmFooter — adapted from the FoC/ATB/FA/EBH signature footer,
   in shelf 05's violet.
   ============================================================ */ const STM_SIG_CHIPS = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        label: `${FLAT_ITEMS.length} chapters`
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"],
        label: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_TOTAL_QUESTIONS"]} practice questions`
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        label: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STM_EXAM_GROUPS"].length} pen-paper windows`
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"],
        label: "machines you can poke"
    }
];
function StmFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "footer-stick relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "absolute inset-x-0 top-0 h-px",
                style: {
                    background: "linear-gradient(90deg, transparent, rgba(139,110,220,.45), transparent)"
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
                fileName: "[project]/src/components/stm/StmApp.tsx",
                lineNumber: 583,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "sig-glow"
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmApp.tsx",
                lineNumber: 594,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto flex max-w-3xl flex-col items-center px-4 py-8 text-center sm:py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "sig-eyebrow text-[.58rem] font-semibold uppercase text-[#a1876a]",
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
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 597,
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
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 616,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 608,
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
                                    id: "stmSigGrad",
                                    x1: "0",
                                    y1: "0",
                                    x2: "1",
                                    y2: "0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0",
                                            stopColor: "#7c3aed",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmApp.tsx",
                                            lineNumber: 623,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0.5",
                                            stopColor: "#7c3aed"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmApp.tsx",
                                            lineNumber: 624,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "#7c3aed",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/stm/StmApp.tsx",
                                            lineNumber: 625,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/stm/StmApp.tsx",
                                    lineNumber: 622,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                lineNumber: 621,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M6 12 C 62 4, 118 19, 152 11 C 186 4, 236 17, 294 10",
                                stroke: "url(#stmSigGrad)",
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
                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                lineNumber: 628,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 620,
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
                                children: "Statistics for Managers"
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                lineNumber: 648,
                                columnNumber: 11
                            }, this),
                            " — every chapter of the course, distilled into one warm, living page you can read, scrub and compute with.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 block",
                                children: "Written for the late-night revision, the last-minute panic, and the quiet joy of a number that finally makes sense."
                            }, void 0, false, {
                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                lineNumber: 650,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "mt-3 text-[.78rem] font-semibold text-[#6f5438]",
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
                        children: "Course: Statistics for Managers (MSL1070) — Dr. Deepak Srivastav · IIT Jodhpur"
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 657,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "list",
                        "aria-label": "What this project contains",
                        className: "mt-4 flex flex-wrap items-center justify-center gap-2",
                        children: STM_SIG_CHIPS.map((chip, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
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
                                        fileName: "[project]/src/components/stm/StmApp.tsx",
                                        lineNumber: 687,
                                        columnNumber: 15
                                    }, this),
                                    chip.label
                                ]
                            }, chip.label, true, {
                                fileName: "[project]/src/components/stm/StmApp.tsx",
                                lineNumber: 674,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 668,
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
                        children: "shelf 05 · the atlas — crafted with next.js · react · tailwind — mmxxvi"
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 694,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stm/StmApp.tsx",
                lineNumber: 596,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stm/StmApp.tsx",
        lineNumber: 581,
        columnNumber: 5
    }, this);
}
_c6 = StmFooter;
function StmApp({ onExitAtlas }) {
    _s1();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$open$2d$section$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenSection"])("stm");
    const [examGroup, setExamGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const openExam = (g)=>setExamGroup(g);
    return(// id="top" — the brand chip links to #top; without a real element here the
    // client-side router swallows the fragment and the page never scrolls back
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "top",
        className: "page-wrap warm-canvas stm-app",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TopNav, {
                onOpenExam: openExam,
                onExitAtlas: onExitAtlas
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmApp.tsx",
                lineNumber: 721,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pt-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "Hero",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmHero"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 724,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 723,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "PracticeBand",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PracticeBand, {
                            onOpenExam: openExam
                        }, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 727,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 726,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "Lens",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmLensSection"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 730,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 729,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "Scales",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmScalesSection"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 733,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 732,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "Sources",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmSourcesSection"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 736,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 735,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "Categorical",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmCategoricalSection"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 739,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 738,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "Quantitative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmQuantitativeSection"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 742,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 741,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "TwoVars",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmTwoVarsSection"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 745,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 744,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "Location",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmLocationSection"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 748,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 747,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "Variability",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmVariabilitySection"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 751,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 750,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "Association",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts5$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmAssociationSection"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 754,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 753,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "ProbBasics",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts5$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmProbBasicsSection"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 757,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 756,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "ProbLaws",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts5$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmProbLawsSection"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 760,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 759,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "Bayes",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts6$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmBayesSection"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 763,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 762,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "Discrete",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts6$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmDiscreteSection"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 766,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 765,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "Binomial",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts7$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmBinomialSection"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 769,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 768,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "Continuous",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmContinuousSection"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 772,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 771,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "Sampling",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmParts8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StmSamplingSection"], {}, void 0, false, {
                            fileName: "[project]/src/components/stm/StmApp.tsx",
                            lineNumber: 775,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/stm/StmApp.tsx",
                        lineNumber: 774,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/stm/StmApp.tsx",
                lineNumber: 722,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StmFooter, {}, void 0, false, {
                fileName: "[project]/src/components/stm/StmApp.tsx",
                lineNumber: 778,
                columnNumber: 7
            }, this),
            examGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$stm$2f$StmExamWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["StmExamWindow"], {
                group: examGroup,
                onClose: ()=>setExamGroup(null)
            }, void 0, false, {
                fileName: "[project]/src/components/stm/StmApp.tsx",
                lineNumber: 779,
                columnNumber: 20
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/stm/StmApp.tsx",
        lineNumber: 720,
        columnNumber: 5
    }, this));
}
_s1(StmApp, "ySVo9072jifJwgIXFiwhP4SG7VE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$open$2d$section$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenSection"]
    ];
});
_c7 = StmApp;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "FLAT_ITEMS$GROUPS.flatMap");
__turbopack_context__.k.register(_c1, "FLAT_ITEMS");
__turbopack_context__.k.register(_c2, "SECTION_IDS$FLAT_ITEMS.map");
__turbopack_context__.k.register(_c3, "SECTION_IDS");
__turbopack_context__.k.register(_c4, "TopNav");
__turbopack_context__.k.register(_c5, "PracticeBand");
__turbopack_context__.k.register(_c6, "StmFooter");
__turbopack_context__.k.register(_c7, "StmApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_stm_StmApp_tsx_907944e6._.js.map