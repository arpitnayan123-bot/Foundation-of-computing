(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/atb/AtbApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AtbApp",
    ()=>AtbApp,
    "AtbFooter",
    ()=>AtbFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/PartBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/exam-runtime.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open-text.js [app-client] (ecmascript) <export default as BookOpenText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hourglass.js [app-client] (ecmascript) <export default as Hourglass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-client] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js [app-client] (ecmascript) <export default as MousePointerClick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/route.js [app-client] (ecmascript) <export default as Route>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$section$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-section-progress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$open$2d$section$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/use-open-section.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/progress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atb/AtbParts1.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atb/AtbParts2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atb/AtbParts3.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atb/AtbParts4.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts5$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atb/AtbParts5.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts6$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atb/AtbParts6.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts7$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atb/AtbParts7.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atb/AtbParts8.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts9$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atb/AtbParts9.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbExamWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/atb/AtbExamWindow.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atb/questions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/atb/lectures.ts [app-client] (ecmascript)");
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
;
;
;
;
/* ============================================================
   AtbApp — the complete "Algorithmic Thinking in Business"
   revision companion, registered as shelf 02 of THE ATLAS.

   A NO-CODE course: every concept is traced by hand — tea
   recipes, ATM decisions, memory boxes — and every chapter
   carries its own in-page machines. Mounted by the Atlas
   router (src/app/page.tsx) when the reader enters the subject;
   `onExitAtlas` returns the reader to the Atlas landing page.

   The page is a LECTURE READER: the hero holds a searchable
   lecture sequence (Lecture 1, 2, 3 … sent lecture by lecture
   by the course), and the page below renders exactly the
   chosen lecture's chapters. All pen-paper practice lives
   behind the "Test my knowledge" hub so the reading surface
   stays clean.
   ============================================================ */ /* ============================================================
   Structured chapter map — the top bar is organised into six
   groups. Each group owns a "Test my knowledge" exam window
   (see questions.ts).
   ============================================================ */ const GROUPS = [
    {
        id: "intro",
        label: "Intro",
        items: [
            {
                id: "intro",
                label: "Why algorithms?",
                desc: "From making tea to running an ATM"
            },
            {
                id: "flowcharts",
                label: "Flowcharts",
                desc: "The five symbols every algorithm is drawn with"
            },
            {
                id: "atm",
                label: "Decisions",
                desc: "The ATM machine — branching in action"
            },
            {
                id: "pseudocode",
                label: "Pseudocode",
                desc: "Functions, pseudocode and real code"
            },
            {
                id: "average",
                label: "Average, step-by-step",
                desc: "Memory boxes, data types & FIRST CLASS"
            }
        ]
    },
    {
        id: "props",
        label: "Properties",
        items: [
            {
                id: "properties",
                label: "9 properties",
                desc: "What makes an algorithm a *good* algorithm"
            },
            {
                id: "algotypes",
                label: "Algorithm types",
                desc: "Divide & conquer · greedy · dynamic programming"
            }
        ]
    },
    {
        id: "linear",
        label: "Linear DS",
        items: [
            {
                id: "arrays",
                label: "Arrays",
                desc: "Indexed, contiguous, direct access"
            },
            {
                id: "linkedlists",
                label: "Linked lists",
                desc: "Lecture 7 · flexible chains of songs"
            },
            {
                id: "recap8",
                label: "LIVE recap · properties & linear DS",
                desc: "Lecture 8 · the 9 properties + arrays-vs-lists Venn"
            }
        ]
    },
    {
        id: "stackq",
        label: "Stacks & Queues",
        items: [
            {
                id: "stacks",
                label: "Stacks",
                desc: "Lecture 9 · LIFO — the undo machine"
            },
            {
                id: "queues",
                label: "Queues",
                desc: "Lecture 10 · FIFO — first come, first served"
            },
            {
                id: "qtypes",
                label: "Queue types",
                desc: "Lecture 11 · linear · circular · priority · deque"
            },
            {
                id: "recap13",
                label: "LIVE recap · stacks & queues",
                desc: "Lecture 13 · the stack-vs-queue Venn"
            }
        ]
    },
    {
        id: "trees",
        label: "Trees & Graphs",
        items: [
            {
                id: "trees",
                label: "Trees",
                desc: "Lecture 12 · hierarchy: roots, parents & leaves"
            },
            {
                id: "traversals",
                label: "Traversals",
                desc: "Lecture 12 · pre · in · post · level order"
            },
            {
                id: "graphs",
                label: "Graphs",
                desc: "Lecture 15 · G = (V, E) — relationships"
            },
            {
                id: "graphprops",
                label: "Graph properties",
                desc: "Lecture 16 · direction · weight · connectivity · cycles"
            },
            {
                id: "dfsbfs",
                label: "DFS & BFS",
                desc: "Lecture 17 · stack vs queue traversal"
            },
            {
                id: "recap18",
                label: "LIVE recap · trees & graphs",
                desc: "Lecture 18 · every tree is a graph — the nested Venn"
            }
        ]
    },
    {
        id: "hash",
        label: "Hash & Chain",
        items: [
            {
                id: "treetypes",
                label: "Tree types",
                desc: "Lecture 14 · general → binary → complete → BST → AVL → heaps"
            },
            {
                id: "hashing",
                label: "Hashing",
                desc: "Lecture 19 · mod, tables, collisions, passwords"
            },
            {
                id: "blockchain",
                label: "Blockchain",
                desc: "Lecture 20 · tamper-evident chains of blocks"
            },
            {
                id: "recap23",
                label: "LIVE recap · trees, hashing & blockchain",
                desc: "Lecture 23 · the three-circle Venn finale"
            }
        ]
    },
    {
        id: "search",
        label: "Search & Complexity",
        items: [
            {
                id: "complexity",
                label: "Complexity",
                desc: "Lecture 21 · Big O · best/avg/worst · DS costs"
            },
            {
                id: "search",
                label: "Search",
                desc: "Lecture 22 · linear · binary · jump · exponential · hash"
            }
        ]
    },
    {
        id: "algo",
        label: "Paths & Sorting",
        items: [
            {
                id: "dijkstra",
                label: "Shortest paths",
                desc: "Lecture 24 · Dijkstra · A* · the variant family"
            },
            {
                id: "sorting",
                label: "Sorting",
                desc: "Lecture 25 · bubble sort · passes · O(n²)"
            }
        ]
    }
];
const FLAT_ITEMS = GROUPS.flatMap(_c = (g)=>g.items);
_c1 = FLAT_ITEMS;
function groupOf(id) {
    for (const g of GROUPS)if (g.items.some((i)=>i.id === id)) return g.id;
    return null;
}
/* ============================================================
   The chapter components, keyed by section id — the lecture
   reader renders exactly the slice the chosen lecture owns.
   ============================================================ */ const SECTION_COMPONENTS = {
    intro: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbIntroSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 160,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    flowcharts: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbFlowchartsSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 161,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    atm: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbAtmSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 162,
        columnNumber: 8
    }, ("TURBOPACK compile-time value", void 0)),
    pseudocode: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbCodeSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 163,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    average: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbAverageSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 164,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    properties: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbPropsSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 165,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    algotypes: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbAlgoTypesSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 166,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    arrays: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbArraysSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 167,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    linkedlists: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts3$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbListSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 168,
        columnNumber: 16
    }, ("TURBOPACK compile-time value", void 0)),
    stacks: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbStacksSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 169,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    queues: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbQueuesSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 170,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    qtypes: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts4$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbQTypesSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 171,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    trees: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts5$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbTreesSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 172,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0)),
    traversals: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts5$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbTraversalsSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 173,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    graphs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts5$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbGraphsSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 174,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    dfsbfs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts5$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbDfsBfsSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 175,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    treetypes: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts6$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbTreeTypesSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 176,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    hashing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts6$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbHashingSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 177,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    blockchain: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts6$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbBlockchainSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 178,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    recap8: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts7$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbRecap8Section"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 179,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    recap13: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts7$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbRecap13Section"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 180,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    recap18: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts7$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbRecap18Section"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 181,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    recap23: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts7$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbRecap23Section"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 182,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0)),
    graphprops: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts5$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbGraphPropsSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 183,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    complexity: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbComplexitySection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 184,
        columnNumber: 15
    }, ("TURBOPACK compile-time value", void 0)),
    search: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts8$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbSearchSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 185,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    dijkstra: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts9$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbDijkstraSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 186,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    sorting: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts9$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbSortingSection"], {}, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 187,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0))
};
/* ============================================================
   useSeenDisplay — the read-checkmark data for every menu.

   Marking is per-lecture (only the rendered chapters can be
   swept — the Kindle-style furthest-read sweep must never
   sweep chapters that aren't on the page), but DISPLAY spans
   the whole shelf: whatever the reader marked in earlier
   sessions/lectures stays visible via the persisted record.
   ============================================================ */ function useSeenDisplay(lecture) {
    _s();
    const ids = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSeenDisplay.useMemo[ids]": ()=>lecture.chapters.map({
                "useSeenDisplay.useMemo[ids]": (c)=>c.id
            }["useSeenDisplay.useMemo[ids]"])
    }["useSeenDisplay.useMemo[ids]"], [
        lecture
    ]);
    const live = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$section$2d$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionProgress"])("atb", ids);
    const persisted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useSeenDisplay.useMemo[persisted]": ()=>{
            try {
                return new Set(Object.keys((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadProgress"])().atb ?? {}));
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

   PERF (kept from FocApp): the progress bar is written straight
   to the DOM through a ref inside a requestAnimationFrame, and
   React state updates only when the active section CHANGES —
   the nav never re-renders per scroll tick.

   Chapters live inside the lecture reader, so a menu click on a
   chapter of a DIFFERENT lecture first switches the lecture and
   then scrolls (goToChapter in AtbApp) — a plain anchor would
   aim at a section that isn't rendered.
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
                    // scroll-spy: only touch React state when the section changes.
                    // Sections of other lectures simply aren't in the DOM, so the
                    // loop naturally spies on the rendered lecture only.
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
    // close dropdown on outside click / Escape
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
    // lock body scroll while the mobile index is open
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
                            className: "flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-white/70 bg-white/60 px-3 text-[.64rem] font-extrabold uppercase tracking-[.14em] text-[#8a5f30] shadow-[0_4px_16px_-8px_rgba(70,42,15,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/85 hover:text-[#c2410c]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "Atlas"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                            lineNumber: 317,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#top",
                            className: "flex shrink-0 items-center gap-2 rounded-full border border-white/70 bg-white/60 py-1.5 pl-2 pr-3.5 shadow-[0_4px_16px_-8px_rgba(70,42,15,.35)] backdrop-blur-md transition-colors duration-200 hover:bg-white/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-6 w-6 items-center justify-center rounded-full text-white",
                                    style: {
                                        background: "linear-gradient(135deg,#ea580c,#c2410c)",
                                        boxShadow: "0 4px 10px -3px rgba(194,65,12,.55)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-black tracking-tight text-[#3e2c1d]",
                                    children: "ATB Notes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                            lineNumber: 329,
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
                                            className: `flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[.78rem] font-semibold tracking-wide transition-all duration-200 ${isActive || open ? "bg-white/80 text-[#c2410c] shadow-[0_4px_16px_-8px_rgba(70,42,15,.4),inset_0_1px_0_rgba(255,255,255,.9)]" : "text-[#6b563d] hover:bg-white/55 hover:text-[#3e2c1d] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.9)]"}`,
                                            children: [
                                                group.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[.58rem] font-extrabold opacity-45",
                                                    children: String(group.items.length).padStart(2, "0")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: `h-3 w-3 opacity-50 transition-transform duration-200 ${open ? "rotate-180" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                                            lineNumber: 357,
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
                                                        boxShadow: "0 24px 70px -18px rgba(50,30,10,.4), inset 0 1px 0 rgba(255,255,255,.85)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "flex items-center gap-1.5 px-3 pb-1.5 pt-2 text-[.58rem] font-extrabold uppercase tracking-[.22em] text-[#b08b5c]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenText$3e$__["BookOpenText"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                    lineNumber: 393,
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
                                                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                    lineNumber: 395,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                            lineNumber: 392,
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
                                                                className: `group flex items-start gap-3 rounded-xl px-3 py-2 transition-colors duration-150 ${isActiveItem ? "bg-[#ea580c]/[.08]" : "hover:bg-[#3e2c1d]/[.05]"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[.58rem] font-black ${isActiveItem ? "text-white" : "border border-white/80 bg-white/70 text-[#b08b5c]"}`,
                                                                        style: isActiveItem ? {
                                                                            background: "linear-gradient(135deg,#ea580c,#c2410c)"
                                                                        } : undefined,
                                                                        children: String(i + 1).padStart(2, "0")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                        lineNumber: 414,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `block text-[.82rem] font-bold leading-tight ${isActiveItem ? "text-[#c2410c]" : "text-[#3e2c1d]"}`,
                                                                                children: item.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                                lineNumber: 423,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "mt-0.5 block text-[.7rem] leading-snug text-[#a08568]",
                                                                                children: item.desc
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                                lineNumber: 426,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                        lineNumber: 422,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    isActiveItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-auto mt-1 h-1.5 w-1.5 shrink-0 rounded-full",
                                                                        style: {
                                                                            background: "#c2410c"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                        lineNumber: 429,
                                                                        columnNumber: 33
                                                                    }, this) : seen.has(item.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "ml-auto mt-1 h-3.5 w-3.5 shrink-0",
                                                                        style: {
                                                                            color: "#8fae5d"
                                                                        },
                                                                        "aria-label": "Chapter read"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                        lineNumber: 431,
                                                                        columnNumber: 33
                                                                    }, this) : null
                                                                ]
                                                            }, item.id, true, {
                                                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 31
                                                            }, this);
                                                        }),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 border-t border-[#f0e2c8] p-1.5",
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
                                                                            background: "linear-gradient(135deg,#ea580c,#c2410c)"
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                                                            className: "h-3.5 w-3.5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                            lineNumber: 451,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                        lineNumber: 447,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "block text-[.84rem] font-extrabold leading-tight text-[#c2410c]",
                                                                                children: "Test my knowledge"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                                lineNumber: 454,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "mt-0.5 block text-[.68rem] leading-snug text-[#a08568]",
                                                                                children: [
                                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATB_EXAM_BANKS"][group.id].questions.length,
                                                                                    " exam-style questions · pen-paper mode"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                                lineNumber: 457,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                        lineNumber: 453,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-auto shrink-0 text-[.58rem] font-black uppercase tracking-[.14em] text-[#b08b5c] transition-colors group-hover/exam:text-[#c2410c]",
                                                                        children: "open →"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                        lineNumber: 461,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 25
                                                }, this)
                                            }, `${group.id}-panel`, false, {
                                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                lineNumber: 376,
                                                columnNumber: 23
                                            }, this) : null
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                                            lineNumber: 374,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, group.id, true, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 351,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                            lineNumber: 346,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "scrollbar-thin flex flex-1 items-center gap-1 overflow-x-auto py-1 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                            children: GROUPS.flatMap((g)=>g.items).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `#${item.id}`,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        onJumpChapter(item.id);
                                    },
                                    className: `nav-link ${active === item.id ? "active" : ""}`,
                                    children: item.label
                                }, item.id, false, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 478,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                            lineNumber: 476,
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
                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 494,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setMobileOpen(true),
                                    "aria-label": "Open the chapter index",
                                    "aria-expanded": mobileOpen,
                                    className: "flex h-9 w-9 items-center justify-center rounded-xl border border-white/70 bg-white/60 text-[#6b563d] backdrop-blur-md transition-colors hover:bg-white/85 hover:text-[#c2410c] lg:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "h-4.5 w-4.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 503,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                            lineNumber: 493,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbApp.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[3px] w-full bg-[#3e2c1d]/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: progressRef,
                    className: "h-full",
                    style: {
                        width: "0%",
                        background: "linear-gradient(90deg,#f59e0b,#ea580c,#c2410c)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                    lineNumber: 518,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbApp.tsx",
                lineNumber: 517,
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
                        background: "linear-gradient(165deg,#241608 0%,#33200e 55%,#3e2c1d 100%)"
                    },
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "Chapter index",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-14 shrink-0 items-center justify-between px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2 text-sm font-black tracking-tight text-[#ffe9c9]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$route$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Route$3e$__["Route"], {
                                            className: "h-4 w-4",
                                            style: {
                                                color: "#f59e0b"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                                            lineNumber: 544,
                                            columnNumber: 17
                                        }, this),
                                        "Chapter index",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-white/10 px-2 py-0.5 font-mono text-[.55rem] font-bold text-[#e9d7bf]",
                                            children: [
                                                seen.size,
                                                "/",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATB_ALL_CHAPTER_IDS"].length,
                                                " read"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                                            lineNumber: 546,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 543,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setMobileOpen(false),
                                    "aria-label": "Close the chapter index",
                                    className: "flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#ffe9c9]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4.5 w-4.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                        lineNumber: 556,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 550,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                            lineNumber: 542,
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
                                            className: "mb-2 flex items-center gap-2 text-[.62rem] font-extrabold uppercase tracking-[.24em] text-[#c99a63]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-px w-5",
                                                    style: {
                                                        background: "linear-gradient(90deg,#ea580c,transparent)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 21
                                                }, this),
                                                group.label,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full bg-white/10 px-2 py-0.5 text-[.55rem] text-[#e9d7bf]",
                                                    children: [
                                                        group.items.filter((it)=>seen.has(it.id)).length,
                                                        "/",
                                                        group.items.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                    lineNumber: 571,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                                            lineNumber: 568,
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
                                                                    background: "linear-gradient(135deg,#ea580c,#c2410c)",
                                                                    color: "#fff7ec"
                                                                } : {
                                                                    background: "rgba(255,220,170,.1)",
                                                                    color: "#c99a63"
                                                                },
                                                                children: String(i + 1).padStart(2, "0")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                lineNumber: 589,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "min-w-0 flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `block text-[.9rem] font-bold leading-tight ${isActiveItem ? "text-[#f5c889]" : "text-[#f0e2c8]"}`,
                                                                        children: item.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                        lineNumber: 600,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "mt-0.5 block text-[.7rem] leading-snug text-[#b99a75]",
                                                                        children: item.desc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                        lineNumber: 603,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                lineNumber: 599,
                                                                columnNumber: 27
                                                            }, this),
                                                            isActiveItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-1.5 w-1.5 shrink-0 rounded-full",
                                                                style: {
                                                                    background: "#f59e0b"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                lineNumber: 606,
                                                                columnNumber: 29
                                                            }, this) : seen.has(item.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "h-4 w-4 shrink-0",
                                                                style: {
                                                                    color: "#8fae5d"
                                                                },
                                                                "aria-label": "Chapter read"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                lineNumber: 608,
                                                                columnNumber: 29
                                                            }, this) : null
                                                        ]
                                                    }, item.id, true, {
                                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                        lineNumber: 577,
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
                                                                background: "linear-gradient(135deg,#ea580c,#c2410c)"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                                                className: "h-3.5 w-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                                lineNumber: 627,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[.88rem] font-extrabold text-[#f5c889]",
                                                            children: "Test my knowledge"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                            lineNumber: 629,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-auto text-[.6rem] font-black uppercase tracking-[.14em] text-[#c99a63]",
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATB_EXAM_BANKS"][group.id].questions.length,
                                                                " Qs →"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                            lineNumber: 630,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                                            lineNumber: 573,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, group.id, true, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 561,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                            lineNumber: 559,
                            columnNumber: 13
                        }, this)
                    ]
                }, "mobile-index", true, {
                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                    lineNumber: 528,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbApp.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 313,
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
   PracticeHub — the ONE home of pen-paper practice. The hero's
   "Test my knowledge" button opens this dark studio: one card
   per chapter group, each launching that group's full exam
   window. Kept off the reading surface so the main page stays
   a clean lecture-by-lecture read.
   ============================================================ */ function PracticeHub({ open, onClose, onOpenExam }) {
    _s2();
    const hubRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$runtime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogA11y"])(open);
    // Escape closes + body scroll locks while the hub is up
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
                background: "rgba(30,18,6,.78)",
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
                    background: "linear-gradient(165deg,#241608 0%,#33200e 55%,#3e2c1d 100%)",
                    boxShadow: "0 48px 140px -32px rgba(0,0,0,.65)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-4 px-6 pt-6 sm:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "flex items-center gap-2 text-[.6rem] font-extrabold uppercase tracking-[.24em] text-[#c99a63]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-px w-5",
                                                style: {
                                                    background: "linear-gradient(90deg,#ea580c,transparent)"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                lineNumber: 712,
                                                columnNumber: 19
                                            }, this),
                                            "Pen-paper practice"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                        lineNumber: 711,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-1.5 text-2xl font-black tracking-tight text-[#ffe9c9] sm:text-3xl",
                                        children: "Test my knowledge"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                        lineNumber: 715,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 max-w-2xl text-[.88rem] leading-relaxed text-[#d9c3a4]",
                                        children: "Every chapter group opens its own exam window: write-the-output, trace-the-pseudocode, definitions and concept checks — write on real paper first, then mark yourself against the model answers with instant checking."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                        lineNumber: 716,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[.64rem] font-black uppercase tracking-[.18em] text-[#a1876a]",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATB_TOTAL_QUESTIONS"],
                                            " questions · ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATB_EXAM_GROUPS"].length,
                                            " windows"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                        lineNumber: 721,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                lineNumber: 710,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                "aria-label": "Close the practice hub",
                                className: "mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#ffe9c9] transition-colors hover:bg-white/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-4.5 w-4.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 731,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                lineNumber: 725,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                        lineNumber: 709,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 px-6 pb-7 pt-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATB_EXAM_GROUPS"].map((g)=>{
                            const bank = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATB_EXAM_BANKS"][g];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onOpenExam(g),
                                className: "group flex flex-col items-start rounded-2xl border border-white/10 bg-white/[.05] p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[.09]",
                                "aria-label": `Open the exam window — ${bank.title}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md",
                                        style: {
                                            background: "linear-gradient(135deg,#ea580c,#c2410c)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                                            lineNumber: 751,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                        lineNumber: 747,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-3 text-[.98rem] font-extrabold leading-tight text-[#f5c889]",
                                        children: bank.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                        lineNumber: 753,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-1 text-[.76rem] leading-snug text-[#cbb392]",
                                        children: bank.topics
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                        lineNumber: 754,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-3 text-[.66rem] font-black uppercase tracking-[.16em] text-[#c99a63] transition-colors group-hover:text-[#f5c889]",
                                        children: [
                                            "Test my knowledge · ",
                                            bank.questions.length,
                                            " Qs →"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                        lineNumber: 755,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, g, true, {
                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                lineNumber: 740,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                        lineNumber: 736,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbApp.tsx",
                lineNumber: 701,
                columnNumber: 11
            }, this)
        }, "practice-hub", false, {
            fileName: "[project]/src/components/atb/AtbApp.tsx",
            lineNumber: 680,
            columnNumber: 9
        }, this) : null
    }, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 678,
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
   LecturePager — prev/next lecture cards closing every lecture,
   so the sequence reads like a book even without the picker.
   ============================================================ */ function LecturePager({ current, onJump }) {
    const idx = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATB_LECTURES"].findIndex((l)=>l.id === current.id);
    const prev = idx > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATB_LECTURES"][idx - 1] : null;
    const next = idx < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATB_LECTURES"].length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATB_LECTURES"][idx + 1] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Lecture sequence",
        className: "mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3 sm:grid-cols-2",
            children: [
                prev ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onJump(prev.id),
                    className: "card-warm lift group flex items-center gap-3 p-4 text-left",
                    "aria-label": `Previous: ${prev.code} — ${prev.title}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-4 w-4 shrink-0 text-[#c2410c] transition-transform duration-200 group-hover:-translate-x-1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                            lineNumber: 788,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-[.6rem] font-extrabold uppercase tracking-[.18em] text-[#a16207]",
                                    children: [
                                        "Previous · ",
                                        prev.code
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 790,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-0.5 block truncate text-[.92rem] font-extrabold text-[#3e2c1d]",
                                    children: prev.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 793,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                            lineNumber: 789,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                    lineNumber: 782,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": true,
                    className: "hidden sm:block"
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                    lineNumber: 797,
                    columnNumber: 11
                }, this),
                next ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onJump(next.id),
                    className: "card-warm lift group flex items-center justify-end gap-3 p-4 text-right",
                    "aria-label": `Next: ${next.code} — ${next.title}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-[.6rem] font-extrabold uppercase tracking-[.18em] text-[#a16207]",
                                    children: [
                                        "Next · ",
                                        next.code
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 807,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-0.5 block truncate text-[.92rem] font-extrabold text-[#3e2c1d]",
                                    children: next.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 810,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                            lineNumber: 806,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "h-4 w-4 shrink-0 text-[#c2410c] transition-transform duration-200 group-hover:translate-x-1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                            lineNumber: 812,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                    lineNumber: 800,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "rounded-2xl border border-dashed border-[#e5c79d] p-4 text-center text-[.78rem] font-bold leading-snug text-[#a08568]",
                    children: "End of the sequence — the next lecture lands here the moment the course sends it."
                }, void 0, false, {
                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                    lineNumber: 815,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/atb/AtbApp.tsx",
            lineNumber: 780,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 779,
        columnNumber: 5
    }, this);
}
_c4 = LecturePager;
/* ============================================================
   AtbFooter — adapted from the FoC signature footer: same
   hairline, glow, name-stroke and colophon vibe, retold for
   shelf 02 of The Atlas.
   ============================================================ */ const ATB_SIG_CHIPS = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        label: `${FLAT_ITEMS.length} chapters`
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"],
        label: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATB_TOTAL_QUESTIONS"]} practice questions`
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        label: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATB_EXAM_GROUPS"].length} exam windows`
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"],
        label: "machines you can poke"
    }
];
function AtbFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "footer-stick relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "absolute inset-x-0 top-0 h-px",
                style: {
                    background: "linear-gradient(90deg, transparent, rgba(150,105,55,.32), transparent)"
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
                fileName: "[project]/src/components/atb/AtbApp.tsx",
                lineNumber: 840,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "sig-glow"
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbApp.tsx",
                lineNumber: 851,
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
                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                        lineNumber: 854,
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
                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                            lineNumber: 873,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                        lineNumber: 865,
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
                                    id: "atbSigGrad",
                                    x1: "0",
                                    y1: "0",
                                    x2: "1",
                                    y2: "0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0",
                                            stopColor: "#c98a3e",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                                            lineNumber: 880,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0.5",
                                            stopColor: "#c98a3e"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                                            lineNumber: 881,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "#c98a3e",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                                            lineNumber: 882,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 879,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                lineNumber: 878,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M6 12 C 62 4, 118 19, 152 11 C 186 4, 236 17, 294 10",
                                stroke: "url(#atbSigGrad)",
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
                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                lineNumber: 885,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                        lineNumber: 877,
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
                                children: "Algorithmic Thinking in Business"
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                lineNumber: 905,
                                columnNumber: 11
                            }, this),
                            " — every concept of the course, distilled into one warm, living page you can read, sketch and revise.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1 block",
                                children: "Written for the late-night revision, the last-minute panic, and the quiet joy of an algorithm that finally makes sense."
                            }, void 0, false, {
                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                lineNumber: 907,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                        lineNumber: 898,
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
                        children: "Course: Algorithmic Thinking in Business — Dr. Deepak Kumar Saxena · IIT Jodhpur"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                        lineNumber: 914,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "list",
                        "aria-label": "What this project contains",
                        className: "mt-4 flex flex-wrap items-center justify-center gap-2",
                        children: ATB_SIG_CHIPS.map((chip, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
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
                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                        lineNumber: 944,
                                        columnNumber: 15
                                    }, this),
                                    chip.label
                                ]
                            }, chip.label, true, {
                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                lineNumber: 931,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                        lineNumber: 925,
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
                        children: "shelf 02 · the atlas — crafted with next.js · react · tailwind — mmxxvi"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                        lineNumber: 951,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbApp.tsx",
                lineNumber: 853,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 838,
        columnNumber: 5
    }, this);
}
_c5 = AtbFooter;
function AtbApp({ onExitAtlas }) {
    _s3();
    const [lectureId, setLectureId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATB_DEFAULT_LECTURE"]);
    const [examGroup, setExamGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hubOpen, setHubOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lectureIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(lectureId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AtbApp.useEffect": ()=>{
            lectureIdRef.current = lectureId;
        }
    }["AtbApp.useEffect"], [
        lectureId
    ]);
    const lecture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lectureById"])(lectureId) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATB_LECTURES"][0];
    const seen = useSeenDisplay(lecture);
    /* pick a lecture from the hero sequence (or the pager) and bring
     the notes into view — "the lecture number 1 notes will be
     available below", literally */ const selectLecture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AtbApp.useCallback[selectLecture]": (id)=>{
            setLectureId(id);
            requestAnimationFrame({
                "AtbApp.useCallback[selectLecture]": ()=>requestAnimationFrame({
                        "AtbApp.useCallback[selectLecture]": ()=>{
                            const el = document.getElementById("notes-top");
                            if (!el) return;
                            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                            el.scrollIntoView({
                                behavior: reduce ? "auto" : "smooth",
                                block: "start"
                            });
                        }
                    }["AtbApp.useCallback[selectLecture]"])
            }["AtbApp.useCallback[selectLecture]"]);
        }
    }["AtbApp.useCallback[selectLecture]"], []);
    /* chapter jumps — from the nav menus or the ⌘K palette. If the
     chapter belongs to another lecture, switch first, wait for the
     render, then run the standard flash-jump */ const goToChapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AtbApp.useCallback[goToChapter]": (chapterId)=>{
            const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lectureOfChapter"])(chapterId);
            if (!target) return;
            const scrollWhenReady = {
                "AtbApp.useCallback[goToChapter].scrollWhenReady": ()=>{
                    let frames = 0;
                    const tick = {
                        "AtbApp.useCallback[goToChapter].scrollWhenReady.tick": ()=>{
                            const el = document.getElementById(chapterId);
                            if (el) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$open$2d$section$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jumpTo"])(el);
                                return;
                            }
                            if (++frames < 240) requestAnimationFrame(tick);
                        }
                    }["AtbApp.useCallback[goToChapter].scrollWhenReady.tick"];
                    requestAnimationFrame(tick);
                }
            }["AtbApp.useCallback[goToChapter].scrollWhenReady"];
            if (lectureIdRef.current === target.id) {
                scrollWhenReady();
                return;
            }
            setLectureId(target.id);
            requestAnimationFrame({
                "AtbApp.useCallback[goToChapter]": ()=>requestAnimationFrame(scrollWhenReady)
            }["AtbApp.useCallback[goToChapter]"]);
        }
    }["AtbApp.useCallback[goToChapter]"], []);
    /* ⌘K handoffs (queued + live) route through the lecture-aware jumper */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$open$2d$section$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenSection"])("atb", goToChapter);
    const openExam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AtbApp.useCallback[openExam]": (g)=>setExamGroup(g)
    }["AtbApp.useCallback[openExam]"], []);
    const openHub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AtbApp.useCallback[openHub]": ()=>setHubOpen(true)
    }["AtbApp.useCallback[openHub]"], []);
    return(// id="top" — the brand chip links to #top; without a real element here the
    // client-side router swallows the fragment and the page never scrolls back
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "top",
        className: "page-wrap warm-canvas",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TopNav, {
                onOpenExam: openExam,
                onExitAtlas: onExitAtlas,
                onJumpChapter: goToChapter,
                seen: seen
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbApp.tsx",
                lineNumber: 1031,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pt-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                        label: "Hero",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbParts1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtbHero"], {
                            activeId: lectureId,
                            onSelect: selectLecture,
                            onPractice: openHub,
                            seen: seen,
                            totalQuestions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ATB_TOTAL_QUESTIONS"]
                        }, void 0, false, {
                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                            lineNumber: 1034,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                        lineNumber: 1033,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "notes-top",
                        "aria-hidden": true,
                        className: "relative scroll-mt-16"
                    }, void 0, false, {
                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                        lineNumber: 1044,
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
                                lecture.chapters.length > 0 ? lecture.chapters.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$PartBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartBoundary"], {
                                        label: c.label,
                                        children: SECTION_COMPONENTS[c.id]
                                    }, c.id, false, {
                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                        lineNumber: 1054,
                                        columnNumber: 17
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto max-w-3xl px-4 py-16 sm:px-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-warm p-8 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "chip mx-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__["Hourglass"], {
                                                        className: "h-3.5 w-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                        lineNumber: 1062,
                                                        columnNumber: 21
                                                    }, this),
                                                    " Slot reserved"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                lineNumber: 1061,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mt-4 text-2xl font-extrabold text-[#3e2c1d]",
                                                children: [
                                                    "Lecture ",
                                                    lecture.n,
                                                    " hasn’t been summarised yet"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                lineNumber: 1064,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mx-auto mt-3 max-w-md text-[.92rem] leading-relaxed text-muted-warm",
                                                children: "This lecture’s notes haven’t been uploaded, so the shelf keeps the slot open. The moment its summary arrives, the chapters fill in right here — diagrams, machines and all."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/atb/AtbApp.tsx",
                                                lineNumber: 1067,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                                        lineNumber: 1060,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 1059,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LecturePager, {
                                    current: lecture,
                                    onJump: selectLecture
                                }, void 0, false, {
                                    fileName: "[project]/src/components/atb/AtbApp.tsx",
                                    lineNumber: 1075,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/atb/AtbApp.tsx",
                            lineNumber: 1047,
                            columnNumber: 11
                        }, this)
                    }, lecture.id, false, {
                        fileName: "[project]/src/components/atb/AtbApp.tsx",
                        lineNumber: 1046,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/atb/AtbApp.tsx",
                lineNumber: 1032,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AtbFooter, {}, void 0, false, {
                fileName: "[project]/src/components/atb/AtbApp.tsx",
                lineNumber: 1079,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PracticeHub, {
                open: hubOpen,
                onClose: ()=>setHubOpen(false),
                onOpenExam: openExam
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbApp.tsx",
                lineNumber: 1080,
                columnNumber: 7
            }, this),
            examGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$atb$2f$AtbExamWindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AtbExamWindow"], {
                group: examGroup,
                onClose: ()=>setExamGroup(null)
            }, void 0, false, {
                fileName: "[project]/src/components/atb/AtbApp.tsx",
                lineNumber: 1081,
                columnNumber: 20
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/atb/AtbApp.tsx",
        lineNumber: 1030,
        columnNumber: 5
    }, this));
}
_s3(AtbApp, "jSvRS41OG5dry5ojbfG9vpPI1SI=", false, function() {
    return [
        useSeenDisplay,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$use$2d$open$2d$section$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenSection"]
    ];
});
_c6 = AtbApp;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "FLAT_ITEMS$GROUPS.flatMap");
__turbopack_context__.k.register(_c1, "FLAT_ITEMS");
__turbopack_context__.k.register(_c2, "TopNav");
__turbopack_context__.k.register(_c3, "PracticeHub");
__turbopack_context__.k.register(_c4, "LecturePager");
__turbopack_context__.k.register(_c5, "AtbFooter");
__turbopack_context__.k.register(_c6, "AtbApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_atb_AtbApp_tsx_c8e3d6d9._.js.map